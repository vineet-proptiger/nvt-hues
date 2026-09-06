const fs = require('fs');
const path = require('path');

const walkSync = function(dir, filelist) {
  const currentFiles = fs.readdirSync(dir);
  filelist = filelist || [];
  currentFiles.forEach(function(file) {
    if (fs.statSync(path.join(dir, file)).isDirectory()) {
      if (file !== 'node_modules' && file !== '.git' && file !== '.next') {
        filelist = walkSync(path.join(dir, file), filelist);
      }
    }
    else {
      if (file.endsWith('.js') || file.endsWith('.jsx') || file.endsWith('.json') || file.endsWith('.css') || file.endsWith('.md')) {
        filelist.push(path.join(dir, file));
      }
    }
  });
  return filelist;
};

const allFiles = walkSync('.');

allFiles.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let newContent = content;

  // Order matters for NVT Whispering Hues so it doesn't get partially matched
  newContent = newContent.replace(/NVT Whispering Hues/g, 'NVT Whispering Hues');
  newContent = newContent.replace(/nvt-whispering-hues/g, 'nvt-whispering-hues');
  newContent = newContent.replace(/nvtvillasbannerghattaroad\.com/g, 'nvtwhisperinghuesgunjur.com');
  newContent = newContent.replace(/NVT Whispering Hues/g, 'NVT Whispering Hues');
  newContent = newContent.replace(/NVT Group/g, 'NVT Group');
  newContent = newContent.replace(/NVT/g, 'NVT');
  newContent = newContent.replace(/nvt/g, 'nvt');
  
  newContent = newContent.replace(/Gunjur/g, 'Gunjur');
  newContent = newContent.replace(/Gunjur/g, 'Gunjur');

  newContent = newContent.replace(/₹ 4\.99 Cr\*/g, '₹ 6 Cr*');
  
  if (content !== newContent) {
    fs.writeFileSync(file, newContent, 'utf8');
    console.log(`Updated ${file}`);
  }
});
