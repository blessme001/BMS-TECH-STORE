document.addEventListener("DOMContentLoaded", function () {

  const postsContainer = document.getElementById("instagram-posts");

  // STOP if container not found (prevents crash)
  if (!postsContainer) {
    console.warn("instagram-posts container not found");
    return;
  }

  // Use ONLY ONE reel for now
  const instagramPosts = [
    "https://www.instagram.com/reel/DSQekeIAIsf/"
  ];

  function createInstagramCard(url) {
    const card = document.createElement("div");
    card.className = "insta-card";

    const img = document.createElement("img");

    // Extract reel ID safely
    const parts = url.split("/").filter(Boolean);
    const reelId = parts[parts.length - 1];

    img.src = `https://www.instagram.com/p/${reelId}/media/?size=l`;
    img.alt = "Instagram post";
    img.style.cursor = "pointer";
    img.onclick = () => window.open(url, "_blank");

    const overlay = document.createElement("div");
    overlay.className = "insta-overlay";
    overlay.innerHTML = `<p>View Post</p>`;
    overlay.onclick = () => window.open(url, "_blank");

    card.appendChild(img);
    card.appendChild(overlay);

    return card;
  }

  instagramPosts.forEach((url) => {
    const card = createInstagramCard(url);
    postsContainer.appendChild(card);
  });

});
