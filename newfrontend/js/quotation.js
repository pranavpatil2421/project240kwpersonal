/* =========================
   Populate Review Section
========================= */

// Product Details
const product = JSON.parse(localStorage.getItem("productDetails"));
if (product) {
    document.getElementById("review-eut").innerText =
        `${product.type} (${product.power})`;
} else {
    document.getElementById("review-eut").innerText = "Not provided";
}

// Technical Specification Documents
const docs = JSON.parse(localStorage.getItem("technicalDocs")) || [];
const docsList = document.getElementById("review-docs");

if (docs.length === 0) {
    const li = document.createElement("li");
    li.innerText = "No documents uploaded";
    docsList.appendChild(li);
} else {
    docs.forEach(doc => {
        const li = document.createElement("li");
        li.innerText = doc.name;
        docsList.appendChild(li);
    });
}

// Testing Requirements
const requirements = JSON.parse(localStorage.getItem("testingRequirements"));
document.getElementById("review-req").innerText =
    requirements ? requirements.join(", ") : "Not provided";

// Testing Standards
const standards = JSON.parse(localStorage.getItem("testingStandards"));
document.getElementById("review-std").innerText =
    standards ? standards.join(", ") : "Not provided";

const labsData = [
    { name: "TUV INDIA PVT. LTD., BANER, PUNE", state: "Maharashtra", city: "Pune" },
    { name: "INTERTEK INDIA, MUMBAI", state: "Maharashtra", city: "Mumbai" },
    { name: "SGS INDIA PRIVATE LIMITED, BENGALURU", state: "Karnataka", city: "Bengaluru" },
    { name: "ABB INDIA LIMITED – ELSP LAB", state: "Karnataka", city: "Bengaluru" },
    { name: "UL INDIA, BENGALURU", state: "Karnataka", city: "Bengaluru" },
    { name: "CPRI, BENGALURU", state: "Karnataka", city: "Bengaluru" },
    { name: "ERTL (STQC), CHENNAI", state: "Tamil Nadu", city: "Chennai" }
];

const cityMap = {
    "Maharashtra": ["Pune", "Mumbai"],
    "Karnataka": ["Bengaluru"],
    "Tamil Nadu": ["Chennai"],
    "Delhi NCR": ["Delhi", "Gurgaon"]
};

const stateSelect = document.getElementById("state");
const citySelect = document.getElementById("city");
const labsBox = document.querySelector(".labs-box");

stateSelect.addEventListener("change", () => {
    citySelect.innerHTML = "<option value=''>City</option>";

    if (cityMap[stateSelect.value]) {
        cityMap[stateSelect.value].forEach(city => {
            const opt = document.createElement("option");
            opt.textContent = city;
            citySelect.appendChild(opt);
        });
    }

    labsBox.innerHTML = "<p class='hint'>Select city to view labs</p>";
});

citySelect.addEventListener("change", () => {
    labsBox.innerHTML = "";

    const filteredLabs = labsData.filter(
        lab => lab.state === stateSelect.value && lab.city === citySelect.value
    );

    if (filteredLabs.length === 0) {
        labsBox.innerHTML = "<p class='hint'>No labs available for selected region</p>";
        return;
    }

    filteredLabs.forEach(lab => {
        const label = document.createElement("label");
        label.className = "lab-item";
        label.innerHTML = `
    <input type="checkbox" value="${lab.name}">
    <span>${lab.name}</span>
`;
        labsBox.appendChild(label);
    });
});

/* 🔗 CONNECTED: Get Quotation */
document.getElementById("quoteBtn").addEventListener("click", () => {
    window.location.href = "/quotation-success.html";
});

/* =========================
   Back Navigation
========================= */
function goBack() {
    window.history.back();
}