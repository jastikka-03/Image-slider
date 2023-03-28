var slideimg=['images/img1.jpg','images/img2.jpeg','images/img3.jpg'];
var index=0;
var duration=1000;


function imgslide(){
    document.getElementById("img").src=slideimg[index];
    index++;

    if(index==slideimg.length){
        index=0;
    }
    setTimeout("imgslide()",duration);
}

imgslide()