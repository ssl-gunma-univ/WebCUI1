<?php
require("webcui_lib.php");


header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: Content-Type, Origin, X-Requested-With');
header('Access-Control-Allow-Methods: POST, GET');
header('Content-Type: text/plain; charset=UTF-8');

// Change depending on the locale of your server
putenv("LANG=C.UTF-8");
setlocale(LC_CTYPE, "C.UTF-8");


$command = $_POST['command'];
$filebody = $_POST['filebody'];

$tmpfile = "/var/www/html/webcui/lambdapi-examples/tempfile." . $_POST['fileextension'];
$fp = fopen($tmpfile, "w");
fwrite($fp, $filebody);
fclose($fp);

$option = ' --no-colors ';
if ($_POST['help'] === 'true')        { $option .= '--help ';    $tmpfile = ''; }
if ($_POST['recordtime'] === 'true')  { $option .= '--record-time '; }
if ($_POST['nowarnings'] === 'true')  { $option .= '--no-warnings '; }

switch($command){
  case '':
    $option = ''; $tmpfile = '';
    break;
  case 'help':
    $option = ''; $tmpfile = '';
    break;
  case 'version':
    $option = ''; $tmpfile = '';
    break;
  case 'decision-tree':
    if ($_POST['ghost'] === 'true')  { $option .= '--ghost '; }
    break;
}

$cmd = '/home/hiroto/.opam/default/bin/lambdapi ' . $command . $option . $tmpfile . ' 2>&1';

//echo '<font color=\"green\">&gt; ' . $cmd . '</font><br>';
//CUIプログラム実行
exec($cmd, $output, $result_code); //実行
exec('rm /var/www/html/webcui/lambdapi-examples/tempfile.lp /var/www/html/webcui/lambdapi-examples/tempfile.dk');

//結果表示
printOutput($output);

switch($result_code){
  case 123:
    echo "<font color=\"red\">indiscriminate errors reported on standard error.</font>";
    break;
  case 124:
    echo "<font color=\"red\">command line parsing errors.</font>";
    break;
  case 125:
    echo "<font color=\"red\">unexpected internal errors (bugs).</font>";
    break;
}

?>
