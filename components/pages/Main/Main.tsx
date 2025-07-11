import { Badge } from '@/components/ui/uiKit/badge'
import { Button } from '@/components/ui/uiKit/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/uiKit/Card/card'
import { translations } from '@/lib/translations'
import { ArrowLeft, ArrowRight, ArrowUpRight, Minus, Plus, Settings, Shield, Zap } from 'lucide-react'
import React, { useState } from 'react'
import styles from './Main.module.css'
import StatisticsCard from '@/components/ui/StatisticsCard/StatisticsCard'
import { useLanguageStore } from '@/store/languageStore'

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
    {/* Active Trades Slider */}
    <Card className={styles.tradesSliderCard}>
      <CardHeader>
        <div className={styles.tradesSliderHeader}>
          <CardTitle className={styles.tradesSliderTitle}>
            <Zap className={styles.tradesSliderZapIcon} />
            {t.openTrades}
          </CardTitle>
          <div className={styles.tradesSliderNav}>
            <Button
              variant="ghost"
              size="icon"
              className={styles.tradesSliderNavBtn}
              onClick={() => setCurrentTradeIndex(Math.max(0, currentTradeIndex - 1))}
              disabled={currentTradeIndex === 0}
            >
              <ArrowLeft className={styles.tradesSliderNavIcon} />
            </Button>
            <span className={styles.tradesSliderNavText}>
              {currentTradeIndex + 1}/{activeTrades.length}
            </span>
            <Button
              variant="ghost"
              size="icon"
              className={styles.tradesSliderNavBtn}
              onClick={() => setCurrentTradeIndex(Math.min(activeTrades.length - 1, currentTradeIndex + 1))}
              disabled={currentTradeIndex === activeTrades.length - 1}
            >
              <ArrowRight className={styles.tradesSliderNavIcon} />
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        {activeTrades[currentTradeIndex] && (
          <div className={styles.tradesSliderContent}>
            <div className={styles.tradesSliderTradeHeader}>
              <div className={styles.tradesSliderTradeHeaderLeft}>
                <span className={styles.tradesSliderPair}>***USDT/***USDT</span>
                <Badge
                  className={
                    activeTrades[currentTradeIndex].status === t.active
                      ? styles.badgeActive
                      : activeTrades[currentTradeIndex].status === t.averaging
                      ? styles.badgeAveraging
                      : styles.badgeOther
                  }
                >
                  {activeTrades[currentTradeIndex].status}
                </Badge>
              </div>
              <span className={styles.tradesSliderTradeTime}>{activeTrades[currentTradeIndex].time}</span>
            </div>
            <div className={styles.privacyNotice}>
              <div className={styles.privacyNoticeHeader}>
                <Shield className={styles.privacyNoticeIcon} />
                <span className={styles.privacyNoticeTitle}>
                  {language === "ru" ? "Конфиденциальная информация" : "Confidential Information"}
                </span>
              </div>
              <p className={styles.privacyNoticeText}>{t.detailsAfterClose}</p>
            </div>
            <div className={styles.spreadAnalysisBox}>
              {activeTrades[currentTradeIndex].currentSpread && (
                <div className={styles.strategyBlock}>
                  <h4 className={styles.spreadAnalysisTitle}>{t.spreadAnalysis}</h4>
                  <div className={styles.spreadAnalysisGrid}>
                    <div>
                      <span className={styles.spreadAnalysisCurrentLabel}>{t.current}:</span>
                      <span className={styles.spreadAnalysisCurrentValue}>
                        {activeTrades[currentTradeIndex].currentSpread?.toFixed(6)}
                      </span>
                    </div>
                    <div style={{textAlign: 'end'}}>
                      <span className={styles.spreadAnalysisAvgLabel}>{t.average}:</span>
                      <span className={styles.spreadAnalysisAvgValue}>
                        {activeTrades[currentTradeIndex].avgSpread?.toFixed(6)}
                      </span>
                    </div>
                  </div>
                </div>
              )}
              {activeTrades[currentTradeIndex].strategy && (
                <div className={styles.strategyBlock}>
                  <p className={styles.strategyText}>{activeTrades[currentTradeIndex].strategy}</p>
                  <div className={styles.strategyRow}>
                    <span className={styles.strategyExpectedLabel}>{t.expectedPL}:</span>
                    <span className={styles.strategyExpectedValue}>{activeTrades[currentTradeIndex].expectedPL}</span>
                  </div>
                  <div className={styles.strategyRow}>
                    <span className={styles.strategyConfidenceLabel}>{t.confidence}:</span>
                    <span className={styles.strategyConfidenceValue}>{activeTrades[currentTradeIndex].confidence}%</span>
                  </div>
                </div>
              )}
              <div className={styles.strategyBlock}>
                <div className={styles.positionsList}>
                  {Object.entries(activeTrades[currentTradeIndex].positions).map(([key, pos]: [string, any]) => (
                    <div key={key} className={styles.positionRow}>
                      <span className={styles.positionPair}>***USDT:</span>
                      <div className={styles.positionInfo}>
                        <Badge
                          className={pos.side === t.long ? styles.positionBadgeLong : styles.positionBadgeShort}
                        >
                          {pos.side}
                        </Badge>
                        <span className={styles.positionAmount}>0.20</span>
                        {pos.avgPrice && <span className={styles.positionAvgPrice}>@ $50</span>}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className={styles.currentPLRow}>
              <span className={styles.currentPLLabel}>{t.currentPL}</span>
              <div className={styles.currentPLValueWrapper}>
                <span
                  className={
                    activeTrades[currentTradeIndex].currentPL?.startsWith("+")
                      ? styles.currentPLValuePositive
                      : styles.currentPLValueNegative
                  }
                >
                  {activeTrades[currentTradeIndex].currentPLUsdt}
                </span>
                <span
                  className={
                    activeTrades[currentTradeIndex].currentPL?.startsWith("+")
                      ? styles.currentPLPercentPositive
                      : styles.currentPLPercentNegative
                  }
                >
                  ({activeTrades[currentTradeIndex].currentPL})
                </span>
              </div>
            </div>
            {activeTrades[currentTradeIndex].level && (
              <div className={styles.averagingLevelRow}>
                <span className={styles.averagingLevelLabel}>{t.averagingLevel}</span>
                <Badge className={styles.averagingLevelBadge}>
                  {activeTrades[currentTradeIndex].level}
                </Badge>
              </div>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  </>
  )
}
export default Main