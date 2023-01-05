// import { addButton } from "./utils";

export const waveFunctionCollapse = (_p5: any) => {
    let _ = _p5;

    class Cell {
        collapsed: boolean;
        options: number[];
        constructor(value: any) {
            // Is it collapsed?
            this.collapsed = false;

            // Initial options via constructor
            if (value instanceof Array) {
                this.options = value;
            } else {
                // or all options to start
                this.options = [];
                for (let i = 0; i < value; i++) {
                    this.options[i] = i;
                }
            }
        }
    }

    // Function to reverse a string
    const reverseString = (s: any): string => {
        let arr = s.split("");
        arr = arr.reverse();
        return arr.join("");
    }

    // Function to compare two edges
    const compareEdge = (a: string, b: any) => {
        return a == reverseString(b);
    }

    // Tile class
    class Tile {
        img: any;
        edges: any;
        up: any;
        right: any;
        down: any;
        left: any;
        constructor(img: any, edges: any) {
            // Image
            this.img = img;
            // Edges
            this.edges = edges;
            // Valid neighbors
            this.up = [];
            this.right = [];
            this.down = [];
            this.left = [];
        }

        // Find the valid neighbors
        analyze(tiles: any) {
            for (let i = 0; i < tiles.length; i++) {
                let tile = tiles[i];
                // UP
                if (compareEdge(tile.edges[2], this.edges[0])) {
                    this.up.push(i);
                }
                // RIGHT
                if (compareEdge(tile.edges[3], this.edges[1])) {
                    this.right.push(i);
                }
                // DOWN
                if (compareEdge(tile.edges[0], this.edges[2])) {
                    this.down.push(i);
                }
                // LEFT
                if (compareEdge(tile.edges[1], this.edges[3])) {
                    this.left.push(i);
                }
            }
        }

        // Rotate a tile and its edges to create a new one
        rotate(num: any) {
            // Draw new tile
            const w = this.img.width;
            const h = this.img.height;
            const newImg = _.createGraphics(w, h);
            newImg.imageMode(_.CENTER);
            newImg.translate(w / 2, h / 2);
            newImg.rotate(_.HALF_PI * num);
            newImg.image(this.img, 0, 0);

            // Rotate edges
            const newEdges = [];
            const len = this.edges.length;
            for (let i = 0; i < len; i++) {
                newEdges[i] = this.edges[(i - num + len) % len];
            }
            return new Tile(newImg, newEdges);
        }
    }



    const tiles:any[] = [];
    const tileImages :any []= [];

    // Current state of the grid
    let grid:any[] = [];

    // Width and height of each cell
    const DIM = 25;


    

    _.setup = () =>{
        _.createCanvas(_.windowHeight, _.windowHeight);
       
        // Create and label the tiles
        tiles[0] = new Tile(tileImages[0], ["AAA", "AAA", "AAA", "AAA"]);
        tiles[1] = new Tile(tileImages[1], ["BBB", "BBB", "BBB", "BBB"]);
        tiles[2] = new Tile(tileImages[2], ["BBB", "BCB", "BBB", "BBB"]);
        tiles[3] = new Tile(tileImages[3], ["BBB", "BDB", "BBB", "BDB"]);
        tiles[4] = new Tile(tileImages[4], ["ABB", "BCB", "BBA", "AAA"]);
        tiles[5] = new Tile(tileImages[5], ["ABB", "BBB", "BBB", "BBA"]);
        tiles[6] = new Tile(tileImages[6], ["BBB", "BCB", "BBB", "BCB"]);
        tiles[7] = new Tile(tileImages[7], ["BDB", "BCB", "BDB", "BCB"]);
        tiles[8] = new Tile(tileImages[8], ["BDB", "BBB", "BCB", "BBB"]);
        tiles[9] = new Tile(tileImages[9], ["BCB", "BCB", "BBB", "BCB"]);
        tiles[10] = new Tile(tileImages[10], ["BCB", "BCB", "BCB", "BCB"]);
        tiles[11] = new Tile(tileImages[11], ["BCB", "BCB", "BBB", "BBB"]);
        tiles[12] = new Tile(tileImages[12], ["BBB", "BCB", "BBB", "BCB"]);

        // Rotate tiles
        // TODO: eliminate redundancy
        for (let i = 2; i < 14; i++) {
            for (let j = 1; j < 4; j++) {
                tiles.push(tiles[i].rotate(j));
            }
        }

        // Generate the adjacency rules based on edges
        for (let i = 0; i < tiles.length; i++) {
            const tile = tiles[i];
            tile.analyze(tiles);
        }

        // Start over
        startOver();
    }

    // Load images
    _.preload=()=> {
        const path = "/note/images/circuit";
        for (let i = 0; i < 13; i++) {
            tileImages[i] = _.loadImage(`${path}/${i}.png`);
        }
        // tileImages[0] = _.loadImage('/note/images/hutao/hutao1.webp')
        // tileImages[1] = _.loadImage('/note/images/hutao/hutao5.webp')
        // tileImages[2] = _.loadImage('/note/images/hutao/hutao3.webp')
        // tileImages[3] = _.loadImage('/note/images/hutao/hutao1.webp')
        // tileImages[4] = _.loadImage('/note/images/hutao/hutao5.webp')
        // tileImages[5] = _.loadImage('/note/images/hutao/hutao1.webp')
        // tileImages[6] = _.loadImage('/note/images/hutao/hutao7.webp')
        // tileImages[7] = _.loadImage('/note/images/hutao/hutao1.webp')
        // tileImages[8] = _.loadImage('/note/images/hutao/hutao7.webp')
        // tileImages[9] = _.loadImage('/note/images/hutao/hutao3.webp')
        // tileImages[10] = _.loadImage('/note/images/hutao/hutao1.webp')
        // tileImages[11] = _.loadImage('/note/images/hutao/hutao5.webp')
        // tileImages[12] = _.loadImage('/note/images/hutao/hutao5.webp')
        
    }



    function startOver() {
        // Create cell for each spot on the grid
        for (let i = 0; i < DIM * DIM; i++) {
            grid[i] = new Cell(tiles.length);
        }
    }

    function checkValid(arr:any, valid:any) {
        for (let i = arr.length - 1; i >= 0; i--) {
            let element = arr[i];
            if (!valid.includes(element)) {
                arr.splice(i, 1);
            }
        }
    }

    _.draw=()=> {
        if (window && window["p5DrawLoop"] !== "waveFunctionCollapse") {
            _.noLoop();
          }
        _.background(0);
        // Draw the grid
        const w = _.width / DIM;
        const h = _.height / DIM;
        for (let j = 0; j < DIM; j++) {
            for (let i = 0; i < DIM; i++) {
                let cell = grid[i + j * DIM];
                if (cell.collapsed) {
                    let index = cell.options[0];
                    _.image(tiles[index].img, i * w, j * h, w, h);
                } else {
                    _.fill(0);
                    _.stroke(100);
                    _.rect(i * w, j * h, w, h);
                }
            }
        }

        // Make a copy of grid
        let gridCopy = grid.slice();
        // Remove any collapsed cells
        gridCopy = gridCopy.filter((a) => !a.collapsed);
        // The algorithm has completed if everything is collapsed
        
        if (gridCopy.length == 0) {
            _.noLoop();
            return;
        }

        // Pick a cell with least entropy

        // Sort by entropy
        gridCopy.sort((a, b) => {
            return a.options.length - b.options.length;
        });

        // Keep only the lowest entropy cells
        let len = gridCopy[0].options.length;
        let stopIndex = 0;
        for (let i = 1; i < gridCopy.length; i++) {
            if (gridCopy[i].options.length > len) {
                stopIndex = i;
                break;
            }
        }
        if (stopIndex > 0) gridCopy.splice(stopIndex);


        // Collapse a cell
        const cell = _.random(gridCopy);
        cell.collapsed = true;
        const pick = _.random(cell.options);
        if (pick === undefined) {
            startOver();
            return;
        }
        cell.options = [pick];

        // Calculate entropy
        const nextGrid = [];
        for (let j = 0; j < DIM; j++) {
            for (let i = 0; i < DIM; i++) {
                let index = i + j * DIM;
                if (grid[index].collapsed) {
                    nextGrid[index] = grid[index];
                } else {
                    let options = new Array(tiles.length).fill(0).map((x, i) => i);
                    // Look up
                    if (j > 0) {
                        let up = grid[i + (j - 1) * DIM];
                        let validOptions:any[] = [];
                        for (let option of up.options) {
                            let valid = tiles[option].down;
                            validOptions = validOptions.concat(valid);
                        }
                        checkValid(options, validOptions);
                    }
                    // Look right
                    if (i < DIM - 1) {
                        let right = grid[i + 1 + j * DIM];
                        let validOptions :any[]= [];
                        for (let option of right.options) {
                            let valid = tiles[option].left;
                            validOptions = validOptions.concat(valid);
                        }
                        checkValid(options, validOptions);
                    }
                    // Look down
                    if (j < DIM - 1) {
                        let down = grid[i + (j + 1) * DIM];
                        let validOptions :any[]= [];
                        for (let option of down.options) {
                            let valid = tiles[option].up;
                            validOptions = validOptions.concat(valid);
                        }
                        checkValid(options, validOptions);
                    }
                    // Look left
                    if (i > 0) {
                        let left = grid[i - 1 + j * DIM];
                        let validOptions :any[]= [];
                        for (let option of left.options) {
                            let valid = tiles[option].right;
                            validOptions = validOptions.concat(valid);
                        }
                        checkValid(options, validOptions);
                    }

                    // I could immediately collapse if only one option left?
                    nextGrid[index] = new Cell(options);
                }
            }
        }

        grid = nextGrid;
    }

}
