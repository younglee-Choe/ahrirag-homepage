export function ValuesSection() {
  return (
    <section id="values" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-8 md:mb-16">
          <h2 className="text-2xl md:text-4xl font-bold mb-4 text-gray-900">
            AI 보험 매니저가 전하는
            <br className="block md:hidden" />세 가지 가치
          </h2>
          <p className="text-gray-600 font-medium">설계사님의 성공을 위한 독특한 파트너</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="rounded-2xl p-8 shadow-lg hover:shadow-xl duration-200">
            <div className="w-16 h-16 bg-[#d4f4f0] rounded-2xl flex items-center justify-center mb-6">
              <svg
                className="w-8 h-8 text-[#3d9b8f]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>
            <h3 className="text-lg font-bold mb-1 text-gray-900">더 스마트한 업무 지원</h3>
            <p className="text-sm text-gray-500 mb-4">반복 업무 자동화</p>
            <div className=" max-w-6xl mx-auto h-30 overflow-hidden relative mb-6">
              <img
                src="/images/2.png"
                alt="AI 기술 시각화"
                className="w-full h-full object-cover rounded-md shadow-lg"
              />
            </div>
            <p className="text-md text-gray-600 whitespace-normal break-normal">
              반복되는 상담 준비와 자료 작업을 AI가 척척 해결해 드려, 설계사님은 더 많은 고객과 깊이
              있는 상담에 집중하실 수 있습니다.
            </p>
          </div>

          {/* 이미지 위에 글자 ver */}
          {/* <div className="rounded-2xl p-8 shadow-lg hover:shadow-xl duration-200">
            <div className="w-16 h-16 bg-[#d4f4f0] rounded-2xl flex items-center justify-center mb-6">
              <svg
                className="w-8 h-8 text-[#3d9b8f]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>
            <h3 className="text-lg font-bold mb-1 text-gray-900">더 스마트한 업무 지원</h3>
            <p className="text-sm text-gray-500 mb-4">반복 업무 자동화</p>
            <div className=" max-w-6xl mx-auto h-auto overflow-hidden relative mb-6">
              <img
                src="/images/2.png"
                alt="AI 기술 시각화"
                className="w-full h-full object-cover rounded-md shadow-lg"
              />
              <div className="absolute bottom-0 left-0 w-full h-3/4 bg-white opacity-60 backdrop-blur-sm pointer-events-none z-0" />
              <div className="absoulte inset-0 z-10 flex items-center justify-center">
                <p className="text-md text-gray-600 whitespace-normal break-normal">
                  반복되는 상담 준비와 자료 작업을 AI가 척척 해결해 드려, 설계사님은 더 많은 고객과
                  깊이 있는 상담에 집중하실 수 있습니다.
                </p>
              </div>
            </div>
          </div> */}

          <div className="rounded-2xl p-8 shadow-lg hover:shadow-xl duration-200">
            <div className="w-16 h-16 bg-[#d4f4f0] rounded-2xl flex items-center justify-center mb-6">
              <svg
                className="w-8 h-8 text-[#3d9b8f]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                />
              </svg>
            </div>
            <h3 className="text-lg font-bold mb-1 text-gray-900">전문성을 더하는 똑똑한 추천</h3>
            <p className="text-sm text-gray-500 mb-4">고객 맞춤형 제안</p>
            <div className=" max-w-6xl mx-auto h-30 overflow-hidden relative mb-6">
              <img
                src="/images/3.png"
                alt="AI 기술 시각화"
                className="w-full h-full object-cover rounded-md shadow-lg"
              />
            </div>
            <p className="text-md text-gray-600 whitespace-normal break-normal">
              AI가 정확하고 빠르게 필요한 보험 정보를 찾아드리며, 고객에게 꼭 맞는 상품을 제안해
              설계사님의 전문성을 한층 빛나게 합니다.
            </p>
          </div>

          <div className="rounded-2xl p-8 shadow-lg hover:shadow-xl duration-200">
            <div className="w-16 h-16 bg-[#d4f4f0] rounded-2xl flex items-center justify-center mb-6">
              <svg
                className="w-8 h-8 text-[#3d9b8f]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
            </div>
            <h3 className="text-lg font-bold mb-1 text-gray-900">고객 마음을 사로잡는 맞춤 케어</h3>
            <p className="text-sm text-gray-500 mb-4">신뢰와 만족 향상</p>
            <div className=" max-w-6xl mx-auto h-30 overflow-hidden relative mb-6">
              <img
                src="/images/4.png"
                alt="AI 기술 시각화"
                className="w-full h-full object-cover rounded-md shadow-lg"
              />
            </div>
            <p className="text-md text-gray-600 whitespace-normal break-normal">
              각 고객에게 꼭 맞춘 세심한 상담과 서비스를 제공해, 고객님의 신뢰와 만족이 자연스럽게
              쌓여갑니다.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
