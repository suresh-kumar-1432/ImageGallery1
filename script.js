function openLightbox(img) {
  document.getElementById("lightboxImage").src = img.src;
  let myModal = new bootstrap.Modal(document.getElementById('lightboxModal'));
  myModal.show();
}
