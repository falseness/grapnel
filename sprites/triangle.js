class Triangle extends Element
{
    constructor(object)
    {
        super(object)
    
        this.speedY =   0.005 * height
        this.side   =   this.object.attrs.radius * Math.sqrt(3)
        this.height =   this.side * Math.sin(Math.PI / 3)
        
        let points = this.getPoints()
        
        this.lines = [lineFormula(points[points.length - 2], points[points.length - 1], points[0], points[1])]
        
        for (let i = 0; i <= points.length - 4; i += 2)
        {
            this.lines.push(lineFormula(points[i], points[i + 1], points[i + 2], points[i + 3]))
        }
        
    }
    getCircumscribedCircle()
    {
        return {x: this.x, y: this.y, radius: this.object.attrs.radius}
    }
    moveY()
    {
        this.changeSpeed()
        this.y += this.speedY
        this.moveLinesY()
    }
    moveLinesY()
    {
        for (let i = 0; i < this.lines.length; ++i)
        {
            this.lines[i].y1        += this.speedY
            this.lines[i].y2        += this.speedY
            this.lines[i].circle.y  += this.speedY
            this.lines[i].b         += this.speedY
        }
    }
    getRightPointX()
    {
        return this.getX() + this.side / 2
    }
    getLeftPointX()
    {
        return this.getX() - this.side / 2
    }
    getTopPointY()
    {
        return this.getY() - this.height * (1 / 3)
    }
    getBottomPointY()
    {
        return this.getY() + this.height * (2 / 3)
    }
    getPoints()
    {
        let x = this.getX()
        let y = this.getY()
        
        let points = 
        [
            x - this.side / 2   , y - this.height * (1 / 3),
            x + this.side / 2   , y - this.height * (1 / 3),
            x                   , y + this.height * (2 / 3)
        ]
        return points
    }
    changeSpeed()
    {
        if (this.getTopPointY() < triangleRestriction.top || this.getBottomPointY() > triangleRestriction.bottom)
            this.speedY *= -1
    }
    moveObjectY()
    {
        this.object.setY(this.getY())
    }
}