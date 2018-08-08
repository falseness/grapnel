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

