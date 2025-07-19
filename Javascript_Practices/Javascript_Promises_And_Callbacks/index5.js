// Parallel File Downloads (Callback)
// Simulate downloading 3 files at the same time using setTimeout, and once all are done, execute a final callback.

function downloadFile(name, callback) {
    let time = Math.random() * 2000;
    setTimeout(function () {
        console.log(`${name} Downloaded in ${time.toFixed(0)}ms`);
        callback();
    }, time);
}
let completed = 0;
function checkAllDone() {
    completed++;
    if (completed === 3) {
        console.log("All Files Downloaded !");
    }
}

downloadFile("File-1", checkAllDone);
downloadFile("File-2", checkAllDone);
downloadFile("File-3", checkAllDone);
