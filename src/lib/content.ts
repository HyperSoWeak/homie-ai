import { Content } from "@/types/content";

export const content: Record<"en" | "zh-tw", Content> = {
  en: {
    lang: "en",
    nav: {
      pricing: "Pricing",
      cta: "Join Waiting List",
    },
    pricing: {
      title: "Simple, Transparent Pricing",
      subtitle: "Choose the plan that fits your workflow",
      monthly: "Monthly",
      yearly: "Yearly",
      save: "Save 20%",
      plans: [
        {
          name: "General",
          price: "Free",
          period: "",
          desc: "Perfect for getting organized.",
          features: [
            "Basic calendar integration",
            "Manual prioritization",
            "Natural language create/edit",
          ],
          cta: "Join Waiting List",
        },
        {
          name: "Annual",
          price: "159 NTD",
          period: "/month",
          desc: "Save ~20%",
          features: [
            "AI optimization",
            "Real-time adjustments",
            "Priority suggestions",
            "Weekly insights",
          ],
          cta: "Join Waiting List",
          popular: true,
        },
        {
          name: "Monthly",
          price: "179 NTD",
          period: "/month",
          desc: "7-day free trial",
          features: [
            "AI optimization",
            "Real-time adjustments",
            "Priority suggestions",
            "Weekly insights",
          ],
          cta: "Join Waiting List",
        },
      ],
    },
    hero: {
      title: "Your AI Schedule Team — Built to Adapt to You",
      subtitle:
        "Meet Homie, the first AI-powered calendar that adjusts itself based on your energy, mood, workload, and unexpected changes",
      tagline: "Stop forcing yourself to fit your calendar. Let your calendar finally fit you.",
      cta: "Join Waiting List",
    },
    problem: {
      title: "You don’t need more productivity tools. You need a system that understands you",
      items: [
        {
          title: "Endless Reorganizing",
          desc: "You spend hours every week reorganizing your day.",
          solutionTitle: "Automated Dynamic Scheduling",
          solutionDesc: "Save hours of manual adjustments weekly. Keep your schedule always optimized.",
        },
        {
          title: "Fragile Plans",
          desc: "One unexpected task collapses your entire schedule.",
          solutionTitle: "High Resilience",
          solutionDesc: "Adapt to unexpected changes instantly. Your plan always keeps up with reality.",
        },
        {
          title: "Static Calendar",
          desc: "Your energy and focus change, but your calendar never does.",
          solutionTitle: "Energy-Based Management",
          solutionDesc: "Align tasks with your focus and energy levels. Do the right thing at the right time.",
        },
        {
          title: "Decision Fatigue",
          desc: "You know your priorities, but fragmented time makes it hard to decide when each task fits best.",
          solutionTitle: "Precision Execution",
          solutionDesc: "Stop decision fatigue. The system predicts the best starting point so you can focus on output.",
        },
        {
          title: "Solo Struggle",
          desc: "Working alone means no one helps you sort or reprioritize your tasks.",
          solutionTitle: "Digital Second Brain",
          solutionDesc: "Like a senior executive assistant, proactively organizing your rhythm and priorities.",
        },
        {
          title: "Fragmented Tools",
          desc: "Your calendars and todos live in separate apps, so you keep switching back and forth just to avoid overlaps or missed tasks.",
          solutionTitle: "All-in-One Integration",
          solutionDesc: "Seamlessly stitch calendar and todos together. Control every action in one single view.",
        },
      ],
    },
    solution: {
      title: "Your life is dynamic. Your schedule should be too",
      subtitle: "When your day falls apart, your plan doesn’t have to",
      today: "Today",
      date: "Wed, Jan 3",
      labelOriginal: "Original Plan",
      labelAdjusted: "Homie Adjusted",
      items: [
        {
          title: "Overslept?",
          desc: "Morning compresses automatically.",
          summary: "I've compressed your morning tasks and moved your sync so you can still finish on time.",
          reason: "Overslept? No stress. Homie optimizes the remaining hours so you don't have to play catch-up all day.",
        },
        {
          title: "Feeling anxious?",
          desc: "Tasks shift to a lighter mode.",
          summary: "I shifted your high-pressure meetings and added a short mindfulness walk.",
          reason: "Energy low? Let's prioritize gentle tasks to rebuild your momentum before tackling the big ones.",
        },
        {
          title: "Unexpected client request?",
          desc: "Everything reorders intelligently.",
          summary: "I reprioritized your afternoon to handle the emergency while shielding your deep work block.",
          reason: "Sudden request? Homie acts as your firewall, ensuring the chaos doesn't derail your most important goals.",
        },
        {
          title: "Heavy week?",
          desc: "Homie protects your focus time.",
          summary: "I cleared your secondary tasks and double-locked your focus blocks.",
          reason: "Overwhelmed? I'm guarding your time so you can actually think and produce high-quality work.",
        },
      ],
    },
    solutionSchedules: [
      // 0: Normal
      [
        { time: "9:00", task: "Deep Work", type: "work", duration: "2h" },
        { time: "11:00", task: "Team Sync", type: "meeting", duration: "1h" },
        { time: "12:00", task: "Lunch", type: "break", duration: "1h" },
        { time: "13:00", task: "Project Review", type: "work", duration: "1.5h" },
      ],
      // 1: Overslept
      [
        { time: "10:30", oldTime: "9:00", task: "Quick Sync", type: "meeting", duration: "30m", tag: "Shortened 30m" },
        { time: "11:00", oldTime: "10:00", task: "Deep Work", type: "work", duration: "1.5h", tag: "Moved +60m" },
        { time: "12:30", oldTime: "12:00", task: "Quick Lunch", type: "break", duration: "30m", tag: "Shortened 30m" },
        { time: "13:00", task: "Project Review", type: "work", duration: "1.5h", tag: "Protected" },
      ],
      // 2: Anxious
      [
        { time: "9:00", task: "Email Triage", type: "admin", duration: "45m", tag: "Lighter Mode" },
        { time: "9:45", task: "Walk", type: "break", duration: "15m", tag: "Added" },
        { time: "10:00", oldTime: "9:00", task: "Focus Time", type: "work", duration: "1h", tag: "Moved +60m" },
        { time: "11:00", oldTime: "10:00", task: "Team Sync", type: "meeting", duration: "1h", tag: "Deferred" },
      ],
      // 3: Unexpected
      [
        { time: "9:00", task: "Client Emergency", type: "urgent", duration: "1h", tag: "Priority" },
        { time: "10:00", oldTime: "9:00", task: "Deep Work", type: "work", duration: "1.5h", tag: "Moved +60m" },
        { time: "11:30", oldTime: "10:30", task: "Team Sync", type: "meeting", duration: "30m", tag: "Shortened 30m" },
      ],
      // 4: Heavy Week
      [
        { time: "9:00", task: "NO MEETINGS", type: "focus", duration: "3h", tag: "Auto-expanded" },
        { time: "12:00", task: "Lunch", type: "break", duration: "1h", tag: "Protected" },
        { time: "13:00", task: "Project Review", type: "work", duration: "1.5h", tag: "Protected" },
      ],
    ],
    dynamicScheduling: {
      title: "Dynamic Scheduling — built around your real life",
      subtitle: "Your AI team automatically:",
      items: [
        "Reorders tasks based on energy, context, and deadlines",
        "Rebuilds your day instantly when something unexpected happens",
        "Suggests the smartest next step based on your focus level",
        "Predicts overload and reshapes your week",
        "Reduces cognitive fatigue by doing the thinking for you",
      ],
      footer: "It’s not a tool — it’s five assistants supporting you 24/7.",
    },
    features: {
      title: "KEY FEATURES",
      items: [
        {
          title: "AI schedule think-tank",
          desc: "Three personalized schedule options tailored to your lifestyle. Pick the pace that fits your day.",
        },
        {
          title: "Natural conversation",
          desc: "Talk to Homie to adjust your plans. No manual dragging—just speak, and your schedule rebuilds instantly.",
        },
        {
          title: "Weekly behavior insights",
          desc: "Deep analysis of your productivity and energy patterns. Get personalized tips to optimize your rhythm.",
        },
        {
          title: "Unified calendars",
          desc: "Sync all your work and personal calendars into one seamless timeline. No more app-switching or conflicts.",
        },
        {
          title: "Smart prioritization",
          desc: "AI-driven task sorting based on urgency and energy. Know exactly what to do next, even when plans change.",
        },
      ],
    },
    companions: {
      title: "Meet your AI companion team",
      items: [
        {
          name: "Kai",
          role: "Precision & Productivity",
          desc: "Born in a future city where time is a battlefield, Kai was an elite commander who could cut chaos into perfect order. Cool, sharp, and quietly caring, he appears when your tasks get overwhelming.",
          quote: "I’ll handle the chaos. You just move forward.",
        },
        {
          name: "Luna",
          role: "Calm & Emotional Balance",
          desc: "From a quiet valley powered by emotions, Luna grew up sensing people’s inner storms. Soft-spoken and gentle, she adjusts your schedule based on how you feel, not just what you “should” do.",
          quote: "Let’s follow your pace today.",
        },
        {
          name: "Max",
          role: "Energy & Momentum",
          desc: "Forged in a land fueled by raw energy, Max turns tiny motivation into unstoppable momentum. He’s loud, warm, and the first to hype you up when you’re stuck.",
          quote: "Come on—let’s crush this!",
        },
        {
          name: "Sage",
          role: "Clarity & Strategy",
          desc: "Raised in a timeless library between worlds, Sage sees where every choice leads. Calm and wise, he helps you align daily tasks with your long-term goals.",
          quote: "You’re closer than you think.",
        },
        {
          name: "Zoe",
          role: "Flexibility & Gentle Support",
          desc: "Born in a world that changes every minute, Zoe learned to turn unpredictability into rhythm. Playful and adaptive, she fixes your day when everything gets derailed.",
          quote: "No worries—let’s reshape your day together.",
        },
      ],
    },
    midSectionCta: {
      title: "Ready to reclaim your time?",
      subtitle: "Join the waitlist and be the first to experience Homie.",
      cta: "Join Waiting List",
    },
    footer: {
      text: "Let's build your perfect rhythm.",
      cta: "Join Waiting List",
    },
    eaLink: "",
  },
  "zh-tw": {
    lang: "zh-tw",
    nav: {
      pricing: "價格方案",
      cta: "加入等待名單",
    },
    pricing: {
      title: "簡單透明的價格方案",
      subtitle: "選擇最適合你的工作流程的方案",
      monthly: "月繳",
      yearly: "年繳",
      save: "省下 20%",
      plans: [
        {
          name: "一般",
          price: "免費",
          period: "",
          desc: "適合想要開始井井有條的你。",
          features: ["基礎行事曆整合", "手動優先級", "自然語言建立/編輯"],
          cta: "加入等待名單",
        },
        {
          name: "年訂閱",
          price: "159 NTD",
          period: "/月",
          desc: "省下 ~20%",
          features: ["AI 最佳化", "即時調整", "優先級建議", "每週洞察"],
          cta: "加入等待名單",
          popular: true,
          
        },
        {
          name: "月訂閱",
          price: "179 NTD",
          period: "/月",
          desc: "7 天免費試用",
          features: ["AI 最佳化", "即時調整", "優先級建議", "每週洞察"],
          cta: "加入等待名單",
        },
      ],
    },
    hero: {
      title: "你的 AI 行程智囊團 ⸺ 專為「你」而生",
      subtitle: "認識 Homie：第一款會依照你的能量、情緒、工作量與突發事件自動調整的 AI 行事曆",
      tagline: "你終於不必再遷就行事曆，而是讓行事曆開始遷就你的生活。",
      cta: "加入等待名單",
    },
    problem: {
      title: "你不需要更多工具，你需要的是「懂你」的系統",
      items: [
        {
          title: "無止盡的重排",
          desc: "每週花好幾個小時在重新排程。",
          solutionTitle: "自動化動態排程",
          solutionDesc: "節省每週數小時的繁瑣手動調整，讓排程隨時保持最優狀態。",
        },
        {
          title: "脆弱的計畫",
          desc: "一件突發事情就毀掉一整天的安排。",
          solutionTitle: "高韌性的應變力",
          solutionDesc: "無懼突發狀況，系統會即時為你重新導航，讓計畫始終跟得上變化。",
        },
        {
          title: "僵化的行事曆",
          desc: "能量與專注度每天不同，但你的行事曆永遠不會改變。",
          solutionTitle: "能量導向管理",
          solutionDesc: "根據你的專注力與能量波動調整任務，在最合適的狀態做最對的事。",
        },
        {
          title: "決策疲勞",
          desc: "你知道該做什麼，只是常常時間碎片化不知道「什麼時候」最適合做。",
          solutionTitle: "精準執行建議",
          solutionDesc: "告別選擇困難，讓系統為你預判最佳切入點，你只需專注於產出。",
        },
        {
          title: "孤軍奮戰",
          desc: "一個人工作時，沒有人幫你排序、重整、抓節奏。",
          solutionTitle: "專屬數位大腦",
          solutionDesc: "像擁有一位資深特助，主動為你梳理節奏、整理優先順序。",
        },
        {
                    title: "工具分散",
                    desc: "你的日曆和待辦事項分散在不同 App 中，為了避免時間衝突或遺漏任務，你只能不斷來回切換。",
                    solutionTitle: "全方位一站整合",
          solutionDesc: "將日曆與待辦事項完美縫合，在單一視角下掌控所有行動。",
        },
      ],
    },
    solution: {
      title: "你的生活是動態的，你的行事曆也該如此",
      subtitle: "當你的生活突然變動，你的計畫不需要一起崩塌",
      today: "今天",
      date: "1月3日 (週三)",
      labelOriginal: "原始計畫",
      labelAdjusted: "Homie 調整後",
      items: [
        {
          title: "睡過頭？",
          desc: "早上的行程自動壓縮。",
          summary: "我壓縮了早上的瑣事並推遲了同步會議，確保你依然能準時完成今天最重要的目標。",
          reason: "睡過頭了？別擔心。Homie 會自動優化剩餘的時間，讓你不必整天都在趕進度。",
        },
        {
          title: "焦慮？",
          desc: "任務自動切換到較輕鬆的模式。",
          summary: "我幫你把高壓會議往後挪，並在中間穿插了一個短暫的散心時間。",
          reason: "能量低落？我們先從輕鬆的任務開始找回節奏，等能量回升再處理大魔王。",
        },
        {
          title: "客戶突然塞會議？",
          desc: "整天的行程智能重排。",
          summary: "我重新排列了下午的優先順序以處理突發狀況，同時嚴格保護你的深度工作時段。",
          reason: "計畫趕不上變化？Homie 是你的數位防火牆，不讓突發事件毀掉你一整天的產出。",
        },
        {
          title: "本週太忙？",
          desc: "Homie 自動保護你的專注時段。",
          summary: "我清理了次要任務，並為你的核心專案鎖定了更長的專注時段。",
          reason: "行程滿載？我會幫你守住時間，讓你能在安靜的環境下思考，產出高品質成果。",
        },
      ],
    },
    solutionSchedules: [
      // 0: Normal
      [
        { time: "9:00", task: "深度工作", type: "work", duration: "2小時", tag: "正軌" },
        { time: "11:00", task: "團隊同步", type: "meeting", duration: "1小時", tag: "正軌" },
        { time: "12:00", task: "午餐", type: "break", duration: "1小時" },
        { time: "13:00", task: "專案檢討", type: "work", duration: "1.5小時", tag: "正軌" },
      ],
      // 1: Overslept
      [
        { time: "10:30", oldTime: "9:00", task: "快速同步", type: "meeting", duration: "30分", tag: "縮短 30分" },
        { time: "11:00", oldTime: "10:00", task: "深度工作", type: "work", duration: "1.5小時", tag: "延後 +60分" },
        { time: "12:30", oldTime: "12:00", task: "快速午餐", type: "break", duration: "30分", tag: "縮短 30分" },
        { time: "13:00", task: "專案檢討", type: "work", duration: "1.5小時", tag: "已保護" },
      ],
      // 2: Anxious
      [
        { time: "9:00", task: "郵件處理", type: "admin", duration: "45分", tag: "輕量模式" },
        { time: "9:45", task: "散步", type: "break", duration: "15分", tag: "新增" },
        { time: "10:00", oldTime: "9:00", task: "專注時間", type: "work", duration: "1小時", tag: "延後 +60分" },
        { time: "11:00", oldTime: "10:00", task: "團隊同步", type: "meeting", duration: "1小時", tag: "已推遲" },
      ],
      // 3: Unexpected
      [
        { time: "9:00", task: "客戶緊急狀況", type: "urgent", duration: "1小時", tag: "優先處理" },
        { time: "10:00", oldTime: "9:00", task: "深度工作", type: "work", duration: "1.5小時", tag: "延後 +60分" },
        { time: "11:30", oldTime: "10:30", task: "團隊同步", type: "meeting", duration: "30分", tag: "縮短 30分" },
      ],
      // 4: Heavy Week
      [
        { time: "9:00", task: "無會議時段", type: "focus", duration: "3小時", tag: "自動擴展" },
        { time: "12:00", task: "午餐", type: "break", duration: "1小時", tag: "已保護" },
        { time: "13:00", task: "專案檢討", type: "work", duration: "1.5小時", tag: "已保護" },
      ],
    ],
    dynamicScheduling: {
      title: "動態排程 ⸺ 以你的真實狀態為核心",
      subtitle: "你的 AI 智囊團會自動：",
      items: [
        "根據能量、節奏與 deadline 重新排序任務",
        "突發狀況發生時，重建你一整天",
        "依你的專注度推薦「下一步最聰明的選擇」",
        "預測你將過載並提前重新分配",
        "減少你的大腦負擔，把「要怎麼排」交給 Homie",
      ],
      footer: "這不是工具，而是 五位 24/7 陪著你的 AI 助理。",
    },
    features: {
      title: "核心功能",
      items: [
        {
          title: "AI 排程智囊團",
          desc: "生成三套專屬排程，選一個最適合你今天節奏的版本。",
        },
        {
          title: "像聊天一樣重新安排",
          desc: "用語音或文字更新計畫，Homie 自動重建行程，徹底告別手動調整。",
        },
        {
          title: "每週行為洞察 & 生活節奏建議",
          desc: "分析你的效率與能量趨勢，提供個人化的生活節奏優化建議。",
        },
        {
          title: "整合所有行事曆",
          desc: "同步所有工作與個人日曆至單一時間軸，一處掌握所有安排。",
        },
        {
          title: "智慧優先級排序",
          desc: "根據緊急度與能量自動排序任務，讓你永遠知道現在最該做什麼。",
        },
      ],
    },
    companions: {
      title: "認識你的五位 AI 同伴",
      items: [
        {
          name: "Kai",
          role: "精準 × 效率",
          desc: "出生在以時間為戰場的未來城市，是操控混亂的天才指揮官。冷靜、銳利、但細心，他總在你最忙的時候出現。",
          quote: "混亂交給我，你只要往前走。",
        },
        {
          name: "Luna",
          role: "平靜 × 情緒節奏",
          desc: "來自情感能量之谷，能敏銳察覺他人的內在波動。柔和、溫暖，她會根據你的「感受」調整你的步伐。",
          quote: "今天，就跟著你的節奏走吧。",
        },
        {
          name: "Max",
          role: "動力 × 行動力",
          desc: "誕生於能量洪流之地，能把一點動力放大成巨大推力。外向、熱血，是你陷住時第一個把你拉起來的人。",
          quote: "走吧，我們一起衝過去！",
        },
        {
          name: "Sage",
          role: "策略 × 長期視野",
          desc: "在世界交界的永恆圖書館長大，看得見每條道路的未來。沉穩、有智慧，引導你把每天活成你想要的人生。",
          quote: "你比自己以為的更靠近目標。",
        },
        {
          name: "Zoe",
          role: "彈性 × 溫柔支持",
          desc: "生於瞬息萬變的世界，把混亂變成節奏是她的天賦。活潑、適應力強，專門救援你「整天被打亂」的時刻。",
          quote: "沒事的，我們一起重新來過。",
        },
      ],
    },
    midSectionCta: {
      title: "準備好找回你的時間了嗎？",
      subtitle: "加入等待名單，搶先體驗 Homie。",
      cta: "加入等待名單",
    },
    footer: {
      text: "讓我們一起打造最適合你的生活節奏。",
      cta: "加入等待名單",
    },
    eaLink: "",
  },
};