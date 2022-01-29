const cats = [
  {
    name: "Blob",
    age: 10,
  },
  {
    name: "Harold",
  },
  {
    name: "Blurt",
    age: 21,
  },
];

//Question 1

const cat = {
  complain: function () {
    console.log("Meow!");
  },
};

cat.complain();

//Question 2

let heading = document.querySelector("h3");
heading.innerHTML = "Updated heading";

//Question 3

heading.style.fontSize = "2em";

//Question 4

heading.classList.add("subheading");

//Question 5

const paragraphs = document.querySelectorAll("p");

for (let i = 0; i < paragraphs.length; i++) {
  paragraphs[i].style.color = "red";
  console.log(paragraphs[i].innerHTML);
}

//Question 6

const resultsContainer = document.querySelector(".results");
resultsContainer.innerHTML = "<p>New paragraph</p>";
resultsContainer.style.backgroundColor = "yellow";

//Question 7

function AnimalList(list) {
  for (let i = 0; i < list.length; i++) console.log(list[i].name);
}

AnimalList(cats);

//Question 8

function createCats(cats) {
  let addDIV = "";
  let addH5 = "";
  let addParagraph = "";
  let noAge = "Age unknown";

  for (let i = 0; i < cats.length; i++) {
    if (cats[i].age === undefined) {
      addParagraph += `<h5>name: ${cats[i].name}:</h5><p>age: ${noAge}<p>`;
    } else {
      addDIV = addDIV + "<div>" + cats[i] + "</div>";
      addH5 =
        addH5 +
        "<h5>" +
        "name: " +
        cats[i].name +
        "</h5>" +
        "<p>" +
        "age: " +
        cats[i].age +
        "</p>";
    }
  }

  const displayCats = document.querySelector(".cat-container");
  displayCats.innerHTML = `${addH5}${addParagraph}`;
}

createCats(cats);
