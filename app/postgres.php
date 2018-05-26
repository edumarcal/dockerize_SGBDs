<?php 
// Agradeço a Deus pelo dom do conhecimento

try {
	$conn = new PDO('pgsql:host=127.0.0.1; dbname=postgres', 'postgres', 'postgres');
	if ($conn) {
		echo "Connected to the database successfully!\n";
	}
} catch (PDOException $e) {
	echo $e->getMessage();
	echo "\n";
}
?>
