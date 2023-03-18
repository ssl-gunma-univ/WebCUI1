export const config = {
  name: `Lambdapi`,                // Application's name

  // logo: `logo_icon.png`,        // A filename in ~/static/

  address: '/webcui/lambdapi',      // http://localhost:3000/[address]

  webApiUrl: `http://solweb.mydns.jp/webcui/lambdapi/api/api.php`,
             //`http://localhost:80/webcui/lambdapi/api/api.php`,

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
      webApiUrl: 'http://solweb.mydns.jp/webcui/lambdapi/api/files.php',
                 //'http://localhost:80/webcui/lambdapi/api/files.php',
    },
    variables: {
      enable: false,
      icon: 'mdi-order-alphabetical-ascending'
    },
    help: {
      enable: true,
      icon: 'mdi-help',
      text: 'Help',
      method: (webcui) => {
        webcui.sendReq(
          (webcui) => {
            webcui.updateParam({ key: 'help', value: { value: true } })
            webcui.clearConsole()
          },
          (webcui, result) => {
            webcui.addLine({ html: result })
          })
      }
    },
    sendReq: {
      enable: true,
      icon: 'mdi-play',
      text: 'Check',
      before: (webcui) => {
        webcui.updateParam({ key: 'help', value: { value: false } })
        webcui.clearConsole()
      },
      after: (webcui, result) => {
        webcui.addLine({ html: result })
      }
    }
  }
}
