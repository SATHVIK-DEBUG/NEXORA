/* =========================================
   NEXORA — MAIN JAVASCRIPT
========================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* =====================================
       NAVBAR SCROLL EFFECT
    ===================================== */

    const navbar = document.querySelector(".navbar");

    function updateNavbar() {
        if (!navbar) return;

        if (window.scrollY > 30) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
    }

    window.addEventListener("scroll", updateNavbar);
    updateNavbar();


    /* =====================================
       SMOOTH ANCHOR SCROLLING
    ===================================== */

    document.querySelectorAll('a[href^="#"]').forEach(link => {

        link.addEventListener("click", event => {

            const targetId = link.getAttribute("href");

            if (!targetId || targetId === "#") {
                event.preventDefault();
                return;
            }

            const target = document.querySelector(targetId);

            if (target) {
                event.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }
        });

    });


    /* =====================================
       SCROLL REVEAL
    ===================================== */

    const revealElements = document.querySelectorAll(
        ".solution-card, .stat, .about-content, .about-visual, " +
        ".platform-content, .platform-visual, .contact-item, " +
        ".careers-cta"
    );

    revealElements.forEach(element => {
        element.classList.add("reveal");
    });


    const revealObserver = new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("visible");

                    revealObserver.unobserve(entry.target);
                }

            });

        },
        {
            threshold: 0.12
        }
    );


    revealElements.forEach(element => {
        revealObserver.observe(element);
    });


    /* =====================================
       STAGGER SOLUTION CARDS
    ===================================== */

    const solutionCards = document.querySelectorAll(
        ".solution-card"
    );

    solutionCards.forEach((card, index) => {

        card.style.transitionDelay =
            `${(index % 2) * 0.08}s`;

    });


    /* =====================================
       HERO PARALLAX
    ===================================== */

    const heroVisual = document.querySelector(".hero-visual");

    if (heroVisual && window.innerWidth > 760) {

        window.addEventListener("mousemove", event => {

            const x =
                (event.clientX / window.innerWidth - 0.5);

            const y =
                (event.clientY / window.innerHeight - 0.5);

            heroVisual.style.transform =
                `translate(${x * 12}px, ${y * 12}px)`;
        });

    }


    /* =====================================
       TERMINAL TEXT EFFECT
    ===================================== */

    const terminalStatus =
        document.querySelector(".terminal-status");

    if (terminalStatus) {

        const originalText =
            "NEXORA AI PLATFORM READY_";

        let cursorVisible = true;

        setInterval(() => {

            cursorVisible = !cursorVisible;

            terminalStatus.textContent =
                cursorVisible
                    ? originalText
                    : "NEXORA AI PLATFORM READY";

        }, 600);
    }


    /* =====================================
       CARD HOVER TILT
    ===================================== */

    const cards = document.querySelectorAll(
        ".solution-card"
    );

    cards.forEach(card => {

        card.addEventListener("mousemove", event => {

            if (window.innerWidth <= 760) return;

            const rect = card.getBoundingClientRect();

            const x =
                event.clientX - rect.left;

            const y =
                event.clientY - rect.top;

            const rotateY =
                ((x / rect.width) - 0.5) * 4;

            const rotateX =
                ((y / rect.height) - 0.5) * -4;

            card.style.transform =
                `translateY(-5px)
                 perspective(700px)
                 rotateX(${rotateX}deg)
                 rotateY(${rotateY}deg)`;
        });


        card.addEventListener("mouseleave", () => {

            card.style.transform = "";

        });

    });


    /* =====================================
       CURRENT YEAR
    ===================================== */

    const yearElements =
        document.querySelectorAll(".current-year");

    yearElements.forEach(element => {
        element.textContent =
            new Date().getFullYear();
    });


    console.log(
        "%cNEXORA SYSTEM INITIALIZED",
        "font-size:16px;font-weight:bold;"
    );

});
/* =========================================
   NEXORA SOLUTION POPUP
========================================= */

