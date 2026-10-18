// ==========================================
// RESPONSIVE NAVIGATION
// ==========================================
const siteNavbar = document.getElementById("siteNavbar");
const navToggle = document.getElementById("navToggle");
const primaryNav = document.getElementById("primaryNav");
const navLinks = document.querySelectorAll("#primaryNav .nav-link");

function closeNavigation() {
    if (!siteNavbar || !navToggle) return;

    siteNavbar.classList.remove("nav-open");
    navToggle.setAttribute("aria-expanded", "false");
    navToggle.setAttribute("aria-label", "Open navigation menu");
}

if (siteNavbar && navToggle && primaryNav) {
    navToggle.addEventListener("click", () => {
        const isOpen = navToggle.getAttribute("aria-expanded") === "true";

        navToggle.setAttribute("aria-expanded", String(!isOpen));
        navToggle.setAttribute(
            "aria-label",
            isOpen ? "Open navigation menu" : "Close navigation menu"
        );

        siteNavbar.classList.toggle("nav-open", !isOpen);
    });

    primaryNav.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", closeNavigation);
    });

    document.addEventListener("click", event => {
        if (!siteNavbar.contains(event.target)) {
            closeNavigation();
        }
    });

    document.addEventListener("keydown", event => {
        if (event.key === "Escape") {
            closeNavigation();
        }
    });

    // Highlight the navbar link for the section being viewed.
    const sections = [...navLinks]
        .map(link => document.querySelector(link.getAttribute("href")))
        .filter(Boolean);

    if ("IntersectionObserver" in window && sections.length) {
        const sectionObserver = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (!entry.isIntersecting) return;

                navLinks.forEach(link => {
                    link.classList.toggle(
                        "active",
                        link.getAttribute("href") === `#${entry.target.id}`
                    );
                });
            });
        }, {
            rootMargin: "-25% 0px -60% 0px",
            threshold: 0
        });

        sections.forEach(section => sectionObserver.observe(section));
    }

    // Add a visual state after the page starts scrolling.
    function updateNavbarOnScroll() {
        siteNavbar.classList.toggle("scrolled", window.scrollY > 20);
    }

    window.addEventListener("scroll", updateNavbarOnScroll, { passive: true });
    updateNavbarOnScroll();
}

