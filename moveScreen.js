class Screen
{
    constructor()
    {
        //constants
        this.whenceMove = 0.35 * width
        
        
        
        this.speed = 0
    }
    move()
    {
        for (let i = sides.length; i < sprites.length; ++i)
        {
            sprites[i].speedX = this.speed
        }
        obstacles.posX += this.speed
        
        ninja.x += this.speed
        grapnel.x += this.speed
    }
    shouldStartMove()
    {
        if (ninja.x > this.whenceMove && ninja.speedX > 0)
            this.speed = -ninja.speedX
        else
            this.speed = 0
    }
}

let screen = new Screen()


