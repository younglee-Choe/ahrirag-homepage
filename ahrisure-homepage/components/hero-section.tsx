import { Button } from '@/components/ui/button';

export function HeroSection() {
  return (
    <section id="hero" className="relative overflow-hidden md:mt-10 pt-20 md:pt-35 pb-20 bg-white">
      <img
        src="/AhriSure/images/hero-bg.png"
        alt=""
        draggable={false}
        aria-hidden="true"
        className="absolute inset-0 z-0 h-full w-full object-cover blur-[1px] brightness-90 scale-110"
      />

      <div className="absolute inset-0 z-0 bg-white/80" />

      <div className="relative container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-6 inline-flex items-center gap-x-2 rounded-lg bg-[#E6FAF4] px-4 py-2 text-sm text-[#008C7E]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="size-5"
            >
              <path d="M15.98 1.804a1 1 0 0 0-1.96 0l-.24 1.192a1 1 0 0 1-.784.785l-1.192.238a1 1 0 0 0 0 1.962l1.192.238a1 1 0 0 1 .785.785l.238 1.192a1 1 0 0 0 1.962 0l.238-1.192a1 1 0 0 1 .785-.785l1.192-.238a1 1 0 0 0 0-1.962l-1.192-.238a1 1 0 0 1-.785-.785l-.238-1.192ZM6.949 5.684a1 1 0 0 0-1.898 0l-.683 2.051a1 1 0 0 1-.633.633l-2.051.683a1 1 0 0 0 0 1.898l2.051.684a1 1 0 0 1 .633.632l.683 2.051a1 1 0 0 0 1.898 0l.683-2.051a1 1 0 0 1 .633-.633l2.051-.683a1 1 0 0 0 0-1.898l-2.051-.683a1 1 0 0 1-.633-.633L6.95 5.684ZM13.949 13.684a1 1 0 0 0-1.898 0l-.184.551a1 1 0 0 1-.632.633l-.551.183a1 1 0 0 0 0 1.898l.551.183a1 1 0 0 1 .633.633l.183.551a1 1 0 0 0 1.898 0l.184-.551a1 1 0 0 1 .632-.633l.551-.183a1 1 0 0 0 0-1.898l-.551-.184a1 1 0 0 1-.633-.632l-.183-.551Z" />
            </svg>
            <div className="font-bold">우리 서비스, 이렇게 시작해요</div>
          </div>

          <h1 className="text-2xl md:text-4xl font-bold mb-6 text-gray-900 leading-tight">
            AI가 함께하는
            <br />
            스마트한 보험 영업의 시작
          </h1>
          <p className="md:text-lg font-medium text-gray-600 mb-8 leading-relaxed">
            보험의 '복잡함'을 부드럽게 풀어주는 스마트 AI 친구, AI 보험 매니저를 만나보세요
            <br />
            설계사님과 고객 모두에게 쉽고 편한 상담을 선물합니다
          </p>
          <p className="text-sm md:text-base text-gray-600 mb-8 leading-relaxed">
            AI가 필요한 정보를 알아서 챙겨주고, 상담도 다정하게 안내하니 누구든 부담 없이 보험을
            이해할 수 있습니다.
            <br />
            복잡한 과정은 AI가 알아서 처리하니, 설계사님은 고객님과의 만남에 집중할 수 있고,
            고객님은 언제나 친절한 상담과 든든한 안내를 받을 수 있습니다.
          </p>
          <div className="flex gap-4">
            <Button className="bg-[#379188] hover:bg-[#2d8b7f] hover:shadow-lg text-white rounded-full px-8 py-4 text-sm md:px-8 md:py-6 md:text-base font-bold border-2 border-[#379188] cursor-pointer select-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="size-4 md:size-5"
              >
                <path
                  fillRule="evenodd"
                  d="M2 10a8 8 0 1 1 16 0 8 8 0 0 1-16 0Zm6.39-2.908a.75.75 0 0 1 .766.027l3.5 2.25a.75.75 0 0 1 0 1.262l-3.5 2.25A.75.75 0 0 1 8 12.25v-4.5a.75.75 0 0 1 .39-.658Z"
                  clipRule="evenodd"
                />
              </svg>
              <div className="px-2">데모 보기</div>
            </Button>
            <Button
              variant="outline"
              className="rounded-full px-8 py-4 text-sm md:px-8 md:py-6 md:text-base font-bold border-2 border-[#379188] bg-white text-[#379188] hover:text-[#379188] cursor-pointer select-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="size-5 text-[#379188]"
              >
                <path d="M10 12.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
                <path
                  fillRule="evenodd"
                  d="M.664 10.59a1.651 1.651 0 0 1 0-1.186A10.004 10.004 0 0 1 10 3c4.257 0 7.893 2.66 9.336 6.41.147.381.146.804 0 1.186A10.004 10.004 0 0 1 10 17c-4.257 0-7.893-2.66-9.336-6.41ZM14 10a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z"
                  clipRule="evenodd"
                />
              </svg>
              {/* 시뮬레이션 자동 재생 */}
              <div className="px-2">데모 보기</div>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
