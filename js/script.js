"use strict";

const products = {
  fridge: [
    {
      name: "Холодильник Samsung",
      price: 1000,
    },
    {
      name: "Холодильник LG",
      price: 1200,
    },
  ],
  stove: [
    {
      name: "Плита Samsung",
      price: 500,
    },
    {
      name: "Плита LG",
      price: 600,
    },
  ],
  microwave: [
    {
      name: "Мікрохвильова піч Samsung",
      price: 300,
    },
    {
      name: "Мікрохвильова піч LG",
      price: 400,
    },
  ],
};

function showProducts(category) {
  const productsContainer = document.querySelector("#products");
  productsContainer.innerHTML = "<h2>Товари</h2>";

  const categoryProducts = products[category];
  for (let i = 0; i < categoryProducts.length; i++) {
    const product = categoryProducts[i];
    const productElement = document.createElement("div");
    productElement.className = "product";
    productElement.textContent = product.name;
    productElement.onclick = showProductDetails.bind(null, product);
    productsContainer.appendChild(productElement);
    productElement.className = "category";
  }
}

function showProductDetails(product) {
  const productDetailsContainer = document.querySelector("#product-details");
  productDetailsContainer.innerHTML = "<h2>Інформація про товар</h2>";

  const productNameElement = document.createElement("p");
  productNameElement.textContent = "Назва товару: " + product.name;

  const productPriceElement = document.createElement("p");
  productPriceElement.textContent = "Ціна: " + product.price + " грн";

  const buyButton = document.createElement("button");
  buyButton.textContent = "Купити";
  buyButton.className = "buy-button";
  buyButton.onclick = showOrderForm.bind(null, product);

  productDetailsContainer.appendChild(productNameElement);
  productDetailsContainer.appendChild(productPriceElement);
  productDetailsContainer.appendChild(buyButton);
}

function validateQuantity(input) {
  const quantity = input.value;
  const errorMessage = document.querySelector("#quantity-error");

  if (isNaN(quantity) || quantity <= 0) {
    errorMessage.textContent = "Введіть коректну кількість (більше 0)";
    input.classList.add("invalid");
    return false;
  } else {
    errorMessage.textContent = "";
    input.classList.remove("invalid");
    return true;
  }
}

