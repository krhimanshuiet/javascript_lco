const flip = () => {
    // console.log("Card flipped");
    // console.log(this);
    this.classList.add("flip");

}


const sucess = () => {

}

const fail = () =>{

}

const reset = () =>{

}

const cards = document.querySelectorAll(".card");
console.log(cards);

cards.forEach((card)=> card.addEventListener("click",flip))
