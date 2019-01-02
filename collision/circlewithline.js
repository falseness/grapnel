function collisionCircleWithLine(line, x0, y0, r)
{
    if (twoCirclesIntersect(x0, y0, r, line.circle))
    {
        if (line.type == 'vertical')
        {
            //y2 < y1
            return collisionCircleWithVertical(x0, y0, r, line)
        }
        let k = (line.y1 - line.y2) / (line.x1 - line.x2)
        let b = line.y1 - k * line.x1
        /*
        ax^2 + bx + c = 0
        */
        let a = Math.pow(k, 2) + 1
        let c = Math.pow(x0, 2) + Math.pow(b, 2) - 2 * y0 * b + Math.pow(y0, 2) - Math.pow(r, 2)
        b = 2 * k * b - 2 * x0 - 2 * y0 * k
        let D = Math.pow(b, 2) - 4 * a * c
        if (D >= 0)
        {
            D = Math.sqrt(D)
            let root1 = (-b - D) / (2 * a)
            let root2 = (-b + D) / (2 * a)
            // x2 > x1
            if (pointOnLine(root1, line.x1, line.x2) ||
                pointOnLine(root2, line.x1, line.x2))
                return true
        }
    }
    return false
}
    
function collisionCircleWithVertical(coord0, coordUnknow0, r, line)
{
    let c = Math.pow(r, 2) - Math.pow((line.x - coord0), 2) - Math.pow(coordUnknow0, 2)
    let D = Math.pow(2 * coordUnknow0, 2) + 4 * c
    if (D >= 0)
    {
        D = Math.sqrt(D)
        let root1 = (2 * coordUnknow0 - D) / 2
        let root2 = (2 * coordUnknow0 + D) / 2
        {
            if (line.y2 <= root1 && root1 <= line.y1
               || line.y2 <= root2 && root2 <= line.y1)
                return true
        }
    }
    return false
}