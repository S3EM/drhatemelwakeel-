const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, 'public');

if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir);
}

for (let i = 1; i <= 19; i++) {
  const filename = `advice ${i}.jpg`;
  if (fs.existsSync(filename)) {
    fs.renameSync(filename, path.join(publicDir, filename));
    console.log(`Moved ${filename} to public/`);
  }
}
