function getUrlParameter(name) {
        name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
        var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
        var results = regex.exec(location.search);
        return results === null
          ? ''
          : decodeURIComponent(results[1].replace(/\+/g, ' '));
      }
      window.onload = function () {
        let nameInput = decodeURIComponent(getUrlParameter('name'));
        let genderInput = decodeURIComponent(getUrlParameter('gender'));
        let ageInput = decodeURIComponent(getUrlParameter('age'));
        let illnessInput = decodeURIComponent(getUrlParameter('illness'));
        let heightInput = decodeURIComponent(getUrlParameter('height'));
        let weightInput = decodeURIComponent(getUrlParameter('weight'));
        let bmiInput = decodeURIComponent(getUrlParameter('bmi'));
        let bmiDotInput = decodeURIComponent(getUrlParameter('bmiDot'));

        let nameValue = document.getElementById('name-value');
        let genderValue = document.getElementById('gender-value');
        let ageValue = document.getElementById('age-value');
        let illnessValue = document.getElementById('illness-value');
        let heightValue = document.getElementById('height-value');
        let weightValue = document.getElementById('weight-value');
        let bmiValue = parseFloat(
          document.querySelector('#bmi-value').textContent,
        );
        //bmiDot
        const bmiDot = document.getElementById('bmi-dot'); // bmi-dot 요소 가져오기
        let bmiDotPosition;

        if (bmiDotInput < 18.5) {
          bmiDotPosition = (bmiDotInput - 0) / (18.5 - 0) * 20;
        } else if (bmiDotInput >= 18.5 && bmiDotInput < 23) {
          bmiDotPosition = (bmiDotInput - 18.5) / (23 - 18.5) * 20 + 20;
        } else if (bmiDotInput >= 23 && bmiDotInput < 25) {
          bmiDotPosition = (bmiDotInput - 23) / (25 - 23) * 20 + 40;
        } else if (bmiDotInput >= 25 && bmiDotInput < 30) {
          bmiDotPosition = (bmiDotInput - 25) / (30 - 25) * 20 + 60;
        } else {
          bmiDotPosition = (bmiDotInput - 30) / (50 - 30) * 20 + 80;
        }
        bmiDot.style.marginLeft = `${bmiDotPosition}%`;

        document.getElementById('name-value').textContent = nameInput;
        document.getElementById('gender-value').textContent = genderInput;
        document.getElementById('age-value').textContent = ageInput;
<!--        document.getElementById('illness-value').textContent = illnessInput;-->
        document.getElementById('height-value').textContent = heightInput;
        document.getElementById('weight-value').textContent = weightInput;
        document.getElementById('bmi-value').textContent = bmiInput;

        // URL에서 BMI 값을 추출
        const urlParams = new URLSearchParams(window.location.search);
        const bmi = urlParams.get('bmi') ? Number(urlParams.get('bmi')) : document.getElementById("bmi") ? Number(document.getElementById("bmi").textContent) : null;

        if (bmi < 18.5) {
          document.querySelector(".lv1").classList.add("active");
        } else if (bmi < 23) {
          document.querySelector(".lv2").classList.add("active");
        } else if (bmi < 25) {
          document.querySelector(".lv3").classList.add("active");
        } else if (bmi < 30) {
          document.querySelector(".lv4").classList.add("active");
        } else {
          document.querySelector(".lv5").classList.add("active");
        }

        if (
          nameValue &&
          genderValue &&
          ageValue &&
          illnessValue &&
          heightValue &&
          weightValue &&
          bmiValue
        ) {
          nameValue.textContent = nameInput;
          genderValue.textContent = genderInput;
          ageValue.textContent = ageInput;
          illnessValue.textContent = illnessInput;
          heightValue.textContent = heightInput;
          weightValue.textContent = weightInput;
          bmiValue.textContent = bmiInput;

          let urlParams = new URLSearchParams(window.location.search);
          let urlName = urlParams.get('name');
          let UrlGender = urlParams.get('gender');
          let UrlAge = urlParams.get('age');
          let UrlIllness = urlParams.get('illness');
          let UrlHeight = urlParams.get('height');
          let UrlWeight = urlParams.get('weight');
          let UrlBmi = urlParams.get('bmi');

          let bmiValueElement = document.getElementById('bmi-value');
          if (bmiValueElement && UrlBmi) {
            urlParams.set('bmi', UrlBmi); // update the URL with the original value
            bmiValueElement.textContent = UrlBmi;
          } else {
            console.error(
              'Element with ID "bmi-value" not found or BMI value not provided in URL!',
            );
          }
        }
       };

