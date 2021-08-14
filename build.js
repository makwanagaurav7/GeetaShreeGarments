var electronInstaller = require('electron-winstaller');
var settings = {
appDirectory: './GeetaShreeGarmentsBuild',
outputDirectory: './GeetaShreeGarmentsEXE',
authors: 'Gaurav Makwana',
exe: './GeetaShreeGarments.exe',
description: 'Geeta Shree Garments Billing Application',
version: '1.0.0'
};
resultPromise = electronInstaller.createWindowsInstaller(settings);
resultPromise.then(() => {
console.log("The installers of your application were succesfully created !");
}, (e) => {
console.log(`Well, sometimes you are not so lucky: ${e.message}`)
});