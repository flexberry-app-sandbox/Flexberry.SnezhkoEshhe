import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  время: DS.attr('string'),
  дата: DS.attr('date', { defaultValue() { return new Date(); } }),
  кодЗаписи: DS.attr('number'),
  комментарий: DS.attr('string'),
  сумма: DS.attr('decimal'),
  бокс: DS.belongsTo('i-i-s-snezhko-eshhe-бокс', { inverse: null, async: false }),
  клиент: DS.belongsTo('i-i-s-snezhko-eshhe-клиент', { inverse: null, async: false }),
  сотрудники: DS.belongsTo('i-i-s-snezhko-eshhe-сотрудники', { inverse: null, async: false }),
  составЗаписи: DS.hasMany('i-i-s-snezhko-eshhe-состав-записи', { inverse: 'запись', async: false })
});

export let ValidationRules = {
  время: {
    descriptionKey: 'models.i-i-s-snezhko-eshhe-запись.validations.время.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  дата: {
    descriptionKey: 'models.i-i-s-snezhko-eshhe-запись.validations.дата.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  кодЗаписи: {
    descriptionKey: 'models.i-i-s-snezhko-eshhe-запись.validations.кодЗаписи.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  комментарий: {
    descriptionKey: 'models.i-i-s-snezhko-eshhe-запись.validations.комментарий.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  сумма: {
    descriptionKey: 'models.i-i-s-snezhko-eshhe-запись.validations.сумма.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true }),
    ],
  },
  бокс: {
    descriptionKey: 'models.i-i-s-snezhko-eshhe-запись.validations.бокс.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  клиент: {
    descriptionKey: 'models.i-i-s-snezhko-eshhe-запись.validations.клиент.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  сотрудники: {
    descriptionKey: 'models.i-i-s-snezhko-eshhe-запись.validations.сотрудники.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  составЗаписи: {
    descriptionKey: 'models.i-i-s-snezhko-eshhe-запись.validations.составЗаписи.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineBaseModel = function (modelClass) {
  modelClass.reopenClass({
    _parentModelName: 'i-i-s-snezhko-eshhe-регист-записи'
  });
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ЗаписьE', 'i-i-s-snezhko-eshhe-запись', {
    кодЗаписи: attr('Код записи', { index: 0 }),
    дата: attr('Дата', { index: 1 }),
    время: attr('Время', { index: 2 }),
    комментарий: attr('Комментарий', { index: 3 }),
    сумма: attr('Сумма', { index: 4 }),
    кодЗаказа: attr('Код заказа', { index: 5 }),
    клиент: belongsTo('i-i-s-snezhko-eshhe-клиент', 'Клиент', {
      фамилия: attr('Фамилия', { index: 7, hidden: true })
    }, { index: 6, displayMemberPath: 'фамилия' }),
    бокс: belongsTo('i-i-s-snezhko-eshhe-бокс', 'Бокс', {
      номерБокса: attr('Номер бокса', { index: 9, hidden: true })
    }, { index: 8, displayMemberPath: 'номерБокса' }),
    сотрудники: belongsTo('i-i-s-snezhko-eshhe-сотрудники', 'Сотрудники', {
      фамилия: attr('Фамилия', { index: 11, hidden: true })
    }, { index: 10, displayMemberPath: 'фамилия' }),
    составЗаписи: hasMany('i-i-s-snezhko-eshhe-состав-записи', 'Состав записи', {
      услуга: belongsTo('i-i-s-snezhko-eshhe-услуга', 'Услуга', {
        наименование: attr('Наименование', { index: 1, hidden: true }),
        цена: attr('Цена', { index: 2 })
      }, { index: 0, displayMemberPath: 'наименование' }),
      сотрудники: belongsTo('i-i-s-snezhko-eshhe-сотрудники', 'Сотрудники', {
        фамилия: attr('Фамилия', { index: 4, hidden: true })
      }, { index: 3, displayMemberPath: 'фамилия' })
    })
  });

  modelClass.defineProjection('ЗаписьL', 'i-i-s-snezhko-eshhe-запись', {
    кодЗаписи: attr('Код записи', { index: 0 }),
    дата: attr('Дата', { index: 1 }),
    время: attr('Время', { index: 2 }),
    комментарий: attr('Комментарий', { index: 3 }),
    сумма: attr('Сумма', { index: 4 }),
    кодЗаказа: attr('Код заказа', { index: 5 }),
    клиент: belongsTo('i-i-s-snezhko-eshhe-клиент', 'Фамилия', {
      фамилия: attr('Фамилия', { index: 6 })
    }, { index: -1, hidden: true }),
    бокс: belongsTo('i-i-s-snezhko-eshhe-бокс', 'Номер бокса', {
      номерБокса: attr('Номер бокса', { index: 7 })
    }, { index: -1, hidden: true }),
    сотрудники: belongsTo('i-i-s-snezhko-eshhe-сотрудники', 'Фамилия', {
      фамилия: attr('Фамилия', { index: 8 })
    }, { index: -1, hidden: true })
  });
};
