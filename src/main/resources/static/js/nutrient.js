     const jsonData = {
        eyes: {
          lutein: {
            name: '루테인',
            description:
              '# 노화로 인해 감소될 수 있는 황반색소밀도를 유지하여 눈건강에 도움을 줄 수 있음.\nㅤ\n # 1일 섭취량 : 성인 20mgㅤ',
               image: '/img/루테인.png',
          },
        },
        antioxidation: {
          vitaminC: {
            name: '비타민C',
            description:
              '# 결합조직 형성과 기능유지에 필요\nㅤ \n# 철의 흡수에 필요 \nㅤ \n# 항산화 작용을 하여 유해산소로부터 세포를 보호하는데 필요\nㅤ \n# 1일 섭취량 : 영, 유아의 경우 35-45 mg, 아동은 50-90 mg, 성인은 100 mg, 임산부와 흡연자는 130-140 mg',
              image: '/img/비타민.png',
          },
        },
        joint: {
          calcium: {
            name: '칼슘ㆍ마그네슘',
            description:
              '# 뼈와 치아 형성에 필요 \nㅤ \n# 신경과 근육 기능 유지에 필요\nㅤ \n# 정상적인 혈액응고에 필요\nㅤ \n# 골다공증발생 위험 감소에 도움을 줌\nㅤ \n# 1일 섭취량: 성인 6~700mg',
              image: '/img/칼슘.png',
          },
        },
      };

      // URL에서 illness 값 추출
      const urlParams = new URLSearchParams(window.location.search);
      const illness = urlParams.get('illness');
      const dosage = urlParams.get('dosage');
      const point = urlParams.get('point');

      const illnessArr = illness.split(',');
      const illnessArrArr = [illnessArr];

    if (illnessArr.includes('eyes')) {
      // 코드
    } else if (illnessArr.includes('joint') && illnessArr.includes('antioxidation')) {
      // 코드
    } else if (illnessArr.includes('joint')) {
      // 코드
    } else if (illnessArr.includes('antioxidation')) {
      // 코드
    } else {
      console.error(`Could not find the illness: ${illness}`);
    }

      // HTML 코드 변경
if (illness === 'eyes') {
  const jsonDataEyes = jsonData.eyes;
  const lutein = jsonDataEyes.lutein;

const content = `
  <div style="overflow: auto;">
    <h4 style="float: left;">${lutein.name}</h4>
    <img src="${lutein.image}" alt="${lutein.name}" width="80" height="80" style="float: left; margin-left: 5px;"/>
  </div>
  <ul style="clear: both;">
    ${lutein.description
      .split('\n')
      .map(line => `<li>${line}</li>`)
      .join('')}
  </ul>
`;

  const leftDiv = document.querySelector('#omega3 .left');
  if (!leftDiv) {
    console.error('Could not find leftDiv for eyes');
    console.error(new Error().stack);
  } else {
    leftDiv.innerHTML = content;
  }
}
      /*joint*/
      if (illness === 'joint') {
        const jsonDataJoint = jsonData.joint;
        const calcium = jsonDataJoint.calcium;

        const content = `
          <div style="overflow: auto;">
          <h4 style="float: left;">${calcium.name}</h4>
          <img src="${calcium.image}" alt="${calcium.name}" width="80" height="80" style="float: left; margin-left: 5px;"/>
        </div>
        <ul style="clear: both;">
          ${calcium.description
            .split('\n')
            .map(line => `<li>${line}</li>`)
            .join('')}
        </ul>
      `;
        const left2Div = document.querySelector('#hyals .left2');
        if (!left2Div) {
          console.error('Could not find left2Div for joint');
          console.error(new Error().stack);
        } else {
          left2Div.innerHTML = content;
        }
      }

      /* antioxidation */
      if (illness === 'antioxidation') {
        const jsonDataAntioxidation = jsonData.antioxidation;
        const vitaminC = jsonDataAntioxidation.vitaminC;

        const content = `
        <div style="overflow: auto;">
          <h4 style="float: left;">${vitaminC.name}</h4>
          <img src="${vitaminC.image}" alt="${vitaminC.name}" width="80" height="80" style="float: left; margin-left: 5px;"/>
        </div>
        <ul style="clear: both;">
          ${vitaminC.description
            .split('\n')
            .map(line => `<li>${line}</li>`)
            .join('')}
        </ul>
      `;
        const left3Div = document.querySelector('#probiotics .left3');
        if (!left3Div) {
          console.error('Could not find left3Div for antioxidation');
          console.error(new Error().stack);
        } else {
          left3Div.innerHTML = content;
        }
      }

      /*    eyes and joint    */
         if (illness.includes('eyes') && illness.includes('joint')) {
        const jsonDataEyes = jsonData.eyes;
        const lutein = jsonDataEyes.lutein;
        const jsonDataJoint = jsonData.joint;
        const calcium = jsonDataJoint.calcium;

        const eyesContent = `
           <div style="overflow: auto;">
            <h4 style="float: left;">${lutein.name}</h4>
            <img src="${lutein.image}" alt="${lutein.name}" width="80" height="80" style="float: left; margin-left: 5px;"/>
          </div>
          <ul style="clear: both;">
            ${lutein.description
              .split('\n')
              .map(line => `<li>${line}</li>`)
              .join('')}
          </ul>
        `;
        const jointContent = `
            <div style="overflow: auto;">
            <h4 style="float: left;">${calcium.name}</h4>
            <img src="${calcium.image}" alt="${calcium.name}" width="80" height="80" style="float: left; margin-left: 5px;"/>
          </div>
          <ul style="clear: both;">
            ${calcium.description
              .split('\n')
              .map(line => `<li>${line}</li>`)
              .join('')}
          </ul>
        `;

        const omega3Div = document.querySelector('#omega3 .left');
        const hyalsDiv = document.querySelector('#hyals .left2');

        if (omega3Div && hyalsDiv) {
          omega3Div.innerHTML = eyesContent;
          hyalsDiv.innerHTML = jointContent;
        }
      }
        /*   eyes and anitoxidation     */
      if (illness.includes('eyes') && illness.includes('antioxidation')) {
        const jsonDataEyes = jsonData.eyes;
        const lutein = jsonDataEyes.lutein;
        const jsonDataAntioxidation = jsonData.antioxidation;
        const vitaminC = jsonDataAntioxidation.vitaminC;

        const eyesContent = `
          <div style="overflow: auto;">
          <h4 style="float: left;">${lutein.name}</h4>
          <img src="${lutein.image}" alt="${lutein.name}" width="80" height="80" style="float: left; margin-left: 5px;"/>
        </div>
        <ul style="clear: both;">
          ${lutein.description
            .split('\n')
            .map(line => `<li>${line}</li>`)
            .join('')}
        </ul>
      `;

        const antioxidationContent = `
            <div style="overflow: auto;">
            <h4 style="float: left;">${vitaminC.name}</h4>
            <img src="${vitaminC.image}" alt="${vitaminC.name}" width="80" height="80" style="float: left; margin-left: 5px;"/>
          </div>
          <ul style="clear: both;">
            ${vitaminC.description
              .split('\n')
              .map(line => `<li>${line}</li>`)
              .join('')}
          </ul>
        `;

        const omega3Div = document.querySelector('#omega3 .left');
        const probioticsDiv = document.querySelector('#probiotics .left3');

        if (omega3Div && probioticsDiv) {
          omega3Div.innerHTML = eyesContent;
          probioticsDiv.innerHTML = antioxidationContent;
        }
      }

     /* joint and antioxidation */
      if (illness.includes('joint') && illness.includes('antioxidation')) {
        const jsonDataJoint = jsonData.joint;
        const calcium = jsonDataJoint.calcium;
        const jsonDataAntioxidation = jsonData.antioxidation;
        const vitaminC = jsonDataAntioxidation.vitaminC;

        const jointContent = `
         <div style="overflow: auto;">
          <h4 style="float: left;">${calcium.name}</h4>
          <img src="${calcium.image}" alt="${calcium.name}" width="80" height="80" style="float: left; margin-left: 5px;"/>
        </div>
        <ul style="clear: both;">
          ${calcium.description
            .split('\n')
            .map(line => `<li>${line}</li>`)
            .join('')}
        </ul>
      `;

        const antioxidationContent = `
            <div style="overflow: auto;">
            <h4 style="float: left;">${vitaminC.name}</h4>
            <img src="${vitaminC.image}" alt="${vitaminC.name}" width="80" height="80" style="float: left; margin-left: 5px;"/>
          </div>
          <ul style="clear: both;">
            ${vitaminC.description
              .split('\n')
              .map(line => `<li>${line}</li>`)
              .join('')}
          </ul>
        `;
        const hyalsDiv = document.querySelector('#hyals .left2');
        const probioticsDiv = document.querySelector('#probiotics .left3');

        if (hyalsDiv && probioticsDiv) {
          hyalsDiv.innerHTML = jointContent;
          probioticsDiv.innerHTML = antioxidationContent;
        }
      }


/* eyes and joint and antioxidation */
// If illness includes eyes, joint, or antioxidation
if (
  illness.includes('eyes') &&
  illness.includes('joint') &&
  illness.includes('antioxidation')
) {
  const jsonDataEyes = jsonData.eyes;
  const lutein = jsonDataEyes.lutein;
  const jsonDataJoint = jsonData.joint;
  const calcium = jsonDataJoint.calcium;
  const jsonDataAntioxidation = jsonData.antioxidation;
  const vitaminC = jsonDataAntioxidation.vitaminC;

  const eyesContent = `
   <div style="overflow: auto;">
      <h4 style="float: left;">${lutein.name}</h4>
      <img src="${lutein.image}" alt="${lutein.name}" width="80" height="80" style="float: left; margin-left: 5px;"/>
    </div>
    <ul style="clear: both;">
      ${lutein.description
        .split('\n')
        .map(line => `<li>${line}</li>`)
        .join('')}
    </ul>
  `;
  const jointContent = `
        <div style="overflow: auto;">
        <h4 style="float: left;">${calcium.name}</h4>
        <img src="${calcium.image}" alt="${calcium.name}" width="80" height="80" style="float: left; margin-left: 5px;"/>
      </div>
      <ul style="clear: both;">
        ${calcium.description
          .split('\n')
          .map(line => `<li>${line}</li>`)
          .join('')}
      </ul>
    `;
  const antioxidationContent = `
    <div style="overflow: auto;">
      <h4 style="float: left;">${vitaminC.name}</h4>
      <img src="${vitaminC.image}" alt="${vitaminC.name}" width="80" height="80" style="float: left; margin-left: 5px;"/>
    </div>
    <ul style="clear: both;">
      ${vitaminC.description
        .split('\n')
        .map(line => `<li>${line}</li>`)
        .join('')}
    </ul>
  `;
  const omega3Div = document.querySelector('#omega3 .left');
  const hyalsDiv = document.querySelector('#hyals .left2');
  const probioticsDiv = document.querySelector('#probiotics .left3');

  if (omega3Div && hyalsDiv && probioticsDiv) {
    omega3Div.innerHTML = eyesContent;
    hyalsDiv.innerHTML = jointContent;
    probioticsDiv.innerHTML = antioxidationContent;
  }
}

 // Show relevant section and hide others
  const omega3Section = document.querySelector('#omega3');
  const hyalsSection = document.querySelector('#hyals');
  const probioticsSection = document.querySelector('#probiotics');

  console.log('illness:', illness);
  console.log('omega3Section:', omega3Section);
  console.log('hyalsSection:', hyalsSection);
  console.log('probioticsSection:', probioticsSection);

if (!omega3Section || !hyalsSection || !probioticsSection) {
  console.error('Could not find sections');
  console.error(new Error().stack);
} else {
  if (illness === 'eyes') {
    omega3Section.classList.remove('hidden');
    hyalsSection.classList.add('hidden');
    probioticsSection.classList.add('hidden');
  } else if (illness === 'joint') {
    omega3Section.classList.add('hidden');
    hyalsSection.classList.remove('hidden');
    probioticsSection.classList.add('hidden');
  } else if (illness === 'antioxidation') {
    omega3Section.classList.add('hidden');
    hyalsSection.classList.add('hidden');
    probioticsSection.classList.remove('hidden');
  } else if (illness.includes('eyes') && illness.includes('antioxidation')) {
    omega3Section.classList.remove('hidden');
    hyalsSection.classList.add('hidden');
    probioticsSection.classList.remove('hidden');
  } else if (illness.includes('eyes') && illness.includes('joint')) {
    omega3Section.classList.remove('hidden');
    hyalsSection.classList.remove('hidden');
    probioticsSection.classList.add('hidden');
  } else if (illness.includes('joint') && illness.includes('antioxidation')) {
    omega3Section.classList.add('hidden');
    hyalsSection.classList.remove('hidden');
    probioticsSection.classList.remove('hidden');
  } console.log('illness:', illness);
if (illness.includes('eyes') && illness.includes('joint') && illness.includes('antioxidation')) {
  console.log('all conditions met');
  omega3Section.classList.remove('hidden');
  hyalsSection.classList.remove('hidden');
  probioticsSection.classList.remove('hidden');
}

  console.log('omega3Section after:', omega3Section);
  console.log('hyalsSection after:', hyalsSection);
  console.log('probioticsSection after:', probioticsSection);
}


