




// const brick = [{ x: 3, y: 3 }, { x: 4, y: 3 }, { x: 5, y: 3 }, { x: 4, y: 4 }]
const blocks = document.querySelectorAll('.block')


// const brick1 = [{ x: 3, y: 6 }, { x: 3, y: 7 }, { x: 4, y: 7 }, { x: 4, y: 8 }]

// brick1.forEach(coords => blocks[coords.y*10 + coords.x].style.background = 'red')

fetch('bricks.txt').then(response => response.text()).then(bricks => {
    
    bricks = bricks.split('\r\n\r\n')
    
    for (let i = 0; i < bricks.length; i++) {
        let brick = bricks[i].split('\r\n')
        brick = brick.map(row => row.match(/../g))
        
        const coords = []

        for (let y = 0; y < brick.length; y++) {

            for (let x = 0; x < brick[y].length; x++){
                if (brick[y][x] !== '  ') coords.push({x, y})
            }
        }

        bricks[i] = coords
    }

    bricks[rnd(bricks.length)].forEach(coords => blocks[coords.y*10 + coords.x].style.background = 'green')

})

function rnd(max) {
    return Math.floor(Math.random() * max)
}
