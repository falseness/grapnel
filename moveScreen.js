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
        enemies.posX += this.speed
        
        ninja.x += this.speed
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


