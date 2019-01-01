const rectWidth = 0.05 * width
const rectIndent = 0.3 * width

function generateRect(x, group)
{
    const wayHeight = 0.3 * height
    let rectHeight = random(0, height - sides[1].height - sides[0].height - wayHeight)
    
    let rectModel = 
    {
        x: x, 
        y: sides[0].height, 
        width: rectWidth,
        height: rectHeight
    }
    
    sprites.push(new Rect(createRectByModel(rectModel)))
    group.add(sprites[sprites.length - 1].object)
    
    
    
    
    rectModel.y += rectHeight + wayHeight
    rectModel.height = height - rectModel.y - sides[1].height

    sprites.push(new Rect(createRectByModel(rectModel)))
    group.add(sprites[sprites.length - 1].object)
    
    let generatedElementsNumber = 2
    return generatedElementsNumber
}