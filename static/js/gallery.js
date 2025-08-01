function openLightbox(image, title, date, location, comment) {
  document.getElementById('lightbox').style.display = 'flex';
  document.getElementById('lightbox-img').src = '/images/gallery-photos/' + image;
  document.getElementById('lightbox-title').innerText = title;
  document.getElementById('lightbox-date').innerText = date;
  document.getElementById('lightbox-comment').innerText = comment;
  document.getElementById('lightbox-location').innerText = location;
}

function closeLightbox() {
  document.getElementById('lightbox').style.display = 'none';
}
