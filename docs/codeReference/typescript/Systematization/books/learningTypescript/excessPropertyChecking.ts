const existingObject = {
  activity: "working",
  born: 1925,
  name: "ajn404",
};

type Poet = {
  born: number;
  name: string;
};

const extroPropertyButOk: Poet = existingObject; //OK
console.log(extroPropertyButOk);

// type Poet = {
//   born: number;
//   name: string;
// };

// // Ok: all fields match what's expected in Poet
// const poetMatch: Poet = {
//   born: 1928,
//   name: "Maya Angelou",
// };

// const extraProperty: Poet = {
//   activity: "walking",
//   born: 1935,
//   name: "Mary Oliver",
// };
interface Balls {
  diameter: number;
}
interface Sphere {
  diameter: number;
}

let ball: Balls = { diameter: 10 };
let sphere: Sphere = { diameter: 20 };

sphere = ball;
ball = sphere;
