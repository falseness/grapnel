function getObject(model)
{
    object = new Konva.Line(
    {
        points: model.points,
        fill: model.color,
        stroke: model.strokeColor,
        strokeWidth: model.strokeWidth,
        closed: true,
        perfectDrawEnabled: false,
        transformsEnabled: 'position'
    })
    return object
}