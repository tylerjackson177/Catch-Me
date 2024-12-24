$(document).ready(function () {
    let animalImage = $("#animal-image");
    let corners = ["top-left", "top-right", "bottom-left", "bottom-right"];

    // Function to position the image in a random corner
    function setRandomCorner() {
      let randomCorner = corners[Math.floor(Math.random() * corners.length)];
      switch (randomCorner) {
        case "top-left":
          animalImage.css({ top: "10px", left: "10px", right: "unset", bottom: "unset" });
          break;
        case "top-right":
          animalImage.css({ top: "10px", right: "10px", left: "unset", bottom: "unset" });
          break;
        case "bottom-left":
          animalImage.css({ bottom: "10px", left: "10px", top: "unset", right: "unset" });
          break;
        case "bottom-right":
          animalImage.css({ bottom: "10px", right: "10px", top: "unset", left: "unset" });
          break;
      }
    }

    // Handle animal selection
    $("#cat-btn").click(function () {
      animalImage.attr("src", "cat.jpg"); // Update image source
      animalImage.show(); // Make the image visible
      setRandomCorner(); // Position in a random corner
    });

    $("#dog-btn").click(function () {
      animalImage.attr("src", "dog.jpg");
      animalImage.show();
      setRandomCorner();
    });

    $("#tiger-btn").click(function () {
      animalImage.attr("src", "tiger.jpg");
      animalImage.show();
      setRandomCorner();
    });

    // Mouse proximity logic (similar to before)
    let distanceThreshold = 150; // Distance to trigger image movement

    $(document).mousemove(function (event) {
      let mouseX = event.pageX;
      let mouseY = event.pageY;

      let imageOffset = animalImage.offset();
      let imageCenterX = imageOffset.left + animalImage.width() / 2;
      let imageCenterY = imageOffset.top + animalImage.height() / 2;

      let distance = Math.sqrt(
        Math.pow(mouseX - imageCenterX, 2) + Math.pow(mouseY - imageCenterY, 2)
      );

      if (distance < distanceThreshold) {
        setRandomCorner(); // Move to another corner
      }
    });
  });
