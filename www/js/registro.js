$("form").submit(function( event ) {
    event.preventDefault();
    location.href = "index.html"
});

function download() {
    // window.requestFileSystem(window.TEMPORARY, 5 * 1024 * 1024, function (fs) {
    window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, function (fs) {

        var url = 'http://cordova.apache.org/static/img/cordova_bot.png';
        fs.root.getFile('downloaded-image.png', {
            create: true,
            exclusive: false
        }, function (fileEntry) {
            file_transfer(fileEntry, encodeURI(url), true);

        }, onErrorCreateFile);

    }, onErrorLoadFs);
}

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



function onErrorCreateFile() {
    console.log("Create file fail...");}

function onErrorLoadFs() {
    console.log("File system fail...");
}

download()
