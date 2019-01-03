class Ninja
{
    constructor(object)
    {
        this.x      = object.x
        this.y      = object.y
        
        this.speedX = 0
        this.speedY = 0
        this.radius = object.radius
        
        this.fill   = object.fill
        this.stroke = object.stroke
    }
    collision()
    {
        for (let i = 0; i < elements.length; ++i)
        {
            if (twoCirclesIntersect(this.x, this.y, this.radius, elements[i].getCircumscribedCircle()))
            {
                let lines = elements[i].getLines()
                for (let j = 0; j < lines.length; ++j)
                {
                    if (this.collisionNinjaWithLine(lines[j]))
                        elements[i].collision(this, lines[j])
                }
            }
        }
    }
    collisionNinjaWithLine(line)
    {
        return collisionCircleWithLine(line, this.x, this.y, this.radius)
    }
    move()
    {
        this.x += this.speedX
        this.y += this.speedY
    }
    draw()
    {
        ctx.beginPath()
    
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
        
        ctx.fillStyle = this.fill
        ctx.fill()
        
        ctx.strokeStyle = this.stroke
        ctx.stroke()
        
        ctx.closePath()
    }
}