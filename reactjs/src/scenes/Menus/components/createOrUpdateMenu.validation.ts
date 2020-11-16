import { L } from '../../../lib/abpUtility';

const rules = {
  ten: [{ required: true, message: L('ThisFieldIsRequired') }],
  menuTypeId: [{ required: true, message: L('ThisFieldIsRequired') }],
};

export default rules;
