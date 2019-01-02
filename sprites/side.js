class Side extends Rect
{
    constructor(object)
    {
        super(object)
    }
    getX()
    {
        return this.x
    }
    getCircumscribedCircle()
    {
        return this.circle
    }
    moveX()
    {
        console.log('Error moving side!')
    }
}