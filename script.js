const translations = {
    en: {
        // Sidebar
        'contact-title': 'CONTACT',
        'email-label': 'Email',
        'phone-label': 'Phone',
        'city-label': 'Locality',
        'birth-label': 'Born',
        'skills-title': 'SKILLS',
        'languages-title': 'LANGUAGES',
        'lang-polish': 'Polish',
        'lang-polish-level': 'Native',
        'lang-english': 'English',
        'lang-english-level': 'B2',
        'lang-german': 'German',
        'lang-german-level': 'A1',
        'interests-title': 'INTERESTS',
        'interest-economics': 'Economics',
        'interest-geopolitics': 'Geopolitics',
        'interest-automotive': 'Automotive',
        'interest-tennis': 'Tennis',

        // Main Content
        'name': 'Wiktoria Ślosarczyk',
        'title': 'PROGRAMMER TECHNICIAN • IT',
        'about-title': 'ABOUT ME',
        'about-text': 'IT graduate with the title of Programmer Technician (INF.03 and INF.04 qualifications passed). Hands-on experience in relational database administration and backend development in Node.js, gained during two internships. Looking for an opportunity to grow professionally in backend and database work.',

        // Education
        'education-title': 'EDUCATION',
        'school-name': 'Private IT technical school',
        'school-dates': '2021 – 2026',
        'school-subtitle': 'Programmer Technician (diploma obtained)',
        'school-desc': 'Programming, databases, computer networks, operating systems.',
        'qualifications-bold': 'Vocational qualifications passed:',
        'qual-inf03': 'INF.03 — Developing and administering websites, web applications and databases',
        'qual-inf04': 'INF.04 — Designing, programming and testing applications',

        // Experience
        'experience-title': 'EXPERIENCE',
        'supremis-title': 'SUPREMIS',
        'supremis-dates': '2023 & 2025',
        'supremis-subtitle': 'Professional Internship — IT',
        'supremis-duration': '1 month each',
        'placement1-bold': 'First placement (2023):',
        'placement1-text': 'Relational database administration and management.',
        'placement2-bold': 'Second placement (2025):',
        'placement2-text': 'Design and implementation of a REST API in Node.js, ETL pipeline handling and database integration.',
        'council-title': 'Student Council',
        'council-dates': '2024/2025',
        'council-subtitle': 'Vice-Chairperson',
        'council-duration': 'school year',
        'council-desc': 'Representing the student community, organising school events, cooperating with teaching staff.',

        // Projects
        'projects-title': 'PROJECTS',
        'project-name': 'REST API with ETL Pipeline',
        'project-date': '2025',
        'project-tech': 'Node.js · JavaScript · SQL',
        'project-desc': 'Server-side application with REST endpoints, data processing logic (ETL) and database integration. Developed during an internship at SUPREMIS.',

        // Footer
        'footer-text': '© 2026 Wiktoria Slosarczyk. All rights reserved.'
    },
    pl: {
        // Sidebar
        'contact-title': 'KONTAKT',
        'email-label': 'Email',
        'phone-label': 'Telefon',
        'city-label': 'Miejscowość',
        'birth-label': 'Data urodzenia',
        'skills-title': 'UMIEJĘTNOŚCI',
        'languages-title': 'JĘZYKI',
        'lang-polish': 'Polski',
        'lang-polish-level': 'Rodzimy',
        'lang-english': 'Angielski',
        'lang-english-level': 'B2',
        'lang-german': 'Niemiecki',
        'lang-german-level': 'A1',
        'interests-title': 'ZAINTERESOWANIA',
        'interest-economics': 'Ekonomia',
        'interest-geopolitics': 'Geopolityka',
        'interest-automotive': 'Motoryzacja',
        'interest-tennis': 'Tenis',

        // Main Content
        'name': 'Wiktoria Ślosarczyk',
        'title': 'TECHNIK PROGRAMISTA • IT',
        'about-title': 'O MNIE',
        'about-text': 'Absolwentka technikum informatycznego z tytułem technika programisty — zdane egzaminy zawodowe INF.03 i INF.04. Praktyczne doświadczenie w administrowaniu relacyjnymi bazami danych oraz tworzeniu aplikacji backendowych w Node.js, zdobyte podczas dwóch staży zawodowych. Poszukuję możliwości dalszego rozwoju w obszarze backendu i baz danych.',

        // Education
        'education-title': 'EDUKACJA',
        'school-name': 'Prywatne Technikum Informatyczne',
        'school-dates': '2021 – 2026',
        'school-subtitle': 'Technik programista (dyplom uzyskany)',
        'school-desc': 'Programowanie, bazy danych, sieci komputerowe, systemy operacyjne.',
        'qualifications-bold': 'Zdane kwalifikacje zawodowe:',
        'qual-inf03': 'INF.03 — Tworzenie i administrowanie stronami i aplikacjami internetowymi oraz bazami danych',
        'qual-inf04': 'INF.04 — Projektowanie, programowanie i testowanie aplikacji',

        // Experience
        'experience-title': 'DOŚWIADCZENIE',
        'supremis-title': 'SUPREMIS',
        'supremis-dates': '2023 i 2025',
        'supremis-subtitle': 'Staż zawodowy — IT',
        'supremis-duration': '1 miesiąc każdy',
        'placement1-bold': 'Pierwszy staż (2023):',
        'placement1-text': 'Administracja i zarządzanie relacyjnymi bazami danych.',
        'placement2-bold': 'Drugi staż (2025):',
        'placement2-text': 'Projektowanie i implementacja REST API w Node.js, obsługa pipelinów ETL i integracja bazy danych.',
        'council-title': 'Samorząd Uczniowski',
        'council-dates': '2024/2025',
        'council-subtitle': 'Wiceprzewodniczący',
        'council-duration': 'rok szkolny',
        'council-desc': 'Reprezentowanie społeczności uczniów, organizowanie imprez szkolnych, współpraca z kadrą pedagogiczną.',

        // Projects
        'projects-title': 'PROJEKTY',
        'project-name': 'REST API z pipelinenem ETL',
        'project-date': '2025',
        'project-tech': 'Node.js · JavaScript · SQL',
        'project-desc': 'Aplikacja serwerowa z punktami końcowymi REST, logiką przetwarzania danych (ETL) i integracją bazy danych. Opracowana podczas stażu w firmie SUPREMIS.',

        // Footer
        'footer-text': '© 2026 Wiktoria Ślosarczyk. Wszystkie prawa zastrzeżone.'
    }
};

let currentLanguage = localStorage.getItem('language') || 'en';

// Initialize language on page load
document.addEventListener('DOMContentLoaded', () => {
    setLanguage(currentLanguage);
});

function switchLanguage() {
    currentLanguage = currentLanguage === 'en' ? 'pl' : 'en';
    setLanguage(currentLanguage);
    localStorage.setItem('language', currentLanguage);
}

function setLanguage(lang) {
    currentLanguage = lang;

    // Update all elements with translations
    for (const [key, value] of Object.entries(translations[lang])) {
        const element = document.getElementById(key);
        if (element) {
            element.textContent = value;
        }
    }

    // Update language button
    const langBtn = document.getElementById('langBtn');
    if (langBtn) {
        const langCurrent = langBtn.querySelector('.lang-current');
        const langOther = langBtn.querySelector('.lang-other');

        if (lang === 'en') {
            langCurrent.textContent = 'EN';
            langOther.textContent = 'PL';
        } else {
            langCurrent.textContent = 'PL';
            langOther.textContent = 'EN';
        }
    }

    // Update HTML lang attribute
    document.documentElement.lang = lang;
}
