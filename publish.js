console.log(require('./package.json').version)
const version = require('./package.json').version.split('.');
const newVersion = (parseInt(version[2])+1).join('.');

const {exec} = require('child_process');
const process = require('child_process');

exec(`npm version ${newVersion}`, (error, stdout, stderr) => {
    if (error) {
        console.log(`error: ${error.message}`);
        return
    }
    if (stderr) {
        console.log(`stderr: ${stderr}`);
    }

    if (stdout) {
        console.log(`stdout: ${stdout}`);
    }
});

/*
process.fork('obfuscator.js');
*/

exec(`npm publish`, (error, stdout, stderr) => {
    if (error) {
        console.log(`error: ${error.message}`);

        return;
    }
    if (stderr) {
        console.log(`stderr: ${stderr}`);
    }

    if (stdout) {
        console.log(`stdout: ${stdout}`);
        exec(`git push`, (error, stdout, stderr) => {
            if (error) {
                console.log(`error: ${error.message}`);
                return;
            }

            if (stderr) {
                console.log(`stderr: ${stderr}`);
            }
        
            if (stdout) {
                console.log(`stdout: ${stdout}`);
            }
        });
    }
});