const radius = height * 0.15 / Math.sqrt(3)
const triangleRestriction = 
{
    top: sides[0].y + sides[0].height + 0.01 * height,
    bottom: sides[1].y - 0.01 * height
}
/*function generateTrianglePoints(x, y)
{
    const pointsRectangleTemplate = [0, 0, -length * Math.sin(Math.PI / 6), -length * Math.cos(Math.PI / 6),
                                     length * Math.sin(Math.PI / 6), -length * Math.cos(Math.PI / 6)]
    
    res = []
    for (let i = 0; i < pointsRectangleTemplate.length; i += 2)
    {
        res.push(pointsRectangleTemplate[i] + x)
        res.push(pointsRectangleTemplate[i + 1] + y)
    }
    return res
}*/
function generateTriangle(x, group)
{    
    
    
    let model = 
    {
        x: x + radius * Math.sqrt(3)                                                    ,
        y: random(triangleRestriction.top + radius * 1.5 / 3, triangleRestriction.bottom - radius),
        radius: radius
    }
    
    sprites.push(new Triangle(createTriangleByModel(model)))
    if (random() < 50)
    {
        sprites[sprites.length - 1].speedY *= -1
    }
    group.add(sprites[sprites.length - 1].object)
    
    let generatedElementsNumber = 1
    return generatedElementsNumber
}