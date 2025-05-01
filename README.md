# <img src="https://files.catbox.moe/lk5i9z.jpg" width="50"> Terminator QR MD Bot <img src="https://files.catbox.moe/sfdq6o.jpg" width="50">

> **ULTIMATE WHATSAPP BOT FOR TERMUX**  
> *"One-click deployment - Advanced features"*

## 🚀 **FULL TERMUX INSTALLATION**
Copy and paste **ALL** these commands into Termux:

```bash
# System Update
clear
echo "[+] Updating packages..."
pkg update -y && pkg upgrade -y

# Install Dependencies
echo "[+] Installing dependencies..."
pkg install -y git nodejs ffmpeg imagemagick libwebp

# Clone Repository
echo "[+] Downloading Terminator QR MD..."
git clone https://github.com/iconic05/Terminator-QR-MD-.git
cd Terminator-QR-MD-

# Install Node Modules
echo "[+] Installing node modules..."
npm install
npm install -g npm@latest
npm audit fix --force

# Fix Common Issues
echo "[+] Applying fixes..."
pkg install python -y
npm install --global yarn
yarn install

# Start Bot
clear
echo "[+] Installation complete!"
echo "[+] Starting Terminator QR MD..."
node .
