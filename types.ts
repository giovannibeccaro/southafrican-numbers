export type DataType = {
  id: string;
  sms_phone: string;
};

export type CorrectedDataType = {
  id: string;
  correctNum: string;
  correction: string;
  oldNum: string;
};
