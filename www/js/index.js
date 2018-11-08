var url = 'http://xmpp.radiomarketbeat.com/plataforma/assets/lnImagenes/';

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

function prepare_url(file_name) {
    $.ajax({
        url: "file:///storage/emulated/0/" + file_name,
        type: 'HEAD',
        error: function(){
            download_file(file_name)
            // console.log("file not exists "+file_name);
        },
        success: function(){
            console.log('Archivo ya existe: ' + file_name);
        }
    });
}

function download_file(file_name){
    var fileTransfer = new FileTransfer();
    console.log("About to start transfer:" + file_name);
    fileTransfer.download(url + file_name, "file:///storage/emulated/0/" + file_name,
        function(entry) {
            console.log("Success!");
        },
        function(err) {
            console.log("Error");
            console.dir(err);
        }
    );
}
