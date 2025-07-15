import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/uiKit/Card/card'
import { translations } from '@/lib/translations'
import { Avatar, AvatarFallback, AvatarImage } from '@radix-ui/react-avatar'
import { ArrowDownRight, ArrowUpRight, Settings } from 'lucide-react'
import React, { useState } from 'react'
import styles from './Profile.module.css'
import { Button } from '@/components/ui/uiKit/button'
import { useLanguageStore } from '@/store/languageStore'

const Profile = () => {

  const { language } = useLanguageStore()
  const [currentPage, setCurrentPage] = useState(1)
  const operatinsPerPage = 10
  const t = translations[language]

  const operationsHistory = [
    {
      id: 1,
      type: "Investment",
      amount: "24.50 USDT",
      date: "25.05.25 16:24",
    },
    {
      id: 2,
      type: "Withdraw",
      amount: "24.50 USDT",
      date: "25.05.25 16:24",
    },
    {
      id: 3,
      type: "Investment",
      amount: "24.50 USDT",
      date: "25.05.25 16:24",
    },
    {
      id: 4,
      type: "Investment",
      amount: "24.50 USDT",
      date: "25.05.25 16:24",
    },
    {
      id: 5,
      type: "Withdraw",
      amount: "24.50 USDT",
      date: "25.05.25 16:24",
    },
    {
      id: 6,
      type: "Investment",
      amount: "24.50 USDT",
      date: "25.05.25 16:24",
    },
    {
      id: 7,
      type: "Investment",
      amount: "24.50 USDT",
      date: "25.05.25 16:24",
    },
    {
      id: 8,
      type: "Withdraw",
      amount: "24.50 USDT",
      date: "25.05.25 16:24",
    },
    {
      id: 9,
      type: "Investment",
      amount: "24.50 USDT",
      date: "25.05.25 16:24",
    },
    {
      id: 10,
      type: "Investment",
      amount: "24.50 USDT",
      date: "25.05.25 16:24",
    },
    {
      id: 11,
      type: "Withdraw",
      amount: "24.50 USDT",
      date: "25.05.25 16:24",
    },
    {
      id: 12,
      type: "Investment",
      amount: "24.50 USDT",
      date: "25.05.25 16:24",
    },
  ]

  return (
    <div>
      {/* User Info Card */}
      <Card className={styles.userCard}>
        <CardContent className={styles.userCardContent}>
          <div className={styles.userInfoHeader}>
            <div>
              <h3 className={styles.userName}>Alex Johnson</h3>
              <p className={styles.userRole}>{t.quantumFundInvestor}</p>
            </div>
          </div>
          <div className={styles.userStats}>
            <div className={styles.userStatsRow}>
              <span className={styles.userStatsLabel}>{t.memberSince}</span>
              <span className={styles.userStatsValue} style={{fontWeight: '600'}}>{language === "ru" ? "Январь 2024" : "January 2024"}</span>
            </div>
            <div className={styles.userStatsRow}>
              <span className={styles.userStatsLabel}>{t.totalInvested}</span>
              <span className={styles.userStatsValue} style={{fontWeight: '600'}}>$5,000</span>
            </div>
            <div className={styles.userStatsRow}>
              <span className={styles.userStatsLabel}>{t.currentInvestment}</span>
              <span className={styles.userStatsValue} style={{fontWeight: '600'}}>$3,240</span>
            </div>
            <div className={styles.userStatsRow}>
              <span className={styles.userStatsLabel}>{t.yourProfitShare}</span>
              <span className={styles.userStatsValueGreen} style={{fontWeight: '600'}}>+$142.35 USDT</span>
            </div>
          </div>
        </CardContent>
      </Card>
      <h2 className={styles.titleHist}>
        {t.portfolioOperations}
      </h2>
      <div className={styles.tradesList}>
        {operationsHistory.slice((currentPage - 1) * operatinsPerPage, currentPage * operatinsPerPage).map((trade) => (
          <Card key={trade.id} className={styles.tradeCard}>
            <CardContent className={styles.tradeCardContent}>
              <div className={styles.tradeRow}>
                <div className={styles.tradeRowLeft}>
                  <div
                    className={
                      trade.type === 'Investment' ? styles.tradeIconGreen : styles.tradeIconRed
                    }
                  >
                    {trade.type === 'Investment' ? (
                      <ArrowUpRight className={styles.tradeArrowGreen} />
                    ) : (
                      <ArrowDownRight className={styles.tradeArrowRed} />
                    )}
                  </div>
                  <div>
                    <p className={styles.tradePair}>{trade.type}</p>
                    <div className={styles.tradeInfo}>
                      <span>{trade.date}</span>
                    </div>
                  </div>
                </div>
                <div className={styles.tradeRowRight}>
                  <p className={trade.type === 'Investment' ? styles.tradeProfitGreen : styles.tradeProfitRed}>
                    {trade.amount}
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
          {Array.from({ length: Math.ceil(operationsHistory.length / operatinsPerPage) }, (_, i) => (
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
            setCurrentPage(Math.min(Math.ceil(operationsHistory.length / operatinsPerPage), currentPage + 1))
          }
          disabled={currentPage === Math.ceil(operationsHistory.length / operatinsPerPage)}
        >
          {t.next}
        </Button>
      </div>

    </div>
  )
}

export default Profile