function showOrderForm(product) {
  const productDetailsContainer = document.querySelector("#product-details");
  productDetailsContainer.innerHTML = "";

  const orderForm = document.createElement("form");
  orderForm.id = "order-form";

  const fullNameInput = createFormInput(
    "text",
    "Введіть ім'я",
    "full-name",
    true
  );
  const fullLastNameInput = createFormInput(
    "text",
    "Прізвище",
    "full-LastName",
    true
  );
  const fullParentNameInput = createFormInput(
    "text",
    "По батькові",
    "full-ParentName",
    true
  );
  const citySelect = createFormSelect("city", true, [
    "Київ",
    "Харків",
    "Одеса",
    "Дніпро",
    "Донецьк",
    "Запоріжжя",
    "Львів",
    "Кривий Ріг",
    "Миколаїв",
    "Маріуполь",
    "Луганськ",
    "Вінниця",
    "Макіївка",
    "Севастополь",
    "Сімферополь",
    "Херсон",
    "Полтава",
    "Чернігів",
    "Черкаси",
    "Хмельницький",
    "Чернівці",
    "Житомир",
    "Суми",
    "Херсон",
    "Рівне",
    "Тернопіль",
    "Івано-Франківськ",
    "Ужгород",
    "Луцьк",
    "Кропивницький",
    "Чернівці",
    "Херсон",
    "Ізмаїл",
    "Кам'янське",
    "Слов'янськ",
    "Павлоград",
    "Житомир",
    "Луцьк",
    "Суми",
    "Біла Церква",
    "Кам'янець-Подільський",
    "Кременчук",
    "Алчевськ",
    "Лисичанськ",
    "Дружківка",
    "Бердянськ",
    "Артемівськ",
    "Конотоп",
    "Олександрія",
    "Мукачеве",
    "Бровари",
    "Шостка",
    "Старокостянтинів",
    "Ірпінь",
    "Вознесенськ",
    "Лубни",
    "Дрогобич",
    "Новоград-Волинський",
    "Рубіжне",
    "Сєвєродонецьк",
    "Костянтинівка",
    "Димитровград",
    "Сарни",
    "Пологи",
    "Ніжин",
    "Бердичів",
    "Долина",
    "Коростень",
    "Красилів",
    "Новомосковськ",
    "Трускавець",
    "Бориспіль",
    "Жовті Води",
    "Марганець",
    "Ромни",
    "Добропілля",
    "Нововолинськ",
    "Снятин",
    "Васильків",
    "Острог",
    "Сміла",
    "Чорнобиль",
    "Шепетівка",
    "Горішні Плавні",
    "Коломия",
    "Нова Каховка",
    "П'ятихатки",
    "Сокаль",
    "Судак",
    "Долинська",
    "Тернопіль",
    "Хуст",
    "Яворів",
    "Берегове",
    "Березне",
    "Соснівка",
    "Виноградів",
    "Золочів",
    "Кам'янка-Бузька",
    "Скадовськ",
    "Красноперекопськ",
    "Красноград",
    "Новий Розділ",
    "Мукачеве",
    "Малин",
    "Знам'янка",
    "Бердянськ",
    "Сміла",
    "Дубровиця",
    "Дубляни",
    "Новий Калинів",
    "Мерефа",
    "Бориспіль",
    "Пологи",
    "Теребовля",
    "Боярка",
    "Ланівці",
    "Теплодар",
    "Деражня",
    "Лубни",
    "Борислав",
    "Борщів",
    "Скадовськ",
    "Черкаси",
    "Вараш",
    "Нікополь",
    "Новоградівка",
    "Любомль",
    "Тисмениця",
    "Первомайськ",
    "Костопіль",
    "Верхньодніпровськ",
    "Полонне",
    "Радехів",
    "Біла Церква",
    "Ізяслав",
    "Збараж",
    "Люботин",
    "Чернівці",
    "Здолбунів",
  ]);
  const novaPoshtaSelect = createFormSelect("nova-poshta", true, [
    "Відділення 1",
    "Відділення 2",
    "Відділення 3",
    "Відділення 4",
    "Відділення 5",
    "Відділення 6",
    "Відділення 7",
    "Відділення 8",
    "Відділення 9",
    "Відділення 10",
    "Відділення 11",
    "Відділення 12",
    "Відділення 13",
    "Відділення 14",
    "Відділення 15",
  ]);
  const paymentMethodSelect = createFormSelect("payment-method", true, [
    "Карта",
    "Післяплата",
    "Готівка самовивіз",
  ]);
  const quantityInput = createFormInput(
    "text",
    "Введіть кількість",
    "quantity",
    true
  );
  quantityInput.addEventListener("input", () => {
    const value = quantityInput.value;
    if (!/^\d+$/.test(value)) {
      alert("Введіть коректну кількість");
      quantityInput.value = "";
    }
  });
  const commentInput = createFormTextarea("Введіть коментарій", "comment");
  const submitButton = createFormButton("submit", "Замовити", "Замовити");
  const quantityError = document.createElement("p");
  quantityError.id = "quantity-error";
  quantityError.className = "error";
  orderForm.appendChild(quantityError);

  orderForm.appendChild(fullNameInput);
  orderForm.appendChild(fullLastNameInput);
  orderForm.appendChild(fullParentNameInput);
  orderForm.appendChild(citySelect);
  orderForm.appendChild(novaPoshtaSelect);
  orderForm.appendChild(paymentMethodSelect);
  orderForm.appendChild(quantityInput);
  orderForm.appendChild(commentInput);
  orderForm.appendChild(submitButton);

  orderForm.addEventListener("submit", submitOrder.bind(null, product));

  productDetailsContainer.appendChild(orderForm);
}

function createFormInput(type, placeholder, name, required) {
  const input = document.createElement("input");
  input.type = type;
  input.placeholder = placeholder;
  input.name = name;
  if (required) {
    input.required = true;
  }
  input.className = "form";
  return input;
}

function createFormSelect(name, required, options) {
  const select = document.createElement("select");
  select.name = name;
  if (required) {
    select.required = true;
  }
  select.className = "form";

  options.forEach((optionText) => {
    const option = document.createElement("option");
    option.value = optionText;
    option.textContent = optionText;
    select.appendChild(option);
  });

  return select;
}

function createFormTextarea(placeholder, name) {
  const textarea = document.createElement("textarea");
  textarea.placeholder = placeholder;
  textarea.name = name;
  textarea.className = "form";
  return textarea;
}

function createFormButton(type, value, textContent) {
  const button = document.createElement("button");
  button.type = type;
  button.value = value;
  button.textContent = textContent;
  button.className = "buy-button";
  return button;
}

