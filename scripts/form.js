function checkPassword() {
    var password = document.getElementById("password");
    var confirmPassword = document.getElementById("confirm-password");
    var passwordMatch = document.getElementById("password-match");

    if (password.value !== confirmPassword.value) {
      passwordMatch.style.display = "block";
      password.value = "";
      confirmPassword.value = "";
      document.getElementById("username").focus();
    } else {
      passwordMatch.style.display = "none";
    }
  }

  function updateRating() {
    var rangeValue = document.getElementById("page-rating").value;
    document.getElementById("rangevalue").textContent = rangeValue;
  }