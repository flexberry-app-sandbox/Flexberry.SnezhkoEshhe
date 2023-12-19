import {
  defineNamespace,
  defineProjections,
  Model as МаркаMixin
} from '../mixins/regenerated/models/i-i-s-snezhko-eshhe-марка';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(МаркаMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