// ==========================================
// SPOTIKA - MEMBER INFORMATION
// ==========================================
const members = [
    {
        id: 1,
        name: "(Asian Dude)",
        nickname: "Founder and Developer",
        category: "THREE MUSKETEERS OF IKA",
        trait: "Editing, coding, web design, and martial arts.",
        motto: "N/A",
        bio: "What Cebastian said.",
        image: "/images/ren.jpg"
    },
    {
        id: 2,
        name: "Sean Aldrei (Sensen)",
        nickname: "Co-founder",
        category: "THREE MUSKETEERS OF IKA",
        trait: "Print provider, pro valorant player, and gamer.",
        motto: "N/A",
        bio: "I'm Sean",
        image: "/images/sensen.jpg"
    },
    {
        id: 3,
        name: "Carl Matthew (Mat)",
        nickname: "Co-founder",
        category: "THREE MUSKETEERS OF IKA",
        trait: "Editing, martial arts, larping, and many more.",
        motto: "N/A",
        bio: "I'm Carl",
        image: "/images/mat2.jpg"
    },
    {
        id: 4,
        name: "Ronilo Labastida (Ron)",
        nickname: "The Master",
        category: "Father of IKA",
        trait: "Pastor of IKA, martial arts, and many more.",
        motto: "N/A",
        bio: "I'm Ronilo",
        image: "/images/ronilo1.jpg"
    },
    {
        id: 5,
        name: "Jahleel Santos (Leel)",
        nickname: "The KFC devourer",
        category: "The Black One",
        trait: "N/A",
        motto: "N/A",
        bio: "I'm Jahleel",
        image: "/images/jah.jpg"
    },
    {
        id: 6,
        name: "Cebastian (Ceb)",
        nickname: "The Mogger",
        category: "FEMBOY",
        trait: "Mogging, main speaker to the vlogs, martial arts, and femboy.",
        motto: "There's no better way to be, than to be. Understanding what to be is, is the question and the answer.",
        bio: "Its crazy, its fun, its genuine. For me, all the bs, vlogs, and stuff, are a big turning point and development for me, because, its been awhile after the pandemic before i had this level of relationship with friends, it felt very alive for me, and so ika for me is a highlight for my high school, both in junior and senior. Junior sucked",
        image: "/images/ceb.jpg"
    },
    {
        id: 7,
        name: "Ariez King (Rizz)",
        nickname: "The Adventurer",
        category: "N/A",
        trait: "CODM pro player, advisor, and navigator.",
        motto: "N/A",
        bio: "I'm Ariez",
        image: "/images/ariez.jpg"
    },
    {
        id: 8,
        name: "Yurie Domingo",
        nickname: "The Mentalist",
        category: "N/A",
        trait: "N/A",
        motto: "N/A",
        bio: "N/A",
        image: "/images/yurie.jpg"
    },
    {
        id: 9,
        name: "Jodel Estares (Ninong)",
        nickname: "The Funder/Sponsor",
        category: "SPONSORS",
        trait: "N/A",
        motto: "N/A",
        bio: "I'm Jodel",
        image: "/images/jodel.jpg"
    },
    {
        id: 10,
        name: "John Patrick (Glizzy Devourer 3000)",
        nickname: "The Glizzy Devourer 3000",
        category: "FEMBOY",
        trait: "N/A",
        motto: "N/A",
        bio: "I'm John",
        image: "/images/patrick.jpg"
    }
];

