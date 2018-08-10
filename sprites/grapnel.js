const grapnelSpeed = 0.018891687657430732 * height
const grappleSpeed = 0.00025188916876574307 * height

class Grapnel extends Sprite
{
    constructor(object)
    {
        super(object)
        this.throwed = false
    }
    move()
    {
        if (this.throwed)
        {
            this.x += this.speedX
            this.y += this.speedY
        }
    }
    calcSpeed(direction)
    {
        let dx = direction.x - ninja.x
        let dy = direction.y - ninja.y
        let distance = Math.sqrt(Math.pow(dx, 2) + Math.pow(dy, 2))
        
        let sin = dy / distance
        let cos = dx / distance
        
        return {sin: sin, cos: cos}
        
    }
    collision()
    {
        let grapnelLine = lineFormula(this.object.attrs.points[0], this.object.attrs.points[1],
                                this.object.attrs.points[2], this.object.attrs.points[3])
        for (let i = 0; i < sprites.length; ++i)
        {
            let points = sprites[i].points
            
            for (let j = 0; j <= points.length / 2; j += 2)
            {
                let line = lineFormula(points[j], points[j + 1],
                                points[j + 2], points[j + 3])
                this.grapple(linesCollision(grapnelLine, line))
            }
            let line = lineFormula(points[points.length - 2], points[points.length - 1],
                                points[0], points[1])
            this.grapple(linesCollision(grapnelLine, line))
                
        }
    }
    grapple(coords)
    {
        if (coords)
        {
            this.x = coords.x
            this.y = coords.y
            this.speedX = 0
            this.speedY = 0
            //screen.shouldStartMoveByGrapnel()
        }
    }
    grappled()
    {
        return (this.speedX == 0 && this.speedY == 0 && grapnel.throwed)
    }
}