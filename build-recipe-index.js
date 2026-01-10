import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const recipesDir = path.join(__dirname, '/public/recipes');
const indexFile = path.join(recipesDir, 'index.json');

try {
  const files = fs.readdirSync(recipesDir)
    .filter(f => f.endsWith('.json') && f !== 'index.json');

  fs.writeFileSync(indexFile, JSON.stringify(files, null, 2));
  console.log(`index.json updated with ${files.length} recipes.`);
} catch (err) {
  console.error('Error generating index.json:', err);
  process.exit(1);
}
