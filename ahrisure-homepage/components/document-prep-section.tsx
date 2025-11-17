export function DocumentPrepSection() {
  return (
    <section className="pt-15">
      <div className="container mx-auto px-6 mb-8 md:mb-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <img
                src="images/6.png"
                alt="문서 준비 인터페이스"
                className="w-80 h-80 md:w-100 md:h-90 rounded-3xl shadow-xl object-cover"
              />
            </div>
            <div className="order-1 md:order-2">
              <div className="inline-block text-sm text-[#3d9b8f] mb-4 font-bold rounded-2xl bg-[#E6FAF4] px-3 py-1">
                ⚙️ 자동화 분석
              </div>
              <h3 className="text-xl md:text-3xl font-bold mb-6 text-gray-900 whitespace-normal break-words">
                2. 손쉬운 문서 준비, AI가 척척
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                제안서와 보장 분석서 등 중요한 문서들을 AI가 빠르고 정확하게 만들어 드려, 설계사님은
                소중한 고객과의 대화에 온전히 집중할 수 있습니다.
              </p>
              <div className="space-y-1 md:space-y-3 text-gray-700">
                <div className="flex items-center gap-2">
                  <span className="text-[#3d9b8f]">✓</span>
                  <span>개인 맞춤 보장 분석 리포트</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#3d9b8f]">✓</span>
                  <span>정확한 데이터 기반 분석</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-px bg-[#c3e0d0] mx-7 my-6 md:max-w-6xl md:mx-auto" />
    </section>
  );
}
