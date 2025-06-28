// Test comment
'use client'

import React, { useState, useRef, useEffect } from 'react'
import { Send, Settings, Bot, User, Key, MessageSquare } from 'lucide-react'
import { cn } from '@/lib/utils'
import { getApiUrl } from '@/lib/config'

interface Message {
  id: string
  content: string
  role: 'user' | 'ai'
  timestamp: Date
}

interface ChatSettings {
  apiKey: string
  developerMessage: string
  model: string
}

export default function HomePage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray-800 mb-4">AI Chat Interface</h1>
        <p className="text-xl text-gray-600 mb-8">Welcome to the AI Chat Application</p>
        <div className="space-y-4">
          <p className="text-lg text-gray-700">✅ Next.js App is working!</p>
          <p className="text-lg text-gray-700">✅ Deployment successful!</p>
          <a 
            href="/test" 
            className="inline-block px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
          >
            Test Page
          </a>
        </div>
      </div>
    </div>
  )
} 