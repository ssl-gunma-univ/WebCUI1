export const params = {
  tool: {
    default: 'dedukti'
  },
  file: {
    display: 'File',
    type: 'file',
    target: 'filebody',
    default: [],
    size: 'whole'
  },
  extension: {
    display: 'Lambdapi Extention',
    type: 'radio',
    buttons: [
      {
        name: 'lp',
        display: 'lp'
      },
      {
        name: 'dk',
        display: 'dk'
      }
    ],
    default: 'lp'
  },
  filebody: {
    display: 'filebody',
    type: 'textarea',
    rows: 19,
    default: '',
    monospace: true,
    size: 'whole'
  }
}
