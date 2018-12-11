function createEvents()
{
    function throwGrapnel()
    {
        grapnel.x = ninja.x
        grapnel.y = ninja.y
        let ratio = grapnel.calcSpeed(stage.getPointerPosition())
        grapnel.speedY = ratio.sin * grapnelSpeed// + ninja.speedY
        grapnel.speedX = ratio.cos * grapnelSpeed + ninja.speedX
        
        layer.grapnel.add(grapnel.object)        
        
        grapnel.throwed = true
        grapnel.grappled = false    
    }
    function pickUpGrapnel()
    {
        //grapnel.x = NaN
        //grapnel.y = NaN
        
        grapnel.object.remove()
        
        grapnel.throwed = false
    }
    
    stage.on('mousedown', throwGrapnel)
    stage.on('mouseup', pickUpGrapnel)
    
    stage.on('touchstart', throwGrapnel)
    stage.on('touchend', pickUpGrapnel)
}
