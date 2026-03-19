// Essential JavaScript for Product Pages
// This file contains only the necessary functionality for hardcoded product pages

// Product data for search functionality and more products section
const products = [
  {
    title: "Netflix Premium Subscription",
    img: "https://lh3.googleusercontent.com/pw/AP1GczMq2gNWc8gfyfsBsbDU1S0wyUM77qHVHgac5-cD2s_o-U14dC0GROGFJTFLL7Uy8I9rsYOpDgGmCNAjiE-QjoPAKWg0KKeSbshWU7AAupRqT1f9gYq0nbfSanvn3nZSKV9JNwpKcsfqBSmtdNg6cyGZ=w940-h529-s-no-gm?authuser=0",
    price: 150,
    filename: "netflix.html"
  },
  {
    title: "JioHotstar Premium Subscription",
    img: "https://lh3.googleusercontent.com/pw/AP1GczP64FXRocFyMPILMhm9UssjXSsv1C8PwJc0QTuEGGK5uxm7CCOOj2CDEAtZQDkloEsPeVwSL6y4SYZUY_W0MMr9tWsP6po1xlOwRaVW3rwEo-Wywviidh7tG0ZiQPCw3xcVAKo354d0RCPTSQcPZsPH=w686-h386-s-no-gm?authuser=0",
    price: 100,
    filename: "jio-hotstar.html"
  },
  {
    title: "Prime Video Subscription",
    img: "https://i.pcmag.com/imagery/reviews/02dIsBiVpmVTMeXkrKxWy0W-13..v1582749138.png",
    price: 50,
    filename: "prime-video.html"
  },
  {
    title: "Sony Liv Premium Subscription",
    img: "https://upload.wikimedia.org/wikipedia/commons/2/2a/SonyLIV_2020_logo.svg",
    price: 70,
    filename: "sonyliv.html"
  },
  {
    title: "Zee5 Premium Subscription",
    img: "https://lh3.googleusercontent.com/pw/AP1GczOgq1TVQFWUrx6u3L018vlqjdxA59mrTUh7NyUEiIPUcqi0qrCHSQXhFwJtXcPIF2cKmMPVoK2-gbl7F9iNN-r6CXHAmQ1iFV1hqyZNCwqtvKYnn_F5Pl60GKydTY7kQIPJ4i_GtQCq1e1moQwYja2I=w960-h540-s-no-gm?authuser=0",
    price: 80,
    filename: "zee5.html"
  },
  {
    title: "ChatGPT Plus Shared Account",
    img: "https://lh3.googleusercontent.com/pw/AP1GczMn_UnjxwTdVa09Lnexq_P1iV_CvgEWdrZkpz35mPJOF04DWZb4Qqpv9fkUwUnw-agvlOu-Ct-6K7JkrZYndX5m90f1nspqYQPbFbpN_M1PKZ5SJj9uo3gDGiQ5TjHO04b9LBqZOiA5POEwGotOdxEj=w1758-h989-s-no-gm?authuser=0",
    price: 150,
    filename: "chatgpt.html"
  },
  {
    title: "ChatGPT Private Account",
    img: "https://lh3.googleusercontent.com/pw/AP1GczO3DaQD0Sx9rAodZtPTSmPUpRNlVx9aeubHSgKcht6UEPl3mbF93TE1N_BlPbRZ_LZ4s1h894-aUhZo6g0NKE7tW3BD9jDbupnpghQqSmu2jpf9vLzFuCsSkLytePWZkVEW2cWKh7QSW0WX2y4oYygS=w1484-h989-s-no-gm?authuser=0",
    price: 600,
    filename: "chatgpt-private.html"
  },
  {
    title: "Canva Pro Subscription",
    img: "https://lh3.googleusercontent.com/pw/AP1GczNjijC-m1KOjJvo-gcAT-6qAIUtcn2XSwOmg8to--vcl2DWwjkuIVS_7WixM-bGy_D9irYqQjHsoYTLirRmOCM7gtWD_nkH11siNpbp1z2AZS5HoIO5Zz1GT2YIGZM4QwJ9LlkjQqtv0fdPeSjAxOTY=w1200-h674-s-no-gm?authuser=0",
    price: 250,
    filename: "canva.html"
  },
  {
    title: "Gemini Advanced AI Subscription",
    img: "https://mir-s3-cdn-cf.behance.net/projects/404/45862f197501329.Y3JvcCwyMDAzLDE1NjcsNDAxLDA.png",
    price: 500,
    filename: "gemini.html"
  }
];

