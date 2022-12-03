function func() {
    const wrapper = document.querySelector(".wrapper");
    const right_container = document.querySelector('.right-container');
    const header = document.querySelector('header');
    const hamburger = document.querySelector('.hamburger');
    if (wrapper.classList == ('wrapper')) {
        wrapper.classList.add('active');
        right_container.style.width = '100%';
        header.style.width = '100%';
        hamburger.style.left = '-25px';
        hamburger.style.top = '70%';
        hamburger.addEventListener('mouseenter', () => {
            if (hamburger.style.left == '-25px') {
                hamburger.style.left = '5px'
            }
        });
        hamburger.addEventListener('mouseleave', () => {
            if (hamburger.style.left == '5px') {
                hamburger.style.left = '-25px'
            }
        });
    } else if (wrapper.classList == ('wrapper active')) {
        wrapper.classList.remove('active');
        right_container.style.width = '87%'
        header.style.width = '87%';
        hamburger.style.left = '227px';
        hamburger.style.top = '5px';

    }

}


/*function active() {
    document.querySelector('.menuItems').classList.remove('.active');
    if (document.querySelector('.menuItems'). =('.menuItems .active')) {
        return
    } else {
        document.querySelector('.menuItems').classList.add('.active');
    }
}
*/
let obj = document.querySelectorAll('.menuItems');

function active() {
    obj.forEach(objs => {
        objs.classList.remove('active');
        objs.addEventListener('click', () => {
            objs.classList.add('active')
        })
    });
}

function homefunc() {
    document.querySelector('.left-container').style.background = '#355070';
}

function profilefunc() {
    document.querySelector('.left-container').style.background = '#70223e';
}

function messagefunc() {
    document.querySelector('.left-container').style.background = '#df713e';
}
function historyfunc() {
    document.querySelector('.left-container').style.background = '#5516b9';
}
function tasksfunc() {
    document.querySelector('.left-container').style.background = '#a74534';
}
function commfunc() {
    document.querySelector('.left-container').style.background = '#553e6b';

}
function setfunc() {
    document.querySelector('.left-container').style.background = '#727170';
}
function supfunc() {
    document.querySelector('.left-container').style.background = '#383b3a';
}
function privfunc() {
    document.querySelector('.left-container').style.background = '#383b3a';

}