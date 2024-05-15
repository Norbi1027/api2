<?php

$conn = new mysqli("localhost","root","","dolgozok");
if ($conn->errno) {
    echo 'adatbázis hiba';
    die();
}
$conn->set_charset("utf8");
