import { Content } from "@/types/content";

export const content: Record<"en" | "zh-tw", Content> = {
  en: {
    nav: {
      pricing: "Pricing",
      cta: "Join Early Access",
    },
    pricing: {
      title: "Simple, Transparent Pricing",
      subtitle: "Choose the plan that fits your workflow.",
      monthly: "Monthly",
      yearly: "Yearly",
      save: "Save 20%",
      plans: [
        {
          name: "Free",
          price: "$0",
          period: "/month",
          desc: "Perfect for individuals getting started.",
          features: [
            "Basic AI scheduling",
            "1 AI Companion (Kai)",
            "Google Calendar integration",
            "Daily summary",
          ],
          cta: "Get Started",
        },
        {
          name: "Pro",
          price: "$12",
          period: "/month",
          desc: "For professionals who need full AI power.",
          features: [
            "Advanced AI scheduling",
            "All 5 AI Companions",
            "Unlimited calendar integrations",
            "Weekly insights & analytics",
            "Priority support",
          ],
          cta: "Start Free Trial",
          popular: true,
        },
        {
          name: "Team",
          price: "$29",
          period: "/month",
          desc: "Collaborate with your team seamlessly.",
          features: [
            "Everything in Pro",
            "Team scheduling",
            "Shared workspaces",
            "Admin dashboard",
            "SSO & Advanced security",
          ],
          cta: "Contact Sales",
        },
      ],
    },
    hero: {
      title: "Your AI Schedule Team — Built to Adapt to You.",
      subtitle:
        "Meet Homie, the first AI-powered calendar that adjusts itself based on your energy, mood, workload, and unexpected changes.",
      tagline: "Stop forcing yourself to fit your calendar. Let your calendar finally fit you.",
      cta: "Join Early Access",
    },
    problem: {
      title: "You don’t need more productivity tools. You need a system that understands you.",
      items: [
        {
          title: "Endless Reorganizing",
          desc: "You spend hours every week reorganizing your day.",
        },
        {
          title: "Fragile Plans",
          desc: "One unexpected task collapses your entire schedule.",
        },
        {
          title: "Static Calendar",
          desc: "Your energy and focus change, but your calendar never does.",
        },
        {
          title: "Decision Fatigue",
          desc: "You know your priorities, but fragmented time makes it hard to decide when each task fits best.",
        },
        {
          title: "Solo Struggle",
          desc: "Working alone means no one helps you sort or reprioritize your tasks.",
        },
      ],
    },
    solution: {
      title: "Your life is dynamic. Your schedule should be too.",
      subtitle: "When your day falls apart, your plan doesn’t have to.",
      items: [
        {
          title: "Overslept?",
          desc: "Morning compresses automatically.",
        },
        {
          title: "Feeling anxious?",
          desc: "Tasks shift to a lighter mode.",
        },
        {
          title: "Unexpected client request?",
          desc: "Everything reorders intelligently.",
        },
        {
          title: "Heavy week?",
          desc: "Homie protects your focus time.",
        },
      ],
    },
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
          desc: "Homie’s AI companion team creates three different schedule options based on your goals, constraints, and preferences — each with a different pace and lifestyle rhythm. You don’t start from a blank page; you simply pick the version that feels most like the way you want to live.",
        },
        {
          title: "Natural conversation",
          desc: "Instead of dragging blocks on a calendar, you just talk to Homie: 'I just got a last-minute meeting.' 'I’m really drained today.' 'I’m behind on this project.' Homie will automatically reorder tasks, adjust time blocks, and rebalance your day or week for you. No manual rescheduling. No decision fatigue.",
        },
        {
          title: "Weekly behavior insights",
          desc: "Each week, Homie analyzes how you actually spent your time: When you worked best, where you most often got stuck, what types of tasks drained you the most. Then it gives you personalized suggestions for how to adjust your schedule and rhythm for the coming week.",
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
    footer: {
      text: "Planning shouldn’t exhaust you. Let Homie handle it for you.",
      cta: "Join Early Access",
    },
  },
  "zh-tw": {
    nav: {
      pricing: "價格方案",
      cta: "加入 Early Access",
    },
    pricing: {
      title: "簡單透明的價格方案",
      subtitle: "選擇最適合你的工作流程的方案。",
      monthly: "月繳",
      yearly: "年繳",
      save: "省下 20%",
      plans: [
        {
          name: "免費版",
          price: "$0",
          period: "/月",
          desc: "適合剛開始使用的個人用戶。",
          features: ["基礎 AI 排程", "1 位 AI 同伴 (Kai)", "Google 日曆整合", "每日摘要"],
          cta: "立即開始",
        },
        {
          name: "專業版",
          price: "$12",
          period: "/月",
          desc: "適合需要完整 AI 功能的專業人士。",
          features: [
            "進階 AI 排程",
            "所有 5 位 AI 同伴",
            "無限日曆整合",
            "每週洞察與分析",
            "優先客服支援",
          ],
          cta: "免費試用",
          popular: true,
        },
        {
          name: "團隊版",
          price: "$29",
          period: "/月",
          desc: "適合團隊協作與管理。",
          features: [
            "包含專業版所有功能",
            "團隊排程",
            "共享工作區",
            "管理員後台",
            "SSO 與進階安全性",
          ],
          cta: "聯絡業務",
        },
      ],
    },
    hero: {
      title: "你的 AI 行程智囊團 ⸺ 專為「你」而生。",
      subtitle: "認識 Homie：第一款會依照你的能量、情緒、工作量與突發事件自動調整的 AI 行事曆。",
      tagline: "你終於不必再遷就行事曆，而是讓行事曆開始遷就你的生活。",
      cta: "加入 Early Access",
    },
    problem: {
      title: "你不需要更多工具，你需要的是「懂你」的系統。",
      items: [
        {
          title: "無止盡的重排",
          desc: "每週花好幾個小時在重新排程。",
        },
        {
          title: "脆弱的計畫",
          desc: "一件突發事情就毀掉一整天的安排。",
        },
        {
          title: "僵化的行事曆",
          desc: "能量與專注度每天不同，但你的行事曆永遠不會改變。",
        },
        {
          title: "決策疲勞",
          desc: "你知道該做什麼，只是常常時間碎片化不知道「什麼時候」最適合做。",
        },
        {
          title: "孤軍奮戰",
          desc: "一個人工作時，沒有人幫你排序、重整、抓節奏。",
        },
      ],
    },
    solution: {
      title: "你的生活是動態的，你的行事曆也該如此。",
      subtitle: "當你的生活突然變動，你的計畫不需要一起崩塌。",
      items: [
        {
          title: "睡過頭？",
          desc: "早上的行程自動壓縮。",
        },
        {
          title: "焦慮？",
          desc: "任務自動切換到較輕鬆的模式。",
        },
        {
          title: "客戶突然塞會議？",
          desc: "整天的行程智能重排。",
        },
        {
          title: "本週太忙？",
          desc: "Homie 自動保護你的專注時段。",
        },
      ],
    },
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
          desc: "Homie 的 AI 同伴會根據你的目標、限制與生活節奏，生成三套不同風格的排程方案。你不再從零開始，只需要選你最想要的生活方式。",
        },
        {
          title: "像聊天一樣重新安排",
          desc: "你不用再拖行程格子了，只要說：「我被臨時加一個會議。」「我今天真的沒力氣。」「我專案落後了。」Homie 就會自動重新排序、調整時段、重建你的行程。零手動。零糾結。",
        },
        {
          title: "每週行為洞察 & 生活節奏建議",
          desc: "每週 Homie 會分析你的真實使用情況：你何時最有效率、你最常卡在哪裡、什麼任務最消耗你。然後給你個人化的下週排程建議。你用越久，它就越懂你。",
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
    footer: {
      text: "排程不該讓你精疲力盡。讓 Homie 幫你搞定一切。",
      cta: "加入 Early Access",
    },
  },
};
