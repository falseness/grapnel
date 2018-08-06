class Screen
{
    constructor()
    {
        //constants
        this.whereMove = 0.3 * width
        this.whenceMove = 0.5 * width
        this.lastBarrierMove = 0.8 * width
        this.timeCoefficient = 50
        
        
        this.speed = 0
        this.acceleration = 0
        this.primaryDistance = 0
        this.currentDistance = 0
    }
    move()
    {
        this.speed += this.acceleration
        
        if (screen.currentDistance < screen.primaryDistance / 2)
            screen.acceleration = calcFiniteAcceleration(screen.speed, 0, screen.currentDistance)
        if (Math.abs(screen.speed) < minimumDeltaRealNumber)
        {
            screen.acceleration = 0
            screen.speed = 0
            screen.move = 0
        }
        this.moveAllSprites()
    }
    moveAllSprites()
    {
        this.currentDistance += this.speed
        
        for (let i = sides.length; i < sprites.length; ++i)
        {
            sprites[i].speedX = this.speed
        }
        
        ninja.x += this.speed
        grapnel.x += this.speed
    }
}

function moveScreen()
{
    screen.speed += screen.acceleration
    screen.currentDistance += screen.speed
    
    
    
}
function calcFiniteAcceleration(v, v0, s)
{
    /* s = (v^2 - v0^2) / (2 * a)
    a = (v^2 - v0^2) / (2 * s)*/
    return ((Math.pow(v, 2) - Math.pow(v0, 2)) / (2 * s))
}
function calcPrimaryAcceleration(t, v0, s)
{
    /* s = v0 * t + (a * t ^ 2) / 2
    a = 2 * (s - v0 * t) / t ^ 2*/
    return (2 * (s - v0 * t) / Math.pow(t, 2))
}
function moveScreenToGrapnel()
{
    if (ninja.x > whenceMoveScreen)// && ninja.x > grapnel.x)
    {
        screen.primaryDistance = ninja.x - whereMoveScreen
        screen.currentDistance = screen.primaryDistance
        screen.acceleration = calcPrimaryAcceleration(screenTimeCoefficient, 0, -screen.primaryDistance)
    }
}
function lastBarrierBehindNinja()
{
    if (ninja.x > screen.lastBarrierMoveScreen)
    {
        screen.primaryDistance = ninja.x - whereMoveScreen
        screen.currentDistance = screen.primaryDistance
        screen.acceleration = calcPrimaryAcceleration(screenTimeCoefficient, 0, -screen.primaryDistance)
    }
}