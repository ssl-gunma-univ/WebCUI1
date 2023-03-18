export const config = {
  name: `SOL`,                // Application's name

  // logo: `logo_icon.png`,        // A filename in ~/static/

  address: '/webcui/sn',      // http://localhost:3000/[address]

  webApiUrl: `http://solweb.mydns.jp/webcui/sn/api/api.php`,
             //`http://localhost:80/webcui/sn/api/api.php`,

  consoleLocation: 'right',    // Placing the console. [left | right | top | bottom]
  toolbarLocation: 'left',   // Placing the toolbar. [left | right]
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
      enable: false,
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
      webApiUrl: 'http://solweb.mydns.jp/webcui/sn/api/files.php',
                 //'http://localhost:80/webcui/sn/api/files.php',
      googleDriveApiUrl: 'https://script.google.com/macros/s/AKfycbyJ815WcoK7k7Zbf480eOwydZl-VhuLfLoAzacvQWOe8Uv4jIH4BeMYIW9Rl3ATuFEbPQ/exec'
    },
    variables: {
      enable: false,
      icon: 'mdi-order-alphabetical-ascending'
    },
    sendReq: {
      enable: true,
      icon: 'mdi-play',
      text: 'Check',
      before: (webcui) => {
        webcui.updateParam({ key: 'trfp', value: { value: false } })
        webcui.clearConsole();
      },
      after: (webcui, result) => {
        webcui.addLine({ html: result })
      }
    },
    trfp: {
      enable: true,
      icon: 'mdi-alpha-t',
      text: 'Trfp',
      method: (webcui) => {
        webcui.sendReq(
          (webcui) => {
            webcui.updateParam({ key: 'trfp', value: { value: true } })
            webcui.clearConsole()
          },
          (webcui, result) => {
            webcui.addLine({ html: result })
          })
      }
    }
  }
}
