const cookie = name => `; ${document.cookie}`.split(`; ${name}=`).pop().split(';').shift();
const toggleElementDisplay = element => element.style.display = (element.style.display === "none" ? "block" : "none");
const randomBoolean = () => Math.random() >= 0.5;