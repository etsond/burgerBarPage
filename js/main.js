'use strict';

// Menu Toggle
const menuToggle = document.querySelector('.menu-toggle');
const menuBurger = document.querySelector('.menu-burger'); 
const menuList = document.querySelector('.menu-list'); 

// event listener
menuToggle.addEventListener('click', () => {
  menuBurger.classList.toggle('active'); 
  menuList.classList.toggle('active'); 
  console.log('Menu Toggle');
});
