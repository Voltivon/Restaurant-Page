export function contact() {
  const contentDiv = document.querySelector("#content");

  contentDiv.replaceChildren();

  const createh1 = document.createElement("h1");
  createh1.textContent = "Welcome to my restaurant page";
  createh1.classList.add("header");
  contentDiv.appendChild(createh1);

  const sectionTextTwo = document.createElement("p");
  sectionTextTwo.textContent = "Phone Number: (507)-429-3733";
  contentDiv.classList.add("section-text-two");
  contentDiv.appendChild(sectionTextTwo);

  const sectionTextThree = document.createElement("p");
  sectionTextThree.textContent = "Location: 2381 Meadow Lane";
  sectionTextThree.classList.add("section-text-three");
  contentDiv.appendChild(sectionTextThree);

  const sectionTextFour = document.createElement("p");
  sectionTextFour.textContent = "Email: brittonmarg27@gmail.com";
  sectionTextThree.classList.add("section-text-three");
  contentDiv.appendChild(sectionTextFour);

  const sectionTextFive = document.createElement("p");
  sectionTextFive.textContent = "Open 24/7";
  sectionTextThree.classList.add("section-text-three");
  contentDiv.appendChild(sectionTextFive);

  const sectionTextSix = document.createElement("p");
  sectionTextSix.textContent = "Restaurant Rating: 5/5";
  sectionTextThree.classList.add("section-text-three");
  contentDiv.appendChild(sectionTextSix);
}