document.addEventListener("DOMContentLoaded", function () {

    const popup = document.getElementById("solutionPopup");
    const closeButton = document.getElementById("closeSolution");
    const overlay = document.querySelector(".solution-popup-overlay");

    const number = document.getElementById("popupNumber");
    const icon = document.getElementById("popupIcon");
    const title = document.getElementById("popupTitle");
    const description = document.getElementById("popupDescription");
    const features = document.getElementById("popupFeatures");

    if (!popup) {
        console.error("Nexora: Solution popup not found.");
        return;
    }


    const solutions = {

        ai: {
            number: "01",
            icon: "✦",
            title: "Artificial Intelligence",
            description:
                "Build intelligent systems that learn, adapt, and scale with your business.",

            features: [
                "AI-powered business systems",
                "Machine learning solutions",
                "Natural language processing",
                "Predictive intelligence",
                "Computer vision",
                "Custom AI platforms"
            ]
        },


        cloud: {
            number: "02",
            icon: "◈",
            title: "Cloud Infrastructure",
            description:
                "Secure and scalable cloud environments engineered for modern applications and global workloads.",

            features: [
                "Cloud architecture",
                "Infrastructure automation",
                "Scalable deployments",
                "Cloud security",
                "Performance optimization",
                "Infrastructure monitoring"
            ]
        },


        data: {
            number: "03",
            icon: "◌",
            title: "Data Intelligence",
            description:
                "Transform complex information into meaningful insights that help teams make faster decisions.",

            features: [
                "Data analytics platforms",
                "Business intelligence",
                "Real-time dashboards",
                "Data engineering",
                "Predictive analytics",
                "Decision intelligence"
            ]
        },


        automation: {
            number: "04",
            icon: "⌁",
            title: "Automation",
            description:
                "Intelligent workflows designed to eliminate repetitive processes and increase operational efficiency.",

            features: [
                "Workflow automation",
                "AI-powered processes",
                "Enterprise integrations",
                "Process optimization",
                "Automated reporting",
                "Intelligent operations"
            ]
        },


        web: {
            number: "05",
            icon: "◫",
            title: "Web Development",
            description:
                "High-performance digital experiences built for speed, scalability, and modern businesses.",

            features: [
                "Enterprise websites",
                "Web applications",
                "SaaS platforms",
                "Frontend engineering",
                "Backend systems",
                "Performance optimization"
            ]
        },


        mobile: {
            number: "06",
            icon: "▣",
            title: "App Development",
            description:
                "Powerful mobile applications designed to connect businesses with people anywhere.",

            features: [
                "iOS applications",
                "Android applications",
                "Cross-platform development",
                "Mobile UI engineering",
                "API integration",
                "App performance optimization"
            ]
        }

    };


    /* Open popup */

    document.querySelectorAll(".solution-click").forEach(function (card) {

        card.addEventListener("click", function () {

            const key = card.getAttribute("data-solution");

            const data = solutions[key];

            if (!data) return;


            number.textContent = data.number;

            icon.textContent = data.icon;

            title.textContent = data.title;

            description.textContent = data.description;


            features.innerHTML = "";


            data.features.forEach(function (feature) {

                const item = document.createElement("div");

                item.className = "popup-feature";

                item.textContent = feature;

                features.appendChild(item);

            });


            popup.classList.add("show");

            document.body.style.overflow = "hidden";

        });

    });


    /* Close popup */

    function closePopup() {

        popup.classList.remove("show");

        document.body.style.overflow = "";

    }


    closeButton.addEventListener("click", closePopup);

    overlay.addEventListener("click", closePopup);


    /* ESC */

    document.addEventListener("keydown", function (event) {

        if (event.key === "Escape") {

            closePopup();

        }

    });

});
/* =========================================
   NEXORA AI DEMO
========================================= */

