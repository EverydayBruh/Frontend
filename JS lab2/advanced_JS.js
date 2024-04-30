function showPageReloadCount() {
  let pageLoadCount = localStorage.getItem('pageLoadCount') || 0;
  pageLoadCount++;
  localStorage.setItem('pageLoadCount', pageLoadCount);
  alert(`Вы загрузили эту страницу ${pageLoadCount} раз.`);
}


function loadImage(url) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = () => reject(new Error('Failed to load image'));
    img.src = url;
  });
}

function addErrorMessage() {
  const errorMessage = document.createElement('p');
  errorMessage.textContent = "Can't load image";
  document.body.appendChild(errorMessage);
}

function addImage(img) {
  document.body.appendChild(img);
}

function loadImagesInOrder() {
  const urlsString = prompt("Введите 5 URL изображений, разделенных пробелом:", example_urls);
  const urls = urlsString.split(" ");
  const loadPromises = urls.map(url => loadImage(url));
  
  console.log(loadPromises);
  Promise.allSettled(loadPromises)
    .then(results => {
      results.forEach(result => {
        if (result.status === 'rejected') {
          addErrorMessage(result.reason.message);
        } else {
          addImage(result.value);
        }
      });
    })
    .catch(error => {
      console.error('An error occurred:', error);
    });
}


function LoadImagesWithoutOrder() {
  const urlsString = prompt("Введите 5 URL изображений, разделенных пробелом:", example_urls);
  const urls = urlsString.split(" ");

  urls.forEach(url => {
    loadImage(url)
      .then(img => addImage(img))
      .catch(() => addErrorMessage());
  });
}





async function loadImagesInOrderAsync() {
  const urlsString = prompt("Введите 5 URL изображений, разделенных пробелом:", example_urls);
  const urls = urlsString.split(" ");

  for (const url of urls) {
    try {
      const img = await loadImage(url);
      addImage(img);
    } catch (error) {
      addErrorMessage(error.message);
    }
  }
}

async function LoadImagesWithoutOrderAsync() {
  const urlsString = prompt("Введите 5 URL изображений, разделенных пробелом:", example_urls);
  const urls = urlsString.split(" ");

  urls.forEach(async url => {
    try {
      const img = await loadImage(url);
      addImage(img);
    } catch {
      addErrorMessage();
    }
  });
}



async function validateAccessByIp() {
  const restrictedCountries = ['Russia', 'Belarus', 'Afghanistan', 'China', 'Venezuela', 'Iran'];
  const userInput = prompt("Введите 5 IP-адресов через пробел:", example_ips_legit);
  const ipList = userInput.split(' ');

  try {
    const promises = ipList.map(ip => 
      fetch(`https://json.geoiplookup.io/${ip}`)
        .then(response => {
          if (!response.ok) throw new Error('Failed to fetch IP data');
          return response.json();
        })
        .then(ipData => {
          if (restrictedCountries.includes(ipData.country_name)) {
            throw new Error(`Доступ запрещён из страны: ${ipData.country_name} (IP: ${ip})`);
          }
          return ipData;
        })
    );

    await Promise.all(promises);
    alert("Добро пожаловать на наш сайт!");
  } catch (error) {
    console.error('Error checking IP addresses:', error);
    alert(error.message);
  }
}



const example_urls = "https://img.pixers.pics/pho_wat(s3:700/FO/57/91/04/63/700_FO57910463_40f1426f21ce28a77864f83931f0b682.jpg,700,700,cms:2018/10/5bd1b6b8d04b8_220x50-watermark.png,over,480,650,jpg)/posters-fire-alphabet-number-1-one.jpg.jpg https://i.pinimg.com/474x/6c/e4/22/6ce42297270999fe71b149bbfb23e0dc.jpg https://i.cbc.ca/1.6979706.1695828636!/fileImage/httpImage/image.jpg_gen/derivatives/16x9_780/1890767731.jpg https://static.toiimg.com/thumb/msid-104753974,width-1280,height-720,resizemode-4/104753974.jpg https://img.freepik.com/premium-photo/a-colorful-number-5-is-printed-in-a-graphic-style_853177-629.jpg"
const example_ips_legit = "81.214.194.111 113.182.150.44 199.88.121.206 16.195.21.76 170.171.1.0"
const example_ips_nolegit = "46.17.46.213 113.182.150.44 199.88.121.206 16.195.21.76 113.98.171.77"