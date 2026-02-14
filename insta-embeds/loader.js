// insta-embeds/loader.js

document.addEventListener("DOMContentLoaded", () => {
  const postsContainer = document.getElementById("instagram-posts");

  // Add your Instagram embed URLs here
  const instaPosts = [
    "https://www.instagram.com/reel/DSQekeIAIsf/?utm_source=ig_embed&utm_campaign=loading",
    // You can add more posts as needed
  ];

  instaPosts.forEach((url, index) => {
    const card = document.createElement("div");
    card.className = "ig-card fade-in";
    card.style.animationDelay = `${0.2 + index * 0.2}s`;

    const iframe = document.createElement("iframe");
    iframe.src = `${url}embed`;
    iframe.style.width = "100%";
    iframe.style.height = "400px";
    iframe.style.border = "0";
    iframe.style.borderRadius = "1rem";
    iframe.allow = "autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share";
    iframe.allowFullscreen = true;

    const overlay = document.createElement("div");
    overlay.className = "overlay";
    overlay.innerHTML = `<span>View on Instagram</span>`;

    card.appendChild(iframe);
    card.appendChild(overlay);
    postsContainer.appendChild(card);
  });
});
