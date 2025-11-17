import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

export function PricingSection() {
  const plans = [
    {
      badge: '기본 200명',
      name: '기본 요금',
      price: '10만원',
      period: '/ 월',
      features: ['고객 200명까지 관리', '모든 기본 기능 포함', '24시간 AI 상담 지원'],
      highlighted: true,
    },
    {
      badge: '추가 100명',
      name: '추가 요금',
      price: '5만원',
      period: '/ 월',
      features: ['고객 300명까지 관리', '100명마다 5만원 추가', '모든 기능 이용 가능'],
      highlighted: false,
    },
    {
      name: '친구 추천',
      price: '1만원',
      period: '/ 월',
      features: ['친구 1명 추천 시 90% 할인', '단 1만 원', '모든 기능 이용 가능'],
      highlighted: false,
    },
  ];

  return (
    <section id="pricing" className="bg-white py-20 md:py-32">
      <div className="container mx-auto px-6">
        <div className="mx-auto mb-8 md:mb-16 max-w-3xl text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
            AI 보험 매니저<br className="block md:hidden" />요금 안내
          </h2>
          <p className="text-muted-foreground">합리적이고 투명한 가격</p>
        </div>
        <div className="hidden md:grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-2xl border-2 p-8 transition-transform duration-200 ease-out
                hover:-translate-y-0.5 hover:scale-[1.02] ${
                  plan.highlighted
                    ? 'border-teal-600 bg-teal-600 text-white shadow-xl'
                    : 'border-1 border-[#3d9b8f] bg-white'
                }`}
            >
              {plan.badge && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-yellow-400 px-4 py-1 text-sm font-semibold text-gray-900">
                  {plan.badge}
                </div>
              )}
              <div className="mb-6 text-center">
                <h3
                  className={`mb-2 text-lg font-semibold ${
                    plan.highlighted ? 'text-white' : 'text-gray-900'
                  }`}
                >
                  {plan.name}
                </h3>
                <div
                  className={`text-4xl font-bold ${
                    plan.highlighted ? 'text-white' : 'text-gray-900'
                  }`}
                >
                  {plan.price}
                </div>
                <div className={`text-sm ${plan.highlighted ? 'text-teal-100' : 'text-gray-600'}`}>
                  {plan.period}
                </div>
              </div>
              <ul className="mb-8 space-y-3">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <Check
                      className={`mt-0.5 h-5 w-5 flex-shrink-0 ${
                        plan.highlighted ? 'text-white' : 'text-teal-600'
                      }`}
                    />
                    <span
                      className={`text-sm ${plan.highlighted ? 'text-white' : 'text-gray-600'}`}
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
              <Button
                className={`w-full cursor-pointer ${
                  plan.highlighted
                    ? 'bg-white text-teal-600 hover:bg-gray-100'
                    : 'border-2 border-gray-300 bg-white text-gray-900 hover:bg-gray-50'
                }`}
                size="lg"
              >
                시작하기
              </Button>
            </div>
          ))}
        </div>

        <div className="md:hidden">
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={16}
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay={{ delay: 6000, disableOnInteraction: false }}
            loop={true}
          >
            {plans.map((plan, index) => (
              <SwiperSlide key={index}>
                <div
                  key={index}
                  className={`relative rounded-2xl border-2 p-8 transition-transform duration-200 ease-out
                hover:-translate-y-0.5 hover:scale-[1.02] mt-4 mb-15 ${
                  plan.highlighted
                    ? 'border-teal-600 bg-teal-600 text-white shadow-xl'
                    : 'border-1 border-[#3d9b8f] bg-white'
                }`}
                >
                  {plan.badge && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-yellow-400 px-4 py-1 text-sm font-semibold text-gray-900">
                      {plan.badge}
                    </div>
                  )}
                  <div className="mb-6 text-center">
                    <h3
                      className={`mb-2 text-lg font-semibold ${
                        plan.highlighted ? 'text-white' : 'text-gray-900'
                      }`}
                    >
                      {plan.name}
                    </h3>
                    <div
                      className={`text-4xl font-bold ${
                        plan.highlighted ? 'text-white' : 'text-gray-900'
                      }`}
                    >
                      {plan.price}
                    </div>
                    <div
                      className={`text-sm ${plan.highlighted ? 'text-teal-100' : 'text-gray-600'}`}
                    >
                      {plan.period}
                    </div>
                  </div>
                  <ul className="mb-8 space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3">
                        <Check
                          className={`mt-0.5 h-5 w-5 flex-shrink-0 ${
                            plan.highlighted ? 'text-white' : 'text-teal-600'
                          }`}
                        />
                        <span
                          className={`text-sm ${plan.highlighted ? 'text-white' : 'text-gray-600'}`}
                        >
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    className={`w-full cursor-pointer ${
                      plan.highlighted
                        ? 'bg-white text-teal-600 hover:bg-gray-100'
                        : 'border-2 border-gray-300 bg-white text-gray-900 hover:bg-gray-50'
                    }`}
                    size="lg"
                  >
                    시작하기
                  </Button>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="text-sm rounded-xl w-fit flex items-center justify-center px-3 py-1 mt-8 mx-auto gap-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="size-4 self-start md:self-center"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z"
            />
          </svg>
          <p className="text-center text-sm text-gray-600">
            고객 200명 이상 시, 추가 100명마다 5만원씩 추가됩니다
          </p>
        </div>
      </div>
    </section>
  );
}
