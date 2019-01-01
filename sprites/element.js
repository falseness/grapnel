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
    move()
    {
        
    }
    getX()
    {
        return this.x + deltaX
    }
    getY()
    {
        return this.y
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
    moveObject()
    {
        
    }
}