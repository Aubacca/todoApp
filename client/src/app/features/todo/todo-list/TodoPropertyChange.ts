export interface TodoPropertyChange {
  fieldName: string;
  oldValue: string;
  newValue: string;
  type: 'BOOLEAN' | 'TEXT' | 'DATE'| 'DATE_TIME';
}
