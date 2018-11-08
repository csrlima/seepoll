
var base_url = "http://xmpp.radiomarketbeat.com/resources_mobile/";
var key_value = "c526bef2-cc7d-48fc-830d-3c094788a942"
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

// $(document).ready(function(){
//
// })
add_slide_nodes();
add_slide_nodes();

function add_slide_nodes() {
    $('.slides').append'<div><img data-u="image" src="" /></div>'
}




document.addEventListener("deviceready", function() {
    console.log('ready listener')
    var url = 'http://xmpp.radiomarketbeat.com/plataforma/assets/lnImagenes/';
    prepare_url(url, 'useeupoll001.jpg')
    prepare_url(url, 'useeupoll002.jpg')
}, false);

///FUNCIONES PERSONALIZADAS
function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
        vars[key] = value;
    });
    return vars;
}


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
            // console.log("Successful download...");
            console.log("download complete: " + entry.toURL());
            // if (readBinaryData) {
            //   readBinaryFile(entry);
            // }
            // else {
            //   displayImageByFileURL(entry);
            // }
        },
        function (error) {
            console.log("download error source " + error.source);
            console.log("download error target " + error.target);
            console.log("upload error code" + error.code);
        },
        null, // or, pass false
        {
            //headers: {
            //    "Authorization": "Basic dGVzdHVzZXJuYW1lOnRlc3RwYXNzd29yZA=="
            //}
        }
    );
}
//
// function displayImageByFileURL(fileEntry) {
//     console.log(fileEntry.toURL())
//     var elem = document.getElementById('demoimg');
//     elem.src = fileEntry.toURL();
// }

// function readBinaryFile(fileEntry) {
//     fileEntry.file(function (file) {
//         var reader = new FileReader();
//
//         reader.onloadend = function() {
//
//             console.log("Successful file read: " + this.result);
//             // displayFileData(fileEntry.fullPath + ": " + this.result);
//
//             var blob = new Blob([new Uint8Array(this.result)], { type: "image/png" });
//             displayImage(blob);
//         };
//
//         reader.readAsArrayBuffer(file);
//
//     }, onErrorReadFile);
// }

// function displayImage(blob) {
//
//     // Note: Use window.URL.revokeObjectURL when finished with image.
//     var objURL = window.URL.createObjectURL(blob);
//
//     // Displays image if result is a valid DOM string for an image.
//     var elem = document.getElementById('demoimg');
//     elem.src = objURL;
// }

function onErrorCreateFile() {
    console.log("Create file fail...");
}
function onErrorLoadFs() {
    console.log("File system fail...");
}
// function onErrorReadFile() {
//     console.log("File read fail...");
// }













///PLUGIN DE SLIDESHOW
jssor_1_slider_init = function() {
    var jssor_1_options = {
        $FillMode: 2,
        $AutoPlay: 1,
        $Idle: 4000,
        $PauseOnHover: 1,
        $SlideEasing: $Jease$.$OutQuint,
        $SlideDuration: 800,
        $MinDragOffsetToSlide: 20
    };
    var jssor_1_slider = new $JssorSlider$("jssor_1", jssor_1_options);
    jssor_1_slider.$Elmt.style.margin = "";
    var MAX_WIDTH = 3000;
    var MAX_HEIGHT = 3000;
    var MAX_BLEEDING = 0.128;

    function ScaleSlider() {
        var containerElement = jssor_1_slider.$Elmt.parentNode;
        var containerWidth = containerElement.clientWidth;
        if (containerWidth) {
            var originalWidth = jssor_1_slider.$OriginalWidth();
            var originalHeight = jssor_1_slider.$OriginalHeight();
            var containerHeight = containerElement.clientHeight || originalHeight;
            var expectedWidth = Math.min(MAX_WIDTH || containerWidth, containerWidth);
            var expectedHeight = Math.min(MAX_HEIGHT || containerHeight, containerHeight);
            jssor_1_slider.$ScaleSize(expectedWidth, expectedHeight, MAX_BLEEDING);
            jssor_1_slider.$Elmt.style.top = ((containerHeight - expectedHeight) / 2) + "px";
            jssor_1_slider.$Elmt.style.left = ((containerWidth - expectedWidth) / 2) + "px";
        }
        else {
            window.setTimeout(ScaleSlider, 30);
        }
    }

    function OnOrientationChange() {
        ScaleSlider();
        window.setTimeout(ScaleSlider, 800);
    }

    ScaleSlider();

    $Jssor$.$AddEvent(window, "load", ScaleSlider);
    $Jssor$.$AddEvent(window, "resize", ScaleSlider);
    $Jssor$.$AddEvent(window, "orientationchange", OnOrientationChange);
};
