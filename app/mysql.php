<?php 
// Agradeço a Deus pelo dom do conhecimento

try {
	$conn = new PDO('mysql:host=127.0.0.1; dbname=mysql', 'root', 'mysql');
	if ($conn) {
		echo "Connected to the database successfully!\n";
	}
} catch (PDOException $e) {
	echo $e->getMessage();
	echo "\n";
}
?>