/* -- Lutein -- */
if (illness === 'eyes' && dosage === 'capsule' && point === 'lowprice') {
  document.getElementById('result1').innerHTML =
  '<li><a href="https://search.shopping.naver.com/catalog/13023260096?query=%EB%A3%A8%ED%85%8C%EC%9D%B8&NaPm=ct%3Dlgry4dc8%7Cci%3Da43e6e21dd80e1f27244c1c85bef1b02080563ea%7Ctr%3Dslsl%7Csn%3D95694%7Chk%3Dbb649dfbd8ebb75294c4bb74995fbda2351437b9" target="_blank"><img src="/img/가성비-루테인.jpg" alt="" width="100" height="100"/></a><div class="text"><p>프리미엄 루테인 플러스12</p></div></li>';

} else if (illness === 'eyes' && dosage === 'capsule' && point === 'overseas') {
  document.getElementById('result1').innerHTML =
  '<li><a href="https://search.shopping.naver.com/catalog/26827095525?query=%EB%A3%A8%ED%85%8C%EC%9D%B8&NaPm=ct%3Dlgry9hr4%7Cci%3D068631725bdf8572d41f8bf3b70b7a8c61881b66%7Ctr%3Dslsl%7Csn%3D95694%7Chk%3Dede0164cd8766534eb0556ddc2c535d523b007ac" target="_blank"><img src="/img/해외직구-루테인.jpg" alt="" width="100" height="100"/></a><div class="text"><p>나우푸드 더블 스트랭스 루테인</p></div></li>';

} else if (illness === 'eyes' && dosage === 'tablet' && point === 'lowprice') {
  document.getElementById('result1').innerHTML =
  '<li><a href="https://smartstore.naver.com/homenmallshopping/products/5176127775?NaPm=ct%3Dlgryj4z4%7Cci%3D8826ef536766ad0424ec5b0ee0fd79a3a0921ea1%7Ctr%3Dslsl%7Csn%3D538538%7Chk%3Dcf53550429e617cf52769839ede4a030e4f884fc" target="_blank"><img src="/img/가성비-루테인2.jpg" alt="" width="100" height="100"/></a><div class="text"><p>루테인 알티지 오메가3</p></div></li>';

}else if (illness === 'eyes' && dosage === 'tablet' && point === 'overseas') {
  document.getElementById('result1').innerHTML =
  '<li><a href="https://search.shopping.naver.com/catalog/26828554522?query=%EB%A3%A8%ED%85%8C%EC%9D%B8&NaPm=ct%3Dlgryn26g%7Cci%3Db691d7cb5cbcb89e2fcee835cc30e869d378aa61%7Ctr%3Dslsl%7Csn%3D95694%7Chk%3D04c485326254cf48fdc8ee2442bc334dda14afaf" target="_blank"><img src="/img/해외직구-루테인2.jpg" alt="" width="100" height="100"/></a><div class="text"><p>SOLGAR 루테인</p></div></li>';

}else if (illness === 'eyes' && (dosage.includes('capsule') && dosage.includes('tablet')) && point === 'lowprice') {
       let resultHTML = '<div style="display: flex">';
       resultHTML += '<li style="flex: 0.18"><a href="https://search.shopping.naver.com/catalog/13023260096?query=%EB%A3%A8%ED%85%8C%EC%9D%B8&NaPm=ct%3Dlgry4dc8%7Cci%3Da43e6e21dd80e1f27244c1c85bef1b02080563ea%7Ctr%3Dslsl%7Csn%3D95694%7Chk%3Dbb649dfbd8ebb75294c4bb74995fbda2351437b9" target="_blank"><img src="/img/가성비-루테인.jpg" alt="" width="100" height="100"/></a><div class="text"><p>프리미엄 루테인 플러스12</p></div></li>';
       resultHTML += '<li style="flex: 0.18"><a href="https://smartstore.naver.com/homenmallshopping/products/5176127775?NaPm=ct%3Dlgryj4z4%7Cci%3D8826ef536766ad0424ec5b0ee0fd79a3a0921ea1%7Ctr%3Dslsl%7Csn%3D538538%7Chk%3Dcf53550429e617cf52769839ede4a030e4f884fc" target="_blank"><img src="/img/가성비-루테인2.jpg" alt="" width="100" height="100"/></a><div class="text"><p>루테인 알티지 오메가3</p></div></li>';
       resultHTML += '</div>';
       document.getElementById('result1').innerHTML = resultHTML;
}else if (illness === 'eyes' && (dosage.includes('capsule') && dosage.includes('tablet')) && point === 'overseas') {
     let resultHTML = '<div style="display: flex">';
     resultHTML += '<li style="flex: 0.18"><a href="https://search.shopping.naver.com/catalog/26827095525?query=%EB%A3%A8%ED%85%8C%EC%9D%B8&NaPm=ct%3Dlgry9hr4%7Cci%3D068631725bdf8572d41f8bf3b70b7a8c61881b66%7Ctr%3Dslsl%7Csn%3D95694%7Chk%3Dede0164cd8766534eb0556ddc2c535d523b007ac" target="_blank"><img src="/img/해외직구-루테인.jpg" alt="" width="100" height="100"/></a><div class="text"><p>나우푸드 더블 스트랭스 루테인</p></div></li>';
     resultHTML += '<li style="flex: 0.18"><a href="https://search.shopping.naver.com/catalog/26828554522?query=%EB%A3%A8%ED%85%8C%EC%9D%B8&NaPm=ct%3Dlgryn26g%7Cci%3Db691d7cb5cbcb89e2fcee835cc30e869d378aa61%7Ctr%3Dslsl%7Csn%3D95694%7Chk%3D04c485326254cf48fdc8ee2442bc334dda14afaf" target="_blank"><img src="/img/해외직구-루테인2.jpg" alt="" width="100" height="100"/></a><div class="text"><p>SOLGAR 루테인</p></div></li>';
     resultHTML += '</div>';
     document.getElementById('result1').innerHTML = resultHTML;
}else if (illness === 'eyes' && (dosage.includes('capsule') && dosage.includes('tablet')) && (point.includes('lowprice') && point.includes('overseas'))) {
     let resultHTML = '<div style="display: flex">';
     resultHTML += '<li style="flex: 0.18"><a href="https://search.shopping.naver.com/catalog/13023260096?query=%EB%A3%A8%ED%85%8C%EC%9D%B8&NaPm=ct%3Dlgry4dc8%7Cci%3Da43e6e21dd80e1f27244c1c85bef1b02080563ea%7Ctr%3Dslsl%7Csn%3D95694%7Chk%3Dbb649dfbd8ebb75294c4bb74995fbda2351437b9" target="_blank"><img src="/img/가성비-루테인.jpg" alt="" width="100" height="100"/></a><div class="text"><p>프리미엄 루테인 플러스12</p></div></li>';
     resultHTML += '<li style="flex: 0.18"><a href="https://smartstore.naver.com/homenmallshopping/products/5176127775?NaPm=ct%3Dlgryj4z4%7Cci%3D8826ef536766ad0424ec5b0ee0fd79a3a0921ea1%7Ctr%3Dslsl%7Csn%3D538538%7Chk%3Dcf53550429e617cf52769839ede4a030e4f884fc" target="_blank"><img src="/img/가성비-루테인2.jpg" alt="" width="100" height="100"/></a><div class="text"><p>루테인 알티지 오메가3</p></div></li>';
     resultHTML += '<li style="flex: 0.18"><a href="https://search.shopping.naver.com/catalog/26827095525?query=%EB%A3%A8%ED%85%8C%EC%9D%B8&NaPm=ct%3Dlgry9hr4%7Cci%3D068631725bdf8572d41f8bf3b70b7a8c61881b66%7Ctr%3Dslsl%7Csn%3D95694%7Chk%3Dede0164cd8766534eb0556ddc2c535d523b007ac" target="_blank"><img src="/img/해외직구-루테인.jpg" alt="" width="100" height="100"/></a><div class="text"><p>나우푸드 더블 스트랭스 루테인</p></div></li>';
     resultHTML += '<li style="flex: 0.18"><a href="https://search.shopping.naver.com/catalog/26828554522?query=%EB%A3%A8%ED%85%8C%EC%9D%B8&NaPm=ct%3Dlgryn26g%7Cci%3Db691d7cb5cbcb89e2fcee835cc30e869d378aa61%7Ctr%3Dslsl%7Csn%3D95694%7Chk%3D04c485326254cf48fdc8ee2442bc334dda14afaf" target="_blank"><img src="/img/해외직구-루테인2.jpg" alt="" width="100" height="100"/></a><div class="text"><p>SOLGAR 루테인</p></div></li>';
     resultHTML += '</div>';
     document.getElementById('result1').innerHTML = resultHTML;
}

/* -- Calcium -- */
if (illness === 'joint' && dosage === 'capsule' && point === 'lowprice') {
  document.getElementById('result2').innerHTML =
  '<li><a href="https://smartstore.naver.com/geeneecom/products/2532207586?NaPm=ct%3Dlgs0v8r4%7Cci%3D29d9ad283aa4f0d9efc2be0280a51cbf2c492d80%7Ctr%3Dslsl%7Csn%3D295151%7Chk%3Da6dd9f8c5c826fb43e7ac3abeca66948943b302c" target="_blank"><img src="/img/가성비-칼슘.jpg" alt="" width="100" height="100"/></a><div class="text"><p>네츄럴라이프 칼슘/마그네슘</p></div></li>';

} else if (illness === 'joint' && dosage === 'capsule' && point === 'overseas') {
  document.getElementById('result2').innerHTML =
  '<li><a href="https://smartstore.naver.com/dailyhealthitem/products/7695867382?NaPm=ct%3Dlgs0xa20%7Cci%3D64e977790fa5241ec25f6f12510f888647817723%7Ctr%3Dslsl%7Csn%3D6181264%7Chk%3D084f1f1e9169276b2cf125fef155c945e8896934" target="_blank"><img src="/img/해외직구-칼슘.jpg" alt="" width="100" height="100"/></a><div class="text"><p>나우푸드 cal-mag</p></div></li>';

} else if (illness === 'joint' && dosage === 'tablet' && point === 'lowprice') {
  document.getElementById('result2').innerHTML =
  '<li><a href="https://search.shopping.naver.com/catalog/27718081522?query=%EC%B9%BC%EC%8A%98%20%EB%A7%88%EA%B7%B8%EB%84%A4%EC%8A%98%20%EB%B9%84%ED%83%80%EB%AF%BC%20D&NaPm=ct%3Dlgs137sg%7Cci%3Dec9ef43776468778483afdd7027a406b37347d3b%7Ctr%3Dslsl%7Csn%3D95694%7Chk%3D09f3a5a42d9052bfa7591ff54db83bb5632fe2db" target="_blank"><img src="/img/가성비-칼슘2.jpg" alt="" width="100" height="100"/></a><div class="text"><p>GNM 칼슘|마그네슘</p></div></li>';

}else if (illness === 'joint' && dosage === 'tablet' && point === 'overseas') {
  document.getElementById('result2').innerHTML =
  '<li><a href="https://smartstore.naver.com/yaksawausa/products/2072461060?NaPm=ct%3Dlgs109b4%7Cci%3D49c5618e7c1c28bd14a1c049724c1381777a0847%7Ctr%3Dslsl%7Csn%3D454580%7Chk%3D0b17a012ec32044eacc0ee2b9474596f140b2376" target="_blank"><img src="/img/해외직구-칼슘2.jpg" alt="" width="100" height="100"/></a><div class="text"><p>GNC Calcium Plus</p></div></li>';

}else if (illness === 'joint' && (dosage.includes('capsule') && dosage.includes('tablet')) && point === 'lowprice') {
        let resultHTML = '<div style="display: flex">';
        resultHTML += '<li style="flex: 0.18"><a href="https://smartstore.naver.com/geeneecom/products/2532207586?NaPm=ct%3Dlgs0v8r4%7Cci%3D29d9ad283aa4f0d9efc2be0280a51cbf2c492d80%7Ctr%3Dslsl%7Csn%3D295151%7Chk%3Da6dd9f8c5c826fb43e7ac3abeca66948943b302c" target="_blank"><img src="/img/가성비-칼슘.jpg" alt="" width="100" height="100"/></a><div class="text"><p>네츄럴라이프 칼슘/마그네슘</p></div></li>';
        resultHTML += '<li style="flex: 0.18"><a href="https://search.shopping.naver.com/catalog/27718081522?query=%EC%B9%BC%EC%8A%98%20%EB%A7%88%EA%B7%B8%EB%84%A4%EC%8A%98%20%EB%B9%84%ED%83%80%EB%AF%BC%20D&NaPm=ct%3Dlgs137sg%7Cci%3Dec9ef43776468778483afdd7027a406b37347d3b%7Ctr%3Dslsl%7Csn%3D95694%7Chk%3D09f3a5a42d9052bfa7591ff54db83bb5632fe2db" target="_blank"><img src="/img/가성비-칼슘2.jpg" alt="" width="100" height="100"/></a><div class="text"><p>GNM 칼슘|마그네슘</p></div></li>';
        resultHTML += '</div>';
        document.getElementById('result2').innerHTML = resultHTML;
 }else if (illness === 'joint' && (dosage.includes('capsule') && dosage.includes('tablet')) && point === 'overseas') {
      let resultHTML = '<div style="display: flex">';
      resultHTML += '<li style="flex: 0.18"><a href="https://smartstore.naver.com/dailyhealthitem/products/7695867382?NaPm=ct%3Dlgs0xa20%7Cci%3D64e977790fa5241ec25f6f12510f888647817723%7Ctr%3Dslsl%7Csn%3D6181264%7Chk%3D084f1f1e9169276b2cf125fef155c945e8896934" target="_blank"><img src="/img/해외직구-칼슘.jpg" alt="" width="100" height="100"/></a><div class="text"><p>나우푸드 cal-mag</p></div></li>';
      resultHTML += '<li style="flex: 0.18"><a href="https://smartstore.naver.com/yaksawausa/products/2072461060?NaPm=ct%3Dlgs109b4%7Cci%3D49c5618e7c1c28bd14a1c049724c1381777a0847%7Ctr%3Dslsl%7Csn%3D454580%7Chk%3D0b17a012ec32044eacc0ee2b9474596f140b2376" target="_blank"><img src="/img/해외직구-칼슘2.jpg" alt="" width="100" height="100"/></a><div class="text"><p>GNC Calcium Plus</p></div></li>';
      resultHTML += '</div>';
      document.getElementById('result2').innerHTML = resultHTML;
 }else if (illness === 'joint' && (dosage.includes('capsule') && dosage.includes('tablet')) && (point.includes('lowprice') && point.includes('overseas'))) {
      let resultHTML = '<div style="display: flex">';
      resultHTML += '<li style="flex: 0.18"><a href="https://smartstore.naver.com/geeneecom/products/2532207586?NaPm=ct%3Dlgs0v8r4%7Cci%3D29d9ad283aa4f0d9efc2be0280a51cbf2c492d80%7Ctr%3Dslsl%7Csn%3D295151%7Chk%3Da6dd9f8c5c826fb43e7ac3abeca66948943b302c" target="_blank"><img src="/img/가성비-칼슘.jpg" alt="" width="100" height="100"/></a><div class="text"><p>네츄럴라이프 칼슘/마그네슘</p></div></li>';
      resultHTML += '<li style="flex: 0.18"><a href="https://search.shopping.naver.com/catalog/27718081522?query=%EC%B9%BC%EC%8A%98%20%EB%A7%88%EA%B7%B8%EB%84%A4%EC%8A%98%20%EB%B9%84%ED%83%80%EB%AF%BC%20D&NaPm=ct%3Dlgs137sg%7Cci%3Dec9ef43776468778483afdd7027a406b37347d3b%7Ctr%3Dslsl%7Csn%3D95694%7Chk%3D09f3a5a42d9052bfa7591ff54db83bb5632fe2db" target="_blank"><img src="/img/가성비-칼슘2.jpg" alt="" width="100" height="100"/></a><div class="text"><p>GNM 칼슘|마그네슘</p></div></li>';
      resultHTML += '<li style="flex: 0.18"><a href="https://smartstore.naver.com/dailyhealthitem/products/7695867382?NaPm=ct%3Dlgs0xa20%7Cci%3D64e977790fa5241ec25f6f12510f888647817723%7Ctr%3Dslsl%7Csn%3D6181264%7Chk%3D084f1f1e9169276b2cf125fef155c945e8896934" target="_blank"><img src="/img/해외직구-칼슘.jpg" alt="" width="100" height="100"/></a><div class="text"><p>나우푸드 cal-mag</p></div></li>';
      resultHTML += '<li style="flex: 0.18"><a href="https://smartstore.naver.com/yaksawausa/products/2072461060?NaPm=ct%3Dlgs109b4%7Cci%3D49c5618e7c1c28bd14a1c049724c1381777a0847%7Ctr%3Dslsl%7Csn%3D454580%7Chk%3D0b17a012ec32044eacc0ee2b9474596f140b2376" target="_blank"><img src="/img/해외직구-칼슘2.jpg" alt="" width="100" height="100"/></a><div class="text"><p>GNC Calcium Plus</p></div></li>';
      resultHTML += '</div>';
      document.getElementById('result2').innerHTML = resultHTML;
 }

