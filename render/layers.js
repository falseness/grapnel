let ninjaLayer = new Konva.Layer()
let layer = 
{
    grapnel: new Konva.Layer(),
    static: new Konva.Layer(),
    rects: new Konva.Layer(),
    ninja: new Konva.Layer(),
    mechanics: new Konva.Layer(),
    scoreText: new Konva.Layer(),
    enemies: new Konva.Layer(),
    trampolines: new Konva.Layer()
}

function addLayersToStage()
{
    for (let i in layer)
    {
        layer[i].hitGraphEnabled(false)
        stage.add(layer[i])
    }
}
function addSpritesToLayers()
{
    layer.ninja.add(ninja.object)
    layer.static.add(sprites[0].object, sprites[1].object)
    layer.grapnel.add(grapnel.object)
    
    layer.rects.add(rects)
    
    layer.enemies.add(enemies)
    layer.trampolines.add(trampolines)
    
    layer.scoreText.add(scoreText)
}

