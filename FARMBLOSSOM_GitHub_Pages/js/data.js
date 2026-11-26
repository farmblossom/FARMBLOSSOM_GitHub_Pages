/* 공개용 콘텐츠만 입력하세요. 사진별 정보는 정확한 상대 경로를 키로 사용합니다. */
window.FARM_DATA = {
  projects: [
    {id:'farm', number:'01', name:'FARM', title:'자연을 키우다', intro:'땅에서 시작하는 가치. 생산과 농장 조성을 통해 계절의 결실을 만들어갑니다.', folders:['04_farm'], theme:'farm', groups:[
      {status:'active',label:'운영·활동',items:['감자·고구마·단감 재배 및 관리','농장 개간 및 토지 정비','재배 연구와 현장 기록']},
      {status:'progress',label:'기획·개발 중',items:['과원 조성 프로젝트','생산 및 품질관리 체계 정비']},
      {status:'planned',label:'향후 계획',items:['사과대추 재배·관리 및 작목 확장']}
    ]},
    {id:'brand', number:'02', name:'BRAND', title:'가치를 키우다', intro:'농산물에 이야기와 디자인을 더해 기억에 남는 브랜드 경험을 기획합니다.', folders:['05_brand','06_characters'], theme:'brand', groups:[
      {status:'active',label:'운영·활동',items:['퍼뜨기·쑤담이 캐릭터 기획','브랜드 콘텐츠 및 상품 디자인 활동']},
      {status:'progress',label:'기획·개발 중',items:['꽃폈네 스토리박스','패키지와 캐릭터 굿즈·키링','당고매·꿀고매·쫀고매 상품 기획']},
      {status:'planned',label:'향후 계획',items:['스토리북 및 농산물 가공상품 확장']}
    ]},
    {id:'innovation', number:'03', name:'INNOVATION', title:'가능성을 키우다', intro:'농업과 디지털 기술, 교육을 연결하여 새로운 농업 경험을 설계합니다.', folders:['07_innovation'], theme:'innovation', groups:[
      {status:'active',label:'운영·활동',items:['SW·AI 융합 교육']},
      {status:'progress',label:'기획·개발 중',items:['꽃폈네 OS — 2027년 봄감자 40팀 실증 목표 (참여 실적 아님)','고객 참여형 디지털 농장 및 실제 농장과 연결되는 가상 농장','고객별 재배 구역·성장일지·수확 요청 기능']},
      {status:'planned',label:'향후 계획',items:['농업 체험 콘텐츠 및 교육 연계 서비스']}
    ]}
  ],
  filters:[['all','전체'],['farm','농업'],['brand','브랜드'],['tech','기술'],['startup','창업']],
  // 예: 'images/08_story/2026-11-20_농장.jpg': {title:'농장 정비',date:'2026-11-20',category:'farm',description:'공개 가능한 설명',story:true}
  images:{},
  // 실제 공개용 연락처만 입력하세요. 빈 값은 링크를 표시하지 않습니다.
  contact:{email:'', instagram:'', sns:'', shop:'', booking:'', os:''}
};
