/* ============================== typing animation ============================ */
var typed = new Typed(".typing", {
    strings: ["", "Graphic Designer", "Web Design", "Video Editor", "Photography"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});

/* ============================== Aside ============================ */
const nav = document.querySelector(".nav");
if (nav) {
    const navList = nav.querySelectorAll("li");
    const totalNavList = navList.length;
    const allSection = document.querySelectorAll(".section");
    const totalSection = allSection.length;

    for (let i = 0; i < totalNavList; i++) {
        const a = navList[i].querySelector("a");
        a.addEventListener("click", function () {
            removeBackSection();
            for (let j = 0; j < totalNavList; j++) {
                const navLink = navList[j].querySelector("a");
                if (navLink.classList.contains("active")) {
                    addBackSection(j);
                }
                navLink.classList.remove("active");
            }
            this.classList.add("active");
            showSection(this);
            if (window.innerWidth < 1200) {
                asideSectionTogglerBtn();
            }
        });
    }

    function removeBackSection() {
        for (let i = 0; i < totalSection; i++) {
            allSection[i].classList.remove("back-section");
        }
    }

    function addBackSection(num) {
        allSection[num].classList.add("back-section");
    }

    function showSection(element) {
        for (let i = 0; i < totalSection; i++) {
            allSection[i].classList.remove("active");
        }
        const target = element.getAttribute("href").split("#")[1];
        document.querySelector("#" + target).classList.add("active");
    }

    function updateNav(element) {
        for (let i = 0; i < totalNavList; i++) {
            navList[i].querySelector("a").classList.remove("active");
            const target = element.getAttribute("href").split("#")[1];
            if (target === navList[i].querySelector("a").getAttribute("href").split("#")[1]) {
                navList[i].querySelector("a").classList.add("active");
            }
        }
    }

    // Hire Me button functionality
    const hireMeButton = document.querySelector(".hire-me");
    if (hireMeButton) {
        hireMeButton.addEventListener("click", function () {
            const sectionIndex = this.getAttribute("data-section-index");
            showSection(this);
            updateNav(this);
            removeBackSection();
            addBackSection(sectionIndex);
        });
    }

    // Nav Toggler Button functionality
    const navTogglerBtn = document.querySelector(".nav-toggler");
    const aside = document.querySelector(".aside");
    if (navTogglerBtn) {
        navTogglerBtn.addEventListener("click", () => {
            asideSectionTogglerBtn();
        });
    }

    function asideSectionTogglerBtn() {
        aside.classList.toggle("open");
        navTogglerBtn.classList.toggle("open");
        for (let i = 0; i < totalSection; i++) {
            allSection[i].classList.toggle("open");
        }
    }
}

document.addEventListener("DOMContentLoaded", function() {
    var videos = document.querySelectorAll("video");
    var currentVideo = null;

    videos.forEach(function(video) {
        video.addEventListener("play", function() {
            if (currentVideo && currentVideo !== video) {
                currentVideo.pause();
            }
            currentVideo = video;
        });
    });
});