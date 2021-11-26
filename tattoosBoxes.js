"use strict";
const conteinerTattoos = document.querySelector(".conteiner-tattoos");


let documentFragment = document.createDocumentFragment();

for(let i = 0; i < 12; i++){
	let listaTatoos=["mob100.jpg","skull.jpg","legoshi.jpg","uwu.jpg","sesshomaru.jpg","makima.jpg","bs.jpg","mazinger.jpg","rei.jpg","HxH.jpg","rocklee.jpg","skull.jpg"];
	let listaImgTatoos=["mob100.jpg","calavera.jpg","legoshi.jpg","uwu.jpg","sesshomaru.jpg","makima.jpg","bs.jpg","mazinger.jpg","rei.jpg","HxH.jpg","rocklee.jpg","skull.jpg"];
	let tattoosBox = document.createElement("DIV");
	tattoosBox.classList.add("tattoos-box");
	tattoosBox.innerHTML = `<img src="imagenes\\tatoos\\${listaImgTatoos[i]}" class = "tattoos-box__img" loading="lazy">`;
	tattoosBox.innerHTML += `<span class="tattoos-name">${listaTatoos[i]}</span>`;
	

	documentFragment.appendChild(tattoosBox);
}

conteinerTattoos.appendChild(documentFragment);

