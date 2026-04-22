function setupCarousel() {
    const items = document.querySelectorAll(".carousel-item");
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");
    const newListBtn = document.getElementById("newListBtn");

    let currentIndex = 0;

    function updateCarousel() {
        items.forEach((item, index) => {
            item.style.display = index === currentIndex ? "block" : "none";
        });
    }

    prevBtn.onclick = () => {
        currentIndex = (currentIndex - 1 + items.length) % items.length;
        updateCarousel();
    };

    nextBtn.onclick = () => {
        currentIndex = (currentIndex + 1) % items.length;
        updateCarousel();
    };

    newListBtn.onclick = () => {
        document.getElementById("carouselContainer").style.display = "none";
        document.querySelector(".list-generator-container").style.display = "block";
    };

    updateCarousel();
}

function renderCarousel(lists) {
    const container = document.getElementById("carouselContainer");
    const formContainer = document.querySelector(".list-generator-container");

    formContainer.style.display = "none";
    container.style.display = "block";

    container.innerHTML = `
        <div class="swiper">
            <div class="swiper-wrapper">
                ${lists.map((list, index) => `
                    <div class="swiper-slide">
                        <div class="slide-content">
                            <p class="carousel-list-index-text">
                                Lista de caracteres <span>${index + 1}/${lists.length}</span>
                            </p>

                            ${list.map(item => `
                                <div class="kana-card">
                                    <div class="kana-card-inner">
                                        <div class="kana-card-front">
                                            <span class="kana">${item.char}</span>
                                        </div>
                                        <div class="kana-card-back">
                                            <span class="kana">${item.char}</span>
                                            <span class="romaji">${item.romaji}</span>
                                        </div>
                                    </div>
                                </div>
                            `).join("")}
                        </div>
                    </div>
                `).join("")}
            </div>

            <div class="swiper-button-prev"></div>
            <div class="swiper-button-next"></div>
            <div class="swiper-pagination"></div>
        </div>

        <div class="carousel-actions">
            <button id="togglePronunciationBtn">Ver pronúncia</button>
            <button id="newListBtn">Gerar nova lista</button>
        </div>
    `;

    setupActions();

    new Swiper(".swiper", {
        loop: lists.length > 1,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev"
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true
        }
    });

    document.getElementById("newListBtn").onclick = () => {
        container.style.display = "none";
        formContainer.style.display = "flex";
    };
}

function setupActions() {
    const toggleBtn = document.getElementById("togglePronunciationBtn");
    const cards = document.querySelectorAll(".kana-card");

    let flipped = false;

    toggleBtn.addEventListener("click", () => {
        flipped = !flipped;

        cards.forEach(card => {
            card.classList.toggle("flipped", flipped);
        });

        toggleBtn.textContent = flipped
            ? "Ocultar pronúncia"
            : "Ver pronúncia";
    });
}