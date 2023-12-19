import $ from 'jquery';
import { buildValidations } from 'ember-cp-validations';

import {
  defineBaseModel,
  defineProjections,
  ValidationRules,
  Model as ЗаписьMixin
} from '../mixins/regenerated/models/i-i-s-snezhko-eshhe-запись';

import РегистЗаписиModel from './i-i-s-snezhko-eshhe-регист-записи';
import { ValidationRules as ParentValidationRules } from '../mixins/regenerated/models/i-i-s-snezhko-eshhe-регист-записи';

const Validations = buildValidations($.extend({}, ParentValidationRules, ValidationRules), {
  dependentKeys: ['model.i18n.locale'],
});

let Model = РегистЗаписиModel.extend(ЗаписьMixin, Validations, {
});

defineBaseModel(Model);
defineProjections(Model);

export default Model;
