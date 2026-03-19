// Policies dropdown logic (open on hover)
document.addEventListener('DOMContentLoaded', function() {
  const policiesBtn = document.getElementById('policies-btn');
  const policiesMenu = document.getElementById('policies-menu');
  const dropdown = document.getElementById('policies-dropdown');

  if (policiesBtn && policiesMenu && dropdown) {
    // Show dropdown on mouse enter
    dropdown.addEventListener('mouseenter', function() {
      policiesMenu.style.display = 'block';
    });

    // Hide dropdown on mouse leave
    dropdown.addEventListener('mouseleave', function() {
      policiesMenu.style.display = 'none';
    });
  }
});

function showCartModal() {
  const panel = document.getElementById('cart-side-panel');
  if (!panel) return;
  panel.classList.add('open');

  // Reload the iframe each time cart opens (if present)
  const iframe = document.getElementById('cart-iframe');
  if (iframe && iframe.contentWindow) {
    iframe.contentWindow.location.reload();
  }
}
function closeCartPanel() {
  const panel = document.getElementById('cart-side-panel');
  if (!panel) return;
  panel.classList.remove('open');
}

const cartLink = document.getElementById('cart-link');
if (cartLink) {
  cartLink.addEventListener('click', function(e) {
    e.preventDefault();
    showCartModal();
  });
}

// Make sure these are at the top
const searchInput = document.getElementById('product-search');
const searchResults = document.getElementById('search-results');

// Show/Hide All Products functionality
document.addEventListener('DOMContentLoaded', function() {
  const showAllProductsBtn = document.getElementById('show-all-products');
  const allProductsSection = document.getElementById('all-products-section');
  
  if (showAllProductsBtn && allProductsSection) {
    showAllProductsBtn.addEventListener('click', function() {
      if (allProductsSection.style.display === 'none') {
        allProductsSection.style.display = 'block';
        showAllProductsBtn.textContent = 'Show Less Products';
      } else {
        allProductsSection.style.display = 'none';
        showAllProductsBtn.textContent = 'View All Products';
      }
    });
  }
});

// Keep paths relative to site root (works from any page)
const products = [
  {
    img: "https://lh3.googleusercontent.com/pw/AP1GczO3DaQD0Sx9rAodZtPTSmPUpRNlVx9aeubHSgKcht6UEPl3mbF93TE1N_BlPbRZ_LZ4s1h894-aUhZo6g0NKE7tW3BD9jDbupnpghQqSmu2jpf9vLzFuCsSkLytePWZkVEW2cWKh7QSW0WX2y4oYygS=w1484-h989-s-no-gm?authuser=0",
    title: "ChatGPT Private Account",
    price: 600,
    desc: "1 Month Private Account on your Gmail.",
    category: "AI",
    path: "product/chatgpt-private.html"
  },
  { img: "https://lh3.googleusercontent.com/pw/AP1GczMn_UnjxwTdVa09Lnexq_P1iV_CvgEWdrZkpz35mPJOF04DWZb4Qqpv9fkUwUnw-agvlOu-Ct-6K7JkrZYndX5m90f1nspqYQPbFbpN_M1PKZ5SJj9uo3gDGiQ5TjHO04b9LBqZOiA5POEwGotOdxEj=w1758-h989-s-no-gm?authuser=0", title: "ChatGPT Plus Shared Account", price: 150, desc: "1 Month Shared Account.", category: "AI", path: "product/chatgpt.html" },
  { img: "https://lh3.googleusercontent.com/pw/AP1GczNYwnLY0lGVnD_vlAOOGJAbkUWqeRiemGQH8wAD3pn1sa5CQhEP-857CBWCvRP9lQxwYCR1P_5pJw3XMC-a2JrFtvoZTNlgjGoMlHuEai5xJdBy5HQ7zuPSyFnDJ5fV4mDmPOFEjWQPRd9LjV59Zoq7=w866-h650-s-no-gm?authuser=0", title: "Prime Video Subscription", price: 50, desc: "6 Months Shared Account.", category: "OTT", path: "product/prime-video.html" },
  { img: "https://lh3.googleusercontent.com/pw/AP1GczMq2gNWc8gfyfsBsbDU1S0wyUM77qHVHgac5-cD2s_o-U14dC0GROGFJTFLL7Uy8I9rsYOpDgGmCNAjiE-QjoPAKWg0KKeSbshWU7AAupRqT1f9gYq0nbfSanvn3nZSKV9JNwpKcsfqBSmtdNg6cyGZ=w940-h529-s-no-gm?authuser=0", title: "Netflix Premium Subscription", price: 150, desc: "1 Month Shared Account.", category: "OTT", pricingOptions: { "1 Month": { price: 150, originalPrice: 649 } }, path: "product/netflix.html" },
  { img: "https://lh3.googleusercontent.com/pw/AP1GczP64FXRocFyMPILMhm9UssjXSsv1C8PwJc0QTuEGGK5uxm7CCOOj2CDEAtZQDkloEsPeVwSL6y4SYZUY_W0MMr9tWsP6po1xlOwRaVW3rwEo-Wywviidh7tG0ZiQPCw3xcVAKo354d0RCPTSQcPZsPH=w686-h386-s-no-gm?authuser=0", title: "JioHotstar Premium Subscription", price: 100, desc: "1 Month Shared Account.", category: "OTT", pricingOptions: { "1 Month": { price: 100, originalPrice: 299 } }, path: "product/jio-hotstar.html" },
  { img: "https://lh3.googleusercontent.com/pw/AP1GczNjijC-m1KOjJvo-gcAT-6qAIUtcn2XSwOmg8to--vcl2DWwjkuIVS_7WixM-bGy_D9irYqQjHsoYTLirRmOCM7gtWD_nkH11siNpbp1z2AZS5HoIO5Zz1GT2YIGZM4QwJ9LlkjQqtv0fdPeSjAxOTY=w1200-h674-s-no-gm?authuser=0", title: "Canva Pro Subscription", price: 250, desc: "1 Year Premium Access.", category: "EDITING", pricingOptions: { "1 Year": { price: 250, originalPrice: 4000 } }, path: "product/canva.html" },
  { img: "https://upload.wikimedia.org/wikipedia/commons/2/2a/SonyLIV_2020_logo.svg", title: "Sony Liv Premium Subscription", price: 70, desc: "1 Month Shared Account.", category: "OTT", pricingOptions: { "1 Month": { price: 70, originalPrice: 299 } }, path: "product/sonyliv.html" },
  { img: "https://lh3.googleusercontent.com/pw/AP1GczOgq1TVQFWUrx6u3L018vlqjdxA59mrTUh7NyUEiIPUcqi0qrCHSQXhFwJtXcPIF2cKmMPVoK2-gbl7F9iNN-r6CXHAmQ1iFV1hqyZNCwqtvKYnn_F5Pl60GKydTY7kQIPJ4i_GtQCq1e1moQwYja2I=w960-h540-s-no-gm?authuser=0", title: "Zee5 Premium Subscription", price: 80, desc: "1 Month Premium Account.", category: "OTT", pricingOptions: { "1 Month": { price: 80, originalPrice: 320 } }, path: "product/zee5.html" }
];

