"use strict";

const modal = document.querySelector(".modal");
const modalExit = document.querySelector(".modal-exit");

const modalLeft = document.querySelectorAll(".modal-left", ".selector");
const modalRight = document.querySelectorAll(".modal-right", ".selector");
const tattoosBox = document.querySelectorAll(".tattoos-box");

function disableScroll(){  
	window.scrollTo(0, 445);
}

function change(modalSelect, listaImgTatoos, i, pos, flag){

	function next(listImg, posicion, flag){
		let cant = listImg.length-1
		if( (posicion.pos < cant ) && flag ){
			posicion.pos++;
			modal.innerHTML = `<img class="modal-img" src="imagenes\\tatoos\\${listImg[posicion.pos]}" >`;
			let modalImg = document.querySelector(".modal-img");
			modalImg.style.animation = "modal-anim 0.4s forwards";
		}
		else if( (posicion.pos > 0) && !flag){
			posicion.pos--;
			modal.innerHTML = `<img class="modal-img" src="imagenes\\tatoos\\${listImg[posicion.pos]}">`;
			let modalImg = document.querySelector(".modal-img");
			modalImg.style.animation = "modal-anim 0.4s forwards";
		}
		return posicion.pos;
	}

	let listaImgRepUwu = ["uwu.jpg", "uwu2.jpg"];
	let listaImgRepMakima = ["makima.jpg", "makima2.jpg", "makima3.jpg", "makima4.jpg", "makima5.jpg"];
	let listaImgRepBs = ["bs.jpg", "bs2.jpg", "bs3.jpg"];
	let listaImgRepMazinger = ["mazinger.jpg","mazinger2.jpg"];
	let listaImgRepRei = ["rei.jpg","rei2.jpg","rei3.jpg"];
	let listaImgRepHxh = ["hxh.jpg","hxh2.jpg"];
	let listaImgRepRocklee = ["rocklee.jpg", "rocklee2.jpg"];
	if (!eventExist[i]) {
		modalSelect[i].addEventListener("click",function(e){
			if(listaImgRepUwu.includes(listaImgTatoos[i])){posicion.pos = next(listaImgRepUwu, posicion, flag);}
			else if (listaImgRepMakima.includes(listaImgTatoos[i])){posicion.pos = next(listaImgRepMakima, posicion, flag);}
			else if (listaImgRepBs.includes(listaImgTatoos[i])){posicion.pos = next(listaImgRepBs, posicion, flag)}
			else if (listaImgRepMazinger.includes(listaImgTatoos[i])){posicion.pos = next(listaImgRepMazinger, posicion, flag)}
			else if (listaImgRepRei.includes(listaImgTatoos[i])){posicion.pos = next(listaImgRepRei, posicion, flag)}
			else if (listaImgRepHxh.includes(listaImgTatoos[i])){posicion.pos = next(listaImgRepHxh, posicion, flag)}
			else if (listaImgRepRocklee.includes(listaImgTatoos[i])){posicion.pos = next(listaImgRepRocklee, posicion, flag)}
			e.stopPropagation();
			eventExist[i] = true;
			
		});
	}
}


for(let i = 0; i < 12; i++){
	var eventExist= [false, false, false, false, false, false, false, false, false, false, false, false];

	class Posicion {
		constructor(){
			this.pos= 0;
		}
	};

	var posicion = new Posicion();

	let listaImgTatoos = ["mob100.jpg","calavera.jpg","legoshi.jpg","uwu.jpg","sesshomaru.jpg","makima.jpg","bs.jpg","mazinger.jpg","rei.jpg","hxh.jpg","rocklee.jpg","skull.jpg"];

	tattoosBox[i].addEventListener("click",()=>{
		modal.innerHTML = `<img class="modal-img" src="imagenes\\tatoos\\${listaImgTatoos[i]}">`;
		modalBackground.style.visibility = "visible";
		window.scroll({
  			top: 445,
  			behavior: 'smooth'
			});
		window.addEventListener('scroll', disableScroll);
		let modalImg = document.querySelector(".modal-img");
		modalImg.style.animation = "modal-anim 0.9s forwards";
		let listaImgRep = ["uwu.jpg", "makima.jpg", "bs.jpg", "mazinger.jpg","rei.jpg","hxh.jpg","rocklee.jpg"];
		if(listaImgRep.includes(listaImgTatoos[i])){
			modalLeft[i].style.visibility = "visible";
			modalRight[i].style.visibility = "visible";
			change(modalRight, listaImgTatoos,i, posicion, true);
			change(modalLeft, listaImgTatoos,i, posicion,false);

		}
		else{
			modalLeft[i].style.visibility = "hidden";
			modalRight[i].style.visibility = "hidden";
		}
		
	});

	modalExit.addEventListener("click",()=>{
			modalBackground.style.visibility = "hidden";
			modalLeft[i].style.visibility = "hidden";
			modalRight[i].style.visibility = "hidden";
			posicion.pos= 0;
			window.removeEventListener('scroll', disableScroll);  
	});

	modalBackground.addEventListener("click",()=>{    
			modalBackground.style.visibility = "hidden";
			modalLeft[i].style.visibility = "hidden";
			modalRight[i].style.visibility = "hidden";
			posicion.pos= 0;
			window.removeEventListener('scroll', disableScroll);  
	});

}




 






