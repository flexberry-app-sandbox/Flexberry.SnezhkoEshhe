import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-snezhko-eshhe-бокс-l');
  this.route('i-i-s-snezhko-eshhe-бокс-e',
  { path: 'i-i-s-snezhko-eshhe-бокс-e/:id' });
  this.route('i-i-s-snezhko-eshhe-бокс-e.new',
  { path: 'i-i-s-snezhko-eshhe-бокс-e/new' });
  this.route('i-i-s-snezhko-eshhe-должность-l');
  this.route('i-i-s-snezhko-eshhe-должность-e',
  { path: 'i-i-s-snezhko-eshhe-должность-e/:id' });
  this.route('i-i-s-snezhko-eshhe-должность-e.new',
  { path: 'i-i-s-snezhko-eshhe-должность-e/new' });
  this.route('i-i-s-snezhko-eshhe-запись-l');
  this.route('i-i-s-snezhko-eshhe-запись-e',
  { path: 'i-i-s-snezhko-eshhe-запись-e/:id' });
  this.route('i-i-s-snezhko-eshhe-запись-e.new',
  { path: 'i-i-s-snezhko-eshhe-запись-e/new' });
  this.route('i-i-s-snezhko-eshhe-клиент-l');
  this.route('i-i-s-snezhko-eshhe-клиент-e',
  { path: 'i-i-s-snezhko-eshhe-клиент-e/:id' });
  this.route('i-i-s-snezhko-eshhe-клиент-e.new',
  { path: 'i-i-s-snezhko-eshhe-клиент-e/new' });
  this.route('i-i-s-snezhko-eshhe-марка-l');
  this.route('i-i-s-snezhko-eshhe-марка-e',
  { path: 'i-i-s-snezhko-eshhe-марка-e/:id' });
  this.route('i-i-s-snezhko-eshhe-марка-e.new',
  { path: 'i-i-s-snezhko-eshhe-марка-e/new' });
  this.route('i-i-s-snezhko-eshhe-материалы-l');
  this.route('i-i-s-snezhko-eshhe-материалы-e',
  { path: 'i-i-s-snezhko-eshhe-материалы-e/:id' });
  this.route('i-i-s-snezhko-eshhe-материалы-e.new',
  { path: 'i-i-s-snezhko-eshhe-материалы-e/new' });
  this.route('i-i-s-snezhko-eshhe-оплата-l');
  this.route('i-i-s-snezhko-eshhe-оплата-e',
  { path: 'i-i-s-snezhko-eshhe-оплата-e/:id' });
  this.route('i-i-s-snezhko-eshhe-оплата-e.new',
  { path: 'i-i-s-snezhko-eshhe-оплата-e/new' });
  this.route('i-i-s-snezhko-eshhe-производитель-l');
  this.route('i-i-s-snezhko-eshhe-производитель-e',
  { path: 'i-i-s-snezhko-eshhe-производитель-e/:id' });
  this.route('i-i-s-snezhko-eshhe-производитель-e.new',
  { path: 'i-i-s-snezhko-eshhe-производитель-e/new' });
  this.route('i-i-s-snezhko-eshhe-регист-записи-l');
  this.route('i-i-s-snezhko-eshhe-регист-записи-e',
  { path: 'i-i-s-snezhko-eshhe-регист-записи-e/:id' });
  this.route('i-i-s-snezhko-eshhe-регист-записи-e.new',
  { path: 'i-i-s-snezhko-eshhe-регист-записи-e/new' });
  this.route('i-i-s-snezhko-eshhe-сотрудники-l');
  this.route('i-i-s-snezhko-eshhe-сотрудники-e',
  { path: 'i-i-s-snezhko-eshhe-сотрудники-e/:id' });
  this.route('i-i-s-snezhko-eshhe-сотрудники-e.new',
  { path: 'i-i-s-snezhko-eshhe-сотрудники-e/new' });
  this.route('i-i-s-snezhko-eshhe-услуга-l');
  this.route('i-i-s-snezhko-eshhe-услуга-e',
  { path: 'i-i-s-snezhko-eshhe-услуга-e/:id' });
  this.route('i-i-s-snezhko-eshhe-услуга-e.new',
  { path: 'i-i-s-snezhko-eshhe-услуга-e/new' });
});

export default Router;
