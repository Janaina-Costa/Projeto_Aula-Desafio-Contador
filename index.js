const decremente = document.getElementById('decrement')
const increment = document.getElementById('increment')
const show = document.getElementById('show')
const btn = document.querySelectorAll('.btn')
const desce = document.querySelector('#desce')
const sobe = document.querySelector('#sobe')

decremente.disabled = false
increment.disabled = false
let valor = 0

desce.style.display = 'none'
sobe.style.display = 'none'

decremente.addEventListener('click', ()=>{  
    valor = valor - 1
    show.innerText= valor
    ChangeColor()
    message()
    stopo()
    
})

increment.addEventListener('click', ()=>{  
    
   valor = valor + 1
   show.innerText = valor
    ChangeColor()
    message()
    stopo()
    
 
})

const ChangeColor = ()=>{
    if(valor <0){
        show.style.color = 'red'
    }else if(valor>=0){
        show.style.color='black'
    }
}

const message = ()=>{
  let lastValue = valor
    if(valor <= -10){
        desce.style.display ='block'
       show.innerText = lastValue
       
    }   
    if(valor >= -9 && valor <= 9){
        desce.style.display='none'
        sobe.style.display = 'none'
    }
    if(valor >=10){
        sobe.style.display = 'block'
        show.innerText = lastValue
    }
    
}

const stopo = ()=>{
   if(valor >=10){
       increment.disabled = true
   }else if(valor<= -10){
       decremente.disabled = true
   }else if( valor > -10 || valor < 10){
       increment.disabled = false
       decremente.disabled = false

   }
}

