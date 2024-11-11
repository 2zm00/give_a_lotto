// components/navbar.tsx
'use client'
import Link from 'next/link'
import MenuBar from './menubar'

export default function Navbar() {
  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      <div className="bg-white/90 backdrop-blur-md shadow-sm rounded-[28px] mx-4 my-4">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* 로고 */}
            <Link href="/" className="flex items-center gap-2">
              <div className="flex gap-1">
                <div className="w-3 h-3 rounded-full bg-[#00FF9D]" />
                <div className="w-3 h-3 rounded-full bg-[#4A90E2]" />
              </div>
              <span className="font-semibold text-gray-800">GIVE A LOT-TO</span>
            </Link>

            {/* 네비게이션 링크 및 메뉴 */}
            <div className="flex items-center gap-4">
              <Link 
                href="/find-store" 
                className="px-6 py-2 rounded-full bg-white hover:bg-gray-50 transition-colors shadow-sm"
              >
                주변 명당 찾기
              </Link>
              <Link 
                href="/ai-lotto" 
                className="px-6 py-2 rounded-full bg-mint text-white hover:bg-[#00E088] transition-colors shadow-sm"
              >
                AI 로또 추첨
              </Link>
              <MenuBar />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}