import { Facebook, Twitter, Linkedin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="container mx-auto py-16">
        <div className="grid gap-12 md:grid-cols-5 max-w-6xl mx-auto">
          <div className="col-span-2">
            <div className="mb-4 text-2xl font-bold" style={{ fontFamily: "cursive", color: "#3d9b8f" }}>
              AhriSure
            </div>
            <p className="text-sm text-gray-400">AI가 함께하는 스마트한 보험 영업의 시작</p>
          </div>
          <div>
            <h3 className="mb-4 font-semibold text-white">서비스</h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>
                <a href="#features" className="hover:text-teal-400">
                  주요 기능
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-teal-400">
                  서비스 가치
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-teal-400">
                  요금 안내
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 font-semibold text-white">회사</h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>
                <a href="#" className="hover:text-teal-400">
                  회사 소개
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-teal-400">
                  팀 소개
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-teal-400">
                  채용
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 font-semibold text-white">고객 지원</h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>
                <a href="#" className="hover:text-teal-400">
                  문의하기
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-teal-400">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-teal-400">
                  이용약관
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 flex flex-col items-center justify-between border-t border-gray-800 pt-8 md:flex-row">
          <p className="text-sm text-gray-400">© 2025 BNSoft. All rights reserved</p>
          <div className="mt-4 flex items-center gap-2 md:mt-0">
            <span className="text-sm text-gray-400">Powered by Readdy</span>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-teal-400">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-teal-400">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-teal-400">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