// Search Functions
function handleSearch() {
  const query = searchInput.value.trim().toLowerCase();
  searchResults.innerHTML = '';

  if (!query) {
    searchResults.style.display = 'none';
    return;
  }

  const matches = products.filter(p => p.title.toLowerCase().includes(query));
  if (matches.length > 0) {
    searchResults.style.display = 'block';
    searchResults.innerHTML = matches.map(p => `
      <div class="search-result-item" data-product-title="${p.title}" style="display:flex;align-items:center;gap:0.7em;padding:0.5em 1em;cursor:pointer;border-bottom:1px solid #333;">
        <img src="${p.img}" alt="" style="width:36px;height:36px;object-fit:cover;border-radius:0.5em;">
        <div>
          <div class="product-title" style="font-weight:bold;">${p.title}</div>
          <div class="product-price" style="color:#ff6600;">₹${p.price}</div>
        </div>
      </div>
    `).join('');
  } else {
    searchResults.style.display = 'block';
    searchResults.innerHTML = '<div class="no-results">No products found.</div>';
  }
}

searchInput.addEventListener('input', handleSearch);

document.addEventListener('DOMContentLoaded', function() {
  const mobileSearchBtn = document.getElementById('mobile-search-btn');
  const mobileSearchOverlay = document.getElementById('mobile-search-overlay');
  const closeMobileSearch = document.getElementById('close-mobile-search');
  const mobileSearchInput = document.getElementById('mobile-search-input');
  const mobileSearchResults = document.getElementById('mobile-search-results');

  if (mobileSearchBtn && mobileSearchOverlay && closeMobileSearch && mobileSearchInput && mobileSearchResults) {
    // Open overlay
    mobileSearchBtn.addEventListener('click', function() {
      mobileSearchOverlay.style.display = 'flex';
      mobileSearchInput.value = '';
      mobileSearchResults.innerHTML = '';
      setTimeout(() => mobileSearchInput.focus(), 100);
    });
    // Close overlay
    closeMobileSearch.addEventListener('click', function() {
      mobileSearchOverlay.style.display = 'none';
    });
    // Close overlay when clicking outside input/results
    mobileSearchOverlay.addEventListener('click', function(e) {
      if (e.target === mobileSearchOverlay) {
        mobileSearchOverlay.style.display = 'none';
      }
    });
    // Search logic
    mobileSearchInput.addEventListener('input', function() {
      const query = this.value.trim().toLowerCase();
      mobileSearchResults.innerHTML = '';
      if (!query) return;
      const matches = products.filter(p => p.title.toLowerCase().includes(query));
      if (matches.length > 0) {
        mobileSearchResults.innerHTML = matches.map(p => `
          <div class="search-result-item" data-product-title="${p.title}" style="display:flex;align-items:center;gap:0.7em;padding:0.5em 1em;cursor:pointer;border-bottom:1px solid #333;">
            <img src="${p.img}" alt="" style="width:36px;height:36px;object-fit:cover;border-radius:0.5em;">
            <div>
              <div class="product-title" style="font-weight:bold;">${p.title}</div>
              <div class="product-price" style="color:#ff6600;">₹${p.price}</div>
            </div>
          </div>
        `).join('');
      } else {
        mobileSearchResults.innerHTML = `<div style="padding:1em; color:#b0b0c3;">No products found.</div>`;
      }
    });
    // Click on result
    mobileSearchResults.addEventListener('click', function(e) {
      const item = e.target.closest('.search-result-item');
      if (item) {
        const productTitle = item.dataset.productTitle;
        if (productTitle) {
          const product = products.find(p => p.title === productTitle);
          if (product && product.file) {
            window.location.href = `/${product.path}`;
          } else {
            alert("Product page not found!");
          }
        }
      }
    });
  }
});

