import fs from 'fs';
import path from 'path';

const assetsDir = '/Users/epexio/Desktop/Website - clipper/src/assets';

async function fetchYoutubeImage(url, filename) {
  try {
    console.log(`Fetching ${url}...`);
    const response = await fetch(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
      }
    });
    const html = await response.text();
    
    // Regex to find the og:image meta tag
    const match = html.match(/<meta property="og:image" content="([^"]+)">/);
    if (match && match[1]) {
      let imageUrl = match[1];
      console.log(`Found image URL: ${imageUrl}`);
      
      const imgRes = await fetch(imageUrl);
      const buffer = await imgRes.arrayBuffer();
      
      const filePath = path.join(assetsDir, filename);
      fs.writeFileSync(filePath, Buffer.from(buffer));
      console.log(`Saved to ${filename}`);
    } else {
      console.log(`Could not find og:image for ${url}`);
    }
  } catch (err) {
    console.error(`Error fetching ${url}:`, err);
  }
}

async function main() {
  await fetchYoutubeImage('https://www.youtube.com/@FoltynFamily', 'foltyn.jpg');
  await fetchYoutubeImage('https://www.youtube.com/@AyeYahZee', 'ayeyahzee.jpg');
  await fetchYoutubeImage('https://www.youtube.com/@Nizarisacutie', 'nizarisaqt.jpg');
  await fetchYoutubeImage('https://www.youtube.com/@Myamberr', 'myamberr.jpg');
  await fetchYoutubeImage('https://www.youtube.com/@chrisypeww', 'chris.jpg');
  
  // Thumbnail for the success story short
  await fetchYoutubeImage('https://www.youtube.com/shorts/ePIT1bUgIR8', 'short_thumb.jpg');
}

main();
