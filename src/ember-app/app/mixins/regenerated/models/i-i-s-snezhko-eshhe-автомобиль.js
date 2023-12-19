import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  госНомер: DS.attr('string'),
  типАвтомобиля: DS.attr('i-i-s-snezhko-eshhe-тип-автомобиля'),
  цвет: DS.attr('string'),
  марка: DS.belongsTo('i-i-s-snezhko-eshhe-марка', { inverse: null, async: false }),
  клиент: DS.belongsTo('i-i-s-snezhko-eshhe-клиент', { inverse: 'автомобиль', async: false })
});

export let ValidationRules = {
  госНомер: {
    descriptionKey: 'models.i-i-s-snezhko-eshhe-автомобиль.validations.госНомер.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  типАвтомобиля: {
    descriptionKey: 'models.i-i-s-snezhko-eshhe-автомобиль.validations.типАвтомобиля.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  цвет: {
    descriptionKey: 'models.i-i-s-snezhko-eshhe-автомобиль.validations.цвет.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  марка: {
    descriptionKey: 'models.i-i-s-snezhko-eshhe-автомобиль.validations.марка.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  клиент: {
    descriptionKey: 'models.i-i-s-snezhko-eshhe-автомобиль.validations.клиент.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('АвтомобильE', 'i-i-s-snezhko-eshhe-автомобиль', {
    госНомер: attr('Гос номер', { index: 0 }),
    цвет: attr('Цвет', { index: 1 }),
    типАвтомобиля: attr('Тип автомобиля', { index: 2 }),
    марка: belongsTo('i-i-s-snezhko-eshhe-марка', 'Марка', {
      название: attr('Название', { index: 4, hidden: true })
    }, { index: 3, displayMemberPath: 'название' })
  });
};
