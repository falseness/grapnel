let draw = 
{
    ninja: new Konva.Animation(function(frame) 
    {
        ninja.object.setX(Math.floor(ninja.x))
        ninja.object.setY(Math.floor(ninja.y))
    }, layer.ninja),
    grapnel: new Konva.Animation(function(frame)
    {
        /*if (!grapnel.throwed)
            return false*/
        grapnel.object.points(grapnel.getObjectPoints())
    }, layer.grapnel),
    rects: new Konva.Animation(function(frame)
    {
        if (!screen.isMoving())
            return false
    }, layer.rects),
    triangles: new Konva.Animation(function(frame)
    {
        if (!screen.isMoving())
        {
            for (let i = sides.length; i < sprites.length; ++i)
            {
                if (sprites[i].isToRightThanEdgeOfScreen())
                    sprites[i].hide()
                else
                    {
                        sprites[i].moveObjectY()
                        
                        sprites[i].show()
                    }
            }
        }
        else
        {
            for (let i = sides.length; i < sprites.length; ++i)
            {
                if (sprites[i].isToRightThanEdgeOfScreen())
                    sprites[i].hide()
                else
                {
                    sprites[i].moveObjectX()
                    sprites[i].moveObjectY()
                    
                    sprites[i].show()
                }                    
            }
        }
    }, layer.triangles),
    trampolines: new Konva.Animation(function(frame)
    {
        if (!screen.isMoving())
            return false
    }, layer.trampolines)
}
function drawStaticLayers()
{
    layer.static.draw()
    layer.mechanics.draw()
}
function drawElementsFirstTime()
{
    layer.rects.draw()
    layer.triangles.draw()
    layer.trampolines.draw()
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
            points: floorPoints([screen.whenceMove, 0.2 * height, screen.whenceMove, 0.8 * height]),
            strokeWidth: 3,
            opacity: 0.5
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
    drawElementsFirstTime()
    layer.scoreText.draw()
    
    for (i in draw)
    {
        draw[i].start()
    }
}