function submitOrder(product, event) {
  event.preventDefault();

  const fullName = event.target.elements["full-name"].value;
  const fullLastName = event.target.elements["full-LastName"].value;
  const fullParentName = event.target.elements["full-ParentName"].value;
  const city = event.target.elements["city"].value;
  const novaPoshta = event.target.elements["nova-poshta"].value;
  const paymentMethod = event.target.elements["payment-method"].value;
  const quantityInput = event.target.elements["quantity"];
  const comment = event.target.elements["comment"].value;

  if (!validateQuantity(quantityInput)) {
    return;
  }

  const quantity = quantityInput.value;

  const order = {
    date: new Date().toLocaleString(),
    productName: product.name,
    price: product.price * quantity,
    fullName,
    fullLastName,
    fullParentName,
    city,
    novaPoshta,
    paymentMethod,
    quantity,
    comment,
  };

  saveOrder(order);
  showMyOrders();
}

function calculateOrderTotal(order, product) {
  return parseInt(order.quantity) * product.price;
}

function saveOrder(order) {
  const orders = JSON.parse(localStorage.getItem("orders")) || [];
  orders.push(order);
  localStorage.setItem("orders", JSON.stringify(orders));
}

function showMyOrders() {
  const ordersContainer = document.querySelector("#product-details");
  ordersContainer.innerHTML = "<h2>Мої замовлення</h2>";

  const orders = JSON.parse(localStorage.getItem("orders")) || [];
  if (orders.length === 0) {
    ordersContainer.innerHTML += "<p>У вас немає замовлень.</p>";
  } else {
    const ordersList = document.createElement("ul");
    orders.forEach((order, index) => {
      const orderItem = document.createElement("li");
      orderItem.innerHTML = `
                <p>Замовлення #${index + 1}</p>
                <p>Дата: ${order.date}</p>
                <p>Назва товару: ${order.productName}</p>
                <p>Ціна: ${order.price} грн</p>
                <button onclick="showOrderDetails(${index})">Деталі</button>
                <button onclick="deleteOrder(${index})">Видалити</button>
            `;
      ordersList.appendChild(orderItem);
    });
    ordersContainer.appendChild(ordersList);
  }
}

function calculateOrderTotal(order, product) {
  return parseInt(order.quantity) * product.price;
}

function getProductByName(productName) {
  for (const category in products) {
    const categoryProducts = products[category];
    const product = categoryProducts.find((p) => p.name === productName);
    if (product) {
      return product;
    }
  }
  return null;
}

function calculateOrderTotal(order) {
  return parseInt(order.quantity) * product.price;
}

function showOrderDetails(index) {
  const orders = JSON.parse(localStorage.getItem("orders")) || [];
  const order = orders[index];

  if (order) {
    const productName = order.productName;
    const productPrice = order.price;

    const orderDetailsContainer = document.querySelector("#product-details");
    orderDetailsContainer.innerHTML = "<h2>Деталі замовлення</h2>";
    orderDetailsContainer.innerHTML += "<p>Замовлення #" + (index + 1) + "</p>";
    orderDetailsContainer.innerHTML += "<p>Дата: " + order.date + "</p>";
    orderDetailsContainer.innerHTML +=
      "<p>Назва товару: " + productName + "</p>";
    orderDetailsContainer.innerHTML += "<p>Ціна: " + productPrice + " грн</p>";
    orderDetailsContainer.innerHTML += "<p>Ім'я: " + order.fullName + "</p>";
    orderDetailsContainer.innerHTML +=
      "<p>Прізвище: " + order.fullLastName + "</p>";
    orderDetailsContainer.innerHTML +=
      "<p>По батькові: " + order.fullParentName + "</p>";
    orderDetailsContainer.innerHTML += "<p>Місто: " + order.city + "</p>";
    orderDetailsContainer.innerHTML += "<p>Склад: " + order.novaPoshta + "</p>";
    orderDetailsContainer.innerHTML +=
      "<p>Спосіб оплати: " + order.paymentMethod + "</p>";
    orderDetailsContainer.innerHTML +=
      "<p>Кількість: " + order.quantity + "</p>";
    orderDetailsContainer.innerHTML +=
      "<p>Коментарь: " + order.comment + "</p>";
  }
}

function deleteOrder(index) {
  const orders = JSON.parse(localStorage.getItem("orders")) || [];
  if (index >= 0 && index < orders.length) {
    orders.splice(index, 1);
    localStorage.setItem("orders", JSON.stringify(orders));
    showMyOrders();
  }
}

const fridgeButton = document.querySelector("#fridge-button");
const stoveButton = document.querySelector("#stove-button");
const microwaveButton = document.querySelector("#microwave-button");

showProducts("fridge");
