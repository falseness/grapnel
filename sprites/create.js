let ninja = new Ninja(new Konva.Circle({
    x: Math.floor(0.2 * width),
    y: Math.floor(0.2 * height),
    radius: Math.round(0.01 * height),
    fill: '#0000ff',
    stroke: '#000000',
    strokeWidth: 1
}))
let grapnel = new Grapnel(new Konva.Line({
    points: [0, 0, 0, 0],
    stroke: 'red',
    strokeWidth: Math.round(0.006 * height),
    lineJoin: 'round'
}))

let objectsColor = '#f0f0f0'

let sides = 
[
    {
        x: 0, 
        y: 0, 
        width: width, 
        height: 0.1 * height
    },
    {
        x: 0, 
        y: 0.9 * height, 
        width: width,
        height: 0.1 * height
    }
]
for (let i = 0; i < sides.length; ++i)
{
    sprites.push(new Sprite(new Konva.Line({
      points: floorPoints([sides[i].x, sides[i].y, 
              sides[i].x + sides[i].width, sides[i].y, 
              sides[i].x + sides[i].width, sides[i].y + sides[i].height,
              sides[i].x, sides[i].y + sides[i].height]),
      fill: objectsColor,
      stroke: 'black',
      strokeWidth: 1,
      closed: true
    })))
}

function floorPoints(points)
{
    let resPoints = []
    for (let i = 0; i < points.length; ++i)
    {
        resPoints.push(Math.floor(points[i]))
    }
    return resPoints
}