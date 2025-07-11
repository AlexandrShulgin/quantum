"use client"

import { useState} from "react"
import { Button } from "@/components/ui/uiKit/button"
import {
  Home,
  History,
  User,
  Info,
} from "lucide-react"

// Translations
import { translations } from "@/lib/translations"
import Main from "@/components/pages/Main/Main"
import About from "@/components/pages/About/About"
import Profile from "@/components/pages/Profile/Profile"
import HistoryPage from "@/components/pages/History/HistoryPage"
import styles from './page.module.css'
import { useLanguageStore } from "@/store/languageStore"
import { useUserStore } from "@/store/userStore"

export default function QuantumFund() {
  const [activeTab, setActiveTab] = useState("home")
  const { language, setEn, setRu } = useLanguageStore()
  const { type, setNew, setOld} = useUserStore()
  const t = translations[language]

  return (
    <div className={styles.root}>
      {/* Header */}
      <div className={styles.header}>
        <div className={styles.headerLeft}>
          <div className={styles.languageSwitcher}>
            <Button
              variant={type === "new" ? "default" : "ghost"}
              size="sm"
              className={type === "new" ? styles.langBtnActive : styles.langBtn}
              onClick={() => setNew()}
            >
              new
            </Button>
            <Button
              variant={type === "old" ? "default" : "ghost"}
              size="sm"
              className={type === "old" ? styles.langBtnActive : styles.langBtn}
              onClick={() => setOld()}
            >
              old
            </Button>
          </div>
          {/* Language Switcher */}
          <div className={styles.languageSwitcher}>
            <Button
              variant={language === "ru" ? "default" : "ghost"}
              size="sm"
              className={language === "ru" ? styles.langBtnActive : styles.langBtn}
              onClick={() => setRu()}
            >
              RU
            </Button>
            <Button
              variant={language === "en" ? "default" : "ghost"}
              size="sm"
              className={language === "en" ? styles.langBtnActive : styles.langBtn}
              onClick={() => setEn()}
            >
              EN
            </Button>
          </div>
          <div className={styles.statusWrapper}>
            <div className={styles.statusDot}></div>
            <span className={styles.statusText}>19:30:26</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className={styles.mainContent}>
        {activeTab === "home" && (
          <Main/>
        )}

        {activeTab === "history" && (
          <HistoryPage/>
        )}

        {activeTab === "profile" && (
          <Profile/>
        )}

        {activeTab === "about" && (
          <About/>
        )}
      </div>

      {/* Bottom Navigation */}
      <div className={styles.bottomNav}>
        <div className={styles.bottomNavInner}>
          {[
            { id: "home", icon: Home, label: t.home },
            { id: "history", icon: History, label: t.history },
            { id: "profile", icon: User, label: t.profile },
            { id: "about", icon: Info, label: t.about },
          ].map((tab) => (
            <Button
              key={tab.id}
              variant="ghost"
              className={
                activeTab === tab.id
                  ? styles.bottomNavBtnActive
                  : styles.bottomNavBtn
              }
              onClick={() => setActiveTab(tab.id)}
            >
              <tab.icon className={styles.bottomNavIcon} />
              <span className={styles.bottomNavLabel}>{tab.label}</span>
            </Button>
          ))}
        </div>
      </div>
    </div>
  )
}
