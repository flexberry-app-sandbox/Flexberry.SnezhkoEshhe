import {
  defineNamespace,
  defineProjections,
  Model as РегистЗаписиMixin
} from '../mixins/regenerated/models/i-i-s-snezhko-eshhe-регист-записи';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(РегистЗаписиMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
