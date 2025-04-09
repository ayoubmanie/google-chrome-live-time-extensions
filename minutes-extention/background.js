function updateIcon() {
  const now = new Date();
  const minutes = now.getMinutes().toString().padStart(2, '0');
  
  chrome.action.setIcon({
    imageData: {
      "16": generateImageData(16, minutes),
      "32": generateImageData(32, minutes),
      "48": generateImageData(48, minutes),
      "128": generateImageData(128, minutes)
    }
  });
}

function generateImageData(size, text) {
  const canvas = new OffscreenCanvas(size, size);
  const context = canvas.getContext('2d');
  context.clearRect(0, 0, size, size); // Transparent background
  context.fillStyle = 'white';
  const fontSize = size * 0.7;
  context.font = `bold ${fontSize}px Arial`;
  context.textAlign = 'center';
  context.textBaseline = 'middle';
  context.fillText(text, size/2, size/2);
  return context.getImageData(0, 0, size, size);
}

// ✅ FIX: Update every second (not just every minute)
updateIcon();
setInterval(updateIcon, 1000); // Ensures minute changes are exact