// Cart functionality
let cart = JSON.parse(localStorage.getItem('cart') || '[]');

function saveCart() {
  localStorage.setItem('cart', JSON.stringify(cart));
}

function updateCartCount() {
  const count = cart.reduce((sum, item) => sum + item.qty, 0);
  const badge = document.querySelector('.cart-badge');
  if (badge) {
    badge.textContent = count;
    badge.style.display = count > 0 ? 'inline-block' : 'none';
  }
}

// Cart modal functions
function showCartModal() {
  const cartPanel = document.getElementById('cart-side-panel');
  if (cartPanel) {
    cartPanel.classList.add('open');
    // Update cart iframe
    const iframe = document.getElementById('cart-iframe');
    if (iframe && iframe.contentWindow) {
      iframe.contentWindow.postMessage({ type: 'cart-updated', cart: cart }, '*');
    }
  }
}

function closeCartPanel() {
  const cartPanel = document.getElementById('cart-side-panel');
  if (cartPanel) {
    cartPanel.classList.remove('open');
  }
}

// Product gallery functions
function changeMainImg(src) {
  const mainImg = document.getElementById('mainProductImg');
  if (mainImg) {
    mainImg.src = src;
  }
}

// Tab functions
function showTab(tab) {
  // Remove active class from all tab buttons
  document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
  // Hide all tab content
  document.querySelectorAll('.tab-content').forEach(tc => tc.style.display = 'none');
  
  // Show selected tab
  if (tab === 'usage') {
    const usageBtn = document.querySelector('.tab-btn:nth-child(1)');
    const usageTab = document.getElementById('tab-usage');
    if (usageBtn) usageBtn.classList.add('active');
    if (usageTab) usageTab.style.display = 'block';
  } else if (tab === 'faq') {
    const faqBtn = document.querySelector('.tab-btn:nth-child(2)');
    const faqTab = document.getElementById('tab-faq');
    if (faqBtn) faqBtn.classList.add('active');
    if (faqTab) faqTab.style.display = 'block';
  } else if (tab === 'guarantee') {
    const guaranteeBtn = document.querySelector('.tab-btn:nth-child(3)');
    const guaranteeTab = document.getElementById('tab-guarantee');
    if (guaranteeBtn) guaranteeBtn.classList.add('active');
    if (guaranteeTab) guaranteeTab.style.display = 'block';
  }
}

// FAQ toggle function
window.toggleFaq = function(btn) {
  document.querySelectorAll('.faq-item').forEach(item => {
    if (item !== btn.parentElement) {
      item.classList.remove('open');
    }
  });
  btn.parentElement.classList.toggle('open');
};

// Add to cart functionality
function addToCart() {
  const qtyInput = document.getElementById('product-qty');
  const qty = parseInt(qtyInput?.value) || 1;
  
  // Get product info from the page - Handle both h1 and h2
  const productTitle = document.querySelector('.product-info h1')?.textContent?.trim() || 
                      document.querySelector('.product-info h2')?.textContent?.trim() || 'Product';
  const productImg = document.querySelector('.main-img')?.src || '';
  
  // Get selected pricing option
  const selectedOption = document.querySelector('.pricing-option.selected');
  let price = 0;
  let option = null;
  
  if (selectedOption) {
    price = parseInt(selectedOption.dataset.price) || 0;
    option = selectedOption.dataset.option || null;
  }
  
  // Create a display title that includes the option
  const displayTitle = option ? `${productTitle} - ${option}` : productTitle;
  
  // Add to cart - FIXED: Use displayTitle for comparison
  const found = cart.find(item => item.displayTitle === displayTitle);
  
  if (found) {
    found.qty += qty;
  } else {
    cart.push({ 
      title: productTitle, 
      displayTitle: displayTitle, // Add this for display purposes
      img: productImg, 
      price, 
      qty, 
      option 
    });
  }
  
  saveCart();
  updateCartCount();
  showCartModal();
  
  // Show success message
  showToast('Added to cart!');
}

