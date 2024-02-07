import HomeBanner from "@/components/banner/home-banner";
import HomeShortcuts from "@/components/shortcuts/home-shortcuts";
import { testvalley_logo } from "@/lib/constants/asset-constants";
import { Metadata } from "next";
import Image from "next/image";


export const metadata: Metadata = {
  title: 'Testvalley',
  description: '새 상품 구매부터 체험, 검증된 중고, 수리비 보장, 합리적인 중고판매까지 전자제품의 모든 것을 함께 하세요.'
}


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col gap-8">
        <HomeBanner />
        <HomeShortcuts />
    </main>
  );
}
