// Dynamic year
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

/* ==========================================================================
   Toast Notification System
   ========================================================================== */
function showToast(message, icon = '✓') {
  const container = document.getElementById('toastContainer');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = 'toast-msg glass';
  toast.innerHTML = `<span style="color:var(--accent); font-weight:700;">${icon}</span> <span>${escapeHtml(message)}</span>`;
  container.appendChild(toast);

  setTimeout(() => {
    toast.remove();
  }, 3000);
}

/* ==========================================================================
   Theme Toggle (Dark / Light)
   ========================================================================== */
(function initTheme() {
  const root = document.documentElement;
  const saved = localStorage.getItem('theme');
  const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  const theme = saved || (prefersDark ? 'dark' : 'light');
  root.setAttribute('data-theme', theme);
  updateThemeIcon(theme);
})();

function updateThemeIcon(theme) {
  const btn = document.getElementById('themeToggle');
  if (!btn) return;
  const icon = btn.querySelector('.icon');
  if (icon) icon.textContent = (theme === 'dark') ? '☀️' : '🌙';
}

const themeToggle = document.getElementById('themeToggle');
if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    const root = document.documentElement;
    const current = root.getAttribute('data-theme') || 'light';
    const next = (current === 'light') ? 'dark' : 'light';
    root.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
    updateThemeIcon(next);
  });
}

/* ==========================================================================
   Translations Dictionary (EN / AR)
   ========================================================================== */
