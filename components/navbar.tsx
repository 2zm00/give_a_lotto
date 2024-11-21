// components/navbar.tsx
'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'
import MenuBar from './menubar'
import { useState } from 'react'

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <motion.nav 
      className="fixed top-0 left-0 right-0 z-50"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="bg-white/90 backdrop-blur-md shadow-sm rounded-[28px] mx-4 my-4">
        <div className="container mx-auto px-4 sm:px-6 py-4">
          <div className="flex items-center justify-between">
            {/* 로고 영역 */}
            <Link href="/" className="flex items-center gap-2">
              <div className="flex gap-1">
                <div className="w-3 h-3 rounded-full bg-[#00FF9D]" />
                <div className="w-3 h-3 rounded-full bg-[#4A90E2]" />
              </div>
              <span className="font-semibold text-gray-900/90 hidden sm:block">
                GIVE A LOT-TO
              </span>
            </Link>

            {/* 데스크톱 메뉴 */}
            <div className="hidden md:flex items-center gap-4">
              <Link 
                href="/find-store" 
                className="px-6 py-2 rounded-full bg-white hover:bg-gray-50 transition-colors shadow-md"
              >
                주변 명당 찾기
              </Link>
              <Link 
                href="/ai-lotto" 
                className="px-6 py-2 rounded-full bg-mint text-white hover:bg-[#00E088] transition-colors shadow-md"
              >
                AI 로또 추첨
              </Link>
              <MenuBar />
            </div>

            {/* 모바일 메뉴 버튼 */}
            <div className="md:hidden flex items-center gap-2">
              <Link 
                href="/ai-lotto" 
                className="px-4 py-2 rounded-full bg-mint text-white text-sm hover:bg-[#00E088] transition-colors shadow-md"
              >
                AI 추첨
              </Link>
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <MenuBar />
              </button>
            </div>
          </div>

          {/* 모바일 드롭다운 메뉴 */}
          <motion.div
            initial={false}
            animate={isMobileMenuOpen ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
            className="md:hidden overflow-hidden"
          >
            <div className="py-4 space-y-2">
              <Link 
                href="/find-store" 
                className="block px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors"
              >
                주변 명당 찾기
              </Link>
              <Link 
                href="/auth" 
                className="block px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors"
              >
                로그인
              </Link>
              <Link 
                href="/auth/signup" 
                className="block px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors"
              >
                회원가입
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.nav>
  )
}