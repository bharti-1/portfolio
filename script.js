/* =========================================================
   MOBILE MENU
========================================================= */

const menuToggle =
    document.getElementById("menu-toggle");

const navLinks =
    document.getElementById("nav-links");


if (menuToggle && navLinks) {

    menuToggle.addEventListener(
        "click",
        () => {

            const isOpen =
                navLinks.classList.toggle(
                    "active"
                );

            menuToggle.classList.toggle(
                "active"
            );

            menuToggle.setAttribute(
                "aria-expanded",
                isOpen
            );

        }
    );


    document
        .querySelectorAll(".nav-links a")
        .forEach(link => {

            link.addEventListener(
                "click",
                () => {

                    navLinks.classList.remove(
                        "active"
                    );

                    menuToggle.classList.remove(
                        "active"
                    );

                    menuToggle.setAttribute(
                        "aria-expanded",
                        "false"
                    );

                }
            );

        });

}


/* =========================================================
   TYPING ANIMATION
========================================================= */

const typingText =
    document.getElementById(
        "typing-text"
    );


const roles = [

    "Data Analytics",

    "Business Intelligence",

    "Product Analytics",

    "Problem Solving"

];


let roleIndex = 0;

let characterIndex =
    roles[0].length;

let deleting = false;


function typeRole() {

    if (!typingText) {
        return;
    }


    const currentRole =
        roles[roleIndex];


    if (!deleting) {

        typingText.textContent =
            currentRole.substring(
                0,
                characterIndex
            );


        characterIndex++;


        if (
            characterIndex >
            currentRole.length
        ) {

            deleting = true;


            setTimeout(
                typeRole,
                1600
            );


            return;
        }

    }

    else {

        typingText.textContent =
            currentRole.substring(
                0,
                characterIndex
            );


        characterIndex--;


        if (characterIndex < 0) {

            deleting = false;


            roleIndex =
                (roleIndex + 1)
                % roles.length;


            characterIndex = 0;

        }

    }


    setTimeout(
        typeRole,
        deleting ? 45 : 75
    );

}


setTimeout(
    typeRole,
    1500
);


/* =========================================================
   SCROLL PROGRESS
========================================================= */

const progressBar =
    document.getElementById(
        "scroll-progress"
    );


function updateProgress() {

    if (!progressBar) {
        return;
    }


    const scrollTop =
        document.documentElement.scrollTop;


    const scrollableHeight =

        document.documentElement.scrollHeight

        -

        document.documentElement.clientHeight;


    const progress =

        scrollableHeight > 0

            ? (
                scrollTop
                / scrollableHeight
            ) * 100

            : 0;


    progressBar.style.width =
        `${progress}%`;

}


window.addEventListener(
    "scroll",
    updateProgress
);


/* =========================================================
   CURSOR GLOW
========================================================= */

const cursorGlow =
    document.getElementById(
        "cursor-glow"
    );


window.addEventListener(
    "mousemove",
    event => {

        if (!cursorGlow) {
            return;
        }


        cursorGlow.style.left =
            `${event.clientX}px`;


        cursorGlow.style.top =
            `${event.clientY}px`;

    }
);


/* =========================================================
   SCROLL REVEAL
========================================================= */

const revealElements =
    document.querySelectorAll(
        ".reveal"
    );


const revealObserver =
    new IntersectionObserver(

        entries => {

            entries.forEach(
                entry => {

                    if (
                        !entry.isIntersecting
                    ) {
                        return;
                    }


                    entry.target
                        .classList
                        .add("visible");


                    revealObserver
                        .unobserve(
                            entry.target
                        );

                }
            );

        },

        {
            threshold: 0.12
        }

    );


revealElements.forEach(
    element => {

        revealObserver.observe(
            element
        );

    }
);


/* =========================================================
   EXPERIENCE TABS
========================================================= */

const experienceTabs =
    document.querySelectorAll(
        ".experience-tab"
    );


const experienceContents =
    document.querySelectorAll(
        ".experience-content"
    );