// Buy now functionality
function buyNow() {
  const qtyInput = document.getElementById('product-qty');
  const qty = parseInt(qtyInput?.value) || 1;
  
  // Get product info from the page - Handle both h1 and h2
  const productTitle = document.querySelector('.product-info h1')?.textContent?.trim() || 
                      document.querySelector('.product-info h2')?.textContent?.trim() || 'Product';
  const productImg = document.querySelector('.main-img')?.src || '';
  
  // Get selected pricing option
  const selectedOption = document.querySelector('.pricing-option.selected');
  let price = 0;
  let option = null;
  
  if (selectedOption) {
    price = parseInt(selectedOption.dataset.price) || 0;
    option = selectedOption.dataset.option || null;
  }
  
  // Create a display title that includes the option
  const displayTitle = option ? `${productTitle} - ${option}` : productTitle;
  
  // Create a temporary cart with just this item
  const tempCart = [{ 
    title: productTitle, 
    displayTitle: displayTitle,
    img: productImg, 
    price, 
    qty, 
    option 
  }];
  
  // Store the temp cart in localStorage for the checkout page
  localStorage.setItem('tempCart', JSON.stringify(tempCart));
  
  // Also store the current product info for debugging
  console.log('Storing tempCart:', tempCart);
  
  // Redirect to payment page
  window.location.href = '../payment.html';
}

// Toast notification
function showToast(message) {
  const toast = document.getElementById('toast');
  if (toast) {
    toast.textContent = message;
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 3000);
  }
}

// Dynamic More Products Section
function setupMoreProducts() {
  const moreProductsList = document.getElementById('more-products-list');
  if (!moreProductsList) return;
  
  // Get current page filename to exclude it
  const currentPage = window.location.pathname.split('/').pop();
  
  // Filter out current product and get random 4 products
  const otherProducts = products.filter(product => product.filename !== currentPage);
  const shuffledProducts = otherProducts.sort(() => 0.5 - Math.random());
  const selectedProducts = shuffledProducts.slice(0, 4); // Show max 4 products
  
  // Generate HTML for more products
  const moreProductsHTML = selectedProducts.map(product => `
    <a href="${product.filename}" class="more-product-card">
      <img src="${product.img}" alt="${product.title}">
      <div class="more-product-title">${product.title}</div>
      <div class="more-product-price">₹${product.price}</div>
    </a>
  `).join('');
  
  // Update the more products section
  moreProductsList.innerHTML = moreProductsHTML;
}

// Search functionality
function setupSearch() {
  const searchInput = document.getElementById('product-search');
  const searchResults = document.getElementById('search-results');
  
  if (searchInput && searchResults) {
    searchInput.addEventListener('input', function() {
      const query = this.value.trim().toLowerCase();
      searchResults.innerHTML = '';
      
      if (!query) {
        searchResults.style.display = 'none';
        return;
      }
      
      const matches = products.filter(p => p.title.toLowerCase().includes(query));
      
      if (matches.length > 0) {
        searchResults.style.display = 'block';
        searchResults.innerHTML = matches.map(p => `
          <div class="search-result-item" onclick="window.location.href='${p.filename}'">
            <img src="${p.img}" alt="${p.title}" style="width:36px;height:36px;object-fit:cover;border-radius:0.5em;">
            <div>
              <div class="product-title">${p.title}</div>
              <div class="product-price">₹${p.price}</div>
            </div>
          </div>
        `).join('');
      } else {
        searchResults.style.display = 'block';
        searchResults.innerHTML = '<div style="padding:1em; color:#b0b0c3;">No products found.</div>';
      }
    });
    
    // Close search results when clicking outside
    document.addEventListener('click', function(e) {
      if (!searchInput.contains(e.target) && !searchResults.contains(e.target)) {
        searchResults.style.display = 'none';
      }
    });
  }
}

