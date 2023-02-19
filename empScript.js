let salarySelector = document.querySelector('#salary');
salarySelector.addEventListener("change", function(){
    let rangeValue = document.getElementById('salary');
    document.getElementById('salaryOutput').value=rangeValue.value;
}); 