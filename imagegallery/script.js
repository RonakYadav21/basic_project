function openmodal(imagesrc){
    var modal=document.getElementById('classmodal');
    var imgmodal=document.getElementById('modalimg');
    modal.style.display = "block";
    imgmodal.src=imagesrc;
}

function modalclose(){
    var closemodal=document.getElementById('classmodal');
    closemodal.style.display="none";
}