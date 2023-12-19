import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as СоставЗаписиMixin
} from '../mixins/regenerated/models/i-i-s-snezhko-eshhe-состав-записи';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(СоставЗаписиMixin, Validations, {
});

defineProjections(Model);

export default Model;
