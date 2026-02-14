const postsContainer = document.getElementById("instagram-posts");

// Replace this array with your actual Instagram post URLs
const instagramPosts = [
  "https://www.instagram.com/reel/DSQekeIAIsf/",
  "https://www.instagram.com/reel/EXAMPLE2/",
  "https://www.instagram.com/reel/EXAMPLE3/"
];

// Function to create a classy card for each post
function createInstagramCard(url) {
  const card = document.createElement("div");
  card.className = "card insta-card";
  
  // Fallback image for mobile
  const img = document.createElement("img");
  img.src = `https://instagram.com/p/${url.split("/").filter(Boolean).pop()}/media/?size=l`;
  img.alt = "Instagram post";
  img.style.cursor = "pointer";
  img.onclick = () => window.open(url, "_blank");
  
  const overlay = document.createElement("div");
  overlay.className = "insta-overlay";
  overlay.innerHTML = `<p>View Post</p>`;
  
  card.appendChild(img);
  card.appendChild(overlay);

  return card;
}

// Render posts with fade-in animation
instagramPosts.forEach((url, index) => {
  const card = createInstagramCard(url);
  card.style.opacity = 0;
  card.style.transform = "translateY(20px)";
  postsContainer.appendChild(card);
  
  // Animate in sequence
  setTimeout(() => {
    card.style.transition = "all 0.6s ease-out";
    card.style.opacity = 1;
    card.style.transform = "translateY(0)";
  }, index * 200);
});

// Add basic styles for overlay and animation
const style = document.createElement("style");
style.innerHTML = `
  .insta-card {
    position: relative;
    overflow: hidden;
    border-radius: 1rem;
  }
  .insta-card img {
    width: 100%;
    height: 250px;
    object-fit: cover;
    display: block;
  }
  .insta-overlay {
    position: absolute;
    bottom:0;
    left:0;
    right:0;
    background: rgba(0,0,0,0.6);
    color:#fff;
    text-align:center;
    padding:0.5rem 0;
    font-weight:bold;
    opacity:0;
    transition: all 0.3s ease-in-out;
    cursor:pointer;
  }
  .insta-card:hover .insta-overlay {
    opacity:1;
  }

  @media(max-width:768px) {
    .grid-3 { grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); }
    .insta-card img { height:200px; }
  }
`;
document.head.appendChild(style);