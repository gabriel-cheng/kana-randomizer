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
                            ${list.map(char => `<span class="char">${char}</span>`).join("")}
                        </div>
                    </div>
                `).join("")}
            </div>

            <!-- Navegação -->
            <div class="swiper-button-prev"></div>
            <div class="swiper-button-next"></div>

            <!-- Paginação -->
            <div class="swiper-pagination"></div>
        </div>

        <div style="margin-top: 20px; text-align: center;">
            <button id="newListBtn">Gerar nova lista</button>
        </div>
    `;

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