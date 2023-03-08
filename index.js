// To use simply copy this line into the browser console
// For all items in trolley:
for (let h2 of document.getElementsByTagName("h2")) {
  console.log(h2.innerHTML);
}

// For all items in list:
// TODO: Get quantities

const h3s = document.getElementsByTagName("h3");

const body = document.getElementsByTagName("body")[0];

const newBody = document.createElement("body");

for (let h3 of h3s) {
  if (h3.innerHTML.charAt(1) != "$") {
    let newH3 = document.createElement("p");
    newH3.innerHTML += h3.innerHTML;
    newH3.style.marginBottom = "4px";
    newH3.style.textTransform = "capitalize";
    newBody.appendChild(newH3);
  }
}

body.innerHTML = newBody.innerHTML;
