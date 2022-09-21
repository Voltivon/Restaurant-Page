import homeImg from "/src/assets/restaurantPhoto.jpg"


export function initialPageLoad(){
    const contentDiv = document.querySelector("#content");

    contentDiv.replaceChildren();

    const createh1 = document.createElement("h1");
    createh1.textContent = "Welcome to my restaurant page"
    createh1.classList.add("header")
    contentDiv.appendChild(createh1)

    const image = document.createElement('img');
    image.src = homeImg;
    image.classList.add("image-home");
    contentDiv.appendChild(image);

    const sectionTextOne = document.createElement("p");
    sectionTextOne.textContent = "Best restaurant in town"
    sectionTextOne.classList.add("section-text-one");
    contentDiv.appendChild(sectionTextOne);

    const sectionTextTwo = document.createElement("p");
    sectionTextTwo.textContent = "Good service";
    contentDiv.classList.add("section-text-two");
    contentDiv.appendChild(sectionTextTwo);

    const sectionTextThree = document.createElement("p");
    sectionTextThree.textContent = "Crazy fun";
    sectionTextThree.classList.add("section-text-three");
    contentDiv.appendChild(sectionTextThree);
    
}