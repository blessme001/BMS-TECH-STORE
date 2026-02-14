// loader.js
document.addEventListener("DOMContentLoaded", function () {
  const instaContainer = document.getElementById("instagram-posts");
  if (!instaContainer) return;

  // Instagram embeds list
  const embeds = [
    `<blockquote class="instagram-media" data-instgrm-permalink="https://www.instagram.com/reel/DSQekeIAIsf/?utm_source=ig_embed" data-instgrm-version="14" style="margin:0 auto; max-width:540px; min-width:326px; width:100%; background:#1c1c1c; border-radius:12px; padding:1rem;">
       <a href="https://www.instagram.com/reel/DSQekeIAIsf/?utm_source=ig_embed" target="_blank"></a>
     </blockquote>`
  ];

  embeds.forEach(embedHTML => {
    const wrapper = document.createElement("div");
    wrapper.innerHTML = embedHTML;
    wrapper.classList.add("insta-wrapper");
    instaContainer.appendChild(wrapper);

    // Animate fade-in
    requestAnimationFrame(() => {
      wrapper.style.opacity = "1";
    });
  });

  // Load Instagram script
  function loadInstagram() {
    if (window.instgrm) {
      window.instgrm.Embeds.process();
    } else {
      const script = document.createElement("script");
      script.src = "https://www.instagram.com/embed.js";
      script.async = true;
      script.defer = true;
      script.onload = () => window.instgrm.Embeds.process();
      document.body.appendChild(script);
    }
  }

  // Small delay for mobile rendering
  setTimeout(loadInstagram, 500);
});