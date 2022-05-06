let height = document.querySelector(".calc1");
let weight = document.querySelector(".calc2");
let btn = document.querySelector("button");
let bmiH = document.querySelector(".BMI_answer");

btn.addEventListener("click", function () {
   
  let bmi = weight.value / ((height.value/100) * (height.value/100));


  if (bmi < 18.5) {
    bmiH.innerHTML = `Your BMI is ${Math.floor(bmi)}. you are underWeight`;
  }else if(bmi>18.5 && bmi<24.9){
    bmiH.innerHTML = `Your BMI is ${Math.floor(bmi)}. your weight is normal`
  }else if(bmi>25 && bmi<29.9){
    bmiH.innerHTML = `Your BMI is ${Math.floor(bmi)} you are overWeight`
  }else{
    bmiH.innerHTML = `Your BMI is ${Math.floor(bmi)} you are VeryoverWeight`
  }
  console.log(bmi)
});
