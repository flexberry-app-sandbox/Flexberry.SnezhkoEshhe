import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  датаРождения: DS.attr('date'),
  имя: DS.attr('string'),
  кодКлиента: DS.attr('number'),
  номерТелефона: DS.attr('number'),
  отчество: DS.attr('string'),
  фамилия: DS.attr('string'),
  автомобиль: DS.hasMany('i-i-s-snezhko-eshhe-автомобиль', { inverse: 'клиент', async: false })
});

export let ValidationRules = {
  датаРождения: {
    descriptionKey: 'models.i-i-s-snezhko-eshhe-клиент.validations.датаРождения.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  имя: {
    descriptionKey: 'models.i-i-s-snezhko-eshhe-клиент.validations.имя.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  кодКлиента: {
    descriptionKey: 'models.i-i-s-snezhko-eshhe-клиент.validations.кодКлиента.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  номерТелефона: {
    descriptionKey: 'models.i-i-s-snezhko-eshhe-клиент.validations.номерТелефона.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  отчество: {
    descriptionKey: 'models.i-i-s-snezhko-eshhe-клиент.validations.отчество.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  фамилия: {
    descriptionKey: 'models.i-i-s-snezhko-eshhe-клиент.validations.фамилия.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  автомобиль: {
    descriptionKey: 'models.i-i-s-snezhko-eshhe-клиент.validations.автомобиль.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('КлиентE', 'i-i-s-snezhko-eshhe-клиент', {
    кодКлиента: attr('Код клиента', { index: 0 }),
    фамилия: attr('Фамилия', { index: 1 }),
    имя: attr('Имя', { index: 2 }),
    отчество: attr('Отчество', { index: 3 }),
    датаРождения: attr('Дата рождения', { index: 4 }),
    номерТелефона: attr('Номер телефона', { index: 5 }),
    автомобиль: hasMany('i-i-s-snezhko-eshhe-автомобиль', 'Автомобиль', {
      госНомер: attr('Гос номер', { index: 0 }),
      цвет: attr('Цвет', { index: 1 }),
      типАвтомобиля: attr('Тип автомобиля', { index: 2 }),
      марка: belongsTo('i-i-s-snezhko-eshhe-марка', 'Марка', {
        название: attr('Название', { index: 4, hidden: true })
      }, { index: 3, displayMemberPath: 'название' })
    })
  });

  modelClass.defineProjection('КлиентL', 'i-i-s-snezhko-eshhe-клиент', {
    кодКлиента: attr('Код клиента', { index: 0 }),
    фамилия: attr('Фамилия', { index: 1 }),
    имя: attr('Имя', { index: 2 }),
    отчество: attr('Отчество', { index: 3 }),
    датаРождения: attr('Дата рождения', { index: 4 }),
    номерТелефона: attr('Номер телефона', { index: 5 })
  });
};
