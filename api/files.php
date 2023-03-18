<?php

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: Content-Type, Origin, X-Requested-With');
header('Access-Control-Allow-Methods: POST, GET');
header('Content-Type: text/plain; charset=UTF-8');

putenv('LANG=C.UTF-8');


if ($_POST['path'] == null) {
  $dirs = array(
    array(
      'name' => 'filebody',
      'display' => 'OK',
      'dir' => '/var/www/html/webcui/dedukti-examples/OK'
    ),
    array(
      'name' => 'filebody',
      'display' => 'KO',
      'dir' => '/var/www/html/webcui/dedukti-examples/KO'
    ),
    array(
      'name' => 'filebody',
      'display' => 'LIB',
      'dir' => '/var/www/html/webcui/dedukti-examples/LIB'
    ),
    array(
      'name' => 'filebody',
      'display' => 'meta',
      'dir' => '/var/www/html/webcui/dedukti-examples/meta'
    ),
    array(
      'name' => 'filebody',
      'display' => 'meta_files',
      'dir' => '/var/www/html/webcui/dedukti-examples/meta_files'
    ),
    array(
      'name' => 'filebody',
      'display' => 'universo',
      'dir' => '/var/www/html/webcui/dedukti-examples/universo'
    )
  );

  function getFiles($arr) {
    $arr['files'] = glob($arr['dir'] . '/*.dk');
    return $arr;
  }

  $files = array_map('getFiles', $dirs);
  $json = json_encode($files);
  echo $json;
  
} else {
  readfile($_POST['path']);
}

?>
