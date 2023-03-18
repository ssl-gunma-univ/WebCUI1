export const params = {
  help: { default: false },

  file:{
    display: 'File',
    type: 'file',
    target: 'filebody',
    default: [],
    size: 'half'
  },

  //command
  command: {
    display: 'Command',
    type: 'select',
    items: [
      { name: '',          display: '(None)' },
      { name: 'check',     display: 'check',     flag: 'check' },
      { name: 'beautify',  display: 'beautify',  flag: 'beautify' },
      { name: 'dep',       display: 'dep',       flag: 'dep' },
      { name: 'meta',      display: 'meta',      flag: 'meta' },
      { name: 'prune',     display: 'prune',     flag: 'prune' },
      { name: 'top',       display: 'top',       flag: 'top' }
    ],
    default: { name: 'check', display: 'check' },
    size: 'half'
  },

  //common option
  verbose: { display: '--verbose',  type: 'check',  default: false,  size: 12 },
  //check option
  coc:     { display: '--coc',            type: 'check',  default: false,  size: 2, if: 'check' },
  db:      { display: '--db',             type: 'check',  default: false,  size: 2, if: 'check' },
  eis:     { display: '--errors-in-snf',  type: 'check',  default: false,  size: 2, if: 'check' },
  eta:     { display: '--eta',            type: 'check',  default: false,  size: 2, if: 'check' },
  ll:      { display: '--ll',             type: 'check',  default: false,  size: 2, if: 'check' },
  typelhs: { display: '--type-lhs',       type: 'check',  default: false,  size: 2, if: 'check' },
  //dep option
  ignore: { display: '--ignore',     type: 'check',  default: false,  size: 'half', if: 'dep' },
  sort:   { display: '--sort',       type: 'check',  default: false,  size: 'half', if: 'dep' },
  //meta option
  mdebug:   { display: '--meta-debug',    type: 'check',  default: false,  size: 4, if: 'meta' },
  nobeta:   { display: '--no-beta',       type: 'check',  default: false,  size: 4, if: 'meta' },
  nometa:   { display: '--no-meta',       type: 'check',  default: false,  size: 4, if: 'meta' },
  //prune option
  log:   { display: '--log',    type: 'check',  default: false,  size: 'whole', if: 'prune' },

  filebody:{
    display: 'file body',
    type: 'textarea',
    rows: 20,
    default: '',
    size: 'whole',
    monospace: true
  }
}