// ==========================================
// EVENT ARCHIVE - 30 EVENTS
// ==========================================
const events = [
    {
        id: 1,
        title: "EP. 1 UNO",
        date: "January 15, 2023",
        category: "2023 ERA",
        layout: "landscape",
        description: "This day was the day the katipuneros first assembled. All because of Sean's Uno card, history was created.",
        image: "/events/uno.jpg"
    },
    {
        id: 2,
        title: "THE FIRST SUPPER",
        date: "March 04, 2023",
        category: "2023 ERA",
        layout: "landscape",
        description: "First ever group photo during Matthew's birthday where all members are complete and in one frame.",
        image: "/events/group1.jpg"
    },
    {
        id: 3,
        title: "FIRST INTRAMURALS",
        date: "N/A, 2023",
        category: "School Events",
        layout: "landscape",
        description: "N/A",
        image: "/events/intrams1.jpg"
    },
    {
        id: 4,
        title: "BADMINTON TOURNAMENT",
        date: "N/A, 2023",
        category: "School Events",
        layout: "landscape",
        description: "N/A",
        image: "/events/tourna.jpg"
    },
    {
        id: 5,
        title: "THE PUNIT INCIDENT",
        date: "April 8, 2023",
        category: "2023",
        layout: "landscape",
        description: "N/A",
        image: "/events/punit.jpg"
    },
    {
        id: 6,
        title: "N/A",
        date: "April 22, 2023",
        category: "2023",
        layout: "landscape",
        description: "N/A",
        image: ""
    },
    {
        id: 7,
        title: "N/A",
        date: "May 12, 2023",
        category: "milestone",
        layout: "landscape",
        description: "N/A",
        image: ""
    },
    {
        id: 8,
        title: "N/A",
        date: "June 3, 2023",
        category: "adventure",
        layout: "landscape",
        description: "N/A",
        image: ""
    },
    {
        id: 9,
        title: "N/A",
        date: "June 18, 2023",
        category: "gathering",
        layout: "landscape",
        description: "N/A",
        image: ""
    },
    {
        id: 10,
        title: "N/A",
        date: "July 9, 2023",
        category: "gathering",
        layout: "landscape",
        description: "N/A",
        image: ""
    },
    {
        id: 11,
        title: "N/A",
        date: "August 2, 2023",
        category: "milestone",
        layout: "landscape",
        description: "N/A",
        image: ""
    },
    {
        id: 12,
        title: "N/A",
        date: "August 19, 2023",
        category: "gathering",
        layout: "landscape",
        description: "N/A",
        image: ""
    },
    {
        id: 13,
        title: "N/A",
        date: "September 7, 2023",
        category: "school",
        layout: "landscape",
        description: "N/A",
        image: ""
    },
    {
        id: 14,
        title: "N/A",
        date: "September 23, 2023",
        category: "gathering",
        layout: "landscape",
        description: "N/A",
        image: ""
    },
    {
        id: 15,
        title: "N/A",
        date: "October 14, 2023",
        category: "adventure",
        layout: "landscape",
        description: "N/A",
        image: ""
    },
    {
        id: 16,
        title: "N/A",
        date: "October 31, 2023",
        category: "gathering",
        layout: "landscape",
        description: "N/A",
        image: ""
    },
    {
        id: 17,
        title: "N/A",
        date: "November 12, 2023",
        category: "milestone",
        layout: "landscape",
        description: "N/A",
        image: ""
    },
    {
        id: 18,
        title: "N/A",
        date: "November 25, 2023",
        category: "gathering",
        layout: "landscape",
        description: "N/A",
        image: ""
    },
    {
        id: 19,
        title: "N/A",
        date: "December 16, 2023",
        category: "gathering",
        layout: "landscape",
        description: "N/A",
        image: ""
    },
    {
        id: 20,
        title: "N/A",
        date: "January 6, 2024",
        category: "milestone",
        layout: "landscape",
        description: "N/A",
        image: ""
    },
    {
        id: 21,
        title: "N/A",
        date: "January 27, 2024",
        category: "gathering",
        layout: "landscape",
        description: "N/A",
        image: ""
    },
    {
        id: 22,
        title: "N/A",
        date: "February 9, 2024",
        category: "school",
        layout: "landscape",
        description: "N/A",
        image: ""
    },
    {
        id: 23,
        title: "N/A",
        date: "February 24, 2024",
        category: "milestone",
        layout: "landscape",
        description: "N/A",
        image: ""
    },
    {
        id: 24,
        title: "N/A",
        date: "March 10, 2024",
        category: "adventure",
        layout: "landscape",
        description: "N/A",
        image: ""
    },
    {
        id: 25,
        title: "N/A",
        date: "March 29, 2024",
        category: "milestone",
        layout: "landscape",
        description: "N/A",
        image: ""
    },
    {
        id: 26,
        title: "N/A",
        date: "April 12, 2024",
        category: "school",
        layout: "landscape",
        description: "N/A",
        image: ""
    },
    {
        id: 27,
        title: "N/A",
        date: "April 22, 2024",
        category: "milestone",
        layout: "landscape",
        description: "N/A",
        image: ""
    },
    {
        id: 28,
        title: "N/A",
        date: "April 22, 2024",
        category: "gathering",
        layout: "landscape",
        description: "N/A",
        image: ""
    },
    {
        id: 29,
        title: "N/A",
        date: "May 18, 2024",
        category: "gathering",
        layout: "landscape",
        description: "N/A",
        image: ""
    },
    {
        id: 30,
        title: "N/A",
        date: "A Future Memory",
        category: "milestone",
        layout: "landscape",
        description: "N/A",
        image: ""
    }
];

// ==========================================
// MEMBER GALLERY
// ==========================================
const memberGrid = document.getElementById("memberGrid");
const searchInput = document.getElementById("searchInput");
const memberCount = document.getElementById("memberCount");
const emptyState = document.getElementById("emptyState");
const modal = document.getElementById("profileModal");
const closeModalButton = document.getElementById("closeModal");

let lastFocusedElement = null;

