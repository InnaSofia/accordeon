 const openModal = document.getElementById('openModal');//открыть и закрыть
 const answer = document.getElementById('answer');//ответ которы нужно открыть и закрыть

 openModal.addEventListener('click',openModal);

 function openAnswer(){
    answer.style.display ="flex"
 }
 
 openAnswer()