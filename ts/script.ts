/* =====================================================
   Atta Pharmacy & Sons Co. Ltd - Gallery Website
   TypeScript source. Compiles to js/script.js via `tsc`.
   ===================================================== */

interface GalleryPost {
  id: number;
  title: string;
  category: Category;
  emoji: string;
  gradient: string;
  height: number;
  description: string;
  likes: number;
  comments: number;
}

interface Product {
  emoji: string;
  title: string;
  desc: string;
  tag: string;
}

interface WhyItem {
  icon: string;
  title: string;
  desc: string;
}

type Category = 'Medicines' | 'Baby Care' | 'Cosmetics' | 'Beverages' | 'Delivery';

const GRADIENTS: string[] = [
  'linear-gradient(135deg, #0e9f6e, #065f46)',
  'linear-gradient(135deg, #f59e0b, #d97706)',
  'linear-gradient(135deg, #38bdf8, #2563eb)',
  'linear-gradient(135deg, #f472b6, #db2777)',
  'linear-gradient(135deg, #a78bfa, #7c3aed)',
  'linear-gradient(135deg, #34d399, #0e9f6e)',
  'linear-gradient(135deg, #fb923c, #ea580c)',
  'linear-gradient(135deg, #22d3ee, #0891b2)',
];

const PRODUCTS: Product[] = [
  { emoji: '💊', title: 'Prescription Medicines', desc: 'Genuine prescription & non-prescription medicines with quality assurance.', tag: 'Genuine' },
  { emoji: '🧴', title: 'Cosmetics & Personal Care', desc: 'Cosmetic and personal care items from trusted brands.', tag: 'Personal Care' },
  { emoji: '🥤', title: 'Beverages & Essentials', desc: 'Beverage and daily essential products for your home.', tag: 'Daily Essentials' },
  { emoji: '👶', title: 'Bona Papa Pampers', desc: 'Bona Papa Pampers & baby wipes — soft, safe and absorbent.', tag: 'Baby Care' },
  { emoji: '✨', title: 'Leo Pampers', desc: 'Premium Leo Pampers for total comfort and protection.', tag: 'Baby Care' },
  { emoji: '🍼', title: 'Baby Care Essentials', desc: 'Complete baby care range including wipes, lotion and more.', tag: 'Baby Care' },
  { emoji: '🧺', title: 'General Healthcare', desc: 'General healthcare products at wholesale prices.', tag: 'Healthcare' },
  { emoji: '🚚', title: 'Wholesale & Bulk Orders', desc: 'Special offers for retailers and customers with bulk discounts.', tag: 'Wholesale' },
];

const WHY_ITEMS: WhyItem[] = [
  { icon: '✔', title: '100% Genuine & Fresh', desc: 'Every product is genuine, fresh and quality checked.' },
  { icon: '✔', title: 'Wholesale Prices', desc: 'Bulk order discounts and best market rates.' },
  { icon: '✔', title: 'Special Offers', desc: 'Exclusive deals for retailers and customers.' },
  { icon: '✔', title: 'Fast Delivery', desc: 'Fast & reliable home delivery across Karachi.' },
  { icon: '✔', title: 'Friendly Service', desc: 'Friendly and professional customer service.' },
];

const CATEGORIES: Category[] = ['Medicines', 'Baby Care', 'Cosmetics', 'Beverages', 'Delivery'];

