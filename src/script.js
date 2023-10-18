const array =[

    {
        question: "Что такое Госуслуги?",
        answer:"Госуслуги — портал, где граждане, организации и ИП могут оформить документы, получить выписки и справки в электронном виде, найти юридически значимую информацию."
    },

    {
        question: "Как зарегистрироваться на Госуслугах?",
        answer:"Онлайн через банк — 10 минут, Лично в центре обслуживания — от 15 минут, При помощи номера телефона и электронной почты."
    },

    {
        question: "Куда подавать документы для смены ФИО?",
        answer:"В загс по месту жительства или регистрации рождения."
    },

    {
        question: "Сколько времени занимает регистрация имени?",
        answer:"Один месяц, если все необходимые документы были выданы отделом ЗАГС, в который вы обратились. Если нужные документы были выданы другими отделами ЗАГС, срок может быть увеличен до трёх месяцев."
    },

    {
        question: "Что такое СНИЛС и зачем он нужен?",
        answer:"СНИЛС — страховой номер индивидуального лицевого счёта,который присваивается каждому гражданину Социальным фондом (СФР). Страховой номер состоит из 11 цифр и присваивается один раз. Он не меняется даже при утере документов или смене ФИО. СНИЛС используется для пенсионных отчислений, а также для регистрации на Госуслугах и сайтах ведомств. С его помощью можно подавать заявления и получать электронные услуги."
    },

    {
        question: "Как оформить СНИЛС?",
        answer:"СНИЛС можно оформить у работодателя, на сайте Социального фонда (СФР) или лично в отделении СФР или МФЦ. Страховой номер присваивается один раз и не меняется даже при утере документов или смене ФИО."
    },

    {
        question: "Что делать если СНИЛС утерян?",
        answer:"СНИЛС не имеет физического носителя — достаточно знать свой номер, поэтому утрата старой пластиковой карточки или распечатки с номером ничем не грозит. Ваши данные хранятся в системе Социального фонда (СФР), а узнать СНИЛС можно разными способами."
    },
]

function renderArray(){
    const container = document.getElementById('list')

    container.innerHTML = ''

    array.forEach((arrayItem) =>{
        container.innerHTML += `
        <div class="mt-2">
                  <div id="question" class="questions flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-700">
                         <div>
                            <span>${arrayItem.question}</span>
                         </div>


                         <div>
                             <button class='btn'>
                             <i class="fa-solid fa-lock" style="color: #7b0f99"></i>
                             </button>

                        
                         </div>
                      </div>

                  <div id="answer" class="answers px-4 pt-4 pb-2 text-sm text-gray-500 hidden">
                  ${arrayItem.answer}
                  </div>
              </div>
        `
    })
}
renderArray()

const questions = document.querySelectorAll('.questions')//все вопросы
const answers = document.querySelectorAll('.answers')//все ответы
const buttons = document.querySelectorAll('.btn')//кнопки



/* function lock(){
    if(isOpen){
        button.style.display = 'none'
        isOpen = false
    }else{
        button.style.display = 'flex'
        isOpen = true
    }} */

    
//добавим обработчики событий для каждого вопросы
questions.forEach((question, index, ) =>{
    question.addEventListener('click',() =>{
        answers[index].classList.toggle('hidden') //находим класс(тогд будет включать и переключать)
        buttons[index].querySelector('i').classList.toggle('fa-lock')
        buttons[index].querySelector('i').classList.toggle('fa-unlock')
        
    })
})