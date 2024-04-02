//ITEM DROPPING

function handle_Tab_Clicked(event) {
    const tabCategory = event.target.id;
    const content = document.querySelector(".content." + tabCategory);
    console.log(tabCategory);
    const contents = document.querySelectorAll(".content");
    for (let current of contents) {
        if (current === content) {
            current.classList.add("active")
        } else {
            current.classList.remove("active")
        }
    }

    const itemContainer = document.querySelector('.' + tabCategory);
    let drop_style;
    let number_of_items;
    switch (tabCategory) {
        case 'stars':
            drop_style = 'stardrop';
            number_of_items = 100;
            break;
        case 'flowers':
            drop_style = 'flowerdrop';
            number_of_items = 15;
            break;
        case 'yellow_leaves':
            drop_style = 'yleavesdrop';
            number_of_items = 15;
            break;
        case 'snow':
            drop_style = 'snowflakedrop';
            number_of_items = 50;
            break;
        case 'green_leaves':
            drop_style = 'greenleavesdrop';
            number_of_items = 15;
            break;
    }

    for (let i = 0; i < number_of_items; i++) {
        const itemDrop = document.createElement('div');
        itemDrop.classList.add(drop_style);
        itemDrop.style.left = Math.random() * 100 + 'vw';
        itemDrop.style.top = Math.random() * 1 + 'vh';
        itemDrop.style.animationDelay = Math.random() + 's';
        itemDrop.style.animationDuration = Math.random() * 4 + 3 + 's';
        itemDrop.style.transform = 'rotate(' + (Math.random() * 330) + 'deg)'; // Задаємо випадковий нахил краплі
        itemContainer.appendChild(itemDrop);
    }
}

//BUTTONS

function handle_Button_Clicked(event) {
    const buttonCategory = event.target.id;
    console.log(buttonCategory);
}

