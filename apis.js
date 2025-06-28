const apis = [
  {
    "name": "Google Maps API",
    "description": "지도, 위치 기반 서비스 및 지리 데이터에 접근할 수 있는 API",
    "category": "지도/위치",
    "provider": "Google",
    "pricing": "무료 티어 + 유료 요금제",
    "documentation": "https://developers.google.com/maps/documentation",
    "auth": "API 키"
  },
  {
    "name": "OpenWeatherMap API",
    "description": "현재 날씨, 예보, 과거 기상 데이터 및 기타 기상 정보에 접근할 수 있는 API",
    "category": "날씨",
    "provider": "OpenWeatherMap",
    "pricing": "무료 티어 + 유료 요금제",
    "documentation": "https://openweathermap.org/api",
    "auth": "API 키"
  },
  {
    "name": "Twitter API",
    "description": "트윗 데이터, 사용자 정보, 검색 기능 등에 접근할 수 있는 API",
    "category": "소셜 미디어",
    "provider": "Twitter (X)",
    "pricing": "유료",
    "documentation": "https://developer.twitter.com/en/docs",
    "auth": "OAuth"
  },
  {
    "name": "YouTube Data API",
    "description": "YouTube 비디오, 채널, 댓글 등의 데이터에 접근할 수 있는 API",
    "category": "동영상/미디어",
    "provider": "Google",
    "pricing": "무료 티어 + 유료 요금제",
    "documentation": "https://developers.google.com/youtube/v3",
    "auth": "API 키 + OAuth"
  },
  {
    "name": "Stripe API",
    "description": "온라인 결제 처리를 위한 API",
    "category": "결제/금융",
    "provider": "Stripe",
    "pricing": "트랜잭션 기반",
    "documentation": "https://stripe.com/docs/api",
    "auth": "API 키"
  },
  {
    "name": "Spotify API",
    "description": "음악 데이터, 재생 목록, 아티스트 정보 등에 접근할 수 있는 API",
    "category": "음악/오디오",
    "provider": "Spotify",
    "pricing": "무료",
    "documentation": "https://developer.spotify.com/documentation/web-api",
    "auth": "OAuth"
  },
  {
    "name": "Github API",
    "description": "GitHub 저장소, 사용자, 이슈 등의 데이터에 접근할 수 있는 API",
    "category": "개발 도구",
    "provider": "GitHub",
    "pricing": "무료 티어 + 유료 요금제",
    "documentation": "https://docs.github.com/en/rest",
    "auth": "OAuth + 토큰"
  },
  {
    "name": "OpenAI API",
    "description": "GPT 모델 등 AI 및 자연어 처리 기능에 접근할 수 있는 API",
    "category": "AI/기계학습",
    "provider": "OpenAI",
    "pricing": "사용량 기반",
    "documentation": "https://platform.openai.com/docs/api-reference",
    "auth": "API 키"
  },
  {
    "name": "Twilio API",
    "description": "SMS, 음성 통화, 비디오 등의 통신 기능을 위한 API",
    "category": "통신",
    "provider": "Twilio",
    "pricing": "사용량 기반",
    "documentation": "https://www.twilio.com/docs/api",
    "auth": "API 키"
  },
  {
    "name": "AWS S3 API",
    "description": "클라우드 스토리지 서비스에 접근할 수 있는 API",
    "category": "클라우드/스토리지",
    "provider": "Amazon",
    "pricing": "사용량 기반",
    "documentation": "https://docs.aws.amazon.com/AmazonS3/latest/API/Welcome.html",
    "auth": "API 키 + 시크릿"
  },
  {
    "name": "NASA API",
    "description": "우주 이미지, 화성 날씨, 소행성 데이터 등에 접근할 수 있는 API",
    "category": "과학/교육",
    "provider": "NASA",
    "pricing": "무료",
    "documentation": "https://api.nasa.gov/",
    "auth": "API 키"
  },
  {
    "name": "News API",
    "description": "다양한 소스의 뉴스 헤드라인과 기사에 접근할 수 있는 API",
    "category": "뉴스/미디어",
    "provider": "News API",
    "pricing": "무료 티어 + 유료 요금제",
    "documentation": "https://newsapi.org/docs",
    "auth": "API 키"
  },
  {
    "name": "Slack API",
    "description": "Slack 채널, 메시지, 사용자 등의 데이터에 접근할 수 있는 API",
    "category": "협업 도구",
    "provider": "Slack",
    "pricing": "무료 + 유료 요금제",
    "documentation": "https://api.slack.com/",
    "auth": "OAuth + 토큰"
  },
  {
    "name": "PayPal API",
    "description": "온라인 결제 처리를 위한 API",
    "category": "결제/금융",
    "provider": "PayPal",
    "pricing": "트랜잭션 기반",
    "documentation": "https://developer.paypal.com/docs/api/overview/",
    "auth": "OAuth"
  },
  {
    "name": "SendGrid API",
    "description": "이메일 전송 및 관리를 위한 API",
    "category": "이메일/메시징",
    "provider": "SendGrid (Twilio)",
    "pricing": "무료 티어 + 유료 요금제",
    "documentation": "https://docs.sendgrid.com/api-reference",
    "auth": "API 키"
  },
  
  // 인증 및 사용자 관리 - 국내
  {
    "name": "카카오 로그인 API",
    "description": "카카오 계정을 통한 인증 및 약관 통합 가입 기능을 제공하는 API",
    "category": "인증/사용자관리",
    "provider": "Kakao",
    "pricing": "무료",
    "documentation": "https://developers.kakao.com/docs/latest/ko/kakaologin/common",
    "auth": "OAuth"
  },
  {
    "name": "네이버 로그인 API",
    "description": "네이버 계정 인증 및 OAuth 2.0 기반의 사용자 로그인 서비스",
    "category": "인증/사용자관리",
    "provider": "Naver",
    "pricing": "무료",
    "documentation": "https://developers.naver.com/products/login/api",
    "auth": "OAuth 2.0"
  },
  {
    "name": "NICE 본인인증 API",
    "description": "휴대폰 및 아이핀을 통한 실명 기반 본인인증 서비스",
    "category": "인증/사용자관리",
    "provider": "NICE",
    "pricing": "사용량 기반",
    "documentation": "https://www.niceapi.co.kr",
    "auth": "API 키"
  },
  {
    "name": "통신사 PASS API",
    "description": "통신 3사 통합 인증 서비스로 FIDO 기술 지원",
    "category": "인증/사용자관리",
    "provider": "PASS",
    "pricing": "사용량 기반",
    "documentation": "https://openapi.sk.com/products/detail?svcSeq=64",
    "auth": "API 키"
  },
  {
    "name": "금융인증서 API",
    "description": "금융결제원에서 제공하는 금융기관 공동 인증 서비스",
    "category": "인증/사용자관리",
    "provider": "금융결제원",
    "pricing": "사용량 기반",
    "documentation": "https://fidoweb.yessign.or.kr:3300/guide/guide.html",
    "auth": "인증서"
  },
  
  // 인증 및 사용자 관리 - 글로벌
  {
    "name": "Google Identity OAuth 2.0",
    "description": "구글 계정 로그인 및 토큰 검증 기능을 제공하는, OAuth 2.0 기반 인증 API",
    "category": "인증/사용자관리",
    "provider": "Google",
    "pricing": "무료",
    "documentation": "https://developers.google.com/identity/protocols/oauth2",
    "auth": "OAuth 2.0"
  },
  {
    "name": "Apple Sign in REST API",
    "description": "iOS 및 웹용 패스키, OAuth 계정 연동을 지원하는 인증 API",
    "category": "인증/사용자관리",
    "provider": "Apple",
    "pricing": "무료",
    "documentation": "https://developer.apple.com/documentation/signinwithapplerestapi",
    "auth": "OAuth + JWT"
  },
  {
    "name": "Auth0 API",
    "description": "사용자 인증, SSO, 다중 인증을 위한 통합 인증 플랫폼",
    "category": "인증/사용자관리",
    "provider": "Auth0",
    "pricing": "무료 티어 + 유료 요금제",
    "documentation": "https://auth0.com/docs/api",
    "auth": "OAuth + JWT"
  },
  {
    "name": "Firebase Authentication",
    "description": "이메일, 소셜 인증 등 다양한 인증 방식을 지원하는 통합 인증 서비스",
    "category": "인증/사용자관리",
    "provider": "Google",
    "pricing": "무료 티어 + 사용량 기반",
    "documentation": "https://firebase.google.com/docs/auth",
    "auth": "토큰"
  },
  {
    "name": "Okta API",
    "description": "사용자 인증, ID 관리, SSO를 위한 엔터프라이즈급 인증 서비스",
    "category": "인증/사용자관리",
    "provider": "Okta",
    "pricing": "무료 티어 + 유료 요금제",
    "documentation": "https://developer.okta.com/",
    "auth": "OAuth + JWT"
  },
  {
    "name": "Microsoft Identity Platform",
    "description": "Azure AD 기반의 통합 인증 플랫폼으로 기업용 인증 지원",
    "category": "인증/사용자관리",
    "provider": "Microsoft",
    "pricing": "무료 티어 + 유료 요금제",
    "documentation": "https://learn.microsoft.com/en-us/azure/active-directory/develop/",
    "auth": "OAuth + JWT"
  },
  {
    "name": "Amazon Cognito",
    "description": "사용자 인증, 액세스 제어, 사용자 풀 관리를 위한 API",
    "category": "인증/사용자관리",
    "provider": "Amazon",
    "pricing": "사용량 기반",
    "documentation": "https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/Welcome.html",
    "auth": "토큰"
  },
  
  // 결제 및 금융 - 국내
  {
    "name": "토스페이먼츠 API",
    "description": "온라인 결제, 정기결제, 가상계좌 발급 기능을 제공하는 결제 API",
    "category": "결제/금융",
    "provider": "토스페이먼츠",
    "pricing": "트랜잭션 기반",
    "documentation": "https://developers.tosspayments.com/",
    "auth": "API 키"
  },
  {
    "name": "포트원(아임포트) API",
    "description": "다양한 PG사를 통합 연동할 수 있는 결제, 본인인증, 빌링 API",
    "category": "결제/금융",
    "provider": "포트원",
    "pricing": "트랜잭션 기반",
    "documentation": "https://portone.gitbook.io/docs/",
    "auth": "API 키"
  },
  {
    "name": "KG이니시스 API",
    "description": "온라인 결제, 에스크로, 가상계좌 발급 등의 기능을 제공하는 결제 API",
    "category": "결제/금융",
    "provider": "KG이니시스",
    "pricing": "트랜잭션 기반",
    "documentation": "https://manual.inicis.com/",
    "auth": "API 키"
  },
  {
    "name": "네이버페이 API",
    "description": "네이버 기반의 간편결제, 주문 및 결제 연동 기능 제공",
    "category": "결제/금융",
    "provider": "Naver",
    "pricing": "트랜잭션 기반",
    "documentation": "https://developers.pay.naver.com/docs/v2/api",
    "auth": "API 키"
  },
  {
    "name": "카카오페이 API",
    "description": "카카오 기반의 간편결제, 송금, QR 결제 서비스를 위한 API",
    "category": "결제/금융",
    "provider": "Kakao",
    "pricing": "트랜잭션 기반",
    "documentation": "https://developers.kakaopay.com/docs/payment/online/common",
    "auth": "API 키"
  },
  {
    "name": "NHN KCP API",
    "description": "결제, 인증, 금융 서비스 등을 제공하는 전자결제 API",
    "category": "결제/금융",
    "provider": "NHN KCP",
    "pricing": "트랜잭션 기반",
    "documentation": "https://developer.kcp.co.kr/",
    "auth": "API 키"
  },
  {
    "name": "NICE페이 API",
    "description": "온라인 결제 서비스를 위한 통합 결제 API",
    "category": "결제/금융",
    "provider": "NICE",
    "pricing": "트랜잭션 기반",
    "documentation": "https://developers.nicepay.co.kr/",
    "auth": "API 키"
  },

  
  // 결제 및 금융 - 글로벌 결제
  {
    "name": "Square API",
    "description": "POS 시스템, 결제 처리를 위한 통합 결제 API",
    "category": "결제/금융",
    "provider": "Square",
    "pricing": "트랜잭션 기반",
    "documentation": "https://developer.squareup.com/",
    "auth": "OAuth + API 키"
  },
  {
    "name": "Adyen API",
    "description": "글로벌 결제 및 리스크 관리를 위한 통합 결제 솔루션",
    "category": "결제/금융",
    "provider": "Adyen",
    "pricing": "트랜잭션 기반",
    "documentation": "https://docs.adyen.com/",
    "auth": "API 키"
  },
  {
    "name": "Braintree API",
    "description": "PayPal이 소유한 결제 게이트웨이 서비스 API",
    "category": "결제/금융",
    "provider": "PayPal",
    "pricing": "트랜잭션 기반",
    "documentation": "https://developer.paypal.com/braintree",
    "auth": "API 키"
  },
  {
    "name": "Apple Pay API",
    "description": "iOS 기기를 통한 결제 시스템 API",
    "category": "결제/금융",
    "provider": "Apple",
    "pricing": "트랜잭션 기반",
    "documentation": "https://developer.apple.com/apple-pay/",
    "auth": "인증서"
  },
  {
    "name": "Google Pay API",
    "description": "구글에서 제공하는 결제 시스템 API",
    "category": "결제/금융",
    "provider": "Google",
    "pricing": "트랜잭션 기반",
    "documentation": "https://developers.google.com/pay",
    "auth": "API 키"
  },
  
  // 금융 데이터 API
  {
    "name": "오픈뱅킹 API",
    "description": "은행권 공동 오픈 API로 계좌 조회 및 이체 기능을 제공",
    "category": "금융데이터",
    "provider": "금융결제원",
    "pricing": "사용량 기반",
    "documentation": "https://www.openbanking.or.kr/",
    "auth": "API 키 + 인증서"
  },
  {
    "name": "한국투자증권 KIS Developers API",
    "description": "주식시세, 트레이딩 등의 금융 데이터 및 거래 API",
    "category": "금융데이터",
    "provider": "한국투자증권",
    "pricing": "무료 티어 + 사용량 기반",
    "documentation": "https://apiportal.koreainvestment.com/",
    "auth": "API 키"
  },
  {
    "name": "Alpha Vantage API",
    "description": "글로벌 주식 시장 데이터, 환율, 암호화폐 정보를 제공하는 API",
    "category": "금융데이터",
    "provider": "Alpha Vantage",
    "pricing": "무료 티어 + 유료 요금제",
    "documentation": "https://www.alphavantage.co/",
    "auth": "API 키"
  },
  {
    "name": "Plaid API",
    "description": "은행 계좌 연결 및 금융 데이터 접근을 위한 API",
    "category": "금융데이터",
    "provider": "Plaid",
    "pricing": "사용량 기반",
    "documentation": "https://plaid.com/docs/",
    "auth": "API 키"
  },
  {
    "name": "Polygon.io API",
    "description": "실시간 주식 시장 데이터에 접근할 수 있는 API",
    "category": "금융데이터",
    "provider": "Polygon.io",
    "pricing": "구독 기반",
    "documentation": "https://polygon.io/",
    "auth": "API 키"
  },
  {
    "name": "Bloomberg API",
    "description": "금융 시장 데이터 및 뉴스에 접근할 수 있는 API",
    "category": "금융데이터",
    "provider": "Bloomberg",
    "pricing": "구독 기반",
    "documentation": "https://bloomberg.github.io/blpapi-docs/",
    "auth": "API 키"
  },
  {
    "name": "금융감독원 오픈API (DART)",
    "description": "금융 공시 정보에 접근할 수 있는 API",
    "category": "금융데이터",
    "provider": "금융감독원",
    "pricing": "무료",
    "documentation": "https://opendart.fss.or.kr/",
    "auth": "API 키"
  },
  {
    "name": "Open Banking (UK/EU PSD2) API",
    "description": "유럽 표준 계좌 조회 및 이체 API",
    "category": "금융데이터",
    "provider": "Various",
    "pricing": "사용량 기반",
    "documentation": "https://www.openbanking.org.uk/",
    "auth": "OAuth + 인증서"
  },
  
  // 지도 및 위치 서비스 - 국내
  {
    "name": "네이버 맵 API",
    "description": "지도, 길찾기, 지오코딩, 도로뷰, 항공사진 등을 제공하는 API",
    "category": "지도/위치",
    "provider": "Naver",
    "pricing": "무료 티어 + 사용량 기반",
    "documentation": "https://navermaps.github.io/maps.js.ncp/docs/tutorial-2-Getting-Started.html",
    "auth": "API 키"
  },
  {
    "name": "카카오맵 API",
    "description": "지도, 로드뷰, 검색, 길찾기, 좌표 변환 등을 제공하는 API",
    "category": "지도/위치",
    "provider": "Kakao",
    "pricing": "무료 티어 + 사용량 기반",
    "documentation": "https://apis.map.kakao.com/",
    "auth": "API 키"
  },
  {
    "name": "SK 티맵 API",
    "description": "길안내, 경로 탐색, POI 검색, 실시간 교통, 차량관제 기능을 제공하는 API",
    "category": "지도/위치",
    "provider": "SK",
    "pricing": "사용량 기반",
    "documentation": "https://tmapapi.tmapmobility.com/",
    "auth": "API 키"
  },
  {
    "name": "Vworld API",
    "description": "국토교통부 공간정보 오픈플랫폼으로 국가 공간정보를 활용할 수 있는 API",
    "category": "지도/위치",
    "provider": "국토교통부",
    "pricing": "무료",
    "documentation": "https://www.vworld.kr/v4po_openapi_s001.do",
    "auth": "API 키"
  },
  
  // 지도 및 위치 서비스 - 글로벌
  {
    "name": "Apple MapKit JS",
    "description": "애플에서 제공하는 웹용 지도 서비스 API",
    "category": "지도/위치",
    "provider": "Apple",
    "pricing": "사용량 기반",
    "documentation": "https://developer.apple.com/maps/mapkitjs/",
    "auth": "JWT"
  },
  {
    "name": "Mapbox API",
    "description": "사용자 정의 지도, 내비게이션, 스타일 커스텀이 가능한 지도 API",
    "category": "지도/위치",
    "provider": "Mapbox",
    "pricing": "사용량 기반",
    "documentation": "https://docs.mapbox.com/",
    "auth": "API 키"
  },
  {
    "name": "HERE API",
    "description": "지도, 내비게이션, 교통 정보, EV 충전소 정보 등을 제공하는 API",
    "category": "지도/위치",
    "provider": "HERE",
    "pricing": "무료 티어 + 사용량 기반",
    "documentation": "https://developer.here.com/",
    "auth": "API 키"
  },
  {
    "name": "OpenStreetMap API",
    "description": "오픈 소스 지도 데이터를 활용할 수 있는 API",
    "category": "지도/위치",
    "provider": "OpenStreetMap",
    "pricing": "무료",
    "documentation": "https://wiki.openstreetmap.org/wiki/API",
    "auth": "API 키"
  },
  {
    "name": "Bing Maps API",
    "description": "마이크로소프트에서 제공하는 지도 서비스 API",
    "category": "지도/위치",
    "provider": "Microsoft",
    "pricing": "사용량 기반",
    "documentation": "https://www.microsoft.com/en-us/maps/choose-your-bing-maps-api",
    "auth": "API 키"
  },
  
  // 소셜 미디어 및 커뮤니케이션 - 국내
  {
    "name": "카카오 소셜 API",
    "description": "카카오톡 공유, 로그인 연동 기능을 제공하는 API",
    "category": "소셜 미디어",
    "provider": "Kakao",
    "pricing": "무료",
    "documentation": "https://developers.kakao.com/docs/latest/ko/kakaologin/common",
    "auth": "OAuth"
  },
  {
    "name": "네이버 블로그/카페 API",
    "description": "네이버 블로그와 카페의 글 작성, 조회 기능을 제공하는 API",
    "category": "소셜 미디어",
    "provider": "Naver",
    "pricing": "무료",
    "documentation": "https://developers.naver.com/docs/serviceapi/search/blog/blog.md",
    "auth": "OAuth"
  },
  {
    "name": "밴드 API",
    "description": "네이버 밴드의 정보 조회, 글 작성 기능을 제공하는 API",
    "category": "소셜 미디어",
    "provider": "BAND",
    "pricing": "무료",
    "documentation": "https://developers.band.us/",
    "auth": "OAuth"
  },
  {
    "name": "티스토리 API",
    "description": "카카오에서 운영하는 블로그 서비스 티스토리의 글 작성, 조회 API",
    "category": "소셜 미디어",
    "provider": "Kakao",
    "pricing": "무료",
    "documentation": "https://tistory.github.io/document-tistory-apis",
    "auth": "OAuth"
  },
  
  // 소셜 미디어 및 커뮤니케이션 - 글로벌
  {
    "name": "Meta Graph API",
    "description": "Facebook, Instagram 연동을 위한 통합 API",
    "category": "소셜 미디어",
    "provider": "Meta",
    "pricing": "무료 티어 + 사용량 기반",
    "documentation": "https://developers.facebook.com/docs/graph-api/",
    "auth": "OAuth"
  },
  {
    "name": "LinkedIn API",
    "description": "프로필 정보, 비즈니스 네트워킹 기능을 제공하는 API",
    "category": "소셜 미디어",
    "provider": "LinkedIn",
    "pricing": "무료 티어 + 사용량 기반",
    "documentation": "https://developer.linkedin.com/",
    "auth": "OAuth"
  },
  {
    "name": "Reddit API",
    "description": "서브레딧, 포스트, 댓글 등의 데이터에 접근할 수 있는 API",
    "category": "소셜 미디어",
    "provider": "Reddit",
    "pricing": "무료",
    "documentation": "https://www.reddit.com/dev/api",
    "auth": "OAuth"
  },
  {
    "name": "Discord API",
    "description": "채팅, 음성 통화, 서버 관리 기능을 제공하는 API",
    "category": "소셜 미디어",
    "provider": "Discord",
    "pricing": "무료 티어 + 사용량 기반",
    "documentation": "https://discord.com/developers/docs/intro",
    "auth": "OAuth + 봇 토큰"
  },
  {
    "name": "WordPress REST API",
    "description": "워드프레스 콘텐츠 관리를 위한 API",
    "category": "소셜 미디어",
    "provider": "WordPress",
    "pricing": "무료",
    "documentation": "https://developer.wordpress.org/rest-api",
    "auth": "OAuth + JWT"
  },
  
  // AI 및 머신러닝 - 국내
  {
    "name": "네이버 클로바 API",
    "description": "음성인식/합성, 얼굴인식, OCR 등의 AI 기능을 제공하는 API",
    "category": "AI/기계학습",
    "provider": "Naver",
    "pricing": "사용량 기반",
    "documentation": "https://api.ncloud-docs.com/docs/ai-naver-clovastudio-summary",
    "auth": "API 키"
  },
  {
    "name": "네이버 파파고 API",
    "description": "기계 번역 및 언어 감지 기능을 제공하는 API",
    "category": "AI/기계학습",
    "provider": "Naver",
    "pricing": "사용량 기반",
    "documentation": "https://developers.naver.com/products/papago/nmt/nmt.md",
    "auth": "API 키"
  },
  {
    "name": "카카오 AI API",
    "description": "음성합성, 이미지 인식, 번역 등의 AI 기능을 제공하는 API",
    "category": "AI/기계학습",
    "provider": "Kakao",
    "pricing": "사용량 기반",
    "documentation": "https://developers.kakao.com/",
    "auth": "API 키"
  },
  {
    "name": "카카오 i Open Builder API",
    "description": "카카오에서 제공하는 챗봇 개발 플랫폼 API",
    "category": "AI/기계학습",
    "provider": "Kakao",
    "pricing": "사용량 기반",
    "documentation": "https://i.kakao.com/openbuilder/",
    "auth": "API 키"
  },
  {
    "name": "KT AI API",
    "description": "KT에서 제공하는 기가지니 음성인식 API",
    "category": "AI/기계학습",
    "provider": "KT",
    "pricing": "사용량 기반",
    "documentation": "https://apilink.kt.co.kr/",
    "auth": "API 키"
  },
  {
    "name": "SK 누구 API",
    "description": "SK에서 제공하는 음성인식, 대화 엔진 API",
    "category": "AI/기계학습",
    "provider": "SK",
    "pricing": "사용량 기반",
    "documentation": "https://developers.nugu.co.kr/",
    "auth": "API 키"
  },
  
  // AI 및 머신러닝 - 글로벌
  {
    "name": "Anthropic Claude API",
    "description": "대규모 언어 모델, 대화, 요약 기능을 제공하는 AI API",
    "category": "AI/기계학습",
    "provider": "Anthropic",
    "pricing": "사용량 기반",
        "documentation": "https://docs.anthropic.com/en/home",
    "auth": "API 키"
  },
  {
    "name": "Google Cloud AI API",
    "description": "자연어 처리, 음성 인식, 이미지 분석 등의 AI 기능을 제공하는 API",
    "category": "AI/기계학습",
    "provider": "Google",
    "pricing": "사용량 기반",
    "documentation": "https://cloud.google.com/ai/apis?hl=ko",
    "auth": "API 키"
  },
  {
    "name": "Microsoft Azure AI API",
    "description": "컴퓨터 비전, 음성 인식, 언어 이해 등의 AI 기능을 제공하는 API",
    "category": "AI/기계학습",
    "provider": "Microsoft",
    "pricing": "사용량 기반",
    "documentation": "https://learn.microsoft.com/ko-kr/rest/api/azure/",
    "auth": "API 키"
  },
  {
    "name": "IBM Watson API",
    "description": "자연어 이해, 음성 인식 등의 AI 기능을 제공하는 API",
    "category": "AI/기계학습",
    "provider": "IBM",
    "pricing": "사용량 기반",
    "documentation": "https://developer.ibm.com/components/watson-apis/",
    "auth": "API 키"
  },
  {
    "name": "Amazon AI Services API",
    "description": "이미지 분석, 자연어 처리 등의 AI 기능을 제공하는 API",
    "category": "AI/기계학습",
    "provider": "Amazon",
    "pricing": "사용량 기반",
    "documentation": "https://docs.aws.amazon.com/machine-learning/?icmpid=docs_homepage_ml",
    "auth": "API 키"
  },
  {
    "name": "Hugging Face API",
    "description": "NLP 모델, 변환기 등을 사용할 수 있는 API",
    "category": "AI/기계학습",
    "provider": "Hugging Face",
    "pricing": "무료 티어 + 사용량 기반",
    "documentation": "https://huggingface.co/docs/api-inference/index",
    "auth": "API 키"
  },
  {
    "name": "Stability AI API",
    "description": "이미지 생성 AI 기능을 제공하는 API",
    "category": "AI/기계학습",
    "provider": "Stability AI",
    "pricing": "사용량 기반",
    "documentation": "https://stability.ai/api",
    "auth": "API 키"
  },
  {
    "name": "DeepL API",
    "description": "고품질 기계 번역 서비스를 제공하는 API",
    "category": "AI/기계학습",
    "provider": "DeepL",
    "pricing": "사용량 기반",
    "documentation": "https://www.deepl.com/pro-api",
    "auth": "API 키"
  },
  
  // 클라우드 및 스토리지 - 국내
  {
    "name": "네이버 클라우드 Object Storage API",
    "description": "네이버 클라우드에서 제공하는 객체 스토리지 서비스 API",
    "category": "클라우드/스토리지",
    "provider": "Naver",
    "pricing": "사용량 기반",
    "documentation": "https://api.ncloud-docs.com/docs/storage-ncloudstorage",
    "auth": "API 키"
  },
  {
    "name": "KT 클라우드 스토리지 API",
    "description": "KT에서 제공하는 파일 저장 및 공유 기능의 클라우드 스토리지 API",
    "category": "클라우드/스토리지",
    "provider": "KT",
    "pricing": "사용량 기반",
        "documentation": "https://cloud.kt.com/docs/open-api-guide/",
    "auth": "API 키"
  },
  {
    "name": "NHN Cloud API",
    "description": "NHN에서 제공하는 클라우드 인프라 및 스토리지 서비스 API",
    "category": "클라우드/스토리지",
    "provider": "NHN",
    "pricing": "사용량 기반",
        "documentation": "https://docs.nhncloud.com/",
    "auth": "API 키"
  },
  
  // 클라우드 및 스토리지 - 글로벌
  {
    "name": "Google Drive API",
    "description": "구글에서 제공하는 파일 저장, 공유, 협업 기능의 API",
    "category": "클라우드/스토리지",
    "provider": "Google",
    "pricing": "무료 티어 + 사용량 기반",
    "documentation": "https://developers.google.com/drive",
    "auth": "OAuth"
  },
  {
    "name": "Dropbox API",
    "description": "파일 호스팅 및 공유 기능을 제공하는 클라우드 스토리지 API",
    "category": "클라우드/스토리지",
    "provider": "Dropbox",
    "pricing": "무료 티어 + 구독 기반",
    "documentation": "https://www.dropbox.com/developers",
    "auth": "OAuth"
  },
  {
    "name": "Microsoft OneDrive API",
    "description": "마이크로소프트에서 제공하는 파일 스토리지 및 공유 API",
    "category": "클라우드/스토리지",
    "provider": "Microsoft",
    "pricing": "무료 티어 + 구독 기반",
    "documentation": "https://developer.microsoft.com/en-us/onedrive",
    "auth": "OAuth"
  },
  {
    "name": "Box API",
    "description": "기업용 콘텐츠 관리 기능을 제공하는 클라우드 스토리지 API",
    "category": "클라우드/스토리지",
    "provider": "Box",
    "pricing": "무료 티어 + 구독 기반",
    "documentation": "https://developer.box.com/",
    "auth": "OAuth"
  },
  {
    "name": "Azure Blob Storage API",
    "description": "마이크로소프트에서 제공하는 클라우드 객체 저장소 API",
    "category": "클라우드/스토리지",
    "provider": "Microsoft",
    "pricing": "사용량 기반",
    "documentation": "https://learn.microsoft.com/en-us/azure/storage/blobs/",
    "auth": "API 키"
  },
  {
    "name": "Cloudinary Upload API",
    "description": "이미지 및 영상 변환, CDN 기능을 제공하는 미디어 관리 API",
    "category": "클라우드/스토리지",
    "provider": "Cloudinary",
    "pricing": "무료 티어 + 사용량 기반",
    "documentation": "https://cloudinary.com/documentation",
    "auth": "API 키"
  },
  
  // 전자상거래 - 국내
  {
    "name": "네이버 쇼핑 API",
    "description": "상품검색, 가격비교 정보를 제공하는 쇼핑 API",
    "category": "전자상거래",
    "provider": "Naver",
    "pricing": "무료 티어 + 사용량 기반",
    "documentation": "https://developers.naver.com/products/service-api/shopping/shopping.md",
    "auth": "API 키"
  },
  {
    "name": "쿠팡 파트너스 API",
    "description": "쿠팡의 상품 정보, 파트너스 연동 기능을 제공하는 API",
    "category": "전자상거래",
    "provider": "쿠팡",
    "pricing": "무료",
    "documentation": "https://developers.coupangcorp.com/",
    "auth": "API 키"
  },
  {
    "name": "11번가 오픈 API",
    "description": "11번가의 상품 검색, 주문 정보 기능을 제공하는 API",
    "category": "전자상거래",
    "provider": "11번가",
    "pricing": "무료",
    "documentation": "https://openapi.11st.co.kr/",
    "auth": "API 키"
  },
  
  // 전자상거래 - 글로벌
  {
    "name": "Shopify API",
    "description": "온라인 상점 관리, 제품, 주문 관련 기능을 제공하는 API",
    "category": "전자상거래",
    "provider": "Shopify",
    "pricing": "구독 기반",
    "documentation": "https://shopify.dev/",
    "auth": "OAuth + API 키"
  },
  {
    "name": "WooCommerce API",
    "description": "워드프레스 기반 상점 관리 기능을 제공하는 API",
    "category": "전자상거래",
    "provider": "WooCommerce",
    "pricing": "무료",
    "documentation": "https://woocommerce.github.io/woocommerce-rest-api-docs/",
    "auth": "API 키"
  },
  {
    "name": "Amazon MWS & SP-API",
    "description": "아마존 판매자를 위한 API",
    "category": "전자상거래",
    "provider": "Amazon",
    "pricing": "무료",
    "documentation": "https://developer-docs.amazon.com/sp-api/",
    "auth": "OAuth + API 키"
  },
  {
    "name": "eBay API",
    "description": "eBay의 상품 등록, 주문 관리 기능을 제공하는 API",
    "category": "전자상거래",
    "provider": "eBay",
    "pricing": "무료",
    "documentation": "https://developer.ebay.com/",
    "auth": "OAuth"
  },
  {
    "name": "Etsy API",
    "description": "Etsy의 상품, 주문, 결제 관리 기능을 제공하는 API",
    "category": "전자상거래",
    "provider": "Etsy",
    "pricing": "무료",
    "documentation": "https://developers.etsy.com/",
    "auth": "OAuth"
  },
  {
    "name": "BigCommerce API",
    "description": "전자상거래 플랫폼 기능을 제공하는 API",
    "category": "전자상거래",
    "provider": "BigCommerce",
    "pricing": "구독 기반",
    "documentation": "https://developer.bigcommerce.com/",
    "auth": "API 키 + OAuth"
  },
  {
    "name": "Amazon Product Advertising API",
    "description": "아마존의 상품 검색, 가격, 리뷰 정보에 접근할 수 있는 API",
    "category": "전자상거래",
    "provider": "Amazon",
    "pricing": "사용량 기반",
    "documentation": "https://webservices.amazon.com/paapi5/documentation/",
    "auth": "API 키"
  },
  
  // 데이터 및 분석 - 국내 데이터 API
  {
    "name": "공공데이터 포털 API",
    "description": "정부 및 공공기관의 다양한 데이터에 접근할 수 있는 API 모음",
    "category": "데이터/분석",
    "provider": "한국정보화진흥원",
    "pricing": "무료",
    "documentation": "https://www.data.go.kr/",
    "auth": "API 키"
  },
  {
    "name": "한국거래소 정보데이터시스템 API",
    "description": "주가정보, 지수 데이터 등을 제공하는 API",
    "category": "데이터/분석",
    "provider": "한국거래소",
    "pricing": "사용량 기반",
    "documentation": "https://open.krx.co.kr/",
    "auth": "API 키"
  },
  {
    "name": "통계청 KOSIS API",
    "description": "국가 통계 데이터에 접근할 수 있는 API",
    "category": "데이터/분석",
    "provider": "통계청",
    "pricing": "무료",
    "documentation": "https://kosis.kr/openapi/index/index.jsp",
    "auth": "API 키"
  },
  {
    "name": "기상청 API",
    "description": "날씨, 기상 정보, 초단기예보 등의 기상 데이터를 제공하는 API",
    "category": "데이터/분석",
    "provider": "기상청",
    "pricing": "무료",
    "documentation": "https://data.kma.go.kr/",
    "auth": "API 키"
  },
  {
    "name": "AI Hub API",
    "description": "AI 학습 데이터, 모델, 오픈 API 등에 접근할 수 있는 API",
    "category": "데이터/분석",
    "provider": "과학기술정보통신부",
    "pricing": "무료",
    "documentation": "https://aihub.or.kr/",
    "auth": "API 키"
  },
  
  // 데이터 및 분석 - 글로벌 데이터베이스 API
  {
    "name": "MongoDB Atlas API",
    "description": "클라우드 기반 문서 데이터베이스 서비스를 제공하는 API",
    "category": "데이터/분석",
    "provider": "MongoDB",
    "pricing": "무료 티어 + 사용량 기반",
    "documentation": "https://www.mongodb.com/docs/atlas/api/",
    "auth": "API 키"
  },
  {
    "name": "Firebase Realtime Database API",
    "description": "구글에서 제공하는 실시간 NoSQL 데이터베이스 API",
    "category": "데이터/분석",
    "provider": "Google",
    "pricing": "무료 티어 + 사용량 기반",
    "documentation": "https://firebase.google.com/docs/database",
    "auth": "API 키"
  },
  {
    "name": "AWS DynamoDB API",
    "description": "확장 가능한 NoSQL 데이터베이스 서비스를 제공하는 API",
    "category": "데이터/분석",
    "provider": "Amazon",
    "pricing": "사용량 기반",
    "documentation": "https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/Welcome.html",
    "auth": "API 키"
  },
  {
    "name": "Supabase API",
    "description": "PostgreSQL 기반 백엔드 서비스를 제공하는 API",
    "category": "데이터/분석",
    "provider": "Supabase",
    "pricing": "무료 티어 + 사용량 기반",
    "documentation": "https://supabase.com/docs/guides/api",
    "auth": "API 키"
  },
  {
    "name": "Airtable API",
    "description": "스프레드시트 스타일 데이터베이스 기능을 제공하는 API",
    "category": "데이터/분석",
    "provider": "Airtable",
    "pricing": "무료 티어 + 구독 기반",
    "documentation": "https://airtable.com/api",
    "auth": "API 키"
  },
  {
    "name": "Elasticsearch API",
    "description": "검색 및 분석 엔진 기능을 제공하는 API",
    "category": "데이터/분석",
    "provider": "Elastic",
    "pricing": "무료 티어 + 사용량 기반",
    "documentation": "https://www.elastic.co/guide/en/elasticsearch/reference/current/rest-apis.html",
    "auth": "API 키"
  },
  {
    "name": "OpenWeatherMap One Call 3.0 API",
    "description": "실시간, 48시간, 8일 예보 등의 기상 데이터를 제공하는 API",
    "category": "데이터/분석",
    "provider": "OpenWeatherMap",
    "pricing": "무료 티어 + 사용량 기반",
    "documentation": "https://openweathermap.org/api/one-call-3",
    "auth": "API 키"
  },
  {
    "name": "REST Countries API",
    "description": "국가별 정보(인구, 통화, 언어 등)를 제공하는 API",
    "category": "데이터/분석",
    "provider": "REST Countries",
    "pricing": "무인증",
    "documentation": "https://restcountries.com/",
    "auth": "무인증"
  },
  
  // 데이터 및 분석 - 분석 도구 API
  {
    "name": "Google Analytics Reporting API",
    "description": "구글 애널리틱스의 웹 분석 데이터에 접근할 수 있는 API",
    "category": "데이터/분석",
    "provider": "Google",
    "pricing": "무료 티어 + 유료 요금제",
    "documentation": "https://developers.google.com/analytics/devguides/reporting/core/v4",
    "auth": "OAuth"
  },
  {
    "name": "Datadog API",
    "description": "로그, 메트릭스, APM 통합 모니터링 기능을 제공하는 API",
    "category": "데이터/분석",
    "provider": "Datadog",
    "pricing": "구독 기반",
    "documentation": "https://docs.datadoghq.com/api/",
    "auth": "API 키"
  },
  {
    "name": "New Relic API",
    "description": "애플리케이션 성능 모니터링 기능을 제공하는 API",
    "category": "데이터/분석",
    "provider": "New Relic",
    "pricing": "구독 기반",
    "documentation": "https://docs.newrelic.com/docs/apis",
    "auth": "API 키"
  },
  {
    "name": "AWS CloudWatch API",
    "description": "AWS 클라우드 리소스 모니터링 기능을 제공하는 API",
    "category": "데이터/분석",
    "provider": "Amazon",
    "pricing": "사용량 기반",
    "documentation": "https://docs.aws.amazon.com/cloudwatch/",
    "auth": "API 키"
  },
  {
    "name": "Sentry API",
    "description": "애플리케이션 오류 추적 기능을 제공하는 API",
    "category": "데이터/분석",
    "provider": "Sentry",
    "pricing": "무료 티어 + 구독 기반",
    "documentation": "https://docs.sentry.io/api/",
    "auth": "API 키"
  },
  
  // 미디어 및 엔터테인먼트 - 국내
  {
    "name": "CLOVA Face Recognition API",
    "description": "네이버에서 제공하는 얼굴 인식 API",
    "category": "미디어/엔터테인먼트",
    "provider": "Naver",
    "pricing": "사용량 기반",
    "documentation": "https://developers.naver.com/docs/clova/api/",
    "auth": "API 키"
  },
  {
    "name": "CLOVA Speech Recognition API",
    "description": "네이버에서 제공하는 음성 인식 API",
    "category": "미디어/엔터테인먼트",
    "provider": "Naver",
    "pricing": "사용량 기반",
    "documentation": "https://developers.naver.com/docs/clova/api/",
    "auth": "API 키"
  },
  {
    "name": "카카오 음성 API",
    "description": "카카오에서 제공하는 음성합성, 음성인식 API",
    "category": "미디어/엔터테인먼트",
    "provider": "Kakao",
    "pricing": "사용량 기반",
    "documentation": "https://developers.kakao.com/docs/latest/ko/voice/common",
    "auth": "API 키"
  },
  {
    "name": "영화진흥위원회(KOFIC) API",
    "description": "영화, 박스오피스 정보 등을 제공하는 API",
    "category": "미디어/엔터테인먼트",
    "provider": "영화진흥위원회",
    "pricing": "무료",
    "documentation": "https://www.kobis.or.kr/kobisopenapi/homepg/main/main.do",
    "auth": "API 키"
  },
  
  // 미디어 및 엔터테인먼트 - 글로벌
  {
    "name": "TMDB (The Movie Database) API",
    "description": "영화, TV 쇼 정보 등을 제공하는 API",
    "category": "미디어/엔터테인먼트",
    "provider": "TMDB",
    "pricing": "무료",
    "documentation": "https://www.themoviedb.org/documentation/api",
    "auth": "API 키"
  },
  {
    "name": "Apple Music API",
    "description": "음악 정보, 재생 목록 등을 제공하는 API",
    "category": "미디어/엔터테인먼트",
    "provider": "Apple",
    "pricing": "구독 기반",
    "documentation": "https://developer.apple.com/documentation/applemusicapi/",
    "auth": "JWT"
  },
  {
    "name": "Twitch API",
    "description": "게임 스트리밍, 채널 정보 등을 제공하는 API",
    "category": "미디어/엔터테인먼트",
    "provider": "Twitch",
    "pricing": "무료 티어 + 사용량 기반",
    "documentation": "https://dev.twitch.tv/",
    "auth": "OAuth"
  },
  {
    "name": "SoundCloud API",
    "description": "음악 스트리밍, 업로드 기능을 제공하는 API",
    "category": "미디어/엔터테인먼트",
    "provider": "SoundCloud",
    "pricing": "무료 티어 + 사용량 기반",
    "documentation": "https://developers.soundcloud.com/",
    "auth": "OAuth"
  },
  {
    "name": "Unsplash API",
    "description": "무료 고화질 이미지를 제공하는 API",
    "category": "미디어/엔터테인먼트",
    "provider": "Unsplash",
    "pricing": "무료 티어 + 사용량 기반",
    "documentation": "https://unsplash.com/developers",
    "auth": "OAuth"
  },
  {
    "name": "Imgur API",
    "description": "이미지 업로드, 갤러리 관리 기능을 제공하는 API",
    "category": "미디어/엔터테인먼트",
    "provider": "Imgur",
    "pricing": "무료 티어 + 사용량 기반",
    "documentation": "https://apidocs.imgur.com/",
    "auth": "OAuth"
  },
  
  // 메시징 및 알림 - 국내
  {
    "name": "네이버 클라우드 SENS API",
    "description": "SMS, 알림톡, 친구톡 등의 메시징 서비스 API",
    "category": "메시징/알림",
    "provider": "Naver",
    "pricing": "사용량 기반",
    "documentation": "https://api.ncloud-docs.com/docs/ai-application-service-sens",
    "auth": "API 키"
  },
  {
    "name": "카카오 알림톡/친구톡 API",
    "description": "카카오톡 기반의 메시지 알림 서비스 API",
    "category": "메시징/알림",
    "provider": "Kakao",
    "pricing": "사용량 기반",
    "documentation": "https://developers.kakao.com/docs/latest/ko/message/common",
    "auth": "API 키"
  },
  {
    "name": "NHN Cloud Notification API",
    "description": "푸시, SMS, 이메일 등의 통합 알림 서비스 API",
    "category": "메시징/알림",
    "provider": "NHN",
    "pricing": "사용량 기반",
        "documentation": "https://docs.nhncloud.com/",
    "auth": "API 키"
  },
  {
    "name": "알리고 API",
    "description": "문자 메시지, 카카오 비즈메시지 전송 서비스 API",
    "category": "메시징/알림",
    "provider": "알리고",
    "pricing": "사용량 기반",
    "documentation": "https://smartsms.aligo.in/admin/api/info.html",
    "auth": "API 키"
  },
  {
    "name": "비즈엠 API",
    "description": "카카오 비즈메시지 전송 서비스 API",
    "category": "메시징/알림",
    "provider": "비즈엠",
    "pricing": "사용량 기반",
    "documentation": "https://www.bizmsg.kr/",
    "auth": "API 키"
  },
  
  // 메시징 및 알림 - 글로벌
  {
    "name": "Twilio Programmable Messaging API",
    "description": "SMS, WhatsApp, MMS 등을 단일 API로 제공하는 메시징 서비스",
    "category": "메시징/알림",
    "provider": "Twilio",
    "pricing": "사용량 기반",
    "documentation": "https://www.twilio.com/docs/messaging/api",
    "auth": "API 키"
  },
  {
    "name": "Mailgun API",
    "description": "이메일 API, 검증, 라우팅 등의 기능을 제공하는 이메일 서비스",
    "category": "메시징/알림",
    "provider": "Mailgun",
    "pricing": "사용량 기반",
    "documentation": "https://documentation.mailgun.com/",
    "auth": "API 키"
  },
  {
    "name": "Amazon SES API",
    "description": "아마존에서 제공하는 대량 이메일 전송 서비스 API",
    "category": "메시징/알림",
    "provider": "Amazon",
    "pricing": "사용량 기반",
    "documentation": "https://docs.aws.amazon.com/ses/latest/APIReference/Welcome.html",
    "auth": "API 키"
  },
  {
    "name": "Mailchimp API",
    "description": "이메일 마케팅, 자동화 기능을 제공하는 API",
    "category": "메시징/알림",
    "provider": "Mailchimp",
    "pricing": "구독 기반",
    "documentation": "https://mailchimp.com/developer/",
    "auth": "API 키"
  },
  {
    "name": "OneSignal API",
    "description": "크로스 플랫폼 푸시 알림 서비스 API",
    "category": "메시징/알림",
    "provider": "OneSignal",
    "pricing": "무료 티어 + 사용량 기반",
    "documentation": "https://documentation.onesignal.com/",
    "auth": "API 키"
  },
  {
    "name": "Firebase Cloud Messaging API",
    "description": "크로스 플랫폼 메시징 서비스 API",
    "category": "메시징/알림",
    "provider": "Google",
    "pricing": "무료 티어 + 사용량 기반",
    "documentation": "https://firebase.google.com/docs/cloud-messaging",
    "auth": "API 키"
  },
  {
    "name": "AWS SNS API",
    "description": "앱 푸시, SMS, Fan-out 기능을 제공하는 메시징 서비스 API",
    "category": "메시징/알림",
    "provider": "Amazon",
    "pricing": "사용량 기반",
    "documentation": "https://docs.aws.amazon.com/sns/",
    "auth": "API 키"
  },
  
  // 개발자 도구
  {
    "name": "GitHub REST API",
    "description": "PR 자동화, 릴리스 관리 등 GitHub 관련 기능을 제공하는 API",
    "category": "개발 도구",
    "provider": "GitHub",
    "pricing": "무료 티어 + 구독 기반",
    "documentation": "https://docs.github.com/en/rest",
    "auth": "OAuth + 토큰"
  },
  {
    "name": "GitLab API",
    "description": "저장소, 이슈, MR 관리 등 GitLab 관련 기능을 제공하는 API",
    "category": "개발 도구",
    "provider": "GitLab",
    "pricing": "무료 티어 + 구독 기반",
    "documentation": "https://docs.gitlab.com/ee/api/",
    "auth": "OAuth + 토큰"
  },
  {
    "name": "Google reCAPTCHA API",
    "description": "봇 방지, 사용자 검증 기능을 제공하는 API",
    "category": "개발 도구",
    "provider": "Google",
    "pricing": "무료 + 사용량 기반",
    "documentation": "https://www.google.com/recaptcha/",
    "auth": "API 키"
  },
  {
    "name": "hCaptcha API",
    "description": "프라이버시 중심의 CAPTCHA 서비스 API",
    "category": "개발 도구",
    "provider": "hCaptcha",
    "pricing": "무료 티어 + 사용량 기반",
        "documentation": "https://docs.hcaptcha.com/",
    "auth": "API 키"
  },
  {
    "name": "Bitly API",
    "description": "URL 단축 서비스 API",
    "category": "개발 도구",
    "provider": "Bitly",
    "pricing": "무료 티어 + 구독 기반",
    "documentation": "https://dev.bitly.com/",
    "auth": "OAuth"
  },
  {
    "name": "TinyURL API",
    "description": "URL 단축 서비스 API",
    "category": "개발 도구",
    "provider": "TinyURL",
    "pricing": "무료 + 구독 기반",
    "documentation": "https://tinyurl.com/app/dev",
    "auth": "API 키"
  },
  {
    "name": "DocuSign API",
    "description": "전자 서명, 문서 관리 기능을 제공하는 API",
    "category": "개발 도구",
    "provider": "DocuSign",
    "pricing": "구독 기반",
    "documentation": "https://developers.docusign.com/",
    "auth": "OAuth"
  },
  {
    "name": "Adobe Sign API",
    "description": "전자 서명 솔루션 API",
    "category": "개발 도구",
    "provider": "Adobe",
    "pricing": "구독 기반",
    "documentation": "https://developer.adobe.com/document-services/apis/sign-api/",
    "auth": "OAuth"
  },
  {
    "name": "도로명주소 API",
    "description": "주소 검색, 우편번호 조회 기능을 제공하는 API",
    "category": "개발 도구",
    "provider": "행정안전부",
    "pricing": "무료",
    "documentation": "https://business.juso.go.kr/addrlink/openApi/apiExprn.do",
    "auth": "API 키"
  },
  {
    "name": "Google Calendar API",
    "description": "일정 관리, 캘린더 연동 기능을 제공하는 API",
    "category": "개발 도구",
    "provider": "Google",
    "pricing": "무료 티어 + 사용량 기반",
    "documentation": "https://developers.google.com/calendar",
    "auth": "OAuth"
  },
  {
    "name": "Microsoft Graph API",
    "description": "마이크로소프트 서비스 통합 API (Outlook 캘린더 등)",
    "category": "개발 도구",
    "provider": "Microsoft",
    "pricing": "무료 티어 + 구독 기반",
    "documentation": "https://developer.microsoft.com/en-us/graph",
    "auth": "OAuth"
  },
  
  // IoT 및 스마트홈 - 국내
  {
    "name": "SKT ThingPlug LoRa API",
    "description": "LoRa 네트워크 기반 IoT 플랫폼, 디바이스 관리 기능을 제공하는 API",
    "category": "IoT/스마트홈",
    "provider": "SK",
    "pricing": "사용량 기반",
    "documentation": "https://thingpluglora.docs.apiary.io/#",
    "auth": "API 키"
  },
  {
    "name": "KT IoT Makers API",
    "description": "IoT 디바이스 관리, 데이터 수집 기능을 제공하는 API",
    "category": "IoT/스마트홈",
    "provider": "KT",
    "pricing": "사용량 기반",
    "documentation": "https://iotmakers.kt.com/",
    "auth": "API 키"
  },
  {
    "name": "삼성 SmartThings API",
    "description": "스마트홈 기기 제어 기능을 제공하는 API",
    "category": "IoT/스마트홈",
    "provider": "Samsung",
    "pricing": "무료 + 사용량 기반",
    "documentation": "https://developer.smartthings.com/docs/api/public",
    "auth": "OAuth"
  },
  
  // IoT 및 스마트홈 - 글로벌
  {
    "name": "AWS IoT API",
    "description": "IoT 장치 연결, 관리 기능을 제공하는 API",
    "category": "IoT/스마트홈",
    "provider": "Amazon",
    "pricing": "사용량 기반",
    "documentation": "https://docs.aws.amazon.com/iot/latest/apireference/Welcome.html",
    "auth": "API 키"
  },
  {
    "name": "Google Cloud IoT API",
    "description": "IoT 장치 관리, 데이터 수집 기능을 제공하는 API",
    "category": "IoT/스마트홈",
    "provider": "Google",
    "pricing": "사용량 기반",
    "documentation": "https://cloud.google.com/iot/docs/reference/rest",
    "auth": "API 키"
  },
  {
    "name": "Azure IoT Hub API",
    "description": "IoT 장치 연결, 모니터링 기능을 제공하는 API",
    "category": "IoT/스마트홈",
    "provider": "Microsoft",
    "pricing": "사용량 기반",
    "documentation": "https://learn.microsoft.com/en-us/rest/api/iothub/",
    "auth": "API 키"
  },
  {
    "name": "Apple HomeKit API",
    "description": "애플 생태계의 스마트홈 기기 연동 API",
    "category": "IoT/스마트홈",
    "provider": "Apple",
    "pricing": "무료",
    "documentation": "https://developer.apple.com/homekit/",
    "auth": "인증서"
  },
  {
    "name": "ThingsBoard API",
    "description": "IoT 장치 관리, 데이터 수집 기능을 제공하는 API",
    "category": "IoT/스마트홈",
    "provider": "ThingsBoard",
    "pricing": "무료 티어 + 구독 기반",
        "documentation": "https://thingsboard.io/docs/api/",
    "auth": "API 키"
  },
  {
    "name": "Particle API",
    "description": "IoT 기기 관리, 펌웨어 업데이트 기능을 제공하는 API",
    "category": "IoT/스마트홈",
    "provider": "Particle",
    "pricing": "사용량 기반",
    "documentation": "https://docs.particle.io/reference/device-cloud/api/",
    "auth": "OAuth + 토큰"
  },
  
  // 헬스케어 및 의료 - 국내
  {
    "name": "건강보험심사평가원 API",
    "description": "의약품, 병원 정보 등을 제공하는 API",
    "category": "헬스케어/의료",
    "provider": "건강보험심사평가원",
    "pricing": "무료",
    "documentation": "https://www.data.go.kr/tcs/dss/selectAPIAcountView.do?publicDataPk=15001675",
    "auth": "API 키"
  },
  {
    "name": "식품의약품안전처 API",
    "description": "식품, 의약품 정보 등을 제공하는 API",
    "category": "헬스케어/의료",
    "provider": "식품의약품안전처",
    "pricing": "무료",
    "documentation": "https://www.mfds.go.kr/wpge/m_640/de010603l.do",
    "auth": "API 키"
  },
  {
    "name": "국민건강보험공단 API",
    "description": "건강검진, 보험 정보 등을 제공하는 API",
    "category": "헬스케어/의료",
    "provider": "국민건강보험공단",
    "pricing": "무료",
    "documentation": "https://www.data.go.kr/tcs/dss/selectDataSetList.do?dType=API&keyword=%EA%B1%B4%EA%B0%95%EB%B3%B4%ED%97%98%EA%B3%B5%EB%8B%A8",
    "auth": "API 키"
  },
  {
    "name": "삼성헬스 SDK API",
    "description": "삼성에서 제공하는 건강 데이터 연동 API",
    "category": "헬스케어/의료",
    "provider": "Samsung",
    "pricing": "무료",
    "documentation": "https://developer.samsung.com/health",
    "auth": "OAuth"
  },
  
  // 헬스케어 및 의료 - 글로벌
  {
    "name": "Apple HealthKit API",
    "description": "애플 기기의 건강 및 피트니스 데이터에 접근하는 API",
    "category": "헬스케어/의료",
    "provider": "Apple",
    "pricing": "무료",
    "documentation": "https://developer.apple.com/healthkit",
    "auth": "OAuth"
  },
  {
    "name": "Google Fit API",
    "description": "구글에서 제공하는 건강, 피트니스 데이터 API",
    "category": "헬스케어/의료",
    "provider": "Google",
    "pricing": "무료 티어 + 사용량 기반",
    "documentation": "https://developers.google.com/fit",
    "auth": "OAuth"
  },
  {
    "name": "Fitbit API",
    "description": "활동, 운동, 수면 데이터 등을 제공하는 API",
    "category": "헬스케어/의료",
    "provider": "Fitbit",
    "pricing": "무료 티어 + 사용량 기반",
    "documentation": "https://dev.fitbit.com/",
    "auth": "OAuth"
  },
  {
    "name": "FHIR API",
    "description": "의료 데이터 표준에 따른 데이터 교환 API",
    "category": "헬스케어/의료",
    "provider": "HL7",
    "pricing": "무료",
    "documentation": "https://www.hl7.org/fhir/overview.html",
    "auth": "OAuth"
  },
  {
    "name": "Human API",
    "description": "건강 기록, 웨어러블 데이터 등에 접근하는 API",
    "category": "헬스케어/의료",
    "provider": "Human API",
    "pricing": "사용량 기반",
    "documentation": "https://reference.humanapi.co/docs/overview",
    "auth": "OAuth"
  },
  {
    "name": "Withings API",
    "description": "건강 모니터링 장치 데이터에 접근하는 API",
    "category": "헬스케어/의료",
    "provider": "Withings",
    "pricing": "무료 티어 + 사용량 기반",
    "documentation": "https://developer.withings.com/",
    "auth": "OAuth"
  },
  
  // 배송 및 물류 - 국내
  {
    "name": "우체국 택배 API",
    "description": "배송조회, 우편번호 검색 등의 기능을 제공하는 API",
    "category": "배송/물류",
    "provider": "우정사업본부",
    "pricing": "무료",
    "documentation": "http://openapi.epost.go.kr/contents/api_spec_kp1.html",
    "auth": "API 키"
  },
  {
    "name": "롯데택배 API",
    "description": "배송추적, 배송예약 등의 기능을 제공하는 API",
    "category": "배송/물류",
    "provider": "롯데택배",
    "pricing": "사용량 기반",
    "documentation": "https://api.lotteon.com/apiService/?apiNm=GetStarted",
    "auth": "API 키"
  },
  
  // 배송 및 물류 - 글로벌
  {
    "name": "UPS Developer Kit API",
    "description": "배송 추적, 요금 계산 등의 기능을 제공하는 API",
    "category": "배송/물류",
    "provider": "UPS",
    "pricing": "사용량 기반",
    "documentation": "https://www.ups.com/upsdeveloperkit?loc=en_US",
    "auth": "API 키"
  },
  {
    "name": "FedEx Web Services API",
    "description": "배송 추적, 요금 계산 등의 기능을 제공하는 API",
    "category": "배송/물류",
    "provider": "FedEx",
    "pricing": "사용량 기반",
    "documentation": "https://www.fedex.com/en-us/developer.html",
    "auth": "API 키"
  },
  {
    "name": "DHL API",
    "description": "국제 배송 추적, 요금 계산 등의 기능을 제공하는 API",
    "category": "배송/물류",
    "provider": "DHL",
    "pricing": "사용량 기반",
    "documentation": "https://developer.dhl.com/",
    "auth": "API 키"
  },
  {
    "name": "USPS Web Tools API",
    "description": "미국 우편 서비스 API",
    "category": "배송/물류",
    "provider": "USPS",
    "pricing": "무료 + 사용량 기반",
    "documentation": "https://www.usps.com/business/web-tools-apis",
    "auth": "API 키"
  },
  {
    "name": "Shippo API",
    "description": "다중 배송사 관리, 라벨 생성 등의 기능을 제공하는 API",
    "category": "배송/물류",
    "provider": "Shippo",
    "pricing": "사용량 기반",
        "documentation": "https://docs.goshippo.com/",
    "auth": "API 키"
  },
  {
    "name": "ShipEngine API",
    "description": "배송 요금 비교, 라벨 생성 등의 기능을 제공하는 API",
    "category": "배송/물류",
    "provider": "ShipEngine",
    "pricing": "사용량 기반",
        "documentation": "https://www.shipengine.com/docs/",
    "auth": "API 키"
  },
  
  // 암호화폐 및 블록체인 - 국내
  {
    "name": "업비트 API",
    "description": "암호화폐 시세, 주문, 계좌 정보 등을 제공하는 API",
    "category": "암호화폐/블록체인",
    "provider": "업비트",
    "pricing": "무료",
    "documentation": "https://docs.upbit.com/",
    "auth": "API 키"
  }
];

export default apis; 