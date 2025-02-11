document.addEventListener('DOMContentLoaded', function() {  
  const gallery = document.querySelector('.photo-gallery');  
  const leftBtn = document.querySelector('.nav-left');  
  const rightBtn = document.querySelector('.nav-right');  
  
  let currentScroll = 0;  
  const scrollAmount = 300;  

  rightBtn.addEventListener('click', function() {  
    currentScroll += scrollAmount;  
    gallery.scrollTo({  
      left: currentScroll,  
      behavior: 'smooth'  
    });  
  });  

  leftBtn.addEventListener('click', function() {  
    currentScroll -= scrollAmount;  
    if (currentScroll < 0) currentScroll = 0;  
    gallery.scrollTo({  
      left: currentScroll,  
      behavior: 'smooth'  
    });  
  });  
});
