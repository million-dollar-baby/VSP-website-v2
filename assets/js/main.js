function initialize() {

    OSCheck();
    
}
function OSCheck () {
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
        $('#logo').fadeOut("fast", function(){
                                $('#photos').html('');
                                loadImagesMobile();
                                $('#galleryImg').css('visibility', 'hidden');
                                });
        $('#container').fadeIn("slow");
    } else {
        $('#container').fadeOut("fast", function(){
                                $('#photos').html('');
                                loadImages();
                                });
        $('#container').fadeIn("slow");
    }
}






function OSCheck () {
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
        $('#container').fadeOut("fast", function(){
                                $('#photos').html('');
                                loadImagesMobile();
                                $('#galleryImg').css('visibility', 'hidden');
                                });
        $('#container').fadeIn("slow");
    } else {
        $('#container').fadeOut("fast", function(){
                                $('#photos').html('');
                                loadImages();
                                });
        $('#container').fadeIn("slow");
    }
}









function loadImages() {
    var t = 100; //Change this to Number of Images in the folder
    var i = 0;
    for(var i=0; i<t;i++){
        $('#photos').append('<a href="#text"><div id="img-container" style="background-image: url(images/' + i + '.jpg); background-size:cover;background-position: center;"><div id="galleryImg"><img class="gallery-img" id="' + i + '" onmouseleave="hideInfo(' + i + ')"  onmouseover="showInfo(' + i +')" onmousedown="showImg(' + i + ')" src="images/' + i + 'bg.png" onError="this.remove();" style="opacity: 0;"/></div></div></a>');
    }
}

function loadImagesMobile() {
    var t = 100; //Change this to Number of Images in the folder
    var i = 0;
    for(var i=0; i<t;i++){
        $('#photos').append('<a href="#text"><div id="img-container" style="background-image: url(images/mobile/' + i + '.jpg); background-size:cover;background-position: center;"><div id="galleryImgMobile"><img class="gallery-img" id="' + i + '" src="images/mobile/' + i + 'bg.png" onmousedown="showImg(' + i + ')" onError="this.remove();" style="opacity: 1;"/></div></div></a>');
    }
}

function showInfo(id) {
    var divID = '#' + id;
    
    $(divID).animate({opacity: 1}, 100);
}

getElementById('img-container').addEventListener("mouseleave", hideInfo);

function hideInfo(id) {
    var divID = '#' + id;
    $(divID).animate({opacity: 0}, 300);
}

function showImg(id) {
    $('#container').fadeOut("fast", function() {
                            $('#album-viewer').css('height', 'auto');
                            /*$('#text').html('<img style="max-width: 100%;" src="images/'+ id +'/text.jpg" onError="this.remove();"/>');*/
                            $('#images').html('');
                            
                            var t = 300; //Change this to Number of Images in the folder
                            var i = 1;
                            for(var i=1; i<t;i++){
                            $('#images').append('<div id="image' + i +'" class="centerImg" style="margin-bottom: 2px; background-image: url(images/' + id + '/' + i +'.jpg); background-size:contain;background-position: center;background-repeat: no-repeat;"><img width="100%" style="max-width:800px; max-height:800px; opacity: 0;" src="images/' + id + '/copyright/' + i +' copy.jpg" onError="this.remove();"/></div>');
                            }
                            
                            if(document.readyState === 'loading') {
        $('#loader').css('visibility', 'visible');
    }
                            
                            });
    $('#container').fadeIn("slow");
}
