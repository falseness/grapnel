class Rect extends Element
{
    constructor(object)
    {
        super(object)
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