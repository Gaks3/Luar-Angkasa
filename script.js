var clickImgRight = document.querySelector('.right');
var clickImgCenter = document.querySelector('.center');
var clickImgLeft = document.querySelector('.left');
clickImgRight.style.right('-150px');
clickImgRight.addEventListener('click', () => {
    clickImgCenter.style.justifySelf('');
    clickImgRight.style.right('')
    clickImgRight.style.justifySelf('center');
    clickImgCenter.style.left('-150px');
    clickImgLeft.style.right('-150px')
}); 