document.addEventListener('DOMContentLoaded', function() {
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
    // Optional: close drawer when clicking outside
    window.addEventListener('click', function(e) {
      if (mobileDrawer.classList.contains('open') && !mobileDrawer.contains(e.target) && e.target !== hamburgerBtn) {
        mobileDrawer.classList.remove('open');
      }
    });
  }
});

const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', function() {
  if (window.scrollY > 10) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

document.addEventListener("DOMContentLoaded", function() {
  document.querySelectorAll('.counter-number').forEach(counter => {
    const animate = () => {
      const target = +counter.getAttribute('data-target');
      const count = +counter.innerText;
      const increment = Math.max(1, Math.floor(target / 100));
      if (count < target) {
        counter.innerText = count + increment;
        setTimeout(animate, 20);
      } else {
        counter.innerText = target;
      }
    };
    animate();
  });
});

// FAQ toggle logic
document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.faq-item').forEach(function(item) {
    item.querySelector('.faq-question').addEventListener('click', function() {
      item.classList.toggle('open');
    });
  });
});

// Theme switching functionality
document.addEventListener('DOMContentLoaded', function() {
  const themeToggle = document.getElementById('theme-toggle');
  const themeIcon = document.querySelector('.theme-icon');
  
  // Check for saved theme preference or default to dark
  const currentTheme = localStorage.getItem('theme') || 'dark';
  updateTheme(currentTheme);
  
  function updateThemeIcon(theme) {
    const icon = theme === 'light' ? '☀️' : '🌙';
    if (themeIcon) themeIcon.textContent = icon;
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
  
  // Add event listeners
  if (themeToggle) {
    themeToggle.addEventListener('click', toggleTheme);
  }
  
  // Check for system preference on first visit
  if (!localStorage.getItem('theme')) {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const defaultTheme = prefersDark ? 'dark' : 'light';
    localStorage.setItem('theme', defaultTheme);
    updateTheme(defaultTheme);
  }
});
// ...existing code...
// document.body.classList.remove('dark'); // Ensure dark mode is off by default
// ...existing code...

// Mapping from product title to filename for static product pages
const productTitleToPath = Object.fromEntries(products.map((p) => [p.title, p.path]));

// Add click handler for desktop search results
if (searchResults) {
  searchResults.addEventListener('click', function(e) {
    const item = e.target.closest('.search-result-item');
    if (item) {
      const productTitle = item.dataset.productTitle;
      const path = productTitle ? productTitleToPath[productTitle] : null;
      if (path) {
        window.location.href = `/${path}`;
      }
    }
  });
}

// Update mobile search click handler as well
// (Find and replace the window.location.href assignment in the mobile handler)
document.addEventListener('DOMContentLoaded', function() {
  const mobileSearchResults = document.getElementById('mobile-search-results');
  if (mobileSearchResults) {
    mobileSearchResults.addEventListener('click', function(e) {
      const item = e.target.closest('.search-result-item');
      if (item) {
        const productTitle = item.dataset.productTitle;
        const path = productTitle ? productTitleToPath[productTitle] : null;
        if (path) {
          window.location.href = `/${path}`;
        }
      }
    });
  }
});
