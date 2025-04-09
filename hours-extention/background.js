function updateIcon() {
  const now = new Date();
  const hours = now.getHours().toString().padStart(2, '0');
  
  chrome.action.setIcon({
    imageData: {
      "16": generateImageData(16, hours),
      "32": generateImageData(32, hours),
      "48": generateImageData(48, hours),
      "128": generateImageData(128, hours)
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

// Update every minute (since hours change slowly)
updateIcon();
chrome.alarms.create('updateIcon', { periodInMinutes: 1 });
chrome.alarms.onAlarm.addListener(updateIcon);