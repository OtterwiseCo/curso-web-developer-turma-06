// console.log(window);
// console.log(document);

// console.log("Primeiro log");
// window.onload = () => {
//   console.log("Segundo log");
// };
// console.log("Terceiro log");

// window.onload = () => {
//   window.innerWidth = 100;
//   console.log(window.innerHeight);
//   console.log(window.innerWidth);
//   console.log(window);
// };

window.onload = () => {
  const paragraph = document.createElement("p");
  // // console.log(paragraph);
  // paragraph.innerText = "oaisdoiasjdoiasjoidjasoidjasoi";

  // //
  // const body = document.getElementById("body");
  // // const body = document.getElementsByTagName("body");
  // //
  // // console.log(body[0]);
  // body.appendChild(paragraph);

  // const box = document.getElementsByClassName("box");
  // //box[1].innerHTML = "<p>Esse parágrafo foi criado dentro de um box</p>";
  // //console.log(box);

  // //const body = document.querySelector("body");
  // const box2 = document.querySelector(".box");
  // const boxes = document.querySelectorAll(".box");

  // const boxParagraph = boxes[1].querySelector("p");
  // boxParagraph.remove();
  // //boxes[1].removeChild(boxParagraph);

  // console.log(boxes);

  const h1 = document.querySelector("h1");
  console.log(h1);
  console.log(h1.getAttribute("class"));
  console.log(h1.hasAttribute("id"));
  console.log(h1.hasAttributes());
  //console.log(h1.removeAttribute("class"));
  h1.setAttribute("class", `${h1.getAttribute("class")} primeira-classe`);
};
