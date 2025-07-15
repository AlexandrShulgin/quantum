import { Badge } from '@/components/ui/uiKit/badge'
import { Button } from '@/components/ui/uiKit/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/uiKit/Card/card'
import { translations } from '@/lib/translations'
import { ArrowLeft, ArrowRight, ArrowUpRight, Minus, Plus, Settings, Shield, Zap } from 'lucide-react'
import React, { useState } from 'react'
import styles from './Main.module.css'
import StatisticsCard from '@/components/ui/StatisticsCard/StatisticsCard'
import { useLanguageStore } from '@/store/languageStore'
import HistoryPage from '../../ui/History/HistoryPage'

const Main = () => {

  const { language } = useLanguageStore()
  const t = translations[language]
  const [currentTradeIndex, setCurrentTradeIndex] = useState(0)
  
  const [realTimeData, setRealTimeData] = useState({
    totalPL: 2847.32,
    activeTrades: 3,
    marketVolatility: 18.5,
    lastTradeTime: 0,
    botUptime: 0,
    currentZScore: 1.85,
    opportunitiesFound: 12,
  })

  // Активные сделки бота (реальная структура)
  const activeTrades = [
    {
      id: 1,
      pair: "ETHUSDT/BNBUSDT",
      type: "spread",
      currentSpread: 11.792631,
      avgSpread: 0.945165,
      volatility: 22.186161,
      zScore: 0.489,
      strategy: t.spreadShouldDecrease,
      expectedPL: "2.300%",
      confidence: 97.5,
      positions: {
        eth: { side: t.short, amount: -0.23, leverage: "20x" },
        bnb: { side: t.long, amount: -0.9, leverage: "20x" },
      },
      currentPL: "-0.10%",
      currentPLUsdt: "-1.20 USDT",
      capital: 1184.78,
      status: t.active,
      time: `2${t.hoursAgo}`,
    },
    {
      id: 2,
      pair: "BNBUSDT/UNIUSDT",
      type: "averaging",
      level: "3/5",
      zScore: 0.95,
      prevZScore: -2.314,
      positions: {
        bnb: { side: t.long, amount: 3.6, avgPrice: 661.625 },
        uni: { side: t.short, amount: 310.5, avgPrice: 7.6669 },
      },
      currentPL: "-1.196%",
      currentPLUsdt: "-14.18 USDT",
      status: t.averaging,
      time: `4${t.hoursAgo}`,
    },
    {
      id: 3,
      pair: "BTCUSDT/ADAUSDT",
      type: "spread",
      currentSpread: 8.234521,
      avgSpread: 1.234567,
      volatility: 18.456789,
      zScore: 2.145,
      strategy: t.spreadShouldIncrease,
      expectedPL: "1.850%",
      confidence: 89.2,
      positions: {
        btc: { side: t.long, amount: 0.045, leverage: "20x" },
        ada: { side: t.short, amount: -1250.0, leverage: "20x" },
      },
      currentPL: "+0.45%",
      currentPLUsdt: "+5.34 USDT",
      capital: 1187.45,
      status: t.active,
      time: `1${t.hoursAgo}`,
    },
  ]

  // Статистика бота
  const botStats = {
    totalTrades: 247,
    profitable: 216,
    losses: 31,
    winRate: 87.4,
    totalPL: "+2847.32 USDT",
    avgPL: "+11.53 USDT",
    openTradesPL: "-10.04 USDT",
    settings: {
      zScoreEntry: 2.0,
      profitExit: "0.2%",
      maxTrades: 3,
      interval: "1h",
    },
  }

  return (
    <>
    <StatisticsCard/>
    <HistoryPage/>
  </>
  )
}
export default Main