import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, BatteryCharging, Brain, ShieldCheck, Volume2 } from "lucide-react";
import { Header } from "@/components/Header";
import { Reveal } from "@/components/Reveal";

const specs = [
  ["处理器", "NOVA Neural Core, 18 TOPS"],
  ["交互", "远场麦克风阵列、环境视觉传感器、触控灯环"],
  ["隐私", "本地优先记忆库、物理静音键、端侧加密"],
  ["连接", "Wi-Fi 7、Bluetooth LE、USB-C"],
  ["材质", "一体成型铝合金、陶瓷背板、黑晶玻璃"],
  ["尺寸", "168 mm x 118 mm x 72 mm"]
];

const capabilities = [
  {
    icon: Brain,
    title: "理解工作上下文",
    body: "把会议、文档、日程和灵感串联起来，自动形成可追溯的个人知识线索。"
  },
  {
    icon: Volume2,
    title: "自然对话",
    body: "支持低延迟语音交互，在开放空间里也能保持清晰、克制的反馈。"
  },
  {
    icon: ShieldCheck,
    title: "隐私由硬件开始",
    body: "物理静音、端侧处理和加密记忆库让敏感信息拥有明确边界。"
  },
  {
    icon: BatteryCharging,
    title: "全天候待命",
    body: "低功耗感知架构让设备能长时间保持可用，却不会成为桌面负担。"
  }
];

export default function ProductPage() {
  return (
    <main className="min-h-screen bg-mist text-graphite">
      <Header />
      <section className="px-5 pb-20 pt-28 sm:px-8 lg:pb-28">
        <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <Link
              href="/"
              className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-slate-500 transition hover:text-graphite"
            >
              <ArrowLeft size={17} /> 返回首页
            </Link>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-700">
              Product Detail
            </p>
            <h1 className="mt-4 text-5xl font-semibold leading-[0.95] tracking-[-0.03em] sm:text-7xl">
              NOVA One
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
              高端个人 AI 终端。它不是另一块屏幕，而是你桌面上的私密智能层，负责理解、整理和陪伴你的创造过程。
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a className="rounded-full bg-graphite px-6 py-3 text-sm font-semibold text-white" href="#specs">
                查看规格
              </a>
              <a className="rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold" href="#capabilities">
                核心能力
              </a>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <Image
              priority
              src="/images/nova-detail.svg"
              alt="NOVA One product render on light background"
              width={1400}
              height={1000}
              className="w-full rounded-[8px] shadow-2xl"
            />
          </Reveal>
        </div>
      </section>

      <section id="capabilities" className="bg-white px-5 py-24 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <Reveal className="max-w-3xl">
            <h2 className="text-4xl font-semibold tracking-[-0.02em] sm:text-6xl">
              能力足够强，存在感足够低。
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-5 md:grid-cols-2">
            {capabilities.map((item, index) => (
              <Reveal key={item.title} delay={index * 0.06} className="rounded-[8px] bg-slate-50 p-7">
                <item.icon className="text-cyan-700" size={28} />
                <h3 className="mt-7 text-2xl font-semibold">{item.title}</h3>
                <p className="mt-4 leading-7 text-slate-600">{item.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="specs" className="bg-graphite px-5 py-24 text-white sm:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-ion/80">
              Technical Specs
            </p>
            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.02em] sm:text-6xl">
              为长期放在桌面而设计。
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="divide-y divide-white/12 rounded-[8px] border border-white/12">
              {specs.map(([label, value]) => (
                <div key={label} className="grid gap-2 p-5 sm:grid-cols-[180px_1fr] sm:p-6">
                  <div className="text-sm font-semibold text-white/52">{label}</div>
                  <div className="text-base text-white/88">{value}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
