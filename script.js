document.addEventListener('DOMContentLoaded', function() {
    const imageGallery = document.getElementById('imageGallery');
    const imageFolder = 'assets/images/photogrid'; // Path to the images folder

    // List of images (update this manually or use a server-side script to generate this list)
    const max = 409;
    let num = 0;
    const images = [];
    while (num < max) {
        num = num + 1;
        images.push(num.toString() + ".JPG");
    }
    
    // Function to handle image loading
    function loadImage(imageSrc) {
        return new Promise((resolve, reject) => {
            const imgElement = document.createElement('img');
            imgElement.src = imageSrc;
            imgElement.alt = imageSrc;
            imgElement.style.width = '200px'; // Adjust the size as needed
            imgElement.style.margin = '5px';
            
            imgElement.onload = () => resolve(imgElement);
            imgElement.onerror = () => reject();
        });
    }
    
    // Loop through the image list and load images
    images.forEach(image => {
        const imageSrc = imageFolder + "/" + image;
        
        loadImage(imageSrc)
            .then(imgElement => imageGallery.appendChild(imgElement))
            .catch(() => {
                console.log(`Image not found: ${imageSrc}`); // Log the error or handle it as needed
            });
    });
});
