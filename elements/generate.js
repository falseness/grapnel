function generate(x)
{
    const generateChancePercent = 
    {
        rects: 40,
        triangles: 35,
        trampolines: 25
    }
    let num = random()
    
    if (num < generateChancePercent.rects)
    {
        let generatedElementsNumber = generateRect(x, rects)
        return generatedElementsNumber
    }
    
    
    if (generateChancePercent.rects <= num && 
             num < generateChancePercent.rects + generateChancePercent.triangles)
    {
        let generatedElementsNumber = generateTriangle(x, triangles)
        return generatedElementsNumber
    }
    if (generateChancePercent.rects + generateChancePercent.triangles <= num &&
        generateChancePercent.rects + generateChancePercent.triangles + generateChancePercent.trampolines)
    {
        let generatedElementsNumber = generateTrampoline(x, trampolines)
        return generatedElementsNumber
    }
    console.log("Error generate")
}

function generatePrimaryElements()
{
    const firstElementX = 0.4 * width
    const elementsPairNumber = 5
    
    for (let i = 0; i < elementsPairNumber; ++i)
    {
        generate(firstElementX + (rectIndent + rectWidth) * i)
    }
}