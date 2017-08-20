<?php
session_start(); 
error_reporting(E_ALL);


ini_set('session.bug_compat_42',0);
ini_set('session.bug_compat_warn',0);

//define(URL, "http://localhost/kpi");

$link = mysqli_connect("172.16.0.203", "root", "qwerty", "crisis_app");

/* check connection */
if (mysqli_connect_errno()) {
    printf("Connect failed: %s\n", mysqli_connect_error());
    exit();
}

$main_url = "http://172.16.0.40:7080";
?>