const POSTS: GalleryPost[] = [
  {
    id: 1,
    title: 'Bona Papa Pampers Stock',
    category: 'Baby Care',
    emoji: '👶',
    gradient: GRADIENTS[0],
    height: 330,
    description: 'Fresh stock of Bona Papa Pampers & baby wipes, ready for delivery across Karachi.',
    likes: 124,
    comments: 18,
  },
  {
    id: 2,
    title: 'Fresh Medicine Shipment',
    category: 'Medicines',
    emoji: '💊',
    gradient: GRADIENTS[2],
    height: 240,
    description: 'A fresh shipment of genuine prescription medicines with full quality assurance.',
    likes: 96,
    comments: 11,
  },
  {
    id: 3,
    title: 'Cosmetic Care Collection',
    category: 'Cosmetics',
    emoji: '💄',
    gradient: GRADIENTS[3],
    height: 300,
    description: 'Premium cosmetics and personal care items from trusted brands at wholesale rates.',
    likes: 201,
    comments: 27,
  },
  {
    id: 4,
    title: 'Beverage Essentials',
    category: 'Beverages',
    emoji: '🥤',
    gradient: GRADIENTS[1],
    height: 220,
    description: 'Beverage and daily essentials now available at extra percentage savings.',
    likes: 78,
    comments: 9,
  },
  {
    id: 5,
    title: 'Home Delivery Across Karachi',
    category: 'Delivery',
    emoji: '🚚',
    gradient: GRADIENTS[4],
    height: 350,
    description: 'Fast and reliable home delivery across all areas of Karachi, Pakistan.',
    likes: 315,
    comments: 42,
  },
  {
    id: 6,
    title: 'Leo Pampers Comfort',
    category: 'Baby Care',
    emoji: '✨',
    gradient: GRADIENTS[5],
    height: 260,
    description: 'Leo Pampers — premium comfort and all-day protection for your little one.',
    likes: 154,
    comments: 21,
  },
  {
    id: 7,
    title: 'Pharmacy Shelves Restock',
    category: 'Medicines',
    emoji: '🏪',
    gradient: GRADIENTS[6],
    height: 290,
    description: 'Our shelves are fully restocked with fresh, quality-checked healthcare products.',
    likes: 88,
    comments: 7,
  },
  {
    id: 8,
    title: 'Personal Care Essentials',
    category: 'Cosmetics',
    emoji: '🧴',
    gradient: GRADIENTS[7],
    height: 230,
    description: 'From lotions to sanitizers — everyday personal care at the best prices.',
    likes: 67,
    comments: 5,
  },
  {
    id: 9,
    title: 'Juice & Drinks For Home',
    category: 'Beverages',
    emoji: '🧃',
    gradient: GRADIENTS[2],
    height: 270,
    description: 'Healthy beverages and drinks for the whole family, delivered to your door.',
    likes: 112,
    comments: 14,
  },
  {
    id: 10,
    title: 'Baby Wipes Bulk Order',
    category: 'Baby Care',
    emoji: '🧻',
    gradient: GRADIENTS[0],
    height: 250,
    description: 'Bulk orders for baby wipes with special wholesale discounts for retailers.',
    likes: 143,
    comments: 19,
  },
  {
    id: 11,
    title: 'Wholesale Medicine Deals',
    category: 'Medicines',
    emoji: '📦',
    gradient: GRADIENTS[5],
    height: 320,
    description: 'Extra percentage savings on genuine medicines for bulk and wholesale orders.',
    likes: 175,
    comments: 23,
  },
  {
    id: 12,
    title: 'On The Road – Karachi',
    category: 'Delivery',
    emoji: '🛵',
    gradient: GRADIENTS[1],
    height: 240,
    description: 'Our delivery team out on the road, serving customers all over Karachi.',
    likes: 256,
    comments: 31,
  },
];

/* ---------- Helpers ---------- */

function el<K extends keyof HTMLElementTagNameMap>(tag: K, className?: string): HTMLElementTagNameMap[K] {
  const node = document.createElement(tag);
  if (className) node.className = className;
  return node;
}

function setInnerHTML(node: HTMLElement, html: string): void {
  node.innerHTML = html;
}

/* ---------- Render: Products ---------- */

function renderProducts(): void {
  const grid = document.getElementById('productGrid');
  if (!grid) return;
  PRODUCTS.forEach((p) => {
    const card = el('div', 'product-card');
    card.innerHTML = `
      <div class="product-ico">${p.emoji}</div>
      <h3>${p.title}</h3>
      <p>${p.desc}</p>
      <span class="tag">${p.tag}</span>
    `;
    grid.appendChild(card);
  });
}

/* ---------- Render: Why Us ---------- */

function renderWhy(): void {
  const grid = document.getElementById('whyGrid');
  if (!grid) return;
  WHY_ITEMS.forEach((w) => {
    const item = el('div', 'why-item');
    item.innerHTML = `
      <span class="why-check">${w.icon}</span>
      <div><strong>${w.title}</strong><span>${w.desc}</span></div>
    `;
    grid.appendChild(item);
  });
}

/* ---------- Render: Gallery Masonry ---------- */

function createCard(post: GalleryPost): HTMLElement {
  const card = el('article', 'gcard');
  card.dataset.category = post.category;
  card.dataset.id = String(post.id);
  card.style.background = post.gradient;
  card.innerHTML = `
    <div class="gcard-media" style="background:${post.gradient};min-height:${post.height}px;">
      <span class="gcard-badge">${post.category}</span>
      <span class="gcard-emoji" aria-hidden="true">${post.emoji}</span>
    </div>
    <div class="gcard-body">
      <h3>${post.title}</h3>
      <p>${post.description}</p>
      <div class="gcard-meta">
        <span>❤ ${post.likes}</span>
        <span>💬 ${post.comments}</span>
      </div>
    </div>
  `;
  card.addEventListener('click', () => openLightbox(post));
  return card;
}

