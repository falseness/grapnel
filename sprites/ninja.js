class Ninja extends Sprite
{
    constructor(object)
    {
        super(object)
        this.radius = object.attrs.radius
        
    }
    collision()
    {
        for (let i = 0; i < sprites.length; ++i)
        {
            if (twoCirclesIntersect(this.x, this.y, this.radius, sprites[i].getCircumscribedCircle()))
            {
                let points = sprites[i].getPoints()
                let length = points.length
                for (let j = 0; j <= length - 4; j += 2)
                {
                    let line = lineFormula(points[j], points[j + 1],
                                        points[j + 2], points[j + 3])
                    if (this.collisionNinjaWithLine(line))
                        sprites[i].collision(this, line)
                }
                let line = lineFormula(points[length - 2], points[length - 1], points[0], points[1])
                if (this.collisionNinjaWithLine(line))
                    sprites[i].collision(this, line)
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
}