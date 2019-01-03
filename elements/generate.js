function generate(x)
{
    const generateChancePercent = 
    {
        rects: 50,//40,
        triangles: 0,//35,
        trampolines: 50
    }
    let num = random()
    
    if (num < generateChancePercent.rects)
    {
        let generatedElementsNumber = generateRect(x)
        return generatedElementsNumber
    }
    
    
    if (generateChancePercent.rects <= num && 
             num < generateChancePercent.rects + generateChancePercent.triangles)
    {
        let generatedElementsNumber = generateTriangle(x)
        return generatedElementsNumber
    }
    if (generateChancePercent.rects + generateChancePercent.triangles <= num &&
        generateChancePercent.rects + generateChancePercent.triangles + generateChancePercent.trampolines)
    {
        let generatedElementsNumber = generateTrampoline(x)
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