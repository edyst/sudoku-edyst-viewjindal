const inputsAll=document.querySelectorAll('input');


function easy(){
    document.getElementById('easy-btn').disabled=true;
    inputsAll.forEach(input => {
        input.value='';
        input.disabled=false;
    });
    easySetup();

    document.getElementById('medium-btn').disabled=false;
    document.getElementById('hard-btn').disabled=false;
}
function easySetup(){
    document.getElementById('c00').value=9;
    document.getElementById('c00').disabled=true;
    document.getElementById('c06').value=8;
    document.getElementById('c06').disabled=true;
    document.getElementById('c16').value=9;
    document.getElementById('c16').disabled=true;
    document.getElementById('c17').value=4;
    document.getElementById('c17').disabled=true;
    document.getElementById('c25').value=9;
    document.getElementById('c25').disabled=true;
    document.getElementById('c26').value=3;
    document.getElementById('c26').disabled=true;
    document.getElementById('c27').value=6;
    document.getElementById('c27').disabled=true;
    document.getElementById('c28').value=7;
    document.getElementById('c28').disabled=true;
    document.getElementById('c30').value=7;
    document.getElementById('c30').disabled=true;
    document.getElementById('c31').value=1;
    document.getElementById('c31').disabled=true;
    document.getElementById('c32').value=2;
    document.getElementById('c32').disabled=true;
    document.getElementById('c34').value=9;
    document.getElementById('c34').disabled=true;
    document.getElementById('c36').value=4;
    document.getElementById('c36').disabled=true;
    document.getElementById('c37').value=3;
    document.getElementById('c37').disabled=true;
    document.getElementById('c38').value=6;
    document.getElementById('c38').disabled=true;
    document.getElementById('c43').value=2;
    document.getElementById('c43').disabled=true;
    document.getElementById('c45').value=7;
    document.getElementById('c45').disabled=true;
    document.getElementById('c47').value=1;
    document.getElementById('c47').disabled=true;
    document.getElementById('c50').value=6;
    document.getElementById('c50').disabled=true;
    document.getElementById('c51').value=5;
    document.getElementById('c51').disabled=true;
    document.getElementById('c52').value=9;
    document.getElementById('c52').disabled=true;
    document.getElementById('c53').value=3;
    document.getElementById('c53').disabled=true;
    document.getElementById('c54').value=4;
    document.getElementById('c54').disabled=true;
    document.getElementById('c55').value=1;
    document.getElementById('c55').disabled=true;
    document.getElementById('c56').value=2;
    document.getElementById('c56').disabled=true;
    document.getElementById('c58').value=8;
    document.getElementById('c58').disabled=true;
    document.getElementById('c60').value=2;
    document.getElementById('c60').disabled=true;
    document.getElementById('c61').value=6;
    document.getElementById('c61').disabled=true;
    document.getElementById('c62').value=5;
    document.getElementById('c62').disabled=true;
    document.getElementById('c63').value=1;
    document.getElementById('c63').disabled=true;
    document.getElementById('c65').value=4;
    document.getElementById('c65').disabled=true;
    document.getElementById('c66').value=7;
    document.getElementById('c66').disabled=true;
    document.getElementById('c67').value=9;
    document.getElementById('c67').disabled=true;
    document.getElementById('c68').value=3;
    document.getElementById('c68').disabled=true;
    document.getElementById('c83').value=9;
    document.getElementById('c83').disabled=true;

}


function medium(){
    document.getElementById('medium-btn').disabled=true;

    inputsAll.forEach(input => {
        input.value='';
        input.disabled=false;
    });
    mediumSetup();

    document.getElementById('easy-btn').disabled=false;
    document.getElementById('hard-btn').disabled=false;
}
function mediumSetup(){
    document.getElementById('c03').value=3;
    document.getElementById('c03').disabled=true;
    document.getElementById('c04').value=4;
    document.getElementById('c04').disabled=true;
    document.getElementById('c07').value=9;
    document.getElementById('c07').disabled=true;
    document.getElementById('c12').value=5;
    document.getElementById('c12').disabled=true;
    document.getElementById('c17').value=4;
    document.getElementById('c17').disabled=true;
    document.getElementById('c18').value=6;
    document.getElementById('c18').disabled=true;
    document.getElementById('c20').value=8;
    document.getElementById('c20').disabled=true;
    document.getElementById('c22').value=4;
    document.getElementById('c22').disabled=true;
    document.getElementById('c23').value=5;
    document.getElementById('c23').disabled=true;
    document.getElementById('c25').value=9;
    document.getElementById('c25').disabled=true;
    document.getElementById('c31').value=5;
    document.getElementById('c31').disabled=true;
    document.getElementById('c33').value=4;
    document.getElementById('c33').disabled=true;
    document.getElementById('c36').value=6;
    document.getElementById('c36').disabled=true;
    document.getElementById('c41').value=4;
    document.getElementById('c41').disabled=true;
    document.getElementById('c47').value=5;
    document.getElementById('c47').disabled=true;
    document.getElementById('c55').value=5;
    document.getElementById('c55').disabled=true;
    document.getElementById('c56').value=4;
    document.getElementById('c56').disabled=true;
    document.getElementById('c60').value=4;
    document.getElementById('c60').disabled=true;
    document.getElementById('c61').value=2;
    document.getElementById('c61').disabled=true;
    document.getElementById('c64').value=5;
    document.getElementById('c64').disabled=true;
    document.getElementById('c66').value=9;
    document.getElementById('c66').disabled=true;
    document.getElementById('c70').value=5;
    document.getElementById('c70').disabled=true;
    document.getElementById('c78').value=4;
    document.getElementById('c78').disabled=true;
    document.getElementById('c81').value=1;
    document.getElementById('c81').disabled=true;
    document.getElementById('c84').value=3;
    document.getElementById('c84').disabled=true;
    document.getElementById('c85').value=4;
    document.getElementById('c85').disabled=true;
}


