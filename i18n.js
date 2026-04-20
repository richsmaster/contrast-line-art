/* =============================================
   SGM – i18n Language Toggle System
   Arabic (default, RTL) ⟷ English (LTR)
   IBM Plex Sans Arabic font for both languages
   ============================================= */

const SGM_I18N = {

  /* ======================================
     SHARED ELEMENTS (index + anbar pages)
  ====================================== */
  shared: {
    // Navbar
    'logo-sub':         { ar: 'نظام إدارة المولدات الذكية', en: 'Smart Generators Management' },
    'nav-home':         { ar: 'الرئيسية',       en: 'Home' },
    'nav-features':     { ar: 'المميزات',        en: 'Features' },
    'nav-systems':      { ar: 'الأنظمة',         en: 'Systems' },
    'nav-benefits':     { ar: 'الفوائد',         en: 'Benefits' },
    'nav-anbar':        { ar: '<i class="fas fa-landmark"></i> محافظة الأنبار', en: '<i class="fas fa-landmark"></i> Anbar Gov.' },
    'btn-get-started':  { ar: 'ابدأ الآن',        en: 'Get Started' },
    'footer-bottom':    { ar: null, en: null }, // handled separately

    // Mobile menu
    'mob-home':     { ar: 'الرئيسية',  en: 'Home' },
    'mob-features': { ar: 'المميزات', en: 'Features' },
    'mob-systems':  { ar: 'الأنظمة',  en: 'Systems' },
    'mob-benefits': { ar: 'الفوائد',  en: 'Benefits' },
    'mob-anbar':    { ar: '<i class="fas fa-landmark"></i> محافظة الأنبار', en: '<i class="fas fa-landmark"></i> Anbar Gov.' },
    'mob-contact':  { ar: 'تواصل معنا', en: 'Contact Us' },
  },

  /* ======================================
     INDEX PAGE TRANSLATIONS
  ====================================== */
  index: {
    // Nav
    'nav-stats':    { ar: 'الإحصائيات', en: 'Statistics' },
    'nav-contact':  { ar: 'تواصل معنا', en: 'Contact' },
    'mob-stats':    { ar: 'الإحصائيات', en: 'Statistics' },

    // Hero
    'hero-badge':   { ar: '<i class="fas fa-microchip"></i><span>الجيل القادم في إدارة الطاقة</span>', en: '<i class="fas fa-microchip"></i><span>Next-Gen Power Management</span>' },
    'hero-title':   { ar: '<span class="gradient-text">نظام إدارة</span><br/><span class="white-text">المولدات الذكية</span>', en: '<span class="gradient-text">Smart Generators</span><br/><span class="white-text">Management</span>' },
    'hero-subtitle':{ ar: 'منصة ذكية متكاملة لمراقبة المولدات الكهربائية في الوقت الفعلي، وإدارة المشتركين، والفواتير الإلكترونية، وخرائط GIS التفاعلية — نحو شفافية حقيقية وكفاءة في خدمة المجتمع.', en: 'A fully integrated smart platform for real-time generator monitoring, subscriber management, electronic billing, and interactive GIS mapping — towards true transparency and efficiency in community service.' },
    'btn-explore':  { ar: '<i class="fas fa-shield-halved"></i> ادخل للنظام', en: '<i class="fas fa-shield-halved"></i> Enter System' },
    'btn-systems':  { ar: '<i class="fas fa-layer-group"></i> استكشف المميزات', en: '<i class="fas fa-layer-group"></i> Explore Features' },

    // Hero stats labels (inside hero-stats div)
    'scroll-indicator': { ar: null, en: null },

    // Anbar banner
    'btn-anbar-page': { ar: '<i class="fas fa-arrow-left"></i> اكتشف صفحة الأنبار', en: 'Discover Anbar Page <i class="fas fa-arrow-right"></i>' },

    // Features Section
    'feat-realtime':  { ar: null, en: null },
    'feat-security':  { ar: null, en: null },
    'feat-mobile':    { ar: null, en: null },
    'feat-analytics': { ar: null, en: null },
    'feat-gis':       { ar: null, en: null },
    'feat-payment':   { ar: null, en: null },

    // Stats Section
    'btn-stats-cta': { ar: '<i class="fas fa-arrow-left"></i> ابدأ رحلتك معنا', en: 'Start Your Journey <i class="fas fa-arrow-right"></i>' },

    // Contact Form
    'btn-submit':    { ar: '<i class="fas fa-paper-plane"></i> إرسال الرسالة', en: '<i class="fas fa-paper-plane"></i> Send Message' },
  },

  /* ======================================
     TEXT NODE TRANSLATIONS (innerHTML)
     Used for sections with complex markup
  ====================================== */
  sections: {
    // Features
    features: {
      ar: {
        tag: 'القدرات الأساسية',
        title: 'مميزات قوية لـ<span class="gradient-text">إدارة عصرية</span>',
        desc: 'مجموعة شاملة من الأدوات الذكية المصممة لتوفير رؤية كاملة والسيطرة التامة على كل شبكة مولدات.',
        cards: [
          { h: 'مراقبة فورية مباشرة',   p: 'تتبع حالة المولدات مباشرةً مع تدفق البيانات كل 3 ثوانٍ عبر تقنية WebSocket المتقدمة — الفولت، الأمبير، الوقود، وساعات التشغيل بين يديك.',   tag: 'WebSocket · بيانات حية' },
          { h: 'أمان وشفافية كاملة',    p: 'حماية شاملة للبيانات مع شفافية تامة في التسعير والعمليات، وتوثيق إلكتروني متكامل لكل معاملة وعملية تشغيل.',                              tag: 'مشفّر · قابل للتدقيق' },
          { h: 'تطبيق موبايل ذكي',      p: 'تطبيق مواطن سهل الاستخدام يتيح للمشتركين عرض حساباتهم، دفع الفواتير إلكترونياً، ورفع الشكاوى — في أي وقت ومن أي مكان.',              tag: 'iOS · Android' },
          { h: 'تقارير وتحليلات متقدمة', p: 'تقارير إحصائية مفصلة وتحليلات دقيقة تدعم صنع القرار، وتحسين الخدمات، وقياس الأداء عبر كامل الشبكة.',                               tag: 'ذكاء أعمال · رؤى متقدمة' },
          { h: 'خرائط GIS التفاعلية',   p: 'نظام جغرافي متطور لتحديد مواقع المولدات، وتصوير كثافة المشتركين، ودعم التخطيط والرقابة والاستجابة للطوارئ.',                          tag: 'GIS · بيانات جيومكانية' },
          { h: 'الدفع الإلكتروني الآمن', p: 'بوابة دفع إلكترونية آمنة ومتعددة الطرق تضمن تحصيل المستحقات، وتقلل من التأخير في الدفع، وتبسّط التسوية المالية.',                      tag: 'آمن · متعدد البوابات' },
        ],
      },
      en: {
        tag: 'Core Capabilities',
        title: 'Powerful Features for <span class="gradient-text">Modern Management</span>',
        desc: 'A comprehensive suite of intelligent tools designed to provide full visibility and total control over every generator network.',
        cards: [
          { h: 'Real-Time Monitoring',      p: 'Track generator status live with data streaming every 3 seconds via advanced WebSocket technology — voltage, current, fuel, and runtime at your fingertips.',          tag: 'WebSocket · Live Data' },
          { h: 'Security & Transparency',   p: 'Comprehensive data protection with full transparency in pricing and operations, and complete electronic documentation for every transaction.',                       tag: 'Encrypted · Auditable' },
          { h: 'Smart Mobile App',          p: 'A citizen-friendly app allowing subscribers to view accounts, pay bills electronically, and submit complaints — anytime, anywhere.',                               tag: 'iOS · Android' },
          { h: 'Analytics & Reports',       p: 'Detailed statistical reports and precise analytics to support decision-making, service improvement, and performance benchmarking across the entire network.',       tag: 'BI · Advanced Insights' },
          { h: 'Interactive GIS Maps',      p: 'An advanced geospatial system for locating generators, visualizing subscriber density, and supporting planning, oversight, and emergency response.',               tag: 'GIS · Geospatial Data' },
          { h: 'Secure Electronic Payment', p: 'A secure, multi-method electronic payment gateway that ensures collection of dues, reduces payment delays, and simplifies financial reconciliation.',            tag: 'Secure · Multi-gateway' },
        ],
      },
    },

    // Systems
    systems: {
      ar: {
        tag: 'الأنظمة المتخصصة',
        title: 'منظومة متكاملة لـ<span class="gradient-text">كل الأطراف</span>',
        desc: 'أنظمة مصممة خصيصاً لتلبية احتياجات الجهات الرقابية، والمختار، وأصحاب المولدات، والمواطنين.',
        central: { badge: 'قيادة مركزية', title: 'نظام الإشراف المركزي', p: 'لوحة تحكم قوية للجهات الرقابية لمراقبة جميع شبكات المولدات، تحديد التسعيرة، ومعالجة طلبات الاشتراك — مع نظام تنبيهات آلي متطور من واجهة موحدة.', li: ['لوحة مراقبة شاملة للشبكة','التحكم في التسعيرة بشكل ديناميكي','سير عمل الموافقة على الاشتراكات','نظام تنبيهات آلي متطور'] },
        mukhtar: { badge: 'الممثل المحلي', title: 'نظام المختار الذكي', p: 'أداة مخصصة للمختار لتسجيل المشتركين الجدد، رفع الوثائق الرسمية، متابعة تقدم الطلبات، وتحديث بيانات السكان داخل دائرته.', li: ['تسجيل المشتركين','إدارة الوثائق','متابعة الطلبات'] },
        accountant: { badge: 'مالية المشغّل', title: 'نظام محاسب المولد', p: 'منصة محاسبية متكاملة لأصحاب المولدات لإدارة دورات الفوترة، وتتبع المدفوعات، وإنتاج تقارير مالية دقيقة مع مسارات تدقيق كاملة.', li: ['فوترة الاشتراكات','تتبع المدفوعات','التقارير المالية'] },
        citizen: { badge: 'تطبيق المواطن', title: 'تطبيق مشتركتي', p: 'تجربة موبايل سلسة للمواطنين لعرض تفاصيل الاشتراك، متابعة توافر المولد، الدفع إلكترونياً، وتقديم الشكاوى — كل ذلك في تطبيق واحد.', li: ['تفاصيل الاشتراك','الدفع الإلكتروني','تقديم الشكاوى'] },
        gis: { badge: 'ذكاء جيومكاني', title: 'نظام الخريطة الذكية GIS', p: 'يعرض مواقع المولدات ومناطق المشتركين على خريطة GIS تفاعلية غنية — تمكين المخططين والجهات الأمنية والمطورين بالذكاء المكاني لتحسين توزيع الموارد وقرارات التنمية العمرانية.', li: ['رسم خرائط مواقع المولدات','تصوير مناطق المشتركين','دعم التخطيط والأمن','أدوات قرارات التنمية'] },
      },
      en: {
        tag: 'Specialized Systems',
        title: 'A Complete Ecosystem for <span class="gradient-text">Every Stakeholder</span>',
        desc: 'Purpose-built systems designed to meet the needs of regulators, local representatives, generator owners, and citizens.',
        central: { badge: 'Central Command', title: 'Central Oversight System', p: 'A powerful control dashboard for regulatory bodies to monitor all generator networks, set pricing, and process subscription requests — with an advanced automated alert system from a unified interface.', li: ['Comprehensive network monitoring dashboard','Dynamic pricing controls','Subscription approval workflows','Advanced automated alert system'] },
        mukhtar: { badge: 'Local Representative', title: 'Smart Mukhtar System', p: 'A dedicated tool for the local representative to register new subscribers, upload official documents, track application progress, and update resident data within their district.', li: ['Subscriber registration','Document management','Application tracking'] },
        accountant: { badge: 'Operator Finance', title: 'Generator Accounting System', p: 'An integrated accounting platform for generator operators to manage billing cycles, track payments, and produce accurate financial reports with full audit trails.', li: ['Subscription billing','Payment tracking','Financial reports'] },
        citizen: { badge: 'Citizen App', title: 'Subscriber App', p: 'A seamless mobile experience for citizens to view subscription details, monitor generator availability, pay electronically, and submit complaints — all in one app.', li: ['Subscription details','Electronic payment','Complaint submission'] },
        gis: { badge: 'Geospatial Intelligence', title: 'Smart GIS Map System', p: 'Displays generator locations and subscriber zones on a rich, interactive GIS map — empowering planners, security bodies, and developers with spatial intelligence for better resource allocation and urban development decisions.', li: ['Generator location mapping','Subscriber zone visualization','Planning & security support','Development decision tools'] },
      },
    },

    // Benefits
    benefits: {
      ar: {
        tag: 'لماذا SGM', title: 'مبني لـ<span class="gradient-text">أثر حقيقي</span>', desc: 'يحوّل SGM طريقة عمل شبكات المولدات — محققاً قيمة قابلة للقياس للمشغلين والجهات الرقابية والمجتمعات على حد سواء.',
        items: [
          { h: 'القضاء على تسريب الإيرادات', p: 'الفوترة الآلية والمدفوعات الإلكترونية تسد ثغرات التحصيل، وتضمن محاسبة كل كيلوواط.' },
          { h: 'توحيد العمليات المتفرقة', p: 'منصة واحدة، خمسة أنظمة متكاملة — تستبدل السجلات الورقية وجداول البيانات المنفصلة بمصدر حقيقة موحد.' },
          { h: 'استجابة أسرع للحوادث', p: 'التنبيهات الفورية والبيانات الحية تعني رصد المشكلات في ثوانٍ لا ساعات — تقليل وقت التوقف لآلاف المشتركين.' },
          { h: 'الامتثال التنظيمي', p: 'توثيق إلكتروني كامل ومسارات تدقيق تضمن التحقق من كل عملية، ودعم الرقابة الحكومية والمساءلة.' },
          { h: 'تمكين المواطن', p: 'يكتسب المواطنون رؤية واضحة لحالة المولد وتسعيراً شفافاً وقنوات دفع سهلة — بناء الثقة والرضا.' },
          { h: 'التخطيط العمراني القائم على البيانات', p: 'تحليلات GIS وبيانات الاستهلاك تزود السلطات بذكاء قابل للتنفيذ لاستثمار البنية التحتية وتخطيط المدن.' },
        ],
        pfHeader: 'كيف يعمل SGM',
        pfSteps: ['ربط المولد', 'بث البيانات مباشرة', 'منصة SGM', 'جميع الأطراف'],
      },
      en: {
        tag: 'Why SGM', title: 'Built for <span class="gradient-text">Real Impact</span>', desc: 'SGM transforms how generator networks operate — delivering measurable value to operators, regulators, and communities alike.',
        items: [
          { h: 'Eliminate Revenue Leakage', p: 'Automated billing and electronic payments close collection gaps, ensuring accountability for every kilowatt.' },
          { h: 'Unify Fragmented Operations', p: 'One platform, five integrated systems — replacing paper records and disconnected spreadsheets with a single source of truth.' },
          { h: 'Faster Incident Response', p: 'Instant alerts and live data mean issues are detected in seconds, not hours — reducing downtime for thousands of subscribers.' },
          { h: 'Regulatory Compliance', p: 'Full electronic documentation and audit trails verify every operation, supporting government oversight and accountability.' },
          { h: 'Empower Citizens', p: 'Citizens gain clear visibility into generator status, transparent pricing, and easy payment channels — building trust and satisfaction.' },
          { h: 'Data-Driven Urban Planning', p: 'GIS analytics and consumption data provide authorities with actionable intelligence for infrastructure investment and city planning.' },
        ],
        pfHeader: 'How SGM Works',
        pfSteps: ['Connect Generator', 'Live Data Stream', 'SGM Platform', 'All Stakeholders'],
      },
    },

    // Stats
    stats: {
      ar: { tag: 'بالأرقام', title: 'نتائج <span class="gradient-text">قابلة للقياس</span>', desc: 'يحقق SGM تحسينات كمية في كل جانب من جوانب تشغيل شبكة المولدات — من موثوقية وقت التشغيل إلى الشفافية المالية.', labels: ['مولد مُدار', 'مشترك نشط', 'وقت تشغيل المنصة', 'منطقة مغطاة'], cta: '<i class="fas fa-arrow-left"></i> ابدأ رحلتك معنا' },
      en: { tag: 'By The Numbers', title: 'Measurable <span class="gradient-text">Results</span>', desc: 'SGM delivers quantifiable improvements across every dimension of generator network operations — from uptime reliability to financial transparency.', labels: ['Generators Managed', 'Active Subscribers', 'Platform Uptime', 'Areas Covered'], cta: 'Start Your Journey <i class="fas fa-arrow-right"></i>' },
    },

    // App CTA
    appCta: {
      ar: { tag: 'موبايل أولاً', title: 'شبكتك في <span class="gradient-text">جيبك</span>', desc: 'تطبيق SGM يضع كامل قوة المنصة في يدك على iOS وAndroid. راقب، ادفع، أبلّغ، وابق على تواصل — في المكتب أو في الميدان.', appStore: 'حمّل من', playStore: 'احصل عليه من' },
      en: { tag: 'Mobile First', title: 'Your Network, <span class="gradient-text">In Your Pocket</span>', desc: 'The SGM app puts the full power of the platform in your hands on iOS and Android. Monitor, pay, report, and stay connected — in the office or in the field.', appStore: 'Download on the', playStore: 'Get it on' },
    },

    // Contact
    contact: {
      ar: { tag: 'تواصل معنا', title: 'جاهز لـ<span class="gradient-text">تحويل</span> شبكتك؟', desc: 'أرسل لنا رسالة وسيتواصل فريقنا معك خلال 24 ساعة لمناقشة كيف يمكن لـ SGM أن يخدم عملياتك.', ci: [{ h: 'الدعم والمبيعات', p: 'فريقنا متخصص في مساعدتك للاستفادة القصوى من منصة SGM.' },{ h: 'أمان المؤسسات', p: 'تشفير بمستوى بنكي وامتثال تنظيمي لأكثر بياناتك التشغيلية حساسية.' },{ h: 'نشر سريع', p: 'من التعاقد إلى النظام الحي في أسبوعين فقط مع الإعداد الموجّه.' }], form: { name: 'الاسم الكامل', namePh: 'اسمك الكامل', email: 'البريد الإلكتروني', emailPh: 'you@organization.com', org: 'المنظمة / الجهة', orgPh: 'شركتك أو بلديتك', role: 'الدور الوظيفي', rolePh: 'اختر دورك...', msg: 'رسالتك', msgPh: 'أخبرنا عن شبكة المولدات لديك ومتطلباتك...', submit: '<i class="fas fa-paper-plane"></i> إرسال الرسالة', success: 'تم إرسال رسالتك! سنتواصل معك قريباً.' }, roles: ['جهة رقابية','مشغّل مولدات','مختار / ممثل محلي','مطور / متكامل','أخرى'] },
      en: { tag: 'Get In Touch', title: 'Ready to <span class="gradient-text">Transform</span> Your Network?', desc: 'Send us a message and our team will reach out within 24 hours to discuss how SGM can serve your operations.', ci: [{ h: 'Support & Sales', p: 'Our team is dedicated to helping you get the most out of the SGM platform.' },{ h: 'Enterprise Security', p: 'Bank-grade encryption and regulatory compliance for your most sensitive operational data.' },{ h: 'Rapid Deployment', p: 'From contract to live system in as little as two weeks with guided onboarding.' }], form: { name: 'Full Name', namePh: 'Your full name', email: 'Email Address', emailPh: 'you@organization.com', org: 'Organization', orgPh: 'Your company or municipality', role: 'Role', rolePh: 'Select your role...', msg: 'Message', msgPh: 'Tell us about your generator network and requirements...', submit: '<i class="fas fa-paper-plane"></i> Send Message', success: 'Message sent! We\'ll be in touch soon.' }, roles: ['Regulatory Authority','Generator Operator','Local Representative','Developer / Integrator','Other'] },
    },

    // Footer
    footer: {
      ar: { brand: 'المنصة الذكية لإدارة شبكات المولدات بمراقبة فورية، وتحليلات متقدمة، وتصميم موبايل أول — بناء الشفافية والكفاءة للمجتمعات.', q1: 'روابط سريعة', q2: 'الخدمات', q3: 'المنصة', copy: '© 2025 نظام إدارة المولدات الذكية (SGM). جميع الحقوق محفوظة.', privacy: 'سياسة الخصوصية', terms: 'شروط الاستخدام' },
      en: { brand: 'The intelligent platform for managing generator networks with real-time monitoring, advanced analytics, and mobile-first design — building transparency and efficiency for communities.', q1: 'Quick Links', q2: 'Services', q3: 'Platform', copy: '© 2025 Smart Generators Management (SGM). All rights reserved.', privacy: 'Privacy Policy', terms: 'Terms of Service' },
    },

    // Anbar banner strip
    anbarBanner: {
      ar: { h: 'نظام SGM في خدمة محافظة الأنبار', p: 'نظام مخصص لإدارة شبكات المولدات في جميع أقضية المحافظة — من الرمادي إلى القائم — بشفافية كاملة ورقمنة متكاملة.', btn: '<i class="fas fa-arrow-left"></i> اكتشف صفحة الأنبار' },
      en: { h: 'SGM Serving Anbar Governorate', p: 'A dedicated system for managing generator networks across all of Anbar\'s districts — from Ramadi to Al-Qa\'im — with full transparency and digitization.', btn: 'Discover Anbar Page <i class="fas fa-arrow-right"></i>' },
    },
  },
};

