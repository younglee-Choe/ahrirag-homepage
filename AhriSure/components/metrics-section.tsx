import { Clock, Smile, TrendingUp } from "lucide-react"

export function MetricsSection() {
  const metrics = [
    {
      icon: Clock,
      value: "40%",
      label: "업무 시간 절감",
      description:
        "AI 보험 매니저가 반복되는 준비 업무를 대신해주어, 설계사님은 하루 일과 중 약 40% 더 많은 시간을 고객과의 소중한 만남에 쓸 수 있습니다.",
    },
    {
      icon: Smile,
      value: "95%",
      label: "고객 만족도",
      description: "세심하게 맞춤 상담을 지원해, 95%에 이르는 고객님들의 높은 만족도로 이어지고 있습니다.",
    },
    {
      icon: TrendingUp,
      value: "30%",
      label: "계약 건수 증가",
      description:
        "AI의 스마트한 도움으로 월 평균 계약 건수가 30%나 자연스럽게 더 늘어, 설계사님의 영업 성과가 한층 더 빛나고 있습니다.",
    },
  ]

  return (
    <section className="bg-gradient-to-b from-purple-900 to-purple-800 py-20 text-white md:py-32">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-4 text-sm font-semibold text-purple-200">우리 서비스가 드리는 좋은 변화</div>
          <h2 className="mb-12 text-3xl font-bold tracking-tight md:text-4xl">일상이 더 여유로워집니다</h2>
        </div>
        <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-3">
          {metrics.map((metric, index) => (
            <div key={index} className="rounded-lg border border-purple-700 bg-purple-800/50 p-8 backdrop-blur">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-white/10">
                <metric.icon className="h-6 w-6 text-white" />
              </div>
              <div className="mb-2 text-4xl font-bold">{metric.value}</div>
              <div className="mb-3 text-lg font-semibold text-purple-200">{metric.label}</div>
              <p className="text-sm text-purple-100">{metric.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
