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
        name: "Ren (Chinese Dude)",
        nickname: "Founder and Developer",
        category: "THREE MUSKETEERS OF IKA",
        trait: "Editing, coding, web design, and martial arts.",
        motto: "N/A",
        bio: "What Cebastian said.",
        image: "images/ren.jpg"
    },
    {
        id: 2,
        name: "Sean Aldrei (Sensen)",
        nickname: "Co-founder",
        category: "THREE MUSKETEERS OF IKA",
        trait: "Print provider, pro valorant player, and gamer.",
        motto: "N/A",
        bio: "I'm Sean",
        image: "images/sensen.jpg"
    },
    {
        id: 3,
        name: "Carl Matthew (Mat)",
        nickname: "Co-founder",
        category: "THREE MUSKETEERS OF IKA",
        trait: "Editing, martial arts, larping, and many more.",
        motto: "N/A",
        bio: "I'm Carl",
        image: "images/mat2.jpg"
    },
    {
        id: 4,
        name: "Ronilo Labastida (Ron)",
        nickname: "The Master",
        category: "Father of IKA",
        trait: "Pastor of IKA, martial arts, and many more.",
        motto: "N/A",
        bio: "I'm Ronilo",
        image: "images/ronilo1.jpg"
    },
    {
        id: 5,
        name: "Jahleel Santos (Leel)",
        nickname: "The KFC devourer",
        category: "Supremo of IKA",
        trait: "N/A",
        motto: "N/A",
        bio: "I'm Jahleel",
        image: "images/jah.jpg"
    },
    {
        id: 6,
        name: "Cebastian (Ceb)",
        nickname: "The Mogger",
        category: "DND master",
        trait: "Mogging, main speaker to the vlogs, martial arts, and femboy.",
        motto: "There's no better way to be, than to be. Understanding what to be is, is the question and the answer.",
        bio: "Its crazy, its fun, its genuine. For me, all the bs, vlogs, and stuff, are a big turning point and development for me, because, its been awhile after the pandemic before i had this level of relationship with friends, it felt very alive for me, and so ika for me is a highlight for my high school, both in junior and senior. Junior sucked",
        image: "images/ceb.jpg"
    },
    {
        id: 7,
        name: "Ariez King (Rizz)",
        nickname: "The rizz king",
        category: "PRO PLAYER",
        trait: "CODM pro player, advisor, and navigator.",
        motto: "N/A",
        bio: "I'm Ariez",
        image: "images/ariez.jpg"
    },
    {
        id: 8,
        name: "Yurie Domingo (Yur)",
        nickname: "The Mentalist",
        category: "PRO PLAYER",
        trait: "Valorant pro player, advisor, comforter",
        motto: "N/A",
        bio: "N/A",
        image: "images/yur.jpg"
    },
    {
        id: 9,
        name: "Jodel Estares (Ninong)",
        nickname: "The Funder/Sponsor",
        category: "SPONSOR OF IKA",
        trait: "Rizzler, sponsor, ninong ng IKA",
        motto: "N/A",
        bio: "I'm Jodel",
        image: "images/jodel.jpg"
    },
    {
        id: 10,
        name: "John Patrick (Glizzy Devourer 3000)",
        nickname: "The Talong Destroyer",
        category: "The Artist",
        trait: "N/A",
        motto: "N/A",
        bio: "I'm John",
        image: "images/patrick.jpg"
    }
];

