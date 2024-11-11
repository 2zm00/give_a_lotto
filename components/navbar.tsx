// components/navbar.tsx
'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'
import MenuBar from './menubar'

export default function Navbar() {
  return (
    <motion.nav 
      className="fixed top-0 left-0 right-0 z-50"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="bg-white/90 backdrop-blur-md shadow-sm rounded-[28px] mx-4 my-4">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex gap-1">
                <div className="w-3 h-3 rounded-full bg-[#00FF9D]" />
                <div className="w-3 h-3 rounded-full bg-[#4A90E2]" />
              </div>
              <span className="font-semibold text-gray-900/90">GIVE A LOT-TO</span>
            </Link>

            <div className="flex items-center gap-4">
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
          </div>
        </div>
      </div>
    </motion.nav>
  )
}