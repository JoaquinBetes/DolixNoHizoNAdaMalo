"use strict";
const archivo = document.getElementById('file');
const formCont = document.querySelector(".form-cont");

archivo.addEventListener('change',(e)=>{
    let documentFragment = document.createDocumentFragment();
    for (let i = 0 ; i < archivo.files.length ; i++) {
        let fileName = document.createElement("SPAN");
        fileName.classList.add("file-name");
        fileName.classList.add("file-text");
        let name = archivo.files[i].name;
        if (archivo.files[i].name == name && i==1)fileName.setAttribute("style", "bottom:28%;")
        else if (archivo.files[i].name == name && i==2)fileName.setAttribute("style", "bottom:23%;");
        if (name.length > 25){
            name = name.substring(0, 25);
            name = name.concat("...");
        }
        fileName.innerHTML = name;
        documentFragment.appendChild(fileName);
    }
    formCont.appendChild(documentFragment);
    /* BUG CUANDO NO SELECCIONAN TODO DE UNA */

/*     const leerArchivo = (ar)=>{
        const reader = new FileReader();
        reader.readAsText(ar);
        reader.addEventListener("load", (e)=>{
            console.log(e);
        })
    leerArchivo(archivo.files[0]);
    } PUEDE LLEGAR A SERVIR PARA MOSTRAR MINIATURA */

    
});