function displayMembers(list) {
    memberGrid.replaceChildren();
    memberCount.textContent = list.length;
    emptyState.hidden = list.length !== 0;
    memberGrid.hidden = list.length === 0;

    list.forEach((member, index) => {
        const card = document.createElement("button");
        card.type = "button";
        card.className = "member-card";
        card.style.animationDelay = `${index * 40}ms`;
        card.setAttribute("aria-label", `View ${member.name}'s profile`);

        const imageWrap = document.createElement("div");
        imageWrap.className = "member-image";

        const image = document.createElement("img");
        image.src = member.image;
        image.alt = `Portrait of ${member.name}`;
        image.loading = "lazy";

        image.addEventListener("error", () => {
            image.hidden = true;
        });

        const number = document.createElement("span");
        number.className = "member-index";
        number.textContent = `KAT. ${String(member.id).padStart(3, "0")}`;

        imageWrap.append(image, number);

        const info = document.createElement("div");
        info.className = "member-info";

        const category = document.createElement("span");
        category.className = "member-category";
        category.textContent = member.category;

        const name = document.createElement("h3");
        name.textContent = member.name;

        const bottom = document.createElement("div");
        bottom.className = "member-bottom";

        const nickname = document.createElement("span");
        nickname.className = "member-nickname";
        nickname.textContent = `"${member.nickname}"`;

        const arrow = document.createElement("span");
        arrow.className = "member-arrow";
        arrow.textContent = "↗";
        arrow.setAttribute("aria-hidden", "true");

        bottom.append(nickname, arrow);
        info.append(category, name, bottom);
        card.append(imageWrap, info);

        card.addEventListener("click", () => openProfile(member, card));
        memberGrid.appendChild(card);
    });
}

searchInput.addEventListener("input", () => {
    const query = searchInput.value.trim().toLowerCase();

    displayMembers(
        members.filter(member =>
            [
                member.name,
                member.nickname,
                member.category,
                member.trait,
                member.motto,
                member.bio
            ].join(" ").toLowerCase().includes(query)
        )
    );
});

function openProfile(member, triggerElement) {
    lastFocusedElement = triggerElement;

    document.getElementById("profileImage").src = member.image;
    document.getElementById("profileImage").alt = `Portrait of ${member.name}`;
    document.getElementById("profileNumber").textContent =
        `MEMBER: ${String(member.id).padStart(3, "0")}`;
    document.getElementById("profileCategory").textContent =
        member.category.toUpperCase();
    document.getElementById("profileName").textContent = member.name;
    document.getElementById("profileNickname").textContent =
        `"${member.nickname}"`;
    document.getElementById("profileBio").textContent = member.bio;
    document.getElementById("profileTrait").textContent = member.trait;
    document.getElementById("profileMotto").textContent =
        `"${member.motto}"`;

    modal.hidden = false;
    document.body.classList.add("modal-open");
    closeModalButton.focus();
}

function closeProfile() {
    modal.hidden = true;
    document.body.classList.remove("modal-open");

    if (lastFocusedElement && lastFocusedElement.isConnected) {
        lastFocusedElement.focus();
    }
}

closeModalButton.addEventListener("click", closeProfile);

modal.addEventListener("click", event => {
    if (event.target === modal) {
        closeProfile();
    }
});

// ==========================================
// EVENT GALLERY
// ==========================================
const eventGrid = document.getElementById("eventGrid");
const eventSearch = document.getElementById("eventSearch");
const eventFilter = document.getElementById("eventFilter");
const eventCount = document.getElementById("eventCount");
const eventEmptyState = document.getElementById("eventEmptyState");
const eventModal = document.getElementById("eventModal");
const closeEventModalButton = document.getElementById("closeEventModal");

let lastEventTrigger = null;

function formatEventDate(dateString) {
    const date = new Date(`${dateString}T12:00:00`);

    if (Number.isNaN(date.getTime())) {
        return dateString;
    }

    return date.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric"
    });
}

