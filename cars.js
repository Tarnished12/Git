const carItems = {
    Lambo: [
        {
            name: "Lamborghini aventador svj",
            price: 129.99,
            description: "The indomitable V12 engine of Aventador SVJ stands out for its exceptional design and the advanced technology of its materials. Boasting 770 CV at 8,500 RPMs, and capable of accelerating from 0-100 km/h in 2.8 seconds, Aventador SVJ provides thrills unlike anything that has ever been experienced before.",
            Horsepower: 770
        },
        {
            name: "Lamborghini Urus",
            price: 119.99,
            description: "The soul of a super sports car and the functionality of an SUV: Lamborghini Urus is the first Super Sport Utility Vehicle in the world. With extreme proportions, breathtaking design, extraordinary driving dynamics and heart-pounding performance, Urus represents freedom in its quintessential state.",
            Horsepower: 657
        },
    ],
    Porsche: [
        {
            name: "Porsche 911 gt3 rs",
            price: 119.99,
            description: "The 4.0-liter unit makes 518 horsepower and produces an intoxicating soundtrack all the way to its 9000-rpm redline. The chassis is a sharper version of the 911's, tuned, tweaked, and fortified with a control-arm front suspension design that Porsche says is derived from the factory's 911 RSR and 911 GT3.",
            Horsepower: 518
        },
        {
            name: "Porsche 911",
            price: 99.99,
            description: "The 2024 Porsche 911 has a turbocharged flat-six engine that hangs off the back, aft of the rear axle, just as it did in the 1964 original. Except now, it can be had with an output as high as 473 horsepower.",
            Horsepower: 473
        },
    ],
    Ferrari: [
        {
            name: "LaFerrari",
            price: 169.99,
            description: "The LaFerrari is the first production car to ever be equipped with an F1-derived hybrid solution and combines a powerful electric motor with the classic Ferrari V12 engine. It blends blistering performance and maximum efficiency to make it the most extreme performance ever seen in a Ferrari production car.",
            Horsepower: 950        
        },
        {
            name: "Ferrari Roma",
            price: 169.99,
            description: "The Ferrari Roma (Type F169) is a grand touring car by Italian manufacturer Ferrari. It has a front mid-engine, rear-wheel-drive layout with a turbocharged V8 engine and a 2+2 seating arrangement.",
            Horsepower: 612        
        }
    ]



};




function updateCarItems() {
    const car = document.getElementById("car");
    const carItemsList = document.getElementById("car-items");
    carItemsList.innerHTML = ""; 
    const carValue = car.value;
    const items = carItems[carValue] || []; 

    items.forEach(item => {
        const li = document.createElement("li");
        const name = document.createElement("span");
        const price = document.createElement("span");
        const description = document.createElement("p");
        const horsepower = document.createElement("p");
        const addButton = document.createElement("button");

        name.textContent = item.name;
        price.textContent = ` Eur  ${ item.price.toFixed(2)}`;
        description.textContent = `Description:  ${item.description}`;
        horsepower.textContent = `Horsepower: ${item.Horsepower}`;
        addButton.textContent = `+`;
        addButton.setAttribute("data-name", item.name);
        addButton.setAttribute("data-price", item.price.toFixed(2));
        
        li.appendChild(name);
        li.appendChild(price);
        li.appendChild(description);
        li.appendChild(horsepower);
        li.appendChild(addButton);

        carItemsList.appendChild(li);
    });
}

function applySearchFunctionality() {
    const searchInput = document.getElementById("search");
    const carItemsList = document.getElementById("car-items");

    searchInput.addEventListener("input", function() {
        const searchTerm = searchInput.value.toLowerCase();
        const items = carItemsList.getElementsByTagName("li");

        Array.from(items).forEach((item) => {
            const itemName = item.querySelector("span").textContent.toLowerCase();
            if (itemName.includes(searchTerm)) {
                item.style.display = "block";
            } else {
                item.style.display = "none";
            } 
        });
    });
}


function init() {
    const carSelect = document.getElementById("car");
    carSelect.addEventListener("change", updateCarItems);
    applySearchFunctionality();
}

document.addEventListener("DOMContentLoaded", init);

