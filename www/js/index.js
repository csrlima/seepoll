///INICIALIZACION DE APP
var app = {
    initialize: function() {
        this.bindEvents();
    },
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');
        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');
        console.log('Received Event: ' + id);
    }
};

app.initialize();

/// DESCARGA DE CONTENIDO
document.addEventListener("deviceready", function() {
    console.log('ready listener')
    var url = 'http://xmpp.radiomarketbeat.com/plataforma/assets/lnImagenes/';
    prepare_url(url, 'useeupoll001.jpg')
    prepare_url(url, 'useeupoll002.jpg')
    prepare_url(url, 'useeupoll003.jpg')
    prepare_url(url, 'useeupoll004.jpg')
    prepare_url(url, 'useeupoll005.jpg')
    prepare_url(url, 'useeupoll006.jpg')
    prepare_url(url, 'useeupoll007.jpg')
    prepare_url(url, 'useeupoll008.jpg')    
    // window.location = "usee.html"
}, false);

function prepare_url(url, local_name) {
    window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, function (fs) {
        console.log('file system open: ' + fs.name);
        fs.root.getFile(local_name, { create: true, exclusive: false }, function (fileEntry) {
            download(fileEntry, url + local_name, false);
        }, onErrorCreateFile);
    }, onErrorLoadFs);
}

function download(fileEntry, uri, readBinaryData) {
    var fileTransfer = new FileTransfer();
    var fileURL = fileEntry.toURL();
    fileTransfer.download(
        uri,
        fileURL,
        function (entry) {
            console.log("download complete: " + entry.toURL());
        },
        function (error) {
            console.log("download error source " + error.source);
            console.log("download error target " + error.target);
            console.log("upload error code" + error.code);
        },
        null,
        {
        }
    );
}
function onErrorCreateFile() {
    console.log("Create file fail...");
}
function onErrorLoadFs() {
    console.log("File system fail...");
}
