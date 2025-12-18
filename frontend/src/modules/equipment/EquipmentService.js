const API_URL = "/api/equipment";

export async function createEquipment(data) {
    const response = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
    });
    if (!response.ok) throw await response.json();
    return response.json();
}

export async function getAllEquipment() {
    const response = await fetch(API_URL);
    return response.json();
}