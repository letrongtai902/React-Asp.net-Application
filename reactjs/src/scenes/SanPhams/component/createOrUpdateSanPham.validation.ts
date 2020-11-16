import { L } from '../../../lib/abpUtility';

const rules = {
  ten: [{ required: true, message: L('ThisFieldIsRequired') }],
  hinhAnh: [{ required: true, message: L('ThisFieldIsRequired') }],
  loaiId: [{ required: true, message: L('ThisFieldIsRequired') }],
};

export default rules;