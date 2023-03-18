<?php

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: Content-Type, Origin, X-Requested-With');
header('Access-Control-Allow-Methods: POST, GET');
header('Content-Type: text/plain; charset=UTF-8');

putenv('LANG=C.UTF-8');


if ($_POST['path'] == null) {
  $dirs = array(
    array(
      'name' => 'rs',
      'display' => 'TermComp',
      'dir' => './sol/hor/All22',
      'extension' => 'form'
    ),
		
    array(
      'name' => 'rs',
      'display' => 'arXiv\'20',
      'dir' => './sol/hor/arXiv20',
      'extension' => 'form'
    ),
    array(
      'name' => 'rs',
      'display' => 'SCP\'18',
      'dir' => './sol/hor/SCPex',
      'extension' => 'form'
    ),
    array(
      'name' => 'rs',
      'display' => 'Cops',
      'dir' => './sol/hor/Cops',
      'extension' => 'form'
    ),
    array(
      'name' => 'rs',
      'display' => 'ICFP\'17',
      'dir' => './sol/hor/JEX',
      'extension' => 'form'
    ),
    array(
      'name' => 'rs',
      'display' => 'Polymorphic',
      'dir' => './sol/hor/PolySOL',
      'extension' => 'form'
    )
  );

  function getFiles($arr) {
    $arr['files'] = glob($arr['dir'] . '/*');
    return $arr;
  }

  $files = array_map('getFiles', $dirs);
  $json = json_encode($files);
  echo $json;
  
} else {
  readfile($_POST['path']);
}

?>
