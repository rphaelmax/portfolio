const translations = {
    pt: {
        nav_home: "Início",
        nav_about: "Sobre",
        nav_skills: "Habilidades",
        nav_projects: "Projetos",
        nav_contact: "Contato",
        hero_title: "Raphael Max,",
        hero_description: "Desenvolvedor Full Stack",
        hero_btnProject: "Ver projetos",
        about_title: "Sobre mim",
        about_description: `Sou estudante de TI e gosto de tudo que envolve computação, desde jogos até cibersegurança. 
        A tecnologia sempre fez parte do meu dia a dia e é algo que realmente desperta meu interesse.

        Costumo desenvolver projetos por conta própria como forma de aprendizado, experimentando diferentes linguagens e áreas da computação. 
        Gosto de testar novas ideias e encarar os erros como parte natural do processo de evolução.

        Meu objetivo é continuar evoluindo como desenvolvedor, ganhando experiência prática e ampliando meus conhecimentos enquanto construo projetos e soluções.`,
        projects_title: "Projetos",
        projects_firstTitle: "Site E-Commerce",
        projects_firstDescription: "Projeto de e-commerce fictício, desenvolvido para estudo e prática de desenvolvimento web",
        projects_secondTitle: "Taskboard",
        projects_secondDescription: "Um gerenciador de tarefas estilo Kanban para criar, editar e organizar tarefas visualmente entre etapas do fluxo de trabalho.",
        projects_thirdTitle: "Tulen",
        projects_thirdDescription: "Recriação de site com CSS Grid; desenvolvido em sala de aula",
        btnVisit: "Visitar Site",
    },

    en: {
        nav_home: "Home",
        nav_about: "About",
        nav_skills: "Skills",
        nav_projects: "Projects",
        nav_contact: "Contact",
        hero_title: "Raphael Max,",
        hero_description: "Full Stack Developer",
        hero_btnProject: "View projects",
        about_title: "About me",
        about_description: `I am an IT student and I enjoy everything related to computing, from gaming to cybersecurity. 
        Technology has always been a part of my daily life and it is something that genuinely interests me.

        I usually develop projects on my own as a way to learn, experimenting with different programming languages and areas of computing. 
        I enjoy testing new ideas and looking at mistakes as a natural consequence of the learning and improvement process.

        My goal is to continue evolving as a developer, gaining practical experience and expanding my knowledge while building projects and solutions.`,
        projects_title: "Projects",
        projects_firstTitle: "E-Commerce Website",
        projects_firstDescription: "Fictional e-commerce project developed for study and web development practice",
        projects_secondTitle: "Taskboard",
        projects_secondDescription: "A Kanban-style task manager that allows users to create, edit, and visually organize tasks across workflow stages",
        projects_thirdTitle: "Tulen",
        projects_thirdDescription: "Website recreation using CSS Grid; developed in class",
        btnVisit: "Visit Site",
    }
};

function detectLanguage() {
    const savedLang = localStorage.getItem("language");
    if (savedLang) return savedLang;

    const browserLang = navigator.language.slice(0, 2);
    return translations[browserLang] ? browserLang : "pt";
}

document.getElementById("lang-toggle").addEventListener("click", () => {
    const currentLang = localStorage.getItem("language") || detectLanguage();
    const newLang = currentLang === "pt" ? "en" : "pt";
    setLanguage(newLang);
});

function updateLangButton(lang) {
    const btn = document.getElementById("lang-toggle");
    btn.textContent = lang === "pt" ? "🇺🇸 EN" : "🇧🇷 PT-BR";
}

function setLanguage(lang) {
    if (!translations[lang]) return;

    document.querySelectorAll("[data-i18n]").forEach(el => {
        const key = el.dataset.i18n;
        el.textContent = translations[lang][key];
    });

    document.documentElement.lang = lang;
    localStorage.setItem("language", lang);

    updateLangButton(lang);
}

document.addEventListener("DOMContentLoaded", () => {
    const lang = detectLanguage();
    setLanguage(lang);
});