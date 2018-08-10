function deleteObstacles()
{
    for (let i = sides.length; i < sprites.length; ++i)
    {
        if (obstacleNotOnMap(sprites[i].points))
        {
            sprites[i].object.destroy()
            sprites[i + 1].object.destroy()
            sprites.splice(i, 2)
            //obstacles идут парами 
            
            generateObstacle(sprites[sprites.length - 1].object.attrs.points[0] + (obstacleIndent + obstacleWidth))
            
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