# 🎱 Give A Lotto - Next.js 기반 로또 추천 서비스

기존 Python 기반의 로또 추천 서비스를 Next.js로 마이그레이션한 프로젝트입니다.

## 📌 프로젝트 소개

머신러닝 기술을 활용한 로또 번호 추천 및 통계 분석 서비스의 웹 버전입니다. Python 백엔드의 분석 엔진을 활용하여 사용자 친화적인 웹 인터페이스를 제공합니다.

## 🛠 주요 기능

**로또 번호 추천 서비스**
- AI 기반 주간 번호 조합 추천
- 사용자 설정 기반 맞춤형 번호 생성
- 실시간 당첨 번호 확인

**통계 대시보드**
- 인터랙티브 통계 차트 
- 실시간 당첨 데이터 시각화
- 회차별 당첨 번호 분석

**판매점 정보**
- Kakao Maps API 기반 판매점 위치 서비스
- 실시간 당첨 판매점 정보
- 위치 기반 근처 판매점 찾기

## 🔧 기술 스택

**Frontend**
- Next.js 14
- TypeScript
- TailwindCSS
- React Query

**Backend**
- Python 
- Machine Learning Models
- PostgreSQL

**DevOps**
- Vercel

## 📁 프로젝트 구조

```bash
give_a_lotto/
├── src/
│   ├── app/         # Next.js 페이지 및 라우팅
│   ├── components/  # 재사용 가능한 컴포넌트
│   ├── lib/         # 유틸리티 함수
│   └── styles/      # 글로벌 스타일
├── public/          # 정적 파일
└── python/          # Python 백엔드 서비스