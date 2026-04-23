const btn = document.getElementById("toggleDark");

btn.onclick = () => {
  document.body.classList.toggle("dark");
};