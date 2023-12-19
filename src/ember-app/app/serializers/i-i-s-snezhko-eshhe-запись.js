import { Serializer as ЗаписьSerializer } from
  '../mixins/regenerated/serializers/i-i-s-snezhko-eshhe-запись';
import РегистЗаписиSerializer from './i-i-s-snezhko-eshhe-регист-записи';

export default РегистЗаписиSerializer.extend(ЗаписьSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