const i18n = {
  en: {
    'brand.name': 'Ahmed Sameh',
    'lang.label': 'AR',
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.education': 'Education',
    'nav.skills': 'Skills',
    'nav.projects': 'Projects',
    'nav.certs': 'Certifications',
    'nav.courses': 'Courses',
    'nav.languages': 'Languages',
    'nav.contact': 'Contact',
    'motto.text': 'with every heartbeat, proudly Egyptian',
    'hero.title': 'Ahmed Sameh AbdelGelil',
    'hero.subtitle': 'Computer Science @ AAST · AI & Robotics | cyber security | Web Development',
    'hero.contact_button': 'Contact Me',
    'hero.cv_button': 'Download CV (PDF)',
    'hero.shell_button': '>_ Launch Terminal',
    'terminal.btnLabel': 'Shell',
    'terminal.hint': 'Type <span class="cmd-badge">help</span> to see available commands or try <span class="cmd-badge">whoami</span>, <span class="cmd-badge">skills</span>, <span class="cmd-badge">projects</span>, <span class="cmd-badge">ctf</span>, <span class="cmd-badge">cat flag.txt</span>, <span class="cmd-badge">contact</span>, <span class="cmd-badge">clear</span>.',
    'stats.ctf': 'Place — IP Protocol Security Challenge',
    'stats.internships': 'Hands-on Industry Internships',
    'stats.certs': 'AI & Cybersecurity Certifications',
    'stats.grad': 'BSc Computer Science Candidate',
    'about.title': 'About Me',
    'about.lead': 'Motivated 20-year-old CS student at AAST, passionate about <strong>AI</strong>, <strong>Robotics</strong>, <strong>Cyber Security</strong> and <strong>Web Development</strong>. 1st place winner in an IP Protocol Cyber Security competition. Experienced with real-world internships, backend API development in C#, and certified AI training, with a strong drive to leverage AI in modern solutions.',
    'education.title': 'Education Journey',
    'education.degree': 'Arab Academy for Science and Technology (AAST – Smart Village)',
    'education.degree_sub': 'Bachelor of Science in Computer Science',
    'education.meta': 'Expected Graduation: 2028',
    'education.highschool': 'Manor House School (MHS)',
    'education.hs_sub': 'American High School Diploma',
    'education.hs_date': 'Graduated: 2024',
    'skills.title': 'Skills & Domain Proficiency',
    'skills.cat_cyber': 'Cyber Security & Networks',
    'skills.cat_backend': 'Backend & Programming',
    'skills.cat_web': 'Web Development',
    'skills.cat_ai': 'AI & Robotics',
    'skills.c': 'C',
    'skills.cpp': 'C++',
    'skills.csharp': 'C#',
    'skills.python': 'Python',
    'skills.java': 'Java',
    'skills.js': 'JavaScript',
    'skills.sql': 'SQL',
    'skills.html': 'HTML & CSS',
    'skills.backend': 'Backend API Development',
    'skills.cyber': 'Cyber Security & IP Protocols',
    'skills.network': 'Network Security',
    'skills.ai_tools': 'AI Tools & Workflows',
    'skills.problem': 'Problem Solving',
    'skills.team': 'Team Collaboration',
    'skills.interest': 'Interests: <strong>Cyber Security</strong>, <strong>Web Development</strong>, <strong>Artificial Intelligence</strong>, <strong>Robotics</strong>, and <strong>CTF Competitions</strong>.',
    'projects.title': 'Projects & Achievements',
    'projects.filter_all': 'All',
    'projects.filter_cyber': 'Cyber Security & CTF',
    'projects.filter_web': 'Web & Backend',
    'projects.card1.title': '1st Place Winner — IP Protocol Cyber Security Challenge',
    'projects.card1.text': 'Ranked 1st place in an IP Protocol Cyber Security competition. Demonstrated deep knowledge of network protocols and vulnerability analysis.',
    'projects.card2.title': 'Project Management System (C# | REST API)',
    'projects.card2.text': 'Built during my Corelease summer internship. Developed the backend REST API in C# and integrated it with the frontend.',
    'projects.card3.title': 'QR Code Generator Website',
    'projects.card3.text': 'Built a fully functional QR code generator web application using HTML, CSS, and JavaScript. <br><a href="https://ahmeds34.github.io/Scanme-QR-code-generator/" target="_blank" rel="noopener noreferrer" style="color: var(--accent); font-weight: 600;">Live Demo ↗</a>',
    'projects.card4.title': 'Personal Portfolio Website',
    'projects.card4.text': 'Designed and deployed a responsive portfolio to showcase projects, certifications, and skills. <br><a href="https://ahmeds34.github.io/Ahmedportfolio/" target="_blank" rel="noopener noreferrer" style="color: var(--accent); font-weight: 600;">Live Demo ↗</a>',
    'certs.title': 'Experience & Certifications',
    'certs.corelease': 'IT Internship: Project Management System — Corelease (Smart Village)',
    'certs.encrypt_intern': 'Front-End Web Development Internship — Encrypt Core',
    'certs.anthropic': 'AI Certifications (Claude 101, AI Fluency, Claude Code in Action) — Anthropic',
    'certs.cyber_quantum': 'Cyber Security & Quantum AI Training — Encrypt Core & Quantum AI',
    'certs.bridge_club': 'Operations Team Member (2 Years) — Student Bridge Club (AAST)',
    'certs.view_fullscreen': 'Click to View Full Size',
    'certs.ctf_caption': 'Capture the Flag Competition — First Place',
    'courses.title': 'Courses',
    'courses.anthropic': 'Anthropic AI Suite (Claude 101, AI Fluency Framework, Claude Code in Action)',
    'courses.cybersec': 'Cyber Security, Network Security, Ethical Hacking & Encryption',
    'courses.webdev': 'Web Development & Backend API Development (C# REST API)',
    'courses.quantum': 'AI-Assisted Security Tools — Quantum AI',
    'languages.title': 'Languages',
    'languages.ar': 'Arabic (Native)',
    'languages.en': 'English (B2 Level – Upper Intermediate)',
    'contact.title': 'Contact',
    'contact.form_name': 'Your Name',
    'contact.placeholder_name': 'e.g. John Doe',
    'contact.form_email': 'Your Email',
    'contact.placeholder_email': 'e.g. john@example.com',
    'contact.form_subject': 'Subject',
    'contact.placeholder_subject': 'e.g. Collaboration Opportunity',
    'contact.form_message': 'Message',
    'contact.placeholder_message': 'Write your message here...',
    'contact.form_send': 'Send Message',
    'contact.phone': '01068773080',
    'contact.email': 'ahmedsameh9034@gmail.com',
    'contact.location': 'AAST – Smart Village, Giza, Egypt',
    'contact.copy_hint': 'Click to copy',
    'ai.btn_label': 'Ask Ahmed AI',
    'ai.title': 'Ahmed AI Assistant',
    'ai.status': 'Online · Ready to assist',
    'ai.welcome': "Hello! I'm Ahmed's AI assistant. Ask me anything about his technical skills, CTF achievements, C# backend projects, or internships!",
    'ai.chip_ctf': '🏆 1st Place CTF Win',
    'ai.chip_skills': '💻 Tech Stack',
    'ai.chip_interns': '💼 Internships',
    'ai.chip_contact': '✉️ Contact Info',
    'ai.placeholder': 'Ask a question about Ahmed...',
    'footer.rights': '© <span id="year"></span> Ahmed Sameh AbdelGelil. All rights reserved.'
  },
  ar: {
    'brand.name': 'أحمد سامح',
    'lang.label': 'EN',
    'nav.home': 'الرئيسية',
    'nav.about': 'نبذة',
    'nav.education': 'التعليم',
    'nav.skills': 'المهارات',
    'nav.projects': 'المشاريع',
    'nav.certs': 'الشهادات والخبرات',
    'nav.courses': 'الدورات',
    'nav.languages': 'اللغات',
    'nav.contact': 'التواصل',
    'motto.text': 'مع كل نبضة قلب، فخور بكوني مصريًا',
    'hero.title': 'أحمد سامح عبدالجليل',
    'hero.subtitle': 'طالب علوم الحاسوب في الأكاديمية العربية · الأمن السيبراني | الذكاء الاصطناعي والروبوتات | تطوير الويب',
    'hero.contact_button': 'تواصل معي',
    'hero.cv_button': 'تحميل السيرة الذاتية (PDF)',
    'hero.shell_button': '>_ تشغيل الطرفية',
    'terminal.btnLabel': 'الطرفية',
    'terminal.hint': 'اكتب <span class="cmd-badge">help</span> لعرض الأوامر المتاحة أو جرب <span class="cmd-badge">whoami</span>، <span class="cmd-badge">skills</span>، <span class="cmd-badge">projects</span>، <span class="cmd-badge">ctf</span>، <span class="cmd-badge">cat flag.txt</span>، <span class="cmd-badge">contact</span>، <span class="cmd-badge">clear</span>.',
    'stats.ctf': 'المركز الأول — تحدي أمن بروتوكول IP',
    'stats.internships': 'فترات تدريب عملي بالشركات',
    'stats.certs': 'شهادات بالذكاء الاصطناعي والأمن السيبراني',
    'stats.grad': 'مرشح لتخرج بكالوريوس علوم الحاسوب',
    'about.title': 'نبذة عني',
    'about.lead': 'طالب علوم حاسوب مجتهد (20 عاماً) في الأكاديمية العربية للعلوم والتكنولوجيا (AAST)، شغوف بـ <strong>الذكاء الاصطناعي</strong>، <strong>الروبوتات</strong>، <strong>الأمن السيبراني</strong> و<strong>تطوير الويب</strong>. حاصل على المركز الأول في مسابقة الأمن السيبراني لبروتوكول IP. ذو خبرة في التدريب العملي، وتطوير واجهات برمجة التطبيقات الخلفية (Backend APIs) بلغة #C، وتدريب معتمد في الذكاء الاصطناعي، مع دافع قوي لتوظيف الذكاء الاصطناعي في الحلول الحديثة.',
    'education.title': 'المسيرة التعليمية',
    'education.degree': 'الأكاديمية العربية للعلوم والتكنولوجيا والنقل البحري (القرية الذكية)',
    'education.degree_sub': 'بكالوريوس علوم الحاسوب',
    'education.meta': 'تاريخ التخرج المتوقع: 2028',
    'education.highschool': 'مدرسة مانور هاوس (MHS)',
    'education.hs_sub': 'شهادة الثانوية الأمريكية',
    'education.hs_date': 'سنة التخرج: 2024',
    'skills.title': 'المهارات والجاهزية التقنية',
    'skills.cat_cyber': 'الأمن السيبراني وأمن الشبكات',
    'skills.cat_backend': 'البرمجة والأنظمة الخلفية',
    'skills.cat_web': 'تطوير واجهات الويب',
    'skills.cat_ai': 'الذكاء الاصطناعي والروبوتات',
    'skills.c': 'برمجة C',
    'skills.cpp': 'برمجة ++C',
    'skills.csharp': 'برمجة #C',
    'skills.python': 'بايثون',
    'skills.java': 'جافا',
    'skills.js': 'جافاسكربت',
    'skills.sql': 'قواعد البيانات SQL',
    'skills.html': 'HTML و CSS',
    'skills.backend': 'تطوير واجهات برمجة التطبيقات (Backend APIs)',
    'skills.cyber': 'الأمن السيبراني وبروتوكولات IP',
    'skills.network': 'أمن الشبكات',
    'skills.ai_tools': 'أدوات وسير عمل الذكاء الاصطناعي',
    'skills.problem': 'حل المشكلات',
    'skills.team': 'العمل الجماعي',
    'skills.interest': 'الاهتمامات: <strong>الأمن السيبراني</strong>، <strong>تطوير الويب</strong>، <strong>الذكاء الاصطناعي</strong>، <strong>الروبوتات</strong>، و<strong>مسابقات الـ CTF</strong>.',
    'projects.title': 'المشاريع والإنجازات',
    'projects.filter_all': 'الكل',
    'projects.filter_cyber': 'الأمن السيبراني والـ CTF',
    'projects.filter_web': 'تطوير الويب والباك اند',
    'projects.card1.title': 'المركز الأول — تحدي الأمن السيبراني لبروتوكول IP',
    'projects.card1.text': 'المركز الأول في مسابقة للأمن السيبراني لبروتوكولات IP. إظهار معرفة عميقة ببروتوكولات الشبكة وتحليل الثغرات.',
    'projects.card2.title': 'نظام إدارة المشاريع (#C و REST API)',
    'projects.card2.text': 'تم بناؤه خلال فترة التدريب الصيفي في Corelease. تطوير واجهة REST API الخلفية بلغة #C وربطها بالواجهة الأمامية.',
    'projects.card3.title': 'موقع توليد رموز الاستجابة السريعة (QR Code)',
    'projects.card3.text': 'تطبيق ويب متكامل ومستجيب لتوليد رموز QR باستخدام HTML و CSS و JavaScript. <br><a href="https://ahmeds34.github.io/Scanme-QR-code-generator/" target="_blank" rel="noopener noreferrer" style="color: var(--accent); font-weight: 600;">معاينة المشروع ↗</a>',
    'projects.card4.title': 'موقع معرض الأعمال الشخصي',
    'projects.card4.text': 'تصميم ونشر موقع شخصي متجاوب لعرض المشاريع والشهادات والمهارات التقنية. <br><a href="https://ahmeds34.github.io/Ahmedportfolio/" target="_blank" rel="noopener noreferrer" style="color: var(--accent); font-weight: 600;">معاينة الموقع ↗</a>',
    'certs.title': 'الشهادات والخبرات',
    'certs.corelease': 'تدريب تكنولوجيا المعلومات: نظام إدارة المشاريع — Corelease (القرية الذكية)',
    'certs.encrypt_intern': 'تدريب تطوير واجهات الويب الأمامية — Encrypt Core',
    'certs.anthropic': 'شهادات الذكاء الاصطناعي (Claude 101, AI Fluency, Claude Code in Action) — Anthropic',
    'certs.cyber_quantum': 'تدريب الأمن السيبراني والذكاء الاصطناعي — Encrypt Core & Quantum AI',
    'certs.bridge_club': 'عضو فريق العمليات (سنتان) — نادي Student Bridge Club الطلابي (AAST)',
    'certs.view_fullscreen': 'اضغط للعرض بالحجم الكامل',
    'certs.ctf_caption': 'مسابقة Capture the Flag — المركز الأول',
    'courses.title': 'الدورات',
    'courses.anthropic': 'مجموعة دورات الذكاء الاصطناعي من Anthropic (Claude 101, AI Fluency, Claude Code in Action)',
    'courses.cybersec': 'الأمن السيبراني، أمن الشبكات، الاختراق الأخلاقي والتشفير',
    'courses.webdev': 'تطوير الويب وتطوير واجهات برمجة التطبيقات (C# REST API)',
    'courses.quantum': 'أدوات الأمان المدعومة بالذكاء الاصطناعي — Quantum AI',
    'languages.title': 'اللغات',
    'languages.ar': 'العربية (اللغة الأم)',
    'languages.en': 'الإنجليزية (المستوى B2 — فوق المتوسط)',
    'contact.title': 'التواصل',
    'contact.form_name': 'الاسم الكامل',
    'contact.placeholder_name': 'مثال: أحمد محمد',
    'contact.form_email': 'البريد الإلكتروني',
    'contact.placeholder_email': 'مثال: user@example.com',
    'contact.form_subject': 'الموضوع',
    'contact.placeholder_subject': 'مثال: فرصة تعاون برمجية',
    'contact.form_message': 'الرسالة',
    'contact.placeholder_message': 'اكتب رسالتك هنا بالتفصيل...',
    'contact.form_send': 'إرسال الرسالة',
    'contact.phone': '01068773080',
    'contact.email': 'ahmedsameh9034@gmail.com',
    'contact.location': 'الأكاديمية العربية للعلوم والتكنولوجيا (القرية الذكية)، الجيزة، مصر',
    'contact.copy_hint': 'اضغط للنسخ',
    'ai.btn_label': 'مساعد أحمد الذكي',
    'ai.title': 'المساعد الذكي لأحمد',
    'ai.status': 'متصل · جاهز للمساعدة',
    'ai.welcome': 'مرحباً بك! أنا المساعد الذكي الخاص بأحمد سامح. يمكنك سؤالي عن مهاراته البرمجية، فوزه في مسابقة الـ CTF، خبراته في الـ C# Backend، أو تدريباته العملية!',
    'ai.chip_ctf': '🏆 فوز مسابقة الـ CTF',
    'ai.chip_skills': '💻 المهارات البرمجية',
    'ai.chip_interns': '💼 فترات التدريب',
    'ai.chip_contact': '✉️ بيانات التواصل',
    'ai.placeholder': 'اطرح سؤالاً عن أحمد...',
    'footer.rights': '© <span id="year"></span> أحمد سامح عبدالجليل. جميع الحقوق محفوظة.'
  }
};

