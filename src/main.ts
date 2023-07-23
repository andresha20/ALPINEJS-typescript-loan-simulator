import './style.css'
import Alpine from 'alpinejs'
import { PageContext } from './components/layout/pageContext.ts';
import { simulatorContext } from './components/global/simulatorContext.ts';

window.Alpine = Alpine;

Alpine.data('simulatorContext', simulatorContext);
Alpine.data('pageContext', PageContext);
Alpine.start();