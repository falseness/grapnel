function circlesDoNotIntersect(x1, y1, x2, y2, r1, r2)
{
    return  Math.pow(x1 - x2, 2) +
            Math.pow(y1 - y2, 2) > Math.pow(r1 + r2, 2)
}
function circlesDescribedAroundTwoVerticalsDoNotIntersect(y1, y2, r1, r2)
{
    return  Math.abs(y1 - y2) <= (r1 + r2)
}
function pointOnLine(x, x1, x2)
{
    return ((x < x1 && x2 < x) || (x < x2 && x1 < x))
}
function collisionVerticalWithLine(vertical, line)
{
    if (    
            circlesDoNotIntersect
            (
                line.center.x, line.center.y,
                vertical.center.x, vertical.center.y,
                line.radius, vertical.radius
            )
        )
        return false
    
    let y = line.k  * vertical.x + line.b
    if (pointOnLine(y, vertical.y1, vertical.y2) && pointOnLine(vertical.x, line.x1, line.x2))
        return {x: vertical.x, y: y}
    return false
}
function collisionVerticalWithVertical(vertical1, vertical2)
{   
    if ( 
            vertical1.x == vertical2.x && 
            circlesDescribedAroundTwoVerticalsDoNotIntersect
            (
                vertical1.center.y  , vertical2.center.y, 
                vertical1.radius    , vertical2.radius
            )
       )
    {
        if (pointOnLine(vertical1.y1, vertical2.y1, vertical2.y2))
            return {x: vertical1.x, y: vertical1.y}
        if (pointOnLine(vertical1.y2, vertical2.y1, vertical2.y2))
            return {x: vertical1.x, y: vertical1.y2}
        if (pointOnLine(vertical2.y1, vertical1.y1, vertical1.y2))
            return {x: vertical1.x, y: vertical2.y1}
        if (pointOnLine(vertical2.y2, vertical1.y1, vertical1.y2))
            return {x: vertical1.x, y: vertical2.y2}
    }
    return false
}
function collisionLineWithLine(line1, line2)
{
    if (    
            circlesDoNotIntersect
            (
                line1.center.x, line1.center.y,
                line2.center.x, line2.center.y,
                line1.radius, line2.radius
            )
        )
        return false
    if (Math.pow(line1.center.x - line2.center.x, 2) +
        Math.pow(line1.center.y - line2.center.y, 2) > Math.pow(line1.radius + line2.radius, 2))
        return false
    
    
    if (line1.k != line2.k)
    {
        let x = (line2.b - line1.b) / (line1.k - line2.k)
        let y = line1.k * x + line1.b
        if (pointOnLine(x, line1.x1, line1.x2) && pointOnLine(x, line2.x1, line2.x2))
        {
            //&& pointOnLine(y, line1.y1, line2.y2) && pointOnLine(x, line2.y1, line2.y2))
            return {x: x, y: y}
        }
    }
    return false
}
function lineFormula(x1, y1, x2, y2)
{
    if (x1 == x2)
    {
        let res     = {type: 'vertical', x: x1, y1: y1, y2: y2, 
                        center: {x: x1, y: (y1 + y2) / 2}}
        res.radius  = Math.abs(y1 - res.center.y)
        return res
    }
    else
    {
        let k       = ((y1 - y2) / (x1 - x2))
        let res     = {type: 'line', x1: x1, x2: x2, y1: y1, y2: y2, k: k, b: (y1 - k * x1),
                        center: {x: (x1 + x2) / 2, y: (y1 + y2) / 2}}
        res.radius  = Math.sqrt(Math.pow(x1 - res.center.x, 2) + Math.pow(y1 -  res.center.y, 2))
        return res
    }
}
function linesCollision(line1, line2)
{
    if (line1.type == 'line' && line2.type == 'line')
        return collisionLineWithLine(line1, line2)
    else if (line1.type == 'vertical' && line2.type == 'line')
        return collisionVerticalWithLine(line1, line2)
    else if (line1.type == 'line' && line2.type == 'vertical')
        return collisionVerticalWithLine(line2, line1)
    else
        return collisionVerticalWithVertical(line1, line2)
}
function pointIsOnStraight(point, line)
{
    if (line.type == 'vertical')
    {
        return (line.x == point.x)
    }
    else if (line.type == 'line')
    {
        const eps = 0.1
        return (isEqually(point.y, line.k * point.x + line.b, eps))
    }
    else
        console.log('Error line type')
}