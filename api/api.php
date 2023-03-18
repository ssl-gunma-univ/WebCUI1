<?php
require("webcui_lib.php");


header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: Content-Type, Origin, X-Requested-With');
header('Access-Control-Allow-Methods: POST, GET');
header('Content-Type: text/plain; charset=UTF-8');

// Change depending on the locale of your server
putenv("LANG=C.UTF-8");
setlocale(LC_CTYPE, "C.UTF-8");

$tool = $_POST['tool'];
$cmd = '';
$tmpfile = '';
$filebody = $_POST['filebody'];

switch($tool){
    case 'dedukti':
        $cmd = '/home/hiroto/.opam/default/bin/dk check --no-color ';
        $tmpfile = './tmp/tempfile.dk';
       
        $fp = fopen($tmpfile, 'w');
        fwrite($fp, $filebody);
        fclose($fp);
        break;
    case 'lambdapi':
        $cmd = '/home/hiroto/.opam/default/bin/lambdapi check --no-color ';
        $tmpfile = "/var/www/html/webcui/lambdapi-examples/tempfile." . $_POST['extension'];
       
        $fp = fopen($tmpfile, 'w');
        fwrite($fp, $filebody);
        fclose($fp);
        break;
    case 'natt':
        $cmd = '/var/www/html/webcui/sol/api/sol/bin/NaTT-1.9/NaTT.exe ';
        $tmpfile = "./tmp/tempfile.trs";
      
        $fp = fopen($tmpfile, 'w');
        fwrite($fp, $filebody);
        fclose($fp);
        break;
}

$cmd = $cmd . $tmpfile . ' 2>&1';
//echo $cmd . '<br>';
//CUIプログラムを実行
exec($cmd, $output);
exec('rm ' . $tmpfile);

//結果表示
printOutput($output);

?>
