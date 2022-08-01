console.log("iframe");
console.log(document.getElementById("frame1").src);
document.getElementById("frame1").src = "http://www.bbc.com";
console.log(document.getElementById("frame1").src);
console.log("");

console.log("image");
console.log(document.getElementById("img1").src);
document.getElementById("img1").src = "https://www.freeiconspng.com/thumbs/links-icon/links-icon-23.png";
console.log(document.getElementById("img1").src);
console.log("");

console.log("Audio tag");
console.log(document.getElementById("audio1").src);
document.getElementById("audio1").setAttribute('src', 'https://music.com/audio_changed.mp3');
console.log(document.getElementById("audio1").src);
console.log("");

console.log("Audio console");
console.log(document.getElementById("audio_src").src);
document.getElementById("audio_src").setAttribute('src', 'https://dls.music-fa.com/tagdl/1401/Reza%20Bahram%20-%20Leyla%20(128).mp3');
console.log(document.getElementById("audio_src").src);
console.log("");

console.log("anchor");
console.log(document.getElementById("anchor1").href);
document.getElementById("anchor1").href = "https://example.com/now-aisb-music.mp3";
console.log(document.getElementById("anchor1").href);
console.log("");

console.log("video console");
console.log(document.getElementById("video_src").src);
document.getElementById("video_src").setAttribute('src', "https://www.youtube.com/watch?v=sT1KpjKbsTk");
console.log(document.getElementById("video_src").src);
console.log("");

console.log("video tag");
console.log(document.getElementById("video_tag").src);
document.getElementById("video_tag").setAttribute('src', "https://www.video.com/a_changed.mpeg");
console.log(document.getElementById("video_tag").src);


