import { Serializer as РегистЗаписиSerializer } from
  '../mixins/regenerated/serializers/i-i-s-snezhko-eshhe-регист-записи';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(РегистЗаписиSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
