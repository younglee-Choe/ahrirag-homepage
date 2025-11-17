import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

export function ComparisonSection() {
  const comparisons = [
    {
      category: '시간',
      old: '문서 하나하나 직접 보고 계산해야 해서 오래 걸려요',
      new: 'AI가 뚝딱 몇 초만에 필요한 정보 다 찾아줘요',
    },
    {
      category: '정확성',
      old: '사람마다 다르니 가끔 실수도 있어요',
      new: 'AI가 최신 데이터로 정확하게 분석해요',
    },
    {
      category: '이해하기',
      old: '어려운 용어와 긴 문서 때문에 복잡해요',
      new: '그림과 쉬운 말로 쏙쏙 설명해줘요',
    },
    {
      category: '업무 부담',
      old: '반복 작업 많고 힘들어요',
      new: '자동으로 처리해줘서 편하게 상담에 집중할 수 있어요',
    },
    {
      category: '고객 신뢰',
      old: '상담사의 경험에 달려서 달라질 수 있어요',
      new: 'AI가 개인 맞춤 추천으로 더욱 신뢰받아요',
    },
    {
      category: '일 처리 속도',
      old: '한꺼번에 빠르게 처리하기 어려워요',
      new: 'AI가 빠르고 실시간으로 척척 처리해요',
    },
  ];

  return (
    <section id="comparison" className="bg-[#f5fcfb] py-20 md:py-32">
      <div className="container mx-auto px-6">
        <div className="mx-auto mb-8 md:mb-16 max-w-3xl text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">비교해보세요</h2>
          <p className="text-muted-foreground">옛날 방식 vs AI 보험 매니저</p>
        </div>
        {/* PC */}
        <div className="hidden md:block overflow-hidden max-w-6xl mx-auto rounded-2xl bg-white shadow-lg">
          <table className="w-full">
            <thead>
              <tr className="bg-teal-600 text-white">
                <th className="px-6 py-4 text-left font-semibold">구분</th>
                <th className="px-6 py-4 text-left font-semibold">옛날 방식</th>
                <th className="px-6 py-4 text-left font-semibold">AI 보험 매니저 방식</th>
              </tr>
            </thead>
            <tbody>
              {comparisons.map((comparison, index) => (
                <tr
                  key={index}
                  className={`border-b last:border-0 border-white ${
                    index % 2 == 0 ? 'bg-white' : 'bg-[#f2faf8]'
                  }`}
                >
                  <td className="px-6 py-5 font-semibold text-gray-900">{comparison.category}</td>
                  <td className="px-6 py-5 text-sm text-gray-700">{comparison.old}</td>
                  <td className="px-6 py-5 text-sm text-teal-700">{comparison.new}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile */}
        <div className="md:hidden overflow-hidden mx-auto rounded-2xl bg-white shadow-lg">
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={16}
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay={{ delay: 6000, disableOnInteraction: false }}
            loop={true}
          >
            {comparisons.map((comparison, index) => (
              <SwiperSlide key={index}>
                <table className="w-full">
                  <tbody>
                    <tr className="bg-teal-600 text-white">
                      <th className="w-30 px-6 py-4 text-left font-semibold">구분</th>
                      <td className="px-6 py-4 font-semibold">{comparison.category}</td>
                    </tr>
                    <tr className="bg-white">
                      <th className="w-30 px-6 py-4 text-left font-semibold">옛날 방식</th>
                      <td className="h-30 px-6 py-4 text-sm text-gray-700">{comparison.old}</td>
                    </tr>
                    <tr className="bg-[#f2faf8]">
                      <th className="w-30 px-6 py-4 text-left font-semibold">
                        AI 보험
                        <br className="block md:hidden" />
                        매니저
                        <br className="block md:hidden" />
                        방식
                      </th>
                      <td className="h-30 px-6 py-4 text-sm text-teal-700">{comparison.new}</td>
                    </tr>
                  </tbody>
                </table>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