function applyTranslations(lang) {
  const strings = i18n[lang];
  if (!strings) return;
  document.documentElement.lang = lang;
  document.documentElement.dir = (lang === 'ar') ? 'rtl' : 'ltr';

  // Translate elements with data-i18n
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const html = strings[key];
    if (typeof html === 'string') el.innerHTML = html;
  });

  // Translate placeholders with data-i18n-placeholder
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    const text = strings[key];
    if (typeof text === 'string') el.setAttribute('placeholder', text);
  });

  const yearCurrent = document.getElementById('year');
  if (yearCurrent) yearCurrent.textContent = new Date().getFullYear();

  const label = document.getElementById('langLabel');
  if (label) label.textContent = (lang === 'ar') ? i18n.en['lang.label'] : i18n.ar['lang.label'];
}

(function initLanguage() {
  const saved = localStorage.getItem('lang');
  const lang = saved || 'en';
  applyTranslations(lang);
})();

const langToggle = document.getElementById('langToggle');
if (langToggle) {
  langToggle.addEventListener('click', () => {
    const current = document.documentElement.lang || 'en';
    const next = (current === 'en') ? 'ar' : 'en';
    localStorage.setItem('lang', next);
    applyTranslations(next);
  });
}

/* ==========================================================================
   1-Click Clipboard Copy
   ========================================================================== */
