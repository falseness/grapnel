function generateTrampolinePoints(x)
{
    const trampolineRestriction = 
    {
        width:
        {
            min: 0.2 * width,
            max: 0.3 * width
        }, 
        height:
        {
            min: 0.1 * height,
            max: 0.3 * height
        }
    }
    
    let x2 = x + random(trampolineRestriction.width.min, trampolineRestriction.width.max)
    
    let _case = (random() < 80)?1:0
    let y1 = sides[_case].y
    let ratio = -1
    
    if (!_case)
    {
        ratio = 1
        y1 += sides[_case].height
    }
    
    return [x, y1, x, 
            y1 + ratio * random(trampolineRestriction.height.min, trampolineRestriction.height.max),
            x2, y1 + ratio * random(trampolineRestriction.height.min, trampolineRestriction.height.max),
            x2, y1]
}
function generateTrampoline(x, group)
{
    trampolineModel = 
    {
            points: generateTrampolinePoints(x)
    }
    sprites.push(new Trampoline(createLineByModel(trampolineModel)))
    group.add(sprites[sprites.length - 1].object)
    
    let generatedElementsNumber = 1
    return generatedElementsNumber
}
