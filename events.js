function createEvents()
{
    stage.on('mousedown', function()
    {
        if (grapnel.throwed)
        {
            grapnel.x = NaN
            grapnel.y = NaN
        }
        else
        {
            grapnel.x = ninja.x
            grapnel.y = ninja.y
            let ratio = grapnel.calcSpeed(stage.getPointerPosition())
            grapnel.speedY = ratio.sin * grapnelSpeed
            grapnel.speedX = ratio.cos * grapnelSpeed
        }
        grapnel.throwed = !grapnel.throwed
    })
}