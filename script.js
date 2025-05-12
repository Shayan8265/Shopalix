function sendOTP() {
  const email = document.getElementById('email').value;
  if (!email) {
    alert("Please enter your email.");
    return;
  }

  document.getElementById('loader').style.display = 'flex';

  setTimeout(() => {
    document.getElementById('loader').style.display = 'none';
    document.getElementById('status').innerText = "OTP sent to " + email;
    document.getElementById('otp-section').style.display = "block";
  }, 1500); // Simulate 1.5 second loading
}

document.addEventListener('DOMContentLoaded', function () {
  const loginForm = document.getElementById('login-form');
  if (loginForm) {
    loginForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const otp = document.getElementById('otp').value;
      if (otp === "123456") {
        window.location.href = "index.html";
      } else {
        alert("Invalid OTP");
      }
    });
  }
});
