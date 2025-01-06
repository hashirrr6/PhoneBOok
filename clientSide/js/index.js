// Fetch users from the API
async function fetchUsers() {
  try {
      const response = await fetch("/api/getuser");
      const users = await response.json();
      displayUsers(users);
  } catch (error) {
      console.error("Error fetching users:", error);
  }
}

// Display the users in the grid
function displayUsers(users) {
  const grid = document.querySelector(".grid");
  
  // Ensure grid exists before trying to modify it
  if (!grid) {
      console.error("Grid element not found.");
      return;
  }

  grid.innerHTML = ""; // Clear existing users
  users.forEach(user => {
      const userDiv = document.createElement("div");
      userDiv.classList.add("user");
      userDiv.innerHTML = `
          <h3>${user.name}</h3>
          <p>Phone: ${user.phone}</p>
          <p>Email: ${user.email}</p>
      `;
      grid.appendChild(userDiv);
  });
}

// Call the function to load users when the page loads
document.addEventListener("DOMContentLoaded", fetchUsers);
// Fetch users from the API
async function fetchUsers() {
    try {
        const response = await fetch("/api/getuser");
        const users = await response.json();
        displayUsers(users);
    } catch (error) {
        console.error("Error fetching users:", error);
    }
}

// Display the users in the grid
function displayUsers(users) {
    const grid = document.querySelector(".grid");
    
    // Ensure grid exists before trying to modify it
    if (!grid) {
        console.error("Grid element not found.");
        return;
    }

    grid.innerHTML = ""; // Clear existing users
    users.forEach(user => {
        const userDiv = document.createElement("div");
        userDiv.classList.add("user");
        userDiv.innerHTML = `
            <h3>${user.name}</h3>
            <p>Phone: ${user.phone}</p>
            <p>Email: ${user.email}</p>
        `;
        grid.appendChild(userDiv);
    });
}

// Call the function to load users when the page loads
document.addEventListener("DOMContentLoaded", fetchUsers);

// Save contact
async function saveContact() {
  const name = document.getElementById("name").value;
  const phone = document.getElementById("phone").value;
  const email = document.getElementById("email").value;
  const address = document.getElementById("address").value;

  // Validate fields
  if (!name || !phone || !email || !address) {
      alert("All fields are required.");
      return;
  }

  const user = { name, phone, email, address };

  try {
      const response = await fetch("/api/adduser", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(user)
      });

      const result = await response.json();
      alert(result.msg);
      if (response.status === 200) {
          window.location.href = "../index.html"; // Redirect back to the main page
      }
  } catch (error) {
      console.error("Error saving user:", error);
  }
}

// Clear form
function clearForm() {
  document.getElementById("name").value = "";
  document.getElementById("phone").value = "";
  document.getElementById("email").value = "";
  document.getElementById("address").value = "";
}