// Mobile search functionality
function setupMobileSearch() {
  const mobileSearchBtn = document.getElementById('mobile-search-btn');
  const mobileSearchOverlay = document.getElementById('mobile-search-overlay');
  const closeMobileSearch = document.getElementById('close-mobile-search');
  const mobileSearchInput = document.getElementById('mobile-search-input');
  const mobileSearchResults = document.getElementById('mobile-search-results');
  
  if (mobileSearchBtn && mobileSearchOverlay && closeMobileSearch && mobileSearchInput && mobileSearchResults) {
    mobileSearchBtn.addEventListener('click', function() {
      mobileSearchOverlay.classList.add('active');
      mobileSearchInput.value = '';
      mobileSearchResults.innerHTML = '';
      setTimeout(() => mobileSearchInput.focus(), 100);
    });
    
    closeMobileSearch.addEventListener('click', function() {
      mobileSearchOverlay.classList.remove('active');
    });
    
    mobileSearchOverlay.addEventListener('click', function(e) {
      if (e.target === mobileSearchOverlay) {
        mobileSearchOverlay.classList.remove('active');
      }
    });
    
    // Mobile search logic
    mobileSearchInput.addEventListener('input', function() {
      const query = this.value.trim().toLowerCase();
      mobileSearchResults.innerHTML = '';
      
      if (!query) return;
      
      const matches = products.filter(p => p.title.toLowerCase().includes(query));
      
      if (matches.length > 0) {
        mobileSearchResults.innerHTML = matches.map(p => `
          <div class="search-result-item" onclick="window.location.href='${p.filename}'">
            <img src="${p.img}" alt="${p.title}" style="width:36px;height:36px;object-fit:cover;border-radius:0.5em;">
            <div>
              <div class="product-title">${p.title}</div>
              <div class="product-price">₹${p.price}</div>
            </div>
          </div>
        `).join('');
      } else {
        mobileSearchResults.innerHTML = '<div style="padding:1em; color:#b0b0c3;">No products found.</div>';
      }
    });
  }
}

// Quantity controls
function setupQuantityControls() {
  const qtyInput = document.getElementById('product-qty');
  const qtyMinus = document.getElementById('qty-minus');
  const qtyPlus = document.getElementById('qty-plus');
  
  if (qtyInput && qtyMinus && qtyPlus) {
    function updateButtonStates() {
      const value = parseInt(qtyInput.value) || 1;
      qtyMinus.disabled = value <= 1;
      qtyPlus.disabled = value >= 99;
    }
    
    updateButtonStates();
    
    qtyMinus.onclick = function() {
      let val = parseInt(qtyInput.value) || 1;
      if (val > 1) {
        qtyInput.value = val - 1;
        updateButtonStates();
      }
    };
    
    qtyPlus.onclick = function() {
      let val = parseInt(qtyInput.value) || 1;
      if (val < 99) {
        qtyInput.value = val + 1;
        updateButtonStates();
      }
    };
    
    qtyInput.oninput = function() {
      let val = parseInt(this.value) || 1;
      if (val < 1) this.value = 1;
      if (val > 99) this.value = 99;
      updateButtonStates();
    };
  }
}

// Pricing selector functionality
function setupPricingSelector() {
  const pricingOptions = document.querySelectorAll('.pricing-option');
  pricingOptions.forEach(option => {
    option.addEventListener('click', function() {
      pricingOptions.forEach(opt => opt.classList.remove('selected'));
      this.classList.add('selected');
    });
  });
}

// Mobile navigation
function setupMobileNav() {
  const hamburgerBtn = document.getElementById('hamburger-btn');
  const mobileDrawer = document.getElementById('mobile-drawer');
  const closeDrawer = document.getElementById('close-drawer');
  
  if (hamburgerBtn && mobileDrawer && closeDrawer) {
    hamburgerBtn.addEventListener('click', function() {
      mobileDrawer.classList.add('open');
    });
    
    closeDrawer.addEventListener('click', function() {
      mobileDrawer.classList.remove('open');
    });
    
    // Close drawer when clicking outside
    window.addEventListener('click', function(e) {
      if (mobileDrawer.classList.contains('open') && !mobileDrawer.contains(e.target) && e.target !== hamburgerBtn) {
        mobileDrawer.classList.remove('open');
      }
    });
  }
}

// Navbar scroll effect
function setupNavbarScroll() {
  window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (navbar) {
      if (window.scrollY > 10) {
        navbar.classList.add('navbar-blur');
      } else {
        navbar.classList.remove('navbar-blur');
      }
    }
  });
}

