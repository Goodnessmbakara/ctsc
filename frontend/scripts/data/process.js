document.addEventListener('DOMContentLoaded', () => {
    const options = document.querySelectorAll('.options span');
    const cardSection = document.getElementById('card-section');

    const featureStoriesBtn = options[0];
    const personalGrowthBtn = options[1];
    const readersCornerBtn = options[2];
    const ourCultureBtn = options[3];
    const featureNewsCard = document.getElementById('feature-news-card');
    makeNewsCard();
    featureStoriesBtn.addEventListener('click', (event) => {
        featureNewsCard.classList.remove('hidden');
        featureStoriesBtn.classList.add('active');
        switchActive(options, event.target);
        makeNewsCard();
    })

    personalGrowthBtn.addEventListener('click', (event) => {
        featureNewsCard.classList.add('hidden');
        personalGrowthBtn.classList.add('active');
        switchActive(options, event.target);
        personalGrowthCards();
    })

    readersCornerBtn.addEventListener('click', () => {
        featureNewsCard.classList.add('hidden');
        readersCornerBtn.classList.add('active');
        switchActive(options, event.target);
        readerNewsCards();
    })
    ourCultureBtn.addEventListener('click', () => {
        featureNewsCard.classList.add('hidden');
        ourCultureBtn.classList.add('active');
        switchActive(options, event.target)
        ourCultureCards();
    })

    function switchActive(parent, target) {
        // event.target.
        for (const element of parent) {
            if (element !== target && element.classList.contains('active')) {
                element.classList.remove('active');
            }
        }
        target.classList.add('active');
    }

    function makeNewsCard() {
        cardSection.className = 'news-cards';
        let string = '';
        for (let i = 1; i < 5; i++) {
            string += ` <div class="news-card card-${i}">
                            <div class="arrow-up-right"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                    fill="currentColor" class="bi bi-arrow-up-right" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd"
                                        d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0z" />
                                </svg></div>
                            <div class="icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                    class="bi bi-arrow-up-right" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd"
                                        d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0z" />
                                </svg>
                            </div>
                            <div class="texts">
                                <div>
                                    <span>Featured</span>
                                    <h3>Vox Pop: Your Local Government Chairman, One Brutal Truth</h3>
                                </div>
                                <p>We invite you to grow with us. Witness us grow, make mistakes, and learn. Witness another first
                                    of
                                    many
                                    by CTSC media in today's publication. We aim to bridge the gap between governments and the
                                    masses
                                    aka
                                    villagers aka community members aka citizens.</p>
                            </div>
                        </div>`
        }
        cardSection.innerHTML = string;
    }

    function personalGrowthCards () {
        cardSection.className = 'personal-growth-section cards';
        let string='';
        for (let i = 0; i< 9; i++) {
            string += `<div class="card">
            <span>Technology</span>
            <div class="card-image">
                <img src="../assets/cards.jpeg" alt="">
            </div>
            <div class="card-content">
                <h3>Brand Patterns like a Pro & how to Overcome</h3>
                <p>Akwa-Ibom business owners have mastered
                    professionalism when dealing with unsatisfied
                    customers.</p>
                <div class="card-meta-data">
                    <div class="author-image">
                        <img src="../assets/author.png" alt="">
                    </div>
                    <span>Amazing oty</span>
                    <span>.</span>
                    <span>March 12th, 2024</span>
                </div>
            </div>
        </div>`
        }
        cardSection.innerHTML = string;
    }

    function readerNewsCards () {
        cardSection.className = 'personal-growth-section cards';
        let string='';
        for (let i = 0; i< 9; i++) {
            string += `<div class="card">
            <span>Technology</span>
            <div class="card-image">
                <img src="../assets/cards.jpeg" alt="">
            </div>
            <div class="card-content">
                <h3>Brand Patterns like a Pro & how to Overcome</h3>
                <p>Akwa-Ibom business owners have mastered
                    professionalism when dealing with unsatisfied
                    customers.</p>
                <div class="card-meta-data">
                    <div class="author-image">
                        <img src="../assets/author.png" alt="">
                    </div>
                    <span>Amazing oty</span>
                    <span>.</span>
                    <span>March 12th, 2024</span>
                </div>
            </div>
        </div>`
        }
        cardSection.innerHTML = string;
    }

    function ourCultureCards () {
        cardSection.className = 'personal-growth-section cards';
        let string='';
        for (let i = 0; i< 9; i++) {
            string += `<div class="card">
            <span>Technology</span>
            <div class="card-image">
                <img src="../assets/cards.jpeg" alt="">
            </div>
            <div class="card-content">
                <h3>Our culture</h3>
                <p>Akwa-Ibom business owners have mastered
                    professionalism when dealing with unsatisfied
                    customers.</p>
                <div class="card-meta-data">
                    <div class="author-image">
                        <img src="../assets/author.png" alt="">
                    </div>
                    <span>Amazing oty</span>
                    <span>.</span>
                    <span>March 12th, 2024</span>
                </div>
            </div>
        </div>`
        }
        cardSection.innerHTML = string;
    }
})
