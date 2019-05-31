if (window.matchMedia("(min-width: 800px)").matches) {
var banner = [
["https://www.lojadosomautomotivo.com.br/?ref=bcarro", "https://cdn.statically.io/img/i.imgur.com/V4UXQCt.jpg"]
]; 
function shuffle(a) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a;
} 
shuffle(banner); 
document.getElementById('ad-container').innerHTML = '<br><a href="'+banner[0][0]+'" target="_blank" rel="nofollow noopener"><img src="'+banner[0][1]+'" height="90" width="728" alt="728x90 Banner Ad" /></a><br><br>';
} else {
var banner = [
["https://www.lojadosomautomotivo.com.br/?ref=bcarro", "https://cdn.statically.io/img/i.imgur.com/uuVXCUD.jpg"]
]; 
function shuffle(a) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a;
} 
shuffle(banner); 
document.getElementById('ad-container').innerHTML = '<br><a href="'+banner[0][0]+'" target="_blank" rel="nofollow noopener"><img src="'+banner[0][1]+'" height="250" width="300" alt="300x250 Banner Ad" /></a><br><br>';
}
