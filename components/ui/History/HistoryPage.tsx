import { Button } from '@/components/ui/uiKit/button'
import { Card, CardContent } from '@/components/ui/uiKit/Card/card'
import { translations } from '@/lib/translations'
import { ArrowDownRight, ArrowUpRight, History } from 'lucide-react'
import React, { useState } from 'react'
import styles from './HistoryPage.module.css'
import { useLanguageStore } from '@/store/languageStore'

const HistoryPage = () => {

  const { language } = useLanguageStore()
  const [currentPage, setCurrentPage] = useState(1)
  const tradesPerPage = 10
  const t = translations[language]

  const tradeHistory = [
    {
      id: 1,
      pair: "ETH/BNB",
      profit: "+24.50 USDT",
      profitPercent: "+2.07%",
      time: `1${t.hoursAgo}`,
      success: true,
      zScore: 2.1,
      duration: "45m",
    },
    {
      id: 2,
      pair: "BTC/SOL",
      profit: "+18.90 USDT",
      profitPercent: "+1.59%",
      time: `3${t.hoursAgo}`,
      success: true,
      zScore: 2.3,
      duration: "1h 20m",
    },
    {
      id: 3,
      pair: "ADA/DOT",
      profit: "-5.20 USDT",
      profitPercent: "-0.44%",
      time: `5${t.hoursAgo}`,
      success: false,
      zScore: 2.0,
      duration: "2h 15m",
    },
    {
      id: 4,
      pair: "MATIC/AVAX",
      profit: "+31.60 USDT",
      profitPercent: "+2.67%",
      time: `8${t.hoursAgo}`,
      success: true,
      zScore: 2.4,
      duration: "55m",
    },
    {
      id: 5,
      pair: "LINK/UNI",
      profit: "+12.80 USDT",
      profitPercent: "+1.08%",
      time: `12${t.hoursAgo}`,
      success: true,
      zScore: 2.2,
      duration: "1h 35m",
    },
    {
      id: 6,
      pair: "LINK/UNI",
      profit: "+12.80 USDT",
      profitPercent: "+1.08%",
      time: `12${t.hoursAgo}`,
      success: true,
      zScore: 2.2,
      duration: "1h 35m",
    },
    {
      id: 7,
      pair: "LINK/UNI",
      profit: "+12.80 USDT",
      profitPercent: "+1.08%",
      time: `12${t.hoursAgo}`,
      success: true,
      zScore: 2.2,
      duration: "1h 35m",
    },
    {
      id: 8,
      pair: "LINK/UNI",
      profit: "+12.80 USDT",
      profitPercent: "+1.08%",
      time: `12${t.hoursAgo}`,
      success: true,
      zScore: 2.2,
      duration: "1h 35m",
    },
    {
      id: 9,
      pair: "LINK/UNI",
      profit: "+12.80 USDT",
      profitPercent: "+1.08%",
      time: `12${t.hoursAgo}`,
      success: true,
      zScore: 2.2,
      duration: "1h 35m",
    },
    {
      id: 10,
      pair: "LINK/UNI",
      profit: "+12.80 USDT",
      profitPercent: "+1.08%",
      time: `12${t.hoursAgo}`,
      success: true,
      zScore: 2.2,
      duration: "1h 35m",
    },
    {
      id: 11,
      pair: "LINK/UNI",
      profit: "+12.80 USDT",
      profitPercent: "+1.08%",
      time: `12${t.hoursAgo}`,
      success: true,
      zScore: 2.2,
      duration: "1h 35m",
    },
    {
      id: 12,
      pair: "LINK/UNI",
      profit: "+12.80 USDT",
      profitPercent: "+1.08%",
      time: `12${t.hoursAgo}`,
      success: true,
      zScore: 2.2,
      duration: "1h 35m",
    },
    {
      id: 13,
      pair: "LINK/UNI",
      profit: "+12.80 USDT",
      profitPercent: "+1.08%",
      time: `12${t.hoursAgo}`,
      success: true,
      zScore: 2.2,
      duration: "1h 35m",
    },
    {
      id: 14,
      pair: "LINK/UNI",
      profit: "+12.80 USDT",
      profitPercent: "+1.08%",
      time: `12${t.hoursAgo}`,
      success: true,
      zScore: 2.2,
      duration: "1h 35m",
    },
    {
      id: 15,
      pair: "LINK/UNI",
      profit: "+12.80 USDT",
      profitPercent: "+1.08%",
      time: `12${t.hoursAgo}`,
      success: true,
      zScore: 2.2,
      duration: "1h 35m",
    },
    {
      id: 16,
      pair: "LINK/UNI",
      profit: "+12.80 USDT",
      profitPercent: "+1.08%",
      time: `12${t.hoursAgo}`,
      success: true,
      zScore: 2.2,
      duration: "1h 35m",
    },
    {
      id: 17,
      pair: "LINK/UNI",
      profit: "+12.80 USDT",
      profitPercent: "+1.08%",
      time: `12${t.hoursAgo}`,
      success: true,
      zScore: 2.2,
      duration: "1h 35m",
    },
    {
      id: 18,
      pair: "LINK/UNI",
      profit: "+12.80 USDT",
      profitPercent: "+1.08%",
      time: `12${t.hoursAgo}`,
      success: true,
      zScore: 2.2,
      duration: "1h 35m",
    },
    {
      id: 19,
      pair: "LINK/UNI",
      profit: "+12.80 USDT",
      profitPercent: "+1.08%",
      time: `12${t.hoursAgo}`,
      success: true,
      zScore: 2.2,
      duration: "1h 35m",
    },
    {
      id: 20,
      pair: "LINK/UNI",
      profit: "+12.80 USDT",
      profitPercent: "+1.08%",
      time: `12${t.hoursAgo}`,
      success: true,
      zScore: 2.2,
      duration: "1h 35m",
    },
    {
      id: 21,
      pair: "LINK/UNI",
      profit: "+12.80 USDT",
      profitPercent: "+1.08%",
      time: `12${t.hoursAgo}`,
      success: true,
      zScore: 2.2,
      duration: "1h 35m",
    },
  ]

  return (
    <div>
      <div className={styles.header}>
        <div className={styles.headerLeft}>
          <h2 className={styles.title}>
            {t.tradeHistory}
          </h2>
          <p className={styles.subtitle}>{t.last30Days}</p>
        </div>
        <div className={styles.headerRight}>
          <h2 className={styles.title}>
            {t.totalPl}
          </h2>
          <p className={styles.subtitlePL}>+235$ (+15%)</p>
        </div>
      </div>
      <div className={styles.tradesList}>
        {tradeHistory.slice((currentPage - 1) * tradesPerPage, currentPage * tradesPerPage).map((trade) => (
          <Card key={trade.id} className={styles.tradeCard}>
            <CardContent className={styles.tradeCardContent}>
              <div className={styles.tradeRow}>
                <div className={styles.tradeRowLeft}>
                  <div
                    className={
                      trade.success ? styles.tradeIconGreen : styles.tradeIconRed
                    }
                  >
                    {trade.success ? (
                      <ArrowUpRight className={styles.tradeArrowGreen} />
                    ) : (
                      <ArrowDownRight className={styles.tradeArrowRed} />
                    )}
                  </div>
                  <div>
                    <p className={styles.tradePair}>{trade.pair}</p>
                    <div className={styles.tradeInfo}>
                      <span>{trade.time}</span>
                    </div>
                  </div>
                </div>
                <div className={styles.tradeRowRight}>
                  <p className={trade.success ? styles.tradeProfitGreen : styles.tradeProfitRed}>
                    {trade.profit}
                  </p>
                  <p className={trade.success ? styles.tradePercentGreen : styles.tradePercentRed}>
                    {trade.profitPercent}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className={styles.pagination}>
        <Button
          variant="outline"
          className={styles.paginationBtn}
          onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
          disabled={currentPage === 1}
        >
          {t.previous}
        </Button>

        <div className={styles.paginationNumbers}>
          {Array.from({ length: Math.ceil(tradeHistory.length / tradesPerPage) }, (_, i) => (
            <Button
              key={i + 1}
              variant={currentPage === i + 1 ? "default" : "ghost"}
              className={
                currentPage === i + 1
                  ? styles.paginationNumberActive
                  : styles.paginationNumber
              }
              onClick={() => setCurrentPage(i + 1)}
            >
              {i + 1}
            </Button>
          ))}
        </div>

        <Button
          variant="outline"
          className={styles.paginationBtn}
          onClick={() =>
            setCurrentPage(Math.min(Math.ceil(tradeHistory.length / tradesPerPage), currentPage + 1))
          }
          disabled={currentPage === Math.ceil(tradeHistory.length / tradesPerPage)}
        >
          {t.next}
        </Button>
      </div>
    </div>
  )
}

export default HistoryPage