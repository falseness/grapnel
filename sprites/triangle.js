class Triangle extends Element
{
    constructor(object)
    {
        super(object)
    
        this.speedY =   0.005 * height
        this.side   =   object.radius * Math.sqrt(3)
        this.height =   this.side * Math.sin(Math.PI / 3)
        this.radius = object.radius
        
        let points = this.getPoints()
        
        this.lines = [lineFormula(points[points.length - 2], points[points.length - 1], points[0], points[1])]
        
        for (let i = 0; i <= points.length - 4; i += 2)
        {
            this.lines.push(lineFormula(points[i], points[i + 1], points[i + 2], points[i + 3]))
        }
        
    }
    getCircumscribedCircle()
    {
        return {x: this.x, y: this.y, radius: this.radius}
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
    draw()
    {
        ctx.beginPath()
        
        ctx.moveTo(this.lines[0].x1, this.lines[0].y1)
        for (let i = 1; i < this.lines.length; ++i)
        {
            ctx.lineTo(this.lines[i].x1, this.lines[i].y1)
        }
        ctx.lineTo(this.lines[0].x1, this.lines[0].y1)
        
        ctx.fillStyle   = this.fill
        ctx.fill()
        
        ctx.strokeStyle = this.stroke
        ctx.stroke()
    }
}
const radius = height * 0.15 / Math.sqrt(3)
const triangleRestriction = 
{
    top: sides[0].y + sides[0].height + 0.01 * height,
    bottom: sides[1].y - 0.01 * height
}

function generateTriangle(x)
{    
    
    let model = 
    {
        x: x + radius * Math.sqrt(3)                                                    ,
        y: random(triangleRestriction.top + radius * 1.5 / 3, triangleRestriction.bottom - radius),
        radius: radius
    }
    
    elements.push(new Triangle(createTriangleByModel(model)))
    if (random() < 50)
    {
        elements[elements.length - 1].speedY *= -1
    }
    
    
    let generatedElementsNumber = 1
    return generatedElementsNumber
}