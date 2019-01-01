function generate(x)
{
    const generateChancePercent = 
    {
        rects: 100,
        obstacles: 0,//40
        enemies: 0,//35,
        trampolines: 0//25
    }
    let num = random()
    
    if (num < generateChancePercent.rects)
    {
        let generatedElementsNumber = generateRect(x, rects)
        return generatedElementsNumber
    }
    
    if (generateChancePercent.rects <= num  && 
            num < generateChancePercent.obstacles)
    {
        let generatedElementsNumber = generateObstacle(x, obstacles)
        return generatedElementsNumber
    }
    
    if (generateChancePercent.obstacles <= num && 
             num < generateChancePercent.obstacles + generateChancePercent.enemies)
    {
        let generatedElementsNumber = generateEnemy(x, enemies)
        return generatedElementsNumber
    }
    if (generateChancePercent.obstacles + generateChancePercent.enemies <= num &&
        generateChancePercent.obstacles + generateChancePercent.enemies + generateChancePercent.trampolines)
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