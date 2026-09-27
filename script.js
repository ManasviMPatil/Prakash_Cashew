// ============ STICKY HEADER SHADOW ============
const header = document.getElementById('siteHeader');
window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 10);
});

// ============ MOBILE HAMBURGER MENU ============
const hamburger = document.getElementById('hamburger');
const mainNav = document.getElementById('mainNav');
hamburger.addEventListener('click', () => {
  const isOpen = mainNav.classList.toggle('open');
  hamburger.classList.toggle('open', isOpen);
  hamburger.setAttribute('aria-expanded', isOpen);
});
mainNav.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    mainNav.classList.remove('open');
    hamburger.classList.remove('open');
  });
});

// ============ SCROLL REVEAL (IntersectionObserver) ============
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });
document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

// ============ ANIMATED COUNTERS ============
const counters = document.querySelectorAll('.stat-num');
const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    const el = entry.target;
    const target = parseInt(el.dataset.count, 10);
    const duration = 1200;
    const start = performance.now();
    function tick(now) {
      const progress = Math.min((now - start) / duration, 1);
      el.textContent = Math.floor(progress * target);
      if (progress < 1) requestAnimationFrame(tick);
      else el.textContent = target;
    }
    requestAnimationFrame(tick);
    counterObserver.unobserve(el);
  });
}, { threshold: 0.5 });
counters.forEach(el => counterObserver.observe(el));

// ============ GALLERY LIGHTBOX ============
const galleryGrid = document.getElementById('galleryGrid');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightboxImg');
const lightboxClose = document.getElementById('lightboxClose');

galleryGrid.querySelectorAll('img').forEach(img => {
  img.addEventListener('click', () => {
    lightboxImg.src = img.src;
    lightboxImg.alt = img.alt;
    lightbox.classList.add('open');
  });
});
function closeLightbox() { lightbox.classList.remove('open'); lightboxImg.src = ''; }
lightboxClose.addEventListener('click', closeLightbox);
lightbox.addEventListener('click', (e) => { if (e.target === lightbox) closeLightbox(); });
document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeLightbox(); });


// ============ ENQUIRY FORM ============

const enquiryForm = document.getElementById('enquiryForm');
const formNote = document.getElementById('formNote');

enquiryForm.addEventListener('submit', (e) => {

  e.preventDefault();

  // Get form values
  const name = document.getElementById('name')?.value || '';
  const phone = document.getElementById('phone')?.value || '';
  const email = document.getElementById('email')?.value || '';
  const product = document.getElementById('product')?.value || '';
  const quantity = document.getElementById('quantity')?.value || '';
  const message = document.getElementById('message')?.value || '';

  // Date and time
  const date = new Date().toLocaleString('en-IN');

  // Convert value to CSV-safe format
  function csvValue(value) {
    return `"${String(value).replace(/"/g, '""')}"`;
  }

  // Create CSV data
  const csvContent =
    'Date,Name,Phone,Email,Product,Quantity,Message\n' +
    [
      date,
      name,
      phone,
      email,
      product,
      quantity,
      message
    ].map(csvValue).join(',') +
    '\n';

  // Create CSV file
  const blob = new Blob([csvContent], {
    type: 'text/csv;charset=utf-8;'
  });

  // Create download link
  const url = URL.createObjectURL(blob);
  const downloadLink = document.createElement('a');

  downloadLink.href = url;
  downloadLink.download = 'enquiries.csv';

  document.body.appendChild(downloadLink);
  downloadLink.click();
  document.body.removeChild(downloadLink);

  URL.revokeObjectURL(url);

  // Success message
  formNote.textContent =
    'Thank you! Your enquiry has been noted. Our team will contact you shortly.';

  // Clear form
  enquiryForm.reset();

});

