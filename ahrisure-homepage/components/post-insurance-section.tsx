export function PostInsuranceSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-2 md:mb-16">
          <h2 className="text-2xl md:text-4xl font-bold mb-4 text-gray-900">
            보험 가입 후에도
            <br className="block md:hidden" /> AI가 늘 함께 합니다
          </h2>
          <p className="text-gray-600">사후 관리까지 완벽하게</p>
        </div>
        <div className="grid md:grid-cols-3">
          <div className="mt-10 mr-10">
            <img
              src="/images/9.png"
              alt="AI 기술 시각화"
              className="hidden md:block w-full h-full rounded-xl shadow-lg object-cover blur-[1px]"
            />
          </div>
          <div className="col-span-2">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl duration-200">
                <div className="w-13 h-13 bg-[#d4f4f0] rounded-2xl flex items-center justify-center mb-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="w-7 h-7 text-[#3d9b8f]"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-bold mb-4 text-gray-900">보상 청구 안내</h3>
                <p className="text-gray-600 leading-relaxed">
                  사고가 발생하거나 치료를 받으신 후 보상을 신청하실 때, AI가 필요한 서류와 절차를
                  친절하게 안내하여 고객과 설계사님 모두가 빠르고 편안하게 보상을 받을 수 있도록
                  지원합니다.
                </p>
              </div>
              <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl duration-200">
                <div className="w-13 h-13 bg-[#d4f4f0] rounded-2xl flex items-center justify-center mb-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="w-7 h-7 text-[#3d9b8f]"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-bold mb-4 text-gray-900">계약 갱신 관리</h3>
                <p className="text-gray-600 leading-relaxed">
                  시간이 지나면서 고객님의 생활이나 필요가 달라질 때마다 AI가 보험 계약 내용을
                  점검하고, 꼭 필요한 갱신이나 새로운 보험 상품 가입을 추천해 드려 맞춤 상담을
                  가능하게 합니다.
                </p>
              </div>
              <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl duration-200">
                <div className="w-13 h-13 bg-[#d4f4f0] rounded-2xl flex items-center justify-center mb-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="w-7 h-7 text-[#3d9b8f]"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-bold mb-4 text-gray-900">해지/변경 상담</h3>
                <p className="text-gray-600 leading-relaxed">
                  고객님이 보험을 바꾸거나 해지하고 싶을 때, AI가 장단점을 차근차근 설명해 고객이
                  최상의 선택을 할 수 있도록 함께 고민해드립니다.
                </p>
              </div>
              <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl duration-200">
                <div className="w-13 h-13 bg-[#d4f4f0] rounded-2xl flex items-center justify-center mb-6">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    className="w-7 h-7 text-[#3d9b8f]"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-bold mb-4 text-gray-900">고객 소통 관리</h3>
                <p className="text-gray-600 leading-relaxed">
                  AI가 약속과 후속 관리 사항을 기억해 친절한 문자나 알림으로 자연스럽게 고객과
                  소통하며, 설계사님의 업무 부담을 덜어드립니다.
                </p>
              </div>
              <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl duration-200">
                <div className="w-13 h-13 bg-[#d4f4f0] rounded-2xl flex items-center justify-center mb-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="w-7 h-7 text-[#3d9b8f]"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-bold mb-4 text-gray-900">사후 관리 지원</h3>
                <p className="text-gray-600 leading-relaxed">
                  보상 진행 상황, 갱신 안내, 변경 상담까지 AI가 세심하게 챙기고 관리하여, 설계사님이
                  고객 한 분 한 분에게 더 안정적이고 든든한 케어를 제공할 수 있도록 도와드립니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