/* Vitamin C */

if (illness === 'antioxidation' && dosage === 'capsule' && point === 'lowprice') {
  document.getElementById('result3').innerHTML =
  '<li><a href="https://search.shopping.naver.com/catalog/30176546619?query=%EB%B9%84%ED%83%80%EB%AF%BCC&NaPm=ct%3Dlgs165i0%7Cci%3D47720510f65d07afcdf4cca453e7ca713e096eac%7Ctr%3Dslsl%7Csn%3D95694%7Chk%3Dc2cf40499ca652c78aeb1526ec5f83a44846d92b" target="_blank"><img src="/img/가성비-비타민.jpg" alt="" width="100" height="100"/></a><div class="text"><p>이지 비타민C</p></div></li>';

} else if (illness === 'antioxidation' && dosage === 'capsule' && point === 'overseas') {
  document.getElementById('result3').innerHTML =
  '<li><a href="https://search.shopping.naver.com/catalog/25064764523?query=%EB%B9%84%ED%83%80%EB%AF%BCC&NaPm=ct%3Dlgs17hc8%7Cci%3D0ff57aa6abf9bb4e5f0263ac05cddd47b8efa1c0%7Ctr%3Dslsl%7Csn%3D95694%7Chk%3D90f92da58b114af281be85607bb058c31e05bd81" target="_blank"><img src="/img/해외직구-비타민.jpg" alt="" width="100" height="100"/></a><div class="text"><p>캘리포니아 Gold C</p></div></li>';

} else if (illness === 'antioxidation' && dosage === 'tablet' && point === 'lowprice') {
  document.getElementById('result3').innerHTML =
  '<li><a href="https://search.shopping.naver.com/catalog/26855413531?query=%EB%B9%84%ED%83%80%EB%AF%BCC&NaPm=ct%3Dlgs1af1s%7Cci%3Df7c927e46b1597d39aa56363cb732db096b10b41%7Ctr%3Dslsl%7Csn%3D95694%7Chk%3De793c0879202b9d8a1e39f4c88478088ce1a1f16" target="_blank"><img src="/img/가성비-비타민2.jpg" alt="" width="100" height="100"/></a><div class="text"><p>고려은단 비타민C1000</p></div></li>';

}else if (illness === 'antioxidation' && dosage === 'tablet' && point === 'overseas') {
  document.getElementById('result3').innerHTML =
  '<li><a href="https://smartstore.naver.com/yaksawausa/products/610036835?NaPm=ct%3Dlgs18w9k%7Cci%3D51d8c7c5ef4d1479ac0fbf0a256864ac3f858ad9%7Ctr%3Dslsl%7Csn%3D454580%7Chk%3D4d70eb5238fe82d716df093dc58214a96a9b3309" target="_blank"><img src="/img/해외직구-비타민2.jpg" alt="" width="100" height="100"/></a><div class="text"><p>Ester-C</p></div></li>';

  }else if (illness === 'antioxidation' && (dosage.includes('capsule') && dosage.includes('tablet')) && point === 'lowprice') {
         let resultHTML = '<div style="display: flex">';
         resultHTML += '<li style="flex: 0.18"><a href="https://search.shopping.naver.com/catalog/30176546619?query=%EB%B9%84%ED%83%80%EB%AF%BCC&NaPm=ct%3Dlgs165i0%7Cci%3D47720510f65d07afcdf4cca453e7ca713e096eac%7Ctr%3Dslsl%7Csn%3D95694%7Chk%3Dc2cf40499ca652c78aeb1526ec5f83a44846d92b" target="_blank"><img src="/img/가성비-비타민.jpg" alt="" width="100" height="100"/></a><div class="text"><p>이지 비타민C</p></div></li>';
         resultHTML += '<li style="flex: 0.18"><a href="https://search.shopping.naver.com/catalog/26855413531?query=%EB%B9%84%ED%83%80%EB%AF%BCC&NaPm=ct%3Dlgs1af1s%7Cci%3Df7c927e46b1597d39aa56363cb732db096b10b41%7Ctr%3Dslsl%7Csn%3D95694%7Chk%3De793c0879202b9d8a1e39f4c88478088ce1a1f16" target="_blank"><img src="/img/가성비-비타민2.jpg" alt="" width="100" height="100"/></a><div class="text"><p>고려은단 비타민C1000</p></div></li>';
         resultHTML += '</div>';
         document.getElementById('result3').innerHTML = resultHTML;
  }else if (illness === 'antioxidation' && (dosage.includes('capsule') && dosage.includes('tablet')) && point === 'overseas') {
       let resultHTML = '<div style="display: flex">';
       resultHTML += '<li style="flex: 0.18"><a href="https://search.shopping.naver.com/catalog/25064764523?query=%EB%B9%84%ED%83%80%EB%AF%BCC&NaPm=ct%3Dlgs17hc8%7Cci%3D0ff57aa6abf9bb4e5f0263ac05cddd47b8efa1c0%7Ctr%3Dslsl%7Csn%3D95694%7Chk%3D90f92da58b114af281be85607bb058c31e05bd81" target="_blank"><img src="/img/해외직구-비타민.jpg" alt="" width="100" height="100"/></a><div class="text"><p>캘리포니아 Gold C</p></div></li>';
       resultHTML += '<li style="flex: 0.18"><a href="https://smartstore.naver.com/yaksawausa/products/610036835?NaPm=ct%3Dlgs18w9k%7Cci%3D51d8c7c5ef4d1479ac0fbf0a256864ac3f858ad9%7Ctr%3Dslsl%7Csn%3D454580%7Chk%3D4d70eb5238fe82d716df093dc58214a96a9b3309" target="_blank"><img src="/img/해외직구-비타민2.jpg" alt="" width="100" height="100"/></a><div class="text"><p>Ester-C</p></div></li>';
       resultHTML += '</div>';
       document.getElementById('result3').innerHTML = resultHTML;
  }else if (illness === 'antioxidation' && (dosage.includes('capsule') && dosage.includes('tablet')) && (point.includes('lowprice') && point.includes('overseas'))) {
       let resultHTML = '<div style="display: flex">';
       resultHTML += '<li style="flex: 0.18"><a href="https://search.shopping.naver.com/catalog/30176546619?query=%EB%B9%84%ED%83%80%EB%AF%BCC&NaPm=ct%3Dlgs165i0%7Cci%3D47720510f65d07afcdf4cca453e7ca713e096eac%7Ctr%3Dslsl%7Csn%3D95694%7Chk%3Dc2cf40499ca652c78aeb1526ec5f83a44846d92b" target="_blank"><img src="/img/가성비-비타민.jpg" alt="" width="100" height="100"/></a><div class="text"><p>이지 비타민C</p></div></li>';
       resultHTML += '<li style="flex: 0.18"><a href="https://search.shopping.naver.com/catalog/26855413531?query=%EB%B9%84%ED%83%80%EB%AF%BCC&NaPm=ct%3Dlgs1af1s%7Cci%3Df7c927e46b1597d39aa56363cb732db096b10b41%7Ctr%3Dslsl%7Csn%3D95694%7Chk%3De793c0879202b9d8a1e39f4c88478088ce1a1f16" target="_blank"><img src="/img/가성비-비타민2.jpg" alt="" width="100" height="100"/></a><div class="text"><p>고려은단 비타민C1000</p></div></li>';
       resultHTML += '<li style="flex: 0.18"><a href="https://search.shopping.naver.com/catalog/25064764523?query=%EB%B9%84%ED%83%80%EB%AF%BCC&NaPm=ct%3Dlgs17hc8%7Cci%3D0ff57aa6abf9bb4e5f0263ac05cddd47b8efa1c0%7Ctr%3Dslsl%7Csn%3D95694%7Chk%3D90f92da58b114af281be85607bb058c31e05bd81" target="_blank"><img src="/img/해외직구-비타민.jpg" alt="" width="100" height="100"/></a><div class="text"><p>캘리포니아 Gold C</p></div></li>';
       resultHTML += '<li style="flex: 0.18"><a href="https://smartstore.naver.com/yaksawausa/products/610036835?NaPm=ct%3Dlgs18w9k%7Cci%3D51d8c7c5ef4d1479ac0fbf0a256864ac3f858ad9%7Ctr%3Dslsl%7Csn%3D454580%7Chk%3D4d70eb5238fe82d716df093dc58214a96a9b3309" target="_blank"><img src="/img/해외직구-비타민2.jpg" alt="" width="100" height="100"/></a><div class="text"><p>Ester-C</p></div></li>';
       resultHTML += '</div>';
       document.getElementById('result3').innerHTML = resultHTML;
  }


