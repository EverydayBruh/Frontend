function testDeepCopyObject(){
    const originalObject = {
        a: 1,
        b: { c: 2, d: [3, 4] },
        e: [ { f: 5 }, { g: 6 } ]
    };
    const copiedObject = deepCopyObject(originalObject);
    console.log(copiedObject); 
}

function deepCopyObject(obj) {
    if (typeof obj !== "object" || obj === null) {
        return obj;
    }
    let copy = Array.isArray(obj) ? [] : {};
    for (let key in obj) {
        const value = obj[key];
        copy[key] = deepCopyObject(value);
    }
    return copy;
}