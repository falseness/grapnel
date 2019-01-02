function createLineByModel(model)
{
    model.color         = model.color       || '#3e1170'
    model.strokeColor   = model.strokeColor || 'black'
    model.strokeWidth   = model.strokeWidth || 1

    object = new Konva.Line(
    {
        points: model.points            ,
        fill: model.color               ,
        stroke: model.strokeColor       ,
        strokeWidth: model.strokeWidth  ,
        closed: true                    ,
        perfectDrawEnabled: false       ,
        transformsEnabled: 'position'   ,
        listening: false                ,
        strokeHitEnabled: false         ,
        shadowForStrokeEnabled: false
    })
    return object
}