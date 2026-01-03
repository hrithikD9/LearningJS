/*
STORY TO REMEMBER REFLOW + REPAINT WHEN ADDING ELEMENTS:

Imagine building a brick wall while people are watching.

Each brick = a DOM element.

If you add bricks one by one directly to the wall:
- After placing each brick, the builder must realign the whole wall (reflow)
- Then repaint the visible part (repaint)
- Doing this repeatedly makes the wall construction slow and shaky

If you first build the entire wall off-site (DocumentFragment or hidden container):
- No realignment or painting happens while building
- When the wall is attached at once, alignment happens once (reflow)
- Painting happens once (repaint)

Key idea:
Reflow and repaint always happen together when elements are added.
Performance improves by reducing how many times they are triggered,
not by trying to avoid them completely.
*/

const t1 = performance.now();

for (let i = 1; i <= 100; i++) {
  let para = document.createElement("p");
  para.textContent = "This is para " + i;
  document.body.appendChild(para);
}

const t2 = performance.now();

console.log("Total time : " + (t2 - t1)); // Total time : 1.199999999254942

const t3 = performance.now();
let myDiv = document.createElement("div");

for (let i = 1; i <= 100; i++) {
  let para = document.createElement("p");
  para.textContent = "This is para " + i;
  myDiv.appendChild(para);
}

document.body.appendChild(myDiv);

const t4 = performance.now();

console.log("Total time : " + (t4 - t3)); // Total time : 0.2999999988824129    ---- faster

const t5 = performance.now();


// The best way to do it
let fragment = document.createDocumentFragment();

for (let i = 1; i <= 100; i++) {
  let para = document.createElement("p");
  para.textContent = "This is the best para : " + i;
//   there is no reflow and repaint working behind
  fragment.appendChild(para);
}

document.body.appendChild(fragment);

const t6 = performance.now();

console.log("Total time : " + (t6 - t5));
