class Triangle extends Element
{
    constructor(object)
    {
        super(object)
    
        this.deltaY =   0
        this.speedY =   0.005 * height
        this.side   =   this.object.attrs.radius * Math.sqrt(3)
        this.height =   this.side * Math.sin(Math.PI / 3)
    }
    getCircumscribedCircle()
    {
        return {x: this.x + deltaX, y: this.y + this.deltaY, radius: this.object.attrs.radius}
    }
    move()
    {
        this.changeSpeed()
        this.deltaY += this.speedY
    }
    getY()
    {
        return this.y + this.deltaY
    }
    getRightPointX()
    {
        return this.getX() + this.side / 2
    }
    getTopPointY()
    {
        return this.getY() - this.height * 1 / 3
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