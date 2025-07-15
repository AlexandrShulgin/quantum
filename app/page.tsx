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
import HistoryPage from "@/components/ui/History/HistoryPage"
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
        Name Surname
      </div>

      {/* Main Content */}
      <div className={styles.mainContent}>
        {activeTab === "home" && (
          <Main/>
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
