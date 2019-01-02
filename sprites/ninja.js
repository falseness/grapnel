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
                let lines = sprites[i].getLines()
                for (let j = 0; j < lines.length; ++j)
                {
                    if (this.collisionNinjaWithLine(lines[j]))
                        sprites[i].collision(this, lines[j])
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
}