// 語系字典
const translations = {
    zh: {
        "nav-home": "首頁",
        "nav-services": "服務項目",
        "nav-features": "核心優勢",
        "nav-contact": "聯絡我們",
        "hero-title": "專業鎖匠服務，守護您的安全",
        "hero-desc": "AXE LOCKSMITH 提供 24 小時快速開鎖、換鎖與安全系統升級，一通電話，專業團隊立刻出發。",
        "hero-btn-call": "緊急呼叫開鎖",
        "hero-btn-more": "了解服務",
        "services-title": "我們的服務",
        "services-subtitle": "無論是住宅、商業還是汽車鎖務，我們都能完美解決",
        "srv-1-title": "24H 緊急開鎖",
        "srv-1-desc": "不小心被鎖在門外？我們的團隊全天候待命，以最快速度抵達現場，提供無損開鎖服務。",
        "srv-2-title": "住宅換鎖與裝鎖",
        "srv-2-desc": "搬新家、鎖頭損壞或想提升居家安全？我們提供各式高品質安全門鎖的更換與安裝。",
        "srv-3-title": "汽車開鎖與配匙",
        "srv-3-desc": "車鑰匙遺忘在車內或遺失？專業技術解鎖各類型車款，不傷車身。",
        "srv-4-title": "電子鎖與安防升級",
        "srv-4-desc": "規劃與安裝現代智慧密碼鎖、指紋鎖，為您的住家或辦公室打造科技防護線。",
        "features-title": "為什麼選擇 AXE LOCKSMITH？",
        "feat-1-title": "快速響應",
        "feat-1-desc": "收到求助後火速出發，絕不讓您在寒風或烈日下久等。",
        "feat-2-title": "專業持牌技術人員",
        "feat-2-desc": "經驗豐富的專業鎖匠，技術精湛，誠實可靠，注重您的隱私與安全。",
        "feat-3-title": "價格透明",
        "feat-3-desc": "現場報價，無隱藏收費，讓您每一分錢都花得明明白白。",
        "footer-tagline": "您最信賴的鎖務安全專家",
        "footer-location": "服務範圍：大台北地區 / 鄰近區域 (可依實際修改)",
        "footer-cta-title": "需要立刻幫忙？",
        "footer-btn-call": "撥打服務專線"
    },
    en: {
        "nav-home": "Home",
        "nav-services": "Services",
        "nav-features": "Why Choose Us",
        "nav-contact": "Contact Us",
        "hero-title": "Professional Locksmith Services You Can Trust",
        "hero-desc": "AXE LOCKSMITH provides 24/7 emergency lockout, lock replacement, and security upgrades. One call, and our expert team is on the way.",
        "hero-btn-call": "Emergency Lockout Call",
        "hero-btn-more": "Our Services",
        "services-title": "Our Services",
        "services-subtitle": "From residential to commercial and automotive locksmithing, we've got you covered.",
        "srv-1-title": "24/7 Emergency Lockout",
        "srv-1-desc": "Locked out of your home or office? Our team is on standby 24/7 to get you back inside quickly and without damage.",
        "srv-2-title": "Lock Change & Installation",
        "srv-2-desc": "Moving into a new home or need to upgrade? We supply and install a wide range of high-security locks.",
        "srv-3-title": "Car Lockout & Key Services",
        "srv-3-desc": "Keys locked in the car or lost? Our professionals can unlock various vehicle models without scratching the body.",
        "srv-4-title": "Smart Locks & Security Upgrades",
        "srv-4-desc": "We install modern smart keypad and biometric fingerprint locks to build a high-tech security line for you.",
        "features-title": "Why Choose AXE LOCKSMITH?",
        "feat-1-title": "Fast Response Time",
        "feat-1-desc": "We dispatch immediately upon receiving your call. We won't keep you waiting in emergencies.",
        "feat-2-title": "Licensed & Certified Locksmiths",
        "feat-2-desc": "Experienced, reliable, and background-checked technicians who prioritize your safety and privacy.",
        "feat-3-title": "Transparent Pricing",
        "feat-3-desc": "Upfront quotes with absolutely no hidden fees. Know exactly what you're paying for.",
        "footer-tagline": "Your Trusted Locksmith & Security Specialist",
        "footer-location": "Service Area: Greater Taipei Area / Nearby Regions",
        "footer-cta-title": "Need Immediate Assistance?",
        "footer-btn-call": "Call Our Service Hotline"
    }
};

// 切換語言函式
function switchLang(lang) {
    // 1. 遍歷所有帶有 data-i18n 屬性的標籤並替換文字
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });

    // 2. 更新 HTML 的 lang 屬性（對 SEO 有利）
    document.documentElement.lang = lang === 'zh' ? 'zh-TW' : 'en';

    // 3. 切換按鈕的選取狀態樣式 (Active Class)
    document.getElementById('btn-zh').classList.remove('active');
    document.getElementById('btn-en').classList.remove('active');
    document.getElementById(`btn-${lang}`).classList.add('active');
}
