const range = document.querySelector('#font-size-control')
range.addEventListener('input', function(){
    text.style.fontSize = range.value + 'px';
})