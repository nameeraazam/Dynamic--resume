document.getElementById('resumeForm')!.addEventListener('submit', function(event: Event) {
    event.preventDefault(); // Prevent the default form submission

    // Gather input values with appropriate types
    const fullName: string = (document.getElementById('fullName') as HTMLInputElement).value;
    const profession: string = (document.getElementById('profession') as HTMLInputElement).value;
    const email: string = (document.getElementById('email') as HTMLInputElement).value;
    const phone: string = (document.getElementById('phone') as HTMLInputElement).value;
    const location: string = (document.getElementById('location') as HTMLInputElement).value;
    const workExperience: string = (document.getElementById('workExperience') as HTMLTextAreaElement).value;
    const education: string = (document.getElementById('education') as HTMLTextAreaElement).value;
    const expertise: string = (document.getElementById('expertise') as HTMLTextAreaElement).value;
    const skills: string = (document.getElementById('skills') as HTMLInputElement).value
        .split(',')
        .map(skill => skill.trim())
        .join(', ');
    const languages: string = (document.getElementById('languages') as HTMLInputElement).value
        .split(',')
        .map(lang => lang.trim())
        .join(', ');

    // Basic email validation
    if (!validateEmail(email)) {
        alert("Please enter a valid email address.");
        return;
    }

    // Generate the resume HTML
    const resumeHTML: string = `
        <h3>${fullName}</h3>
        <p><strong>Profession:</strong> ${profession}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Location:</strong> ${location}</p>
        <h4>Work Experience</h4>
        <p>${workExperience}</p>
        <h4>Education</h4>
        <p>${education}</p>
        <h4>Expertise</h4>
        <p>${expertise}</p>
        <h4>Skills</h4>
        <p>${skills}</p>
        <h4>Languages</h4>
        <p>${languages}</p>
    `;

    // Display the generated resume
    document.getElementById('displayResume')!.innerHTML = resumeHTML;

    // Show the print button
    document.getElementById('printButton')!.style.display = 'block';
});

// Print functionality
document.getElementById('printButton')!.addEventListener('click', function() {
    window.print();
});

function validateEmail(email: string): boolean {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}
