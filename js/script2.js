const  calculateTemp = () => {
    const temp_val = document.getElementById("temp").value;
    // console.log(temp_val);
    
    const temp_diff = document.getElementById("temp-diff");
    const tempSelected = temp_diff.options[temp_diff.selectedIndex].value;
    // console.log(tempSelected)

    const calToFah = (cel) => {
        let fahrenheit = Math.round((cel * 9/5) + 32);
        return fahrenheit;
    } 
    const fahToCal = (fah) => {
        let calcius = Math.round((fah - 32) * 5/9);
        return calcius;
    } 
    
    let result;

    if(tempSelected == 'cel'){
        result = calToFah(temp_val);
        document.getElementById('resultContainer').innerHTML = `= ${result} °Fahrenheit`;
    }
    else{
        result = fahToCal(temp_val);
        document.getElementById('resultContainer').innerHTML = `= ${result} °Celsius`;
    }
}