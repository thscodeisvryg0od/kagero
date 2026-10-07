/* ============================================
   KAGERŌ — Shop & Cart System
   localStorage tabanlı demo sepet
   ============================================ */

const SHOP_PRODUCTS = [
  { id: 'poster-01', category: 'poster', title: 'Hayalet Çiçek Posteri', price: 149, symbol: '花', desc: 'A2 boyut, mat kağıt, çerçevesiz' },
  { id: 'tshirt-01', category: 'tshirt', title: 'Yuki Tişört', price: 299, symbol: '雪', desc: 'S-M-L-XL, siyah, pamuk' },
  { id: 'hoodie-01', category: 'hoodie', title: 'Ren Hoodie', price: 599, symbol: '蓮', desc: 'S-M-L-XL, siyah, kapüşonlu' },
  { id: 'figure-01', category: 'figure', title: 'Bahçıvan Figür', price: 899, symbol: '庭', desc: 'PVC, 15cm, özel taban' },
  { id: 'book-01', category: 'book', title: 'Cilt 1 — Fiziksel Kitap', price: 199, symbol: '闇', desc: 'A5, 250 sayfa, renkli' },
  { id: 'jewelry-01', category: 'jewelry', title: 'Altın Çiçek Kolye', price: 449, symbol: '金', desc: 'Gümüş kaplama, 40cm zincir' },
  { id: 'mug-01', category: 'mug', title: 'KAGERŌ Kupa', price: 179, symbol: '陽', desc: 'Seramik, 330ml, siyah' },
  { id: 'sticker-01', category: 'sticker', title: 'Karakter Çıkartma Seti', price: 89, symbol: '✦', desc: '10 adet, su geçirmez' },
  { id: 'notebook-01', category: 'book', title: 'KAGERŌ Defter', price: 129, symbol: '書', desc: 'A5, 200 sayfa, çizgili' }
];

class KageroCart {
  constructor() {
    this.items = this._load();
    this._init();
  }

  _load() {
    try {
      const data = localStorage.getItem('kagero_cart');
      return data ? JSON.parse(data) : [];
    } catch (e) {
      return [];
    }
  }

  _save() {
    try {
      localStorage.setItem('kagero_cart', JSON.stringify(this.items));
    } catch (e) {}
  }

  _init() {
    document.addEventListener('DOMContentLoaded', () => {
      this._injectCartButton();
      this._updateCartBadge();
      this._bindProductButtons();
      this._renderCartModal();
    });
  }

  add(productId) {
    const product = SHOP_PRODUCTS.find(p => p.id === productId);
    if (!product) return;

    const existing = this.items.find(i => i.id === productId);
    if (existing) {
      existing.qty += 1;
    } else {
      this.items.push({ ...product, qty: 1 });
    }
    this._save();
    this._updateCartBadge();
    this._renderCartModal();
    this._showNotification(`${product.title} sepete eklendi`);
  }

  remove(productId) {
    this.items = this.items.filter(i => i.id !== productId);
    this._save();
    this._updateCartBadge();
    this._renderCartModal();
  }

  updateQty(productId, delta) {
    const item = this.items.find(i => i.id === productId);
    if (!item) return;
    item.qty += delta;
    if (item.qty <= 0) {
      this.remove(productId);
      return;
    }
    this._save();
    this._updateCartBadge();
    this._renderCartModal();
  }

  getTotal() {
    return this.items.reduce((sum, i) => sum + (i.price * i.qty), 0);
  }

  getCount() {
    return this.items.reduce((sum, i) => sum + i.qty, 0);
  }

  _injectCartButton() {
    const navbar = document.querySelector('.navbar');
    if (!navbar || document.getElementById('cartToggle')) return;

    const cartBtn = document.createElement('button');
    cartBtn.id = 'cartToggle';
    cartBtn.className = 'cart-toggle';
    cartBtn.setAttribute('aria-label', 'Sepet');
    cartBtn.innerHTML = `
      <span class="cart-icon">🛒</span>
      <span class="cart-badge" id="cartBadge">0</span>
    `;
    cartBtn.addEventListener('click', () => this._openCart());

    const menuToggle = navbar.querySelector('.menu-toggle');
    if (menuToggle) navbar.insertBefore(cartBtn, menuToggle);
    else navbar.appendChild(cartBtn);
  }

