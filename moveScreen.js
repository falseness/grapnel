class Screen
{
    constructor()
    {
        //constants
        this.borderX        = 0.35 * width
        
        this.topBorderY     = 0.3 * height
        this.bottomBorderY  = height * 0.7
        
        this.speedX         = 0
        this.speedY         = 0
    }
    isMoving()
    {
        return this.speed
    }
    move()
    {
        for (let i = sides.length; i < elements.length; ++i)
        {
            elements[i].moveX(this.speedX)
            
            elements[i].moveY() // оптимизация
           // elements[i].moveY(this.speedY) 
        }
        
        ninja.x += this.speedX
        ninja.y += this.speedY
        
        
        for (let i = 0; i < grapnel.pos.length; ++i)
        {
            grapnel.pos[i][0] += this.speedX
            grapnel.pos[i][1] += this.speedY
        }
        
    }
    shouldStartMove()
    {
        return this.shouldStartMoveX()// || this.shouldStartMoveY()
    }
    shouldStartMoveX()
    {
        if (ninja.x > this.borderX && ninja.speedX > 0)
        {
            this.speedX = -ninja.speedX
            return true
        }
        this.speedX = 0
        return false
    }
    shouldStartMoveY()
    {
        if (ninja.y > this.bottomBorderY && ninja.speedY > 0)
        {
            this.speedY = -ninja.speedY
            return true
        }
        if (ninja.y < this.topBorderY && ninja.speedY < 0)
        {
            this.speedY = -ninja.speedY
            return true
        }
        this.speedY = 0
        return false
    }
}

let screen = new Screen()


