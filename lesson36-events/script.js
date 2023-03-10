/* Створити HTML-сторінку для відображення/редагування тексту. При відкритті сторінки текст 
відображається за допомогою тега div. При натисканні Ctrl + E, замість div з'являється textarea 
з тим же текстом, який тепер можна редагувати. При натисканні Ctrl + S, замість textarea з'являється 
div з уже зміненим текстом. Не забудь вимкнути поведінку за замовчуванням для цих поєднань клавіш. */
const div = document.getElementById("text-edit");

const textarea = document.createElement("textarea");
textarea.className = "block";
textarea.value = div.textContent;

const editText = (event) => {
  if (event.code == "KeyE" && (event.ctrlKey || event.metaKey)) {
    div.replaceWith(textarea);
    event.preventDefault();
  }

  if (event.code == "KeyS" && (event.ctrlKey || event.metaKey)) {
    div.textContent = textarea.value;
    textarea.replaceWith(div);
    event.preventDefault();
  }
};

document.addEventListener("keydown", editText);

/* Створити HTML-сторінку з великою таблицею. При кліку на заголовок стовпця, 
необхідно відсортувати дані цього стовпця. Врахуй, що числові значення повинні 
сортуватися як числа, а не як рядки. */
const sortTable = document.getElementById("sortable-table");
const thead = sortTable.tHead;
let lastTarget;
let asc = true;

const sortRows = (index, type) => {
  const tbody = sortTable.tBodies[0];
  const rows = Array.from(tbody.rows);
  const cellData = (row) => row.cells[index].textContent;
  const toDate = (str) => new Date(str.split(".").reverse().join("-"));
  let compare;

  switch (type) {
    case "number":
      compare = (rowA, rowB) => cellData(rowA) - cellData(rowB);
      break;

    case "string":
      compare = (rowA, rowB) => (cellData(rowA) > cellData(rowB) ? 1 : -1);
      break;

    case "date":
      compare = (rowA, rowB) => toDate(cellData(rowA)) - toDate(cellData(rowB));
      break;
  }

  rows.sort(compare);
  if (!asc) rows.reverse();
  tbody.append(...rows);
};

thead.addEventListener("click", (event) => {
  const {
    cellIndex: index,
    dataset: { type },
  } = event.target;
  asc = event.target === lastTarget ? !asc : true;
  sortRows(index, type);
  lastTarget = event.target;
});

/* Створити HTML-сторінку з блоком тексту в рамці. Реалізувати можливість змінювати розмір блоку, 
якщо затиснути мишку в правому нижньому кутку і тягнути її далі. */
const resizable = document.getElementById("resizable");
const resizer = document.getElementById("resizer");

const resize = (e) => {
  resizable.style.width =
    e.clientX - resizable.getBoundingClientRect().left + "px";
  resizable.style.height =
    e.clientY - resizable.getBoundingClientRect().top + "px";
};

const stopResize = () => {
  document.removeEventListener("mousemove", resize);
  document.removeEventListener("mouseup", stopResize);
};

resizer.addEventListener("mousedown", (e) => {
  e.preventDefault();
  document.addEventListener("mousemove", resize);
  document.addEventListener("mouseup", stopResize);
});

// calculate the average price of products in each category,
const products = [
  { name: "Product 1", price: 20, category: "Electronics" },
  { name: "Product 2", price: 30, category: "Clothes" },
  { name: "Product 3", price: 40, category: "Electronics" },
  { name: "Product 4", price: 50, category: "Clothes" },
  { name: "Product 5", price: 60, category: "Clothes" },
  { name: "Product 6", price: 70, category: "Electronics" },
  { name: "Product 7", price: 80, category: "Clothes" },
  { name: "Product 8", price: 90, category: "Electronics" },
];

const results = products.reduce(
  (acc, product) =>
    acc.hasOwnProperty(product.category)
      ? acc
      : {
          ...acc,
          [product.category]: products.reduce(
            (acc, item) =>
              item.category === product.category ? (acc += item.price) : acc,
            0
          ),
        },
  {}
);

/* create a form with submit
when I click submit i could see either in alert or console all data that user has inserted */
const testForm = document.forms["test-form"];
const checkInput = document.getElementById("check-input");

testForm.addEventListener("input", (e) => {
  const { name, value } = e.target;
  checkInput.textContent = `${name}: ${value}`;
});

testForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = new FormData(testForm);
  for (const [key, value] of formData) {
    console.log(`${key}: ${value}`);
  }
});