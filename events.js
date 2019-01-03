function createEvents()
{
    function throwGrapnel()
    {
        grapnel.pos = [[ninja.x, ninja.y, new Empty()]]
        let ratio = grapnel.calcSpeed(stage.getPointerPosition())
        grapnel.speedY = ratio.sin * grapnelSpeed// + ninja.speedY
        grapnel.speedX = ratio.cos * grapnelSpeed// + ninja.speedX
        
        grapnel.object.show()      
        
        grapnel.throwed = true
        grapnel.grappled = false    
    }
    function pickUpGrapnel()
    {
        grapnel.object.hide()
        
        grapnel.setGrappled(false)
        grapnel.throwed = false
    }
    
    stage.on('mousedown', throwGrapnel)
    stage.on('mouseup', pickUpGrapnel)
    
    stage.on('touchstart', throwGrapnel)
    stage.on('touchend', pickUpGrapnel)
}
