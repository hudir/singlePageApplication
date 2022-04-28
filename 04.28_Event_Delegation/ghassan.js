/**
 * Tree menu
 Add JavaScript that will
  Enable showing/hiding the nested lists on click as shown in the demo
  Enable the bold text on mouse hovering effect
 */
//-----------------------------------------------//

const tree = document.querySelector("#tree");

const selectorAllLi = tree.querySelectorAll("li");

// move the 1st text node from list items into new <span> elements

//console.log(selectorAllLi);

for (let li of selectorAllLi) {
  // Created a span
  const spanElement = document.createElement("span");
  // Put the text inside the span
  // li.firstChild = the text inside li
  spanElement.append(li.firstChild);
  // Put the span with the text inside li
  li.prepend(spanElement);
}

function onTreeClick(e) {
  console.log(e.target.tagName);

  if (e.target.tagName !== "SPAN") {
    return;
  }

  // nestedList targeted the first ul in the li which is the parent's of target span (e.target.parentNode)
  const nestedList = e.target.parentNode.querySelector("ul");

//   console.log(e.target.parentNode);
//   console.log(e.target.parentNode.querySelector("ul"));
  if (!nestedList) {
    return;
  }

  nestedList.hidden = !nestedList.hidden;
  console.log(nestedList.hidden);
}

tree.addEventListener("click", onTreeClick);