  _updateCartBadge() {
    const badge = document.getElementById('cartBadge');
    if (badge) {
      const count = this.getCount();
      badge.textContent = count;
      badge.style.display = count > 0 ? 'flex' : 'none';
    }
  }

  _bindProductButtons() {
    document.querySelectorAll('[data-product-id]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const id = btn.dataset.productId;
        this.add(id);
      });
    });
  }

  _showNotification(message) {
    const notif = document.createElement('div');
    notif.className = 'cart-notification';
    notif.innerHTML = `✓ ${message}`;
    document.body.appendChild(notif);
    setTimeout(() => notif.classList.add('show'), 10);
    setTimeout(() => {
      notif.classList.remove('show');
      setTimeout(() => notif.remove(), 300);
    }, 2500);
  }

  _renderCartModal() {
    let modal = document.getElementById('cartModal');
    if (!modal) {
      modal = document.createElement('div');
      modal.id = 'cartModal';
      modal.className = 'cart-modal';
      document.body.appendChild(modal);
    }

    if (this.items.length === 0) {
      modal.innerHTML = `
        <div class="cart-modal-backdrop" onclick="window.kageroCart.close()"></div>
        <div class="cart-modal-content">
          <div class="cart-header">
            <h2>🛒 Sepetin</h2>
            <button class="cart-close" onclick="window.kageroCart.close()">✕</button>
          </div>
          <div class="cart-empty">
            <p>Sepetin boş.</p>
            <a href="shop.html" class="btn btn-primary" onclick="window.kageroCart.close()">Mağazaya Dön</a>
          </div>
        </div>
      `;
      return;
    }

    const itemsHtml = this.items.map(item => `
      <div class="cart-item">
        <div class="cart-item-symbol">${item.symbol}</div>
        <div class="cart-item-info">
          <div class="cart-item-title">${item.title}</div>
          <div class="cart-item-price">₺${item.price}</div>
        </div>
        <div class="cart-item-qty">
          <button onclick="window.kageroCart.updateQty('${item.id}', -1)">−</button>
          <span>${item.qty}</span>
          <button onclick="window.kageroCart.updateQty('${item.id}', 1)">+</button>
        </div>
        <button class="cart-item-remove" onclick="window.kageroCart.remove('${item.id}')">🗑</button>
      </div>
    `).join('');

    modal.innerHTML = `
      <div class="cart-modal-backdrop" onclick="window.kageroCart.close()"></div>
      <div class="cart-modal-content">
        <div class="cart-header">
          <h2>🛒 Sepetin (${this.getCount()})</h2>
          <button class="cart-close" onclick="window.kageroCart.close()">✕</button>
        </div>
        <div class="cart-items">${itemsHtml}</div>
        <div class="cart-footer">
          <div class="cart-total">
            <span>Toplam</span>
            <strong>₺${this.getTotal()}</strong>
          </div>
          <button class="btn btn-primary cart-checkout" onclick="window.kageroCart.checkout()">
            Ödemeye Geç
          </button>
        </div>
      </div>
    `;
  }

  _openCart() {
    this._renderCartModal();
    const modal = document.getElementById('cartModal');
    if (modal) modal.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  close() {
    const modal = document.getElementById('cartModal');
    if (modal) modal.classList.remove('open');
    document.body.style.overflow = '';
  }

  checkout() {
    alert(`Demo: ${this.getTotal()}₺ tutarında sipariş oluşturuldu!\nGerçek ödeme sistemi yakında eklenecek.`);
    this.items = [];
    this._save();
    this._updateCartBadge();
    this._renderCartModal();
    this.close();
  }
}

window.kageroCart = new KageroCart();