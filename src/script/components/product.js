const rowProducts = document.querySelector('.row-product');

fetch('../script/data/data.json')
    .then(response => response.json())
    .then(response => {
        const products = response.Products
        products.map((p) => {
            return rowProducts.innerHTML += `
            <div class="col-sm-6 col-md-6 col-lg-4">
                <div class="card card-modal">
                    <div class="card-head" data-bs-toggle="modal" data-bs-target=${p.dataBs}>
                        <img src=${p.img}
                            class="card-img-top" alt=${p.name}>
                    </div>
                    <div class="card-body text-center">
                        <h5 class="card-title second-font-color">${p.name}</h5>
                        <p class="card-text">${p.cardText}</p>
                        <h4 class="second-font-color">${p.price}</h4>
                        <div class="dropdown">
                            <button class="btn btn-product dropdown-toggle" type="button"
                                id="dropdownMenuButton1" data-bs-toggle="dropdown"
                                aria-expanded="false">
                                For More
                            </button>
                            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                <li><a class="dropdown-item" href="./detail.html">Lihat</a></li>
                                <li><a class="dropdown-item" href="#">Beli</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div class="modal fade back-modal" id=${p.id} tabindex="-1"
                aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content modal-custom-content">
                        <button type="button" class="btn-close btn-modal" data-bs-dismiss="modal"
                            aria-label="Close"></button>
                        <div class="modal-body">
                            <img
                                src=${p.img}>
                        </div>
                    </div>
                </div>
            </div>
            `
        }).join("")
    })