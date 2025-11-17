import { MessageCircle, BarChart3, GitCompare } from "lucide-react"

export function DetailedFeaturesSection() {
  const features = [
    {
      icon: MessageCircle,
      title: "AI 상담 도우미",
      description:
        "고객이 보험에 관해 궁금한 점이 있으면 언제든지 실시간으로 대답해주는 친절한 AI 친구예요. 복잡한 약관이나 절차도 쉽게 설명해주니, 설계사님과 고객 모두 편리하게 상담할 수 있어요.",
    },
    {
      icon: BarChart3,
      title: "보장 분석 자동화",
      description:
        "고객 한 분 한 분의 상황에 맞춘 보험 보장 내용을 AI가 빠르고 정확하게 분석해 드려요. 설계사님은 이 리포트를 바탕으로 전문적이고 신뢰 있는 상담을 진행할 수 있답니다.",
    },
    {
      icon: GitCompare,
      title: "상품 비교",
      description:
        "시중에 있는 여러 보험사의 다양한 상품들을 AI가 한눈에 모아 비교해 줍니다. 복잡한 수작업 없이도 고객에게 가장 적합한 상품을 쉽고 빠르게 추천할 수 있어 설계사님의 업무가 훨씬 편해집니다.",
    },
  ]

  return (
    <section className="bg-gradient-to-b from-white to-purple-50 py-20 md:py-32">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-4 text-sm font-semibold text-purple-600">기능 페이지</div>
          <h2 className="mb-12 text-3xl font-bold tracking-tight md:text-4xl">상세 기능 소개</h2>
        </div>
        <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-3">
          {features.map((feature, index) => (
            <div key={index} className="rounded-lg border bg-white p-8 shadow-sm">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-lg bg-gradient-to-br from-purple-500 to-pink-500">
                <feature.icon className="h-7 w-7 text-white" />
              </div>
              <h3 className="mb-3 text-xl font-semibold">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
