export interface IOption {
  value: string;
  label: string;
  onClick?: (value: string) => void;
  active?: boolean;
}

export interface ISelectProps {
  onChange?: (value: string) => void;
  allowClear?: boolean;
  options: Array<IOption>;
  value?: string;
  defaultValue?: string;
  placeHolder?: string;
}
