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

$tmpfile = "./tmp/tempfile.dk";
$fp = fopen($tmpfile, "w");
fwrite($fp, $filebody);
fclose($fp);

//common option
$option = ' --no-color ';
if ($_POST['help'] === 'true')    { $option .= '--help ';    $tmpfile = ''; }
if ($_POST['verbose'] === 'true') { $option .= '--verbose '; }

switch ($command) {
  case "check":
    //check option
    if ($_POST['coc'] === 'true')     { $option .= '--coc '; }
    if ($_POST['db'] === 'true')      { $option .= '--db '; }
    if ($_POST['eis'] === 'true')     { $option .= '--errors-in-snf '; }
    if ($_POST['eta'] === 'true')     { $option .= '--eta '; }
    if ($_POST['ll'] === 'true')      { $option .= '--ll '; }
    if ($_POST['typelhs'] === 'true') { $option .= '--type-lhs '; }
    break;
  case "dep":
    //dep option
    if ($_POST['ignore'] === 'true') { $option .= '--ignore '; }
    if ($_POST['sort'] === 'true')   { $option .= '--sort '; }
    break;
  case "meta":
    //meta option
    if ($_POST['mdebug'] === 'true') { $option .= '--meta-debug '; }
    if ($_POST['nobeta'] === 'true') { $option .= '--no-beta '; }
    if ($_POST['nometa'] === 'true') { $option .= '--no-meta '; }
    break;
  case "prune":
    //prune option
    if ($_POST['log'] === 'true') { $option .= '--log '; }
    break;
}

$cmd = '/home/hiroto/.opam/default/bin/dk ' . $command . $option . $tmpfile . ' 2>&1';

//echo "<font color=\"green\">&gt; " . $cmd . "</font><br>";
//CUIプログラムを実行
exec($cmd, $output, $result_code);
exec('rm ./tmp/tempfile.dk');

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
