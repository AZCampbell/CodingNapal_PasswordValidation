// Select the input element for the password field
const passwordInput = document.querySelector(".pass-field input");

// Select all the list items for the requirements list
const requirementList = document.querySelectorAll(
  ".content .requirements-list li"
);

// Select the eye icon element to toggle password visibility
const eyeIcon = document.querySelector(".pass-field i");

// Store an array of objects with a regex and index to match against
const requirements = [
  {
    // Look for strings with at least 8 characters
    regex: /.{8,}/,
    // Index of the requirement in the requirements array
    index: 0,
  },
  {
    // Look for strings that contain a number (0...9)
    regex: /[0-9]/,
    // Index of the requirement in the requirements array
    index: 1,
  },
  {
    // Look for strings that contain a lowercase letter (a...z)
    regex: /[a-z]/,
    // Index of the requirement in the requirements array
    index: 2,
  },
  {
    // Look for strings that contain a special symbol (!...@)
    regex: /[^A-Za-z0-9]/,
    // Index of the requirement in the requirements array
    index: 3,
  },
  {
    // Look for strings that contain an uppercase letter (A...Z)
    regex: /[A-Z]/,
    // Index of the requirement in the requirements array
    index: 4,
  },
];

passwordInput.addEventListener("keyup", (e) => {
  // Loop through each requirement object in the array
  requirements.forEach((item) => {
    // Test the current input value against the regex in the current requirement object
    const isValid = item.regex.test(e.target.value);
    // Get the list item element in the requirements list corresponding to the current requirement object
    const requirementItem = requirementList[item.index];

    if (isValid) {
      // Update the class name of the first child element (the icon) to show a checkmark
      requirementItem.firstElementChild.className = "fa-solid fa-check";
      // Add the class "valid" to the list item element to style it
      requirementItem.classList.add("valid");
    } else {
      // Update the class name of the first child element (the icon) to show a circle
      requirementItem.firstElementChild.className = "fa-solid fa-circle";
      // Remove the class "valid" from the list item element to style it
      requirementItem.classList.remove("valid");
    }
  });
});

// Add a click event listener to the eye icon element
eyeIcon.addEventListener("click", () => {
  // If the type of the password input is "password", set it to "text". Otherwise, set it to "password".
  passwordInput.type = passwordInput.type === "password" ? "text" : "password";

  // If the type of the password input is "password", change the class name of the eye icon to "fa-solid fa-eye".
  // Otherwise, change it to "fa-solid fa-eye-slash".
  eyeIcon.className =
    passwordInput.type === "password"
      ? "fa-solid fa-eye"
      : "fa-solid fa-eye-slash";
});
