# Python WebAssembly Demo

This repository demonstrates running Python code in the browser using WebAssembly via Pyodide.

## Live Demo
You can view the live demo at: https://jc9677.github.io/TSDrive/

## Features
- Run Python code directly in the browser using WebAssembly
- NumPy integration example showing array operations
- Real-time computation with Python to JavaScript interop

## Local Development
To run this locally:
1. Clone the repository
2. Start a local web server in the project directory:
   ```bash
   python -m http.server 8000
   ```
3. Open `http://localhost:8000` in your browser

## GitHub Pages Deployment
This project is configured to run on GitHub Pages. To deploy:

1. Go to your repository settings
2. Navigate to "Pages" in the sidebar
3. Under "Source", select "Deploy from a branch"
4. Choose your branch (usually `main` or `master`)
5. Set the folder to `/` (root)
6. Click Save

The site will be available at `https://<username>.github.io/TSDrive/`

## Project Structure
- `index.html` - Main entry point for the web application
- `main.py` - Python code that runs in the browser via WebAssembly
- `c-example/` - Example of C code compiled to WebAssembly
- `python-example/` - Additional Python WebAssembly examples