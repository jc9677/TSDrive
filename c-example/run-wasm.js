const fs = require('fs');
const { WASI } = require('wasi');
const { argv, env } = require('process');

// Create a new WASI instance
const wasi = new WASI({
  version: 'preview1',  // Added version specification
  args: process.argv,
  env,
  preopens: {
    '/': '/'
  }
});

// Read the WebAssembly file
const wasm = fs.readFileSync('./hello.wasm');

// Create a WebAssembly instance
WebAssembly.instantiate(wasm, {
  wasi_snapshot_preview1: wasi.wasiImport
}).then(instance => {
  // Start the WASI instance
  wasi.start(instance.instance);
}).catch(err => {
  console.error('Failed to run WASI module:', err);
});