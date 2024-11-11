// components/menubar.tsx
'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function MenuBar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="relative">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
      >
        <div className="w-6 h-5 flex flex-col justify-between">
          <span className="w-full h-0.5 bg-gray-600 rounded-full" />
          <span className="w-full h-0.5 bg-gray-600 rounded-full" />
          <span className="w-full h-0.5 bg-gray-600 rounded-full" />
        </div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute right-0 mt-2 w-48 bg-white rounded-2xl shadow-lg overflow-hidden"
          >
            <div className="py-2">
              <button className="w-full px-4 py-2 text-left hover:bg-gray-100 transition-colors">
                로그인
              </button>
              <button className="w-full px-4 py-2 text-left hover:bg-gray-100 transition-colors">
                회원가입
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}