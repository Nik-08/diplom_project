import "@babel/polyfill";
import 'nodelist-foreach-polyfill';
import elementClosest from 'element-closest';
elementClosest(window);

import dropMenu from './modules/dropMenu';
import textModal from './modules/textModal';
import callbackForm from './modules/callbackForm';
import giftModal from './modules/giftModal';
import burgerMenu from './modules/burgerMenu';
import toTop from './modules/toTop';
import headSlider from './modules/headSlider';
import gallerySlider from './modules/gallerySlider';
import sendForm from './modules/sendForm';
import servicesSlider from './modules/servicesSlider';
import calc from "./modules/calc";



//dropMenu
dropMenu();
//textModal
textModal();
//callbackForm
callbackForm();
//giftModal
giftModal();
//burgerMenu
burgerMenu();
//toTop
toTop();
//headerSlider
headSlider();
//gallerySlider
gallerySlider();
//sendForm
sendForm();
//servicesSlider
servicesSlider();
//calc
calc();