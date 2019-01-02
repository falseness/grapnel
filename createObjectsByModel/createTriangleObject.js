function createTriangleByModel(model)
{
    model.color         = model.color       || '#ff0000'
    model.strokeColor   = model.strokeColor || 'black'
    model.strokeWidth   = model.strokeWidth || 1
    
    let object = new Konva.RegularPolygon({
        x: model.x                      ,
        y: model.y                      ,
        sides: 3                        ,
        radius: model.radius            ,
        fill: model.color               ,
        stroke: model.strokeColor       ,
        strokeWidth: model.strokeWidth  ,
        rotation: 60                    ,
        perfectDrawEnabled: false       ,
        listening:          false       ,
        strokeHitEnabled: false         ,
        shadowForStrokeEnabled: false
        })
    return object
}
