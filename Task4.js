/* =========================================
   TASK 04 - PERSONAL PORTFOLIO
========================================= */


/* =========================================
   MOBILE MENU
========================================= */

const menuBtn =
    document.getElementById("menuBtn");

const navMenu =
    document.getElementById("navMenu");


menuBtn.addEventListener(
    "click",
    function () {

        navMenu.classList.toggle("show");

        if (
            navMenu.classList.contains("show")
        ) {

            menuBtn.textContent = "✕";

        } else {

            menuBtn.textContent = "☰";

        }

    }
);


/* =========================================
   CLOSE MOBILE MENU
========================================= */

const navLinks =
    document.querySelectorAll(".nav-link");


navLinks.forEach(
    function (link) {

        link.addEventListener(
            "click",
            function () {

                navMenu.classList.remove(
                    "show"
                );

                menuBtn.textContent = "☰";

            }
        );

    }
);


/* =========================================
   ACTIVE NAVIGATION
========================================= */

const sections =
    document.querySelectorAll("section");


window.addEventListener(
    "scroll",
    function () {

        let current = "";


        sections.forEach(
            function (section) {

                const sectionTop =
                    section.offsetTop - 180;

                const sectionHeight =
                    section.clientHeight;


                if (
                    window.scrollY >= sectionTop &&
                    window.scrollY <
                    sectionTop + sectionHeight
                ) {

                    current =
                        section.getAttribute("id");

                }

            }
        );


        navLinks.forEach(
            function (link) {

                link.classList.remove(
                    "active"
                );


                if (
                    link.getAttribute("href") ===
                    "#" + current
                ) {

                    link.classList.add(
                        "active"
                    );

                }

            }
        );

    }
);


/* =========================================
   TYPING EFFECT
========================================= */

const typingText =
    document.getElementById("typingText");


const words = [

    "digital experiences.",

    "cool websites.",

    "interactive ideas.",

    "creative interfaces.",

    "things people remember."

];


let wordIndex = 0;

let characterIndex = 0;

let deleting = false;


function typeEffect() {

    const currentWord =
        words[wordIndex];


    if (!deleting) {

        typingText.textContent =
            currentWord.substring(
                0,
                characterIndex + 1
            );

        characterIndex++;


        if (
            characterIndex ===
            currentWord.length
        ) {

            deleting = true;

            setTimeout(
                typeEffect,
                1500
            );

            return;

        }

    } else {

        typingText.textContent =
            currentWord.substring(
                0,
                characterIndex - 1
            );

        characterIndex--;


        if (characterIndex === 0) {

            deleting = false;

            wordIndex =
                (wordIndex + 1) %
                words.length;

        }

    }


    setTimeout(
        typeEffect,
        deleting ? 45 : 80
    );

}


typeEffect();


/* =========================================
   SCROLL REVEAL
========================================= */

const revealElements =
    document.querySelectorAll(
        ".section, .project-card, .skill-card, .timeline-item"
    );


const revealObserver =
    new IntersectionObserver(
        function (entries) {

            entries.forEach(
                function (entry) {

                    if (
                        entry.isIntersecting
                    ) {

                        entry.target.style.opacity =
                            "1";

                        entry.target.style.transform =
                            "translateY(0)";

                    }

                }
            );

        },
        {
            threshold: 0.12
        }
    );


revealElements.forEach(
    function (element) {

        element.style.opacity = "0";

        element.style.transform =
            "translateY(25px)";

        element.style.transition =
            "opacity 0.7s ease, transform 0.7s ease";

        revealObserver.observe(
            element
        );

    }
);


/* =========================================
   PROJECT CARD TILT EFFECT
========================================= */

const projectCards =
    document.querySelectorAll(
        ".project-card"
    );


projectCards.forEach(
    function (card) {

        card.addEventListener(
            "mousemove",
            function (event) {

                if (
                    window.innerWidth < 700
                ) {
                    return;
                }


                const rect =
                    card.getBoundingClientRect();


                const x =
                    event.clientX -
                    rect.left;


                const y =
                    event.clientY -
                    rect.top;


                const centerX =
                    rect.width / 2;


                const centerY =
                    rect.height / 2;


                const rotateX =
                    (y - centerY) / 25;


                const rotateY =
                    (centerX - x) / 25;


                card.style.transform =
                    `perspective(700px)
                     rotateX(${rotateX}deg)
                     rotateY(${rotateY}deg)
                     translateY(-8px)`;

            }
        );


        card.addEventListener(
            "mouseleave",
            function () {

                card.style.transform =
                    "perspective(700px) rotateX(0) rotateY(0) translateY(0)";

            }
        );

    }
);


/* =========================================
   HERO MOUSE PARALLAX
========================================= */

const heroCard =
    document.querySelector(".hero-card");


document.addEventListener(
    "mousemove",
    function (event) {

        if (
            window.innerWidth < 800
        ) {
            return;
        }


        const x =
            (window.innerWidth / 2 -
                event.clientX) / 80;


        const y =
            (window.innerHeight / 2 -
                event.clientY) / 80;


        heroCard.style.transform =
            `translate(${x}px, ${y}px)`;

    }
);


/* =========================================
   CONTACT BUTTON
========================================= */

const contactButton =
    document.querySelector(
        ".contact-btn"
    );


contactButton.addEventListener(
    "mouseenter",
    function () {

        contactButton.textContent =
            "Let's build it! 🚀";

    }
);


contactButton.addEventListener(
    "mouseleave",
    function () {

        contactButton.textContent =
            "Say Hello 👋";

    }
);


/* =========================================
   CONSOLE MESSAGE
========================================= */

console.log(
    "%c Hey developer! 👀",
    "font-size:20px;font-weight:bold;color:#c8ff00;"
);

console.log(
    "%c Welcome to my portfolio 🚀",
    "font-size:14px;color:#72f5dc;"
);