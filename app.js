
const products = [
  { id: 1, name: "Shirt", price: "$20" },
  { id: 2, name: "Shoes", price: "$50" },
  { id: 3, name: "Bag", price: "$35" }
];

const container = document.getElementById("product-list");

products.forEach(product => {
  const div = document.createElement("div");
  div.className = "card";
  div.innerHTML = `<h3>${product.name}</h3><p>${product.price}</p><button>Add to Cart</button>`;
  container.appendChild(div);
});

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('sw.js');
}

function subscribePush() {
  alert("Push Notification feature requires backend (this is a demo).");
}
