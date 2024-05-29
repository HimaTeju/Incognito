document.addEventListener('DOMContentLoaded', function() {
    var video = document.querySelector('.video');
    var loader = document.getElementById('loader');

    // Show loader while the video is loading
    video.addEventListener('loadeddata', function() {
        loader.style.display = 'none';
    });

    // Hide loader when the video is fully loaded (in case of slow connections)
    video.addEventListener('canplaythrough', function() {
        loader.style.display = 'none';
    });

    // Show loader initially
    loader.style.display = 'block';
});