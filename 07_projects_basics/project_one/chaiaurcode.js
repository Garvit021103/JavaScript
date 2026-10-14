const buttons = document.querySelectorAll('.button')
const body = document.querySelector('body')
// node list pe for each laga skte ho queryselectorall se node list milti hai 
buttons.forEach(function(button){
    console.log(button)
    button.addEventListener('click',function(e){
        console.log(e)
        console.log(e.target)
        if(e.target.id ==='grey'){
            body.style.backgroundColor = e.target.id // grey
        }
        if(e.target.id ==='white'){
            body.style.backgroundColor = e.target.id // white
        }
        if(e.target.id ==='blue'){
            body.style.backgroundColor = e.target.id // blue
        }
        if(e.target.id ==='yellow'){
            body.style.backgroundColor = e.target.id // yelow
        }
        if(e.target.id ==='purple'){
            body.style.backgroundColor = e.target.id // purple
        }
    })
})