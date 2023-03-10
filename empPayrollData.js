class EmployeePayrollData{
    
    constructor(...params){
        this.name = params[0];
        this.profileImage = params[1];
        this.gender = params[2];
        this.department = params[3];
        this.salary = params[4];
        this.startDate = params[5];
        this.notes = params[6];
    }

    get name(){
        return this._name;
    }
    set name(name){
        let nameRegex = RegExp("^[A-Z]{1}[a-z]{2,}$");
        if(nameRegex.test(name)){
            this._name = name;
        }else{
            throw "Invalid name";
        }
        
    }

    get profileImage(){
        return this._profileImage;
    }
    set profileImage(profileImage){
        this._profileImage = profileImage;
    }

    get gender(){
        return this._gender;
    }
    set gender(gender){
        this._gender = gender;
    }

    get department(){
        return this._department;
    }
    set department(department){
        this._department = department;
    }

    get salary(){
        return this._salary;
    }
    set salary(salary){
        this._salary = salary;
    }

    get startDate(){
        return this._startDate;
    }
    
    set startDate(startDate){
        const currentDate = new Date();
        //future.setDate(future.getDate() - 30);
        let timeDiff = currentDate.getTime() - startDate.getTime();
        let daysDiff = Math.floor(timeDiff / (1000 * 3600 * 24));
        if(startDate <= currentDate && daysDiff <= 30){
            this._startDate = startDate;
        } else {
            throw "Start date is invalid";
        }
    }

    get notes(){
        return this._notes;
    }
    set notes(notes){
        this._notes = notes;
    }

    toString(){
        return "Name : "+this.name+", profile image : "+this.profileImage+", gender : "+this.gender
        +", Department : "+this.department+ ", Salary : "+this.salary+" , start date : "+ this.startDate
        +", notes : "+this.notes;
    }

}

function save(){

    let empName = document.getElementById("name").value;

    let empProfileImage = document.querySelector('input[name="profile"]:checked').value;

    let empGender = document.querySelector('input[name="gender"]:checked').value;
    
    let empDepartment = document.querySelectorAll(".checkbox");
    let empDepartmentArr = [];
    for(let emp of empDepartment){
        if(emp.checked){
            empDepartmentArr.push(emp.value);
        }
    }
    //salary
    let empSalary = document.querySelector("#salary").value;
    
    //Start Date
    let day = document.querySelector('#day').value;
    let month = document.querySelector('#month').value;
    let year = document.querySelector('#year').value;
    let empStartDate = new Date(year,month,day);
    let tempDate = new Date()

    let empNotes = document.querySelector('#notes').value;

    try{

        let employeePayroll = new EmployeePayrollData(empName,empProfileImage,empGender,empDepartmentArr,empSalary,empStartDate,empNotes);
        //empName,empProfileImage,empGender,empDepartmentArr,empSalary,empStartDate,empNotes
        saveToLocalStorage(employeePayroll);
        //console.log(employeePayroll.toString());
        
        
    }catch(ex) {
        console.error(ex);
    }
    
}

const saveToLocalStorage = (employeePayrollData) => {
    let empPayrollDataList = JSON.parse(localStorage.getItem("employeePayrollList"));
    if(empPayrollDataList == undefined){
        empPayrollDataList = [employeePayrollData];
    }else{
        empPayrollDataList.push(employeePayrollData);
    }
    alert(JSON.stringify(empPayrollDataList));
    localStorage.setItem("employeePayrollList",JSON.stringify(empPayrollDataList));
}

function getFromLocalStorage(){
    let empPayrollDataList = JSON.parse(localStorage.getItem("employeePayrollList"));
    for(let emp of empPayrollDataList){
        console.log(emp);
    }
}

const resetForm = () =>{
    console.log("reset called ")
    setValue('#name','');
    unsetSelectedValues('[name=profile]');
    unsetSelectedValues('[name=gender]');
    unsetSelectedValues('[name=department]');
    setValue('#salary','');
    setValue('#notes','');
    setValue('#day','1');
    setValue('#month','0');
    setValue('#year','2022');
}

const unsetSelectedValues = (propertyValue) =>{
    let allItems = document.querySelectorAll(propertyValue);
    allItems.forEach( item => { 
        item.checked = false;
    }); 
}

const setValue = (id, value) =>{
    const element = document.querySelector(id);
    element.value = value;
}