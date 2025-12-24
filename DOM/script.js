let mydiv = document.querySelector("#ab");
let newElement = document.createElement("span");
newElement.textContent = "Hrithik";

mydiv.insertAdjacentElement("afterend", newElement);
