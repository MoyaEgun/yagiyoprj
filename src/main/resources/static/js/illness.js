const params = new URLSearchParams(window.location.search);
const selectedIllness = params.get('illness');

/* 다중선택 이미지 */
const illnesses = ['eyes', 'joint', 'antioxidation'];

illnesses.forEach((illness) => {
  const recommendedItems = document.querySelectorAll(`[data-illness="${illness}"]`);
  recommendedItems.forEach((recommendedItem) => {
    recommendedItem.style.display = 'block';
  });
});

const navItems = document.querySelectorAll('.nav-item');

navItems.forEach(item => {
  item.style.display = 'none';
});

let recommendedNutrients = [];
let recommendedTexts = [];

if (selectedIllness.includes('eyes')) {
  recommendedNutrients.push('lutein');
  recommendedTexts.push('루테인');
}

if (selectedIllness.includes('joint')) {
  recommendedNutrients.push('calcium');
  recommendedTexts.push('칼슘ㆍ마그네슘');
}

if (selectedIllness.includes('antioxidation')) {
  recommendedNutrients.push('vitaminC');
  recommendedTexts.push('비타민C');
}

const selectedIllnesses = selectedIllness.split(',').map(i => i.trim());

selectedIllnesses.forEach(selectedIllness => {
  if (selectedIllness === 'eyes' && !recommendedNutrients.includes('lutein')) {
    recommendedNutrients.push('lutein');
    recommendedTexts.push('루테인');
  }
  if (selectedIllness === 'joint' && !recommendedNutrients.includes('calcium')) {
    recommendedNutrients.push('calcium');
    recommendedTexts.push('칼슘ㆍ마그네슘');
  }
  if (selectedIllness === 'antioxidation' && !recommendedNutrients.includes('vitaminC')) {
    recommendedNutrients.push('vitaminC');
    recommendedTexts.push('비타민C');
  }
});

/* 배열에 있는 값과 일치하는 데이터만 화면에 표시 */
const recommendedItems = document.querySelectorAll('.nav-item');

recommendedItems.forEach((item) => {
  if (recommendedNutrients.includes(item.dataset.id)) {
    item.style.display = 'block';
  } else {
    item.style.display = 'none';
  }
});

/* 배열의 첫번째 값을 찾아서 active클래스 추가 */
const navItem = document.querySelector(`[data-id="${recommendedNutrients[0]}"]`);

if (navItem) {
  navItem.classList.add('active');
}

/* 단일선택 이미지 */
const recommendedItem = document.querySelector(`[data-illness="${selectedIllness}"]`);

if (recommendedItem) {
  recommendedItem.style.display = 'block';
}

const heading = document.querySelector('.survey-nav h2');

if (heading) {
  heading.innerHTML = `추천영양성분 <em>${recommendedTexts.join(', ')}</em>`;
}
