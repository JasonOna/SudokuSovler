export const validPositions = [
  '01', '02', '03', '04', '05', '06', '07', '08', '09',
  '10', '11', '12', '13', '14', '15', '16', '17', '18',
  '19', '20', '21', '22', '23', '24', '25', '26', '27',
  '28', '29', '30', '31', '32', '33', '34', '35', '36',
  '37', '38', '39', '40', '41', '42', '43', '44', '45',
  '46', '47', '48', '49', '50', '51', '52', '53', '54',
  '55', '56', '57', '58', '59', '60', '61', '62', '63',
  '64', '65', '66', '67', '68', '69', '70', '71', '72',
  '73', '74', '75', '76', '77', '78', '79', '80', '81',
] as const

export type Positions = typeof validPositions[number]

export const validValues = [
  '' , '1' , '2' , '3' , '4' , '5' , '6' , '7' , '8' , '9'
] as const

export type Values = typeof validValues[number]

export type Digit = {
  position: Positions
  value: Values
}

export const initialDigits: Digit[] = [
  {position: '01', value: ''}, {position: '02', value: ''}, {position: '03', value: ''},
  {position: '04', value: ''}, {position: '05', value: ''}, {position: '06', value: ''},
  {position: '07', value: ''}, {position: '08', value: ''}, {position: '09', value: ''},
  {position: '10', value: ''}, {position: '11', value: ''}, {position: '12', value: ''},
  {position: '13', value: ''}, {position: '14', value: ''}, {position: '15', value: ''},
  {position: '16', value: ''}, {position: '17', value: ''}, {position: '18', value: ''},
  {position: '19', value: ''}, {position: '20', value: ''}, {position: '21', value: ''},
  {position: '22', value: ''}, {position: '23', value: ''}, {position: '24', value: ''},
  {position: '25', value: ''}, {position: '26', value: ''}, {position: '27', value: ''},
  {position: '28', value: ''}, {position: '29', value: ''}, {position: '30', value: ''},
  {position: '31', value: ''}, {position: '32', value: ''}, {position: '33', value: ''},
  {position: '34', value: ''}, {position: '35', value: ''}, {position: '36', value: ''},
  {position: '37', value: ''}, {position: '38', value: ''}, {position: '39', value: ''},
  {position: '40', value: ''}, {position: '41', value: ''}, {position: '42', value: ''},
  {position: '43', value: ''}, {position: '44', value: ''}, {position: '45', value: ''},
  {position: '46', value: ''}, {position: '47', value: ''}, {position: '48', value: ''},
  {position: '49', value: ''}, {position: '50', value: ''}, {position: '51', value: ''},
  {position: '52', value: ''}, {position: '53', value: ''}, {position: '54', value: ''},
  {position: '55', value: ''}, {position: '56', value: ''}, {position: '57', value: ''},
  {position: '58', value: ''}, {position: '59', value: ''}, {position: '60', value: ''},
  {position: '61', value: ''}, {position: '62', value: ''}, {position: '63', value: ''},
  {position: '64', value: ''}, {position: '65', value: ''}, {position: '66', value: ''},
  {position: '67', value: ''}, {position: '68', value: ''}, {position: '69', value: ''},
  {position: '70', value: ''}, {position: '71', value: ''}, {position: '72', value: ''},
  {position: '73', value: ''}, {position: '74', value: ''}, {position: '75', value: ''},
  {position: '76', value: ''}, {position: '77', value: ''}, {position: '78', value: ''},
  {position: '79', value: ''}, {position: '80', value: ''}, {position: '81', value: ''},
]
