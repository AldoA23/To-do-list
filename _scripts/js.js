let inputBx = document.querySelector("#inputBx");
let list = document.querySelector("#list");

inputBx.addEventListener("keyup", function(event){
    if(event.key == "Enter") {
        addItem(this.value)
        this.value=""
    }
})

let addItem = (inputBx) => {
    let  listItem = document.createElement("li");
    listItem.innerHTML = `${inputBx}<i></i>`;

    /*----Ajouter une tàche ----*/
    listItem.addEventListener("click", function(){
        this.classList.toggle('done');
    })

    /*----------------------------------*/

    /*----Supprimer la tàche ----*/

    listItem.querySelector("i").addEventListener("click", function(){
        listItem.remove()
    })

     /*----------------------------------*/

    list.appendChild(listItem);
}

