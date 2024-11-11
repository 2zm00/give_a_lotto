// app/page.tsx
export default function Home() {
  return (
    <div className="container mx-auto px-4">
      {/* 타이틀 섹션 */}
      <div className="bg-dark-gray/90 backdrop-blur-sm rounded-full p-4 my-16">
        <h1 className="text-white text-xl px-4">프로젝트 중점 개발 포인트</h1>
      </div>

      {/* 개발 포인트 그리드 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* 다크 그레이 카드 */}
        <div className="bg-dark-gray/90 backdrop-blur-sm rounded-full p-6">
          <h2 className="text-white text-lg">매주 로또번호 조합 자동 추첨</h2>
          <p className="text-white/80 text-sm mt-2">매주 새로운 로또 번호를 AI가 추천해드립니다!</p>
        </div>
        <div className="bg-dark-gray/90 backdrop-blur-sm rounded-full p-6">
          <h2 className="text-white text-lg">학습된 AI 머신러닝을 이용한 로또 추첨</h2>
          <p className="text-white/80 text-sm mt-2">정확한 데이터 분석으로 신뢰도 높은 번호를 제공합니다</p>
        </div>

        {/* 민트 카드 */}
        <div className="bg-mint rounded-full p-6">
          <h2 className="text-white text-lg">이전 추첨된 내용 중 당첨이력 공개</h2>
        </div>
        <div className="bg-mint rounded-full p-6">
          <h2 className="text-white text-lg">1등, 2등 배출 판매점 지도</h2>
        </div>

        {/* 라이트 그레이 카드 */}
        <div className="bg-gray-200/90 backdrop-blur-sm rounded-full p-6">
          <h2 className="text-gray-800 text-lg">최근 로또 번호 통계</h2>
        </div>
        <div className="bg-gray-200/90 backdrop-blur-sm rounded-full p-6">
          <h2 className="text-gray-800 text-lg">사용자들의 이용 데이터 대시보드</h2>
        </div>
      </div>
    </div>
  )
}