import { Button } from '@/components/ui/button';

export function CtaSection() {
  return (
    <section className="py-20 text-white relative overflow-hidden pt-35 pb-20 bg-white">
       <img
        src="/AhriSure/images/10.png"
        alt=""
        draggable={false}
        aria-hidden="true"
        className="absolute inset-0 z-0 h-full w-full object-cover blur-[1px] brightness-90 scale-110"
      />
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">지금 바로 시작하세요</h2>
          <p className="text-lg mb-4 opacity-90 leading-relaxed">
            {/* 위 */}
            웃음과 신뢰가 넘치는 상담, 오늘도 AI 보험 매니저가 함께합니다.
          </p>
          <p className="text-base mb-8 opacity-90 leading-relaxed">\
            {/* 아래로 글자 나누기 */}
            더 많은 보험 설계사님이 AI 보험 매니저를 경험하며, 업무가 더욱 쉽고 즐거워지는 새상을
            만들어갑니다.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-[#3d9b8f] hover:shadow-lg hover:bg-gray-100 rounded-full px-8 py-6 text-base font-semibold cursor-pointer select-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="size-5"
              >
                <path
                  fillRule="evenodd"
                  d="M2 10a8 8 0 1 1 16 0 8 8 0 0 1-16 0Zm6.39-2.908a.75.75 0 0 1 .766.027l3.5 2.25a.75.75 0 0 1 0 1.262l-3.5 2.25A.75.75 0 0 1 8 12.25v-4.5a.75.75 0 0 1 .39-.658Z"
                  clipRule="evenodd"
                />
              </svg>
              <div className="px-2">무료 체험 시작하기</div>
            </Button>
            <Button
              variant="outline"
              className="rounded-full px-8 py-6 text-base font-bold border-2 border-white text-white bg-traansparent hover:bg-[#44c7b6] hover:text-white cursor-pointer select-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="size-5 mx-1"
              >
                <path d="M3.5 2A1.5 1.5 0 0 0 2 3.5V5c0 1.149.15 2.263.43 3.326a13.022 13.022 0 0 0 9.244 9.244c1.063.28 2.177.43 3.326.43h1.5a1.5 1.5 0 0 0 1.5-1.5v-1.148a1.5 1.5 0 0 0-1.175-1.465l-3.223-.716a1.5 1.5 0 0 0-1.767 1.052l-.267.933c-.117.41-.555.643-.95.48a11.542 11.542 0 0 1-6.254-6.254c-.163-.395.07-.833.48-.95l.933-.267a1.5 1.5 0 0 0 1.052-1.767l-.716-3.223A1.5 1.5 0 0 0 4.648 2H3.5ZM16.5 4.56l-3.22 3.22a.75.75 0 1 1-1.06-1.06l3.22-3.22h-2.69a.75.75 0 0 1 0-1.5h4.5a.75.75 0 0 1 .75.75v4.5a.75.75 0 0 1-1.5 0V4.56Z" />
              </svg>
              <div className="px-2">상담 문의하기</div>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
