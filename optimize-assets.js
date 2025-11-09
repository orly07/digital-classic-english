import sharp from "sharp";
import fs from "fs";
import path from "path";

const inputDir = "./src/assets";
const outputDir = "./src/optimized-assets";

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

const optimizeFolder = async (folder) => {
  const items = fs.readdirSync(folder);

  for (const item of items) {
    const inputPath = path.join(folder, item);
    const stats = fs.statSync(inputPath);
    const relativePath = path.relative(inputDir, inputPath);
    const outputPath = path.join(outputDir, relativePath);

    if (stats.isDirectory()) {
      fs.mkdirSync(outputPath, { recursive: true });
      await optimizeFolder(inputPath);
    } else if (/\.(jpg|jpeg|png|webp)$/i.test(item)) {
      console.log(`Optimizing...: ${relativePath}`);

      await sharp(inputPath)
        .resize({ width: 1200, withoutEnlargement: true })
        .webp({ quality: 70 })
        .toFile(outputPath.replace(path.extname(outputPath), ".webp"));
    }
  }
};

const startOptimization = async () => {
  console.log("Starting image optimization...");
  await optimizeFolder(inputDir);
  console.log("Done! Optimized images saved in src/optimized-assets/");
};

startOptimization().catch((err) => console.error(err));
