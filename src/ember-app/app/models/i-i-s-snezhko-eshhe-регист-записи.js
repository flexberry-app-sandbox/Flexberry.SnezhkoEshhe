import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as РегистЗаписиMixin
} from '../mixins/regenerated/models/i-i-s-snezhko-eshhe-регист-записи';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(РегистЗаписиMixin, Validations, {
});

defineProjections(Model);

export default Model;
