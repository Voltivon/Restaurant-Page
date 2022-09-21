import pancakes from "/src/assets/pancakes.jpg";
import eggAndToast from "/src/assets/eggsAndToast.jpg";
import burrito from  "/src/assets/burrito.jpg";

export function menu(){


    const contentDiv = document.querySelector('#content');

    contentDiv.replaceChildren();
   
    const createMenuH2 = document.createElement("h1")
    createMenuH2.classList.add("menu-header");
    createMenuH2.textContent = "The Menu";
    contentDiv.appendChild(createMenuH2);

    const image = document.createElement('img');
    image.src = pancakes
    image.classList.add("image");
    contentDiv.appendChild(image);

    const sectionTextOne = document.createElement("p");
    sectionTextOne.textContent = "Pancakes with sliced strawberries"
    sectionTextOne.classList.add("section-text-one");
    contentDiv.appendChild(sectionTextOne);

    const imageTwo = document.createElement("img");
    imageTwo.src = eggAndToast;
    imageTwo.classList.add("image-two");
    contentDiv.appendChild(imageTwo)

    const sectionTextTwo = document.createElement("p");
    sectionTextTwo.textContent = "Eggs and Toast";
    contentDiv.classList.add("section-text-two");
    contentDiv.appendChild(sectionTextTwo);

    const imageThree = document.createElement("img");
    imageThree.src = burrito
    imageThree.classList.add("image-two");
    contentDiv.appendChild(imageThree);

    const sectionTextThree = document.createElement("p");
    sectionTextThree.textContent = "Meat Burrito";
    sectionTextThree.classList.add("section-text-three");
    contentDiv.appendChild(sectionTextThree);
    
    
 
   
}