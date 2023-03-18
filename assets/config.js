export const config = {
  name: `Checktools`,                // Application's name

  // logo: `logo_icon.png`,        // A filename in ~/static/

  address: '/webcui/checktools',      // http://localhost:3000/[address]

  webApiUrl: `http://solweb.mydns.jp/webcui/checktools/api/api.php`,
             //`http://localhost:80/webcui/checktools/api/api.php`, 

  consoleLocation: 'right',    // Placing the console. [left | right | top | bottom]
  toolbarLocation: 'left',    // Placing the toolbar. [left | right]
  noSpace: true,
  
  keepState: false,

  messages: {
    initialMsg: [{ text: `Please refer to the DOCUMENT on the upper right of this page for the instructions.` }],
    connectionErrorMsg: [{ text: `An error occurred while communicating with the server.` }],
    cancelRequestMsg: [{ text: `Canceled by the user.` }],
    readErrorMsg: [{ text: `An error occured while reading the file.` }]
  },

  features: {
    clear: {
      enable: true,
      icon: 'mdi-delete',
      text: 'Clear'
    },
    history: {
      enable: true,
      icon: 'mdi-history',
      text: 'History'
    },
    examples: {
      enable: false,
      icon: 'mdi-alpha-e-box'
    },
    files: {
      enable: true,
      icon: 'mdi-file-multiple',
      text: 'Examples',
      webApiUrl: 'http://solweb.mydns.jp/webcui/checktools/api/files.php',
                 //'http://localhost:80/webcui/checktools/api/files.php',
    },
    variables: {
      enable: false,
      icon: 'mdi-order-alphabetical-ascending'
    },
    dedukti: {
      enable: true,
      icon: 'mdi-alpha-d',
      text: 'Dedukti',
      method: (webcui) => {
        webcui.sendReq(
          (webcui) => {
            webcui.clearConsole()
            webcui.updateParam({ key: 'tool', value: { value: 'dedukti' } })
          },
          (webcui, result) => {
            webcui.addLine({ html: result })
          })
      }
    },
    lambdapi: {
      enable: true,
      icon: 'mdi-alpha-l',
      text: 'Lambdapi',
      method: (webcui) => {
        webcui.sendReq(
          (webcui) => {
            webcui.clearConsole()
            webcui.updateParam({ key: 'tool', value: { value: 'lambdapi' } })
          },
          (webcui, result) => {
            webcui.addLine({ html: result })
          })
      }
    },
    sendReq: {
      enable: true,
      icon: 'mdi-alpha-n',
      text: 'NaTT',
      before: (webcui) => {
        webcui.clearConsole()
        webcui.updateParam({ key: 'tool', value: { value: 'natt' } })
      },
      after: (webcui, result) => {
        webcui.addLine({ html: result })
      }
    }
  }
}
