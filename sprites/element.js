class Element
{
    constructor(object)
    {
        this.object = object
        
        this.speedX = 0
        this.speedY = 0
        
        this.x = object.attrs.x
        this.y = object.attrs.y

    }
    moveY()
    {
        
    }
    hide()
    {
        this.object.hide()
    }
    show()
    {
        this.object.show()
    }
    isToRightThanEdgeOfScreen()
    {
        return this.getLeftPointX() > width
    }
    moveX(speed)
    {
        this.x += speed
        
        this.moveLinesX(speed)
    }
    moveLinesX(speed)
    {
        for (let i = 0; i < this.lines.length; ++i)
        {
            this.lines[i].x1        += speed
            this.lines[i].x2        += speed
            this.lines[i].circle.x  += speed
            this.lines[i].b         -= speed * this.lines[i].k
        }
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
        return this.lines
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
        array[indexInArray].object.destroy()
        array.splice(indexInArray, 1)
    }
    moveObjectX()
    {
        this.object.setX(this.getX())
    }
    moveObjectY()
    {
        
    }
}