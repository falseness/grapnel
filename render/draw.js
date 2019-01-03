 function draw()
{
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    grapnel.draw()
    ninja.draw()
    
    for (let i = sides.length; i < elements.length; ++i)
    {
        elements[i].draw()
    }
    for (let i = 0; i < sides.length; ++i)
    {
        elements[i].draw()
    }
    scoreText.draw()
}
/*let draw = 
{
    ninja: new Konva.Animation(function(frame) 
    {
        ninja.object.setX(Math.floor(ninja.x))
        ninja.object.setY(Math.floor(ninja.y))
    }, layer.ninja),
    grapnel: new Konva.Animation(function(frame)
    {
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
}*/
