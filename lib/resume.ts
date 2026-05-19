export type HeroStat = {
  value: string;
  label: string;
  desc: string;
};

export type FeaturedProject = {
  title: string;
  period: string;
  role: string;
  problem: string;
  solution: string;
  result: string;
  tech: string[];
};

export type CareerItem = {
  title: string;
  period: string;
  role: string;
  domains: string;
  skills: string[];
  bullets: string[];
  achievements: string[];
};

export type CareerCompany = {
  company: string;
  period: string;
  role: string;
  domains: string;
  intro: string;
  items: CareerItem[];
};

export type SkillGroup = {
  category: string;
  items: string[];
};

export type EducationItem = {
  school: string;
  period: string;
  major: string;
  status: string;
};

export type CertificationItem = {
  name: string;
  date: string;
  issuer: string;
};

export type ResumeData = {
  name: string;
  role: string;
  status: string;
  location: string;
  email: string;
  github: string;
  bio: string;
  heroStats: HeroStat[];
  heroTags: string[];
  featuredProjects: FeaturedProject[];
  career: CareerCompany[];
  skills: SkillGroup[];
  education: EducationItem[];
  certifications: CertificationItem[];
};

const resumeData: ResumeData = {
  name: "조두현",
  role: "11년 차 풀스택 개발자 / 팀장",
  status: "재직중",
  location: "Seoul, Korea",
  email: "joarechi@gmail.com",
  github: "https://github.com/joarechi",
  bio: "기술로 비즈니스의 연속성을 확보하고, 팀의 성장을 설계하는 개발자입니다. 이커머스, 항공, 금융 결제 등 고도의 가용성이 요구되는 도메인에서 레거시를 현대화하고 운영 효율을 개선하는 일을 해왔습니다.",
  heroStats: [
    {
      value: "11년+",
      label: "경력",
      desc: "이커머스, 항공, 금융 결제 도메인에서 운영과 전환을 함께 경험했습니다.",
    },
    {
      value: "3개",
      label: "핵심 회사",
      desc: "가비아씨엔에스, 제주도닷컴, 프레피스코리아에서 실무를 쌓았습니다.",
    },
    {
      value: "AI / RAG",
      label: "최근 집중",
      desc: "AI 추천, 이미지 크롭, 사내 지식 검색 기능을 실무에 적용했습니다.",
    },
  ],
  heroTags: [
    "Java",
    "Spring Boot",
    "NestJS",
    "Node.js",
    "TypeScript",
    "Docker",
    "Kubernetes",
    "ArgoCD",
    "Kafka",
    "MySQL",
    "Elasticsearch",
    "LibreChat",
  ],
  featuredProjects: [
    {
      title: "AI 서비스 기능 운영 및 고도화",
      period: "2026.01 ~ 2026.05",
      role: "상품명 분석 기반 키워드/카테고리 추천과 이미지 크롭 AI 서비스를 운영하고 고도화했습니다.",
      problem: "추천 로직과 이미지 처리 결과가 실무 규칙과 완전히 맞지 않아 운영 품질 보완이 필요했습니다.",
      solution: "추천 규칙을 업무 기준에 맞게 튜닝하고, 에지 케이스 예외 처리와 품질 모니터링을 보완했습니다.",
      result: "정확도와 운영 효율을 함께 끌어올리고, AI 기능을 업무 프로세스에 안정적으로 안착시켰습니다.",
      tech: ["Python", "FastAPI", "PyTorch", "torchvision", "Faster R-CNN", "OpenCV"],
    },
    {
      title: "상품/배송 관리 시스템 개발 및 고도화",
      period: "2025.04 ~ 2025.12",
      role: "상품관리 SaaS의 안정화, 주문관리 DB 설계, 검색 색인 구조, 배송 API 개발을 맡았습니다.",
      problem: "상품관리 런칭 이후 안정화와 주문/배송 데이터 처리 정확성 확보가 핵심 과제였습니다.",
      solution: "검색 성능과 배송 데이터 처리 로직을 정비하고 운영 흐름을 표준화했습니다.",
      result: "런칭 완료 이후 고객 피드백을 반영해 시스템 안정성과 유지보수성을 개선했습니다.",
      tech: ["Elasticsearch", "DB 모델링", "NestJS"],
    },
    {
      title: "사내 통합 AI 플랫폼 LibreChat RAG 기능 추가",
      period: "2025.01 ~ 2025.03",
      role: "사내 문서를 벡터 데이터베이스와 연동해 내부 지식 답변 기능을 추가했습니다.",
      problem: "인사팀 문의 응답 병목과 문서 검색 비효율을 줄여야 했습니다.",
      solution: "사내 문서 기반 RAG 흐름과 검색-생성 품질을 조정해 실무에 적용했습니다.",
      result: "반복 질의 프로세스 개선 시도와 함께 내부 지식 검색 경험을 확보했습니다.",
      tech: ["LibreChat", "RAG", "Vector DB", "LLM"],
    },
    {
      title: "WinForm 솔루션 운영 및 Java API 전환",
      period: "2021.01 ~ 2023.12",
      role: "C# WinForm 기반 마켓 관리 솔루션과 Windows Service 백엔드를 Java Spring Boot API로 전환했습니다.",
      problem: "OS 종속 구조와 레거시 인터페이스 때문에 유지보수와 확장이 어려웠습니다.",
      solution: "WinForm과 신규 API 서버 간 인터페이스를 재설계하고 통신 구조를 단순화했습니다.",
      result: "서버 응답 시간 평균 300ms 단축과 월 80시간 운영 리소스 절감을 달성했습니다.",
      tech: ["Java", "Spring Boot", "JPA", "MyBatis"],
    },
  ],
  career: [
    {
      company: "가비아씨엔에스",
      period: "2020.11 ~ 재직중",
      role: "풀스택 개발자 / 팀장",
      domains: "이커머스 SaaS, 상품 관리, 주문/배송, AI 서비스, 클라우드 운영",
      intro:
        "상품, 주문, 배송, AI, 인프라까지 이커머스 핵심 흐름을 전반적으로 다루며 시스템을 운영·개선했습니다.",
      items: [
        {
          title: "AI 서비스 운영",
          period: "2025.11 ~ 현재",
          role: "",
          domains: "상품 상세 이미지 크롭, 키워드/카테고리 추천",
          skills: ["AI", "추천 로직", "이미지 처리", "운영 고도화"],
          bullets: [
            "상품명 분석 기반 키워드/카테고리 추천 로직 튜닝",
            "상세설명 이미지 크롭 AI 서비스 품질 모니터링",
            "오인식 등 에지 케이스 예외 처리 로직 보완",
          ],
          achievements: [
            "실무 비즈니스 규칙에 맞춘 추천 정확도 개선",
            "이미지 크롭 서비스 운영 효율 향상",
            "AI 기능 품질 모니터링 체계 확보",
          ],
        },
        {
          title: "상품/배송 시스템",
          period: "2025.04 ~ 2025.12",
          role: "",
          domains: "상품관리, 주문관리 DB, 검색 색인, 배송 API",
          skills: ["SaaS", "DB 설계", "검색 색인", "배송 API"],
          bullets: [
            "상품관리 QA 및 기능 고도화",
            "주문관리 DB 설계 및 검색엔진 색인 구조 설계",
            "배송관리 API 개발 및 안정화",
          ],
          achievements: [
            "상품관리 SaaS 런칭 완료",
            "주문 검색 성능 최적화",
            "배송 데이터 처리 안정성 향상",
          ],
        },
        {
          title: "사내 AI 플랫폼 RAG 추가",
          period: "2025.01 ~ 2025.03",
          role: "",
          domains: "LibreChat, RAG, 벡터 DB, 내부 지식 검색",
          skills: ["LibreChat", "RAG", "Vector DB", "LLM"],
          bullets: [
            "사내 문서 기반 RAG 아키텍처 설계",
            "벡터 데이터베이스 연동",
            "RagChain 기반 내부 지식 답변 기능 추가",
          ],
          achievements: [
            "반복 질의 프로세스 개선 시도",
            "RAG 시스템 설계/답변 정교화 경험 확보",
          ],
        },
        {
          title: "SaaS 플랫폼 고도화",
          period: "2024.07 ~ 2024.12",
          role: "",
          domains: "11번가 연동, 템플릿 관리, 배송정보 API 개발",
          skills: ["API 연동", "템플릿 관리", "배송정보 API"],
          bullets: [
            "11번가 연동 및 플랫폼 고도화",
            "템플릿 관리 기능 개선",
            "배송정보 API 개발",
          ],
          achievements: [
            "외부 연동 범위 확대",
            "플랫폼 운영 편의성 개선",
          ],
        },
        {
          title: "SaaS 플랫폼 개발",
          period: "2024.02 ~ 2024.12",
          role: "",
          domains: "신규 플랫폼 기술 스택 선정, 데이터 모델링, 백엔드 개발",
          skills: ["플랫폼 설계", "DB 모델링", "백엔드 개발"],
          bullets: [
            "신규 플랫폼 기술 스택 선정",
            "데이터 모델링 및 백엔드 개발 주도",
            "플랫폼 초기 구조 설계",
          ],
          achievements: [
            "신규 플랫폼 개발 기반 마련",
            "서비스 구조 설계 경험 확보",
          ],
        },
        {
          title: "데이터 구조 개선",
          period: "2023.04 ~ 2023.10",
          role: "",
          domains: "대용량 대응 상품 키 확장, 분산 개발 DB 통합 구축, 확장성 확보",
          skills: ["DB 통합", "대용량 대응", "상품 키 확장"],
          bullets: [
            "대용량 대응 상품 Key 확장 구조 설계",
            "분산 개발 DB 통합 구축",
            "상품 데이터 확장성 확보",
          ],
          achievements: [
            "기존 데이터 구조의 확장 한계 해결",
            "대량 상품 처리 성능 개선",
          ],
        },
        {
          title: "보안 및 규제 대응",
          period: "2023.05 ~ 2023.06",
          role: "",
          domains: "개인정보보호 자율규제 점검 조치, 마스킹, 비밀번호 정책",
          skills: ["개인정보 마스킹", "비밀번호 정책", "컴플라이언스"],
          bullets: [
            "개인정보보호 자율규제 점검 조치",
            "민감정보 마스킹 처리",
            "비밀번호 정책 및 보안 설정 정비",
          ],
          achievements: [
            "보안 점검 대응 체계 확보",
            "컴플라이언스 준수 수준 향상",
          ],
        },
        {
          title: "Java Spring 리뉴얼",
          period: "2022.01 ~ 2022.09",
          role: "",
          domains: "레거시 웹서비스 정리, 메인·상품·배송·재고 API 통합 전환",
          skills: ["Java", "Spring Boot", "API 통합", "레거시 현대화"],
          bullets: [
            "레거시 웹서비스 정리 및 구조 단순화",
            "메인·상품·배송·재고 API 통합 전환",
            "Java Spring 기반 백엔드 구조 재정비",
          ],
          achievements: [
            "서비스 구조 단순화",
            "유지보수성과 확장성 향상",
          ],
        },
        {
          title: "표준 카테고리 매칭",
          period: "2022.04 ~ 2022.06",
          role: "",
          domains: "7개 마켓 대응 표준 카테고리 매칭 프로그램 개발",
          skills: ["표준화", "카테고리 매칭", "데이터 정합성"],
          bullets: [
            "7개 마켓 대응 표준 카테고리 매칭 프로그램 개발",
            "카테고리/상품 데이터 표준화",
            "마켓별 등록 규칙 정리",
          ],
          achievements: [
            "데이터 표준 체계 확보",
            "마켓별 운영 복잡도 감소",
          ],
        },
        {
          title: "11번가 API 재연동",
          period: "2021.01 ~ 2021.03",
          role: "",
          domains: "최신 API 규격 전환 및 상품 등록/수정 동기화 로직 고도화",
          skills: ["API 연동", "동기화", "상품 관리"],
          bullets: [
            "최신 API 규격 전환",
            "상품 등록/수정 동기화 로직 고도화",
            "연동 예외 처리 및 안정성 보완",
          ],
          achievements: [
            "API 연동 안정성 개선",
            "상품 데이터 동기화 품질 향상",
          ],
        },
        {
          title: "쿠팡 API 재연동",
          period: "2021.04 ~ 2021.06",
          role: "",
          domains: "배송 관리 API 최신화 및 대량 주문 처리 안정화",
          skills: ["API 연동", "배송 관리", "대량 주문 처리"],
          bullets: [
            "배송 관리 API 최신화",
            "대량 주문 처리 안정화 로직 구현",
            "주문/배송 흐름 점검 및 예외 처리 보완",
          ],
          achievements: [
            "대량 주문 처리 안정성 향상",
            "배송 관리 API 운영 품질 개선",
          ],
        },
        {
          title: "굿스플로 연동",
          period: "2021.07 ~ 2021.08",
          role: "",
          domains: "3PL 물류 솔루션 인터페이스 구축 및 송장 자동화",
          skills: ["3PL 연동", "송장 자동화", "물류 인터페이스"],
          bullets: [
            "3PL 물류 솔루션 인터페이스 구축",
            "송장 자동화 프로세스 개발",
            "배송 후속 처리 흐름 정리",
          ],
          achievements: [
            "수동 송장 처리 업무 절감",
            "물류 연동 안정성 확보",
          ],
        },
        {
          title: "톡스토어 API 연동",
          period: "2021.08 ~ 2021.10",
          role: "신규 마켓",
          domains: "카카오 톡스토어 신규 마켓 상품 및 주문 관리 API 연동",
          skills: ["API 연동", "상품 관리", "주문 관리"],
          bullets: [
            "카카오 톡스토어 신규 마켓 상품/주문 관리 API 연동",
            "마켓별 연동 규격 차이 대응",
            "상품·주문 처리 흐름 정리",
          ],
          achievements: [
            "신규 마켓 연동 속도 향상",
            "상품/주문 관리 운영 기반 확보",
          ],
        },
      ],
    },
    {
      company: "제주도닷컴",
      period: "2017.07 ~ 2020.11",
      role: "풀스택 개발자 / 대리",
      domains: "항공권 예약, 제휴 API, 결제, 환불 자동화",
      intro:
        "항공 제휴 API와 결제 플랫폼을 구축하고 예약·결제·환불 흐름의 자동화를 맡았습니다.",
      items: [
        {
          title: "네이버페이 연동",
          period: "2020.08 ~ 2020.10",
          role: "",
          domains: "여행사 및 아시아나 항공 대상 네이버페이 간편결제 연동",
          skills: ["결제 연동", "네이버페이", "간편결제"],
          bullets: [
            "여행사 및 항공사 대상 네이버페이 간편결제 연동",
            "결제 흐름 점검 및 예외 처리 보완",
          ],
          achievements: [
            "간편결제 적용 범위 확대",
            "결제 안정성 확보",
          ],
        },
        {
          title: "이베이 스마일페이 연동",
          period: "2020.02 ~ 2020.09",
          role: "",
          domains: "아시아나 스마일페이 연동 및 지마켓 항공 서비스 개선",
          skills: ["결제 연동", "Smile Pay", "항공 서비스"],
          bullets: [
            "아시아나 스마일페이 연동",
            "지마켓 항공 서비스 개선",
            "결제/예약 흐름 점검",
          ],
          achievements: [
            "스마일페이 연동 안정화",
            "항공 서비스 결제 경험 개선",
          ],
        },
        {
          title: "제휴 플랫폼 연동",
          period: "2019.11 ~ 2020.02",
          role: "",
          domains: "11번가 및 한국공항공사 항공 페이지 시스템 연동",
          skills: ["제휴 API", "항공 페이지", "시스템 연동"],
          bullets: [
            "11번가 및 한국공항공사 항공 페이지 시스템 연동",
            "제휴 채널별 데이터 흐름 정리",
            "페이지/연동 안정성 점검",
          ],
          achievements: [
            "제휴 플랫폼 확장 기반 확보",
            "외부 채널 연동 안정화",
          ],
        },
        {
          title: "결제 시스템 연동",
          period: "2019.01 ~ 2019.07",
          role: "",
          domains: "발권수수료 키인결제(올앳) 및 SK 베네피아 KCP 연동",
          skills: ["결제 모듈", "KCP", "올앳"],
          bullets: [
            "발권수수료 키인결제(올앳) 연동",
            "SK 베네피아 KCP 연동",
            "결제 모듈 안정화",
          ],
          achievements: [
            "결제 모듈 연동 범위 확장",
            "정산/발권 흐름 안정화",
          ],
        },
        {
          title: "위메프 항공 연동",
          period: "2019.05 ~ 2019.07",
          role: "",
          domains: "위메프 플랫폼 내 항공권 검색 및 예약 시스템 API 연동",
          skills: ["항공 API", "예약 시스템", "플랫폼 연동"],
          bullets: [
            "위메프 플랫폼 내 항공권 검색 API 연동",
            "예약 시스템 연동",
            "플랫폼 내 항공 서비스 흐름 정리",
          ],
          achievements: [
            "외부 플랫폼 항공 연동 확보",
            "검색/예약 흐름 개선",
          ],
        },
        {
          title: "예약 시스템 리뉴얼",
          period: "2019.03 ~ 2019.04",
          role: "",
          domains: "자사 사이트 내 렌터카 예약 시스템 고도화 및 UI 리뉴얼",
          skills: ["예약 시스템", "UI 리뉴얼"],
          bullets: [
            "렌터카 예약 시스템 고도화",
            "UI 리뉴얼",
            "예약 흐름 개선",
          ],
          achievements: [
            "예약 UX 개선",
            "운영 편의성 향상",
          ],
        },
        {
          title: "스카이스캐너 연동",
          period: "2018.07 ~ 2018.08",
          role: "",
          domains: "글로벌 항공 메타서치 스카이스캐너 항공 페이지 시스템 연동",
          skills: ["글로벌 제휴", "항공 API", "메타서치"],
          bullets: [
            "스카이스캐너 항공 페이지 시스템 연동",
            "글로벌 메타서치 연동 구조 정리",
            "외부 제휴 채널 대응",
          ],
          achievements: [
            "글로벌 제휴 채널 대응",
            "항공 검색 유입 경로 확보",
          ],
        },
        {
          title: "환불 시스템 구축",
          period: "2018.02 ~ 2018.06",
          role: "",
          domains: "각 항공사 티켓 부분 환불 시스템 연동 및 제주도닷컴 개발",
          skills: ["환불 로직", "부분 환불", "항공권"],
          bullets: [
            "부분 환불 시스템 연동",
            "항공사 티켓 환불 처리 개발",
            "환불 흐름 정합성 점검",
          ],
          achievements: [
            "환불 처리 안정성 확보",
            "부분 환불 지원 범위 확대",
          ],
        },
        {
          title: "이스타/진에어 API 연동",
          period: "2018.02 ~ 2018.12",
          role: "",
          domains: "각 항공사 API 연동 및 카카오 알림톡 서비스 개발",
          skills: ["항공 API", "알림톡", "연동"],
          bullets: [
            "이스타/진에어 항공사 API 연동",
            "카카오 알림톡 서비스 개발",
            "항공 예약/변경 흐름 정리",
          ],
          achievements: [
            "항공 API 연동 안정화",
            "고객 알림 체계 확보",
          ],
        },
        {
          title: "대한항공 시스템 전환",
          period: "2017.08 ~ 2017.11",
          role: "",
          domains: "대한항공 SOAP 4.0 전환 및 일일 정산 관리 페이지 구축",
          skills: ["SOAP", "정산 관리", "시스템 전환"],
          bullets: [
            "대한항공 SOAP 4.0 전환",
            "일일 정산 관리 페이지 구축",
            "시스템 전환 대응 및 검증",
          ],
          achievements: [
            "전환 안정성 확보",
            "정산 관리 효율 향상",
          ],
        },
      ],
    },
    {
      company: "프레피스코리아",
      period: "2014.09 ~ 2016.08",
      role: "풀스택 개발자 / 사원",
      domains: "금융 결제, 암호화, 고가용성 서버",
      intro: "여전법 준수 카드 결제 암호화와 결제 서버 이중화로 금융 보안과 운영 안정성을 확보했습니다.",
      items: [
        {
          title: "조회 서비스 개발",
          period: "2016.01 ~ 2016.04",
          role: "",
          domains: "고객용 안드로이드 웹 앱 및 사내 콜 응대 통합 웹 개발",
          skills: ["Android WebView", "Web App"],
          bullets: [
            "고객용 안드로이드 웹 앱 개발",
            "사내 콜 응대 통합 웹 개발",
            "조회 서비스 화면 및 흐름 정리",
          ],
          achievements: [
            "조회 서비스 운영 편의성 향상",
            "고객/사내 대응 흐름 통합",
          ],
        },
        {
          title: "결제 보안 구축",
          period: "2015.10 ~ 2016.03",
          role: "",
          domains: "여신전문금융업법 준수 카드 결제 데이터 암호화 서버 구축",
          skills: ["암호화", "금융 보안", "결제 서버", ".NET"],
          bullets: [
            "카드 결제 데이터 암호화 서버 구축",
            "여신전문금융업법 준수 대응",
            "결제 보안 로직 정비",
          ],
          achievements: [
            "금융 보안 요건 충족",
            "결제 데이터 보호 체계 확보",
          ],
        },
        {
          title: "서버 이중화 개발",
          period: "2014.08 ~ 2014.12",
          role: "",
          domains: "CJ 제휴 포인트 결제 연동 및 이중화 서버 시스템 구축",
          skills: ["서버 이중화", "포인트 결제", "HA", ".NET"],
          bullets: [
            "CJ 제휴 포인트 결제 연동",
            "이중화 서버 시스템 구축",
            "장애 대응 구조 정비",
          ],
          achievements: [
            "고가용성 운영 환경 확보",
            "서비스 안정성 향상",
          ],
        },
      ],
    },
  ],
  skills: [
    {
      category: "Backend",
      items: ["Java", "Spring Boot", "NestJS", "Node.js", "TypeScript", "C#", ".NET", "PHP", "Python"],
    },
    {
      category: "Frontend",
      items: ["React", "Next.js", "HTML", "jQuery", "Tailwind CSS", "Sass"],
    },
    {
      category: "Database",
      items: ["MySQL", "MSSQL", "MongoDB", "Elasticsearch", "Redis"],
    },
    {
      category: "DevOps & Infrastructure",
      items: ["Kubernetes", "Docker", "ArgoCD", "GitOps", "VMware", "Git", "GitHub", "SVN"],
    },
    {
      category: "AI & Data",
      items: ["RAG", "LibreChat", "벡터 데이터베이스", "검색엔진 색인 구조 설계", "대용량 상품 데이터 처리"],
    },
    {
      category: "Domain Knowledge",
      items: ["이커머스 상품 관리", "주문/배송/클레임 처리", "외부 마켓 API 연동", "항공권 예약/결제", "금융 결제 보안"],
    },
  ],
  education: [
    {
      school: "한국방송통신대학교",
      period: "2015.03 ~ 2019.02",
      major: "컴퓨터과학과",
      status: "졸업",
    },
    {
      school: "군산중앙고등학교",
      period: "2006.03 ~ 2009.02",
      major: "문과계열",
      status: "졸업",
    },
  ],
  certifications: [
    {
      name: "정보처리기사",
      date: "2018.11",
      issuer: "한국산업인력공단",
    },
    {
      name: "한식조리기능사",
      date: "2009.10",
      issuer: "한국산업인력공단",
    },
  ],
};

export async function loadResumeData(): Promise<ResumeData> {
  return resumeData;
}
