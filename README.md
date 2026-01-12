# YT-Time-Skipper
Chrome extension to customize YouTube skip duration, skip as much amount of seconds as you want.

# 🎬 YouTube Variable Time Skipper

A lightweight Chrome Extension that lets you **customize how many seconds YouTube skips** when you press the arrow keys.

By default, YouTube jumps 5 seconds forward or backward.  
With this extension, you can choose **any value** — 10s, 30s, 60s, or more.

---

## 🚀 What this extension does

- Lets you set a **custom skip duration**
- Overrides YouTube’s default 5-second jump
- Shows a **floating on-screen indicator** inside the video  
  - `+20s` on the right when skipping forward  
  - `-20s` on the left when skipping backward
- Works in:
  - Normal mode  
  - Theater mode  
  - Fullscreen  

---

## ⌨ How to use

1. Click the extension icon  
2. Enter how many seconds you want to skip (e.g., 15)  
3. Click **Save**

Now on YouTube:
- Press **→** to skip forward  
- Press **←** to skip backward  

You’ll see the exact skip amount on the video.

---

## 🧩 Project Files

Here’s what each file does:

### `manifest.json`
The main configuration file for the Chrome extension.  
It tells Chrome:
- The name and version
- Which permissions are needed
- That the extension should run on YouTube
- Which scripts to load

---

### `popup.html`
The small UI that opens when you click the extension icon.  
It contains:
- An input box to enter skip time
- A Save button

---

### `popup.js`
Handles saving the user’s chosen skip value.  
It stores the number securely using Chrome’s extension storage and then closes the popup.

---

### `content.js`
This is the core logic that runs on YouTube:
- Reads the saved skip time
- Detects when you press the arrow keys
- Moves the video forward or backward
- Displays the floating `+Xs` or `-Xs` indicator inside the video player

---

## 🛠 Installation (Developer Mode)

1. Download or clone this repository
2. Open Chrome and go to: chrome://extensions
3. Enable **Developer Mode**
4. Click **Load unpacked**
5. Select the project folder

Open YouTube and start skipping with your custom time 🎉

---

## 📌 Why this exists

This project was built to make watching long tutorials, lectures, and podcasts on YouTube faster and more comfortable by giving full control over skipping.

---

## 📄 License
Free to use and modify.
