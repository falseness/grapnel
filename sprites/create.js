let elements = []
let ninja = new Ninja(
{
    x: Math.floor(0.2 * width),
    y: Math.floor(0.2 * height),
    radius: Math.round(0.01 * height),
    fill: '#0000ff',
    stroke: '#000000'
})
//ninja.object.cache()

let grapnel = new Grapnel(
{
    points: [0, 0, 0, 0],
    stroke: 'red'
})

let sides = 
[
    {
        x: -width, 
        y: 0, 
        width: 3 * width, 
        height: 0.1 * height
    },
    {
        x: -width, 
        y: 0.9 * height, 
        width: 3 * width,
        height: 0.1 * height
    }
]
let area = 
[
    {
        x: -width, 
        y: 0, 
        width: 3 * width, 
        height: 0.1 * height
    },
    {
        x: -width, 
        y: 0.9 * height, 
        width: 3 * width,
        height: 0.1 * height
    }
]
for (let i = 0; i < sides.length; ++i)
{
    const sidesColor = '#f0f0f0'
    elements.push(new Side(createRectByModel(
    {
        x: sides[i].x, 
        y: sides[i].y,
        width: sides[i].width,
        height: sides[i].height,
        color: sidesColor
    })))
}
let scoreText = 
{
    text: 'score: ',
    count: 0,
    x: Math.floor(0.1 * width),
    y: Math.floor(sides[0].height / 2),
    fontSize: Math.floor(0.05 * height),
    fontFamily: 'Calibri',
    fill: 'blue',
    draw: function()
    {
        ctx.fillStyle = this.fill
        ctx.textBaseline = 'middle'
        ctx.font = this.fontSize + 'px ' + this.fontFamily
        ctx.fillText(this.text + this.count, this.x, this.y)
    }
}