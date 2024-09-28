# Projects related to DOM

## project link
[click here]()

# Solution code

## project1

```javascript
console.log("Vaibhav)

// // generate a random color

const randomColor = function(){
    const hex = '0123456789ABCDEF';
    let color = '#'
    for(let i = 0 ; i<6 ; i++){
        color += hex[Math.floor(Math.random()*16)]
    }
    return color
}
let intervalId

const stopChangingColor = function() {
    clearInterval(intervalId)
    intervalId = null
}

const startChangingColor = function(){
    if(!intervalId){
        intervalId = setInterval(changeBgColors , 1000)
    }
    function changeBgColors()
    {document.body.style.backgroundColor = randomColor()}
}

document.querySelector('#start').addEventListener('click' , startChangingColor)
document.querySelector('#stop').addEventListener('click' , stopChangingColor)