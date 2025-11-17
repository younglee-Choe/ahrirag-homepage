import { Target, Sparkles, Shield } from "lucide-react"

export function GoalsSection() {
  const goals = [
    {
      icon: Target,
      title: "우리의 꿈",
      description: "더 많은 보험 설계사님들이 AI 보험 매니저를 경험하며, 업무가 더욱 쉽고 즐거워지는 세상을 만듭니다.",
    },
    {
      icon: Sparkles,
      title: "설계사님을 위한 약속",
      description: "반복되고 힘든 업무에서 벗어나, 고객과 더욱 깊이 소통하고 좋은 성과를 낼 수 있도록 도울게요.",
    },
    {
      icon: Shield,
      title: "AI와 함께하는 신뢰",
      description: "최신 AI 기술의 힘으로 믿을 수 있고 편안한 보험 상담 경험을 제공해 드립니다.",
    },
  ]

  return (
    <section className="py-20 md:py-32">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-4 text-sm font-semibold text-purple-600">
            Ahri AI 보험 매니저, 어떤 목표를 가지고 있나요?
          </div>
          <h2 className="mb-12 text-3xl font-bold tracking-tight md:text-4xl">우리의 목표와 약속</h2>
        </div>
        <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-3">
          {goals.map((goal, index) => (
            <div key={index} className="text-center">
              <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-purple-500 to-pink-500">
                <goal.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">{goal.title}</h3>
              <p className="text-muted-foreground">{goal.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
