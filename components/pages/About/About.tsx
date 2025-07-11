import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/uiKit/Card/card'
import { Brain, DollarSign, Info, Settings, Shield, TrendingUp } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { translations } from "@/lib/translations"
import styles from './About.module.css'
import { useLanguageStore } from '@/store/languageStore'

const About = () => {

  const { language } = useLanguageStore()
  const t = translations[language]

  return (
    <div>
    <h2 className={styles.title}>
      <Info className={styles.titleIcon} />
      {t.aboutFund}
    </h2>

    {/* Main Description */}
    <Card className={styles.mainCard}>
      <CardContent className={styles.mainCardContent}>
        <div className={styles.mainCardHeader}>
          <Brain className={styles.mainCardIcon} />
          <div>
            <h3 className={styles.mainCardTitle}>{t.quantumFund}</h3>
            <p className={styles.mainCardSubtitle}>{t.aiPoweredTradingFund}</p>
          </div>
        </div>
        <p className={styles.mainCardDesc}>{t.aboutDescription}</p>
      </CardContent>
    </Card>

    {/* How It Works */}
    <Card className={styles.howItWorksCard}>
      <CardHeader>
        <CardTitle className={styles.howItWorksTitle}>
          <Settings className={styles.howItWorksIcon} />
          {t.howItWorks}
        </CardTitle>
      </CardHeader>
      <CardContent className={styles.howItWorksContent}>
        <div className={styles.howItWorksStep}>
          <div className={styles.howItWorksStepCircle}>1</div>
          <div>
            <h4 className={styles.howItWorksStepTitle}>{t.spreadAnalysis}</h4>
            <p className={styles.howItWorksStepDesc}>{t.spreadAnalysisDesc}</p>
          </div>
        </div>
        <div className={styles.howItWorksStep}>
          <div className={styles.howItWorksStepCircle}>2</div>
          <div>
            <h4 className={styles.howItWorksStepTitle}>{t.openingPositions}</h4>
            <p className={styles.howItWorksStepDesc}>{t.openingPositionsDesc}</p>
          </div>
        </div>
        <div className={styles.howItWorksStep}>
          <div className={styles.howItWorksStepCircle}>3</div>
          <div>
            <h4 className={styles.howItWorksStepTitle}>{t.riskManagement}</h4>
            <p className={styles.howItWorksStepDesc}>{t.riskManagementDesc}</p>
          </div>
        </div>
      </CardContent>
    </Card>

    {/* Profit Distribution */}
    <Card className={styles.profitCard}>
      <CardHeader>
        <CardTitle className={styles.profitTitle}>
          <DollarSign className={styles.profitIcon} />
          {t.profitDistribution}
        </CardTitle>
      </CardHeader>
      <CardContent className={styles.profitContent}>
        <div className={styles.profitBox}>
          <h4 className={styles.profitBoxTitle}>{t.howYouEarn}</h4>
          <p className={styles.profitBoxDesc}>{t.howYouEarnDesc}</p>
          <div className={styles.profitBoxList}>
            <div className={styles.profitBoxRow}>
              <span className={styles.profitBoxLabel}>{t.profitFee}:</span>
              <span className={styles.profitBoxValue}>20%</span>
            </div>
            <div className={styles.profitBoxRow}>
              <span className={styles.profitBoxLabel}>{t.yourProfitShare}:</span>
              <span className={styles.profitBoxValueGreen}>80%</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>

    {/* Performance Stats */}
    <Card className={styles.performanceCard}>
      <CardHeader>
        <CardTitle className={styles.performanceTitle}>
          <TrendingUp className={styles.performanceIcon} />
          {t.performanceMetrics}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className={styles.performanceGrid}>
          <div className={styles.performanceCell}>
            <p className={styles.performanceValueBlue}>+12.4%</p>
            <p className={styles.performanceLabel}>{t.monthlyReturn}</p>
          </div>
          <div className={styles.performanceCell}>
            <p className={styles.performanceValuePurple}>247</p>
            <p className={styles.performanceLabel}>{t.totalTrades}</p>
          </div>
          <div className={styles.performanceCell}>
            <p className={styles.performanceValueYellow}>51203$</p>
            <p className={styles.performanceLabel}>{t.botCapital}</p>
          </div>
          <div className={styles.performanceCell}>
            <p className={styles.performanceValueGreen}>+5101$</p>
            <p className={styles.performanceLabel}>{t.botProfit}</p>
          </div>
        </div>
      </CardContent>
    </Card>

    {/* Advantages */}
    <Card className={styles.advantagesCard}>
      <CardHeader>
        <CardTitle className={styles.advantagesTitle}>
          <Shield className={styles.advantagesIcon} />
          {t.advantages}
        </CardTitle>
      </CardHeader>
      <CardContent className={styles.advantagesContent}>
        <div className={styles.advantagesRow}>
          <div className={styles.advantagesDotGreen}></div>
          <p className={styles.advantagesText}>{t.advantage1}</p>
        </div>
        <div className={styles.advantagesRow}>
          <div className={styles.advantagesDotGreen}></div>
          <p className={styles.advantagesText}>{t.advantage2}</p>
        </div>
        <div className={styles.advantagesRow}>
          <div className={styles.advantagesDotGreen}></div>
          <p className={styles.advantagesText}>{t.advantage3}</p>
        </div>
        <div className={styles.advantagesRow}>
          <div className={styles.advantagesDotGreen}></div>
          <p className={styles.advantagesText}>{t.advantage4}</p>
        </div>
        <div className={styles.advantagesRow}>
          <div className={styles.advantagesDotGreen}></div>
          <p className={styles.advantagesText}>{t.advantage5}</p>
        </div>
      </CardContent>
    </Card>

    {/* Risks */}
    <Card className={styles.risksCard}>
      <CardHeader>
        <CardTitle className={styles.risksTitle}>
          <Shield className={styles.risksIcon} />
          {t.riskInformation}
        </CardTitle>
      </CardHeader>
      <CardContent className={styles.risksContent}>
        <p className={styles.risksDesc}>{t.riskDesc}</p>
        <div className={styles.risksList}>
          <div className={styles.risksRow}>
            <div className={styles.risksDotRed}></div>
            <p className={styles.risksText}>{t.risk1}</p>
          </div>
          <div className={styles.risksRow}>
            <div className={styles.risksDotRed}></div>
            <p className={styles.risksText}>{t.risk2}</p>
          </div>
          <div className={styles.risksRow}>
            <div className={styles.risksDotRed}></div>
            <p className={styles.risksText}>{t.risk3}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  </div>

  )
}

export default About