/* =============================================
   LANGUAGE MANAGER
   ============================================= */
const LangManager = {
  currentLang: 'ar',

  init() {
    // Restore saved language
    const saved = localStorage.getItem('sgm-lang');
    if (saved && saved !== 'ar') {
      this.apply('en', false);
    } else {
      this.highlightToggle('ar');
    }

    // Bind toggle button
    const btn = document.getElementById('lang-toggle');
    if (btn) {
      btn.addEventListener('click', () => {
        this.toggle();
      });
    }
  },

  toggle() {
    const next = this.currentLang === 'ar' ? 'en' : 'ar';
    this.apply(next, true);
  },

  apply(lang, animate = true) {
    const html = document.documentElement;

    if (animate) {
      html.classList.add('lang-transition');
      setTimeout(() => html.classList.remove('lang-transition'), 250);
    }

    this.currentLang = lang;
    localStorage.setItem('sgm-lang', lang);

    // Update html attributes
    html.lang = lang;
    html.dir  = lang === 'ar' ? 'rtl' : 'ltr';

    // Update toggle highlight
    this.highlightToggle(lang);

    // Run page-specific translations
    const page = this.detectPage();
    this.applyShared(lang);
    if (page === 'index') this.applyIndex(lang);
    if (page === 'anbar') this.applyAnbar(lang);
  },

  detectPage() {
    const path = window.location.pathname;
    if (path.includes('anbar'))  return 'anbar';
    if (path.includes('launch')) return 'launch';
    return 'index';
  },

  highlightToggle(lang) {
    const arLabel = document.getElementById('lt-label-ar');
    const enLabel = document.getElementById('lt-label-en');
    if (!arLabel || !enLabel) return;
    if (lang === 'ar') {
      arLabel.style.color = 'var(--clr-blue)';
      enLabel.style.color = 'var(--clr-text-dim)';
    } else {
      enLabel.style.color = 'var(--clr-blue)';
      arLabel.style.color = 'var(--clr-text-dim)';
    }
  },

  /* ---- Helpers ---- */
  setText(id, ar, en) {
    const el = document.getElementById(id);
    if (!el) return;
    el.innerHTML = this.currentLang === 'ar' ? ar : en;
  },

  setAttr(id, attr, ar, en) {
    const el = document.getElementById(id);
    if (!el) return;
    el.setAttribute(attr, this.currentLang === 'ar' ? ar : en);
  },

  /* ---- Shared (both pages) ---- */
  applyShared(lang) {
    const t = SGM_I18N.shared;
    Object.keys(t).forEach(id => {
      const entry = t[id];
      if (entry.ar && entry.en) this.setText(id, entry.ar, entry.en);
    });

    const sub = document.querySelector('.logo-sub');
    if (sub) sub.textContent = lang === 'ar' ? 'نظام إدارة المولدات الذكية' : 'Smart Generators Management';

    // Mobile menu Anbar link
    const mobAnbar = document.getElementById('mob-anbar');
    if (mobAnbar) mobAnbar.innerHTML = lang === 'ar'
      ? '<i class="fas fa-landmark"></i> محافظة الأنبار'
      : '<i class="fas fa-landmark"></i> Anbar Gov.';

    // Nav Anbar link
    const navAnbar = document.getElementById('nav-anbar');
    if (navAnbar) navAnbar.innerHTML = lang === 'ar'
      ? '<i class="fas fa-landmark"></i> محافظة الأنبار'
      : '<i class="fas fa-landmark"></i> Anbar Gov.';
  },

  /* ---- INDEX PAGE ---- */
  applyIndex(lang) {
    const L = lang;
    const s = SGM_I18N.sections;
    const t = SGM_I18N.index;

    /* Hero */
    this.setText('hero-badge', t['hero-badge'].ar, t['hero-badge'].en);
    this.setText('hero-title', t['hero-title'].ar, t['hero-title'].en);
    this.setText('hero-subtitle', t['hero-subtitle'].ar, t['hero-subtitle'].en);
    this.setText('btn-explore', t['btn-explore'].ar, t['btn-explore'].en);
    this.setText('btn-systems', t['btn-systems'].ar, t['btn-systems'].en);

    // Hero stat labels
    const statLabels = document.querySelectorAll('.stat-label');
    const labelKeys = L === 'ar'
      ? ['مولد مُدار', 'مشترك نشط', 'وقت تشغيل المنصة']
      : ['Generators Managed', 'Active Subscribers', 'Platform Uptime'];
    statLabels.forEach((el, i) => { if (labelKeys[i]) el.textContent = labelKeys[i]; });

    // Scroll indicator
    const scrollSpan = document.querySelector('.scroll-indicator span');
    if (scrollSpan) scrollSpan.textContent = L === 'ar' ? 'مرر للاستكشاف' : 'Scroll to explore';

    /* Anbar Banner */
    const bannerH = document.querySelector('.anbar-banner-text h3');
    const bannerP = document.querySelector('.anbar-banner-text p');
    const bannerBtn = document.getElementById('btn-anbar-page');
    const ab = s.anbarBanner[L];
    if (bannerH) bannerH.textContent = ab.h;
    if (bannerP)  bannerP.textContent  = ab.p;
    if (bannerBtn) bannerBtn.innerHTML = ab.btn;

    /* Features */
    const fs = s.features[L];
    this._applyHeader('#features', fs.tag, fs.title, fs.desc);
    const fcards = document.querySelectorAll('#features-grid .feature-card');
    fcards.forEach((card, i) => {
      const c = fs.cards[i];
      if (!c) return;
      const h3 = card.querySelector('h3');
      const p  = card.querySelector('p');
      const tag = card.querySelector('.feature-tag');
      if (h3) h3.textContent = c.h;
      if (p)  p.textContent  = c.p;
      if (tag) tag.textContent = c.tag;
    });

    /* Systems */
    const sys = s.systems[L];
    this._applyHeader('#systems', sys.tag, sys.title, sys.desc);
    this._applySystemCard('sys-central',   sys.central);
    this._applySystemCard('sys-mukhtar',   sys.mukhtar);
    this._applySystemCard('sys-accountant',sys.accountant);
    this._applySystemCard('sys-citizen',   sys.citizen);
    this._applySystemCard('sys-gis',       sys.gis);

    /* Benefits */
    const ben = s.benefits[L];
    this._applyHeader('#benefits', ben.tag, ben.title, ben.desc);
    const benItems = document.querySelectorAll('.benefit-item');
    benItems.forEach((item, i) => {
      const b = ben.items[i];
      if (!b) return;
      const h4 = item.querySelector('h4');
      const p  = item.querySelector('p');
      if (h4) h4.textContent = b.h;
      if (p)  p.textContent  = b.p;
    });
    const pfHeader = document.querySelector('.pf-header');
    if (pfHeader) pfHeader.textContent = ben.pfHeader;
    const pfSteps = document.querySelectorAll('.pf-step span');
    pfSteps.forEach((el, i) => { if (ben.pfSteps[i]) el.textContent = ben.pfSteps[i]; });
    // Process arrows direction
    const pfArrows = document.querySelectorAll('.pf-arrow i');
    pfArrows.forEach(a => { a.className = L === 'ar' ? 'fas fa-arrow-left' : 'fas fa-arrow-right'; });

    /* Stats */
    const st = s.stats[L];
    this._applyHeader('#stats', st.tag, st.title, null);
    const statsDescEl = document.querySelector('#stats-left > p');
    if (statsDescEl) statsDescEl.textContent = st.desc;
    const scLabels = document.querySelectorAll('.sc-label');
    scLabels.forEach((el, i) => { if (st.labels[i]) el.textContent = st.labels[i]; });
    this.setText('btn-stats-cta', s.stats.ar.cta, s.stats.en.cta);

    /* App CTA */
    const ac = s.appCta[L];
    const appTag  = document.querySelector('#app-cta-text .section-tag');
    const appTitle = document.querySelector('#app-cta-text .section-title');
    const appDesc = document.querySelector('#app-cta-text > p');
    if (appTag)  appTag.textContent = ac.tag;
    if (appTitle) appTitle.innerHTML = ac.title;
    if (appDesc) appDesc.textContent = ac.desc;
    const appStoreSmall = document.querySelector('#btn-appstore small');
    const playSmall     = document.querySelector('#btn-playstore small');
    if (appStoreSmall) appStoreSmall.textContent = ac.appStore;
    if (playSmall)     playSmall.textContent     = ac.playStore;

    /* Contact */
    const ct = s.contact[L];
    this._applyHeader('#contact', ct.tag, ct.title, ct.desc);
    const ciCards = document.querySelectorAll('.ci-card');
    ciCards.forEach((card, i) => {
      const c = ct.ci[i];
      if (!c) return;
      const h4 = card.querySelector('h4');
      const p  = card.querySelector('p');
      if (h4) h4.textContent = c.h;
      if (p)  p.textContent  = c.p;
    });
    // Form labels & placeholders
    const form = document.getElementById('contact-form');
    if (form) {
      const f = ct.form;
      this._setLabel(form, 'cf-name',    f.name);
      this._setPlaceholder(form, 'cf-name', f.namePh);
      this._setLabel(form, 'cf-email',   f.email);
      this._setPlaceholder(form, 'cf-email', f.emailPh);
      this._setLabel(form, 'cf-org',     f.org);
      this._setPlaceholder(form, 'cf-org', f.orgPh);
      this._setLabel(form, 'cf-role',    f.role);
      this._setLabel(form, 'cf-message', f.msg);
      this._setPlaceholder(form, 'cf-message', f.msgPh);
      this.setText('btn-submit', s.contact.ar.form.submit, s.contact.en.form.submit);
      const successSpan = document.querySelector('#form-success span');
      if (successSpan) successSpan.textContent = f.success;

      // Role select options
      const roleSelect = document.getElementById('cf-role');
      if (roleSelect) {
        const options = roleSelect.querySelectorAll('option');
        const rVals   = ['', 'regulator', 'operator', 'mukhtar', 'developer', 'other'];
        options.forEach((opt, i) => {
          if (i === 0) opt.textContent = f.rolePh;
          else if (ct.roles[i - 1]) opt.textContent = ct.roles[i - 1];
        });
      }
    }

    /* Footer */
    const ft = s.footer[L];
    const brandP = document.querySelector('.footer-brand > p');
    if (brandP) brandP.textContent = ft.brand;
    const fCols = document.querySelectorAll('.footer-col h5');
    if (fCols[0]) fCols[0].textContent = ft.q1;
    if (fCols[1]) fCols[1].textContent = ft.q2;
    if (fCols[2]) fCols[2].textContent = ft.q3;
    const copyP = document.querySelector('.footer-bottom p');
    if (copyP) copyP.textContent = ft.copy;
    const btmLinks = document.querySelectorAll('.footer-bottom-links a');
    if (btmLinks[0]) btmLinks[0].textContent = ft.privacy;
    if (btmLinks[1]) btmLinks[1].textContent = ft.terms;

    /* Footer quick links */
    const footerLinks = [
      ['#home', L === 'ar' ? 'الرئيسية' : 'Home'],
      ['#features', L === 'ar' ? 'المميزات' : 'Features'],
      ['#systems', L === 'ar' ? 'الأنظمة' : 'Systems'],
      ['#benefits', L === 'ar' ? 'الفوائد' : 'Benefits'],
      ['anbar.html', L === 'ar' ? 'محافظة الأنبار' : 'Anbar Governorate'],
    ];
    const flCol = document.querySelectorAll('.footer-col ul')[0];
    if (flCol) {
      const links = flCol.querySelectorAll('a');
      links.forEach((a, i) => { if (footerLinks[i]) a.textContent = footerLinks[i][1]; });
    }

    // back-to-top aria
    const btt = document.getElementById('back-to-top');
    if (btt) btt.setAttribute('aria-label', L === 'ar' ? 'العودة للأعلى' : 'Back to top');
  },

  /* ---- ANBAR PAGE ---- */
  applyAnbar(lang) {
    // For the Anbar page we only translate the shared nav
    // and a few key labels since the page has specialized content
    const L = lang;

    const btt = document.getElementById('back-to-top');
    if (btt) btt.setAttribute('aria-label', L === 'ar' ? 'العودة للأعلى' : 'Back to top');

    // Update footer on anbar page
    const brandP = document.querySelector('.footer-brand > p');
    if (brandP) brandP.textContent = L === 'ar'
      ? 'المنصة الذكية لإدارة شبكات المولدات بمراقبة فورية، وتحليلات متقدمة، وتصميم موبايل أول.'
      : 'Intelligent platform for managing generator networks with real-time monitoring and mobile-first design.';
  },

  /* ---- Private helpers ---- */
  _applyHeader(sectionSelector, tag, title, desc) {
    const section = document.querySelector(sectionSelector);
    if (!section) return;
    const tagEl  = section.querySelector('.section-tag');
    const titleEl = section.querySelector('.section-title');
    const descEl  = section.querySelector('.section-desc');
    if (tagEl)  tagEl.textContent  = tag;
    if (titleEl) titleEl.innerHTML = title;
    if (descEl && desc)  descEl.textContent  = desc;
  },

  _applySystemCard(id, data) {
    const card = document.getElementById(id);
    if (!card || !data) return;
    const badge = card.querySelector('.sys-badge');
    const h3    = card.querySelector('h3');
    const p     = card.querySelector('p');
    const lis   = card.querySelectorAll('.sys-features-list li');
    if (badge) badge.textContent = data.badge;
    if (h3)    h3.textContent    = data.title;
    if (p)     p.textContent     = data.p;
    lis.forEach((li, i) => {
      if (data.li[i]) {
        // Preserve the icon
        const icon = li.querySelector('i');
        li.textContent = data.li[i];
        if (icon) li.insertAdjacentElement('afterbegin', icon);
      }
    });
  },

  _setLabel(form, inputId, text) {
    const label = form.querySelector(`label[for="${inputId}"]`);
    if (label) label.textContent = text;
  },

  _setPlaceholder(form, inputId, text) {
    const input = form.querySelector(`#${inputId}`);
    if (input) input.placeholder = text;
  },
};

/* =============================================
   INIT
   ============================================= */
document.addEventListener('DOMContentLoaded', () => {
  LangManager.init();
});
