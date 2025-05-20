
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Create build directory
console.log('Creating build directory...');
if (fs.existsSync('build')) {
  fs.rmSync('build', { recursive: true });
}
fs.mkdirSync('build');

// Run build command
console.log('Building the application...');
execSync('npm run build', { stdio: 'inherit' });

console.log('Build completed successfully!');
