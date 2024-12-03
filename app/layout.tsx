// app/layout.tsx
import { SessionProvider } from "next-auth/react";
import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/navbar'

export const metadata: Metadata = {
  title: 'GIVE A LOT-TO',
  description: 'AI 기반 로또 번호 추천 서비스',
  icons: {
    icon: [
      {
        url: '/lotto-icon.svg',
        type: 'image/svg+xml',
      }
    ],
    shortcut: [
      {
        url: '/lotto-icon.svg',
        type: 'image/svg+xml',
      }
    ],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <SessionProvider>
    <html lang="ko">
      <body className="min-h-screen bg-white vsc-initialized">
        {/* 배경 블러 원 */}
        <div className="fixed top-[-20%] left-[-10%] w-[40%] h-[40%] bg-gradient-to-r from-[#00FF9D] to-[#00FF9D]/50 rounded-full blur-[150px] opacity-70" />
        <div className="fixed bottom-[-20%] right-[-10%] w-[40%] h-[40%] bg-gradient-to-l from-[#4A90E2] to-[#4A90E2]/50 rounded-full blur-[150px] opacity-70" />
        
        {/* 네비게이션 바 */}
        <Navbar />

        {/* 메인 컨텐츠 */}
        <main className="relative min-h-[200vh] pt-24">
          {children}
        </main>
      </body>
    </html>
    </SessionProvider>
  )
}