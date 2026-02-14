document.getElementById('year').textContent = new Date().getFullYear();
(function initTheme(){
  const root = document.documentElement;
  const saved = localStorage.getItem('theme');
  const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  const theme = saved || (prefersDark ? 'dark' : 'light');
  root.setAttribute('data-theme', theme);
  updateThemeIcon(theme);
})();

function updateThemeIcon(theme){
  const btn = document.getElementById('themeToggle');
  if (!btn) return;
  btn.querySelector('.icon').textContent = (theme === 'dark') ? '☀️' : '🌙';
}

document.getElementById('themeToggle').addEventListener('click', () => {
  const root = document.documentElement;
  const current = root.getAttribute('data-theme') || 'light';
  const next = (current === 'light') ? 'dark' : 'light';
  root.setAttribute('data-theme', next);
  localStorage.setItem('theme', next);
  updateThemeIcon(next);
});

const i18n = {
  en: {
    'brand.name': 'Ahmed Sameh',
    'lang.label': 'AR',
    'nav.home': 'Home', 'nav.about': 'About', 'nav.education': 'Education', 'nav.skills': 'Skills', 'nav.projects': 'Projects', 'nav.certs': 'Certifications', 'nav.courses': 'Courses', 'nav.languages': 'Languages', 'nav.contact': 'Contact',
    'hero.title': 'Ahmed Sameh Abdelgelil',
    'hero.subtitle': 'Computer Science Student @ AAST · Cybersecurity enthusiast · C, Java, Python & Web',
    'hero.contact_button': 'Contact Me',
    'hero.cv_button': 'Download CV (PDF)',
    'about.title': 'About Me',
    'about.lead': 'Motivated computer science student with a strong interest in <strong>cybersecurity</strong> and programming. Proven success in competitive environments with strong teamwork and problem-solving abilities. Eager to gain practical experience and contribute to innovative tech solutions.',
    'education.title': 'Education',
    'education.degree': 'Arab Academy for Science and Technology (AAST) — BSc Computer Science',
    'education.meta': 'Expected Graduation: 2029',
    'skills.title': 'Skills',
    'skills.c': 'C Programming', 'skills.java': 'Java', 'skills.python': 'Python', 'skills.html': 'HTML', 'skills.css': 'CSS', 'skills.js': 'JavaScript', 'skills.cyber': 'Cybersecurity Fundamentals', 'skills.team': 'Team Collaboration', 'skills.problem': 'Problem Solving', 'skills.analysis': 'Data Analysis',
    'skills.interest': 'Interested in <strong>Cybersecurity</strong> and modern <strong>Web Development</strong>.',
    'projects.title': 'Projects & Achievements',
    'projects.card1.title': 'Winner – IP Protocol Cybersecurity Challenge',
    'projects.card1.text': 'Ranked 1st place in a national cybersecurity competition focused on IP protocols.',
    'certs.title': 'Certifications',
    'certs.cyber': 'Cybersecurity — EncryptCore',
    'certs.web': 'Web Development — EncryptCore',
    'courses.title': 'Courses',
    'courses.webdev': 'Web Development',
    'languages.title': 'Languages',
    'languages.ar': 'Arabic (Native)',
    'languages.en': 'English (B2 Level – Intermediate Upper)',
    'contact.title': 'Contact',
    'contact.phone': '01068773080',
    'contact.email': 'ahmedsameh9034@gmail.com',
    'contact.location': 'Arab Academy for Science and Technology (AAST)',
    'footer.rights': '© <span id="year"></span> Ahmed Sameh. All rights reserved.',
    'motto.text': 'with every heartbeat, proudly Egyptian'
  },
  ar: {
    'brand.name': 'أحمد سامح',
    'lang.label': 'EN',
    'nav.home': 'الرئيسية', 'nav.about': 'نبذة', 'nav.education': 'التعليم', 'nav.skills': 'المهارات', 'nav.projects': 'المشاريع', 'nav.certs': 'الشهادات', 'nav.courses': 'الدورات', 'nav.languages': 'اللغات', 'nav.contact': 'التواصل',
    'hero.title': 'أحمد سامح عبدالجليل',
    'hero.subtitle': 'طالب علوم الحاسوب في الأكاديمية العربية · مهتم بالأمن السيبراني · C، جافا، بايثون وويب',
    'hero.contact_button': 'تواصل معي',
    'hero.cv_button': 'تحميل السيرة الذاتية (PDF)',
    'about.title': 'نبذة عني',
    'about.lead': 'طالب مجتهد في علوم الحاسوب مهتم بـ<strong>الأمن السيبراني</strong> والبرمجة. لدي نجاحات مثبتة في بيئات تنافسية مع قدرات قوية في العمل الجماعي وحل المشكلات. أتطلع لاكتساب خبرة عملية والمساهمة في حلول تقنية مبتكرة.',
    'education.title': 'التعليم',
    'education.degree': 'الأكاديمية العربية للعلوم والتكنولوجيا (AAST) — بكالوريوس علوم الحاسوب',
    'education.meta': 'تاريخ التخرج المتوقع: 2029',
    'skills.title': 'المهارات',
    'skills.c': 'برمجة لغة C', 'skills.java': 'جافا', 'skills.python': 'بايثون', 'skills.html': 'HTML', 'skills.css': 'CSS', 'skills.js': 'جافاسكربت', 'skills.cyber': 'أساسيات الأمن السيبراني', 'skills.team': 'العمل الجماعي', 'skills.problem': 'حل المشكلات', 'skills.analysis': 'تحليل البيانات',
    'skills.interest': 'مهتم بـ<strong>الأمن السيبراني</strong> و<strong>تطوير الويب</strong> الحديث.',
    'projects.title': 'المشاريع والإنجازات',
    'projects.card1.title': 'الفائز — تحدي الأمن السيبراني لبروتوكول IP',
    'projects.card1.text': 'المركز الأول في مسابقة وطنية للأمن السيبراني تركز على بروتوكولات IP.',
    'certs.title': 'الشهادات',
    'certs.cyber': 'الأمن السيبراني — EncryptCore',
    'certs.web': 'تطوير الويب — EncryptCore',
    'courses.title': 'الدورات',
    'courses.webdev': 'تطوير الويب',
    'languages.title': 'اللغات',
    'languages.ar': 'العربية (اللغة الأم)',
    'languages.en': 'الإنجليزية (B2 — ما فوق المتوسط)',
    'contact.title': 'التواصل',
    'contact.phone': '01068773080',
    'contact.email': 'ahmedsameh9034@gmail.com',
    'contact.location': 'الأكاديمية العربية للعلوم والتكنولوجيا (AAST)',
    'footer.rights': '© <span id="year"></span> أحمد سامح. جميع الحقوق محفوظة.',
    'motto.text': 'مع كل نبضة قلب، فخور بكوني مصريًا'
  }
};

function applyTranslations(lang){
  const strings = i18n[lang];
  if (!strings) return;
  document.documentElement.lang = lang;
  document.documentElement.dir = (lang === 'ar') ? 'rtl' : 'ltr';
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const html = strings[key];
    if (typeof html === 'string') el.innerHTML = html;
  });
  const label = document.getElementById('langLabel');
  if (label) label.textContent = (lang === 'ar') ? i18n.en['lang.label'] : i18n.ar['lang.label'];
}

(function initLanguage(){
  const saved = localStorage.getItem('lang');
  const lang = saved || 'en';
  applyTranslations(lang);
})();

document.getElementById('langToggle').addEventListener('click', () => {
  const current = document.documentElement.lang || 'en';
  const next = (current === 'en') ? 'ar' : 'en';
  localStorage.setItem('lang', next);
  applyTranslations(next);
});

