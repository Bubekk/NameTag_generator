function fillFunction() {
    let companyName = document.getElementById('company_name').value;
    let companyEmail = document.getElementById('mail_address').value;
    let companyTel = document.getElementById('tel').value;
    let companyAddress =  document.getElementById('address').value;

/* Funkcja for poniżej iteruję przez tabele klasy zmieniająć wszystkie jej elementy
o tej samej klasie na tekst wpisany w formularzu. 
Można wpisać wszyskie elementy po kolei np:
    document.getElementsByClassName('comp_header')[0].innerHTML = companyName;
    document.getElementsByClassName('comp_header')[1].innerHTML = companyName;
    document.getElementsByClassName('comp_header')[2].innerHTML = companyName; */

    let headL = document.getElementsByClassName('comp_header').length;
    let head = document.getElementsByClassName('comp_header');
    for (let a = 0; a < headL; a++) {
        head[a].innerHTML = companyName;
    }

    let emailL = document.getElementsByClassName('email_address').length;
    let email = document.getElementsByClassName('email_address');
    for (let b = 0; b < emailL; b++) {
        email[b].innerHTML = companyEmail;
    }

    let telL = document.getElementsByClassName('tel_num').length;
    let tel = document.getElementsByClassName('tel_num');
    for (let c = 0; c < telL; c++) {
        tel[c].innerHTML = companyTel;
    }

    let addressL = document.getElementsByClassName('comp_address').length;
    let address = document.getElementsByClassName('comp_address');
    for (let d = 0; d < addressL; d++) {
        address[d].innerHTML = companyAddress;
    }
}


/* Ta funkcja pozwala nam zmienić layout wizytówki za pomocą input radio */
function changeLayout() {
    let radioOne = document.getElementById('opt');
    let radioTwo = document.getElementById('opt1');
    let radioThree = document.getElementById('opt2');

    let cardOne = document.getElementById('card');
    let cardTwo = document.getElementById('card1');
    let cardThree = document.getElementById('card2');

    let cardOneLayout = window.getComputedStyle(cardOne);
    let cardTwoLayout = window.getComputedStyle(cardTwo);
    let cardThreeLayout = window.getComputedStyle(cardThree);


    if (radioOne.checked) {
        cardOne.style.display = 'block'
        cardTwo.style.display = 'none';
        cardThree.style.display = 'none';
    } else if (radioTwo.checked) {
        cardOne.style.display = 'none';
        cardTwo.style.display = 'block';
        cardThree.style.display = 'none';
    } else if (radioThree.checked) {
        cardOne.style.display = 'none';
        cardTwo.style.display = 'none';
        cardThree.style.display = 'block';
    } 
}

/* Ta funkcja pozwala nam zmienić kolory wizytówki. 
Bezsensowne powtórzenie kodu przez to, że chyba nie można zagnieżdżać for w if */
function changeColors() {
    let radioOne = document.getElementById('col');
    let radioTwo = document.getElementById('col1');
    let radioThree = document.getElementById('col2');

    let bgStyle = document.getElementById('card');
    let bgStyle1 = document.getElementById('card1');
    let bgStyle2 = document.getElementById('card2');

    let gradientOne = 'conic-gradient(from 270deg at 10% 80%, #06081f, #001f3c, #003559, #004c72, #006486, #007d90, #009691, #00af89, #00c779, #46dc62, #98f045, #e1ff1f)';
    let gradientTwo = 'conic-gradient(from 15deg at 10% 80%, #1f005c, #48005f, #680060, #830060, #9c155f, #b22c5e, #c5415d, #d5585c, #e36e5c, #ef865e, #f89d63, #ffb56b)';
    let gradientThree = 'conic-gradient(from 15deg at 10% 80%, #182380, #451e84, #651484, #810082, #9b007d, #b20075, #c6006b, #d8005e, #e70051, #f20041, #fa1d2f, #ff3e17)';

    if (radioOne.checked) {
        bgStyle.style.backgroundImage = gradientOne;
        bgStyle1.style.backgroundImage = gradientOne;
        bgStyle2.style.backgroundImage = gradientOne;
    } else if (radioTwo.checked) {
        bgStyle.style.backgroundImage = gradientTwo;
        bgStyle1.style.backgroundImage = gradientTwo;
        bgStyle2.style.backgroundImage = gradientTwo;
    } else if (radioThree.checked) {
        bgStyle.style.backgroundImage = gradientThree;
        bgStyle1.style.backgroundImage = gradientThree;
        bgStyle2.style.backgroundImage = gradientThree;
    }
}