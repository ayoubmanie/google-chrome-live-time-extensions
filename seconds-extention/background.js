function updateIcon() {
  const now = new Date();
  const seconds = now.getSeconds().toString().padStart(2, '0');
  
  chrome.action.setIcon({
    imageData: {
      "16": generateImageData(16, seconds),
      "32": generateImageData(32, seconds),
      "48": generateImageData(48, seconds),
      "128": generateImageData(128, seconds)
    }
  });
}

function generateImageData(size, text) {
  const canvas = new OffscreenCanvas(size, size);
  const context = canvas.getContext('2d');
  
  // Transparent background
  context.clearRect(0, 0, size, size);
  
  // Large white bold text
  context.fillStyle = 'white';
  const fontSize = size * 0.7; // Big font
  context.font = `bold ${fontSize}px Arial`;
  context.textAlign = 'center';
  context.textBaseline = 'middle';
  context.fillText(text, size/2, size/2);
  
  return context.getImageData(0, 0, size, size);
}


// Update every second (real-time)
updateIcon();
setInterval(updateIcon, 1000);