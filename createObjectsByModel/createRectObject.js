function createRectByModel(model)
{
    model.color         = model.color       || '#f0f0f0'
    model.strokeColor   = model.strokeColor || 'black'
    model.strokeWidth   = model.strokeWidth || 1
    
    object = 
    {
        x:                  model.x             ,
        y:                  model.y             ,
        width:              model.width         ,
        height:             model.height        ,
        fill:               model.color         ,
        stroke:             model.strokeColor   ,
    }
    //object.cache()
    return object
}
