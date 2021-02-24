/************************************
 * CIBLAGE DES BALISES
 **************************************/

 const photos = document.querySelectorAll(".photo-list li");
 const em = document.querySelector("em");
 const button = document.querySelector("#selectAll");
 const button2 = document.querySelector("#deselectAll");
 const toggleButton = document.querySelector("#toggle");
 


/************************************
 * FONCTONS
 **************************************/
function compteur() {
  em.textContent = document.querySelectorAll(".selected").length;
}

 function clickOnLi() {
   this.classList.toggle("selected");
   console.log(document.querySelectorAll(".photo-list li.selected").length);
   compteur();
 }

 function selectAll() {
   for(let li of photos) {
     li.classList.add("selected");
   }
   compteur();
 }

 function deselectAll() {
  for(let li of photos) {
    li.classList.remove("selected");
  }
  compteur();
 }

function toggleTout() {
  if(this.textContent == "Séléctionner tout") {
    for(let li of photos) {
        li.classList.add("selected");   
    }
    this.textContent = "Désélectionner tout";
  } else {
    for(let li of photos) {
        li.classList.remove("selected");    
    }
    this.textContent = "Séléctionner tout";
  }
    compteur();
  }  
    
  


 /************************************
 * EVENT HANDLERS
 ************************************/

for(let li of photos) {
  li.addEventListener("click", clickOnLi);
  compteur();
}

button.addEventListener("click", selectAll);
button2.addEventListener("click", deselectAll);
toggleButton.addEventListener("click", toggleTout);
