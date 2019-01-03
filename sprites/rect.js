class Rect extends Element
{
    constructor(object)
    {
        super(object)
        
        this.width = object.width
        this.height = object.height
        
        this.circle =
        {
            x: this.x + this.width  / 2,
            y: this.y + this.height / 2
        }
        this.circle.radius = Math.sqrt(Math.pow(this.circle.x - this.x, 2) + Math.pow(this.circle.y - this.y, 2))
        
        
        let points = this.getPoints()
        this.lines = [lineFormula(points[points.length - 2], 
                                    points[points.length - 1], points[0], points[1])]
        for (let i = 0; i <= points.length - 4; i += 2)
        {
            this.lines.push(lineFormula(points[i], points[i + 1], points[i + 2], points[i + 3]))
        }
    }
    getCircumscribedCircle()
    {
        return this.circle
    }
    getPoints()
    {   
        let x = this.getX()
        let y = this.getY()
        
        let xPlusMarginX = x + this.width
        let yPlusMarginY = y + this.height
        
        let points = 
        [
            x           ,       y           ,
            xPlusMarginX,       y           ,
            xPlusMarginX,       yPlusMarginY,
            x           ,       yPlusMarginY
        ]
        
        return points
    }
    moveX(speed)
    {
        super.moveX(speed)
        this.circle.x += speed
    }
    getRightPointX()
    {
        return this.getX() + this.width
    }
    getLeftPointX()
    {
        return this.getX()
    }
    isPairElement()
    {
        return true
    }
    delete(indexInArray, array)
    {
        array.splice(indexInArray, 2)
    }
    draw()
    {
        ctx.fillStyle   = this.fill
        ctx.strokeStyle = this.stroke
        
        ctx.strokeRect(this.x, this.y, this.width, this.height) 
        ctx.fillRect(this.x, this.y, this.width, this.height)
    }
}
const rectWidth = 0.05 * width
const rectIndent = 0.3 * width

function generateRect(x)
{
    const wayHeight = 0.3 * height
    let rectHeight = random(0, height - sides[1].height - sides[0].height - wayHeight)
    
    let rectModel = 
    {
        x: x, 
        y: sides[0].height, 
        width: rectWidth,
        height: rectHeight
    }
    
    elements.push(new Rect(createRectByModel(rectModel)))
    
    
    
    
    rectModel.y += rectHeight + wayHeight
    rectModel.height = height - rectModel.y - sides[1].height

    elements.push(new Rect(createRectByModel(rectModel)))
    
    const generatedElementsNumber = 2
    return generatedElementsNumber
}