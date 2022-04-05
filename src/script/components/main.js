function main() {
    const rowPromo = document.querySelector('.row-promo');
    const rowService = document.querySelector('.row-service');
    const rowSellers = document.querySelector('.row-bestSellers');

    fetch('./src/script/data/data.json')
        .then(response => response.json())
        .then(response => {
            const promo = response.Promo;
            promo.map((p) => {
                return rowPromo.innerHTML += `
                <div class="col-11 col-sm-6 col-md-4 col-lg-3 hovered-card mb-5">
                    <div class="card">
                        <img src=${p.img}
                            class="card-img-top" alt=${p.name}>
                        <div class="card-body">
                            <h5 class="card-title">${p.cardTitle}</h5>
                            <p class="card-text">${p.cardText}</p>
                        </div>
                    </div>
                </div>
                `
            }).join("")
                rowPromo.innerHTML += `
                <div class="d-flex justify-content-center promo-btn-contain">
                    <a href="./src/pages/promo.html" class="btn promo-btn text-light">View All Promo</a>
                </div>
                `

            const service = response.Service;
            service.map((s) => {
                return rowService.innerHTML += `
                <div class="col-10 col-sm-7 col-md-4 col-lg-3 col-xxl-4 hovered-card service-card">
                    <div class="d-flex justify-content-center">
                        <div class="service-icon d-flex align-items-center justify-content-center">
                            <i class="${s.cardIcon} display-6"></i>
                        </div>
                    </div>
                    <div class="my-3 text-center service-content">
                        <h5>${s.cardTitle}</h5>
                        <p>${s.cardText}</p>
                    </div>
                </div>
                `
            }).join("")

            const bestSellers = response.Best_Sellers;
            bestSellers.map((b) => {
                return rowSellers.innerHTML += `
                <div class="col-11 col-sm-6 col-md-4 col-lg-3 hovered-card mb-5">
                    <div class="card" data-bs-toggle="modal" data-bs-target=${b.dataBs}>
                        <img src=${b.img}
                            class="card-img-top" alt=${b.name}>
                        <div class="card-body text-center best-seller-content">
                            <h5 class="card-title second-font-color">${b.name}</h5>
                            <p class="card-text">${b.cardText}</p>
                            <h4 class="second-font-color">${b.price}</h4>
                        </div>
                    </div>
                </div>
                <div class="modal fade back-modal" id=${b.id} tabindex="-1"
                    aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered">
                        <div class="modal-content modal-custom-content">
                            <button type="button" class="btn-close btn-modal" data-bs-dismiss="modal"
                                aria-label="Close"></button>
                            <div class="modal-body">
                                <img
                                    src=${b.img}>
                            </div>
                        </div>
                    </div>
                </div>
                `
            }).join("")
                rowSellers.innerHTML += `
                <div class="d-flex justify-content-center">
                    <a href="./src/pages/product.html" class="btn promo-btn text-light">View All</a>
                </div>
                `
        })
}

export default main;