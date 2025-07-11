import React, { useState } from 'react'
import { Card, CardContent } from '../uiKit/card'
import { ArrowUpRight, Minus, Plus } from 'lucide-react'
import styles from './StatisticsCard.module.css'
import { translations } from '@/lib/translations'
import { Button } from '@/components/ui/uiKit/button'
import { useLanguageStore } from '@/store/languageStore'
import { useUserStore } from '@/store/userStore'

const StatisticsCard = () => {
  
  const { language } = useLanguageStore()
  const { type } = useUserStore()
  const t = translations[language]

  const [realTimeData, setRealTimeData] = useState({
    totalPL: 2847.32,
    activeTrades: 3,
    marketVolatility: 18.5,
    lastTradeTime: 0,
    botUptime: 0,
    currentZScore: 1.85,
    opportunitiesFound: 12,
  })

  return (
    <Card className={styles.statisticsCard}>
      <CardContent className={styles.statisticsContent}>
        <div className={styles.statisticsHeader}>
          <div className={styles.statisticsHeaderLeft}>
            <p className={styles.statisticsTitle}>{type === "new" ? t.tradingStatistics : t.botStatistics}</p>
            <div className={styles.statisticsLiveWrapper}>
              <div className={styles.statisticsLiveDot}></div>
              <span className={styles.statisticsLiveText}>LIVE</span>
            </div>
          </div>
        </div>
        <div className={styles.statisticsPLWrapper}>
          <h2 className={styles.statisticsPL}>+${realTimeData.totalPL.toFixed(2)} USDT</h2>
          <div className={styles.statisticsPLTodayWrapper}>
            <ArrowUpRight className={styles.statisticsPLTodayIcon} />
            <span className={styles.statisticsPLTodayText}>
              {language === "ru" ? "Сегодня" : "Today"}: +{(realTimeData.totalPL * 0.02).toFixed(2)} USDT
            </span>
          </div>
        </div>
        <div className={styles.statisticsInfoWrapper}>
          <div className={styles.statisticsInfoRow}>
            <span>{type === "new" ? t.investedAmount : t.botCapital}</span>
            <span className={styles.statisticsInvested}>$5,000</span>
          </div>
          <div className={styles.statisticsInfoRow}>
            <span>{type === "new" ? t.currentValue : t.botProfit}</span>
            <span className={styles.statisticsCurrentValue}>$5,847</span>
          </div>
          <div className={styles.statisticsButtonsWrapper}>
            <Button className={styles.investButton}>
              <Plus className={styles.investButtonIcon} />
              {t.investMore}
            </Button>
            <Button
              variant="outline"
              className={styles.withdrawButton}
            >
              <Minus className={styles.withdrawButtonIcon} />
              {t.withdraw}
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export default StatisticsCard