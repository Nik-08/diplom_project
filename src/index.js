import "@babel/polyfill";
import 'nodelist-foreach-polyfill';
import elementClosest from 'element-closest';
elementClosest(window);

import dropMenu from './modules/dropMenu';
import textModal from './modules/textModal';
import callbackForm from './modules/callbackForm';




//dropMenu
dropMenu();
//textModal
textModal();
//callbackForm
callbackForm();