var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");
function opentab(tabname) {
  for (const tablink of tablinks) {
    tablink.classList.remove("active-link");
  }
  for (const tabcontent of tabcontents) {
    tabcontent.classList.remove("active-tab");
  }
  event.currentTarget.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tab");
}

var sidemenu = document.getElementById("sidemenu");
function openmenu() {
  sidemenu.style.right = "0";
}
function closemenu() {
  sidemenu.style.right = "-200px";
}

const scriptURL =
  "https://script.google.com/macros/s/AKfycby0JSdVamZKeWlkRk7wWcDmG6XnPmy79DOmLDzT9ZQ3_WzRqXr09p7DHBiKQKKVSW8xAA/exec";
const form = document.forms["submit-to-google-sheet"];
const msg = document.getElementById("msg");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      msg.innerHTML = "Message sent successfully!";
      setTimeout(function () {
        msg.innerHTML = "";
      }, 5000);
      form.reset();
    })
    .catch((error) => console.error("Error!", error.message));
});

const button = document.getElementById("mode-toggle");
const body = document.body;
const a = document.getElementsByTagName("a");

// Change color of anchor tags based on current mode

function anchor() {
  if (body.classList.contains("dark-mode")) {
    for (const link of a) {
      link.style.color = "#fff";
    }
  } else {
    for (const link of a) {
      link.style.color = "#000";
    }
  }
}

anchor();

button.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
  body.classList.toggle("light-mode");
  anchor();
});
