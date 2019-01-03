function createEvents()
{
    function throwGrapnel(event)
    {
        grapnel.pos = [[ninja.x, ninja.y, new Empty()]]
        let ratio = grapnel.calcSpeed(mouseCoords(event))
        grapnel.speedY = ratio.sin * grapnelSpeed// + ninja.speedY
        grapnel.speedX = ratio.cos * grapnelSpeed// + ninja.speedX    
        
        grapnel.throwed = true
        grapnel.grappled = false    
    }
    function pickUpGrapnel()
    {   
        grapnel.setGrappled(false)
        grapnel.throwed = false
    }
    
    document.addEventListener('mousedown', throwGrapnel)
    document.addEventListener('mouseup', pickUpGrapnel)
    
    document.addEventListener('touchstart', throwGrapnel)
    document.addEventListener('touchend', pickUpGrapnel)
}
function mouseCoords(event)
{
    let rect = canvas.getBoundingClientRect()
    return {x: event.clientX - rect.left, y: event.clientY - rect.top}
}
