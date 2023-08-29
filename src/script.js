let isOpen = false

function openModal(){
    const Container = document.getElementById('myContainer')

    if(isOpen){
        Container.styles.display = "none"
        isOpen = false
    }else{
        Container.styles.display = "flex"
        isOpen = true
    }
console.log(openModal)
    
    
}

