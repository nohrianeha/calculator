# Calculator Test App

A modern, responsive calculator web application with a beautiful UI.

## Features

- Basic arithmetic operations (addition, subtraction, multiplication, division)
- Clear (C) and Clear Entry (CE) functions
- Delete last character (⌫)
- Keyboard support for all operations
- Responsive design that works on desktop and mobile
- Modern gradient background and sleek dark theme

## How to Run

### Method 1: Direct Browser (Easiest - No Server Needed) ⭐
**This is the simplest method and works immediately!**

1. Navigate to the project folder: `C:\Users\Prince Gupta\Desktop\DemocursorProject`
2. Double-click `index.html` 
   - OR right-click `index.html` → "Open with" → choose your browser (Chrome, Edge, Firefox, etc.)
3. The calculator will open and work immediately!

**Note:** This method works perfectly for this calculator app - no server installation needed!

### Method 2: Using Python (if installed)
```bash
python -m http.server 8000
```
Then open: `http://localhost:8000`

### Method 3: Using PHP (if installed)
```bash
php -S localhost:8000
```
Then open: `http://localhost:8000`

## How to Use

1. Click buttons or use your keyboard to perform calculations
2. Press `=` or `Enter` to calculate
3. Press `Escape` to clear all
4. Press `Backspace` to delete the last character

## Keyboard Shortcuts

- Numbers: `0-9`
- Decimal point: `.`
- Operators: `+`, `-`, `*`, `/`
- Calculate: `Enter` or `=`
- Clear All: `Escape`
- Delete Last: `Backspace`

## Files

- `index.html` - Main HTML structure
- `styles.css` - Styling and layout
- `script.js` - Calculator logic and functionality

## Browser Compatibility

Works on all modern browsers (Chrome, Firefox, Safari, Edge).

## How to Upload Files to GitHub Repository

There are several ways to upload your files to GitHub. Choose the method that works best for you:

### Method 1: Using GitHub Web Interface (Easiest for Beginners) ⭐

**Best for:** First-time upload or small projects

1. **Create a new repository on GitHub:**
   - Go to [GitHub](https://github.com) and sign in
   - Click the "+" icon (top right) → "New repository"
   - Name it (e.g., `calculator-app`)
   - Choose **Public** or **Private**
   - **Don't** check "Initialize with README" (you already have files)
   - Click "Create repository"

2. **Upload files using drag & drop:**
   - After creating the repo, you'll see a page with upload instructions
   - Scroll down to find the upload area, OR
   - Click "uploading an existing file" link
   - **Drag and drop** all your files (`index.html`, `styles.css`, `script.js`, `README.md`) into the upload area
   - OR click "choose your files" and select them
   - Scroll down, enter a commit message (e.g., "Initial commit: Calculator app")
   - Click "Commit changes"

**That's it!** Your files are now on GitHub.

### Method 2: Using Git Commands (Command Line)

**Best for:** Developers comfortable with terminal

**Prerequisites:** Install [Git](https://git-scm.com/downloads) if you haven't already.

1. **Create a repository on GitHub** (same as Method 1, Step 1)

2. **Open PowerShell or Command Prompt** in your project folder:
   ```powershell
   cd "C:\Users\Prince Gupta\Desktop\DemocursorProject"
   ```

3. **Run these commands:**
   ```bash
   # Initialize git repository
   git init
   
   # Add all files to staging
   git add .
   
   # Commit files with a message
   git commit -m "Initial commit: Calculator app"
   
   # Add your GitHub repository (replace YOUR_USERNAME and REPO_NAME)
   git remote add origin https://github.com/YOUR_USERNAME/REPO_NAME.git
   
   # Rename branch to main (if needed)
   git branch -M main
   
   # Push files to GitHub
   git push -u origin main
   ```

4. **If prompted for credentials:**
   - Use a **Personal Access Token** (not your password)
   - Generate one: GitHub → Settings → Developer settings → Personal access tokens → Tokens (classic)
   - Or use GitHub Desktop (see Method 3)

### Method 3: Using GitHub Desktop (GUI Application)

**Best for:** Visual interface, easier than command line

1. **Download GitHub Desktop:**
   - Go to [desktop.github.com](https://desktop.github.com/)
   - Download and install

2. **Sign in to GitHub Desktop** with your GitHub account

3. **Add your local repository:**
   - File → Add Local Repository
   - Browse to: `C:\Users\Prince Gupta\Desktop\DemocursorProject`
   - Click "Add repository"

4. **Publish to GitHub:**
   - Click "Publish repository" button
   - Choose name, description, and visibility
   - Click "Publish repository"

### Method 4: Upload Individual Files Later

If you already have a repository and want to add more files:

**Using Web Interface:**
1. Go to your repository on GitHub
2. Click "Add file" → "Upload files"
3. Drag & drop or select files
4. Enter commit message
5. Click "Commit changes"

**Using Git Commands:**
```bash
git add filename.html
git commit -m "Add new file"
git push
```

## Deploy to GitHub Pages (Run from GitHub)

### Step 1: Create a GitHub Repository
1. Go to [GitHub](https://github.com) and sign in
2. Click the "+" icon → "New repository"
3. Name it (e.g., `calculator-app`)
4. Choose **Public** (required for free GitHub Pages)
5. **Don't** initialize with README (you already have one)
6. Click "Create repository"

### Step 2: Push Your Code to GitHub

Open PowerShell or Command Prompt in your project folder and run:

```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit files
git commit -m "Initial commit: Calculator app"

# Add your GitHub repository (replace YOUR_USERNAME and REPO_NAME)
git remote add origin https://github.com/YOUR_USERNAME/REPO_NAME.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### Step 3: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** (top menu)
3. Scroll down to **Pages** (left sidebar)
4. Under "Source", select **"Deploy from a branch"**
5. Choose branch: **main**
6. Choose folder: **/ (root)**
7. Click **Save**

### Step 4: Access Your App

Wait 1-2 minutes, then visit:
```
https://YOUR_USERNAME.github.io/REPO_NAME/
```

Your calculator will be live and accessible from anywhere! 🎉

### Alternative: Clone and Run Locally

If someone wants to clone your repository and run it locally:

```bash
# Clone the repository
git clone https://github.com/YOUR_USERNAME/REPO_NAME.git

# Navigate to the folder
cd REPO_NAME

# Open index.html in browser (double-click or use any method from "How to Run" section)
```

