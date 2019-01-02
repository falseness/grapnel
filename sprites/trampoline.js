class Trampoline extends Element
{
    constructor(object)
    {
        super(object)
        
        this.x = 0
        
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
        
        this.lines = [lineFormula(this.object.attrs.points[this.object.attrs.points.length - 2],
                                    this.object.attrs.points[this.object.attrs.points.length - 1],
                                    this.object.attrs.points[0], this.object.attrs.points[1])]
        for (let i = 0; i <= this.object.attrs.points.length - 4; i += 2)
        {
            this.lines.push(lineFormula(this.object.attrs.points[i], this.object.attrs.points[i + 1],
                            this.object.attrs.points[i + 2], this.object.attrs.points[i + 3]))
        }
    }
    getX()
    {
        return this.object.attrs.points[0] + this.x
    }
    getCircumscribedCircle()
    {
        return this.circle
    }
    getPoints()
    {
        let res = this.object.attrs.points.slice()
        for (let i = 0; i < res.length; i += 2)
        {
            res[i] += this.x
        }
        return res
    }
    getRightPointX()
    {
        return this.rightPointX
    }
    moveX(speed)
    {
        super.moveX(speed)
        
        this.rightPointX    += speed
        this.circle.x       += speed
        this.dx             += speed
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
        this.object.setX(this.x)
    }
}