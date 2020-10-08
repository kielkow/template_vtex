const gulp = require('gulp');
const javascriptObfuscator = require('gulp-javascript-obfuscator');
const beautify = require('gulp-beautify');
const fs = require('fs'); 

gulp.src(['src/**/*.js'])
.pipe(javascriptObfuscator())
.pipe(beautify.js({ indent_size: 2 }))
.pipe(gulp.dest('dist'));

fs.copyFile("package.json", "dist/package.json", (err) => { 
    if (err) { 
      console.log("Error Found:", err); 
    } 
    else { 
        fs.readFileSync("dist/package.json", "utf8"); 
    } 
}); 


fs.copyFile("package-lock.json", "dist/package-lock.json", (err) => { 
    if (err) { 
      console.log("Error Found:", err); 
    } 
    else { 
        fs.readFileSync("dist/package-lock.json", "utf8"); 
    } 
}); 

fs.copyFile("README.md", "dist/README.md", (err) => { 
    if (err) { 
      console.log("Error Found:", err); 
    } 
    else { 
        fs.readFileSync("dist/README.md", "utf8"); 
    } 
}); 