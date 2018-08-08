function deleteObstacles()
{
    for (let i = sides.length; i < sprites.length; ++i)
    {
        if (obstacleNotOnMap(sprites[i].object.attrs.points))
        {
            sprites.splice(i, 2)
            generateObstacle(sprites[sprites.length - 1].points[0] + (obstacleIndent + obstacleWidth))
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