/**
 * This Node script scans the img folder and produces 
 * WEBP files for JPGs and PNGs
 * 
 * To run on a directory open a new terminal:
 * > node webp.js img/*.jpg
 * 
 * To run on a file open a new terminal:
 * > node webp.js img/file.jpg
 * 
 */

const imagemin = require("imagemin");    // The imagemin module.
const webp = require("imagemin-webp");   // imagemin's WebP plugin.
const target = process.argv.slice(2).pop();

(async () =>{
  const files_jpg = await imagemin([target], {
    destination: 'img/',
    plugins: [
      webp({
        lossless:false, 
        quality:65
      })
    ]
  });
  

  /**
   * example for converting PNGs to WebP with lossless compression
   */

  // const files_png = await imagemin(['img/*.png'], {
  //   destination: 'img/',
  //   plugins: [
  //     webp({
  //       lossless:true, 
  //       quality:65
  //     })
  //   ]
  // });
  
})();