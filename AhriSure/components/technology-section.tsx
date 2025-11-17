export function TechnologySection() {
  return (
    <section className="py-20 bg-[#f5fcfb]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-7 md:mb-16">
          <h2 className="text-2xl md:text-4xl font-bold mb-4 text-gray-900">우리 AI 기술의 비밀</h2>
          <p className="text-gray-600">RAG와 똑똑한 학습법</p>
        </div>
        <div className="max-w-6xl mx-auto shadow-lg rounded-4xl">
          <div className="grid md:grid-cols-2 gap-3 items-center bg-white rounded-4xl">
            <div className="bg-white p-8 rounded-4xl order-2 md:order-1">
              <p className="text-gray-600 mb-6 leading-relaxed whitespace-normal break-words">
                AI 보험 매니저의 핵심 기술인 <span className="font-bold text-[#515251]">RAG</span>는
                '검색 증강 생성'이라는 뜻으로, 쉽게 말해 AI가 답을 만들기 전에 필요한 정보를 먼저
                똑똑하게 찾아서 참고하는 방식입니다.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed whitespace-normal break-words">
                예를 들어, 누군가가 질문하면 AI가 인터넷이나 내부 문서에서 관련 내용을 빠르게
                검색하고, 그 내용을 바탕으로 정확하고 신뢰할 수 있는 답변을 만들어내는 거죠.
              </p>
              <p className="text-sm text-teal-500 font-bold italic mb-6 whitespace-normal break-words">
                "AI가 단순히 대답하는 게 아니라, 근거를 찾아 신뢰성 있는 답을 제공합니다.”
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                이 기술 덕분에 AI가 항상 최신 정보와 믿을만한 근거를 가지고 대화할 수 있어,
                설계사님과 고객님 모두에게 더 정확하고 도움이 되는 상담을 제공합니다.
              </p>
              <div className="bg-[#f0f9f8] p-4 rounded-xl border-l-3 md:border-l-4 border-[#3d9b8f]">
                <p className="text-sm text-gray-700 whitespace-normal break-words leading-relaxed">
                  💡 AI는 계속해서 배우고 발전합니다. <br className="block md:hidden" />
                  <span className="font-bold text-[#515251]">
                    상담 데이터를 바탕으로 스스로 똑똑해져서,
                  </span>{' '}
                  시간이 지날수록 더 전문적이고 친절한 상담 도우미가 됩니다.
                </p>
              </div>
            </div>
            <div className="md:mt-10 md:mr-10 md:p-3 order-1 md:order-2">
              <img
                src="/images/rag.png"
                alt="AI 기술 시각화"
                className="w-full rounded-4xl mb-7 shadow-lg object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