function hard(){
    document.getElementById('hard-btn').disabled=true;

    inputsAll.forEach(input => {
        input.value='';
        input.disabled=false;
    });
    hardSetup();

    document.getElementById('easy-btn').disabled=false;
    document.getElementById('medium-btn').disabled=false;
}
function hardSetup(){
    document.getElementById('c02').value=4;
    document.getElementById('c02').disabled=true;
    document.getElementById('c05').value=7;
    document.getElementById('c05').disabled=true;
    document.getElementById('c10').value=2;
    document.getElementById('c10').disabled=true;
    document.getElementById('c15').value=5;
    document.getElementById('c15').disabled=true;
    document.getElementById('c22').value=8;
    document.getElementById('c22').disabled=true;
    document.getElementById('c25').value=2;
    document.getElementById('c25').disabled=true;
    document.getElementById('c33').value=2;
    document.getElementById('c33').disabled=true;
    document.getElementById('c34').value=7;
    document.getElementById('c34').disabled=true;
    document.getElementById('c47').value=6;
    document.getElementById('c47').disabled=true;
    document.getElementById('c48').value=2;
    document.getElementById('c48').disabled=true;
    document.getElementById('c51').value=2;
    document.getElementById('c51').disabled=true;
    document.getElementById('c52').value=9;
    document.getElementById('c52').disabled=true;
    document.getElementById('c54').value=8;
    document.getElementById('c54').disabled=true;
    document.getElementById('c68').value=7;
    document.getElementById('c68').disabled=true;
    document.getElementById('c74').value=2;
    document.getElementById('c74').disabled=true;
    document.getElementById('c85').value=3;
    document.getElementById('c85').disabled=true;
    document.getElementById('c86').value=6;
    document.getElementById('c86').disabled=true;
}

//validate call
inputsAll.forEach(input => input.oninput=validate ); //attching oninput to all inputs
function validate(e){
    const classes=e.target.classList;
    const value=e.target.value;
    const rowElements=document.querySelectorAll('.'+CSS.escape(classes[0]));
    const colElements=document.querySelectorAll('.'+CSS.escape(classes[1]));
    const boxElements=document.querySelectorAll('.'+CSS.escape(classes[2]));
    if(value>0 && value<10){
        rowElements.forEach(ele => {
            if(ele.value==value && ele!=e.target){
                e.target.value='';
                alert(`Value already present in ${classes[0]}`);
            }
        });
        colElements.forEach(ele => {
            if(ele.value==value && ele!=e.target){
                e.target.value='';
                alert(`Value already present in ${classes[1]}`);
            }
        });
        boxElements.forEach(ele => {
            if(ele.value==value && ele!=e.target){
                e.target.value='';
                alert(`Value already present in ${classes[2]}`);
            }
        });
    }
    else if(value==''){}
    else{
        e.target.value='';
        alert("Enter a Number between 1 and 9 only!");
    }
}

function validateAll(){ alert(`Game State is valid :)`); }

//highlighting call
inputsAll.forEach(input => input.onfocus=highlight ); // attaching onfocus event to all inputs
function highlight(e){
    const classes=e.target.classList;
    const rowElements=document.querySelectorAll('.'+CSS.escape(classes[0]));
    const colElements=document.querySelectorAll('.'+CSS.escape(classes[1]));
    const boxElements=document.querySelectorAll('.'+CSS.escape(classes[2]));
    rowElements.forEach(ele => {
        if(ele.disabled==false){ 
            ele.style.backgroundColor='#a2c523';
            ele.style.color='#fff';
        }
    });
    colElements.forEach(ele => {
        if(ele.disabled==false){ 
            ele.style.backgroundColor='#a2c523';
            ele.style.color='#fff';
        }
    });
    boxElements.forEach(ele => {
        if(ele.disabled==false) {
            ele.style.backgroundColor='#486b00';
            ele.style.color='#fff';
        }
    });
    if(e.target.disabled==false){
        e.target.style.backgroundColor='#2e4600';
        e.target.style.color='#fff';
    }
}

//Anti-Highlighting Call
inputsAll.forEach( input => input.onblur=antihighlight ); //attaching onblur to all inputs
function antihighlight(e){
    const classes=e.target.classList;
    const rowElements=document.querySelectorAll('.'+CSS.escape(classes[0]));
    const colElements=document.querySelectorAll('.'+CSS.escape(classes[1]));
    const boxElements=document.querySelectorAll('.'+CSS.escape(classes[2]));
    rowElements.forEach(ele => {
        if(ele.disabled==false) {
            ele.style.backgroundColor='initial';
            ele.style.color='initial';
        }
    });
    colElements.forEach(ele => {
        if(ele.disabled==false) {
            ele.style.backgroundColor='initial';
            ele.style.color='initial';
        }
    });
    boxElements.forEach(ele => {
        if(ele.disabled==false) {
            ele.style.backgroundColor='initial';
            ele.style.color='initial';
        }
    });
    if(e.target.disabled==false) {
        e.target.style.backgroundColor='initial';
        e.target.style.color='initial';
    }
}

window.onload=easy();