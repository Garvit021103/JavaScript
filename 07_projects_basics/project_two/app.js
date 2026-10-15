const form = document.querySelector('form')

 //   const height = parseInt(document.querySelector('#height').value)
// this will give you empty values

form.addEventListener('submit',function(e){
    e.preventDefault() // stop the default action 

    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const results = (document.querySelector('.results'))


    if(height === '' || height < 0 || isNaN(height)){
        results.innerHTML = `Please give a valid ${height}`;
    } else if(weight === '' || weight < 0 || isNaN(weight)){
        results.innerHTML = `Please give a valid ${weight}`;
    }
    else{
        const BMI = (weight / ((height*height)/1000)).toFixed(2)
        let category = '';
        if(BMI < 18.6){
          category = "Under"
        }else if (BMI >= 18.6 || BMI <=24.9){
          category = "Normal"

        }else if(BMI > 24.9){
          category = "Over"

        }
        // show the result 
        // results.innerHTML = `<span>${BMI}</span>`
        results.innerHTML = `<span>Your BMI is ${BMI} & category is (${category})</span>`
    }

})