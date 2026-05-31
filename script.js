
  function showMessage(){
    const box = document.getElementById("messageBox");

    if(box.style.display === "block"){
        box.style.display = "none";
    }
    else{
        box.style.display = "block";
    }
}
