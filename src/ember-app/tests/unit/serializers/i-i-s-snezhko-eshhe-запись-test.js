import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-snezhko-eshhe-запись', 'Unit | Serializer | i-i-s-snezhko-eshhe-запись', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-snezhko-eshhe-запись',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'transform:i-i-s-snezhko-eshhe-единицы',
    'transform:i-i-s-snezhko-eshhe-тип-автомобиля',
    'transform:i-i-s-snezhko-eshhe-тип-оплат',

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
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
