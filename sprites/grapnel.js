const grapnelSpeed = 0.018891687657430732 * height * 2
const grappleSpeed = 0.00025188916876574307 * height

class Grapnel extends Sprite
{
    constructor(object)
    {
        super(object)
        this.throwed = false
        
        this.grappled = false
        this.pos = []
    }
    move()
    {
        if (this.throwed)
        {
            for (let i = 0; i < this.pos.length; ++i)
            {
                if (this.pos[i][2].isEmpty())
                {
                    this.pos[i][0] += this.speedX
                    this.pos[i][1] += this.speedY
                }
            }
            
            for (let i = 0; i < this.pos.length; ++i)
            {
                this.pos[i][1] += this.pos[i][2].speedY
            }
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
        for (let q = 1; q <= this.pos.length; ++q)
        {
            let grapnelLine
            if (q == this.pos.length)
                grapnelLine = lineFormula(ninja.x, ninja.y, this.pos[this.pos.length - 1][0], this.pos[this.pos.length - 1][1])
            else
                grapnelLine = lineFormula(this.pos[q - 1][0], this.pos[q - 1][1], this.pos[q][0], this.pos[q][1])
            
            for (let i = 0; i < sprites.length; ++i)
            {
                if (circlesIntersect(grapnelLine.circle, sprites[i].getCircumscribedCircle()))
                {
                    let lines = sprites[i].getLines()
                    for (let j = 0; j < lines.length; ++j)
                    {
                        this.grapple(linesCollision(grapnelLine, lines[j]), sprites[i], q)
                    }
                }
            }
        }
    }
    correctToCornerOfSprite(x, y, points, eps)
    {
        for (let i = 0; i < points.length; i += 2)
        {
            if (isPointsEqually([x, y], [points[i], points[i + 1]], eps))
                return {x: points[i], y: points[i + 1]}
        }
        return {x: x, y: y}
    }
    pointsIsOnOneLine(point1, point2, point3)
    {
        let line = lineFormula(point1[0], point1[1], point2[0], point2[1])
        return pointIsOnStraight({x: point3[0], y: point3[1]}, line)
    }
    grapple(coords, sprite, index)
    {
        if (coords.x && coords.y)
        {
            const correctCornerEps = 6
            const firstPointEps = 50
            coords = this.correctToCornerOfSprite(coords.x, coords.y, sprite.getPoints(), correctCornerEps)
            
            this.grappled = true
            if  (
                    index == 1                                                          && 
                    this.pos[0][2].isEmpty()                                            && 
                    isPointsEqually(this.pos[0], [coords.x, coords.y], firstPointEps)
                )
            {
                this.pos[0] = [coords.x, coords.y, sprite]
            }
            else if (this.pos.length == index)
            {
                if      (
                            index - 2 >= 0                  &&
                            this.pointsIsOnOneLine
                                (
                                    this.pos[index - 2], 
                                    this.pos[index - 1],
                                    [coords.x, coords.y]
                                )
                        )
                    this.pos.pop()
                    
                this.pos.push([coords.x, coords.y, sprite])
            }
            else 
            { 
                if      (
                            this.pointsIsOnOneLine
                                (
                                    this.pos[index - 1] , 
                                    this.pos[index]     ,
                                    [coords.x, coords.y]
                                )
                        )
                    return

                this.pos.splice(index, 0, [coords.x, coords.y, sprite])
            }
        }
    }
    getObjectPoints()
    {
        let res = []
        for (let i = 0; i < this.pos.length; ++i)
        {
            res.push(Math.floor(this.pos[i][0]), Math.floor(this.pos[i][1]))
        }
        res.push(Math.floor(ninja.x), Math.floor(ninja.y))
        return res
    }
    isGrappled()
    {
        return this.grappled
    }
    setGrappled(boolean)
    {
        this.grappled = boolean
    }
}