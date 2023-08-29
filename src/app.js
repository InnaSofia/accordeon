/* var accordion = function(){
    var data = $(".accordion").attr("data-accordion");
    
    $(".accordion-header").on("clic", function(){
     if(data === "cloce"){
         $(".accordion-body").slideUp();
         if($(this).hasClass("active")){
             $(this).toggleClass("active");
         
         }else{
             $(".accordion-header").removeClass("active");
             $(this).toggleClass("active");
         }
         }
         else{
         $(this).toggleClass("active");
     }
     $(this).next(".accordion-body").not(":animated").slideToggle();
    });
 }
 accordion()
 */
 
  /* const Modalcontainer1 = document.getElementById('Modalcontainer1');//Модальное окно1
  const openModal1 = document.getElementById('openModal1');//кнопка1
  
  buttonModal1.addEventListener('clic',openModal1); */


  function openModal(){
    const Container = document.getElementById('Container')

    Container.style.display = "flex"
    
}


