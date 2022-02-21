// Write your solution in this file!
let employee = {
    name: "Ian",
    streetAddress: "Home"
};

function updateEmployeeWithKeyAndValue(employee, key, value){
    let clone = {...employee};
    clone[key] = value;
    return clone;
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key] = value;
    return employee;
}

function deleteFromEmployeeByKey(employee, key){
    let clone = {...employee};
    delete clone[key];
    return clone;
}

function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee[key];
    return employee;
}
