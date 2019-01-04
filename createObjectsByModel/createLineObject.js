function createLineByModel(model)
{
    model.color         = model.color       || '#3e1170'
    model.strokeColor   = model.strokeColor || 'black'
    model.strokeWidth   = model.strokeWidth || 1

    object =
    {
        x: model.x                  ,
        y: model.y                  ,
        points: model.points        ,
        fill:   model.color         ,
        stroke: model.strokeColor       
    }
    return object
}