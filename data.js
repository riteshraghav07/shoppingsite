const items = [
  {
    id: 1,
    name: "Classic Denim Jacket",
    price: 1999,
    image: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f",
    description: "A timeless denim jacket for all seasons.",
    category: "Jackets"
  },
  {
    id: 2,
    name: "Summer Floral Dress",
    price: 1599,
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9",
    description: "Light and breezy floral dress for summer days.",
    category: "Dresses"
  },
  {
    id: 3,
    name: "Canvas Backpack",
    price: 1299,
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
    description: "Durable canvas backpack for everyday use.",
    category: "Bags"
  },
  {
    id: 4,
    name: "Leather Handbag",
    price: 3499,
    image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=600&q=80",
    description: "Elegant leather handbag for every occasion.",
    category: "Accessories"
  },
  {
    id: 5,
    name: "Graphic T-Shirt",
    price: 799,
    image: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c",
    description: "Cool graphic tee for casual outings.",
    category: "T-Shirts"
  },
  {
    id: 6,
    name: "Slim Fit Jeans",
    price: 1799,
    image: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f",
    description: "Comfortable slim fit jeans for daily wear.",
    category: "Jeans"
  },
  {
    id: 7,
    name: "Woolen Scarf",
    price: 599,
    image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca",
    description: "Stay warm and stylish with this woolen scarf.",
    category: "Accessories"
  },
  {
    id: 8,
    name: "Canvas Backpack",
    price: 1299,
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
    description: "Durable canvas backpack for everyday use.",
    category: "Bags"
  }
];

// Cart logic using localStorage
function getCart() {
  return JSON.parse(localStorage.getItem('cart') || '[]');
}
function setCart(cart) {
  localStorage.setItem('cart', JSON.stringify(cart));
}
function addToCart(itemId) {
  const cart = getCart();
  const found = cart.find(i => i.id === itemId);
  if (found) {
    found.qty += 1;
  } else {
    cart.push({ id: itemId, qty: 1 });
  }
  setCart(cart);
}
function removeFromCart(itemId) {
  let cart = getCart();
  cart = cart.filter(i => i.id !== itemId);
  setCart(cart);
}
function getCartCount() {
  return getCart().reduce((sum, i) => sum + i.qty, 0);
}
