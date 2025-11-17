export function ContinuousLearningSection() {
  return (
    <section className="py-15 mb-10">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="mx-auto">
              <div className="inline-block text-sm text-[#3d9b8f] mb-4 font-bold rounded-2xl bg-[#E6FAF4] px-3 py-1">🤖 전문성 강화</div>
              <h3 className="text-xl md:text-3xl font-bold mb-6 text-gray-900">3. 계속 배우고 성장하는 AI</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                AI가 늘 새로워지고 똑똑해지며, 설계사님께 더 깊이 있는 전문 상담을 지원합니다. 최신 정보와 노하우를 담아 언제나
                믿음직한 조력자가 되어드립니다.
              </p>
              <div className="space-y-1 md:space-y-3 text-gray-700">
                <div className="flex items-center gap-2">
                  <span className="text-[#3d9b8f]">✓</span>
                  <span>최신 정보 자동 업데이트</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#3d9b8f]">✓</span>
                  <span>한눈에 보는 비교 리포트</span>
                </div>
              </div>
            </div>
            <div>
              <img
                src="images/7.png"
                alt="상품 비교 인터페이스"
                className="w-80 h-80 md:w-100 md:h-90 rounded-3xl shadow-xl ml-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
