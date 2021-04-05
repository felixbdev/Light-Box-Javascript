const images = document.querySelectorAll('.img');
const containerImage = document.querySelector('.container-img')
const imageShow = document.querySelector('.img-show'); 
const copy = document.querySelector('.copy');

images.forEach(image =>{
    image.addEventListener('click', () =>{
        addImage(image.getAttribute('src'), image.getAttribute('alt'))
    })
})

const addImage = (srcImage, altImage) => {
    containerImage.classList.toggle('move');
    imageShow.classList.toggle('show')
    imageShow.src = srcImage;
    copy.innerHTML = altImage;
}

containerImage.addEventListener('click', e =>{
    if(e.target.classList.contains('bx-x')||e.target.classList.contains('container-img')) 
    -containerImage.classList.toggle('move')
    imageShow.classList.toggle('show')
});