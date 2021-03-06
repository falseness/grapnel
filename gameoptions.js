const width = window.innerWidth
const height = window.innerHeight

const cyclesPerTick = 1

const minimumDeltaRealNumber = 0.0001

function random(min, max)
{
    min = min || 0
    max = max || 100
    return Math.floor(Math.random() * (max - min)) + min
}
function isEqually(a, b, eps)
{
    eps = eps || 1
    return (Math.abs(a - b) < eps)
}
function isPointsEqually(p1, p2, eps)
{
    eps = eps || 1
    return (Math.pow(p1[0] - p2[0], 2) + Math.pow(p1[1] - p2[1], 2) < Math.pow(eps, 2))
}
