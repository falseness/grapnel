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
        
        this.rightPointX    = object.points[0]
        this.leftPointX     = object.points[0]
        
        for (let i = 0; i < object.points.length; i += 2)
        {
            if (object.points[i] > this.rightPointX)
                this.rightPointX = object.points[i]
            if (object.points[i] < this.leftPointX)
                this.leftPointX = object.points[i]
            
            this.circle.x += object.points[i]
            this.circle.y += object.points[i + 1]
        }
        
        this.circle.x /= (object.points.length / 2)
        this.circle.y /= (object.points.length / 2)
        
        let r = 0
        for (let i = 0; i < object.points.length; i += 2)
        {
            let t = Math.pow(object.points[i] - this.circle.x, 2) +
                    Math.pow(object.points[i + 1] - this.circle.y, 2)
            if (t > r)
                r = t
        }
        this.circle.radius = Math.sqrt(r)
        
        this.lines = [lineFormula(object.points[object.points.length - 2],
                                    object.points[object.points.length - 1],
                                    object.points[0], object.points[1])]
        for (let i = 0; i <= object.points.length - 4; i += 2)
        {
            this.lines.push(lineFormula(object.points[i], object.points[i + 1],
                            object.points[i + 2], object.points[i + 3]))
        }
    }
    getX()
    {
        return this.lines[0].x1
    }
    getCircumscribedCircle()
    {
        return this.circle
    }
    getRightPointX()
    {
        return this.rightPointX
    }
    getLeftPointX()
    {
        return this.leftPointX
    }
    getPoints()
    {
        let res = []
        for (let i = 0; i < this.lines.length; ++i)
            res.push(this.lines[i].x1, this.lines[i].y1)
        return res
    }
    moveX(speed)
    {
        super.moveX(speed)
        
        this.rightPointX    += speed
        this.leftPointX     += speed
        this.circle.x       += speed
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
    draw()
    {
        ctx.beginPath()
        
        ctx.moveTo(this.lines[0].x1, this.lines[0].y1)
        for (let i = 1; i < this.lines.length; ++i)
        {
            ctx.lineTo(this.lines[i].x1, this.lines[i].y1)
        }
        ctx.lineTo(this.lines[0].x1, this.lines[0].y1)
        
        ctx.fillStyle   = this.fill
        ctx.fill()
        
        ctx.strokeStyle = this.stroke
        ctx.stroke()
    }
}
function generateTrampolinePoints(x)
{
    const trampolineRestriction = 
    {
        width:
        {
            min: 0.2 * width,
            max: 0.3 * width
        }, 
        height:
        {
            min: 0.1 * height,
            max: 0.3 * height
        }
    }
    
    let x2 = x + random(trampolineRestriction.width.min, trampolineRestriction.width.max)
    
    const chanceBottomTrampoline = 98
    let _case = (random() < chanceBottomTrampoline)?1:0
    let y1 = sides[_case].y
    let ratio = -1
    
    if (!_case)
    {
        ratio = 1
        y1 += sides[_case].height
    }
    
    return [x, y1, x, 
            y1 + ratio * random(trampolineRestriction.height.min, trampolineRestriction.height.max),
            x2, y1 + ratio * random(trampolineRestriction.height.min, trampolineRestriction.height.max),
            x2, y1]
}
function generateTrampoline(x)
{
    trampolineModel = 
    {
            points: generateTrampolinePoints(x)
    }
    elements.push(new Trampoline(createLineByModel(trampolineModel)))
    
    const generatedElementsNumber = 1
    return generatedElementsNumber
}
