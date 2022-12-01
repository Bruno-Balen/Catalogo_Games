
    function search_objeto(){
        let input = document.getElementById('searchbar').value 
        input = input.tolowerCase();
        let x = document.getElementsByClassName('searchObjeto');

        for (i = 0; i < x.length; i++) {

            if(!x[i].innerHTML.toLowerCase().includes(input)) {
                x[i].style.display = "nome";
            }

            else{
                x[i].style.display = "initial";
            }
        }
    }
    

    const dandoLike1 = document.querySelector('.curtida1');

    dandoLike1.addEventListener('click', function(){

        dandoLike1.classList.toggle('curtido1');
    });

    const dandoLike = document.querySelector('.curtida2');

    dandoLike.addEventListener('click', function(){

        dandoLike.classList.toggle('curtido2');
    });

    const dandoLike2 = document.querySelector('.curtida3');

    dandoLike2.addEventListener('click', function(){

        dandoLike2.classList.toggle('curtido3');
    });


    const dandoLike3 = document.querySelector('.curtida4');

    dandoLike3.addEventListener('click', function(){

        dandoLike3.classList.toggle('curtido4');
    });

    const dandoLike5 = document.querySelector('.curtida5');

    dandoLike5.addEventListener('click', function(){

        dandoLike5.classList.toggle('curtido5');
    });
    
    const dandoLike6 = document.querySelector('.curtida6');

    dandoLike6.addEventListener('click', function(){

        dandoLike6.classList.toggle('curtido6');
    });


    const dandoLike7 = document.querySelector('.curtida7');

    dandoLike7.addEventListener('click', function(){

        dandoLike7.classList.toggle('curtido7');
    });

    const dandoLike8 = document.querySelector('.curtida8');

    dandoLike8.addEventListener('click', function(){

        dandoLike8.classList.toggle('curtido8');
    });

    const dandoLike9 = document.querySelector('.curtida9');

    dandoLike9.addEventListener('click', function(){

        dandoLike9.classList.toggle('curtido9');
    });

    const dandoLike10 = document.querySelector('.curtida10');

    dandoLike10.addEventListener('click', function(){

        dandoLike10.classList.toggle('curtido10');
    });

    const dandoLike11 = document.querySelector('.curtida11');

    dandoLike11.addEventListener('click', function(){

        dandoLike11.classList.toggle('curtido11');
    });

    const dandoLike12 = document.querySelector('.curtida12');

    dandoLike12.addEventListener('click', function(){

        dandoLike12.classList.toggle('curtido12');
    });

    const dandoLike13 = document.querySelector('.curtida13');

    dandoLike13.addEventListener('click', function(){

        dandoLike13.classList.toggle('curtido13');
    });

    const dandoLike14 = document.querySelector('.curtida14');

    dandoLike14.addEventListener('click', function(){

        dandoLike14.classList.toggle('curtido14');
    });

    const dandoLike15 = document.querySelector('.curtida15');

    dandoLike15.addEventListener('click', function(){

        dandoLike15.classList.toggle('curtido15');
    });

    const dandoLike16 = document.querySelector('.curtida16');

    dandoLike16.addEventListener('click', function(){

        dandoLike16.classList.toggle('curtido16');
    });
 
    