function createEventCard(event, index) {
    const card = document.createElement("button");
    card.type = "button";
    card.className = `event-card ${event.orientation || "landscape"}`;
    card.style.animationDelay = `${Math.min(index * 25, 300)}ms`;
    card.setAttribute(
        "aria-label",
        `View ${event.title}, ${formatEventDate(event.date)}`
    );

    const imageWrap = document.createElement("div");
    imageWrap.className = "event-image";

    const image = document.createElement("img");
    image.src = event.image;
    image.alt = event.title;
    image.loading = "lazy";

    image.addEventListener("error", () => {
        image.hidden = true;
        imageWrap.classList.add("image-missing");
    });

    const number = document.createElement("span");
    number.className = "event-number";
    number.textContent = `EVT. ${String(event.id).padStart(3, "0")}`;

    const category = document.createElement("span");
    category.className = "event-category";
    category.textContent = event.category;

    imageWrap.append(image, number, category);

    const info = document.createElement("div");
    info.className = "event-info";

    const date = document.createElement("p");
    date.className = "event-date";
    date.textContent = formatEventDate(event.date);

    const title = document.createElement("h3");
    title.textContent = event.title;

    const description = document.createElement("p");
    description.className = "event-description";
    description.textContent = event.description;

    const readMore = document.createElement("div");
    readMore.className = "event-read-more";

    const readText = document.createElement("span");
    readText.textContent = "VIEW MEMORY";

    const arrow = document.createElement("span");
    arrow.textContent = "↗";
    arrow.setAttribute("aria-hidden", "true");

    readMore.append(readText, arrow);
    info.append(date, title, description, readMore);
    card.append(imageWrap, info);

    card.addEventListener("click", () => openEvent(event, card));

    return card;
}

function displayEvents(list) {
    eventGrid.replaceChildren();
    eventCount.textContent = list.length;
    eventEmptyState.hidden = list.length !== 0;
    eventGrid.hidden = list.length === 0;

    list.forEach((event, index) => {
        eventGrid.appendChild(createEventCard(event, index));
    });
}

function filterEvents() {
    const query = eventSearch.value.trim().toLowerCase();
    const category = eventFilter.value;

    displayEvents(
        events.filter(event => {
            const text = [
                event.title,
                event.description,
                event.date,
                formatEventDate(event.date),
                event.category
            ].join(" ").toLowerCase();

            return text.includes(query) &&
                (category === "all" || event.category === category);
        })
    );
}

eventSearch.addEventListener("input", filterEvents);
eventFilter.addEventListener("change", filterEvents);

function openEvent(event, triggerElement) {
    lastEventTrigger = triggerElement;

    const image = document.getElementById("eventModalImage");
    image.hidden = false;
    image.onerror = () => {
        image.hidden = true;
    };
    image.onload = () => {
        image.hidden = false;
    };
    image.src = event.image;
    image.alt = event.title;

    document.getElementById("eventModalNumber").textContent =
        `EVT. ${String(event.id).padStart(3, "0")}`;
    document.getElementById("eventModalCategory").textContent =
        event.category.toUpperCase();
    document.getElementById("eventModalDate").textContent =
        formatEventDate(event.date);
    document.getElementById("eventModalTitle").textContent = event.title;
    document.getElementById("eventModalDescription").textContent =
        event.description;

    eventModal.hidden = false;
    document.body.classList.add("modal-open");
    closeEventModalButton.focus();
}

function closeEvent() {
    eventModal.hidden = true;
    document.body.classList.remove("modal-open");

    if (lastEventTrigger && lastEventTrigger.isConnected) {
        lastEventTrigger.focus();
    }
}

closeEventModalButton.addEventListener("click", closeEvent);

eventModal.addEventListener("click", event => {
    if (event.target === eventModal) {
        closeEvent();
    }
});

// Close open modals with Escape.
document.addEventListener("keydown", event => {
    if (event.key === "Escape") {
        if (!modal.hidden) {
            closeProfile();
        } else if (!eventModal.hidden) {
            closeEvent();
        }
    }
});

// Initial render.
displayMembers(members);
displayEvents(events);