import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

export function TargetAudienceSection() {
  const managerIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className="size-6 text-[#3d9b8f]"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
      />
    </svg>
  );
  const gaIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className="size-6 text-[#3d9b8f]"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Z"
      />
    </svg>
  );
  const trainingManagerIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className="size-6 text-[#3d9b8f]"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z"
      />
    </svg>
  );
  const customerIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className="size-6 text-[#3d9b8f]"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
      />
    </svg>
  );

  const audiences = [
    {
      icon: managerIcon,
      title: '보험 설계사님',
      description:
        '바쁘고 반복되는 작업에서 벗어나, 더 많은 고객과 진심 어린 상담을 나누고 싶은 분',
    },
    {
      icon: gaIcon,
      title: 'GA(보험대리점) 운영자님',
      description: '팀 전체의 상담 품질과 업무 효율을 높이고 싶은 분',
    },
    {
      icon: trainingManagerIcon,
      title: '보험사 영업 관리자와 교육 담당자님',
      description: '설계사들의 역량을 키우고, 현장 지원을 강화하고 싶은 분',
    },
    {
      icon: customerIcon,
      title: '보험 가입 고객님',
      description: '소중한 일상의 안전과 행복을 더 든든하게 꿈꾸는 모든 분과 가입 고객님',
    },
  ];

  return (
    <section id="audience" className="py-20 md:py-32">
      {/* <div className="container max-w-6xl"> */}
      <div className="container mx-auto px-6">
        <div className="mx-auto mb-8 md:mb-16 max-w-3xl text-center">
          <h2 className="mb-4 text-2xl md:text-4xl font-bold tracking-tight">
            누구에게 꼭 필요한<br className="block md:hidden" />서비스인가요?
          </h2>
          <p className="text-muted-foreground">다양한 분들께 도움을 드립니다</p>
        </div>
        <div className="hidden md:grid gap-8 md:grid-cols-2 max-w-6xl mx-auto">
          {audiences.map((audience, index) => (
            <div
              key={index}
              className="rounded-2xl bg-white p-8 shadow-lg transition hover:shadow-xl duration-200 border-b-4 border-[#3d9b8f]"
            >
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#d4f4f0]">
                <audience.icon className="h-7 w-7 text-teal-600" />
              </div>
              <h3 className="mb-3 text-xl font-bold text-gray-900">{audience.title}</h3>
              <p className="text-gray-600">{audience.description}</p>
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
            {audiences.map((audience, index) => (
              <SwiperSlide key={index}>
                <div className="rounded-2xl bg-white p-6 mx-2 mb-15 shadow-lg transition hover:shadow-xl duration-200 border-b-4 border-[#3d9b8f] aspect-[4/3]">
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#d4f4f0]">
                    <audience.icon className="h-7 w-7 text-teal-600" />
                  </div>
                  <h3 className="mb-3 text-xl font-bold text-gray-900">{audience.title}</h3>
                  <p className="text-gray-600">{audience.description}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
