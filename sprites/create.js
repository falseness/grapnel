let ninja = new Ninja(new Konva.Circle({
    x: 0.2 * width,
    y: 0.2 * height,
    radius: Math.round(0.01 * height),
    fill: '#0000ff',
    stroke: '#000000',
    strokeWidth: 1
}))
let grapnel = new Grapnel(new Konva.Line({
    points: [0, 0, 0, 0],
    stroke: 'red',
    strokeWidth: Math.round(0.006 * height),
    lineJoin: 'round'
}))


/*layer.mechanics.add(new Konva.Line({
    points: ,
    stroke: 'green',
    strokeWidth: 3,
    lineJoin: 'round'
}))
layer.mechanics.add(new Konva.Line({
    points: [screen.whenceMove, 0.2 * height, screen.whenceMove, 0.8 * height],
    stroke: 'green',
    strokeWidth: 3,
    lineJoin: 'round',
    opacity: 0.5
}))
layer.mechanics.add(new Konva.Line({
    points: [screen.lastBarrierMove, 0.2 * height, screen.lastBarrierMove, 0.8 * height],
    stroke: 'green',
    strokeWidth: 5,
    lineJoin: 'round'
}))*/