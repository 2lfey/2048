
const defaultSquareSize = 4

const main = () => {
    const root = document.querySelector('#root')

    

    const grid = createGrid(defaultSquareSize)

    document.addEventListener('keydown', createKeydownHandler())
    
    setRandomItem(grid)
    setRandomItem(grid)
    
    mountGrid(root, grid)
}

const createKeydownHandler = grid => {
    return e => {
        switch (e.key) {
            case 'ArrowLeft':
                handleKeyArrowLeft(grid)
                break;
            case 'ArrowUp':
                handleKeyArrowUp(grid)
                break;
    
            case 'ArrowRight':
                handleKeyArrowRight(grid)
                break;
    
            case 'ArrowDown':
                handleKeyArrowDown(grid)
                break;
        }
    }
}


const handleKeyArrowLeft = (grid) => {
    for (let y = 0; y < grid.length; y++) {
        for (let x = 0; x < grid[y].length; x++) {
            // Conditions...
        }
    }
}


const handleKeyArrowUp = (grid) => {
    // TODO: handle up btn
}


const handleKeyArrowRight = (grid) => {
    // TODO: handle right btn
}


const handleKeyArrowDown = (grid) => {
    // TODO: handle down btn
}

const createGrid = (size) => {
    const grid = []
    for (let y = 0; y < size; y++) {
        const row = []
        for (let x = 0; x < size; x++) {
            row[x] = createItem()
        }
        grid.push(row)
    }
    return grid
}

const mountGrid = (root, grid) => {
    for (let y = 0; y < grid.length; y++) {
        for (let x = 0; x < grid[y].length; x++) {
            root.appendChild(grid[y][x])
        }
    }
}

const createItem = () => {
    const el = document.createElement('div')

    el.className = 'w-20 h-20 bg-gray-500/50 rounded-md flex justify-center items-center text-2xl text-white select-none'

    return el
}

const setRandomItem = (grid) => {
    const ry = randomInt(0, grid.length - 1)
    const rx = randomInt(0, grid[ry].length - 1)

    grid[ry][rx].innerHTML = 2
}

const randomInt = (min = 0, max = 100) => Math.floor(Math.random() * (max - min) + 1)


main()
