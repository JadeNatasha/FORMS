console.log("JavaScript is connected."); // Just to verify connection

document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault(); // stop page from refreshing

    // Get values from form
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let dob = document.getElementById("dob").value;
    let education = document.getElementById("Education").value;
    let bio = document.getElementById("bio").value;
    let age = document.getElementById("age").value;

    let gender = document.querySelector('input[name="gender"]:checked');
    gender = gender ? gender.value : "Not selected";

    // Basic validations
    if (password.length < 8) {
        alert("Password must be at least 8 characters!");
        return;
    }

    if (age < 18) {
        alert("You must be at least 18 years old!");
        return;
    }

    if (!dob) {
        alert("Please select your Date of Birth!");
        return;
    }

    // Log data to console
    console.log("Form Submitted with the following data:");
    console.log("Name:", name);
    console.log("Gender:", gender);
    console.log("Email:", email);
    console.log("Password:", password); // Caution: avoid logging passwords in production
    console.log("Age:", age);
    console.log("DOB:", dob);
    console.log("Education:", education);
    console.log("Bio:", bio);

    // Optional: show alert
    alert(
        "Form Submitted!\n\n" +
        "Name: " + name + "\n" +
        "Gender: " + gender + "\n" +
        "Email: " + email + "\n" +
        "Age: " + age + "\n" +
        "DOB: " + dob + "\n" +
        "Education: " + education + "\n" +
        "Bio: " + bio
    );

    window.location.href = "Submit.html";
});