// ==========================================
// EVENT ARCHIVE - 30 EVENTS
// ==========================================
const events = [
    {
        id: 1,
        title: "EP. UNO",
        date: "Pre Historic",
        category: "???",
        layout: "landscape",
        description: "This day was the day the katipuneros first assembled. All because of Sean's Uno card, history was created.",
        image: "events/dos.jpg"
    },
    {
        id: 2,
        title: "THE FIRST SUPPER",
        date: "March 04, 2023",
        category: "2023 Events",
        layout: "landscape",
        description: "First ever group photo during Matthew's birthday where all members are complete and in one frame.",
        image: "events/group1.jpg"
    },
    {
        id: 3,
        title: "FIRST INTRAMURALS",
        date: "April 24, 2024",
        category: "School Events",
        layout: "landscape",
        description: "This day was our first intramurals in 1st year senior-high. It was a very fun and memorable experience. The venue was big and genuinely a great place to host a kind of event like this. Students were given free food and were comfortable since the venue inside had ac.",
        image: "events/intrams1.jpg"
    },
    {
        id: 4,
        title: "BADMINTON TOURNAMENT",
        date: "August 30, 2024",
        category: "School Events",
        layout: "landscape",
        description: "It was badminton tournament, we've trained days for this event and it was worth it. Sean and Jodel made it to the finals but they placed 2nd, but we were happy and still proud of them for getting that far.",
        image: "events/badminton.jpg"
    },
    {
        id: 5,
        title: "THE PUNIT INCIDENT",
        date: "September 18, 2024",
        category: "2024 Events",
        layout: "landscape",
        description: "This was when we had a dance project video and Jahleel tried to kick, resulting to his pants ripping at the crotch area. He had to borrow a sewing kit and fix it right there in the lobby.",
        image: "events/punit.jpg"
    },
    {
        id: 6,
        title: "FIVE MONTHS AT TESDA",
        date: "April 22, 2024",
        category: "2024 Events",
        layout: "landscape",
        description: "This was our first disassembling and assembling cpu. The experience genuienly felt like tesda and it was so hot and cramped in our room. It was hell of an experience.",
        image: "events/tesda.jpg"
    },
    {
        id: 7,
        title: "CHRISTMAS PARTY",
        date: "May 12, 2024",
        category: "2024 Events",
        layout: "landscape",
        description: "It was fun fr fr tho. Prolly the best christmas party we've ever had. We also went to the mall right after and took this picture.",
        image: "events/party.jpg"
    },
    {
        id: 8,
        title: "ZUM IS BA",
        date: "February 10, 2025",
        category: "2025 Events",
        layout: "landscape",
        description: "This was when IKA participated in a zumba dance along with the lola huzz's. In attempt to impress the lola huzz's, as if they're a bird tyring to mate. Afterall, a candy is still good even if the wrapper is wrinkled.",
        image: "events/zumba.jpg"
    },
    {
        id: 9,
        title: "KATIPUNEROS",
        date: "16th-Century",
        category: "???",
        layout: "landscape",
        description: "The day katipuneros were in their uniforms and took a moment to rest before the dance.",
        image: "events/katips.jpg"
    },
    {
        id: 10,
        title: "IKA CIVIL WAR",
        date: "September 25, 2024",
        category: "2024 Events",
        layout: "landscape",
        description: "Two of the katipuneros in IKA clashed. Both fough for each of their own beliefs. One side argued that tomboys were better and the other one argued that femboys are superior. In the end, both of them were wrong. Both tomboys and femboys are goated.",
        image: "events/clash.jpg"
    },
    {
        id: 11,
        title: "IKA CIVIL WAR",
        date: "September 25, 2024",
        category: "2024 Events",
        layout: "landscape",
        description: "Two of the planetary level katipuneros in IKA clashed as well. The same day and time two other katipuneros fought, only in a different place.",
        image: "events/ball.jpg"
    },
    {
        id: 12,
        title: "IKA AGE OF UL-AN",
        date: "October 11, 2024",
        category: "2024 Events",
        layout: "landscape",
        description: "The day katipuneros assembled to form a roman shield and push forward through a category 5 hurricane that was heading their way.",
        image: "events/ulan.jpg"
    },
    {
        id: 13,
        title: "ARNIS",
        date: "January 19, 2025",
        category: "2025 Events",
        layout: "landscape",
        description: "The day IKA performed a traditional arnis dance. A group of anthropologist visited IKA back when they were still in their primitive state in their tribe before Sean recruited them. An anthropologist named Dr.Sean sat between IKA and his crew took this picture.",
        image: "events/arnis.jpg"
    },
    {
        id: 14,
        title: "INTRAMS 2",
        date: "March 5, 2025",
        category: "2025 Events",
        layout: "landscape",
        description: "This was a far more better experience than intrams one. We all jumped, jammed with the music, and party at the center of the venue while the whole place went crazy like a concert",
        image: "events/intrams2.jpg"
    },
    {
        id: 15,
        title: "GRADUATION DAY",
        date: "April 22, 2025",
        category: "2025 Events",
        layout: "landscape",
        description: "Graduationn Day.....we were all happy and sad at the same time during this. This was the last picture we have of us complete in a photo. This day was so sad, even a devil may cry.",
        image: "events/grad.jpg"
    },
    {
        id: 16,
        title: "COMING SOON",
        date: "",
        category: "Upcoming Events",
        layout: "landscape",
        description: "STAY TUNED!",
        image: "events/upcoming3.jpg"
    },
    {
        id: 17,
        title: "COMING SOON",
        date: "",
        category: "Upcoming Events",
        layout: "landscape",
        description: "STAY TUNED!",
        image: "events/upcoming3.jpg"
    },
    {
        id: 18,
        title: "COMING SOON",
        date: "November 25, 2023",
        category: "Upcoming Events",
        layout: "landscape",
        description: "STAY TUNED!",
        image: "events/upcoming3.jpg"
    },
    {
        id: 19,
        title: "COMING SOON",
        date: "",
        category: "Upcoming Events",
        layout: "landscape",
        description: "STAY TUNED!",
        image: "events/upcoming3.jpg"
    },
    {
        id: 20,
        title: "COMING SOON",
        date: "",
        category: "Upcoming Events",
        layout: "landscape",
        description: "STAY TUNED!",
        image: "events/upcoming3.jpg"
    },
    {
        id: 21,
        title: "COMING SOON",
        date: "",
        category: "Upcoming Events",
        layout: "landscape",
        description: "STAY TUNED!",
        image: "events/upcoming3.jpg"
    },
    {
        id: 22,
        title: "COMING SOON",
        date: "",
        category: "Upcoming Events",
        layout: "landscape",
        description: "STAY TUNED!",
        image: "events/upcoming3.jpg"
    },
    {
        id: 23,
        title: "COMING SOON",
        date: "",
        category: "Upcoming Events",
        layout: "landscape",
        description: "STAY TUNED!",
        image: "events/upcoming3.jpg"
    },
    {
        id: 24,
        title: "COMING SOON",
        date: "",
        category: "Upcoming Events",
        layout: "landscape",
        description: "STAY TUNED!",
        image: "events/upcoming3.jpg"
    },
    {
        id: 25,
        title: "COMING SOON",
        date: "",
        category: "Upcoming Events",
        layout: "landscape",
        description: "STAY TUNED!",
        image: "events/upcoming3.jpg"
    },
    {
        id: 26,
        title: "COMING SOON",
        date: "",
        category: "Upcoming Events",
        layout: "landscape",
        description: "STAY TUNED!",
        image: "events/upcoming3.jpg"
    },
    {
        id: 27,
        title: "COMING SOON",
        date: "",
        category: "Upcoming Events",
        layout: "landscape",
        description: "STAY TUNED!",
        image: "events/upcoming3.jpg"
    },
    {
        id: 28,
        title: "COMING SOON",
        date: "",
        category: "Upcoming Events",
        layout: "landscape",
        description: "STAY TUNED!",
        image: "events/upcoming3.jpg"
    },
    {
        id: 29,
        title: "COMING SOON",
        date: "",
        category: "Upcoming Events",
        layout: "landscape",
        description: "STAY TUNED!",
        image: "events/upcoming3.jpg"
    },
    {
        id: 30,
        title: "COMING SOON",
        date: "",
        category: "Upcoming Events",
        layout: "landscape",
        description: "STAY TUNED!",
        image: "events/upcoming3.jpg"
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
