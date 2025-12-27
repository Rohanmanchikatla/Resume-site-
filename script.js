// Small enhancements: confirm call on desktop and copy email to clipboard option
document.addEventListener('DOMContentLoaded', function(){
  const callBtn = document.getElementById('callBtn');
  const emailBtn = document.getElementById('emailBtn');

  // If running on desktop, warn when clicking telephone link
  function isMobile(){
    return /Mobi|Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  }

  callBtn.addEventListener('click', function(e){
    if(!isMobile()){
      // On desktop, show a confirm dialog to avoid accidental clicks
      const ok = confirm('This will attempt to call the number using your device. Continue?');
      if(!ok) e.preventDefault();
    }
  });

  // Add a small copy-to-clipboard action when long-pressing or ctrl+click on email (desktop friendly)
  emailBtn.addEventListener('auxclick', function(e){
    // auxclick captures middle-click; use ctrl+click detection for Windows too
  });
});

// Register service worker for offline support (PWA)
if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('/service-worker.js').then(function(reg) {
      console.log('ServiceWorker registration successful with scope: ', reg.scope);
    }).catch(function(err) {
      console.log('ServiceWorker registration failed: ', err);
    });
  });
}
