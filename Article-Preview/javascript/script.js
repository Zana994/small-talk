
var shareButton = document.getElementById("share");
var socialdiv = document.querySelector('[social-data]');
socialdiv.style.display = 'none';

shareButton.addEventListener('click', function() {
    if(socialdiv.style.display === 'none') { 
        socialdiv.style.display = 'flex';
        shareButton.className = shareButton.className.replace("shareStyle", "newStyle");
    } else {
        socialdiv.style.display = 'none';
        shareButton.className = shareButton.className.replace("newStyle", "shareStyle");
    }
});

