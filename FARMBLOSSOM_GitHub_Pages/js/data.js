/* 공개용 콘텐츠만 입력하세요. 사진별 정보는 정확한 상대 경로를 키로 사용합니다. */
window.FARM_DATA = {
  projects: [
    {id:'farm', number:'01', name:'FARM', title:'자연을 키우다', intro:'땅에서 시작하는 가치. 생산과 농장 조성을 통해 계절의 결실을 만들어갑니다.', folders:['04_farm'], theme:'farm', link:{label:'꽃폈네 웹앱에서 농장 둘러보기', href:'https://farmblossom.kr'}, groups:[
      {status:'active',label:'운영·활동',items:['감자·고구마·단감 재배 및 관리','농장 개간 및 토지 정비','재배 연구와 현장 기록']},
      {status:'progress',label:'기획·개발 중',items:['과원 조성 프로젝트','생산 및 품질관리 체계 정비']},
      {status:'planned',label:'향후 계획',items:['사과대추 재배·관리 및 작목 확장']}
    ]},
    {id:'brand', number:'02', name:'BRAND', title:'가치를 키우다', intro:'농산물에 이야기와 디자인을 더해 기억에 남는 브랜드 경험을 기획합니다.', folders:['05_brand','06_characters'], theme:'brand', groups:[
      {status:'active',label:'운영·활동',items:['퍼뜨기·쑤담이 캐릭터 기획','브랜드 콘텐츠 및 상품 디자인 활동']},
      {status:'progress',label:'기획·개발 중',items:['꽃폈네 스토리박스','패키지와 캐릭터 굿즈·키링','당고매·꿀고매·쫀고매 상품 기획']},
      {status:'planned',label:'향후 계획',items:['스토리북 및 농산물 가공상품 확장']}
    ]},
    {id:'innovation', number:'03', name:'INNOVATION', title:'가능성을 키우다', intro:'농업과 디지털 기술, 교육을 연결하여 새로운 농업 경험을 설계합니다.', folders:['07_innovation'], theme:'innovation', link:{label:'꽃폈네 OS·가상농장 웹앱 열기', href:'https://farmblossom.kr'}, groups:[
      {status:'active',label:'운영·활동',items:['SW·AI 융합 교육']},
      {status:'progress',label:'기획·개발 중',items:['꽃폈네 OS — 2027년 봄감자 40팀 실증 목표 (참여 실적 아님)','고객 참여형 디지털 농장 및 실제 농장과 연결되는 가상 농장','고객별 재배 구역·성장일지·수확 요청 기능']},
      {status:'planned',label:'향후 계획',items:['농업 체험 콘텐츠 및 교육 연계 서비스']}
    ]}
  ],
  filters:[['all','전체'],['farm','농업'],['brand','브랜드'],['tech','기술'],['startup','창업']],
  // 사진 제목·설명·분류. 키는 images/ 아래 실제 상대 경로와 같아야 합니다.
  images:{
    'images/03_about/창업자소개.png':{title:'창업자 소개',description:'밭을 일구고 농장을 돌보고, 수확한 농산물까지 하나씩 직접 확인합니다.'},
    'images/03_about/fm_jjeongi.jpg':{title:'FM 쩡이',description:'꽃폈네 농장의 모든 판단과 승인을 담당하는 총괄 농장관리자 캐릭터입니다.'},
    'images/04_farm/품종소개.png':{title:'품종 소개',category:'farm',description:'계절과 농장에 맞는 품종을 골라 정성껏 키웁니다.'},
    'images/05_brand/꽃폈네 스토리박스.png':{title:'꽃폈네 스토리박스',category:'brand',description:'농산물과 함께 농장의 한 철 이야기를 담아 보냅니다.'},
    'images/08_story/퍼뜨기와 쑤담이.png':{category:'brand'},
    'images/08_story/농부가 된 퍼뜨기와 쑤담이.png':{category:'brand'},
    // 06_characters에 같은 사진이 있어 FIELD NOTES에는 한 번만 보이도록 합니다.
    'images/08_story/퍼뜨기.jpg':{story:false},
    'images/08_story/쑤담이.jpg':{story:false},
    'images/08_story/fm_jjeongi.jpg':{story:false}
  },
  // 실제 공개용 연락처만 입력하세요. 빈 값은 링크를 표시하지 않습니다.
  contact:{email:'farm_blossom@naver.com', instagram:'https://www.instagram.com/_farmblossom', homepage:'https://farmblossom.kr', sns:'', shop:'', booking:'', os:''}
};
