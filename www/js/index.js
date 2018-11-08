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
    prepare_url('useeupoll001.jpg')
    prepare_url('useeupoll002.jpg')
    prepare_url('useeupoll003.jpg')
    prepare_url('useeupoll004.jpg')
    prepare_url('useeupoll005.jpg')
    prepare_url('useeupoll006.jpg')
    prepare_url('useeupoll007.jpg')
    prepare_url('useeupoll008.jpg')
    // window.location = "usee.html"
}, false);

function prepare_url(local_name) {


  //   var reader = new FileReader();
  //   var fileSource = "file:///storage/emulated/0/"+local_name;
  //   reader.onloadend = function(evt) {
  //     if(evt.target.result != null) {
  //         // If you receive not null value the file exists
  //          fileDoesNotExist(local_name)
  //     } else {
  //         // Otherwise the file doesn't exists
  //         fileExists()
  //     }
  // };
    window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, function(fileSystem){
        fileSystem.root.getFile(local_name, { create: false }, fileExists, fileDoesNotExist);
    }, onErrorLoadFs); //of requestFileSystem

    // window.resolveLocalFileSystemURL("file:///storage/emulated/0/"+local_name, fileExists, fileDoesNotExist(local_name));
    // resp = window.resolveLocalFileSystemURL("file:///storage/emulated/0/"+local_name);
    // console.log(resp)
}


function fileExists2(fileEntry){
    alert("File " + fileEntry.name + " exists!");
}
function fileDoesNotExist2(){
    alert("file does not exist");
}

function fileExists(){
    console.log("Archivo ya existe");
}

function fileDoesNotExist(local_name){
    var url = 'http://xmpp.radiomarketbeat.com/plataforma/assets/lnImagenes/';
    console.log(fileEntry.name);
    var fileTransfer = new FileTransfer();
    console.log("About to start transfer");
    fileTransfer.download(url + fileEntry.name, "file:///storage/emulated/0/"+fileEntry.name,
        function(entry) {
            console.log("Success!");
            // appStart();
        },
        function(err) {
            console.log("Error");
            console.dir(err);
        });




    // window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, function (fs) {
    //    console.log('file system open: ' + fs.name);
    //    fs.root.getFile(local_name, { create: true, exclusive: false }, function (fileEntry) {
    //        // if(fileEntry.isFile === false){
    //            download(fileEntry, url + local_name, false);
    //        // }else{
    //        //     console.log("Archivo ya existe: " + local_name);
    //        // }
    //    }, onErrorCreateFile);
    // }, onErrorLoadFs);

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
            //None
        }
    );
}

function onErrorCreateFile() {
    console.log("Create file fail...");
}

function onErrorLoadFs() {
    console.log("File system fail...");
}
