import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Cpu, LockKeyhole, Sparkles, Waves } from "lucide-react";
import { Header } from "@/components/Header";
import { Reveal } from "@/components/Reveal";

const features = [
  {
    icon: Sparkles,
    title: "环境式智能",
    body: "无需唤醒词，也不抢占注意力。NOVA One 在你的工作节奏里安静理解、整理和提醒。"
  },
  {
    icon: LockKeyhole,
    title: "本地优先隐私",
    body: "核心感知与日常记忆在设备端完成，敏感上下文默认不离开你的空间。"
  },
  {
    icon: Cpu,
    title: "NOVA Neural Core",
    body: "专为低延迟多模态交互设计，语音、图像和场景理解实时协同。"
  }
];

const products = [
  "Graphite Black",
  "Lunar Silver",
  "Ceramic White"
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-graphite text-white">
      <Header />
      <section className="noise relative flex min-h-screen items-center justify-center px-5 pt-24 sm:px-8">
        <div className="mx-auto grid w-full max-w-7xl items-center gap-12 lg:grid-cols-[0.92fr_1.08fr]">
          <Reveal className="relative z-10 max-w-2xl">
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.34em] text-ion/80">
              NOVA One
            </p>
            <h1 className="text-balance text-5xl font-semibold leading-[0.95] tracking-[-0.02em] text-white sm:text-7xl lg:text-8xl">
              你的第一台个人 AI 终端。
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-8 text-white/68 sm:text-xl">
              一台安静、私密、始终在线的桌面智能设备，把对话、记忆、提醒和创作能力带进你的真实空间。
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-white px-6 text-sm font-semibold text-graphite transition hover:bg-ion"
                href="/product"
              >
                查看产品详情 <ArrowRight size={17} />
              </Link>
              <a
                className="inline-flex h-12 items-center justify-center rounded-full border border-white/18 px-6 text-sm font-semibold text-white/86 transition hover:border-white/42"
                href="#products"
              >
                探索系列
              </a>
            </div>
          </Reveal>
          <Reveal delay={0.12} className="relative">
            <Image
              priority
              src="/images/nova-hero.svg"
              alt="NOVA One AI hardware device hero render"
              width={1800}
              height={1100}
              className="w-full drop-shadow-2xl"
            />
          </Reveal>
        </div>
      </section>

      <section id="design" className="bg-mist px-5 py-24 text-graphite sm:px-8 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-slate-500">
              Design
            </p>
            <h2 className="mt-4 max-w-4xl text-4xl font-semibold tracking-[-0.02em] sm:text-6xl">
              像一件精密仪器，也像一位懂分寸的助手。
            </h2>
          </Reveal>
          <div className="mt-16 grid gap-5 md:grid-cols-3">
            {features.map((feature, index) => (
              <Reveal
                key={feature.title}
                delay={index * 0.08}
                className="rounded-[8px] border border-slate-200 bg-white p-7 shadow-sm"
              >
                <feature.icon className="mb-7 text-cyan-600" size={28} />
                <h3 className="text-xl font-semibold">{feature.title}</h3>
                <p className="mt-4 leading-7 text-slate-600">{feature.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="intelligence" className="bg-white px-5 py-24 text-graphite sm:px-8 lg:py-32">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <Image
              src="/images/nova-chip.svg"
              alt="NOVA Neural Core chip visualization"
              width={1200}
              height={900}
              className="rounded-[8px] shadow-2xl"
            />
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-cyan-700">
              Neural Core
            </p>
            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.02em] sm:text-6xl">
              为实时多模态而生。
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              NOVA Neural Core 将语音、视觉、日程和本地知识库放在同一个低延迟循环里。它能理解你正在做什么，也知道什么时候不该打扰。
            </p>
            <div className="mt-9 grid grid-cols-3 gap-4 text-center">
              {[
                ["18 TOPS", "端侧算力"],
                ["12 ms", "唤醒响应"],
                ["0 cloud", "隐私默认"]
              ].map(([value, label]) => (
                <div key={value} className="rounded-[8px] bg-slate-100 p-4">
                  <div className="text-xl font-semibold">{value}</div>
                  <div className="mt-1 text-xs text-slate-500">{label}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section id="products" className="bg-graphite px-5 py-24 sm:px-8 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <Reveal className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-ion/80">
              Collection
            </p>
            <h2 className="mx-auto mt-4 max-w-3xl text-4xl font-semibold tracking-[-0.02em] sm:text-6xl">
              三种外观，同一个私密智能核心。
            </h2>
          </Reveal>
          <div className="mt-16 grid gap-5 md:grid-cols-3">
            {products.map((product, index) => (
              <Reveal
                key={product}
                delay={index * 0.08}
                className="glass group rounded-[8px] p-5 transition hover:-translate-y-1"
              >
                <Image
                  src="/images/nova-detail.svg"
                  alt={`${product} NOVA One product render`}
                  width={1400}
                  height={1000}
                  className="aspect-[4/3] w-full rounded-[8px] object-cover"
                />
                <div className="mt-5 flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold">{product}</h3>
                    <p className="mt-1 text-sm text-white/58">NOVA One</p>
                  </div>
                  <Link
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white text-graphite transition group-hover:bg-ion"
                    href="/product"
                    aria-label={`查看 ${product}`}
                  >
                    <ArrowRight size={18} />
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-mist px-5 py-24 text-center text-graphite sm:px-8">
        <Reveal className="mx-auto max-w-3xl">
          <Waves className="mx-auto text-cyan-700" size={34} />
          <h2 className="mt-5 text-4xl font-semibold tracking-[-0.02em] sm:text-6xl">
            让智能回到你的空间里。
          </h2>
          <p className="mt-6 text-lg leading-8 text-slate-600">
            NOVA One 将在 2026 年秋季开放预订。现在先了解它如何改变你的桌面工作流。
          </p>
          <Link
            className="mt-9 inline-flex h-12 items-center justify-center gap-2 rounded-full bg-graphite px-6 text-sm font-semibold text-white transition hover:bg-slate-800"
            href="/product"
          >
            查看完整规格 <ArrowRight size={17} />
          </Link>
        </Reveal>
      </section>
    </main>
  );
}
