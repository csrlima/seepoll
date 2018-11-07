$("form").submit(function( event ) {
    event.preventDefault();
    location.href = "index.html"
});

// function download() {
    // window.requestFileSystem(window.TEMPORARY, 5 * 1024 * 1024, function (fs) {
document.addEventListener("deviceready", function() {
    window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, function (fs) {

        var url = 'http://cordova.apache.org/static/img/cordova_bot.png';
        fs.root.getFile('downloaded-image.png', {
            create: true,
            exclusive: false
        }, function (fileEntry) {
            file_transfer(fileEntry, encodeURI(url), true);

        }, onErrorCreateFile);

    }, onErrorLoadFs);
    }, false);
// }

function onErrorLoadFs(msg){
    alert(msg);
}

function onErrorCreateFile(msg){
    alert(msg);
}

function file_transfer(fileEntry, uri, readBinaryData) {

    var fileTransfer = new FileTransfer();
    var fileURL = fileEntry.toURL();

    fileTransfer.download(
        uri,
        fileURL,
        function (entry) {
            alert("download complete: " + entry.toURL());

            if (readBinaryData) {
                // Read the file...
                readBinaryFile(entry);
            } else {
                // Or just display it.
                displayImageByFileURL(entry);
            }

        },
        function (error) {
            alert("download error source " + error.source);
            alert("download error target " + error.target);
            alert("upload error code" + error.code);
        },
        null, // or, pass false
        {
            //headers: {
            //    "Authorization": "Basic dGVzdHVzZXJuYW1lOnRlc3RwYXNzd29yZA=="
            //}
        }
    );
}

function readBinaryFile(fileEntry) {
    fileEntry.file(function (file) {
        var reader = new FileReader();

        reader.onloadend = function() {

            console.log("Successful file read: " + this.result);
            // displayFileData(fileEntry.fullPath + ": " + this.result);

            var blob = new Blob([new Uint8Array(this.result)], { type: "image/png" });
            displayImage(blob);
        };

        reader.readAsArrayBuffer(file);

    }, onErrorReadFile);
}

function displayImage(blob) {

    // Note: Use window.URL.revokeObjectURL when finished with image.
    var objURL = window.URL.createObjectURL(blob);

    // Displays image if result is a valid DOM string for an image.
    var elem = document.getElementById('demoimg');
    elem.src = objURL;
}
function displayImageByFileURL(fileEntry) {
    var elem = document.getElementById('demoimg2');
    elem.src = fileEntry.toURL();
}

function onErrorCreateFile() {
    console.log("Create file fail...");
}
function onErrorLoadFs() {
    console.log("File system fail...");
}
function onErrorReadFile() {
    console.log("File read fail...");
}

// download()
