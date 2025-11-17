import { FileCheck, Calendar, UserCheck, Bell, ClipboardList } from "lucide-react"

export function UseCasesSection() {
  const useCases = [
    {
      icon: FileCheck,
      title: "보상 청구가 필요할 때도 안심하세요",
      description:
        "사고가 나거나 치료를 받으신 후 보상을 신청할 때, AI가 어떤 서류가 필요한지, 어떤 절차를 밟아야 하는지 친절히 안내해 드려 설계사님과 고객 모두가 편안하게 빠르게 보상을 받을 수 있도록 도와드립니다.",
    },
    {
      icon: Calendar,
      title: "고객님의 변화도 세심하게 챙겨드립니다",
      description:
        "시간이 지나면서 고객님의 생활이나 필요가 달라질 때마다 AI가 보험 계약 내용을 점검하고, 꼭 필요한 갱신이나 새로운 보험 상품 가입을 추천해 드려 맞춤 상담을 가능하게 합니다.",
    },
    {
      icon: UserCheck,
      title: "보험 해지나 변경도 쉽게 안내해 드립니다",
      description:
        "고객님이 보험을 바꾸거나 해지하고 싶을 때, AI가 장단점을 차근차근 설명해 고객이 최상의 선택을 할 수 있도록 함께 고민해드립니다.",
    },
    {
      icon: Bell,
      title: "끊임없는 고객 소통과 관리",
      description:
        "AI가 약속과 후속 관리 사항을 기억해 친절한 문자나 알림으로 자연스럽게 고객과 소통하며, 설계사님의 업무 부담을 덜어드립니다.",
    },
    {
      icon: ClipboardList,
      title: "사후 관리까지 꼼꼼하게 지원",
      description:
        "보상 진행 상황, 갱신 안내, 변경 상담까지 AI가 세심하게 챙기고 관리하여, 설계사님이 고객 한 분 한 분에게 더 안정적이고 든든한 케어를 제공할 수 있도록 도와드립니다.",
    },
  ]

  return (
    <section className="bg-muted/50 py-20 md:py-32">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-4 text-sm font-semibold text-purple-600">보험 가입 후에도 AI가 늘 함께 합니다</div>
          <h2 className="mb-12 text-3xl font-bold tracking-tight md:text-4xl">사례별 활용 시나리오</h2>
        </div>
        <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2">
          {useCases.map((useCase, index) => (
            <div key={index} className="rounded-lg border bg-background p-6 shadow-sm">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-purple-100">
                <useCase.icon className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="mb-2 text-lg font-semibold">{useCase.title}</h3>
              <p className="text-sm text-muted-foreground">{useCase.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
