
//  Много чего перепробовал, но в этом задании проблемы с импортом PixiJS, поэтому не соберётся :(
//     Uncaught TypeError: Cannot read properties of undefined (reading 'canvas') 
const app = new PIXI.Application({ 
    width: 800, 
    height: 600,
    backgroundColor: 0x1099bb 
});

document.body.appendChild(app.view);

const rectangle = new PIXI.Graphics();
rectangle.beginFill(0xFFFFFF);
rectangle.drawRect(0, 0, 200, 100);
rectangle.endFill();
rectangle.x = app.screen.width / 2;
rectangle.y = app.screen.height / 2;
rectangle.pivot.x = 100; 
rectangle.pivot.y = 50;
app.stage.addChild(rectangle);

app.ticker.add((delta) => {
    rectangle.rotation += 0.01 * delta;
});

