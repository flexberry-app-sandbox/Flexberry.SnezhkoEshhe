import {
  defineNamespace,
  defineBaseModel,
  defineProjections,
  Model as ЗаписьMixin
} from '../mixins/regenerated/models/i-i-s-snezhko-eshhe-запись';

import РегистЗаписиModel from './i-i-s-snezhko-eshhe-регист-записи';

let Model = РегистЗаписиModel.extend(ЗаписьMixin, {
});

defineNamespace(Model);
defineBaseModel(Model);
defineProjections(Model);

export default Model;
