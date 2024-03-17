document
  .querySelector("input[type=file]")
  .addEventListener("change", function (e) {
    let reader = new FileReader();
    reader.onload = (event) => {
      document.querySelector(".user-data img").src = event.target.result;
    };
    reader.readAsDataURL(e.target.files[0]);
  });
