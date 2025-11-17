export function AiConsultationSection() {
  return (
    <section id="features" className="pt-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl md:text-4xl font-bold mb-4 text-gray-900">주요 기능 소개</h2>
          <p className="text-gray-600">우리의 똑똑한 AI 친구들이 하는 일</p>
        </div>
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-10 md:mb-20">
            <div>
              <div className="inline-block text-sm text-[#3d9b8f] mb-4 font-bold rounded-2xl bg-[#E6FAF4] px-3 py-1">
                🎧 실시간 상담
              </div>
              <h3 className="text-xl md:text-3xl font-bold mb-6 text-gray-900 whitespace-normal break-words">
                1. 언제든 함께하는 AI 상담 도우미
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                고객님의 궁금증에 바로바로 친절하게 답해주고, 상황에 딱 맞는 상품도 똑똑하게 추천해
                드려 설계사님의 든든한 상담 동반자가 되어줍니다.
              </p>
              <div className="space-y-1 md:space-y-3 text-gray-700">
                <div className="flex items-center gap-2">
                  <span className="text-[#3d9b8f]">✓</span>
                  <span>복잡한 약관도 쉽게 설명</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#3d9b8f]">✓</span>
                  <span>24시간 AI 상담 응답</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#3d9b8f]">✓</span>
                  <span>개인 맞춤 상품 추천</span>
                </div>
              </div>
            </div>
            <div>
              <img
                src="/AhriSure/images/5.png"
                alt="AI 상담 인터페이스"
                className="w-80 h-80 md:w-100 md:h-90 rounded-3xl shadow-xl ml-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="h-px bg-[#c3e0d0] mx-7 my-6 md:max-w-6xl md:mx-auto" />
    </section>
  );
}