/* Lutein & Calcium */
if ((illness.includes('eyes') && illness.includes('joint')) && dosage === 'capsule' && point === 'lowprice') {
      document.getElementById('result1').innerHTML =
      '<li><a href="https://search.shopping.naver.com/catalog/13023260096?query=%EB%A3%A8%ED%85%8C%EC%9D%B8&NaPm=ct%3Dlgry4dc8%7Cci%3Da43e6e21dd80e1f27244c1c85bef1b02080563ea%7Ctr%3Dslsl%7Csn%3D95694%7Chk%3Dbb649dfbd8ebb75294c4bb74995fbda2351437b9" target="_blank"><img src="/img/가성비-루테인.jpg" alt="" width="100" height="100"/></a><div class="text"><p>프리미엄 루테인 플러스12</p></div></li>';
      document.getElementById('result2').innerHTML =
      '<li><a href="https://smartstore.naver.com/geeneecom/products/2532207586?NaPm=ct%3Dlgs0v8r4%7Cci%3D29d9ad283aa4f0d9efc2be0280a51cbf2c492d80%7Ctr%3Dslsl%7Csn%3D295151%7Chk%3Da6dd9f8c5c826fb43e7ac3abeca66948943b302c" target="_blank"><img src="/img/가성비-칼슘.jpg" alt="" width="100" height="100"/></a><div class="text"><p>네츄럴라이프 칼슘/마그네슘</p></div></li>';
}
else if ((illness.includes('eyes') && illness.includes('joint')) && dosage === 'capsule' && point === 'overseas') {
      document.getElementById('result1').innerHTML =
          '<li><a href="https://search.shopping.naver.com/catalog/26827095525?query=%EB%A3%A8%ED%85%8C%EC%9D%B8&NaPm=ct%3Dlgry9hr4%7Cci%3D068631725bdf8572d41f8bf3b70b7a8c61881b66%7Ctr%3Dslsl%7Csn%3D95694%7Chk%3Dede0164cd8766534eb0556ddc2c535d523b007ac" target="_blank"><img src="/img/해외직구-루테인.jpg" alt="" width="100" height="100"/></a><div class="text"><p>나우푸드 더블 스트랭스 루테인</p></div></li>';
      document.getElementById('result2').innerHTML =
          '<li><a href="https://smartstore.naver.com/dailyhealthitem/products/7695867382?NaPm=ct%3Dlgs0xa20%7Cci%3D64e977790fa5241ec25f6f12510f888647817723%7Ctr%3Dslsl%7Csn%3D6181264%7Chk%3D084f1f1e9169276b2cf125fef155c945e8896934" target="_blank"><img src="/img/해외직구-칼슘.jpg" alt="" width="100" height="100"/></a><div class="text"><p>나우푸드 cal-mag</p></div></li>';
}
else if ((illness.includes('eyes') && illness.includes('joint')) && dosage === 'tablet' && point === 'lowprice') {
      document.getElementById('result1').innerHTML =
          '<li><a href="https://smartstore.naver.com/homenmallshopping/products/5176127775?NaPm=ct%3Dlgryj4z4%7Cci%3D8826ef536766ad0424ec5b0ee0fd79a3a0921ea1%7Ctr%3Dslsl%7Csn%3D538538%7Chk%3Dcf53550429e617cf52769839ede4a030e4f884fc" target="_blank"><img src="/img/가성비-루테인2.jpg" alt="" width="100" height="100"/></a><div class="text"><p>루테인 알티지 오메가3</p></div></li>';
      document.getElementById('result2').innerHTML =
         '<li><a href="https://search.shopping.naver.com/catalog/27718081522?query=%EC%B9%BC%EC%8A%98%20%EB%A7%88%EA%B7%B8%EB%84%A4%EC%8A%98%20%EB%B9%84%ED%83%80%EB%AF%BC%20D&NaPm=ct%3Dlgs137sg%7Cci%3Dec9ef43776468778483afdd7027a406b37347d3b%7Ctr%3Dslsl%7Csn%3D95694%7Chk%3D09f3a5a42d9052bfa7591ff54db83bb5632fe2db" target="_blank"><img src="/img/가성비-칼슘2.jpg" alt="" width="100" height="100"/></a><div class="text"><p>GNM 칼슘|마그네슘</p></div></li>';
}
else if ((illness.includes('eyes') && illness.includes('joint')) && dosage === 'tablet' && point === 'overseas') {
      document.getElementById('result1').innerHTML =
          '<li><a href="https://search.shopping.naver.com/catalog/26828554522?query=%EB%A3%A8%ED%85%8C%EC%9D%B8&NaPm=ct%3Dlgryn26g%7Cci%3Db691d7cb5cbcb89e2fcee835cc30e869d378aa61%7Ctr%3Dslsl%7Csn%3D95694%7Chk%3D04c485326254cf48fdc8ee2442bc334dda14afaf" target="_blank"><img src="/img/해외직구-루테인2.jpg" alt="" width="100" height="100"/></a><div class="text"><p>SOLGAR 루테인</p></div></li>';
      document.getElementById('result2').innerHTML =
          '<li><a href="https://smartstore.naver.com/yaksawausa/products/2072461060?NaPm=ct%3Dlgs109b4%7Cci%3D49c5618e7c1c28bd14a1c049724c1381777a0847%7Ctr%3Dslsl%7Csn%3D454580%7Chk%3D0b17a012ec32044eacc0ee2b9474596f140b2376" target="_blank"><img src="/img/해외직구-칼슘2.jpg" alt="" width="100" height="100"/></a><div class="text"><p>GNC Calcium Plus</p></div></li>';
}
else if ((illness.includes('eyes') && illness.includes('joint')) && (dosage.includes('capsule') && dosage.includes('tablet')) && point === 'lowprice') {
     let resultHTML1 = '<div id="result1" style="display: flex">';
     resultHTML1 += '<li style="flex: 0.18"><a href="https://search.shopping.naver.com/catalog/13023260096?query=%EB%A3%A8%ED%85%8C%EC%9D%B8&NaPm=ct%3Dlgry4dc8%7Cci%3Da43e6e21dd80e1f27244c1c85bef1b02080563ea%7Ctr%3Dslsl%7Csn%3D95694%7Chk%3Dbb649dfbd8ebb75294c4bb74995fbda2351437b9" target="_blank"><img src="/img/가성비-루테인.jpg" alt="" width="100" height="100"/></a><div class="text"><p>프리미엄 루테인 플러스12</p></div></li>';
     resultHTML1 += '<li style="flex: 0.18"><a href="https://smartstore.naver.com/homenmallshopping/products/5176127775?NaPm=ct%3Dlgryj4z4%7Cci%3D8826ef536766ad0424ec5b0ee0fd79a3a0921ea1%7Ctr%3Dslsl%7Csn%3D538538%7Chk%3Dcf53550429e617cf52769839ede4a030e4f884fc" target="_blank"><img src="/img/가성비-루테인2.jpg" alt="" width="100" height="100"/></a><div class="text"><p>루테인 알티지 오메가3</p></div></li>';
     resultHTML1 += '</div>';
     document.getElementById('result1').innerHTML = resultHTML1;
     let resultHTML2 = '<div id="result2" style="display: flex">';
     resultHTML2 += '<li style="flex: 0.18"><a href="https://smartstore.naver.com/geeneecom/products/2532207586?NaPm=ct%3Dlgs0v8r4%7Cci%3D29d9ad283aa4f0d9efc2be0280a51cbf2c492d80%7Ctr%3Dslsl%7Csn%3D295151%7Chk%3Da6dd9f8c5c826fb43e7ac3abeca66948943b302c" target="_blank"><img src="/img/가성비-칼슘.jpg" alt="" width="100" height="100"/></a><div class="text"><p>네츄럴라이프 칼슘/마그네슘</p></div></li>';
     resultHTML2 += '<li style="flex: 0.18"><a href="https://search.shopping.naver.com/catalog/27718081522?query=%EC%B9%BC%EC%8A%98%20%EB%A7%88%EA%B7%B8%EB%84%A4%EC%8A%98%20%EB%B9%84%ED%83%80%EB%AF%BC%20D&NaPm=ct%3Dlgs137sg%7Cci%3Dec9ef43776468778483afdd7027a406b37347d3b%7Ctr%3Dslsl%7Csn%3D95694%7Chk%3D09f3a5a42d9052bfa7591ff54db83bb5632fe2db" target="_blank"><img src="/img/가성비-칼슘2.jpg" alt="" width="100" height="100"/></a><div class="text"><p>GNM 칼슘|마그네슘</p></div></li>';
     resultHTML2 += '</div>';
     document.getElementById('result2').innerHTML = resultHTML2;
}
else if ((illness.includes('eyes') && illness.includes('joint')) && (dosage.includes('capsule') && dosage.includes('tablet')) && point === 'overseas') {
     let resultHTML1 = '<div id="result1" style="display: flex">';
     resultHTML1 += '<li style="flex: 0.18"><a href="https://search.shopping.naver.com/catalog/26827095525?query=%EB%A3%A8%ED%85%8C%EC%9D%B8&NaPm=ct%3Dlgry9hr4%7Cci%3D068631725bdf8572d41f8bf3b70b7a8c61881b66%7Ctr%3Dslsl%7Csn%3D95694%7Chk%3Dede0164cd8766534eb0556ddc2c535d523b007ac" target="_blank"><img src="/img/해외직구-루테인.jpg" alt="" width="100" height="100"/></a><div class="text"><p>나우푸드 더블 스트랭스 루테인</p></div></li>';
     resultHTML1 += '<li style="flex: 0.18"><a href="https://search.shopping.naver.com/catalog/26828554522?query=%EB%A3%A8%ED%85%8C%EC%9D%B8&NaPm=ct%3Dlgryn26g%7Cci%3Db691d7cb5cbcb89e2fcee835cc30e869d378aa61%7Ctr%3Dslsl%7Csn%3D95694%7Chk%3D04c485326254cf48fdc8ee2442bc334dda14afaf" target="_blank"><img src="/img/해외직구-루테인2.jpg" alt="" width="100" height="100"/></a><div class="text"><p>SOLGAR 루테인</p></div></li>';
     resultHTML1 += '</div>';
     document.getElementById('result1').innerHTML = resultHTML1;
     let resultHTML2 = '<div id="result2" style="display: flex">';
     resultHTML2 += '<li style="flex: 0.18"><a href="https://smartstore.naver.com/dailyhealthitem/products/7695867382?NaPm=ct%3Dlgs0xa20%7Cci%3D64e977790fa5241ec25f6f12510f888647817723%7Ctr%3Dslsl%7Csn%3D6181264%7Chk%3D084f1f1e9169276b2cf125fef155c945e8896934" target="_blank"><img src="/img/해외직구-칼슘.jpg" alt="" width="100" height="100"/></a><div class="text"><p>나우푸드 cal-mag</p></div></li>';
     resultHTML2 += '<li style="flex: 0.18"><a href="https://smartstore.naver.com/yaksawausa/products/2072461060?NaPm=ct%3Dlgs109b4%7Cci%3D49c5618e7c1c28bd14a1c049724c1381777a0847%7Ctr%3Dslsl%7Csn%3D454580%7Chk%3D0b17a012ec32044eacc0ee2b9474596f140b2376" target="_blank"><img src="/img/해외직구-칼슘2.jpg" alt="" width="100" height="100"/></a><div class="text"><p>GNC Calcium Plus</p></div></li>';
     resultHTML2 += '</div>';
     document.getElementById('result2').innerHTML = resultHTML2;
}
else if ((illness.includes('eyes') && illness.includes('joint')) && (dosage.includes('capsule') && dosage.includes('tablet')) && (point.includes('lowprice') && point.includes('overseas'))) {
     let resultHTML1 = '<div id="result1" style="display: flex">';
     resultHTML1 += '<li style="flex: 0.18"><a href="https://search.shopping.naver.com/catalog/13023260096?query=%EB%A3%A8%ED%85%8C%EC%9D%B8&NaPm=ct%3Dlgry4dc8%7Cci%3Da43e6e21dd80e1f27244c1c85bef1b02080563ea%7Ctr%3Dslsl%7Csn%3D95694%7Chk%3Dbb649dfbd8ebb75294c4bb74995fbda2351437b9" target="_blank"><img src="/img/가성비-루테인.jpg" alt="" width="100" height="100"/></a><div class="text"><p>프리미엄 루테인 플러스12</p></div></li>';
     resultHTML1 += '<li style="flex: 0.18"><a href="https://smartstore.naver.com/homenmallshopping/products/5176127775?NaPm=ct%3Dlgryj4z4%7Cci%3D8826ef536766ad0424ec5b0ee0fd79a3a0921ea1%7Ctr%3Dslsl%7Csn%3D538538%7Chk%3Dcf53550429e617cf52769839ede4a030e4f884fc" target="_blank"><img src="/img/가성비-루테인2.jpg" alt="" width="100" height="100"/></a><div class="text"><p>루테인 알티지 오메가3</p></div></li>';
     resultHTML1 += '<li style="flex: 0.18"><a href="https://search.shopping.naver.com/catalog/26827095525?query=%EB%A3%A8%ED%85%8C%EC%9D%B8&NaPm=ct%3Dlgry9hr4%7Cci%3D068631725bdf8572d41f8bf3b70b7a8c61881b66%7Ctr%3Dslsl%7Csn%3D95694%7Chk%3Dede0164cd8766534eb0556ddc2c535d523b007ac" target="_blank"><img src="/img/해외직구-루테인.jpg" alt="" width="100" height="100"/></a><div class="text"><p>나우푸드 더블 스트랭스 루테인</p></div></li>';
     resultHTML1 += '<li style="flex: 0.18"><a href="https://search.shopping.naver.com/catalog/26828554522?query=%EB%A3%A8%ED%85%8C%EC%9D%B8&NaPm=ct%3Dlgryn26g%7Cci%3Db691d7cb5cbcb89e2fcee835cc30e869d378aa61%7Ctr%3Dslsl%7Csn%3D95694%7Chk%3D04c485326254cf48fdc8ee2442bc334dda14afaf" target="_blank"><img src="/img/해외직구-루테인2.jpg" alt="" width="100" height="100"/></a><div class="text"><p>SOLGAR 루테인</p></div></li>';
     resultHTML1 += '</div>';
     document.getElementById('result1').innerHTML = resultHTML1;
     let resultHTML2 = '<div id="result2" style="display: flex">';
     resultHTML2 += '<li style="flex: 0.18"><a href="https://smartstore.naver.com/geeneecom/products/2532207586?NaPm=ct%3Dlgs0v8r4%7Cci%3D29d9ad283aa4f0d9efc2be0280a51cbf2c492d80%7Ctr%3Dslsl%7Csn%3D295151%7Chk%3Da6dd9f8c5c826fb43e7ac3abeca66948943b302c" target="_blank"><img src="/img/가성비-칼슘.jpg" alt="" width="100" height="100"/></a><div class="text"><p>네츄럴라이프 칼슘/마그네슘</p></div></li>';
     resultHTML2 += '<li style="flex: 0.18"><a href="https://search.shopping.naver.com/catalog/27718081522?query=%EC%B9%BC%EC%8A%98%20%EB%A7%88%EA%B7%B8%EB%84%A4%EC%8A%98%20%EB%B9%84%ED%83%80%EB%AF%BC%20D&NaPm=ct%3Dlgs137sg%7Cci%3Dec9ef43776468778483afdd7027a406b37347d3b%7Ctr%3Dslsl%7Csn%3D95694%7Chk%3D09f3a5a42d9052bfa7591ff54db83bb5632fe2db" target="_blank"><img src="/img/가성비-칼슘2.jpg" alt="" width="100" height="100"/></a><div class="text"><p>GNM 칼슘|마그네슘</p></div></li>';
     resultHTML2 += '<li style="flex: 0.18"><a href="https://smartstore.naver.com/dailyhealthitem/products/7695867382?NaPm=ct%3Dlgs0xa20%7Cci%3D64e977790fa5241ec25f6f12510f888647817723%7Ctr%3Dslsl%7Csn%3D6181264%7Chk%3D084f1f1e9169276b2cf125fef155c945e8896934" target="_blank"><img src="/img/해외직구-칼슘.jpg" alt="" width="100" height="100"/></a><div class="text"><p>나우푸드 cal-mag</p></div></li>';
     resultHTML2 += '<li style="flex: 0.18"><a href="https://smartstore.naver.com/yaksawausa/products/2072461060?NaPm=ct%3Dlgs109b4%7Cci%3D49c5618e7c1c28bd14a1c049724c1381777a0847%7Ctr%3Dslsl%7Csn%3D454580%7Chk%3D0b17a012ec32044eacc0ee2b9474596f140b2376" target="_blank"><img src="/img/해외직구-칼슘2.jpg" alt="" width="100" height="100"/></a><div class="text"><p>GNC Calcium Plus</p></div></li>';
     resultHTML2 += '</div>';
     document.getElementById('result2').innerHTML = resultHTML2;
}

