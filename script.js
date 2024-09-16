// we can use 

// style  methods 
// classList (add, remove) classes  



var body = document.querySelector('body');
var btn = document.getElementById('btn');


function them() {
    if (btn.innerText === 'Dark') {
        body.classList.add('them');
        btn.innerText = 'Light';

    }

    else if (btn.innerText === 'Light') {
        body.classList.remove('them');
        btn.innerText = "Dark";
    }

    else {
        console.log("Not Working!");
    }
}