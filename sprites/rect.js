class Rect extends Element
{
    constructor(object)
    {
        super(object)
        this.circle =
        {
            x: this.x + object.attrs.width  / 2,
            y: this.y + object.attrs.height / 2
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
        
        let xPlusMarginX = x + this.object.attrs.width
        let yPlusMarginY = y + this.object.attrs.height
        
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
        return this.getX() + this.object.attrs.width
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
        array[indexInArray].object.destroy()
        array[indexInArray + 1].object.destroy() //rects идут парами
        array.splice(indexInArray, 2)
    }
}