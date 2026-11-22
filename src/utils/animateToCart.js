export const animateToCart = (imageEl, cartEl) => {
  if (!imageEl || !cartEl) return;

  const imageRect = imageEl.getBoundingClientRect();
  const cartRect = cartEl.getBoundingClientRect();

  console.log(cartRect);

  const clone = imageEl.cloneNode(true);

  clone.style.position = "fixed";
  clone.style.left = `${imageRect.left}px`;
  clone.style.top = `${imageRect.top}px`;
  clone.style.width = `${imageRect.width}px`;
  clone.style.height = `${imageRect.height}px`;

  clone.style.transition = "all 700ms cubic-bezier(.4,0,.2,1)";
  clone.style.zIndex = "9999";
  clone.style.pointerEvents = "none";

  document.body.appendChild(clone);

  requestAnimationFrame(() => {
    clone.style.left = `${cartRect.left}px`;
    clone.style.top = `${cartRect.top}px`;
    clone.style.width = `20px`;
    clone.style.height = `20px`;
    clone.style.opacity = "0.5";
    clone.style.borderRadius = "999px";
  });

  clone.addEventListener("transitionend", () => {
    clone.remove();
  });
};
