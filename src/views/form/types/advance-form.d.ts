export type AdvanceFormInfo = {
  name: string;
  domain: string;
  admin: string;
  leader: string;
  workDate: string[];
  type: string;
  workName: string;
  workDesc: string;
  executor: string;
  charger: string;
  awakeDate: string;
  workType: string;
};

type SelectionCellProps = {
  value: string;
  intermediate?: boolean;
  onChange: (value: string) => void;
  onBlur: () => void;
  onKeydownEnter: () => void;
  forwardRef: (el: InputInstance) => void;
};
