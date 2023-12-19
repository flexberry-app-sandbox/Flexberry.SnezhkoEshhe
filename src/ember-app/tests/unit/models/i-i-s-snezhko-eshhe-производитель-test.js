import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-snezhko-eshhe-производитель', 'Unit | Model | i-i-s-snezhko-eshhe-производитель', {
  // Specify the other units that are required for this test.
  needs: [
    'model:i-i-s-snezhko-eshhe-автомобиль',
    'model:i-i-s-snezhko-eshhe-бокс',
    'model:i-i-s-snezhko-eshhe-должность',
    'model:i-i-s-snezhko-eshhe-запись',
    'model:i-i-s-snezhko-eshhe-клиент',
    'model:i-i-s-snezhko-eshhe-марка',
    'model:i-i-s-snezhko-eshhe-материалы',
    'model:i-i-s-snezhko-eshhe-оплата',
    'model:i-i-s-snezhko-eshhe-производитель',
    'model:i-i-s-snezhko-eshhe-регист-записи',
    'model:i-i-s-snezhko-eshhe-состав-записи',
    'model:i-i-s-snezhko-eshhe-состав-услуги',
    'model:i-i-s-snezhko-eshhe-сотрудники',
    'model:i-i-s-snezhko-eshhe-услуга',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
