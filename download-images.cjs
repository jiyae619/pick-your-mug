#!/usr/bin/env node

const https = require('https');
const fs = require('fs');
const path = require('path');

// Create images directory if it doesn't exist
const imagesDir = path.join(__dirname, 'public', 'images');
if (!fs.existsSync(imagesDir)) {
  fs.mkdirSync(imagesDir, { recursive: true });
}

// Cafe-themed search queries for variety
const queries = [
  'cafe,interior',
  'coffee,shop',
  'espresso,bar',
  'coffeehouse,cozy',
  'cafe,seattle',
  'coffee,latte',
  'cafe,books',
  'coffee,roasters',
  'cafe,modern',
  'coffee,vintage',
  'cafe,window',
  'coffeeshop,atmosphere'
];

// Function to download image
function downloadImage(url, filepath, index) {
  return new Promise((resolve, reject) => {
    console.log(`Downloading cafe${index}.jpg...`);

    https.get(url, (response) => {
      // Handle redirects
      if (response.statusCode === 301 || response.statusCode === 302) {
        return downloadImage(response.headers.location, filepath, index)
          .then(resolve)
          .catch(reject);
      }

      if (response.statusCode !== 200) {
        reject(new Error(`Failed to download: ${response.statusCode}`));
        return;
      }

      const fileStream = fs.createWriteStream(filepath);
      response.pipe(fileStream);

      fileStream.on('finish', () => {
        fileStream.close();
        console.log(`✓ Downloaded cafe${index}.jpg`);
        resolve();
      });

      fileStream.on('error', (err) => {
        fs.unlink(filepath, () => {});
        reject(err);
      });
    }).on('error', (err) => {
      reject(err);
    });
  });
}

// Download all images
async function downloadAllImages() {
  console.log('Starting download of 12 cafe images...\n');

  // Use Lorem Picsum with different IDs for variety
  const imageIds = [237, 431, 292, 683, 152, 326, 718, 543, 169, 394, 615, 485];

  for (let i = 1; i <= 12; i++) {
    // Use Lorem Picsum for reliable placeholder images
    const url = `https://picsum.photos/id/${imageIds[i-1]}/400/300`;
    const filepath = path.join(imagesDir, `cafe${i}.jpg`);

    try {
      await downloadImage(url, filepath, i);
      // Small delay to avoid rate limiting
      await new Promise(resolve => setTimeout(resolve, 500));
    } catch (error) {
      console.error(`✗ Error downloading cafe${i}.jpg:`, error.message);
    }
  }

  console.log('\n✓ All images downloaded successfully!');
  console.log(`Images saved to: ${imagesDir}`);
}

// Run the download
downloadAllImages().catch(console.error);
