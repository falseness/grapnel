/*function elementNotOnMap(points)
{
    for (let i = 0; i < points.length; i += 2)
    {
        if (points[i] >= 0)
            return false
    }
    return true
}*/

function changeScoreText()
{
    scoreText.count++
}


function deleteElements()
{
    let newElements = 0
    for (let i = sides.length; i < elements.length - newElements; ++i)
    {
        if (elements[i].getRightPointX() < 0)
        {
            elements[i].delete(i, elements)
    
            newElements += generate(elements[elements.length - 1].getX() + (rectIndent + rectWidth))
            
            changeScoreText()
        }
    }
}

