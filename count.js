let count = 0

const counterDisplay = document.querySelector('.counter')

const buttOne = document.querySelector('.buttOne')
const buttTwo = document.querySelector('.buttTwo')



buttOne.addEventListener("click", ()=>{
    count++
    if(count>0){
        buttTwo.textContent = 'Decrease!'
    }
    counterDisplay.textContent = count
})  

buttTwo.addEventListener("click", ()=>{
    if(count>0){
        count--
        buttTwo.textContent = 'Decrease!' //Just to change the name of the text in Second Box to "Decrease"
        counterDisplay.textContent = count
        if(count == 0)buttTwo.textContent = 'Yamete Kuda Sai~' // A MEME
    }else{
        alert("FBI-YOU ARE WARNED TO NOT CLICK ANY FURTHER!") // Another MEME
    }
})