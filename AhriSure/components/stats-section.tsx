export function StatsSection() {
  return (
    <section className="py-20 bg-[#379188] text-white select-none">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-4xl font-bold mb-4">
            우리 서비스가 드리는
            <br className="block md:hidden" /> 좋은 변화
          </h2>
          {/* <p className="text-lg opacity-90">실제 데이터로 증명된 성과</p> */}
        </div>
        <div className="grid md:grid-cols-3 gap-18 md:gap-12 max-w-5xl mx-auto">
          <div className="text-center">
            <div className="text-5xl md:text-6xl font-bold mb-4">40%</div>
            <div className="text-2xl font-semibold mb-3">업무 효율</div>
            <p className="font-extralight opacity-90 leading-relaxed text-sm">
              AI 보험 매니저가 반복되는 준비 업무를 대신하여, 설계사님은 하루 일과 중{' '}
              <span className="font-medium md:font-bold text-white">40%</span>나 많은 시간을
              고객과의 소중한 대화에 쏟을 수 있습니다.
            </p>
          </div>
          <div className="text-center">
            <div className="text-5xl md:text-6xl font-bold mb-4">95%</div>
            <div className="text-2xl font-semibold mb-3">고객 만족도</div>
            <p className="font-extralight opacity-90 leading-relaxed text-sm">
              세심하게 맞춤 상품을 지원해,{' '}
              <span className="font-medium md:font-bold text-white">95%</span>에 이르는 고객분들의
              높은 만족도로 이어지고 있습니다.
              <br />
              신뢰받는 상담 파트너가 되어드립니다.
            </p>
          </div>
          <div className="text-center">
            <div className="text-5xl md:text-6xl font-bold mb-4">30%</div>
            <div className="text-2xl font-semibold mb-3">계약 증가</div>
            <p className="font-extralight opacity-90 leading-relaxed text-sm">
              AI의 스마트한 도움으로 월 계약 건수가{' '}
              <span className="font-medium md:font-bold text-white">30%</span>나 더 자연스럽게 늘어,
              설계사님의 영업 성과가 한층 더 빛나고 있습니다.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
