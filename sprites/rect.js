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
        this.circle.x       += speed
    }
    getRightPointX()
    {
        return this.getX() + this.object.attrs.width
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