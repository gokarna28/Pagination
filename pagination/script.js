let products = [
    { "id": 1, "name": "shirt", "price": 500 },
    { "id": 2, "name": "pant", "price": 3000 },
    { "id": 3, "name": "tshirt", "price": 200 },
    { "id": 4, "name": "cap", "price": 500 },
    { "id": 5, "name": "shirt", "price": 500 },
    { "id": 6, "name": "cap", "price": 1000 },
    { "id": 7, "name": "pant", "price": 400 },
    { "id": 8, "name": "shirt", "price": 500 },
    { "id": 9, "name": "shirt", "price": 500 },
    { "id": 10, "name": "shirt", "price": 500 },
    { "id": 11, "name": "shirt", "price": 500 },
    { "id": 12, "name": "shirt", "price": 500 },
    { "id": 13, "name": "shirt", "price": 500 },
    { "id": 14, "name": "shirt", "price": 500 },
    { "id": 15, "name": "shirt", "price": 500 },
    { "id": 16, "name": "shirt", "price": 500 },
];


const itemsPerPage = 5;
let currentPage = 1;

const productCardContainer = document.getElementById("productCardContainer");
const currentPageDisplay = document.getElementById("currentPageDisplay");

function displayPage(page) {
    productCardContainer.innerHTML = "";

    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    products.slice(startIndex, endIndex).forEach(item => {
        productCardContainer.innerHTML += `
        <div class="bg-slate-200 p-2">
            <p>ID: ${item.id}</p>
            <p>Name: ${item.name}</p>
            <p>Price: ${item.price}</p>
        </div>`;
    });

    // Calculate total pages
    const totalPages = Math.ceil(products.length / itemsPerPage);

    currentPageDisplay.innerHTML = ""; 0

    if (totalPages > 1) {
        for (let i = 1; i <= totalPages; i++) {
            const pageButton = document.createElement("button");
            pageButton.textContent = i;
            pageButton.className = "border p-1 mx-1 hover:bg-slate-100";


            if (i === page) {
                pageButton.classList.add("bg-sky-300");
            }

            pageButton.addEventListener("click", () => {
                currentPage = i;
                displayPage(currentPage);
            });

            currentPageDisplay.appendChild(pageButton);
        }
    }
}

displayPage(currentPage);

// Next page button click
document.getElementById("nextBtn").addEventListener("click", () => {
    const totalPages = Math.ceil(products.length / itemsPerPage);
    if (currentPage < totalPages) {
        currentPage++;
        displayPage(currentPage);
    }
});

// Previous page button click
document.getElementById("prevBtn").addEventListener("click", () => {
    if (currentPage > 1) {
        currentPage--;
        displayPage(currentPage);
    }
});