document.querySelectorAll('.copyable').forEach(item => {
  const handleCopy = () => {
    const textToCopy = item.getAttribute('data-copy');
    if (!textToCopy) return;

    navigator.clipboard.writeText(textToCopy).then(() => {
      const isArabic = document.documentElement.lang === 'ar';
      showToast(isArabic ? `تم نسخ "${textToCopy}" بنجاح!` : `Copied "${textToCopy}" to clipboard!`, '📋');
    }).catch(() => {
      // Fallback
      const tempInput = document.createElement('input');
      tempInput.value = textToCopy;
      document.body.appendChild(tempInput);
      tempInput.select();
      document.execCommand('copy');
      document.body.removeChild(tempInput);
      showToast(`Copied "${textToCopy}"!`, '📋');
    });
  };

  item.addEventListener('click', handleCopy);
  item.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleCopy();
    }
  });
});

/* ==========================================================================
   Scroll Progress Bar & Scroll To Top
   ========================================================================== */
const scrollProgress = document.getElementById('scrollProgress');
const scrollTopBtn = document.getElementById('scrollTopBtn');

window.addEventListener('scroll', () => {
  const scrollTop = window.scrollY || document.documentElement.scrollTop;
  const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const progressPercent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;

  if (scrollProgress) {
    scrollProgress.style.width = `${progressPercent}%`;
  }

  if (scrollTopBtn) {
    if (scrollTop > 280) {
      scrollTopBtn.classList.add('visible');
    } else {
      scrollTopBtn.classList.remove('visible');
    }
  }
});

