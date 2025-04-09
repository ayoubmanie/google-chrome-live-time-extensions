# Chrome Time Extensions

Hidden taskbar? No problem. See the time instantly in your Chrome toolbar.

Three extensions that display **hours**, **minutes**, and **seconds** as browser icons.


## Features
- Separate extensions for HH, MM, SS
- Bold white text, transparent background
- Real-time updates (seconds refresh every second)
- No popups or distractions

## 🚀Install
1. Download this repo
2. Go to `chrome://extensions`
3. Enable **Developer mode**
4. Click **Load unpacked** and select:
   - `hours-extension/`
   - `minutes-extension/`
   - `seconds-extension/`

## Structure
hours-extension/
├── icons/
├── background.js
└── manifest.json

*(Same for minutes/seconds)*

## 🎨Customize
Edit in `background.js`:
```js
context.fillStyle = 'white' // Change color
fontSize = size * 0.7      // Adjust text size
```