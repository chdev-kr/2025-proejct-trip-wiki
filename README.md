# 🛫 Trip Wiki

전 세계 도시들의 여행 정보를 한눈에 볼 수 있는 웹 애플리케이션입니다.

## 📋 프로젝트 개요

Trip Wiki는 전 세계 도시들의 여행 관련 정보를 제공하는 SPA(Single Page Application)입니다. 각 도시의 비용, 재미, 안전성, 인터넷, 공기질, 음식 등의 점수를 시각적으로 보여주며, 지역별 필터링과 검색 기능을 제공합니다.

## ✨ 주요 기능

### 🏙️ 도시 목록 조회

- 전 세계 도시들의 정보를 카드 형태로 표시
- 각 도시의 이미지, 이름, 국가, 총점 정보 제공
- 무한 스크롤을 통한 추가 데이터 로딩

### 🌍 지역별 필터링

- 전체, 아시아, 유럽, 북미, 남미, 아프리카, 오세아니아 지역별 필터
- 지역 선택 시 해당 지역의 도시들만 표시

### 🔍 정렬 및 검색

- **정렬 옵션**: Total, Cost, Fun, Safety, Internet, Air Quality, Food
- **검색 기능**: 도시명으로 실시간 검색
- URL 파라미터를 통한 상태 관리

### 📊 상세 정보 페이지

- 선택한 도시의 상세 정보 표시
- 각 항목별 점수를 프로그레스 바로 시각화
- 점수에 따른 색상 구분 (녹색: 4점 이상, 노란색: 3점 이상, 빨간색: 3점 미만)

## 🛠️ 기술 스택

### Frontend

- **Vanilla JavaScript** (ES6+ 모듈 시스템)
- **CSS3** (CSS Grid, Flexbox, CSS Variables)
- **HTML5**

### Backend

- **Express.js** (정적 파일 서빙)
- **Node.js**

### API

- **External API**: `https://trip-wiki-api.vercel.app/`

## 📁 프로젝트 구조

```
2025-project-trip-wiki/
├── index.html              # 메인 HTML 파일
├── package.json            # 프로젝트 설정 및 의존성
├── server/
│   └── server.js          # Express 서버 설정
└── src/
    ├── index.js           # 애플리케이션 진입점
    ├── App.js             # 메인 애플리케이션 로직
    ├── styles.css         # 전역 스타일
    └── components/
        ├── api.js         # API 호출 함수들
        ├── Header.js      # 헤더 컴포넌트
        ├── RegionList.js  # 지역 필터 컴포넌트
        ├── CityList.js    # 도시 목록 컴포넌트
        └── CityDetail.js  # 도시 상세 정보 컴포넌트
```

## 🚀 실행 방법

### 1. 의존성 설치

```bash
npm install
```

### 2. 서버 실행

```bash
node server/server.js
```

### 3. 브라우저에서 접속

```
http://localhost:3000
```

## 📡 API 엔드포인트

### 도시 목록 조회

```
GET https://trip-wiki-api.vercel.app/
GET https://trip-wiki-api.vercel.app/{region}
```

**쿼리 파라미터:**

- `start`: 시작 인덱스 (페이지네이션)
- `sort`: 정렬 기준 (total, cost, fun, safety, internet, air, food)
- `search`: 검색어

**예시:**

```
GET https://trip-wiki-api.vercel.app/Asia?start=0&sort=total&search=seoul
```

### 도시 상세 정보 조회

```
GET https://trip-wiki-api.vercel.app/city/{cityId}
```

**예시:**

```
GET https://trip-wiki-api.vercel.app/city/1
```

## 🎨 주요 컴포넌트

### App.js

- 애플리케이션의 메인 상태 관리
- URL 기반 라우팅 처리
- 브라우저 히스토리 API 활용

### Header.js

- 정렬 옵션 선택 드롭다운
- 검색 입력 필드
- 현재 페이지 상태에 따른 조건부 렌더링

### RegionList.js

- 지역별 필터 버튼들
- 활성 상태 표시
- 클릭 이벤트 처리

### CityList.js

- 도시 카드 그리드 레이아웃
- 무한 스크롤 "더보기" 버튼
- 도시 클릭 시 상세 페이지 이동

### CityDetail.js

- 도시 상세 정보 표시
- 점수별 프로그레스 바
- 반응형 레이아웃

## 🎯 핵심 기능 구현

### 상태 관리

- URL 파라미터를 통한 상태 동기화
- 브라우저 뒤로가기/앞으로가기 지원
- 페이지 새로고침 시에도 상태 유지

### 반응형 디자인

- CSS Grid를 활용한 반응형 레이아웃
- 모바일, 태블릿, 데스크톱 대응
- 미디어 쿼리를 통한 적응형 스타일링

### 성능 최적화

- 이미지 lazy loading
- 무한 스크롤을 통한 데이터 분할 로딩
- CSS 변수를 활용한 효율적인 스타일 관리

### 필수 요구사항

- Node.js (v14 이상)
- npm 또는 yarn

---

**Trip Wiki** - 전 세계 도시 여행 정보를 한눈에! ✈️