document.addEventListener("DOMContentLoaded", function () {

    const terminal = document.getElementById("aiTerminal");
    const input = document.getElementById("aiCommand");

    if (!terminal || !input) return;


    const responses = {

        help: `
Available commands:

  about          Learn about Nexora
  solutions      Explore our technology
  status         Check Nexora systems
  ai             Ask about our AI platform
  contact        Connect with Nexora
  clear          Clear terminal

Try typing one of the commands above.
`,

        about: `
NEXORA TECHNOLOGIES

We engineer intelligent digital systems
for businesses building what comes next.

Core capabilities:
• Artificial Intelligence
• Cloud Infrastructure
• Data Intelligence
• Automation
• Web Development
• App Development
`,

        solutions: `
NEXORA SOLUTIONS

01  Artificial Intelligence
02  Cloud Infrastructure
03  Data Intelligence
04  Automation
05  Web Development
06  App Development

Our systems are designed around
intelligence, scalability and performance.
`,

        status: `
NEXORA SYSTEM STATUS

AI CORE ................. ONLINE
CLOUD NETWORK ........... ONLINE
DATA ENGINE ............. ONLINE
AUTOMATION LAYER ........ ONLINE
SECURITY SYSTEM ......... ACTIVE

All core systems operational.
`,

        ai: `
NEXORA AI CORE

Our AI platform combines machine learning,
automation and data intelligence to help
organizations build smarter systems.

Current engine:
NX-INTELLIGENCE / v4.2
STATUS: OPERATIONAL
`,

        contact: `
NEXORA COMMUNICATIONS

Ready to build something intelligent?

Email:
hello@nexora.example

Location:
Hyderabad / Global

Response channel:
ACTIVE
`,

        clear: "CLEAR"

    };


    function addLine(text, className) {

        const element = document.createElement("div");

        element.className = className;

        element.textContent = text;

        terminal.insertBefore(
            element,
            terminal.querySelector(".terminal-input-row")
        );

    }


    function runCommand(command) {

        const cleanCommand = command
            .trim()
            .toLowerCase();


        if (!cleanCommand) return;


        /* User command */

        const userLine = document.createElement("div");

        userLine.className = "ai-user-line";

        userLine.innerHTML =
            '<span class="terminal-prompt">nexora@core:~$</span> ' +
            escapeHTML(cleanCommand);

        terminal.insertBefore(
            userLine,
            terminal.querySelector(".terminal-input-row")
        );


        /* Clear */

        if (cleanCommand === "clear") {

            const inputRow =
                terminal.querySelector(".terminal-input-row");

            terminal.innerHTML = "";

            terminal.appendChild(inputRow);

            input.focus();

            return;
        }


        /* Response */

        const response =
            responses[cleanCommand] ||
            `
Command not recognized.

Type "help" to see available Nexora commands.
`;


        const responseElement =
            document.createElement("div");

        responseElement.className = "ai-response";

        responseElement.textContent = response;

        terminal.insertBefore(
            responseElement,
            terminal.querySelector(".terminal-input-row")
        );


        terminal.scrollTop = terminal.scrollHeight;

    }


    function escapeHTML(text) {

        const div = document.createElement("div");

        div.textContent = text;

        return div.innerHTML;

    }


    input.addEventListener("keydown", function (event) {

        if (event.key === "Enter") {

            runCommand(input.value);

            input.value = "";

        }

    });

    /* Click terminal to focus input */

    terminal.addEventListener("click", function () {

        input.focus();

    });

});

/* =========================================
   FAQ ACCORDION
========================================= */

document.addEventListener("DOMContentLoaded", function () {

    const faqQuestions =
        document.querySelectorAll(".faq-question");


    faqQuestions.forEach(function (question) {

        question.addEventListener("click", function () {

            const currentItem =
                question.parentElement;


            /* Close other FAQs */

            document.querySelectorAll(".faq-item")
                .forEach(function (item) {

                    if (item !== currentItem) {
                        item.classList.remove("active");
                    }

                });


            /* Toggle current FAQ */

            currentItem.classList.toggle("active");

        });

    });

});
/* =========================================
   NEXORA TEAM PROFILES
========================================= */