/* Lutein & Vitamin C */
if ((illness.includes('eyes') && illness.includes('antioxidation')) && dosage === 'capsule' && point === 'lowprice') {
      document.getElementById('result1').innerHTML =
      '<li><a href="https://search.shopping.naver.com/catalog/13023260096?query=%EB%A3%A8%ED%85%8C%EC%9D%B8&NaPm=ct%3Dlgry4dc8%7Cci%3Da43e6e21dd80e1f27244c1c85bef1b02080563ea%7Ctr%3Dslsl%7Csn%3D95694%7Chk%3Dbb649dfbd8ebb75294c4bb74995fbda2351437b9" target="_blank"><img src="/img/가성비-루테인.jpg" alt="" width="100" height="100"/></a><div class="text"><p>프리미엄 루테인 플러스12</p></div></li>';
      document.getElementById('result3').innerHTML =
          '<li><a href="https://search.shopping.naver.com/catalog/30176546619?query=%EB%B9%84%ED%83%80%EB%AF%BCC&NaPm=ct%3Dlgs165i0%7Cci%3D47720510f65d07afcdf4cca453e7ca713e096eac%7Ctr%3Dslsl%7Csn%3D95694%7Chk%3Dc2cf40499ca652c78aeb1526ec5f83a44846d92b" target="_blank"><img src="/img/가성비-비타민.jpg" alt="" width="100" height="100"/></a><div class="text"><p>이지 비타민C</p></div></li>';
}
if ((illness.includes('eyes') && illness.includes('antioxidation')) && dosage === 'capsule' && point === 'overseas') {
      document.getElementById('result1').innerHTML =
          '<li><a href="https://search.shopping.naver.com/catalog/26827095525?query=%EB%A3%A8%ED%85%8C%EC%9D%B8&NaPm=ct%3Dlgry9hr4%7Cci%3D068631725bdf8572d41f8bf3b70b7a8c61881b66%7Ctr%3Dslsl%7Csn%3D95694%7Chk%3Dede0164cd8766534eb0556ddc2c535d523b007ac" target="_blank"><img src="/img/해외직구-루테인.jpg" alt="" width="100" height="100"/></a><div class="text"><p>나우푸드 더블 스트랭스 루테인</p></div></li>';
      document.getElementById('result3').innerHTML =
          '<li><a href="https://search.shopping.naver.com/catalog/25064764523?query=%EB%B9%84%ED%83%80%EB%AF%BCC&NaPm=ct%3Dlgs17hc8%7Cci%3D0ff57aa6abf9bb4e5f0263ac05cddd47b8efa1c0%7Ctr%3Dslsl%7Csn%3D95694%7Chk%3D90f92da58b114af281be85607bb058c31e05bd81" target="_blank"><img src="/img/해외직구-비타민.jpg" alt="" width="100" height="100"/></a><div class="text"><p>캘리포니아 Gold C</p></div></li>';
}
if ((illness.includes('eyes') && illness.includes('antioxidation')) && dosage === 'tablet' && point === 'lowprice') {
      document.getElementById('result1').innerHTML =

          '<li><a href="https://smartstore.naver.com/homenmallshopping/products/5176127775?NaPm=ct%3Dlgryj4z4%7Cci%3D8826ef536766ad0424ec5b0ee0fd79a3a0921ea1%7Ctr%3Dslsl%7Csn%3D538538%7Chk%3Dcf53550429e617cf52769839ede4a030e4f884fc" target="_blank"><img src="/img/가성비-루테인2.jpg" alt="" width="100" height="100"/></a><div class="text"><p>루테인 알티지 오메가3</p></div></li>';
      document.getElementById('result3').innerHTML =
          '<li><a href="https://search.shopping.naver.com/catalog/26855413531?query=%EB%B9%84%ED%83%80%EB%AF%BCC&NaPm=ct%3Dlgs1af1s%7Cci%3Df7c927e46b1597d39aa56363cb732db096b10b41%7Ctr%3Dslsl%7Csn%3D95694%7Chk%3De793c0879202b9d8a1e39f4c88478088ce1a1f16" target="_blank"><img src="/img/가성비-비타민2.jpg" alt="" width="100" height="100"/></a><div class="text"><p>고려은단 비타민C1000</p></div></li>';
}
if ((illness.includes('eyes') && illness.includes('antioxidation')) && dosage === 'tablet' && point === 'overseas') {
      document.getElementById('result1').innerHTML =
          '<li><a href="https://search.shopping.naver.com/catalog/26828554522?query=%EB%A3%A8%ED%85%8C%EC%9D%B8&NaPm=ct%3Dlgryn26g%7Cci%3Db691d7cb5cbcb89e2fcee835cc30e869d378aa61%7Ctr%3Dslsl%7Csn%3D95694%7Chk%3D04c485326254cf48fdc8ee2442bc334dda14afaf" target="_blank"><img src="/img/해외직구-루테인2.jpg" alt="" width="100" height="100"/></a><div class="text"><p>SOLGAR 루테인</p></div></li>';
      document.getElementById('result3').innerHTML =
          '<li><a href="https://smartstore.naver.com/yaksawausa/products/610036835?NaPm=ct%3Dlgs18w9k%7Cci%3D51d8c7c5ef4d1479ac0fbf0a256864ac3f858ad9%7Ctr%3Dslsl%7Csn%3D454580%7Chk%3D4d70eb5238fe82d716df093dc58214a96a9b3309" target="_blank"><img src="/img/해외직구-비타민2.jpg" alt="" width="100" height="100"/></a><div class="text"><p>Ester-C</p></div></li>';
}
else if ((illness.includes('eyes') && illness.includes('antioxidation')) && (dosage.includes('capsule') && dosage.includes('tablet')) && point === 'lowprice') {
     let resultHTML1 = '<div id="result1" style="display: flex">';
     resultHTML1 += '<li style="flex: 0.18"><a href="https://search.shopping.naver.com/catalog/13023260096?query=%EB%A3%A8%ED%85%8C%EC%9D%B8&NaPm=ct%3Dlgry4dc8%7Cci%3Da43e6e21dd80e1f27244c1c85bef1b02080563ea%7Ctr%3Dslsl%7Csn%3D95694%7Chk%3Dbb649dfbd8ebb75294c4bb74995fbda2351437b9" target="_blank"><img src="/img/가성비-루테인.jpg" alt="" width="100" height="100"/></a><div class="text"><p>프리미엄 루테인 플러스12</p></div></li>';
     resultHTML1 += '<li style="flex: 0.18"><a href="https://smartstore.naver.com/homenmallshopping/products/5176127775?NaPm=ct%3Dlgryj4z4%7Cci%3D8826ef536766ad0424ec5b0ee0fd79a3a0921ea1%7Ctr%3Dslsl%7Csn%3D538538%7Chk%3Dcf53550429e617cf52769839ede4a030e4f884fc" target="_blank"><img src="/img/가성비-루테인2.jpg" alt="" width="100" height="100"/></a><div class="text"><p>루테인 알티지 오메가3</p></div></li>';
     resultHTML1 += '</div>';
     document.getElementById('result1').innerHTML = resultHTML1;
     let resultHTML3 = '<div id="result3" style="display: flex">';
     resultHTML3 += '<li style="flex: 0.18"><a href="https://search.shopping.naver.com/catalog/30176546619?query=%EB%B9%84%ED%83%80%EB%AF%BCC&NaPm=ct%3Dlgs165i0%7Cci%3D47720510f65d07afcdf4cca453e7ca713e096eac%7Ctr%3Dslsl%7Csn%3D95694%7Chk%3Dc2cf40499ca652c78aeb1526ec5f83a44846d92b" target="_blank"><img src="/img/가성비-비타민.jpg" alt="" width="100" height="100"/></a><div class="text"><p>이지 비타민C</p></div></li>';
     resultHTML3 += '<li style="flex: 0.18"><a href="https://search.shopping.naver.com/catalog/26855413531?query=%EB%B9%84%ED%83%80%EB%AF%BCC&NaPm=ct%3Dlgs1af1s%7Cci%3Df7c927e46b1597d39aa56363cb732db096b10b41%7Ctr%3Dslsl%7Csn%3D95694%7Chk%3De793c0879202b9d8a1e39f4c88478088ce1a1f16" target="_blank"><img src="/img/가성비-비타민2.jpg" alt="" width="100" height="100"/></a><div class="text"><p>고려은단 비타민C1000</p></div></li>';
     resultHTML3 += '</div>';
     document.getElementById('result3').innerHTML = resultHTML3;
}
else if ((illness.includes('eyes') && illness.includes('antioxidation')) && (dosage.includes('capsule') && dosage.includes('tablet')) && point === 'overseas') {
     let resultHTML1 = '<div id="result1" style="display: flex">';
     resultHTML1 += '<li style="flex: 0.18"><a href="https://search.shopping.naver.com/catalog/26827095525?query=%EB%A3%A8%ED%85%8C%EC%9D%B8&NaPm=ct%3Dlgry9hr4%7Cci%3D068631725bdf8572d41f8bf3b70b7a8c61881b66%7Ctr%3Dslsl%7Csn%3D95694%7Chk%3Dede0164cd8766534eb0556ddc2c535d523b007ac" target="_blank"><img src="/img/해외직구-루테인.jpg" alt="" width="100" height="100"/></a><div class="text"><p>나우푸드 더블 스트랭스 루테인</p></div></li>';
     resultHTML1 += '<li style="flex: 0.18"><a href="https://search.shopping.naver.com/catalog/26828554522?query=%EB%A3%A8%ED%85%8C%EC%9D%B8&NaPm=ct%3Dlgryn26g%7Cci%3Db691d7cb5cbcb89e2fcee835cc30e869d378aa61%7Ctr%3Dslsl%7Csn%3D95694%7Chk%3D04c485326254cf48fdc8ee2442bc334dda14afaf" target="_blank"><img src="/img/해외직구-루테인2.jpg" alt="" width="100" height="100"/></a><div class="text"><p>SOLGAR 루테인</p></div></li>';
     resultHTML1 += '</div>';
     document.getElementById('result1').innerHTML = resultHTML1;
     let resultHTML3 = '<div id="result3" style="display: flex">';
     resultHTML3 += '<li style="flex: 0.18"><a href="https://search.shopping.naver.com/catalog/25064764523?query=%EB%B9%84%ED%83%80%EB%AF%BCC&NaPm=ct%3Dlgs17hc8%7Cci%3D0ff57aa6abf9bb4e5f0263ac05cddd47b8efa1c0%7Ctr%3Dslsl%7Csn%3D95694%7Chk%3D90f92da58b114af281be85607bb058c31e05bd81" target="_blank"><img src="/img/해외직구-비타민.jpg" alt="" width="100" height="100"/></a><div class="text"><p>캘리포니아 Gold C</p></div></li>';
     resultHTML3 += '<li style="flex: 0.18"><a href="https://smartstore.naver.com/yaksawausa/products/610036835?NaPm=ct%3Dlgs18w9k%7Cci%3D51d8c7c5ef4d1479ac0fbf0a256864ac3f858ad9%7Ctr%3Dslsl%7Csn%3D454580%7Chk%3D4d70eb5238fe82d716df093dc58214a96a9b3309" target="_blank"><img src="/img/해외직구-비타민2.jpg" alt="" width="100" height="100"/></a><div class="text"><p>Ester-C</p></div></li>';
     resultHTML3 += '</div>';
     document.getElementById('result3').innerHTML = resultHTML3;
}
else if ((illness.includes('eyes') && illness.includes('antioxidation')) && (dosage.includes('capsule') && dosage.includes('tablet')) && (point.includes('lowprice') && point.includes('overseas'))) {
     let resultHTML1 = '<div id="result1" style="display: flex">';
     resultHTML1 += '<li style="flex: 0.18"><a href="https://search.shopping.naver.com/catalog/13023260096?query=%EB%A3%A8%ED%85%8C%EC%9D%B8&NaPm=ct%3Dlgry4dc8%7Cci%3Da43e6e21dd80e1f27244c1c85bef1b02080563ea%7Ctr%3Dslsl%7Csn%3D95694%7Chk%3Dbb649dfbd8ebb75294c4bb74995fbda2351437b9" target="_blank"><img src="/img/가성비-루테인.jpg" alt="" width="100" height="100"/></a><div class="text"><p>프리미엄 루테인 플러스12</p></div></li>';
     resultHTML1 += '<li style="flex: 0.18"><a href="https://smartstore.naver.com/homenmallshopping/products/5176127775?NaPm=ct%3Dlgryj4z4%7Cci%3D8826ef536766ad0424ec5b0ee0fd79a3a0921ea1%7Ctr%3Dslsl%7Csn%3D538538%7Chk%3Dcf53550429e617cf52769839ede4a030e4f884fc" target="_blank"><img src="/img/가성비-루테인2.jpg" alt="" width="100" height="100"/></a><div class="text"><p>루테인 알티지 오메가3</p></div></li>';
     resultHTML1 += '<li style="flex: 0.18"><a href="https://search.shopping.naver.com/catalog/26827095525?query=%EB%A3%A8%ED%85%8C%EC%9D%B8&NaPm=ct%3Dlgry9hr4%7Cci%3D068631725bdf8572d41f8bf3b70b7a8c61881b66%7Ctr%3Dslsl%7Csn%3D95694%7Chk%3Dede0164cd8766534eb0556ddc2c535d523b007ac" target="_blank"><img src="/img/해외직구-루테인.jpg" alt="" width="100" height="100"/></a><div class="text"><p>나우푸드 더블 스트랭스 루테인</p></div></li>';
     resultHTML1 += '<li style="flex: 0.18"><a href="https://search.shopping.naver.com/catalog/26828554522?query=%EB%A3%A8%ED%85%8C%EC%9D%B8&NaPm=ct%3Dlgryn26g%7Cci%3Db691d7cb5cbcb89e2fcee835cc30e869d378aa61%7Ctr%3Dslsl%7Csn%3D95694%7Chk%3D04c485326254cf48fdc8ee2442bc334dda14afaf" target="_blank"><img src="/img/해외직구-루테인2.jpg" alt="" width="100" height="100"/></a><div class="text"><p>SOLGAR 루테인</p></div></li>';
     resultHTML1 += '</div>';
     document.getElementById('result1').innerHTML = resultHTML1;
     let resultHTML3 = '<div id="result3" style="display: flex">';
     resultHTML3 += '<li style="flex: 0.18"><a href="https://search.shopping.naver.com/catalog/30176546619?query=%EB%B9%84%ED%83%80%EB%AF%BCC&NaPm=ct%3Dlgs165i0%7Cci%3D47720510f65d07afcdf4cca453e7ca713e096eac%7Ctr%3Dslsl%7Csn%3D95694%7Chk%3Dc2cf40499ca652c78aeb1526ec5f83a44846d92b" target="_blank"><img src="/img/가성비-비타민.jpg" alt="" width="100" height="100"/></a><div class="text"><p>이지 비타민C</p></div></li>';
     resultHTML3 += '<li style="flex: 0.18"><a href="https://search.shopping.naver.com/catalog/26855413531?query=%EB%B9%84%ED%83%80%EB%AF%BCC&NaPm=ct%3Dlgs1af1s%7Cci%3Df7c927e46b1597d39aa56363cb732db096b10b41%7Ctr%3Dslsl%7Csn%3D95694%7Chk%3De793c0879202b9d8a1e39f4c88478088ce1a1f16" target="_blank"><img src="/img/가성비-비타민2.jpg" alt="" width="100" height="100"/></a><div class="text"><p>고려은단 비타민C1000</p></div></li>';
     resultHTML3 += '<li style="flex: 0.18"><a href="https://search.shopping.naver.com/catalog/25064764523?query=%EB%B9%84%ED%83%80%EB%AF%BCC&NaPm=ct%3Dlgs17hc8%7Cci%3D0ff57aa6abf9bb4e5f0263ac05cddd47b8efa1c0%7Ctr%3Dslsl%7Csn%3D95694%7Chk%3D90f92da58b114af281be85607bb058c31e05bd81" target="_blank"><img src="/img/해외직구-비타민.jpg" alt="" width="100" height="100"/></a><div class="text"><p>캘리포니아 Gold C</p></div></li>';
     resultHTML3 += '<li style="flex: 0.18"><a href="https://smartstore.naver.com/yaksawausa/products/610036835?NaPm=ct%3Dlgs18w9k%7Cci%3D51d8c7c5ef4d1479ac0fbf0a256864ac3f858ad9%7Ctr%3Dslsl%7Csn%3D454580%7Chk%3D4d70eb5238fe82d716df093dc58214a96a9b3309" target="_blank"><img src="/img/해외직구-비타민2.jpg" alt="" width="100" height="100"/></a><div class="text"><p>Ester-C</p></div></li>';
     resultHTML3 += '</div>';
     document.getElementById('result3').innerHTML = resultHTML3;
}

