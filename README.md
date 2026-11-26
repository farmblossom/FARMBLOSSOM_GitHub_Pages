# 꽃폈네 FARMBLOSSOM | 공식 브랜드 포트폴리오

HTML5 · CSS3 · Vanilla JS 기반 원페이지입니다. 외부 라이브러리나 빌드 설치가 필요 없습니다. 공개되는 폴더는 `FARMBLOSSOM_GitHub_Pages/` 하나이며, 이 안내 문서는 저장소 루트에만 두어 공개 사이트에 노출되지 않습니다. 로고·캐릭터·농장 사진과 공식 연락처가 반영되어 있고, 사진을 넣으면 자동으로 목록에 들어갑니다. 색상은 `css/style.css`의 `:root`에서 변경할 수 있습니다.

## 1. 폴더 구조

```
README.md                          저장소 안내 (공개 사이트에는 노출되지 않음)
.github/workflows/deploy.yml       GitHub Pages 배포 설정
FARMBLOSSOM_GitHub_Pages/          ← 배포되는 웹 폴더 (이 안의 파일만 공개됨)
  index.html
  css/style.css, css/responsive.css
  js/data.js, js/main.js, js/images-fallback.js (자동 생성)
  images.json (자동 생성)
  images/01_logo/        공식 로고
  images/02_hero/        메인 사진
  images/03_about/       소개
  images/04_farm/        농업
  images/05_brand/       상품·패키지
  images/06_characters/  캐릭터·굿즈
  images/07_innovation/  OS·SW·AI
  images/08_story/       활동 기록
  scripts/generate-images.mjs
```

## 2. 컴퓨터에서 미리 보기

1. ZIP을 압축 해제한 뒤 VS Code에서 해당 폴더를 엽니다.
2. 터미널에서 `node -v`로 Node.js 설치 여부를 확인합니다(22 권장).
3. 사진을 변경한 후 `node scripts/generate-images.mjs`를 실행합니다.
4. `index.html`을 더블 클릭해 열거나, VS Code Live Server 또는 Python이 설치되어 있다면 `python -m http.server 8000`을 실행하고 브라우저에서 `http://localhost:8000`에 접속합니다. 서버를 멈추려면 Ctrl+C를 누릅니다.
5. 새로고침합니다. HTML 직접 열기는 생성된 `js/images-fallback.js`를 사용하며, HTTP 환경은 `images.json`을 우선 사용합니다.

## 3. 사진 관리

- 폴더에 공개 승인한 JPG, JPEG, PNG, WEBP, GIF, SVG 파일을 넣습니다. 삭제·교체도 동일하게 처리됩니다. 한글·공백 이름 지원, 하위 폴더 지원. 숨김 파일과 심볼릭 링크는 제외됩니다.
- 사진은 카드 비율(4:5)에 맞춰 보여줍니다. 포스터·카드처럼 글자나 그림이 잘리면 안 되는 이미지는 원본이 잘리지 않도록 `contain`, 실제 현장 사진은 `cover`. 기본값은 `01_logo`·`03_about`·`04_farm`·`05_brand`·`06_characters`가 contain, 나머지가 cover이며 `data.js`의 사진별 `fit`으로 바꿀 수 있습니다.
- 대표 사진은 `00_cover.jpg` 또는 `cover.png` 등의 이름을 사용합니다. 대표 후보가 여럿이면 정렬상 첫 파일이 우선입니다. 없는 경우 이름순 첫 사진입니다. 브랜드·캐릭터가 담긴 폴더는 썸네일에서 원본 비율을 보존합니다. 원본은 수정하지 않습니다.
- STORY에는 FARM/BRAND/캐릭터/INNOVATION/08_story의 이미지가 자동 표시됩니다(cover 파일 제외). 폴더 분류를 적용하고, 08_story는 파일명 `2026-11-20_농업_농장정비.jpg`처럼 날짜 뒤에 `농업`, `브랜드`, `기술`, `창업`을 쓰면 해당 분류로 들어갑니다. 분류가 없으면 전체에서만 보이며 날짜가 없으면 날짜 없는 기록으로 정렬합니다. 파일명이 제목 기본값입니다.
- 날짜는 `YYYY-MM-DD`, `YYYYMMDD` 또는 점/밑줄 구분을 파일명 앞에 쓰면 인식합니다. 날짜를 모르면 입력하지 마세요.
- 사진은 공개 저장소 및 공개 사이트에 그대로 노출됩니다. 개인정보, 위치 정보(EXIF), 학생 얼굴, 내부 문서, 비공개 자료, 미승인 SVG 등을 넣지 마세요. 필요 시 업로드 전 별도 복사본에서 메타데이터를 제거하세요. 원본 사진 보관은 별도로 권장합니다.

