let height = document.getElementById('height');
let weight = document.getElementById('weight');

let resultText = document.getElementById('result')
let bmiText = document.getElementById('bmi')

function calc(){
    if (height.value > 300 || height.value < 0 || weight.value > 300 || weight.value < 0 || weight.value == "" || height.value == ""){
        height.value = "";
        weight.value = "";
        bmiText.innerHTML = "";
        resultText.innerHTML = "Calculate your Body Mass Index!";
        alert("Invalid Inputs! Please Enter valid Height(cm) and Weight(kg)");
    } else {
        let condition = "";

        let heightInMeters = height.value/100;
        let weightInKgs = weight.value;

        let bmi = weightInKgs / (heightInMeters * heightInMeters);
        
        if (bmi < 18.5){
            condition = 'Underweight';
        } else if (bmi < 25){
            condition = 'Normal';
        } else if (bmi < 30){
            condition = 'Overweight';
        } else {
            condition = 'Obesity';
        }

        bmiText.innerHTML = `Your BMI index is ${bmi.toFixed(2)}`;
        resultText.innerHTML = `You are ${condition}`;
    } 
}