/* Calcium & Vitamin C */
if ((illness.includes('antioxidation') && illness.includes('joint')) && dosage === 'capsule' && point === 'lowprice') {
      document.getElementById('result2').innerHTML =
          '<li><a href="https://smartstore.naver.com/geeneecom/products/2532207586?NaPm=ct%3Dlgs0v8r4%7Cci%3D29d9ad283aa4f0d9efc2be0280a51cbf2c492d80%7Ctr%3Dslsl%7Csn%3D295151%7Chk%3Da6dd9f8c5c826fb43e7ac3abeca66948943b302c" target="_blank"><img src="/img/가성비-칼슘.jpg" alt="" width="100" height="100"/></a><div class="text"><p>네츄럴라이프 칼슘/마그네슘</p></div></li>';
      document.getElementById('result3').innerHTML =
          '<li><a href="https://search.shopping.naver.com/catalog/30176546619?query=%EB%B9%84%ED%83%80%EB%AF%BCC&NaPm=ct%3Dlgs165i0%7Cci%3D47720510f65d07afcdf4cca453e7ca713e096eac%7Ctr%3Dslsl%7Csn%3D95694%7Chk%3Dc2cf40499ca652c78aeb1526ec5f83a44846d92b" target="_blank"><img src="/img/가성비-비타민.jpg" alt="" width="100" height="100"/></a><div class="text"><p>이지 비타민C</p></div></li>';
}
if ((illness.includes('antioxidation') && illness.includes('joint')) && dosage === 'capsule' && point === 'overseas') {
      document.getElementById('result2').innerHTML =
          '<li><a href="https://smartstore.naver.com/dailyhealthitem/products/7695867382?NaPm=ct%3Dlgs0xa20%7Cci%3D64e977790fa5241ec25f6f12510f888647817723%7Ctr%3Dslsl%7Csn%3D6181264%7Chk%3D084f1f1e9169276b2cf125fef155c945e8896934" target="_blank"><img src="/img/해외직구-칼슘.jpg" alt="" width="100" height="100"/></a><div class="text"><p>나우푸드 cal-mag</p></div></li>';
      document.getElementById('result3').innerHTML =
          '<li><a href="https://search.shopping.naver.com/catalog/25064764523?query=%EB%B9%84%ED%83%80%EB%AF%BCC&NaPm=ct%3Dlgs17hc8%7Cci%3D0ff57aa6abf9bb4e5f0263ac05cddd47b8efa1c0%7Ctr%3Dslsl%7Csn%3D95694%7Chk%3D90f92da58b114af281be85607bb058c31e05bd81" target="_blank"><img src="/img/해외직구-비타민.jpg" alt="" width="100" height="100"/></a><div class="text"><p>캘리포니아 Gold C</p></div></li>';
}
if ((illness.includes('antioxidation') && illness.includes('joint')) && dosage === 'tablet' && point === 'lowprice') {
document.getElementById('result2').innerHTML =
    '<li><a href="https://search.shopping.naver.com/catalog/27718081522?query=%EC%B9%BC%EC%8A%98%20%EB%A7%88%EA%B7%B8%EB%84%A4%EC%8A%98%20%EB%B9%84%ED%83%80%EB%AF%BC%20D&NaPm=ct%3Dlgs137sg%7Cci%3Dec9ef43776468778483afdd7027a406b37347d3b%7Ctr%3Dslsl%7Csn%3D95694%7Chk%3D09f3a5a42d9052bfa7591ff54db83bb5632fe2db" target="_blank"><img src="/img/가성비-칼슘2.jpg" alt="" width="100" height="100"/></a><div class="text"><p>GNM 칼슘|마그네슘</p></div></li>';
      document.getElementById('result3').innerHTML =
          '<li><a href="https://search.shopping.naver.com/catalog/26855413531?query=%EB%B9%84%ED%83%80%EB%AF%BCC&NaPm=ct%3Dlgs1af1s%7Cci%3Df7c927e46b1597d39aa56363cb732db096b10b41%7Ctr%3Dslsl%7Csn%3D95694%7Chk%3De793c0879202b9d8a1e39f4c88478088ce1a1f16" target="_blank"><img src="/img/가성비-비타민2.jpg" alt="" width="100" height="100"/></a><div class="text"><p>고려은단 비타민C1000</p></div></li>';
}
if ((illness.includes('antioxidation') && illness.includes('joint')) && dosage === 'tablet' && point === 'overseas') {
      document.getElementById('result2').innerHTML =
          '<li><a href="https://smartstore.naver.com/yaksawausa/products/2072461060?NaPm=ct%3Dlgs109b4%7Cci%3D49c5618e7c1c28bd14a1c049724c1381777a0847%7Ctr%3Dslsl%7Csn%3D454580%7Chk%3D0b17a012ec32044eacc0ee2b9474596f140b2376" target="_blank"><img src="/img/해외직구-칼슘2.jpg" alt="" width="100" height="100"/></a><div class="text"><p>GNC Calcium Plus</p></div></li>';
      document.getElementById('result3').innerHTML =
          '<li><a href="https://smartstore.naver.com/yaksawausa/products/610036835?NaPm=ct%3Dlgs18w9k%7Cci%3D51d8c7c5ef4d1479ac0fbf0a256864ac3f858ad9%7Ctr%3Dslsl%7Csn%3D454580%7Chk%3D4d70eb5238fe82d716df093dc58214a96a9b3309" target="_blank"><img src="/img/해외직구-비타민2.jpg" alt="" width="100" height="100"/></a><div class="text"><p>Ester-C</p></div></li>';
}


else if ((illness.includes('joint') && illness.includes('antioxidation')) && (dosage.includes('capsule') && dosage.includes('tablet')) && point === 'lowprice') {
     let resultHTML2 = '<div id="result2" style="display: flex">';
         resultHTML2 += '<li style="flex: 0.18"><a href="https://smartstore.naver.com/geeneecom/products/2532207586?NaPm=ct%3Dlgs0v8r4%7Cci%3D29d9ad283aa4f0d9efc2be0280a51cbf2c492d80%7Ctr%3Dslsl%7Csn%3D295151%7Chk%3Da6dd9f8c5c826fb43e7ac3abeca66948943b302c" target="_blank"><img src="/img/가성비-칼슘.jpg" alt="" width="100" height="100"/></a><div class="text"><p>네츄럴라이프 칼슘/마그네슘</p></div></li>';
         resultHTML2 += '<li style="flex: 0.18"><a href="https://search.shopping.naver.com/catalog/27718081522?query=%EC%B9%BC%EC%8A%98%20%EB%A7%88%EA%B7%B8%EB%84%A4%EC%8A%98%20%EB%B9%84%ED%83%80%EB%AF%BC%20D&NaPm=ct%3Dlgs137sg%7Cci%3Dec9ef43776468778483afdd7027a406b37347d3b%7Ctr%3Dslsl%7Csn%3D95694%7Chk%3D09f3a5a42d9052bfa7591ff54db83bb5632fe2db" target="_blank"><img src="/img/가성비-칼슘2.jpg" alt="" width="100" height="100"/></a><div class="text"><p>GNM 칼슘|마그네슘</p></div></li>';
         resultHTML2 += '</div>';
         document.getElementById('result2').innerHTML = resultHTML2;
     let resultHTML3 = '<div id="result3" style="display: flex">';
         resultHTML3 += '<li style="flex: 0.18"><a href="https://search.shopping.naver.com/catalog/30176546619?query=%EB%B9%84%ED%83%80%EB%AF%BCC&NaPm=ct%3Dlgs165i0%7Cci%3D47720510f65d07afcdf4cca453e7ca713e096eac%7Ctr%3Dslsl%7Csn%3D95694%7Chk%3Dc2cf40499ca652c78aeb1526ec5f83a44846d92b" target="_blank"><img src="/img/가성비-비타민.jpg" alt="" width="100" height="100"/></a><div class="text"><p>이지 비타민C</p></div></li>';
         resultHTML3 += '<li style="flex: 0.18"><a href="https://search.shopping.naver.com/catalog/26855413531?query=%EB%B9%84%ED%83%80%EB%AF%BCC&NaPm=ct%3Dlgs1af1s%7Cci%3Df7c927e46b1597d39aa56363cb732db096b10b41%7Ctr%3Dslsl%7Csn%3D95694%7Chk%3De793c0879202b9d8a1e39f4c88478088ce1a1f16" target="_blank"><img src="/img/가성비-비타민2.jpg" alt="" width="100" height="100"/></a><div class="text"><p>고려은단 비타민C1000</p></div></li>';
         resultHTML3 += '</div>';
         document.getElementById('result3').innerHTML = resultHTML3;
    }
else if ((illness.includes('joint') && illness.includes('antioxidation')) && (dosage.includes('capsule') && dosage.includes('tablet')) && point === 'overseas') {
         let resultHTML2 = '<div id="result2" style="display: flex">';
              resultHTML2 += '<li style="flex: 0.18"><a href="https://smartstore.naver.com/dailyhealthitem/products/7695867382?NaPm=ct%3Dlgs0xa20%7Cci%3D64e977790fa5241ec25f6f12510f888647817723%7Ctr%3Dslsl%7Csn%3D6181264%7Chk%3D084f1f1e9169276b2cf125fef155c945e8896934" target="_blank"><img src="/img/해외직구-칼슘.jpg" alt="" width="100" height="100"/></a><div class="text"><p>나우푸드 cal-mag</p></div></li>';
              resultHTML2 += '<li style="flex: 0.18"><a href="https://smartstore.naver.com/yaksawausa/products/2072461060?NaPm=ct%3Dlgs109b4%7Cci%3D49c5618e7c1c28bd14a1c049724c1381777a0847%7Ctr%3Dslsl%7Csn%3D454580%7Chk%3D0b17a012ec32044eacc0ee2b9474596f140b2376" target="_blank"><img src="/img/해외직구-칼슘2.jpg" alt="" width="100" height="100"/></a><div class="text"><p>GNC Calcium Plus</p></div></li>';
              resultHTML2 += '</div>';
              document.getElementById('result2').innerHTML = resultHTML2;
         let resultHTML3 = '<div id="result3" style="display: flex">';
             resultHTML3 += '<li style="flex: 0.18"><a href="https://search.shopping.naver.com/catalog/25064764523?query=%EB%B9%84%ED%83%80%EB%AF%BCC&NaPm=ct%3Dlgs17hc8%7Cci%3D0ff57aa6abf9bb4e5f0263ac05cddd47b8efa1c0%7Ctr%3Dslsl%7Csn%3D95694%7Chk%3D90f92da58b114af281be85607bb058c31e05bd81" target="_blank"><img src="/img/해외직구-비타민.jpg" alt="" width="100" height="100"/></a><div class="text"><p>캘리포니아 Gold C</p></div></li>';
             resultHTML3 += '<li style="flex: 0.18"><a href="https://smartstore.naver.com/yaksawausa/products/610036835?NaPm=ct%3Dlgs18w9k%7Cci%3D51d8c7c5ef4d1479ac0fbf0a256864ac3f858ad9%7Ctr%3Dslsl%7Csn%3D454580%7Chk%3D4d70eb5238fe82d716df093dc58214a96a9b3309" target="_blank"><img src="/img/해외직구-비타민2.jpg" alt="" width="100" height="100"/></a><div class="text"><p>Ester-C</p></div></li>';
             resultHTML3 += '</div>';
             document.getElementById('result3').innerHTML = resultHTML3;
    }