document.addEventListener("DOMContentLoaded", function () {

    const popup =
        document.getElementById("teamPopup");

    const closeButton =
        document.getElementById("teamPopupClose");

    const overlay =
        document.querySelector(".team-popup-overlay");


    if (!popup) return;


    const avatar =
        document.getElementById("teamPopupAvatar");

    const number =
        document.getElementById("teamPopupNumber");

    const name =
        document.getElementById("teamPopupName");

    const role =
        document.getElementById("teamPopupRole");

    const bio =
        document.getElementById("teamPopupBio");

    const tags =
        document.getElementById("teamPopupTags");


    const members = {

        arjun: {
            number: "01",
            initials: "AR",
            name: "Arjun Rao",
            role: "Co-Founder & CEO",
            bio:
                "Arjun leads Nexora's company strategy, product direction, and long-term vision, working closely with engineering and product teams to turn ambitious ideas into technology.",
            tags: [
                "Strategy",
                "Product",
                "Leadership",
                "Innovation"
            ]
        },


        meera: {
            number: "02",
            initials: "MS",
            name: "Meera Shah",
            role: "Co-Founder & CTO",
            bio:
                "Meera leads Nexora's technical direction, AI research, and engineering organization, focusing on building scalable intelligent systems.",
            tags: [
                "Artificial Intelligence",
                "Engineering",
                "Research",
                "Architecture"
            ]
        },


        rohan: {
            number: "03",
            initials: "RK",
            name: "Rohan Kapoor",
            role: "VP of Engineering",
            bio:
                "Rohan works across Nexora's engineering teams to design reliable systems, improve development practices, and build infrastructure for large-scale products.",
            tags: [
                "Engineering",
                "Cloud",
                "Infrastructure",
                "Systems"
            ]
        },


        ananya: {
            number: "04",
            initials: "AP",
            name: "Ananya Patel",
            role: "Head of AI Research",
            bio:
                "Ananya leads research initiatives exploring machine learning, intelligent automation, and new ways AI can transform complex business workflows.",
            tags: [
                "Machine Learning",
                "AI Research",
                "Automation",
                "Data"
            ]
        },


        vikram: {
            number: "05",
            initials: "VS",
            name: "Vikram Singh",
            role: "Product Director",
            bio:
                "Vikram connects technology, user experience, and business strategy to shape products that solve meaningful problems for modern organizations.",
            tags: [
                "Product",
                "UX",
                "Strategy",
                "Technology"
            ]
        },


        isha: {
            number: "06",
            initials: "IK",
            name: "Isha Kapoor",
            role: "Design Lead",
            bio:
                "Isha leads product design at Nexora, creating intuitive digital experiences and defining the visual language across the company's products.",
            tags: [
                "Product Design",
                "UX",
                "Visual Design",
                "Innovation"
            ]
        }

    };


    /* Open profile */

    document.querySelectorAll(".team-card")
        .forEach(function (card) {

            card.addEventListener("click", function () {

                const memberKey =
                    card.getAttribute("data-member");

                const member =
                    members[memberKey];

                if (!member) return;


                avatar.textContent =
                    member.initials;

                number.textContent =
                    member.number;

                name.textContent =
                    member.name;

                role.textContent =
                    member.role;

                bio.textContent =
                    member.bio;


                tags.innerHTML = "";


                member.tags.forEach(function (tag) {

                    const element =
                        document.createElement("span");

                    element.className =
                        "team-tag";

                    element.textContent =
                        tag;

                    tags.appendChild(element);

                });


                popup.classList.add("active");

                document.body.style.overflow =
                    "hidden";

            });

        });


    /* Close */

    function closeTeamPopup() {

        popup.classList.remove("active");

        document.body.style.overflow =
            "";

    }


    closeButton.addEventListener(
        "click",
        closeTeamPopup
    );


    overlay.addEventListener(
        "click",
        closeTeamPopup
    );


    document.addEventListener(
        "keydown",
        function (event) {

            if (event.key === "Escape") {
                closeTeamPopup();
            }

        }
    );

});