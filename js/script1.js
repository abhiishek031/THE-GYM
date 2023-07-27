const EMAILJS_USER_ID = "2006254@kiit.ac.in";
const EMAILJS_SERVICE_ID = "service_pva4o89";
const EMAILJS_TEMPLATE_ID = "template_psuoa5w";

document.getElementById("registerButton").addEventListener("click", function() {
  // Open a new page for GYM registration
  window.open("register.html", "_blank");
});

// Function to send email notification
function sendEmailNotification(email) {
  emailjs.init(EMAILJS_USER_ID);

  // Replace these values with the relevant fields for the email template
  const templateParams = {
    to_email: email,
    subject: "GYM Registration Confirmation",
    message: "Thank you for registering for the GYM!",
  };

  emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, templateParams)
    .then((response) => {
      console.log("Email sent successfully:", response);
    }, (error) => {
      console.error("Error sending email:", error);
    });
}
document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
  
    // Call the function to send the email notification
    sendEmailNotification(email);
  
    // Display a confirmation message (you can customize this further)
    alert(`Thank you, ${name}, for registering for the GYM! A confirmation email has been sent to ${email}.`);
  
    // Optional: You can redirect the user to a "Thank You" page or any other page after submitting the form.
    // window.location.href = "thankyou.html";
  });
  