else if ((illness.includes('joint') && illness.includes('antioxidation')) && (dosage.includes('capsule') && dosage.includes('tablet')) && (point.includes('lowprice') && point.includes('overseas'))) {
         let resultHTML2 = '<div id="result2" style="display: flex">';
              resultHTML2 += '<li style="flex: 0.18"><a href="https://smartstore.naver.com/geeneecom/products/2532207586?NaPm=ct%3Dlgs0v8r4%7Cci%3D29d9ad283aa4f0d9efc2be0280a51cbf2c492d80%7Ctr%3Dslsl%7Csn%3D295151%7Chk%3Da6dd9f8c5c826fb43e7ac3abeca66948943b302c" target="_blank"><img src="/img/가성비-칼슘.jpg" alt="" width="100" height="100"/></a><div class="text"><p>네츄럴라이프 칼슘/마그네슘</p></div></li>';
              resultHTML2 += '<li style="flex: 0.18"><a href="https://search.shopping.naver.com/catalog/27718081522?query=%EC%B9%BC%EC%8A%98%20%EB%A7%88%EA%B7%B8%EB%84%A4%EC%8A%98%20%EB%B9%84%ED%83%80%EB%AF%BC%20D&NaPm=ct%3Dlgs137sg%7Cci%3Dec9ef43776468778483afdd7027a406b37347d3b%7Ctr%3Dslsl%7Csn%3D95694%7Chk%3D09f3a5a42d9052bfa7591ff54db83bb5632fe2db" target="_blank"><img src="/img/가성비-칼슘2.jpg" alt="" width="100" height="100"/></a><div class="text"><p>GNM 칼슘|마그네슘</p></div></li>';
              resultHTML2 += '<li style="flex: 0.18"><a href="https://smartstore.naver.com/dailyhealthitem/products/7695867382?NaPm=ct%3Dlgs0xa20%7Cci%3D64e977790fa5241ec25f6f12510f888647817723%7Ctr%3Dslsl%7Csn%3D6181264%7Chk%3D084f1f1e9169276b2cf125fef155c945e8896934" target="_blank"><img src="/img/해외직구-칼슘.jpg" alt="" width="100" height="100"/></a><div class="text"><p>나우푸드 cal-mag</p></div></li>';
              resultHTML2 += '<li style="flex: 0.18"><a href="https://smartstore.naver.com/yaksawausa/products/2072461060?NaPm=ct%3Dlgs109b4%7Cci%3D49c5618e7c1c28bd14a1c049724c1381777a0847%7Ctr%3Dslsl%7Csn%3D454580%7Chk%3D0b17a012ec32044eacc0ee2b9474596f140b2376" target="_blank"><img src="/img/해외직구-칼슘2.jpg" alt="" width="100" height="100"/></a><div class="text"><p>GNC Calcium Plus</p></div></li>';
              resultHTML2 += '</div>';
              document.getElementById('result2').innerHTML = resultHTML2;
         let resultHTML3 = '<div id="result3" style="display: flex">';
             resultHTML3 += '<li style="flex: 0.18"><a href="https://search.shopping.naver.com/catalog/30176546619?query=%EB%B9%84%ED%83%80%EB%AF%BCC&NaPm=ct%3Dlgs165i0%7Cci%3D47720510f65d07afcdf4cca453e7ca713e096eac%7Ctr%3Dslsl%7Csn%3D95694%7Chk%3Dc2cf40499ca652c78aeb1526ec5f83a44846d92b" target="_blank"><img src="/img/가성비-비타민.jpg" alt="" width="100" height="100"/></a><div class="text"><p>이지 비타민C</p></div></li>';
             resultHTML3 += '<li style="flex: 0.18"><a href="https://search.shopping.naver.com/catalog/26855413531?query=%EB%B9%84%ED%83%80%EB%AF%BCC&NaPm=ct%3Dlgs1af1s%7Cci%3Df7c927e46b1597d39aa56363cb732db096b10b41%7Ctr%3Dslsl%7Csn%3D95694%7Chk%3De793c0879202b9d8a1e39f4c88478088ce1a1f16" target="_blank"><img src="/img/가성비-비타민2.jpg" alt="" width="100" height="100"/></a><div class="text"><p>고려은단 비타민C1000</p></div></li>';
             resultHTML3 += '<li style="flex: 0.18"><a href="https://search.shopping.naver.com/catalog/25064764523?query=%EB%B9%84%ED%83%80%EB%AF%BCC&NaPm=ct%3Dlgs17hc8%7Cci%3D0ff57aa6abf9bb4e5f0263ac05cddd47b8efa1c0%7Ctr%3Dslsl%7Csn%3D95694%7Chk%3D90f92da58b114af281be85607bb058c31e05bd81" target="_blank"><img src="/img/해외직구-비타민.jpg" alt="" width="100" height="100"/></a><div class="text"><p>캘리포니아 Gold C</p></div></li>';
             resultHTML3 += '<li style="flex: 0.18"><a href="https://smartstore.naver.com/yaksawausa/products/610036835?NaPm=ct%3Dlgs18w9k%7Cci%3D51d8c7c5ef4d1479ac0fbf0a256864ac3f858ad9%7Ctr%3Dslsl%7Csn%3D454580%7Chk%3D4d70eb5238fe82d716df093dc58214a96a9b3309" target="_blank"><img src="/img/해외직구-비타민2.jpg" alt="" width="100" height="100"/></a><div class="text"><p>Ester-C</p></div></li>';
             resultHTML3 += '</div>';
             document.getElementById('result3').innerHTML = resultHTML3;
    }

/* Lutein & Calcium & Vitamin C*/
if ((illness.includes('eyes') && illness.includes('joint') && illness.includes('antioxidation')) && dosage === 'capsule' && point === 'lowprice') {
      document.getElementById('result1').innerHTML =
      '<li><a href="https://search.shopping.naver.com/catalog/13023260096?query=%EB%A3%A8%ED%85%8C%EC%9D%B8&NaPm=ct%3Dlgry4dc8%7Cci%3Da43e6e21dd80e1f27244c1c85bef1b02080563ea%7Ctr%3Dslsl%7Csn%3D95694%7Chk%3Dbb649dfbd8ebb75294c4bb74995fbda2351437b9" target="_blank"><img src="/img/가성비-루테인.jpg" alt="" width="100" height="100"/></a><div class="text"><p>프리미엄 루테인 플러스12</p></div></li>';
      document.getElementById('result2').innerHTML =
        '<li><a href="https://smartstore.naver.com/geeneecom/products/2532207586?NaPm=ct%3Dlgs0v8r4%7Cci%3D29d9ad283aa4f0d9efc2be0280a51cbf2c492d80%7Ctr%3Dslsl%7Csn%3D295151%7Chk%3Da6dd9f8c5c826fb43e7ac3abeca66948943b302c" target="_blank"><img src="/img/가성비-칼슘.jpg" alt="" width="100" height="100"/></a><div class="text"><p>네츄럴라이프 칼슘/마그네슘</p></div></li>';
      document.getElementById('result3').innerHTML =
          '<li><a href="https://search.shopping.naver.com/catalog/30176546619?query=%EB%B9%84%ED%83%80%EB%AF%BCC&NaPm=ct%3Dlgs165i0%7Cci%3D47720510f65d07afcdf4cca453e7ca713e096eac%7Ctr%3Dslsl%7Csn%3D95694%7Chk%3Dc2cf40499ca652c78aeb1526ec5f83a44846d92b" target="_blank"><img src="/img/가성비-비타민.jpg" alt="" width="100" height="100"/></a><div class="text"><p>이지 비타민C</p></div></li>';
}
if ((illness.includes('eyes') && illness.includes('joint') && illness.includes('antioxidation')) && dosage === 'capsule' && point === 'overseas') {
      document.getElementById('result1').innerHTML =
          '<li><a href="https://search.shopping.naver.com/catalog/26827095525?query=%EB%A3%A8%ED%85%8C%EC%9D%B8&NaPm=ct%3Dlgry9hr4%7Cci%3D068631725bdf8572d41f8bf3b70b7a8c61881b66%7Ctr%3Dslsl%7Csn%3D95694%7Chk%3Dede0164cd8766534eb0556ddc2c535d523b007ac" target="_blank"><img src="/img/해외직구-루테인.jpg" alt="" width="100" height="100"/></a><div class="text"><p>나우푸드 더블 스트랭스 루테인</p></div></li>';
      document.getElementById('result2').innerHTML =
          '<li><a href="https://smartstore.naver.com/dailyhealthitem/products/7695867382?NaPm=ct%3Dlgs0xa20%7Cci%3D64e977790fa5241ec25f6f12510f888647817723%7Ctr%3Dslsl%7Csn%3D6181264%7Chk%3D084f1f1e9169276b2cf125fef155c945e8896934" target="_blank"><img src="/img/해외직구-칼슘.jpg" alt="" width="100" height="100"/></a><div class="text"><p>나우푸드 cal-mag</p></div></li>';
      document.getElementById('result3').innerHTML =
          '<li><a href="https://search.shopping.naver.com/catalog/25064764523?query=%EB%B9%84%ED%83%80%EB%AF%BCC&NaPm=ct%3Dlgs17hc8%7Cci%3D0ff57aa6abf9bb4e5f0263ac05cddd47b8efa1c0%7Ctr%3Dslsl%7Csn%3D95694%7Chk%3D90f92da58b114af281be85607bb058c31e05bd81" target="_blank"><img src="/img/해외직구-비타민.jpg" alt="" width="100" height="100"/></a><div class="text"><p>캘리포니아 Gold C</p></div></li>';
}
if ((illness.includes('eyes') && illness.includes('joint') && illness.includes('antioxidation')) && dosage === 'tablet' && point === 'lowprice') {
      document.getElementById('result1').innerHTML =
          '<li><a href="https://smartstore.naver.com/homenmallshopping/products/5176127775?NaPm=ct%3Dlgryj4z4%7Cci%3D8826ef536766ad0424ec5b0ee0fd79a3a0921ea1%7Ctr%3Dslsl%7Csn%3D538538%7Chk%3Dcf53550429e617cf52769839ede4a030e4f884fc" target="_blank"><img src="/img/가성비-루테인2.jpg" alt="" width="100" height="100"/></a><div class="text"><p>루테인 알티지 오메가3</p></div></li>';
      document.getElementById('result2').innerHTML =
         '<li><a href="https://search.shopping.naver.com/catalog/27718081522?query=%EC%B9%BC%EC%8A%98%20%EB%A7%88%EA%B7%B8%EB%84%A4%EC%8A%98%20%EB%B9%84%ED%83%80%EB%AF%BC%20D&NaPm=ct%3Dlgs137sg%7Cci%3Dec9ef43776468778483afdd7027a406b37347d3b%7Ctr%3Dslsl%7Csn%3D95694%7Chk%3D09f3a5a42d9052bfa7591ff54db83bb5632fe2db" target="_blank"><img src="/img/가성비-칼슘2.jpg" alt="" width="100" height="100"/></a><div class="text"><p>GNM 칼슘|마그네슘</p></div></li>';
      document.getElementById('result3').innerHTML =
          '<li><a href="https://search.shopping.naver.com/catalog/26855413531?query=%EB%B9%84%ED%83%80%EB%AF%BCC&NaPm=ct%3Dlgs1af1s%7Cci%3Df7c927e46b1597d39aa56363cb732db096b10b41%7Ctr%3Dslsl%7Csn%3D95694%7Chk%3De793c0879202b9d8a1e39f4c88478088ce1a1f16" target="_blank"><img src="/img/가성비-비타민2.jpg" alt="" width="100" height="100"/></a><div class="text"><p>고려은단 비타민C1000</p></div></li>';
}
if ((illness.includes('eyes') && illness.includes('joint') && illness.includes('antioxidation')) && dosage === 'tablet' && point === 'overseas') {
      document.getElementById('result1').innerHTML =
          '<li><a href="https://search.shopping.naver.com/catalog/26828554522?query=%EB%A3%A8%ED%85%8C%EC%9D%B8&NaPm=ct%3Dlgryn26g%7Cci%3Db691d7cb5cbcb89e2fcee835cc30e869d378aa61%7Ctr%3Dslsl%7Csn%3D95694%7Chk%3D04c485326254cf48fdc8ee2442bc334dda14afaf" target="_blank"><img src="/img/해외직구-루테인2.jpg" alt="" width="100" height="100"/></a><div class="text"><p>SOLGAR 루테인</p></div></li>';
      document.getElementById('result2').innerHTML =
          '<li><a href="https://smartstore.naver.com/yaksawausa/products/2072461060?NaPm=ct%3Dlgs109b4%7Cci%3D49c5618e7c1c28bd14a1c049724c1381777a0847%7Ctr%3Dslsl%7Csn%3D454580%7Chk%3D0b17a012ec32044eacc0ee2b9474596f140b2376" target="_blank"><img src="/img/해외직구-칼슘2.jpg" alt="" width="100" height="100"/></a><div class="text"><p>GNC Calcium Plus</p></div></li>';
      document.getElementById('result3').innerHTML =
          '<li><a href="https://smartstore.naver.com/yaksawausa/products/610036835?NaPm=ct%3Dlgs18w9k%7Cci%3D51d8c7c5ef4d1479ac0fbf0a256864ac3f858ad9%7Ctr%3Dslsl%7Csn%3D454580%7Chk%3D4d70eb5238fe82d716df093dc58214a96a9b3309" target="_blank"><img src="/img/해외직구-비타민2.jpg" alt="" width="100" height="100"/></a><div class="text"><p>Ester-C</p></div></li>';
}

else if ((illness.includes('eyes') && illness.includes('joint') && illness.includes('antioxidation')) && (dosage.includes('capsule') && dosage.includes('tablet')) && point === 'lowprice') {
     let resultHTML1 = '<div id="result1" style="display: flex">';
         resultHTML1 += '<li style="flex: 0.18"><a href="https://search.shopping.naver.com/catalog/13023260096?query=%EB%A3%A8%ED%85%8C%EC%9D%B8&NaPm=ct%3Dlgry4dc8%7Cci%3Da43e6e21dd80e1f27244c1c85bef1b02080563ea%7Ctr%3Dslsl%7Csn%3D95694%7Chk%3Dbb649dfbd8ebb75294c4bb74995fbda2351437b9" target="_blank"><img src="/img/가성비-루테인.jpg" alt="" width="100" height="100"/></a><div class="text"><p>프리미엄 루테인 플러스12</p></div></li>';
         resultHTML1 += '<li style="flex: 0.18"><a href="https://smartstore.naver.com/homenmallshopping/products/5176127775?NaPm=ct%3Dlgryj4z4%7Cci%3D8826ef536766ad0424ec5b0ee0fd79a3a0921ea1%7Ctr%3Dslsl%7Csn%3D538538%7Chk%3Dcf53550429e617cf52769839ede4a030e4f884fc" target="_blank"><img src="/img/가성비-루테인2.jpg" alt="" width="100" height="100"/></a><div class="text"><p>루테인 알티지 오메가3</p></div></li>';
         resultHTML1 += '</div>';
     document.getElementById('result1').innerHTML = resultHTML1;
     let resultHTML2 = '<div id="result2" style="display: flex">';
         resultHTML2 += '<li style="flex: 0.18"><a href="https://smartstore.naver.com/geeneecom/products/2532207586?NaPm=ct%3Dlgs0v8r4%7Cci%3D29d9ad283aa4f0d9efc2be0280a51cbf2c492d80%7Ctr%3Dslsl%7Csn%3D295151%7Chk%3Da6dd9f8c5c826fb43e7ac3abeca66948943b302c" target="_blank"><img src="/img/가성비-칼슘.jpg" alt="" width="100" height="100"/></a><div class="text"><p>네츄럴라이프 칼슘/마그네슘</p></div></li>';
         resultHTML2 += '<li style="flex: 0.18"><a href="https://search.shopping.naver.com/catalog/27718081522?query=%EC%B9%BC%EC%8A%98%20%EB%A7%88%EA%B7%B8%EB%84%A4%EC%8A%98%20%EB%B9%84%ED%83%80%EB%AF%BC%20D&NaPm=ct%3Dlgs137sg%7Cci%3Dec9ef43776468778483afdd7027a406b37347d3b%7Ctr%3Dslsl%7Csn%3D95694%7Chk%3D09f3a5a42d9052bfa7591ff54db83bb5632fe2db" target="_blank"><img src="/img/가성비-칼슘2.jpg" alt="" width="100" height="100"/></a><div class="text"><p>GNM 칼슘|마그네슘</p></div></li>';
         resultHTML2 += '</div>';
         document.getElementById('result2').innerHTML = resultHTML2;
     let resultHTML3 = '<div id="result3" style="display: flex">';
        resultHTML3 += '<li style="flex: 0.18"><a href="https://search.shopping.naver.com/catalog/30176546619?query=%EB%B9%84%ED%83%80%EB%AF%BCC&NaPm=ct%3Dlgs165i0%7Cci%3D47720510f65d07afcdf4cca453e7ca713e096eac%7Ctr%3Dslsl%7Csn%3D95694%7Chk%3Dc2cf40499ca652c78aeb1526ec5f83a44846d92b" target="_blank"><img src="/img/가성비-비타민.jpg" alt="" width="100" height="100"/></a><div class="text"><p>이지 비타민C</p></div></li>';
        resultHTML3 += '<li style="flex: 0.18"><a href="https://search.shopping.naver.com/catalog/26855413531?query=%EB%B9%84%ED%83%80%EB%AF%BCC&NaPm=ct%3Dlgs1af1s%7Cci%3Df7c927e46b1597d39aa56363cb732db096b10b41%7Ctr%3Dslsl%7Csn%3D95694%7Chk%3De793c0879202b9d8a1e39f4c88478088ce1a1f16" target="_blank"><img src="/img/가성비-비타민2.jpg" alt="" width="100" height="100"/></a><div class="text"><p>고려은단 비타민C1000</p></div></li>';
        resultHTML3 += '</div>';
        document.getElementById('result3').innerHTML = resultHTML3;
}

