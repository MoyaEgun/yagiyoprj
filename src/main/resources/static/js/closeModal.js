 // 모달
          let modal = document.getElementById("myModal");

          // Get the <span> element that closes the modal
          let span = document.getElementsByClassName("close")[0];

          // Get the Yes and No buttons
          let yesBtn = document.getElementById("yes-btn");

          let noBtn = document.getElementById("no-btn");

          // Open the modal
          function openModal() {
            modal.style.display = "block";
          }

          // When the user clicks on <span> (x), close the modal
          span.onclick = function() {
            modal.style.display = "none";
          }

          // When the user clicks on Yes or No, close the modal and redirect if necessary
          yesBtn.onclick = function() {
            modal.style.display = "none";
            window.location.href = 'http://localhost:9080';
          }

          noBtn.onclick = function() {
            modal.style.display = "none";
          }