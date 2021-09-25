const modalBackground = document.querySelector(".modal-background");

let documentModalFragment1 = document.createDocumentFragment();
let documentModalFragment2 = document.createDocumentFragment();

for(let i = 0; i < 12; i++){
	let modalLeft = document.createElement("DIV");
	let modalRight = document.createElement("DIV");
	modalLeft.classList.add("modal-left", "selector");
	modalRight.classList.add("modal-right", "selector");
	modalLeft.innerHTML="<";
	modalRight.innerHTML=">";


	documentModalFragment1.appendChild(modalLeft);
	documentModalFragment2.appendChild(modalRight);
}
modalBackground.appendChild(documentModalFragment1);
modalBackground.appendChild(documentModalFragment2);