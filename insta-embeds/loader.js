// Select the container where the Instagram embed will go
const instagramContainer = document.getElementById('instagram-posts');

// Your Instagram Reel URL
const reelURL = "https://www.instagram.com/reel/DSQekeIAIsf/?utm_source=ig_embed&utm_campaign=loading";

// Create the blockquote element for the embed
const blockquote = document.createElement('blockquote');
blockquote.className = "instagram-media";
blockquote.setAttribute("data-instgrm-captioned", "");
blockquote.setAttribute("data-instgrm-permalink", reelURL);
blockquote.setAttribute("data-instgrm-version", "14");
blockquote.style = `
  background:#FFF; 
  border:0; 
  border-radius:3px; 
  box-shadow:0 0 1px 0 rgba(0,0,0,0.5),
             0 1px 10px 0 rgba(0,0,0,0.15); 
  margin: 1px; 
  max-width:540px; 
  min-width:326px; 
  padding:0; 
  width:99.375%; 
  width:-webkit-calc(100% - 2px); 
  width:calc(100% - 2px);
`;

// Append it to the container
instagramContainer.appendChild(blockquote);

// Load Instagram embed script
if (!window.instgrm) {
    const script = document.createElement('script');
    script.async = true;
    script.src = "//www.instagram.com/embed.js";
    document.body.appendChild(script);

    script.onload = () => {
        window.instgrm.Embeds.process();
    };
} else {
    window.instgrm.Embeds.process();
}
