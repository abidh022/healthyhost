// navbar toggling
const navbarShowBtn = document.querySelector('.navbar-show-btn');
const navbarCollapseDiv = document.querySelector('.navbar-collapse');
const navbarHideBtn = document.querySelector('.navbar-hide-btn');

navbarShowBtn.addEventListener('click', function(){
    navbarCollapseDiv.classList.add('navbar-show');
});
navbarHideBtn.addEventListener('click', function(){
    navbarCollapseDiv.classList.remove('navbar-show');
});

// changing search icon image on window resize
window.addEventListener('resize', changeSearchIcon);
function changeSearchIcon(){
    let winSize = window.matchMedia("(min-width: 1200px)");
    if(winSize.matches){
        document.querySelector('.search-icon img').src = "images/search-icon.png";
    } else {
        document.querySelector('.search-icon img').src = "images/search-icon-dark.png";
    }
}
changeSearchIcon();

// stopping all animation and transition
let resizeTimer;
window.addEventListener('resize', () =>{
    document.body.classList.add('resize-animation-stopper');
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        document.body.classList.remove('resize-animation-stopper');
    }, 400);
});

document.getElementById('nutrition-form').addEventListener('submit', function(e) {
    e.preventDefault();

    // Get the input values using the new IDs
    const productName = document.getElementById('new-product-name').value;
    const productType = document.getElementById('new-product-type').value;
    const description = document.getElementById('new-description').value;

    // Create a JSON object
    const newNutrition = {
        name: productName,
        type: productType,
        description: description,
    };

    // Update the nutrition list in the UI
    const nutritionList = document.getElementById('nutrition-list');
    const listItem = document.createElement('li');
    listItem.textContent = `${newNutrition.name} (${newNutrition.type}): ${newNutrition.description}`;
    nutritionList.appendChild(listItem);

    // Reset the form
    document.getElementById('nutrition-form').reset();
});
