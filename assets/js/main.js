
/* =========================================
   AUTOTUBE CREW
   SHARED MOBILE NAVIGATION
   ========================================= */

(() => {
    "use strict";

    function initMobileNavigation() {

        const headers = document.querySelectorAll("header.header");

        headers.forEach((header, index) => {

            const navigation =
                header.querySelector(".navigation");

            const menuToggle =
                header.querySelector(".menu-toggle");

            if (!navigation || !menuToggle) {
                return;
            }

            if (!navigation.id) {
                navigation.id = "site-navigation-" + (index + 1);
            }

            menuToggle.setAttribute(
                "aria-controls",
                navigation.id
            );

            function setMenuState(isOpen) {

                navigation.classList.toggle(
                    "active",
                    isOpen
                );

                menuToggle.setAttribute(
                    "aria-expanded",
                    String(isOpen)
                );

                menuToggle.setAttribute(
                    "aria-label",
                    isOpen
                        ? "Close navigation"
                        : "Open navigation"
                );

                menuToggle.textContent =
                    isOpen ? "✕" : "☰";
            }

            setMenuState(false);

            menuToggle.addEventListener("click", () => {

                const isOpen =
                    menuToggle.getAttribute(
                        "aria-expanded"
                    ) === "true";

                setMenuState(!isOpen);

            });

            navigation.querySelectorAll("a").forEach(link => {

                link.addEventListener("click", () => {
                    setMenuState(false);
                });

            });

            document.addEventListener("keydown", event => {

                if (event.key === "Escape") {
                    setMenuState(false);
                }

            });

            window.addEventListener("resize", () => {

                if (window.innerWidth > 650) {
                    setMenuState(false);
                }

            });

        });

    }

    if (document.readyState === "loading") {

        document.addEventListener(
            "DOMContentLoaded",
            initMobileNavigation
        );

    } else {

        initMobileNavigation();

    }

})();
