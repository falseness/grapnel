let draw = 
{
    ninja: new Konva.Animation(function(frame) 
    {
        ninja.object.setX(ninja.x)
        ninja.object.setY(ninja.y)
    }, layer.ninja),
    grapnel: new Konva.Animation(function(frame)
    {
        grapnel.object.points(
            [Math.floor(ninja.x), Math.floor(ninja.y), Math.floor(grapnel.x), Math.floor(grapnel.y)])
    }, layer.grapnel),
    obstacles: new Konva.Animation(function(frame)
    {
        for (let i = sides.length; i < sprites.length; ++i)
        {
            sprites[i].object.points(sprites[i].points)
        }
    }, layer.obstacles)
}
function drawStaticLayers()
{
    layer.static.draw()
    layer.mechanics.draw()
}
function drawMechanicsLines()
{
    let mechanicsOptions = 
    {
        color: 'green',
        lineJoin: 'round'
    }
    let mechanics = 
    [
        {
            points: [screen.whereMove, 0.2 * height, screen.whereMove, 0.8 * height],
            strokeWidth: 3,
            opacity: 1
        },
        {
            points: [screen.whenceMove, 0.2 * height, screen.whenceMove, 0.8 * height],
            strokeWidth: 3,
            opacity: 0.5
        },
        {
            points: [screen.lastBarrierMove, 0.2 * height, screen.lastBarrierMove, 0.8 * height],
            strokeWidth: 5,
            opacity: 1
        }
    ]
    for (let i = 0; i < mechanics.length; ++i)
    {
        layer.mechanics.add(new Konva.Line(
        {
            points: mechanics[i].points, 
            stroke: mechanicsOptions.color,
            strokeWidth: mechanics[i].strokeWidth,
            lineJoin: mechanicsOptions.lineJoin,
            opacity: mechanics[i].opacity
        }))
    }
}
function startDrawAnimations()
{
    for (i in draw)
    {
        draw[i].start()
    }
}
