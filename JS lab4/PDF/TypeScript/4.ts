interface Point {
  x: number;
  y: number;
}

function distance(x1: number, y1: number, x2: number, y2: number): number;
function distance(p1: Point, p2: Point): number;

function distance(a: number | Point, b: number | Point, c?: number, d?: number): number {
  if (typeof a === "number" && typeof b === "number" && typeof c === "number" && typeof d === "number") {
    return Math.sqrt(Math.pow(c - a, 2) + Math.pow(d - b, 2));
  } else if (typeof a === "object" && typeof b === "object") {
    return Math.sqrt(Math.pow(b.x - a.x, 2) + Math.pow(b.y - a.y, 2));
  }
  throw new Error("Invalid arguments");
}

console.log(distance(1, 2, 3, 4)); 
console.log(distance({ x: 1, y: 2 }, { x: 3, y: 4 })); 