const calculate = () => {
    // Getting input values from user
    let physics = document.querySelector("#physics").value;
    let chemistry = document.querySelector("#chemistry").value;
    let maths = document.querySelector("#maths").value;
    let bc = document.querySelector("#bc").value;

    // Grades variable
    let grades = "";
    
    // Check if any input fields are empty
    if (chemistry === "" || bc === "" || maths === "" || physics === "") {
        document.querySelector("#showdata").innerHTML = "Please enter all the fields";
        return; // Stop the function execution if any field is empty
    }
    
    // Convert input values to numbers and ensure they're valid
    physics = parseFloat(physics);
    chemistry = parseFloat(chemistry);
    maths = parseFloat(maths);
    bc = parseFloat(bc);
    
    if (isNaN(physics) || isNaN(chemistry) || isNaN(maths) || isNaN(bc)) {
        document.querySelector("#showdata").innerHTML = "Please enter valid numbers for all fields";
        return; // Stop if any value is not a valid number
    }

    // Calculate total marks
    let totalGrades = physics + chemistry + maths + bc;

    // Calculate percentage
    let percentage = (totalGrades / 400) * 100;

    // Determine the grade based on percentage
    if (percentage >= 80) {
        grades = "A";
    } else if (percentage >= 60) {
        grades = "B";
    } else if (percentage >= 40) {
        grades = "C";
    } else {
        grades = "F";
    }

    // Determine pass or fail based on percentage
    let passStatus = percentage >= 39.5 ? "Pass" : "Fail";

    // Display the result
    document.querySelector("#showdata").innerHTML = `
        Out of 400, your total is ${totalGrades} and percentage is ${percentage.toFixed(2)}%.<br>
        Your grade is ${grades}. You are ${passStatus}.
    `;
};
