const fs = require('fs');
let content = fs.readFileSync('src/data/content.ts', 'utf8');
content = content.replace(/withBase\('([^']+)\/'\)/g, "withBase('$1')");
fs.writeFileSync('src/data/content.ts', content);
