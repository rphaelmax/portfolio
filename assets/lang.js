const translations = {
    pt: {
        nav_home: "Início",
        nav_about: "Sobre",
        nav_skills: "Habilidades",
        nav_projects: "Projetos",
        nav_contact: "Contato",
        hero_title: "Olá, eu sou Raphael Max",
        hero_description: "Desenvolvedor Full Stack",
        hero_btnProject: "Ver projetos",
        about_title: "Sobre mim",
        about_description: `Sou estudante de TI e gosto de tudo que envolve computação, desde jogar até cibersegurança. 
A tecnologia sempre fez parte do meu dia a dia e é algo que realmente me interessa.

Costumo desenvolver projetos por conta própria como forma de aprendizado e curto explorar diferentes linguagens e áreas da tecnologia. 
Não me prendo a uma coisa só, porque acredito que testar, errar e aprender faz parte do processo.

Meu objetivo é continuar evoluindo, ganhar experiência prática e me tornar um desenvolvedor full stack qualificado, construindo uma base sólida para o futuro.`,
        skills_title: "Habilidades",
        projects_title: "Projetos",
        projects_firstTitle: "Site E-Commerce",
        projects_firstDescription: "Projeto de e-commerce fictício, desenvolvido para estudo e prática de desenvolvimento web",
        projects_secondTitle: "Taskboard",
        projects_secondDescription: "Um gerenciador de tarefas estilo Kanban para criar, editar e organizar tarefas visualmente entre etapas do fluxo de trabalho.",
        projects_thirdTitle: "Tulen",
        projects_thirdDescription: "Recriação de site com CSS Grid; desenvolvido em sala de aula",
        footer_cellphone_label: "Telefone: ",
        contact_title: "Entre em Contato",
        contact_btnEnviar: "Enviar",
        contact_lblName: "Nome",
        contact_lblCellphone: "Telefone",
        contact_lblEmail: "E-mail",
        contact_lblMessage: "Mensagem",
    },

    en: {
        nav_home: "Home",
        nav_about: "About",
        nav_skills: "Skills",
        nav_projects: "Projects",
        nav_contact: "Contact",
        hero_title: "Hi, I'm Raphael Max",
        hero_description: "Full Stack Developer",
        hero_btnProject: "View projects",
        about_title: "About me",
        about_description: `I am an IT student and I enjoy everything related to computing, from gaming to cybersecurity. 
Technology has always been part of my daily life and it genuinely interests me.

I often develop personal projects as a way to learn and enjoy exploring different programming languages and areas of technology. 
I don’t limit myself to just one thing, because I believe testing, making mistakes, and learning are part of the process.

My goal is to keep evolving, gain practical experience, and become a well-prepared full stack developer, building a solid foundation for the future.`,
        skills_title: "Skills",
        projects_title: "Projects",
        projects_firstTitle: "E-Commerce Website",
        projects_firstDescription: "Fictional e-commerce project developed for study and web development practice",
        projects_secondTitle: "Taskboard",
        projects_secondDescription: "A Kanban-style task manager that allows users to create, edit, and visually organize tasks across workflow stages",
        projects_thirdTitle: "Tulen",
        projects_thirdDescription: "Website recreation using CSS Grid; developed in class",
        footer_cellphone_label: "Phone: ",
        contact_title: "Get in Touch",
        contact_btnEnviar: "Send",
        contact_lblName: "Name",
        contact_lblCellphone: "Phone Number",
        contact_lblEmail: "E-mail",
        contact_lblMessage: "Your message",
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