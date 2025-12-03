const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Find all Vue files
const files = glob.sync('app/**/*.vue', { cwd: __dirname });

files.forEach(file => {
  const filePath = path.join(__dirname, file);
  let content = fs.readFileSync(filePath, 'utf8');
  let modified = false;
  
  // Replace :initial="{ opacity: 0, ... }" with visible initial state
  content = content.replace(
    /:initial="\{ opacity: 0([^}]*)\}"/g,
    (match) => {
      modified = true;
      // Keep the transform but set opacity to 1
      return match.replace('opacity: 0', 'opacity: 1');
    }
  );
  
  if (modified) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Fixed: ${file}`);
  }
});
