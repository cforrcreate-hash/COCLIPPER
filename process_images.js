import { Jimp } from 'jimp';
import fs from 'fs';
import path from 'path';

const assetsDir = '/Users/epexio/Desktop/Website - clipper/src/assets';

async function makeTransparent(filename) {
  const filePath = path.join(assetsDir, filename);
  if (!fs.existsSync(filePath)) {
    console.log(`File not found: ${filePath}`);
    return;
  }
  
  try {
    const image = await Jimp.read(filePath);
    
    image.scan(0, 0, image.bitmap.width, image.bitmap.height, function(x, y, idx) {
      const red = this.bitmap.data[idx + 0];
      const green = this.bitmap.data[idx + 1];
      const blue = this.bitmap.data[idx + 2];

      if (red < 20 && green < 20 && blue < 20) {
        const maxVal = Math.max(red, green, blue);
        if (maxVal < 10) {
          this.bitmap.data[idx + 3] = 0; 
        } else {
          this.bitmap.data[idx + 3] = Math.floor((maxVal / 20) * 255); 
        }
      }
    });

    const newPath = path.join(assetsDir, filename.replace('.png', '_transparent.png'));
    await image.write(newPath);
    console.log(`Processed ${filename} -> saved as ${newPath}`);
  } catch (err) {
    console.error(`Error processing ${filename}:`, err);
  }
}

async function main() {
  await makeTransparent('char1.png');
  await makeTransparent('char2.png');
  await makeTransparent('char3.png');
  await makeTransparent('char4.png');
  await makeTransparent('logo1.png');
}

main();
