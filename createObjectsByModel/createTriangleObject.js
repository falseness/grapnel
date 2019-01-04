function createTriangleByModel(model)
{
    model.color         = model.color       || '#ff0000'
    model.strokeColor   = model.strokeColor || 'black'
    model.strokeWidth   = model.strokeWidth || 1
    
    let object = 
    {
        x: model.x                      ,
        y: model.y                      ,
        sides: 3                        ,
        radius: model.radius            ,
        fill: model.color               ,
        stroke: model.strokeColor       
    }
    return object
}
