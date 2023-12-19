import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  сотрудники: DS.belongsTo('i-i-s-snezhko-eshhe-сотрудники', { inverse: null, async: false }),
  услуга: DS.belongsTo('i-i-s-snezhko-eshhe-услуга', { inverse: null, async: false }),
  запись: DS.belongsTo('i-i-s-snezhko-eshhe-запись', { inverse: 'составЗаписи', async: false })
});

export let ValidationRules = {
  сотрудники: {
    descriptionKey: 'models.i-i-s-snezhko-eshhe-состав-записи.validations.сотрудники.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  услуга: {
    descriptionKey: 'models.i-i-s-snezhko-eshhe-состав-записи.validations.услуга.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  запись: {
    descriptionKey: 'models.i-i-s-snezhko-eshhe-состав-записи.validations.запись.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('СоставЗаписиE', 'i-i-s-snezhko-eshhe-состав-записи', {
    услуга: belongsTo('i-i-s-snezhko-eshhe-услуга', 'Услуга', {
      наименование: attr('Наименование', { index: 1, hidden: true }),
      цена: attr('Цена', { index: 2 })
    }, { index: 0, displayMemberPath: 'наименование' }),
    сотрудники: belongsTo('i-i-s-snezhko-eshhe-сотрудники', 'Сотрудники', {
      фамилия: attr('Фамилия', { index: 4, hidden: true })
    }, { index: 3, displayMemberPath: 'фамилия' })
  });
};
