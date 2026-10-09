# 🛕 Navarathri SDG Temple Courtyard VR

A WebVR experience built using **A-Frame** for **Meta Quest Browser**. It presents 9 Golu stations set in a night-time temple courtyard, mapping traditional South Asian Navarathri heritage to the **UN Sustainable Development Goals (SDGs)**.

---

## 📁 Project Structure
```text
temple-golu-vr/
├── index.html              # Main HTML file (A-Frame scene & WebXR setup)
├── css/
│   └── style.css           # 2D overlay UI styles
├── js/
│   ├── app.js              # Application entry point & sound management
│   └── components/
│       └── info-popup.js   # A-Frame component for interactive 3D SDG cards
├── assets/
│   ├── models/             # 3D GLTF/GLB models (.glb)
│   ├── audio/              # Background temple sounds (.mp3)
│   └── images/             # Textures & skybox images (.jpg/.png)
├── .gitignore              # Git ignored files
└── README.md               # Project documentation