if (scrollTopBtn) {
  scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

/* ==========================================================================
   Mobile Navigation Menu Toggle
   ========================================================================== */
const menuToggle = document.getElementById('menuToggle');
const siteNav = document.getElementById('siteNav');

if (menuToggle && siteNav) {
  menuToggle.addEventListener('click', () => {
    const isOpen = siteNav.classList.toggle('open');
    menuToggle.classList.toggle('open', isOpen);
    menuToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });

  siteNav.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      siteNav.classList.remove('open');
      menuToggle.classList.remove('open');
      menuToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

/* ==========================================================================
   Project Category Filter Tabs
   ========================================================================== */
const filterButtons = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('#projectsContainer .card');

filterButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    filterButtons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const filter = btn.getAttribute('data-filter');

    projectCards.forEach(card => {
      const category = card.getAttribute('data-category');
      if (filter === 'all' || category === filter) {
        card.classList.remove('hidden');
      } else {
        card.classList.add('hidden');
      }
    });
  });
});

/* ==========================================================================
   Certificate Lightbox Modal
   ========================================================================== */
const openCertModal = document.getElementById('openCertModal');
const certModal = document.getElementById('certModal');
const closeCertModal = document.getElementById('closeCertModal');
const certModalBackdrop = document.getElementById('certModalBackdrop');

function showCertModal() {
  if (certModal) certModal.removeAttribute('hidden');
  document.body.style.overflow = 'hidden';
}

function hideCertModal() {
  if (certModal) certModal.setAttribute('hidden', '');
  document.body.style.overflow = '';
}

if (openCertModal) {
  openCertModal.addEventListener('click', showCertModal);
  openCertModal.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      showCertModal();
    }
  });
}

if (closeCertModal) closeCertModal.addEventListener('click', hideCertModal);
if (certModalBackdrop) certModalBackdrop.addEventListener('click', hideCertModal);

/* ==========================================================================
   Confetti Explosion for CTF Flag Easter Egg
   ========================================================================== */
function triggerConfetti() {
  const canvas = document.getElementById('confettiCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const particles = [];
  const colors = ['#7c5cff', '#2fd4ff', '#3fb950', '#ffbd2e', '#ff5f56', '#ffffff'];

  for (let i = 0; i < 160; i++) {
    particles.push({
      x: canvas.width / 2 + (Math.random() * 200 - 100),
      y: canvas.height / 2 + (Math.random() * 100 - 50),
      vx: (Math.random() - 0.5) * 16,
      vy: (Math.random() - 0.7) * 18,
      size: Math.random() * 8 + 4,
      color: colors[Math.floor(Math.random() * colors.length)],
      alpha: 1,
      rotation: Math.random() * 360,
      vRot: (Math.random() - 0.5) * 10
    });
  }

  let animId;
  function updateConfetti() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    let active = false;

    particles.forEach(p => {
      p.x += p.vx;
      p.y += p.vy;
      p.vy += 0.45; // gravity
      p.vx *= 0.98;
      p.rotation += p.vRot;
      p.alpha -= 0.008;

      if (p.alpha > 0) {
        active = true;
        ctx.save();
        ctx.globalAlpha = p.alpha;
        ctx.translate(p.x, p.y);
        ctx.rotate((p.rotation * Math.PI) / 180);
        ctx.fillStyle = p.color;
        ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size);
        ctx.restore();
      }
    });

    if (active) {
      animId = requestAnimationFrame(updateConfetti);
    } else {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      cancelAnimationFrame(animId);
    }
  }

  updateConfetti();
}

/* ==========================================================================
   Interactive Cyber Particle Hero Canvas
   ========================================================================== */
(function initHeroCanvas() {
  const canvas = document.getElementById('heroCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let width, height;
  let particles = [];

  function resize() {
    const parent = canvas.parentElement;
    width = canvas.width = parent.offsetWidth;
    height = canvas.height = parent.offsetHeight;
  }

  resize();
  window.addEventListener('resize', resize);

  const count = Math.min(Math.floor(window.innerWidth / 24), 45);
  for (let i = 0; i < count; i++) {
    particles.push({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.8,
      vy: (Math.random() - 0.5) * 0.8,
      radius: Math.random() * 2 + 1.5
    });
  }

  function drawParticles() {
    ctx.clearRect(0, 0, width, height);
    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    const nodeColor = isDark ? 'rgba(124, 92, 255, 0.6)' : 'rgba(124, 92, 255, 0.35)';
    const lineColor = isDark ? 'rgba(47, 212, 255, 0.15)' : 'rgba(47, 212, 255, 0.10)';

    particles.forEach((p, i) => {
      p.x += p.vx;
      p.y += p.vy;

      if (p.x < 0 || p.x > width) p.vx *= -1;
      if (p.y < 0 || p.y > height) p.vy *= -1;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fillStyle = nodeColor;
      ctx.fill();

      for (let j = i + 1; j < particles.length; j++) {
        const p2 = particles[j];
        const dx = p.x - p2.x;
        const dy = p.y - p2.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 110) {
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.strokeStyle = lineColor;
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      }
    });

    requestAnimationFrame(drawParticles);
  }

  drawParticles();
})();

/* ==========================================================================
   Interactive Cyber Terminal Modal & Shell
   ========================================================================== */
const terminalModal = document.getElementById('terminalModal');
const terminalToggleBtn = document.getElementById('terminalToggleBtn');
const heroTerminalBtn = document.getElementById('heroTerminalBtn');
const closeTerminalBtn = document.getElementById('closeTerminalBtn');
const terminalCloseDot = document.getElementById('terminalCloseDot');
const terminalBackdrop = document.getElementById('terminalBackdrop');
const terminalInput = document.getElementById('terminalInput');
const terminalHistory = document.getElementById('terminalHistory');

function openTerminal() {
  if (terminalModal) {
    terminalModal.removeAttribute('hidden');
    document.body.style.overflow = 'hidden';
    if (terminalInput) terminalInput.focus();
  }
}

function closeTerminal() {
  if (terminalModal) {
    terminalModal.setAttribute('hidden', '');
    document.body.style.overflow = '';
  }
}

if (terminalToggleBtn) terminalToggleBtn.addEventListener('click', openTerminal);
if (heroTerminalBtn) heroTerminalBtn.addEventListener('click', openTerminal);
if (closeTerminalBtn) closeTerminalBtn.addEventListener('click', closeTerminal);
if (terminalCloseDot) terminalCloseDot.addEventListener('click', closeTerminal);
if (terminalBackdrop) terminalBackdrop.addEventListener('click', closeTerminal);

window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    hideCertModal();
    closeTerminal();
    const aiChat = document.getElementById('aiChatWindow');
    if (aiChat) aiChat.setAttribute('hidden', '');
  }
});

