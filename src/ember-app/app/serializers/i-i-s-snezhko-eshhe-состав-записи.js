import { Serializer as СоставЗаписиSerializer } from
  '../mixins/regenerated/serializers/i-i-s-snezhko-eshhe-состав-записи';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(СоставЗаписиSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
