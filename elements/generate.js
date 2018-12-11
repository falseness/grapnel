function generate(x)
{
    const generateChancePercent = 
    {
        obstacles: 60,
        enemies: 40
    }
    let num = random()
    
    if (num < generateChancePercent.obstacles)
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
    console.log("Error generate")
}

function generatePrimaryElements()
{
    const firstElementX = 0.4 * width
    const elementsPairNumber = 5
    
    for (let i = 0; i < elementsPairNumber; ++i)
    {
        generate(firstElementX + (obstacleIndent + obstacleWidth) * i)
    }
}