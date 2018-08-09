function createEvents()
{
    function throwGrapnel()
    {
        grapnel.x = ninja.x
        grapnel.y = ninja.y
        let ratio = grapnel.calcSpeed(stage.getPointerPosition())
        grapnel.speedY = ratio.sin * grapnelSpeed
        grapnel.speedX = ratio.cos * grapnelSpeed
        
        grapnel.throwed = true
    }
    function pickUpGrapnel()
    {
        grapnel.x = NaN
        grapnel.y = NaN
        
        grapnel.throwed = false
    }
    
    stage.on('mousedown', throwGrapnel)
    stage.on('mouseup', pickUpGrapnel)
    
    stage.on('touchstart', throwGrapnel)
    stage.on('touchend', pickUpGrapnel)
}
