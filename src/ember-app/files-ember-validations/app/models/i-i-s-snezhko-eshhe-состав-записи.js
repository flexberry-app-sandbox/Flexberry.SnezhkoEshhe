import {
  defineNamespace,
  defineProjections,
  Model as СоставЗаписиMixin
} from '../mixins/regenerated/models/i-i-s-snezhko-eshhe-состав-записи';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(СоставЗаписиMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
