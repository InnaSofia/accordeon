 let isOpen = false
 const list = document.getElementById('list');


function openModal(){
    const myContainer = document.getElementById('myContainer');

    if(isOpen){
        myContainer.styles.display = "none"
        isOpen = false
    }else{
        myContainer.styles.display = "flex"
        isOpen = true
    }
} 



