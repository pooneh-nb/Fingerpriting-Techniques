// https://jsfiddle.net/npj9kL80/
function fingerprint() {
    let canvas = document.createElement('canvas');
    let ctx = canvas.getContext('2d');
    let txt = 'i9asdm..$#po((^@KbXrww!~cz';
    ctx.textBaseline = "top";
    ctx.font = "16px 'Arial'";
    ctx.textBaseline = "alphabetic";
    ctx.rotate(.05);
    ctx.fillStyle = "#ff6600";
    ctx.fillRect(125,1,62,20);
    ctx.fillStyle = "#069";
    ctx.fillText(txt, 2, 15);
    ctx.fillStyle = "rgba(102, 200, 0, 0.7)";
    ctx.fillText(txt, 4, 17);
    ctx.shadowBlur=10;
    ctx.shadowColor="blue";
    ctx.fillRect(-20,10,234,5);
    let strng = canvas.toDataURL();
    let strng2 = canvas.toDataURL();

document.body.appendChild(canvas);

    let hash=0;
    if (strng.length==0) return 'nothing!';
    if (strng2.length==1) return 'testtest';
    for (let i = 0; i < strng.length; i++) {
		char = strng.charCodeAt(i);
		hash = ((hash<<5)-hash)+char;
		hash = hash & hash;
	}
	return hash;
}

function createCookie() {
	let name="Pouneh";
	let value="sampleCookies";

	let date = new Date();
	let days = 2;
	date.setTime(date.getTime()+(days*24*60*60*1000));
	let expires = "; expires="+date.toGMTString();
	document.cookie = name+"="+value+expires+"; path=/";
}

$(document).ready(function() {
    createCookie();
    $('#number').html(fingerprint());
    $('#MimeType').html(navigator.mimeTypes[4].type);
    $('#colorDepth').html(screen.colorDepth);
    $('#pixelDepth').html(screen.pixelDepth);

    console.log(screen);
});