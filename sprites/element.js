class Element
{
    constructor(object)
    {
        this.speedX = 0
        this.speedY = 0
        
        this.x      = object.x
        this.y      = object.y

        this.fill   = object.fill
        this.stroke = object.stroke
    }
    moveY()
    {
        
    }
    moveX(speed)
    {
        this.x += speed
    }
    isToRightThanEdgeOfScreen()
    {
        return this.getLeftPointX() > width
    }
    getX()
    {
        return this.x
    }
    getY()
    {
        return this.y
    }
    getLines()
    {
        let points = this.getPoints()
        let res = []
        for (let i = 1; i < points.length; ++i)
        {
            res.push(lineFormula(points[i - 1].x, points[i - 1].y, points[i].x, points[i].y))
        }
        
        res.push(lineFormula(points[points.length - 1].x, points[points.length - 1].y, points[0].x, points[0].y))
        
        return res
    }
    collision()
    {
        reStart()
    }
    isEmpty()
    {
        return false
    }
    isPairElement()
    {
        return false
    }
    delete(indexInArray, array)
    {
        array.splice(indexInArray, 1)
    }
    draw()
    {
        ctx.beginPath()
        
        let points = this.getPoints()
        ctx.moveTo(points[points.length - 1].x, points[points.length - 1].y)
        for (let i = 0; i < points.length; ++i)
        {
            ctx.lineTo(points[i].x, points[i].y)
        }
        
        ctx.fillStyle   = this.fill
        ctx.fill()
        
        ctx.strokeStyle = this.stroke
        ctx.stroke()
        
        ctx.closePath()
    }
}