const container = document.getElementById('instagram-posts');

const instagramEmbeds = [
  `<!-- Instagram Post 1 -->
  <blockquote class="instagram-media" data-instgrm-permalink="https://www.instagram.com/p/POSTCODE1/" data-instgrm-version="14"></blockquote>`,
  
  `<!-- Instagram Post 2 -->
  <blockquote class="instagram-media" data-instgrm-permalink="https://www.instagram.com/p/POSTCODE2/" data-instgrm-version="14"></blockquote>`
];

instagramEmbeds.forEach(embedHTML => {
  const div = document.createElement('div');
  div.innerHTML = embedHTML;
  container.appendChild(div);
});

const script = document.createElement('script');
script.async = true;
script.src = '//www.instagram.com/embed.js';
document.body.appendChild(script);
