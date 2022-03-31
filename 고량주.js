const addBtn = document.querySelector(".addBtn");
const addPage = document.querySelector(".addPage");
const closeBtn = document.querySelector(".closeBtn");

const showAddPage = () => {
  addPage.style.display = "block";
};

const closeAddPage = () => {
  addPage.style.display = "none";
};

addPage.style.display = "none";

addBtn.addEventListener("click", showAddPage);

closeBtn.addEventListener("click", closeAddPage);

addItem = (name, image, text) => {
  const div = document.createElement("div");
  div.classList.add("mainbox");
  div.innerHTML = `
            <img src="${image}" alt="${name}" />
            <span>${text}</span>
        `;
  document.querySelector(".mainContents").appendChild(div);

  const span = document.createElement("span");
  span.innerHTML = name;
  document.querySelector(".menu").appendChild(span);
};

addItemHandle = (e) => {
  e.preventDefault();
  const name = document.querySelector("#inputName").value;
  const image = document.querySelector("#inputImage").value;
  const text = document.querySelector("#inputText").value;
  addItem(name, image, text);
  closeAddPage();
};

addPage.addEventListener("submit", addItemHandle);
