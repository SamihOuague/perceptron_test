import Graphics_3D from "./js/Graphics_3D";


let points = [[-2, 2, 2], [2, 2, 2], [2, -2, 2], [-2, -2, 2],
            [-2, 2, -2], [2, 2, -2], [2, -2, -2], [-2, -2, -2], 
            [2, 2, 0], [-2, 2, 0], [0, 2, 2], [0, 2, -2], [0, 2, 0],
            [-2, -2, 0], [0, -2, 2], [0, -2, -2], [2, -2, 0], [0, -2, 0],
            [2, 0, 2], [2, 0, -2], [-2, 0, -2], [-2, 0, 2],
            [2, 0, 0], [-2, 0, 0], [0, 0, 2], [0, 0, -2]];
let g = new Graphics_3D(200, 200, points);

g.init_graphic();

let rx, ry, rz;
rx = ry = rz = 0;

let myInt = setInterval(() => {
    rx = ry = rx + 1;
    g.rotation_3D(rx, ry, rz);

}, 100);