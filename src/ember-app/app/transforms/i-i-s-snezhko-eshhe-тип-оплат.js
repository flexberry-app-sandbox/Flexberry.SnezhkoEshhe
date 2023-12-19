import FlexberryEnum from 'ember-flexberry-data/transforms/flexberry-enum';
import ТипОплатEnum from '../enums/i-i-s-snezhko-eshhe-тип-оплат';

export default FlexberryEnum.extend({
  enum: ТипОплатEnum,
  sourceType: 'IIS.Snezhko_eshhe.ТипОплат'
});
