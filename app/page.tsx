// app/page.tsx
'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="container mx-auto px-4 flex flex-col items-center justify-center min-h-[calc(100vh-80px)]">
      <motion.div
        className="text-center space-y-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <motion.h1 
          className="text-[80px] font-bold text-[#4A4A4A] tracking-tight"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          GIVE A LOTTO
        </motion.h1>

        <motion.div 
          className="flex items-center justify-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="bg-[#4A4A4A] text-[#00FF9D] text-2xl font-bold px-8 py-4 rounded-full">AI</div>
          <div className="bg-mint text-white text-2xl font-bold px-12 py-4 rounded-[30px]">로또</div>
          <div className="bg-[#F5F5F5] text-[#4A4A4A] text-2xl font-bold px-12 py-4 rounded-[30px]">추첨기</div>
        </motion.div>

        <motion.p 
          className="text-[#4A4A4A]/80 text-lg mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.9 }}
        >
          로그인 하고 AI가 학습하는 로또 번호를 추첨 받아보세요.
        </motion.p>
      </motion.div>
    </div>
  )
}