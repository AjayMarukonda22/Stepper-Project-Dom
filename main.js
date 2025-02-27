
const stepperState = {
    steps: ["Contact Details", "Shipping Address", "Payment", "Delivered"],
    descriptions: [
        "Add contact details for further communication",
        "Add shipping address for successful delivery",
        "Complete payment to complete the order",
        "Ready to get delivered!",
        "Order Delivered successfully!"
    ],
    currentIndex: 0
};

let stepsContainer = document.querySelector('#steps');
let stepName = document.getElementById('stepName');
let description = document.getElementById('description');
let nextButton = document.getElementById('next');
let previousButton = document.getElementById('previous');

const renderUI = () => {

    stepsContainer.innerHTML = "";
    stepName.innerHTML = "";

    stepperState.steps.forEach((step, index) => { 

     let logo = document.createElement('div');
       logo.className = "logo";
       logo.textContent = index+1;
       logo.style.height = "50px";
       logo.style.width = "50px";
       logo.style.borderRadius = "50%";
       logo.style.display = "flex";
       logo.style.justifyContent = "center"
       logo.style.alignItems = "center";
       logo.style.backgroundColor = "lightgrey";


     let name = document.createElement('p');
     name.className = step;
     name.textContent = step;

     stepName.appendChild(name);

     stepsContainer.appendChild(logo);

     let line = document.createElement('div');
     if (index < stepperState.steps.length - 1) {
        line.className = "line";
        line.classList.add("active");
        line.style.width = "30%";  
        line.style.height = "5px"; 
        line.style.background = "lightgray"; 
        stepsContainer.appendChild(line);
    }

    if(index < stepperState.currentIndex) {
         logo.style.backgroundColor = "green";
         line.style.backgroundColor = "green"
     }

     if(index === stepperState.currentIndex)
        logo.style.backgroundColor = "blue";
    
    description.textContent = stepperState.descriptions[stepperState.currentIndex];

    })

    if(stepperState.currentIndex === 0) {
        previousButton.disabled = true;
    }
    else {
        previousButton.disabled = false;
    }

    if(stepperState.currentIndex === stepperState.steps.length) {
        nextButton.disabled = true;
    }
    else {
        nextButton.disabled = false;
    }

}


const nextStep = (e) => {
    if(stepperState.currentIndex < stepperState.steps.length) {
        stepperState.currentIndex++;
        renderUI();
    }

    if(stepperState.currentIndex === stepperState.steps.length-1) {
        e.target.textContent = "Finish";
    }

    if(stepperState.currentIndex === stepperState.steps.length) {
        e.target.disabled = "true";
    }
        
    
}

const previousStep = (e) => {

    if(stepperState.currentIndex > 0) {
        stepperState.currentIndex--;
        renderUI();
    }

}

  nextButton.addEventListener('click', nextStep);

 previousButton.addEventListener('click', previousStep);

renderUI();
