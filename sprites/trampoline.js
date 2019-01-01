class Trampoline extends Element
{
    constructor(object)
    {
        super(object)
        
        this.x = this.object.attrs.points[0]
        
        this.circle = 
        {
            x: 0,
            y: 0
        }
        this.rightPointX = this.object.attrs.points[0]
        for (let i = 0; i < this.object.attrs.points.length; i += 2)
        {
            if (this.object.attrs.points[i] > this.rightPointX)
                this.rightPointX = this.object.attrs.points[i]
            
            this.circle.x += this.object.attrs.points[i]
            this.circle.y += this.object.attrs.points[i + 1]
        }
        
        this.circle.x /= (this.object.attrs.points.length / 2)
        this.circle.y /= (this.object.attrs.points.length / 2)
        
        let r = 0
        for (let i = 0; i < this.object.attrs.points.length; i += 2)
        {
            let t = Math.pow(this.object.attrs.points[i] - this.circle.x, 2) +
                    Math.pow(this.object.attrs.points[i + 1] - this.circle.y, 2)
            if (t > r)
                r = t
        }
        this.circle.radius = Math.sqrt(r)
    }
    getCircumscribedCircle()
    {
        return {x: this.circle.x + deltaX, y: this.circle.y, radius: this.circle.radius}
    }
    getPoints()
    {
        let points = this.object.attrs.points.slice()
        for (let i = 0; i < points.length; i += 2)
        {
            points[i] += deltaX
        }
        return points
    }
    getRightPointX()
    {
        return this.rightPointX + deltaX
    }
    collision(who, line)
    {
        if (line.type == 'vertical')
        {
            who.speedX *= -1
        }
        else if (line.type == 'line')
        {
            let lineAngle = line.k

            let xn = -who.speedX
            let yn = -who.speedY

            let x = xn * Math.cos(lineAngle) + yn * Math.sin(lineAngle)
            let y = yn * Math.cos(lineAngle) - xn * Math.sin(lineAngle)

            x = -x

            xn = x * Math.cos(lineAngle) - y * Math.sin(lineAngle)
            yn = y * Math.cos(lineAngle) + x * Math.sin(lineAngle)

            who.speedX = xn
            who.speedY = yn
            who.speedX += GRAVITY * Math.cos(lineAngle) * Math.sin(lineAngle)
            who.speedY -= GRAVITY * Math.pow(Math.cos(lineAngle), 2)
        }
        else
            console.log('collision with trampoline error')
    }
    moveObjectX()
    {
        this.object.setX(deltaX)
    }
}