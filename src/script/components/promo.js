const all_promo = document.getElementById('all-promo');
const discountPromo = document.getElementById('discount-promo');
const bonusPromo = document.getElementById('bonus-promo');

const btnPromos = document.querySelector('.btn-promos')
const btnDiscount = document.querySelector('.btn-discount')
const btnBonus = document.querySelector('.btn-bonus')

discountPromo.style.display = 'none'
bonusPromo.style.display = 'none'
btnPromos.classList.add('active-btn')

btnPromos.addEventListener('click', () => {
    all_promo.style.display = 'block'
    discountPromo.style.display = 'none'
    bonusPromo.style.display = 'none'
    btnPromos.classList.add('active-btn')
    btnDiscount.classList.remove('active-btn')
    btnBonus.classList.remove('active-btn')
})

btnDiscount.addEventListener('click', () => {
    all_promo.style.display = 'none'
    discountPromo.style.display = 'block'
    bonusPromo.style.display = 'none'
    btnPromos.classList.remove('active-btn')
    btnDiscount.classList.add('active-btn')
    btnBonus.classList.remove('active-btn')
})

btnBonus.addEventListener('click', () => {
    all_promo.style.display = 'none'
    discountPromo.style.display = 'none'
    bonusPromo.style.display = 'block'
    btnPromos.classList.remove('active-btn')
    btnDiscount.classList.remove('active-btn')
    btnBonus.classList.add('active-btn')
})

fetch('../script/data/data.json')
    .then(response => response.json())
    .then(response => {
        const allpromo = response.Promo;
        const row = all_promo.querySelector('.row')
        allpromo.map((p) => {
            return row.innerHTML += `
            <div class="col-11 col-sm-6 col-md-4 col-lg-3 hovered-card mb-5">
                <div class="card">
                    <img src=${p.img}
                        class="card-img-top">
                    <div class="card-body">
                        <h5 class="card-title">${p.cardTitle}</h5>
                        <p class="card-text">${p.cardText}</p>
                    </div>
                </div>
            </div>
            `
        })

        const discount_promo = response.Promo.filter(f => f.category == 'discount');
        const row_discountPromo = discountPromo.querySelector('.row');
        discount_promo.map((d) => {
            return row_discountPromo.innerHTML += `
            <div class="col-11 col-sm-6 col-md-4 col-lg-3 hovered-card mb-5">
                <div class="card">
                    <img src=${d.img}
                        class="card-img-top">
                    <div class=" card-body">
                        <h5 class="card-title">${d.cardTitle}</h5>
                        <p class="card-text">${d.cardText}</p>
                        </div>
                </div>
            </div>
            `
        })

        const bonus_promo = response.Promo.filter(f2 => f2.category == 'bonus');
        const row_bonusPromo = bonusPromo.querySelector('.row')
        bonus_promo.map((b) => {
            return row_bonusPromo.innerHTML += `
            <div class="col-11 col-sm-6 col-md-4 col-lg-3 hovered-card mb-5">
                <div class="card">
                    <img src=${b.img}
                        class="card-img-top">
                    <div class="card-body">
                        <h5 class="card-title">${b.cardTitle}</h5>
                        <p class="card-text">${b.cardText}</p>
                    </div>
                </div>
            </div>
            `
        })
    })