experienceTabs.forEach(
    tab => {

        tab.addEventListener(
            "click",
            () => {

                experienceTabs.forEach(
                    item => {

                        item.classList.remove(
                            "active"
                        );

                    }
                );


                experienceContents.forEach(
                    item => {

                        item.classList.remove(
                            "active"
                        );

                    }
                );


                tab.classList.add(
                    "active"
                );


                const targetId =
                    tab.dataset.tab;


                const target =
                    document.getElementById(
                        targetId
                    );


                if (target) {

                    target.classList.add(
                        "active"
                    );

                }

            }
        );

    }
);


/* =========================================================
   PROJECT TABS
========================================================= */

const projectTabs =
    document.querySelectorAll(
        ".project-tab"
    );


const projectContents =
    document.querySelectorAll(
        ".project-tab-content"
    );


projectTabs.forEach(
    tab => {

        tab.addEventListener(
            "click",
            () => {

                projectTabs.forEach(
                    item => {

                        item.classList.remove(
                            "active"
                        );

                    }
                );


                projectContents.forEach(
                    item => {

                        item.classList.remove(
                            "active"
                        );

                    }
                );


                tab.classList.add(
                    "active"
                );


                const targetId =
                    tab.dataset.projectTab;


                const target =
                    document.getElementById(
                        targetId
                    );


                if (target) {

                    target.classList.add(
                        "active"
                    );

                }

            }
        );

    }
);


/* =========================================================
   ACTIVE NAVIGATION
========================================================= */

const pageSections =
    document.querySelectorAll(
        "main section[id]"
    );


const navigationLinks =
    document.querySelectorAll(
        ".nav-links a"
    );


function updateActiveNavigation() {

    let currentSection = "";


    pageSections.forEach(
        section => {

            const sectionTop =
                section.offsetTop - 160;


            if (
                window.scrollY >=
                sectionTop
            ) {

                currentSection =
                    section.getAttribute(
                        "id"
                    );

            }

        }
    );


    navigationLinks.forEach(
        link => {

            link.classList.remove(
                "active"
            );


            if (
                link.getAttribute(
                    "href"
                )
                ===
                `#${currentSection}`
            ) {

                link.classList.add(
                    "active"
                );

            }

        }
    );

}


window.addEventListener(
    "scroll",
    updateActiveNavigation
);


/* =========================================================
   METRIC COUNTERS
========================================================= */

const metricNumbers =
    document.querySelectorAll(
        ".metric-number[data-target]"
    );


const metricObserver =
    new IntersectionObserver(

        entries => {

            entries.forEach(
                entry => {

                    if (
                        !entry.isIntersecting
                    ) {
                        return;
                    }


                    const element =
                        entry.target;


                    const target =
                        parseFloat(
                            element.dataset.target
                        );


                    const decimals =
                        parseInt(
                            element.dataset.decimals
                            || "0"
                        );


                    const suffix =
                        element.dataset.suffix
                        || "";


                    const duration =
                        1200;


                    const start =
                        performance.now();


                    function animateCounter(
                        time
                    ) {

                        const elapsed =
                            time - start;


                        const progress =
                            Math.min(
                                elapsed
                                / duration,
                                1
                            );


                        const easedProgress =

                            1

                            -

                            Math.pow(
                                1 - progress,
                                3
                            );


                        const currentValue =
                            target
                            * easedProgress;


                        element.textContent =

                            currentValue.toFixed(
                                decimals
                            )

                            +

                            suffix;


                        if (
                            progress < 1
                        ) {

                            requestAnimationFrame(
                                animateCounter
                            );

                        }

                    }


                    requestAnimationFrame(
                        animateCounter
                    );


                    metricObserver.unobserve(
                        element
                    );

                }
            );

        },

        {
            threshold: 0.5
        }

    );


metricNumbers.forEach(
    metric => {

        metricObserver.observe(
            metric
        );

    }
);


/* =========================================================
   INITIAL STATE
========================================================= */

updateProgress();

updateActiveNavigation();