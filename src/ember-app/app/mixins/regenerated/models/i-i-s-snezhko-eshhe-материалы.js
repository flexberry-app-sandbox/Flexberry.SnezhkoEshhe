import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  кодДетали: DS.attr('number'),
  наименование: DS.attr('string'),
  производитель: DS.belongsTo('i-i-s-snezhko-eshhe-производитель', { inverse: null, async: false })
});

export let ValidationRules = {
  кодДетали: {
    descriptionKey: 'models.i-i-s-snezhko-eshhe-материалы.validations.кодДетали.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  наименование: {
    descriptionKey: 'models.i-i-s-snezhko-eshhe-материалы.validations.наименование.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  производитель: {
    descriptionKey: 'models.i-i-s-snezhko-eshhe-материалы.validations.производитель.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('МатериалыE', 'i-i-s-snezhko-eshhe-материалы', {
    кодДетали: attr('Код материала', { index: 0 }),
    наименование: attr('Наименование', { index: 1 }),
    производитель: belongsTo('i-i-s-snezhko-eshhe-производитель', 'Производитель', {
      наименование: attr('Наименование', { index: 3, hidden: true })
    }, { index: 2, displayMemberPath: 'наименование' })
  });

  modelClass.defineProjection('МатериалыL', 'i-i-s-snezhko-eshhe-материалы', {
    кодДетали: attr('Код материала', { index: 0 }),
    наименование: attr('Наименование', { index: 1 }),
    производитель: belongsTo('i-i-s-snezhko-eshhe-производитель', 'Наименование', {
      наименование: attr('Наименование', { index: 2 })
    }, { index: -1, hidden: true })
  });
};
