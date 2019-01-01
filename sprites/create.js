let ninja = new Ninja(new Konva.Circle({
    x: Math.floor(0.2 * width),
    y: Math.floor(0.2 * height),
    radius: Math.round(0.01 * height),
    fill: '#0000ff',
    stroke: '#000000',
    strokeWidth: 1,
    perfectDrawEnabled: false,
    transformsEnabled: 'position',
    listening: false
}))
ninja.object.cache()

let grapnel = new Grapnel(new Konva.Line({
    points: [0, 0, 0, 0],
    stroke: 'red',
    strokeWidth: Math.round(0.006 * height),
    lineJoin: 'round',
    perfectDrawEnabled: false,
    transformsEnabled: 'position',
    listening: false
}))

let scoreText = new Konva.Text({
        x: Math.floor(0.1 * width),
        y: Math.floor(0.02 * height),
        text: 'score: 0',
        fontSize: Math.floor(0.05 * height),
        fontFamily: 'Calibri',
        fill: 'blue',
        perfectDrawEnabled: false,
        transformsEnabled: 'position',
        listening: false
    })
scoreText.count = 0


let deltaX = 0

let rects = new Konva.Group(
{
    x:                  0           ,
    y:                  0           ,
    rotation:           0           ,
    perfectDrawEnabled: false       ,
    transformsEnabled: 'position'   ,
    listening:          false
})

let enemies = new Konva.Group(
{
    x: 0,
    y: 0,
    rotation: 0
})

let trampolines = new Konva.Group(
{
    x: 0,
    y: 0,
    rotation: 0
})

let sides = 
[
    {
        x: -width, 
        y: 0, 
        width: 3 * width, 
        height: 0.1 * height
    },
    {
        x: -width, 
        y: 0.9 * height, 
        width: 3 * width,
        height: 0.1 * height
    }
]
for (let i = 0; i < sides.length; ++i)
{
    const sidesColor = '#f0f0f0'
    sprites.push(new Side(createRectByModel(
    {
        x: sides[i].x, 
        y: sides[i].y,
        width: sides[i].width,
        height: sides[i].height,
        color: sidesColor
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