const commandHistoryList = [];
let historyIndex = -1;

const terminalCommands = {
  help: () => `Available commands:
  • <span class="highlight-cyan">whoami</span>       - Who is Ahmed Sameh?
  • <span class="highlight-cyan">about</span>        - Background & technical summary
  • <span class="highlight-cyan">skills</span>       - Technical stack & proficiencies
  • <span class="highlight-cyan">projects</span>     - Software & security projects
  • <span class="highlight-cyan">ctf</span>          - 1st Place CTF Challenge details
  • <span class="highlight-cyan">certs</span>        - Certifications & internships
  • <span class="highlight-cyan">cat flag.txt</span> - Inspect secret CTF challenge flag
  • <span class="highlight-cyan">contact</span>      - Contact email, phone, location
  • <span class="highlight-cyan">matrix</span>       - Digital matrix stream
  • <span class="highlight-cyan">sudo</span>         - Elevate privileges
  • <span class="highlight-cyan">clear</span>        - Clear terminal screen
  • <span class="highlight-cyan">exit</span>         - Close terminal shell`,

  whoami: () => `<span class="highlight-green">Ahmed Sameh AbdelGelil</span>
Computer Science Student @ AAST Smart Village (Grad 2028)
Focus: Cyber Security, Network Security, AI & Robotics, C# REST APIs & Web Dev.`,

  about: () => `Passionate CS student and cybersecurity enthusiast with proven competition success.
1st place winner in an IP Protocol Cyber Security competition.
Internship experience in C# REST APIs and modern web application development.`,

  skills: () => `Programming: C, C++, C#, Python, Java, JavaScript, SQL, HTML/CSS
Core Domains: Network Security, IP Protocols, Vulnerability Analysis, REST API Development, AI Workflows & Prompt Engineering`,

  projects: () => `1. <span class="highlight-cyan">IP Protocol Security Challenge</span> [1st Place Winner]
2. <span class="highlight-cyan">Project Management System</span> [C# Backend REST API]
3. <span class="highlight-cyan">Scanme QR Code Generator</span> [Web App] -> https://ahmeds34.github.io/Scanme-QR-code-generator/
4. <span class="highlight-cyan">Personal Portfolio v2</span> -> https://ahmeds34.github.io/Ahmedportfolio/`,

  ctf: () => `<span class="highlight-yellow">★ 1st Place Champion ★</span>
Capture the Flag / IP Protocol Cyber Security Challenge at AAST.
Specialized in packet inspection, protocol analysis, and threat detection.`,

  'cat flag.txt': () => {
    return `<span class="highlight-yellow">[CTF CHALLENGE DISCOVERED]</span>
Flag format: FLAG{...}
Flag Value: <span class="highlight-cyan">FLAG{4hm3d_c5_ctf_ch4mp}</span>
Type <span class="cmd-badge">submit_flag FLAG{4hm3d_c5_ctf_ch4mp}</span> to claim victory!`;
  },

  certs: () => `• Corelease IT Internship (C# Project Management System)
• Encrypt Core Front-End Internship
• Operations Team Member (2 Years) — Student Bridge Club (AAST)
• Anthropic AI Suite (Claude 101, AI Fluency, Claude Code in Action)
• Quantum AI & Encrypt Core Cyber Security Training`,

  contact: () => `📞 Phone: 01068773080
✉️ Email: ahmedsameh9034@gmail.com
📍 Location: AAST Smart Village, Giza, Egypt
💼 LinkedIn: https://www.linkedin.com/in/ahmed-sameh-9b2632331`,

  sudo: () => `<span style="color:#ef4444;">Permission denied: User 'guest' is not in the sudoers file. This incident will be reported to Ahmed 😉</span>`,

  matrix: () => `<span class="highlight-green">01000001 01101000 01101101 01100101 01100100
"There is a difference between knowing the path and walking the path." — Morpheus</span>`
};

