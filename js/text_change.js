document.addEventListener('DOMContentLoaded', function(){
    console.log(document.getElementById('tim').innerText);
    changeText();
});

function changeText(){
    document.getElementById("tim").innerText = "changed text";
}