const fs = require('fs');

const articlesDataPath = './src/data/articles.ts';
let code = fs.readFileSync(articlesDataPath, 'utf8');

for (let i = 1; i <= 6; i++) {
  const filename = `advice ${i}.jpg`;
  try {
    const fileBytes = fs.readFileSync(filename);
    const base64 = fileBytes.toString('base64');
    const dataUri = `data:image/jpeg;base64,${base64}`;
    
    // Replace "/advice i.jpg" with the Data URI
    code = code.replace(`image: "/advice ${i}.jpg",`, `image: "${dataUri}",`);
  } catch (err) {
    console.error(`Error reading ${filename}`, err);
  }
}

fs.writeFileSync(articlesDataPath, code);
console.log('Successfully updated articles.ts with Base64 strings for first 6 images.');
