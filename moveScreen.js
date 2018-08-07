class Screen
{
    constructor()
    {
        //constants
        this.whereMove = 0.2 * width
        this.whenceMove = 0.35 * width
        this.lastBarrierMove = 0.6 * width
        this.timeCoefficient = 50
        
        
        
        this.speed = 0
        this.acceleration = 0
        this.primaryDistance = 0
        this.currentDistance = 0
    }
    move()
    {
        this.speed += this.acceleration
        
        this.shouldReCalcAcceleration()
        this.shouldStopScreen()
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
    startMove()
    {
        this.primaryDistance = ninja.x - this.whereMove
        this.currentDistance = this.primaryDistance
        this.acceleration = calcPrimaryAcceleration(this.timeCoefficient, 0, -this.primaryDistance)
    }
    shouldStartMoveByGrapnel()
    {
        if (ninja.x > this.whenceMove && Math.abs(screen.speed) < minimumDeltaRealNumber)
            this.startMove()
    }
    shouldStartMoveByBarrier()
    {
        if (ninja.x > this.lastBarrierMove)// && Math.abs(screen.speed) < minimumDeltaRealNumber)
            this.startMove()
    }
    shouldReCalcAcceleration()
    {
        if (this.currentDistance < this.primaryDistance / 2 && this.acceleration < 0)
            this.acceleration = calcFiniteAcceleration(this.speed, 0, this.currentDistance)
    }
    shouldStopScreen()
    {
        if (this.speed > 0)
        {
            this.acceleration = 0
            this.speed = 0
        }
    }
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
