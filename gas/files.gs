function getFiles(dir) {
  const folder = DriveApp.getFolderById(dir.get('folderid'));
  const files = folder.getFiles();
  let filenames = [];

  while (files.hasNext()) {
    const file = files.next();
    filenames.push(file.getName());
  }
  dir.set('files', filenames);

  return dir;
}


function doPost(e) {
  if (e.parameter.path == null) {

    const dir = [
      new Map([
        ['name', 'rs'],
        ['display', 'GoogleDrive_XML'],
        ['folderid', '1kGI7zVXiBFHDCn5hmujxObMQ99ad9G16'], //googledriveのフォルダのid
        ['extension', 'form']
      ]),
      new Map([
        ['name', 'rs'],
        ['display', 'GoogleDrive_TRS'],
        ['folderid', '1TDjfoz2J4EGfb32YxaflVE2nd7yEXVb6'],
        ['extension', 'form']
      ]),
      new Map([
        ['name', 'rs'],
        ['display', 'GoogleDrive_HS'],
        ['folderid', '1KujgJuHY22c7pQbCePvdX6QRr66XNnE3'],
        ['extension', 'form']
      ])
    ];
    const files = dir.map(getFiles, dir);

    let json = "[";
    for (let i = 0; i < files.length; i++) {
      if (i != 0) { json += ","; }
      json += JSON.stringify(Object.fromEntries(files[i]));
    }
    json += "]";

    console.log(json);
    return ContentService.createTextOutput(json);
  }
  else {
    const folder = DriveApp.getFolderById(e.parameter.folderid);
    const files = folder.getFilesByName(e.parameter.path);
    let file = files.next();

    const content = file.getBlob().getDataAsString();
    const json = JSON.stringify(content);

    return ContentService.createTextOutput(json);
  }
}
