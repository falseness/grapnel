let ninjaLayer = new Konva.Layer()
let layer = 
{
    grapnel: new Konva.Layer(),
    static: new Konva.Layer(),
    obstacles: new Konva.Layer(),
    ninja: new Konva.Layer(),
    mechanics: new Konva.Layer(),
    scoreText: new Konva.Layer()
}

function addLayersToStage()
{
    for (let i in layer)
    {
        stage.add(layer[i])
    }
}
function addSpritesToLayers()
{
    layer.ninja.add(ninja.object)
    layer.static.add(sprites[0].object, sprites[1].object)
    layer.grapnel.add(grapnel.object)
    
    layer.obstacles.add(obstacles)
    
    layer.scoreText.add(scoreText)
}

