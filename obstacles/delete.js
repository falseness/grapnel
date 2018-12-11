function deleteObstacles(group)
{
    newElements = 0
    for (let i = sides.length; i < sprites.length - newElements; ++i)
    {
        if (obstacleNotOnMap(sprites[i].points))
        {
            sprites[i].delete(i, sprites)
            
            newElements += generateObstacle(sprites[sprites.length - 1].object.attrs.points[0] + (obstacleIndent + obstacleWidth), group)
            
            changeScoreText()
        }
    }
}
function obstacleNotOnMap(points)
{
    for (let i = 0; i < points.length; i += 2)
    {
        if (points[i] >= 0)
            return false
    }
    return true
}

function changeScoreText()
{
    scoreText.setText('score: ' + ++scoreText.count)
    layer.scoreText.draw()
}