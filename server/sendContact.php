<?php

function r($name) {
	$value = null;
	if (!empty($_REQUEST[$name])) $value = $_REQUEST[$name];
	return $value;
}


function pa($x) {
	var_dump($x);
}

function pp($x) {
	var_dump($x);
	die("DIED");
}

// TODO: session protect, no more than 10 msgs are allowed per session

$name 	= r('name');
$email 	= r('email');
$phone 	= r('phone');
$txt 	= r('txt');

if ($txt && ($name || $email || $phone)) {
	$msg = 	"New message from: $name (phone: $phone email: $email) \n";
	$msg .= "$txt";
	echo "success";
}
$subj = 'New Coding-Academy contact';


mail( 'vyaron@gmail.com', $subj, $msg, "From: $email" );
mail( 'zohar@misterbit.co.il', $subj, $msg, "From: $email" );
mail( 'igal.tar@gmail.com', $subj, $msg, "From: $email" );





