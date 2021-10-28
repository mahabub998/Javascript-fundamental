document.querySelector("#checkButton").addEventListener("click", function () {
  alert("button clicked");

  var num = document.querySelector("#text_field").value;
  console.log(num);

  try {
    if (num < 5) {
      throw "input is low";
    } else if (num > 20) {
    }
  } catch (error) {
    console.log(error);
  }
});