else if ((illness.includes('eyes') && illness.includes('joint') && illness.includes('antioxidation')) && (dosage.includes('capsule') && dosage.includes('tablet')) && point === 'overseas') {
     let resultHTML1 = '<div id="result1" style="display: flex">';
         resultHTML1 += '<li style="flex: 0.18"><a href="https://search.shopping.naver.com/catalog/26827095525?query=%EB%A3%A8%ED%85%8C%EC%9D%B8&NaPm=ct%3Dlgry9hr4%7Cci%3D068631725bdf8572d41f8bf3b70b7a8c61881b66%7Ctr%3Dslsl%7Csn%3D95694%7Chk%3Dede0164cd8766534eb0556ddc2c535d523b007ac" target="_blank"><img src="/img/해외직구-루테인.jpg" alt="" width="100" height="100"/></a><div class="text"><p>나우푸드 더블 스트랭스 루테인</p></div></li>';
         resultHTML1 += '<li style="flex: 0.18"><a href="https://search.shopping.naver.com/catalog/26828554522?query=%EB%A3%A8%ED%85%8C%EC%9D%B8&NaPm=ct%3Dlgryn26g%7Cci%3Db691d7cb5cbcb89e2fcee835cc30e869d378aa61%7Ctr%3Dslsl%7Csn%3D95694%7Chk%3D04c485326254cf48fdc8ee2442bc334dda14afaf" target="_blank"><img src="/img/해외직구-루테인2.jpg" alt="" width="100" height="100"/></a><div class="text"><p>SOLGAR 루테인</p></div></li>';
         resultHTML1 += '</div>';
         document.getElementById('result1').innerHTML = resultHTML1;
     let resultHTML2 = '<div id="result2" style="display: flex">';
         resultHTML2 += '<li style="flex: 0.18"><a href="https://smartstore.naver.com/dailyhealthitem/products/7695867382?NaPm=ct%3Dlgs0xa20%7Cci%3D64e977790fa5241ec25f6f12510f888647817723%7Ctr%3Dslsl%7Csn%3D6181264%7Chk%3D084f1f1e9169276b2cf125fef155c945e8896934" target="_blank"><img src="/img/해외직구-칼슘.jpg" alt="" width="100" height="100"/></a><div class="text"><p>나우푸드 cal-mag</p></div></li>';
         resultHTML2 += '<li style="flex: 0.18"><a href="https://smartstore.naver.com/yaksawausa/products/2072461060?NaPm=ct%3Dlgs109b4%7Cci%3D49c5618e7c1c28bd14a1c049724c1381777a0847%7Ctr%3Dslsl%7Csn%3D454580%7Chk%3D0b17a012ec32044eacc0ee2b9474596f140b2376" target="_blank"><img src="/img/해외직구-칼슘2.jpg" alt="" width="100" height="100"/></a><div class="text"><p>GNC Calcium Plus</p></div></li>';
         resultHTML2 += '</div>';
         document.getElementById('result2').innerHTML = resultHTML2;
     let resultHTML3 = '<div id="result3" style="display: flex">';
        resultHTML3 += '<li style="flex: 0.18"><a href="https://search.shopping.naver.com/catalog/25064764523?query=%EB%B9%84%ED%83%80%EB%AF%BCC&NaPm=ct%3Dlgs17hc8%7Cci%3D0ff57aa6abf9bb4e5f0263ac05cddd47b8efa1c0%7Ctr%3Dslsl%7Csn%3D95694%7Chk%3D90f92da58b114af281be85607bb058c31e05bd81" target="_blank"><img src="/img/해외직구-비타민.jpg" alt="" width="100" height="100"/></a><div class="text"><p>캘리포니아 Gold C</p></div></li>';
        resultHTML3 += '<li style="flex: 0.18"><a href="https://smartstore.naver.com/yaksawausa/products/610036835?NaPm=ct%3Dlgs18w9k%7Cci%3D51d8c7c5ef4d1479ac0fbf0a256864ac3f858ad9%7Ctr%3Dslsl%7Csn%3D454580%7Chk%3D4d70eb5238fe82d716df093dc58214a96a9b3309" target="_blank"><img src="/img/해외직구-비타민2.jpg" alt="" width="100" height="100"/></a><div class="text"><p>Ester-C</p></div></li>';
        resultHTML3 += '</div>';
        document.getElementById('result3').innerHTML = resultHTML3;
}

else if ((illness.includes('eyes') && illness.includes('joint') && illness.includes('antioxidation')) && (dosage.includes('capsule') && dosage.includes('tablet')) && (point.includes('lowprice') && point.includes('overseas'))) {
         let resultHTML1 = '<div id="result1" style="display: flex">';
         resultHTML1 += '<li style="flex: 0.18"><a href="https://search.shopping.naver.com/catalog/13023260096?query=%EB%A3%A8%ED%85%8C%EC%9D%B8&NaPm=ct%3Dlgry4dc8%7Cci%3Da43e6e21dd80e1f27244c1c85bef1b02080563ea%7Ctr%3Dslsl%7Csn%3D95694%7Chk%3Dbb649dfbd8ebb75294c4bb74995fbda2351437b9" target="_blank"><img src="/img/가성비-루테인.jpg" alt="" width="100" height="100"/></a><div class="text"><p>프리미엄 루테인 플러스12</p></div></li>';
         resultHTML1 += '<li style="flex: 0.18"><a href="https://smartstore.naver.com/homenmallshopping/products/5176127775?NaPm=ct%3Dlgryj4z4%7Cci%3D8826ef536766ad0424ec5b0ee0fd79a3a0921ea1%7Ctr%3Dslsl%7Csn%3D538538%7Chk%3Dcf53550429e617cf52769839ede4a030e4f884fc" target="_blank"><img src="/img/가성비-루테인2.jpg" alt="" width="100" height="100"/></a><div class="text"><p>루테인 알티지 오메가3</p></div></li>';
         resultHTML1 += '<li style="flex: 0.18"><a href="https://search.shopping.naver.com/catalog/26827095525?query=%EB%A3%A8%ED%85%8C%EC%9D%B8&NaPm=ct%3Dlgry9hr4%7Cci%3D068631725bdf8572d41f8bf3b70b7a8c61881b66%7Ctr%3Dslsl%7Csn%3D95694%7Chk%3Dede0164cd8766534eb0556ddc2c535d523b007ac" target="_blank"><img src="/img/해외직구-루테인.jpg" alt="" width="100" height="100"/></a><div class="text"><p>나우푸드 더블 스트랭스 루테인</p></div></li>';
         resultHTML1 += '<li style="flex: 0.18"><a href="https://search.shopping.naver.com/catalog/26828554522?query=%EB%A3%A8%ED%85%8C%EC%9D%B8&NaPm=ct%3Dlgryn26g%7Cci%3Db691d7cb5cbcb89e2fcee835cc30e869d378aa61%7Ctr%3Dslsl%7Csn%3D95694%7Chk%3D04c485326254cf48fdc8ee2442bc334dda14afaf" target="_blank"><img src="/img/해외직구-루테인2.jpg" alt="" width="100" height="100"/></a><div class="text"><p>SOLGAR 루테인</p></div></li>';
         resultHTML1 += '</div>';
     document.getElementById('result1').innerHTML = resultHTML1;
         let resultHTML2 = '<div id="result2" style="display: flex">';
         resultHTML2 += '<li style="flex: 0.18"><a href="https://smartstore.naver.com/geeneecom/products/2532207586?NaPm=ct%3Dlgs0v8r4%7Cci%3D29d9ad283aa4f0d9efc2be0280a51cbf2c492d80%7Ctr%3Dslsl%7Csn%3D295151%7Chk%3Da6dd9f8c5c826fb43e7ac3abeca66948943b302c" target="_blank"><img src="/img/가성비-칼슘.jpg" alt="" width="100" height="100"/></a><div class="text"><p>네츄럴라이프 칼슘/마그네슘</p></div></li>';
         resultHTML2 += '<li style="flex: 0.18"><a href="https://search.shopping.naver.com/catalog/27718081522?query=%EC%B9%BC%EC%8A%98%20%EB%A7%88%EA%B7%B8%EB%84%A4%EC%8A%98%20%EB%B9%84%ED%83%80%EB%AF%BC%20D&NaPm=ct%3Dlgs137sg%7Cci%3Dec9ef43776468778483afdd7027a406b37347d3b%7Ctr%3Dslsl%7Csn%3D95694%7Chk%3D09f3a5a42d9052bfa7591ff54db83bb5632fe2db" target="_blank"><img src="/img/가성비-칼슘2.jpg" alt="" width="100" height="100"/></a><div class="text"><p>GNM 칼슘|마그네슘</p></div></li>';
         resultHTML2 += '<li style="flex: 0.18"><a href="https://smartstore.naver.com/dailyhealthitem/products/7695867382?NaPm=ct%3Dlgs0xa20%7Cci%3D64e977790fa5241ec25f6f12510f888647817723%7Ctr%3Dslsl%7Csn%3D6181264%7Chk%3D084f1f1e9169276b2cf125fef155c945e8896934" target="_blank"><img src="/img/해외직구-칼슘.jpg" alt="" width="100" height="100"/></a><div class="text"><p>나우푸드 cal-mag</p></div></li>';
         resultHTML2 += '<li style="flex: 0.18"><a href="https://smartstore.naver.com/yaksawausa/products/2072461060?NaPm=ct%3Dlgs109b4%7Cci%3D49c5618e7c1c28bd14a1c049724c1381777a0847%7Ctr%3Dslsl%7Csn%3D454580%7Chk%3D0b17a012ec32044eacc0ee2b9474596f140b2376" target="_blank"><img src="/img/해외직구-칼슘2.jpg" alt="" width="100" height="100"/></a><div class="text"><p>GNC Calcium Plus</p></div></li>';
         resultHTML2 += '</div>';
     document.getElementById('result2').innerHTML = resultHTML2;
     let resultHTML3 = '<div id="result3" style="display: flex">';
        resultHTML3 += '<li style="flex: 0.18"><a href="https://search.shopping.naver.com/catalog/30176546619?query=%EB%B9%84%ED%83%80%EB%AF%BCC&NaPm=ct%3Dlgs165i0%7Cci%3D47720510f65d07afcdf4cca453e7ca713e096eac%7Ctr%3Dslsl%7Csn%3D95694%7Chk%3Dc2cf40499ca652c78aeb1526ec5f83a44846d92b" target="_blank"><img src="/img/가성비-비타민.jpg" alt="" width="100" height="100"/></a><div class="text"><p>이지 비타민C</p></div></li>';
        resultHTML3 += '<li style="flex: 0.18"><a href="https://search.shopping.naver.com/catalog/26855413531?query=%EB%B9%84%ED%83%80%EB%AF%BCC&NaPm=ct%3Dlgs1af1s%7Cci%3Df7c927e46b1597d39aa56363cb732db096b10b41%7Ctr%3Dslsl%7Csn%3D95694%7Chk%3De793c0879202b9d8a1e39f4c88478088ce1a1f16" target="_blank"><img src="/img/가성비-비타민2.jpg" alt="" width="100" height="100"/></a><div class="text"><p>고려은단 비타민C1000</p></div></li>';
        resultHTML3 += '<li style="flex: 0.18"><a href="https://search.shopping.naver.com/catalog/25064764523?query=%EB%B9%84%ED%83%80%EB%AF%BCC&NaPm=ct%3Dlgs17hc8%7Cci%3D0ff57aa6abf9bb4e5f0263ac05cddd47b8efa1c0%7Ctr%3Dslsl%7Csn%3D95694%7Chk%3D90f92da58b114af281be85607bb058c31e05bd81" target="_blank"><img src="/img/해외직구-비타민.jpg" alt="" width="100" height="100"/></a><div class="text"><p>캘리포니아 Gold C</p></div></li>';
        resultHTML3 += '<li style="flex: 0.18"><a href="https://smartstore.naver.com/yaksawausa/products/610036835?NaPm=ct%3Dlgs18w9k%7Cci%3D51d8c7c5ef4d1479ac0fbf0a256864ac3f858ad9%7Ctr%3Dslsl%7Csn%3D454580%7Chk%3D4d70eb5238fe82d716df093dc58214a96a9b3309" target="_blank"><img src="/img/해외직구-비타민2.jpg" alt="" width="100" height="100"/></a><div class="text"><p>Ester-C</p></div></li>';
        resultHTML3 += '</div>';
        document.getElementById('result3').innerHTML = resultHTML3;
}