## 4. 설명·상태·공식 연락처 수정

`js/data.js`의 `projects`에서 설명과 상태별 항목을 변경할 수 있습니다. 초기 사업 상태는 제공된 요구사항을 기반으로 작성한 분류이므로 공식 공개 전에 확인하세요. 2027년 봄감자 40팀은 목표이며 실적이 아닙니다.

사진별 상세 정보는 선택 사항입니다. `images:{}` 안에 정확한 상대경로(한글과 공백 그대로)를 키로 입력합니다. `fit:'contain'`(원본을 자르지 않고 다 보이기), `fit:'cover'`(영역을 꽉 채우고 자르기)도 여기서 사진마다 지정합니다.

```js
images: {
  'images/08_story/2026-11-20_농업_농장정비.jpg': {
    title: '농장 정비', date: '2026-11-20', category: 'farm',
    description: '실제로 확인된 공개용 설명', story: true
  }
},
```

분류: `farm`, `brand`, `tech`, `startup`. `story:false`는 STORY 목록에서 숨김(프로젝트에는 남음). `contact`에 실제 이메일이나 `https://`로 시작하는 링크를 추가하면 CONTACT에 자동 노출됩니다. 빈 값은 숨김 처리합니다. 판매·예약·OS 링크도 같은 방식입니다. 예시의 날짜·파일은 설명용이며 실제 기록이 아닙니다.

## 5. GitHub에 올리기

1. GitHub에서 저장소를 만들고, 압축을 해제한 프로젝트 내부의 파일을 저장소 루트에 복사합니다. 숨김 폴더 `.github`도 포함합니다. 기존 저장소라면 충돌을 확인하고 필요한 파일을 병합합니다.
2. VS Code Source Control에서 변경 파일을 확인하고 공개하면 안 되는 자료가 없는지 점검합니다. `+`로 Stage, 메시지를 입력해 Commit, `Sync Changes` 또는 Push를 누릅니다. 처음이면 `Publish Branch`가 나타날 수 있습니다.
3. 기본 브랜치를 `main`으로 설정합니다(다른 브랜치를 사용하면 deploy.yml의 branches를 변경).
4. GitHub 저장소의 Settings → Pages → Build and deployment → Source를 **GitHub Actions**로 선택합니다. 저장소 설정에서 Pages와 Actions 사용 권한이 필요합니다.
5. Actions 탭의 `Deploy Farmblossom to Pages`에서 `Run workflow`를 실행하거나 main에 Push합니다. 작업이 성공하면 Settings → Pages의 공개 주소로 접속합니다.
6. 앞으로 사진을 넣거나 지우고 Commit & Push하면 Actions가 자동으로 이미지 목록을 다시 생성하고 배포합니다. 생성된 목록은 배포 산출물 안에서 갱신되며, 자동 커밋으로 저장소 원본을 변경하지 않습니다. 로컬 목록도 동기화하려면 2절 명령을 실행하고 커밋합니다.

## 6. 문제 해결

- 이미지가 안 보임: 정확한 폴더, 확장자, 파일 이름의 대소문자, 커밋 여부를 확인하고 로컬 생성 명령을 실행하세요.
- GitHub 배포 실패: Actions 탭의 실패 단계 로그와 Settings → Pages → GitHub Actions 설정, main 브랜치 및 권한을 확인하세요.
- 화면이 예전과 같음: 배포 성공 확인 후 브라우저 새로고침(Ctrl+F5).
- 메뉴/모달 오류: 최신 Chrome, Edge, Safari 등에서 개발자 도구 Console 확인. 외부 사진 URL을 자동 수집하지 않습니다.
- 로고가 잘못됨: 01_logo에는 승인된 공식 로고만 넣고 `00_cover`로 지정하세요.
- 새 이미지가 Story 특정 필터에 안 보임: 파일명 분류 접두사 또는 `data.js`의 category 확인.

## 7. 공개 전 확인 목록

- [ ] `images/`에 공개 승인한 사진만 있는지 (개인정보·학생 얼굴·내부 문서·위치 정보 제외)
- [ ] `js/data.js`의 사업 상태·문구가 최신인지
- [ ] 폰·태블릿에서 화면 확인 (헤더 로고, 카드, 모달, 연락처)
- [ ] Actions 탭의 배포 작업 성공 여부와 공개 주소의 새 화면 확인
