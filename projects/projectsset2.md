# Projects related to DOM

## project link
[click here]()

# Solution code

## project1

```javascript
console.log("Vaibhav)

const form = document.querySelector('form')

form.addEventListener('submit', function (e) {
    e.preventDefault()
    const heigth = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const result = document.querySelector('#result')

    if (heigth === '' || heigth < 0 || isNaN(heigth)) {
        result.innerHTML = `Please give a valid Height ${heigth}`
    }
    else if (weight === '' || weight < 0 || isNaN(weight)) {
        result.innerHTML = `Please give a valid weight ${weight}`
    }
    else {
        const bmi = (weight / ((heigth * heigth) / 10000)).toFixed(2)
        result.innerHTML = `<span>${bmi}</span>`
    }
    
})

```