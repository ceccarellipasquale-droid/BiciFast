// Carrito de BiciFast. Persiste en localStorage y es compartido entre todas las páginas.
// Requiere que js/products.js esté cargado antes (getProductById, formatPEN).

const BICIFAST_CART_KEY = "bicifast_cart";

function getCart() {
  try {
    const raw = localStorage.getItem(BICIFAST_CART_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch (e) {
    return [];
  }
}

function saveCart(cart) {
  localStorage.setItem(BICIFAST_CART_KEY, JSON.stringify(cart));
  updateCartBadges();
}

// options: { color, size, variant, qty }
function addToCart(productId, options = {}) {
  const qty = options.qty && options.qty > 0 ? options.qty : 1;
  const color = options.color || null;
  const size = options.size || null;
  const variant = options.variant || null;
  const cart = getCart();

  const existing = cart.find(
    (item) => item.id === productId && item.color === color && item.size === size && item.variant === variant
  );

  if (existing) {
    existing.qty += qty;
  } else {
    cart.push({ id: productId, color, size, variant, qty });
  }

  saveCart(cart);
  showToast("Agregado al carrito");
}

function getItemUnitPrice(item) {
  const product = item.product || getProductById(item.id);
  if (!product) return 0;
  if (item.variant && product.variants) {
    const variantObj = product.variants.find((v) => v.label === item.variant);
    if (variantObj) return variantObj.price;
  }
  return product.price;
}

function removeFromCart(index) {
  const cart = getCart();
  cart.splice(index, 1);
  saveCart(cart);
}

function updateCartQty(index, qty) {
  const cart = getCart();
  if (!cart[index]) return;
  if (qty <= 0) {
    cart.splice(index, 1);
  } else {
    cart[index].qty = qty;
  }
  saveCart(cart);
}

function clearCart() {
  saveCart([]);
}

function getCartDetailed() {
  return getCart()
    .map((item, index) => {
      const product = getProductById(item.id);
      if (!product) return null;
      return { ...item, index, product };
    })
    .filter(Boolean);
}

function getCartCount() {
  return getCart().reduce((sum, item) => sum + item.qty, 0);
}

function getCartSubtotal() {
  return getCartDetailed().reduce((sum, item) => sum + getItemUnitPrice(item) * item.qty, 0);
}

function updateCartBadges() {
  const count = getCartCount();
  document.querySelectorAll("[data-cart-count]").forEach((el) => {
    el.textContent = String(count);
    el.style.display = count > 0 ? "" : "none";
  });
}

function showToast(message) {
  let toast = document.getElementById("bicifast-toast");
  if (!toast) {
    toast = document.createElement("div");
    toast.id = "bicifast-toast";
    toast.style.cssText = [
      "position:fixed",
      "left:50%",
      "bottom:100px",
      "transform:translate(-50%, 20px)",
      "background:#cdf200",
      "color:#101415",
      "font-family:Inter, sans-serif",
      "font-weight:600",
      "font-size:14px",
      "padding:12px 24px",
      "border-radius:9999px",
      "box-shadow:0 10px 30px -5px rgba(0,0,0,0.5)",
      "z-index:9999",
      "opacity:0",
      "transition:opacity 0.25s ease, transform 0.25s ease",
      "pointer-events:none",
    ].join(";");
    document.body.appendChild(toast);
  }
  toast.textContent = message;
  requestAnimationFrame(() => {
    toast.style.opacity = "1";
    toast.style.transform = "translate(-50%, 0)";
  });
  clearTimeout(toast._hideTimer);
  toast._hideTimer = setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transform = "translate(-50%, 20px)";
  }, 2000);
}

document.addEventListener("DOMContentLoaded", updateCartBadges);
