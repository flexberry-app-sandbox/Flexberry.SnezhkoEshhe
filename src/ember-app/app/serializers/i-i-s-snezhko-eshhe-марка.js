import { Serializer as МаркаSerializer } from
  '../mixins/regenerated/serializers/i-i-s-snezhko-eshhe-марка';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(МаркаSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
