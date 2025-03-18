// Lấy các phần tử DOM
const searchInput = document.getElementById("search");
const searchBtn = document.getElementById("btn-search");
const randomBtn = document.getElementById("btn-random");
const mealsEl = document.getElementById("meals");
const singleMealEl = document.getElementById("single-meal");

// Hàm tìm kiếm món ăn
async function searchMeals() {
    const searchTerm = searchInput.value.trim();
    if (!searchTerm) {
        alert("Vui lòng nhập từ khóa!");
        return;
    }

    const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`);
    const data = await res.json();

    mealsEl.innerHTML = ""; // Xóa danh sách cũ
    if (data.meals) {
        data.meals.forEach(meal => {
            const mealDiv = document.createElement("div");
            mealDiv.classList.add("meal");
            mealDiv.innerHTML = `
                <img src="${meal.strMealThumb}" alt="${meal.strMeal}">
                <div class="meal-info"><h3>${meal.strMeal}</h3></div>
            `;
            mealDiv.addEventListener("click", () => getMealById(meal.idMeal));
            mealsEl.appendChild(mealDiv);
        });
    } else {
        mealsEl.innerHTML = "<p>Không tìm thấy món ăn nào.</p>";
    }

    searchInput.value = "";
}

// Hàm lấy chi tiết món ăn
async function getMealById(mealId) {
    const res = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`);
    const data = await res.json();
    const meal = data.meals[0];

    singleMealEl.innerHTML = `
        <h1>${meal.strMeal}</h1>
        <img src="${meal.strMealThumb}" alt="${meal.strMeal}">
        <p><strong>Danh mục:</strong> ${meal.strCategory || "Không có"}</p>
        <p><strong>Khu vực:</strong> ${meal.strArea || "Không có"}</p>
        <p>${meal.strInstructions}</p>
    `;

    // Cuộn xuống chi tiết món ăn
    singleMealEl.scrollIntoView({ behavior: "smooth" });
}

// Hàm lấy món ăn ngẫu nhiên
async function getRandomMeal() {
    const res = await fetch("https://www.themealdb.com/api/json/v1/1/random.php");
    const data = await res.json();
    getMealById(data.meals[0].idMeal);
}

// Gán sự kiện
searchBtn.addEventListener("click", searchMeals);
randomBtn.addEventListener("click", getRandomMeal);
