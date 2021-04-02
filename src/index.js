import './style.scss';
import {Api} from './Api';
import {Controller} from './Controller'
import {View} from './View';
import {Model} from './Model';
import {Statistic} from './Statistic';
window.onload = function() {
  View.init()
  Controller.init();
  Model.init();
  Statistic.init()
}