function renderGallery(posts: GalleryPost[]): void {
  const grid = document.getElementById('galleryGrid');
  if (!grid) return;
  grid.innerHTML = '';
  posts.forEach((p) => grid.appendChild(createCard(p)));
}

function renderFilters(): void {
  const bar = document.getElementById('filterBar');
  if (!bar) return;
  const allBtn = el('button', 'filter-btn active');
  allBtn.textContent = 'All';
  allBtn.dataset.filter = 'All';
  allBtn.addEventListener('click', () => applyFilter('All'));
  bar.appendChild(allBtn);

  CATEGORIES.forEach((c) => {
    const btn = el('button', 'filter-btn');
    btn.textContent = c;
    btn.dataset.filter = c;
    btn.addEventListener('click', () => applyFilter(c));
    bar.appendChild(btn);
  });
}

let activeFilter: Category | 'All' = 'All';

function applyFilter(filter: Category | 'All'): void {
  activeFilter = filter;
  const buttons = document.querySelectorAll<HTMLButtonElement>('.filter-btn');
  buttons.forEach((b) => b.classList.toggle('active', b.dataset.filter === filter));

  const cards = Array.from(document.querySelectorAll<HTMLElement>('.gcard'));
  cards.forEach((card) => {
    const show = filter === 'All' || card.dataset.category === filter;
    card.classList.toggle('hidden', !show);
  });
}

/* ---------- Lightbox ---------- */

function openLightbox(post: GalleryPost): void {
  const lb = document.getElementById('lightbox');
  if (!lb) return;
  lb.classList.add('open');
  const media = document.getElementById('lbMedia');
  const title = document.getElementById('lbTitle');
  const body = document.getElementById('lbBody');
  if (media) media.style.background = post.gradient;
  if (title) title.textContent = post.title;
  if (body)
    body.innerHTML = `
      <p>${post.description}</p>
      <div class="gcard-meta" style="margin-top:14px;padding-top:12px;border-top:1px solid rgba(18,35,59,0.08);">
        <span>🏷 ${post.category}</span>
        <span>❤ ${post.likes} likes</span>
        <span>💬 ${post.comments} comments</span>
      </div>
    `;
  setInnerHTML(media!, post.emoji);
}

function closeLightbox(): void {
  const lb = document.getElementById('lightbox');
  if (lb) lb.classList.remove('open');
}

/* ---------- Navbar & misc ---------- */

function initNavbar(): void {
  const toggle = document.getElementById('navToggle');
  const links = document.getElementById('navLinks');
  toggle?.addEventListener('click', () => links?.classList.toggle('open'));
  document.querySelectorAll('.nav-links a').forEach((a) =>
    a.addEventListener('click', () => links?.classList.remove('open'))
  );
  window.addEventListener('scroll', () => {
    document.getElementById('navbar')?.classList.toggle('scrolled', window.scrollY > 10);
  });
}

function highlightActiveLink(): void {
  const sections = document.querySelectorAll<HTMLElement>('section[id]');
  const links = document.querySelectorAll<HTMLAnchorElement>('.nav-links a');
  const onScroll = (): void => {
    let current = '';
    sections.forEach((s) => {
      if (window.scrollY >= s.offsetTop - 120) current = s.id;
    });
    links.forEach((l) => l.classList.toggle('active', l.getAttribute('href') === `#${current}`));
  };
  window.addEventListener('scroll', onScroll);
  onScroll();
}

function initForm(): void {
  const form = document.getElementById('contactForm');
  form?.addEventListener('submit', (e) => {
    e.preventDefault();
    const note = document.getElementById('formNote');
    if (note) {
      note.hidden = false;
      setTimeout(() => {
        note.hidden = true;
        (form as HTMLFormElement).reset();
      }, 3500);
    }
  });
}

function initLightboxClose(): void {
  const lb = document.getElementById('lightbox');
  lb?.addEventListener('click', (e) => {
    if ((e.target as HTMLElement).id === 'lightbox' || (e.target as HTMLElement).classList.contains('lightbox-close')) {
      closeLightbox();
    }
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeLightbox();
  });
}

/* ---------- Boot ---------- */

document.addEventListener('DOMContentLoaded', () => {
  renderProducts();
  renderWhy();
  renderFilters();
  renderGallery(POSTS);
  initNavbar();
  highlightActiveLink();
  initForm();
  initLightboxClose();
  const year = document.getElementById('year');
  if (year) year.textContent = String(new Date().getFullYear());
});