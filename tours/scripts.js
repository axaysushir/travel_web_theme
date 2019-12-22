// const menuBtn = document.querySelector('.nav-list');



// let showMenu = false;

// menuBtn.addEventListener('click', toggleMenu);

// function toggleMenu() {
//     if(!showMenu) {
//         menuBtn.classList.add('active');
//         showMenu = true;
//     } else {
//         menuBtn.classList.remove('active');
//         showMenu = false;
//     }
// }

$(document).ready(function() {
    $('#openSideBar').on('click', function(){
        $('.nav-list').addClass('active');
    });

    $('#closeSideBar').on('click', function(){
        $('.nav-list').removeClass('active');
    });
});



// const selectElement = (s) => document.querySelector(s);


// //open menu
// function selectElement('.open').addEventListner('click', () => {
//     selectElement('.nav-list').classList.add('active');
// });

// //close
// selectElement('.close').addEventListner('click', () => {
//     selectElement('.nav-list').classList.remove('active');
// });


