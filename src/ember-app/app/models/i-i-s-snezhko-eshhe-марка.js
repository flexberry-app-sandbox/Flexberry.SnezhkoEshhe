import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as МаркаMixin
} from '../mixins/regenerated/models/i-i-s-snezhko-eshhe-марка';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(МаркаMixin, Validations, {
});

defineProjections(Model);

export default Model;
