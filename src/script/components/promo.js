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