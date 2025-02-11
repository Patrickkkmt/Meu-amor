document.addEventListener('DOMContentLoaded', function() {  
            const gallery = document.getElementById('photoGallery');  
            const prevBtn = document.getElementById('prevBtn');  
            const nextBtn = document.getElementById('nextBtn');  
            
            let currentIndex = 0;  
            const images = gallery.querySelectorAll('img');  
            const imageWidth = images[0].offsetWidth + 20; // Largura + gap  

            nextBtn.addEventListener('click', () => {  
                if (currentIndex < images.length - 1) {  
                    currentIndex++;  
                    gallery.style.transform = `translateX(-${currentIndex * imageWidth}px)`;  
                }  
            });  

            prevBtn.addEventListener('click', () => {  
                if (currentIndex > 0) {  
                    currentIndex--;  
                    gallery.style.transform = `translateX(-${currentIndex * imageWidth}px)`;  
                }  
            });  
        });
