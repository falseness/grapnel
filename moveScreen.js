class Screen
{
    constructor()
    {
        //constants
        this.whenceMove = 0.35 * width
        
        
        
        this.speed = 0
    }
    isMoving()
    {
        return this.speed
    }
    move()
    {
        /*for (let i = sides.length; i < sprites.length; ++i)
        {
            sprites[i].speedX = this.speed
        }*/
        deltaX += this.speed
        
        ninja.x += this.speed
        
        for (let i = 0; i < grapnel.pos.length; ++i)
        {
            grapnel.pos[i][0] += this.speed
        }
        grapnel.x += this.speed
    }
    shouldStartMove()
    {
        if (ninja.x > this.whenceMove && ninja.speedX > 0)
        {
            this.speed = -ninja.speedX
            return true
        }
        this.speed = 0
        return false
    }
}

let screen = new Screen()


