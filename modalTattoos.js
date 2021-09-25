const modal = document.querySelector(".modal");

const modalExit = document.querySelector(".modal-exit");

const modalLeft = document.querySelectorAll(".modal-left", ".selector");
const modalRight = document.querySelectorAll(".modal-right", ".selector");
const tattoosBox = document.querySelectorAll(".tattoos-box");

function next(listImg, posicion, flag){
	let cant = listImg.length-1
	if( (posicion < cant ) && flag ){
		posicion++;
		console.log(posicion);
		modal.innerHTML = `<img class="modal-img" src="imagenes\\tatoos\\${listImg[posicion]}">`;
	}
	else if( (posicion > 0) && !flag){
		posicion--;
		console.log(posicion);
		modal.innerHTML = `<img class="modal-img" src="imagenes\\tatoos\\${listImg[posicion]}">`;
	}
	return posicion;
}



for(let i = 0; i < 12; i++){

	let listaImgTatoos = ["mob100.jpg","calavera.jpg","legoshi.jpg","uwu.jpg","sesshomaru.jpg","makima.jpg","bs.jpg","mazinger.jpg","rei.jpg","hxh.jpg","rocklee.jpg","skull.jpg"];

	tattoosBox[i].addEventListener("click",()=>{
		modal.innerHTML = `<img class="modal-img" src="imagenes\\tatoos\\${listaImgTatoos[i]}">`;
		modalBackground.style.visibility = "visible";
		window.scroll({
  			top: 445,
  			behavior: 'smooth'
			});
		let listaImgRep = ["uwu.jpg", "makima.jpg", "bs.jpg", "mazinger.jpg","rei.jpg","hxh.jpg","rocklee.jpg"];
		if(listaImgRep.includes(listaImgTatoos[i])){
			modalLeft[i].style.visibility = "visible";
			modalRight[i].style.visibility = "visible";
			let listaImgRepUwu = ["uwu.jpg", "uwu2.jpg"];
			let listaImgRepMakima = ["makima.jpg", "makima2.jpg", "makima3.jpg", "makima4.jpg", "makima5.jpg"];
			let listaImgRepBs = ["bs.jpg", "bs2.jpg", "bs3.jpg"];
			let listaImgRepMazinger = ["mazinger.jpg","mazinger2.jpg"];
			let listaImgRepRei = ["rei.jpg","rei2.jpg","rei3.jpg"];
			let listaImgRepHxh = ["hxh.jpg","hxh2.jpg"];
			let listaImgRepRocklee = ["rocklee.jpg", "rocklee2.jpg"];
			var pos=0;
			modalRight[i].addEventListener("click",function(e){
				if(listaImgRepUwu.includes(listaImgTatoos[i])){pos = next(listaImgRepUwu, pos, true)}
				else if (listaImgRepMakima.includes(listaImgTatoos[i])){pos = next(listaImgRepMakima, pos, true)}
				else if (listaImgRepBs.includes(listaImgTatoos[i])){pos = next(listaImgRepBs, pos, true)}
				else if (listaImgRepMazinger.includes(listaImgTatoos[i])){pos = next(listaImgRepMazinger, pos, true)}
				else if (listaImgRepRei.includes(listaImgTatoos[i])){pos = next(listaImgRepRei, pos, true)}
				else if (listaImgRepHxh.includes(listaImgTatoos[i])){pos = next(listaImgRepHxh, pos, true)}
				else if (listaImgRepRocklee.includes(listaImgTatoos[i])){pos = next(listaImgRepRocklee, pos, true)}
				e.stopPropagation();
			});
			modalLeft[i].addEventListener("click",function(e){
				if(listaImgRepUwu.includes(listaImgTatoos[i])){pos = next(listaImgRepUwu, pos, false)}
				else if (listaImgRepMakima.includes(listaImgTatoos[i])){pos = next(listaImgRepMakima, pos, false)}
				else if (listaImgRepBs.includes(listaImgTatoos[i])){pos = next(listaImgRepBs, pos, false)}
				else if (listaImgRepMazinger.includes(listaImgTatoos[i])){pos = next(listaImgRepMazinger, pos,false)}
				else if (listaImgRepRei.includes(listaImgTatoos[i])){pos = next(listaImgRepRei, pos, false)}
				else if (listaImgRepHxh.includes(listaImgTatoos[i])){pos = next(listaImgRepHxh, pos, false)}
				else if (listaImgRepRocklee.includes(listaImgTatoos[i])){pos = next(listaImgRepRocklee, pos, false)}
				e.stopPropagation();
			});
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
	});

	modalBackground.addEventListener("click",()=>{    
			modalBackground.style.visibility = "hidden";
			modalLeft[i].style.visibility = "hidden";
			modalRight[i].style.visibility = "hidden";
	});

}







 






