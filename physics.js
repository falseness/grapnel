const GRAVITY = 0.00006297229219143577 * height

function physics()
{
    ninja.speedY += GRAVITY
    
    if (screen.shouldStartMove())
        screen.move()
    else 
    {
        //moveY есть в screen.move() для оптимизации, поэтому else
        for (let i = sides.length; i < elements.length; ++i)
        {
            elements[i].moveY()
        }
    }
    
    
    ninja.move()
    ninja.collision()
    
    grapnel.move()
    if (grapnel.throwed)
    {
        if (grapnel.isGrappled())
        {
            let ratio = grapnel.calcSpeed({x: grapnel.pos[grapnel.pos.length - 1][0], y: grapnel.pos[grapnel.pos.length - 1][1]})
            ninja.speedX += grappleSpeed * ratio.cos
            ninja.speedY += grappleSpeed * ratio.sin
        }
        grapnel.collision()
    }
    deleteElements()
}

