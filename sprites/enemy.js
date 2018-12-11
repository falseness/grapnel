class Enemy extends Sprite
{
    constructor(object)
    {
        super(object)
        
        this.deltaY = 0
        
        this.points = []
        for (let i = 0; i < object.attrs.points.length; i += 2)
        {
            this.points.push(object.attrs.points[i] + enemies.posX)
            this.points.push(object.attrs.points[i + 1])
        }
        this.speedY = 0.005 * height
    }
    move()
    {
        this.changeSpeed()
        super.move()
        this.deltaY += this.speedY
    }
    changeSpeed()
    {
        if (this.points[1] < enemyRestriction.top || this.points[1] > enemyRestriction.bottom)
            this.speedY *= -1
    }
    delete(indexInArray, array)
    {
        array[indexInArray].object.destroy()
        array.splice(indexInArray, 1)
    }
    moveObject()
    {
        for (let i = 1; i < this.object.attrs.points.length; i += 2)
        {
            this.object.attrs.points[i] += this.deltaY
        }
        this.deltaY = 0
    }
}