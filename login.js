function login() {
  const user = document.getElementById("username").value;
  const pass = document.getElementById("password").value;

  // Demo credentials
  if (user === "admin" && pass === "1234") {
    // Save login state
    localStorage.setItem("loggedIn", "true");

    // Redirect to your existing page
    window.location.href = "index.html";
  } else {
    document.getElementById("error").innerText =
      "Invalid username or password";
  }
}