// Policies dropdown
function setupPoliciesDropdown() {
  const dropdown = document.getElementById('policies-dropdown');
  const policiesMenu = document.getElementById('policies-menu');
  
  if (dropdown && policiesMenu) {
    dropdown.addEventListener('mouseenter', function() {
      policiesMenu.style.display = 'block';
    });
    
    dropdown.addEventListener('mouseleave', function() {
      policiesMenu.style.display = 'none';
    });
  }
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  // Setup all functionality
  setupSearch();
  setupMobileSearch();
  setupQuantityControls();
  setupPricingSelector();
  setupMobileNav();
  setupNavbarScroll();
  setupPoliciesDropdown();
  setupMoreProducts(); // New function for dynamic more products
  
  // Update cart count
  updateCartCount();
  
  // Setup add to cart button
  const addToCartBtn = document.getElementById('add-to-cart-btn');
  if (addToCartBtn) {
    addToCartBtn.addEventListener('click', addToCart);
  }
  
  // Setup buy now button
  const buyNowBtn = document.getElementById('buy-now-btn');
  if (buyNowBtn) {
    buyNowBtn.addEventListener('click', buyNow);
  }
  
  // Setup cart link
  const cartLink = document.getElementById('cart-link');
  if (cartLink) {
    cartLink.addEventListener('click', function(e) {
      e.preventDefault();
      showCartModal();
    });
  }
  
  // Close hamburger menu when nav links are clicked
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
      const navToggle = document.getElementById('nav-toggle');
      if (navToggle) navToggle.checked = false;
    });
  });
  
  // Listen for cart updates from iframe
  window.addEventListener('message', function(event) {
    if (event.data && event.data.type === 'cart-updated') {
      if (event.data.cart) {
        cart = event.data.cart;
        updateCartCount();
      }
    }
  });
  
  // Theme switching functionality
  const themeToggle = document.getElementById('theme-toggle');
  const mobileThemeToggle = document.getElementById('mobile-theme-toggle');
  const themeIcon = document.querySelector('.theme-icon');
  const mobileThemeIcon = document.querySelector('#mobile-theme-toggle .theme-icon');
  const mobileThemeText = document.querySelector('#mobile-theme-toggle .theme-text');
  
  // Check for saved theme preference or default to dark
  const currentTheme = localStorage.getItem('theme') || 'dark';
  updateTheme(currentTheme);
  
  function updateThemeIcon(theme) {
    const icon = theme === 'light' ? '☀️' : '🌙';
    const text = theme === 'light' ? 'Light Mode' : 'Dark Mode';
    
    if (themeIcon) themeIcon.textContent = icon;
    if (mobileThemeIcon) mobileThemeIcon.textContent = icon;
    if (mobileThemeText) mobileThemeText.textContent = text;
  }
  
  function updateTheme(theme) {
    const body = document.body;
    if (theme === 'light') {
      body.classList.add('light-theme');
    } else {
      body.classList.remove('light-theme');
    }
    updateThemeIcon(theme);
  }
  
  function toggleTheme() {
    const currentTheme = localStorage.getItem('theme') || 'dark';
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    
    localStorage.setItem('theme', newTheme);
    updateTheme(newTheme);
  }
  
  // Add event listeners for theme toggles
  if (themeToggle) {
    themeToggle.addEventListener('click', toggleTheme);
  }
  
  if (mobileThemeToggle) {
    mobileThemeToggle.addEventListener('click', toggleTheme);
  }
  
  // Check for system preference on first visit
  if (!localStorage.getItem('theme')) {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const defaultTheme = prefersDark ? 'dark' : 'light';
    localStorage.setItem('theme', defaultTheme);
    updateTheme(defaultTheme);
  }
});

// Make functions globally available
window.changeMainImg = changeMainImg;
window.showTab = showTab;
window.showCartModal = showCartModal;
window.closeCartPanel = closeCartPanel;
window.addToCart = addToCart;
window.buyNow = buyNow;
      
  // Safely apply dynamic tags only if a global `product` object exists
  if (typeof product !== 'undefined' && product) {
    // Set dynamic title
    document.title = product.title + " | ValueVibe";
    const dynTitle = document.getElementById('dynamic-title');
    if (dynTitle) dynTitle.textContent = product.title + " | ValueVibe";

    // Set dynamic description
    var desc = product.desc || "Get premium subscriptions at unbeatable prices.";
    const dynDesc = document.getElementById('dynamic-desc');
    if (dynDesc) dynDesc.setAttribute('content', desc);

    // Set dynamic Open Graph tags
    const ogTitle = document.getElementById('dynamic-og-title');
    if (ogTitle) ogTitle.setAttribute('content', product.title + " | ValueVibe");
    const ogDesc = document.getElementById('dynamic-og-desc');
    if (ogDesc) ogDesc.setAttribute('content', desc);
    const ogUrl = document.getElementById('dynamic-og-url');
    if (ogUrl) ogUrl.setAttribute('content', window.location.href);
    const ogImage = document.getElementById('dynamic-og-image');
    if (ogImage) ogImage.setAttribute('content', product.img);

    // Set dynamic canonical
    const dynCanonical = document.getElementById('dynamic-canonical');
    if (dynCanonical) dynCanonical.setAttribute('href', window.location.href);
  }
  
