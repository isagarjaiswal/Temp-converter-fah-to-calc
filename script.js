const calculateTemp =()=>{
    const numberTemp = document.getElementById('temp').value;
  
    const tempSelected = document.getElementById('temp_diff');
    const valueTemp = temp_diff.options[tempSelected.selectedIndex].value;
  
    const celtoFah =(cel)=>{
     let fahrenheit = Math.round((cel*9/5)+32)
     return fahrenheit;
    }
    const fahtoCal =(fah)=>{
        let celsius = Math.round((fah-32)*5/9);
        return celsius;
    }
    let result;
    if(valueTemp=='cel'){
        result = celtoFah(numberTemp);
        document.getElementById('resultContainer').innerHTML=`= ${result}°Fahrenheit`
    }else{
        result = fahtoCal(numberTemp);
        document.getElementById('resultContainer').innerHTML=`= ${result}°Celsius`
    }
}