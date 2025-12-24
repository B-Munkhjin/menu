const all=document.getElementById("all")
const breakfast=document.getElementById("breakfast")
const lunch=document.getElementById("lunch")
const dinner=document.getElementById("dinner")
const shake=document.getElementById("shake")
const meals = document.querySelector('.meals')


let foods=[
    {
        id: 1,
        title: "Pancake",
        isWhat: "breakfast",
        img: './images/pancake.png',
        category: 'breakfast'
    },
       {
        id: 2,
        title: "Milkshake",
        isWhat: "shake",
        img: './images/milkshake.png',
        category: 'shake'
    },
    {
        id: 3,
        title: "Grilled Steak",
        isWhat: "dinner",
        img: './images/steak.png',
        category: 'dinner'
    },
       {
        id: 4,
        title: "Sandwich",
        isWhat: "lunch",
        img: './images/lunch.png',
        category: 'lunch'
    },
    {
        id: 5,
        title: "Full English Breakfast",
        isWhat: "breakfast",
        img: './images/breakfast2.png',
        category: 'breakfast'
    },
       {
        id: 6,
        title: "Lasagna",
        isWhat: "dinner",
        img: './images/dinner2.png',
        category: 'dinner'
    },
       

]
console.log(foods)

const render = (item) => {
  let menu = "";
  item.forEach((food) => {
    const foodItem = createElement(food)
    menu+=foodItem
  })
  meals.innerHTML = menu;
}
/////card butets
const createElement = (food)=>{
    return `     <div class="card">
            <img src=${food.img} class="pic"/>
            <h2 class="title">${food.title}</h2>
        </div>`
}
render(foods)

//// angilah heseg///
const category = (categoryValue) =>{
    if(categoryValue === "breakfast"){
        const categoryFood = foods.filter((food)=>{
            if(food.isWhat === "breakfast"){
                return true
            } else{
                return false
            }
        })
        render(categoryFood)
    }
     if(categoryValue === "lunch"){
        const categoryFood = foods.filter((food)=>{
            if(food.isWhat === "lunch"){
                return true
            } else{
                return false
            }
        });
    render(categoryFood)
    }
     if(categoryValue === "dinner"){
        const categoryFood = foods.filter((food)=>{
            if(food.isWhat === "dinner"){
                return true
            } else{
                return false
            }
        })
        render(categoryFood)
    }
     if(categoryValue === "shake"){
        const categoryFood = foods.filter((food)=>{
            if(food.isWhat === "shake"){
                return true
            } else{
                return false
            }
        })
        render(categoryFood)
    }
     if(categoryValue === "all"){
        render(foods)
    } 
} 

all.addEventListener("click", () => {category("all")
    all.classList.add("active-color");
  breakfast.classList.remove("active-color");
  lunch.classList.remove("active-color");
  dinner.classList.remove("active-color");
  shake.classList.remove("active-color");
});
breakfast.addEventListener("click", () => {category("breakfast")
    all.classList.remove("active-color");
  breakfast.classList.add("active-color");
  lunch.classList.remove("active-color");
  dinner.classList.remove("active-color");
  shake.classList.remove("active-color");
});
lunch.addEventListener("click", () => {category("lunch")
    all.classList.remove("active-color");
  breakfast.classList.remove("active-color");
  lunch.classList.add("active-color");
  dinner.classList.remove("active-color");
  shake.classList.remove("active-color");
});
dinner.addEventListener("click", () => {category("dinner")
    all.classList.remove("active-color");
  breakfast.classList.remove("active-color");
  lunch.classList.remove("active-color");
  dinner.classList.add("active-color");
  shake.classList.remove("active-color");
});
shake.addEventListener("click", () => {category("shake")
    all.classList.remove("active-color");
  breakfast.classList.remove("active-color");
  lunch.classList.remove("active-color");
  dinner.classList.remove("active-color");
  shake.classList.add("active-color");
});