if (terminalInput) {
  terminalInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      const rawInput = terminalInput.value.trim();
      const cmd = rawInput.toLowerCase();
      terminalInput.value = '';

      if (!rawInput) return;

      commandHistoryList.push(rawInput);
      historyIndex = commandHistoryList.length;

      if (cmd === 'exit') {
        closeTerminal();
        return;
      }

      if (cmd === 'clear') {
        if (terminalHistory) terminalHistory.innerHTML = '';
        return;
      }

      const promptLine = document.createElement('div');
      promptLine.innerHTML = `<span class="terminal-prompt">visitor@ahmed-sameh:~$</span> <span style="color:#fff;">${escapeHtml(rawInput)}</span>`;

      const outputLine = document.createElement('div');
      outputLine.className = 'terminal-output';

      // Check CTF Flag submission
      if (cmd.includes('flag{4hm3d_c5_ctf_ch4mp}') || cmd === 'submit_flag flag{4hm3d_c5_ctf_ch4mp}') {
        triggerConfetti();
        showToast('🎉 FLAG CAPTURED! Congratulations, Hacker!', '🏆');
        outputLine.innerHTML = `<span class="highlight-yellow">╔════════════════════════════════════════════════════╗
║  🚩 FLAG CAPTURED! [STATUS: PWNED & SOLVED]       ║
║  Congratulations! You solved Ahmed's CTF puzzle!   ║
╚════════════════════════════════════════════════════╝</span>`;
      } else if (terminalCommands[cmd]) {
        outputLine.innerHTML = terminalCommands[cmd]();
      } else {
        outputLine.innerHTML = `<span style="color:#ef4444;">command not found: ${escapeHtml(rawInput)}. Type <span class="cmd-badge">help</span> for a list of commands.</span>`;
      }

      if (terminalHistory) {
        terminalHistory.appendChild(promptLine);
        terminalHistory.appendChild(outputLine);
      }

      const terminalBody = document.getElementById('terminalBody');
      if (terminalBody) {
        terminalBody.scrollTop = terminalBody.scrollHeight;
      }
    } else if (e.key === 'ArrowUp') {
      if (historyIndex > 0) {
        historyIndex--;
        terminalInput.value = commandHistoryList[historyIndex] || '';
      }
    } else if (e.key === 'ArrowDown') {
      if (historyIndex < commandHistoryList.length - 1) {
        historyIndex++;
        terminalInput.value = commandHistoryList[historyIndex] || '';
      } else {
        historyIndex = commandHistoryList.length;
        terminalInput.value = '';
      }
    }
  });
}

/* ==========================================================================
   "Ask Ahmed AI" Assistant Chatbot
   ========================================================================== */
const aiWidgetToggle = document.getElementById('aiWidgetToggle');
const aiChatWindow = document.getElementById('aiChatWindow');
const closeAiChat = document.getElementById('closeAiChat');
const aiInputForm = document.getElementById('aiInputForm');
const aiUserInput = document.getElementById('aiUserInput');
const aiChatMessages = document.getElementById('aiChatMessages');

function toggleAiChat() {
  if (!aiChatWindow) return;
  const isHidden = aiChatWindow.hasAttribute('hidden');
  if (isHidden) {
    aiChatWindow.removeAttribute('hidden');
    if (aiUserInput) aiUserInput.focus();
  } else {
    aiChatWindow.setAttribute('hidden', '');
  }
}

if (aiWidgetToggle) aiWidgetToggle.addEventListener('click', toggleAiChat);
if (closeAiChat) closeAiChat.addEventListener('click', () => aiChatWindow?.setAttribute('hidden', ''));

