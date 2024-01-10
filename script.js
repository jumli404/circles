var a = document.getElementById('hm')
var b = document.getElementById('h')
var c = 0
var canvas = document.getElementsByTagName('canvas')[0]
canvas.width = window.innerWidth
canvas.height = window.innerHeight
var d = canvas.getContext('2d')

var x
var y;
var r = 50

function as() {
    addEventListener('mousemove', (event) => {
        a.innerHTML = x
        b.innerHTML = y
        x = event.x
        y = event.y


    })

    d.beginPath()
    d.arc(x, y, r, Math.PI * 2, false)
    d.strokeStyle = 'red'
    d.stroke()
    requestAnimationFrame(as)
}

as()
