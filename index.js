const circle = document.querySelector("#back-circle");
const changeColor = document.querySelector("#change-color");
const changeShape = document.querySelector("#change-shape");

changeColor.addEventListener("click", changeColorfunction);

let color = "#";

function changeColorfunction() {
  let randomValues = [
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
  ];

  for (let i = 0; i < 6; i++) {
    color += randomValues[Math.floor(Math.random() * randomValues.length)];
  }
  circle.style.backgroundColor = color;
  color = "#";
}

const shapes = ["square", "triangle", "hexagon", "rectangle", "circle"];

// let shapeToApply = "";

let shapeee = "";

changeShape.addEventListener("click", () => {
  shapeee = shapes[Math.floor(Math.random() * shapes.length)];

  const shape_div = document.querySelector("#shapes");

  console.log(shapeee);

  if (shapeee === "square") {
    shape_div.classList = [];
    shape_div.classList.add(shapeee);
  } else if (shapeee === "triangle") {
    shape_div.classList = [];
    shape_div.classList.add(shapeee);
  } else if (shapeee === "rectangle") {
    shape_div.classList = [];
    shape_div.classList.add(shapeee);
  } else if (shapeee === "circle") {
    shape_div.classList = [];
    shape_div.classList.add(shapeee);
  } else if (shapeee === "hexagon") {
    shape_div.classList = [];
    shape_div.classList.add(shapeee);
  } else {
    shape_div.classList = [];
    shape_div.classList.add(square);
  }
});

// function shapeFunction(){
//     for (let i = 0; i <= shapes.length; i++) {
//         shapeee = shapes[Math.floor(Math.random() * shapes.length)];
//       }

//       const shape_div = document.querySelector("#shapes");

//         if(shapeee === "square) {
//         shape_div.classList.remove("square");
//         shape_div.classList.add("shapeee");
//         }
//         else if(){

//         }
// }