function getAiResponse(query) {
  const q = query.toLowerCase();
  const isAr = document.documentElement.lang === 'ar';

  if (q.includes('ctf') || q.includes('competition') || q.includes('مسابقة') || q.includes('تحدي')) {
    return isAr
      ? 'أحمد فاز بالمركز الأول 🏆 في تحدي الأمن السيبراني لبروتوكول IP بالأكاديمية العربية (AAST)! أظهر مهارات قوية في تحليل البروتوكولات واكتشاف الثغرات.'
      : 'Ahmed won 1st Place 🏆 in the IP Protocol Cyber Security Challenge at AAST! He demonstrated deep knowledge in packet inspection and vulnerability analysis.';
  }

  if (q.includes('skill') || q.includes('stack') || q.includes('language') || q.includes('مهار') || q.includes('لغات')) {
    return isAr
      ? 'مهارات أحمد تشمل: C#, C++, Python, JavaScript, SQL, وتطوير واجهات برمجة التطبيقات (REST APIs)، بالإضافة إلى أمن الشبكات وبروتوكولات IP وأدوات الذكاء الاصطناعي الحديثة.'
      : "Ahmed's tech stack includes C#, C++, Python, JavaScript, SQL, Backend REST APIs, Network Security (IP protocols), and Anthropic AI prompt engineering suite.";
  }

  if (q.includes('intern') || q.includes('experience') || q.includes('bridge') || q.includes('club') || q.includes('تدريب') || q.includes('خبر') || q.includes('نادي') || q.includes('نشاط')) {
    return isAr
      ? 'خبرات وتدريبات أحمد:\n1. عضو فريق العمليات (سنتان) في نادي Student Bridge Club الطلابي بالأكاديمية العربية (AAST).\n2. تدريب Corelease: تطوير واجهات برمجة تطبيقات خلفية (REST API) بلغة C#.\n3. تدريب Encrypt Core: تطوير واجهات الويب الأمامية.'
      : 'Ahmed has substantial hands-on experience:\n1. Operations Team Member (2 Years) at the Student Bridge Club (AAST).\n2. Corelease Internship: C# Backend REST API for Project Management.\n3. Encrypt Core Internship: Front-End Web Development.';
  }

  if (q.includes('contact') || q.includes('email') || q.includes('phone') || q.includes('تواصل') || q.includes('ايميل') || q.includes('هاتف')) {
    return isAr
      ? 'يمكنك التواصل مع أحمد عبر:\n📞 هاتف: 01068773080\n✉️ بريد: ahmedsameh9034@gmail.com\nأو استخدام نموذج المراسلة في الأسفل!'
      : 'You can reach Ahmed via:\n📞 Phone: 01068773080\n✉️ Email: ahmedsameh9034@gmail.com\nOr send a message through the contact form below!';
  }

  if (q.includes('education') || q.includes('university') || q.includes('aast') || q.includes('دراسة') || q.includes('جامعة')) {
    return isAr
      ? 'أحمد يدرس بكالوريوس علوم الحاسوب في الأكاديمية العربية للعلوم والتكنولوجيا (AAST - القرية الذكية)، متوقع تخرجه في 2028.'
      : 'Ahmed is pursuing his BSc in Computer Science at the Arab Academy for Science & Technology (AAST – Smart Village), graduating in 2028.';
  }

  if (q.includes('ai') || q.includes('claude') || q.includes('ذكاء')) {
    return isAr
      ? 'أحمد حاصل على تدريبات وشهادات معتمدة من Anthropic في (Claude 101, AI Fluency, Claude Code in Action).'
      : 'Ahmed holds verified AI Certifications from Anthropic including Claude 101, AI Fluency Framework, and Claude Code in Action.';
  }

  return isAr
    ? 'أحمد طالب علوم حاسوب شغوف بالأمن السيبراني، الذكاء الاصطناعي، والباك اند بلغة #C. كيف يمكنني مساعدتك أكثر بخصوص مشاريعه أو خبراته؟'
    : "Ahmed is a passionate CS student focused on Cyber Security, AI, and C# Backend development. Feel free to ask about his projects, CTF achievements, or how to get in touch!";
}

function appendAiMessage(sender, text) {
  if (!aiChatMessages) return;
  const msgDiv = document.createElement('div');
  msgDiv.className = `ai-msg ${sender}`;
  msgDiv.innerHTML = `<p>${escapeHtml(text).replace(/\n/g, '<br>')}</p>`;
  aiChatMessages.appendChild(msgDiv);
  aiChatMessages.scrollTop = aiChatMessages.scrollHeight;
}

if (aiInputForm) {
  aiInputForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const query = aiUserInput?.value.trim();
    if (!query) return;

    appendAiMessage('user', query);
    aiUserInput.value = '';

    setTimeout(() => {
      const reply = getAiResponse(query);
      appendAiMessage('bot', reply);
    }, 450);
  });
}

// AI Quick Chips
document.querySelectorAll('.ai-chip').forEach(chip => {
  chip.addEventListener('click', () => {
    const query = chip.getAttribute('data-query');
    if (!query) return;
    const label = chip.textContent.trim();
    appendAiMessage('user', label);
    setTimeout(() => {
      const reply = getAiResponse(query);
      appendAiMessage('bot', reply);
    }, 400);
  });
});

/* ==========================================================================
   Interactive Contact Form Handling
   ========================================================================== */
const contactForm = document.getElementById('contactForm');
const formStatus = document.getElementById('formStatus');

if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('contactName')?.value.trim();
    const email = document.getElementById('contactEmail')?.value.trim();
    const subject = document.getElementById('contactSubject')?.value.trim();
    const message = document.getElementById('contactMessage')?.value.trim();

    const isArabic = document.documentElement.lang === 'ar';

    if (!name || !email || !subject || !message) {
      if (formStatus) {
        formStatus.className = 'form-status error';
        formStatus.textContent = isArabic ? 'يرجى ملء جميع الحقول المطلوبة.' : 'Please fill in all required fields.';
      }
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      if (formStatus) {
        formStatus.className = 'form-status error';
        formStatus.textContent = isArabic ? 'يرجى إدخال بريد إلكتروني صحيح.' : 'Please enter a valid email address.';
      }
      return;
    }

    if (formStatus) {
      formStatus.className = 'form-status success';
      formStatus.textContent = isArabic ? 'جاري فتح عميل البريد الإلكتروني لإرسال رسالتك...' : 'Opening your email client to send message...';
    }

    const mailtoUrl = `mailto:ahmedsameh9034@gmail.com?subject=${encodeURIComponent(`[Portfolio] ${subject}`)}&body=${encodeURIComponent(`Hi Ahmed,\n\n${message}\n\nFrom:\n${name}\nEmail: ${email}`)}`;

    setTimeout(() => {
      window.location.href = mailtoUrl;
      contactForm.reset();
      setTimeout(() => {
        if (formStatus) formStatus.textContent = '';
      }, 5000);
    }, 600);
  });
}

function escapeHtml(str) {
  return str.replace(/[&<>'"]/g, tag => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    "'": '&#39;',
    '"': '&quot;'
  }[tag] || tag));
}
