window.onload = function () {
  const knapp = document.getElementById("knapp");
  const input = document.getElementById("input");

  function submitKnapp() {
    console.log("Du har tryckt på knappen!");
    console.log("Värdet i input-fältet är: " + input.value);
  }

  knapp.addEventListener("click", submitKnapp);
};
