const main = document.getElementById('main');

const externalHTML = `<img src='media/dl.png' onerror='alert("Error loading image")'>`;

main.innerHTML = externalHTML;

function changeSource(){
    document.getElementById("event_change").src = "media/12.png";
}
