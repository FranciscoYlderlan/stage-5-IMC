import { component } from "./components.js";
import { error } from "./text-error.js";
import { modal} from "./modal.js"

function calculateIMC() {
    let heightValue = component.inputHeight.value;
    let weightValue = component.inputWeight.value;
    
    if(isNotNumber(heightValue)){
        error.addOutline(component.inputHeight)
    }
    if(isNotNumber(weightValue)){
        error.addOutline(component.inputWeight)
    }

    if(isNotNumber(heightValue) || isNotNumber(weightValue)){
        error.open(); 
        return    
    }
    
    let result = (weightValue/((heightValue/100)**2)).toFixed(2);
    modal.message.innerHTML = `Seu IMC é de ${result}`;
    modal.open();
}


function isNotNumber(num){
    return isNaN(num) || (num === "");   
}


component.buttonSubmit.addEventListener("click", () => calculateIMC())


component.inputHeight.addEventListener("input", () =>{ 
    error.close();
    error.removeOutline(component.inputHeight);
})
component.inputWeight.addEventListener("input", () => {
    error.close()
    error.removeOutline(component.inputWeight);
})