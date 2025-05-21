const linkExterno = document.querySelectorAll('a[title="Google Maps"]');


//linkExterno.onclick = () => {
  //alert('Você será redirecionado para um link externo');
//}

linkExterno.forEach(link => {
    link.addEventListener('click', function(e) {
        const option = confirm('Você será redirecionado para um link externo');
        if (option === false) {
            e.preventDefault();
        }
    });
});