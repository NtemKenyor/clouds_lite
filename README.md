# CloudS: Decentralized Creativity and Free Speech Platform

**Welcome to CloudS**, a decentralized platform that empowers creativity, free speech, and community engagement. Built on the **SOON Network** ([RPC Endpoint](https://rpc.devnet.soo.network/rpc)), CloudS is a safe and rewarding hub for content creators, journalists, and free-thinkers around the globe.

---

## 🚀 **Overview**

CloudS offers a robust platform for:
- **Content Creators**: Share work, engage with your audience, and earn rewards for your creativity.
- **Journalists**: Safely and anonymously upload sensitive content to ensure global access to unfiltered information.
- **Gamers and Innovators**: Enjoy interactive decentralized experiences powered by blockchain technology.

CloudS combines the power of decentralized technology with user-centric features, enabling an unparalleled creative experience.

---

## 🛠️ **Project Structure**

CloudS is organized into several key directories, each serving a specific purpose:

### 1. **`interact`**
This directory handles the main operations of the platform:
   - **`backend/`**  
     Node.js-based logic for interacting with the blockchain:
     - **`createPost.js`**: Handles the creation of decentralized posts.
     - **`fetchMetadata.js`**: Fetches metadata from the blockchain.
     - **`get_contract.js`**: Interfaces with smart contracts.
     - **`program_backend.js`**: Central blockchain interaction logic.
     - **`server.js`**: Runs the backend server for blockchain communication.

   - **`public/`**  
     Front-facing content for the users:
     - HTML pages (`index.html`, `games.html`, etc.) for user interaction.
     - Assets like icons, logos, and stylesheets (`style.css`).
     - `favicon_io/` contains the favicon files for branding.
     - Accessible game and messenger pages for a richer user experience.

   <!-- - **`server/`**  
     Contains PHP-based server-side logic:
     - **`app.php`**: Core server application logic.
     - **`db.php`**: Handles database connections.
     - Other PHP scripts for auxiliary server operations.
 -->

### 2. **`rust_program/`**
   This directory focuses on blockchain-specific operations and it is inside the programs folder. the programs folder contains all the programs/smart-contracts in rust and most programs look like this:
   - **`Cargo.toml`** and **`Cargo.lock`**: Rust project dependencies.
   - **`src/lib.rs`**: Rust source code for custom smart contract logic.
   - **`target/`**: Compiled binaries and deployment files.

### 3. **Other Files**
   - **`LICENSE`**: Project license details.
   - **`README.md`**: This guide.
   - **`.gitignore`**: Excludes sensitive files (e.g., private keys).

---

## 🌐 **How It Works**

CloudS divides its operations into three core parts:

1. **Backend**  
   - Uses Node.js to interface with the SOON Network blockchain.
   - Responsible for creating posts, fetching metadata, and managing contract interactions.

2. **Frontend**  
   - The `public/` directory contains user-facing pages and resources.
   - Provides a seamless interface for content sharing, game playing, and communication.

3. **Server**  
   - Powered by PHP scripts to handle server-side logic and database interactions.
   - Acts as the glue between the frontend and backend systems.

---

## 🌟 **Features**

- **Decentralized Content Sharing**  
   Upload and share content securely, powered by blockchain.

- **Anonymous Messaging**  
   Enable free speech without compromising on privacy.

- **Interactive Games**  
   Play exciting games and earn rewards within the decentralized ecosystem.

- **Reward System**  
   Creatives and contributors are rewarded for their participation and ingenuity.

---

## 🔧 **Getting Started**

### Prerequisites
- **Node.js**: Required for the backend blockchain logic.
- **PHP**: Needed for server-side logic.
- **Rust**: For managing custom smart contracts in `media_soon`.

### Setup
1. Clone the repository:
   ```bash
   git clone https://github.com/NtemKenyor/clouds_lite.git
   cd CloudS
   ```
2. Install Node.js dependencies:
   ```bash
   cd interact/backend
   npm install
   ```
3. Run the Node.js backend:
   ```bash
   node server.js
   ```
4. Start the PHP server:
   ```bash
   php -S localhost:8000 -t interact/server
   ```
*Please understand that you may need to adjust the variables to meet your URL standard(if necessary). You can alway make a deep search across files and replace for testing purposes.*
```
'window.NODE_URL = "http://localhost:3000/cloudS/interact/backend";

window.PHP_URL = "http://localhost/cloudS/interact/server";
```


### Access
- Frontend: Open `index.html` in a browser or visit `http://localhost:8000`.
- Backend: Ensure your Node.js server is running for blockchain interactions.

---

## 🚧 **Roadmap**

### What's Next?
- Enhanced **Security**: Introduce client side transaction signing and advanced encryption to safeguard data.
- **More Games and Features**: Expand the gaming ecosystem and add creative contests.
- **End to End Encryption**: Include more advance algorithms to foster User to User private messages and post.
- **Community Integration**: Launch initiatives to foster community-driven development. AND MORE...

---

## 🤝 **Contributing**

We welcome contributions from the community! To contribute:
1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature-name
   ```
3. Submit a pull request for review.

---

## 💬 **Contact**

For queries and support, please contact:
- **Email**: nkenyor@gmail.com
- **Twitter**: [@CloudSPlatform](https://twitter.com/NKenyor)

---

### Thank you for exploring CloudS! Let's create, share, and innovate **"to the moon!"** 🚀