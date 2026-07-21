import Link from "next/link";

export function Header() {
  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-graphite/60 backdrop-blur-2xl">
      <nav className="mx-auto flex h-14 max-w-7xl items-center justify-between px-5 text-sm text-white/78 sm:px-8">
        <Link className="font-semibold tracking-[0.18em] text-white" href="/">
          NOVA
        </Link>
        <div className="hidden items-center gap-8 md:flex">
          <Link href="/#design">设计</Link>
          <Link href="/#intelligence">智能</Link>
          <Link href="/#products">产品</Link>
          <Link href="/product">详情</Link>
        </div>
        <Link
          className="rounded-full bg-white px-4 py-2 text-xs font-semibold text-graphite transition hover:bg-ion"
          href="/product"
        >
          了解 NOVA One
        </Link>
      </nav>
    </header>
  );
}
