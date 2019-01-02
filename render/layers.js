
let layer = 
{
    grapnel: new Konva.FastLayer(),
    static: new Konva.FastLayer(),
    rects: new Konva.FastLayer(),
    ninja: new Konva.FastLayer(),
    mechanics: new Konva.FastLayer(),
    scoreText: new Konva.FastLayer(),
    triangles: new Konva.FastLayer(),
    trampolines: new Konva.FastLayer()
}

function addLayersToStage()
{
    for (let i in layer)
    {
        layer[i].hitGraphEnabled(false)
        layer[i].listening(false)
        stage.add(layer[i])
    }
}
function addSpritesToLayers()
{
    layer.ninja.add(ninja.object)
    layer.static.add(sprites[0].object, sprites[1].object)
    layer.grapnel.add(grapnel.object)
    
  /*  layer.rects.add(rects)
    
    layer.triangles.add(triangles)
    layer.trampolines.add(trampolines)*/
    
    layer.scoreText.add(scoreText)
}

