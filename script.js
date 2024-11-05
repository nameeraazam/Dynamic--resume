document.getElementById('resumeForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the default form submission
    // Gather input values with appropriate types
    var fullName = document.getElementById('fullName').value;
    var profession = document.getElementById('profession').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var location = document.getElementById('location').value;
    var workExperience = document.getElementById('workExperience').value;
    var education = document.getElementById('education').value;
    var expertise = document.getElementById('expertise').value;
    var skills = document.getElementById('skills').value
        .split(',')
        .map(function (skill) { return skill.trim(); })
        .join(', ');
    var languages = document.getElementById('languages').value
        .split(',')
        .map(function (lang) { return lang.trim(); })
        .join(', ');
    // Basic email validation
    if (!validateEmail(email)) {
        alert("Please enter a valid email address.");
        return;
    }
    // Generate the resume HTML
    var resumeHTML = "\n        <h3>".concat(fullName, "</h3>\n        <p><strong>Profession:</strong> ").concat(profession, "</p>\n        <p><strong>Email:</strong> ").concat(email, "</p>\n        <p><strong>Phone:</strong> ").concat(phone, "</p>\n        <p><strong>Location:</strong> ").concat(location, "</p>\n        <h4>Work Experience</h4>\n        <p>").concat(workExperience, "</p>\n        <h4>Education</h4>\n        <p>").concat(education, "</p>\n        <h4>Expertise</h4>\n        <p>").concat(expertise, "</p>\n        <h4>Skills</h4>\n        <p>").concat(skills, "</p>\n        <h4>Languages</h4>\n        <p>").concat(languages, "</p>\n    ");
    // Display the generated resume
    document.getElementById('displayResume').innerHTML = resumeHTML;
    // Show the print button
    document.getElementById('printButton').style.display = 'block';
});
// Print functionality
document.getElementById('printButton').addEventListener('click', function () {
    window.print();
});
function validateEmail(email) {
    var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}
