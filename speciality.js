var txtOfImg=document.querySelectorAll(".onClickTextOfImg div")
var prevtxtOfImg;
for(var i=0;i<txtOfImg.length;i++){
    txtOfImg[i].onclick=function(){
        var classes=this.classList;
        if(classes.contains("show")){
            classes.remove("show");
        }
        else{
            if(prevtxtOfImg!=null)
            prevtxtOfImg.classList.remove("show");
            prevtxtOfImg=this;
            classes.add("show");
        }
       
    }   
}