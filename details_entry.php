<?php
$server_name = "localhost";
$userName = "root";
$password = "";
$database_name = "database123";
$conn=mysqli_connect($server_name, $userName, $password, $database_name);
if (!$conn) 
{
die("Connection failed: " . mysqli_connect_error());
}
	if(isset($_POST['submit'])){
		$name=$_POST['name'];
		$email=$_POST['email'];
		$phone=$_POST['phone'];
		$address=$_POST['address'];
     $sql_query = "INSERT INTO entry_details (name,email,phone,address)
     VALUES ('$name','$email','$phone','$address')";
               if (mysqli_query($conn, $sql_query))
                {
			echo "<h1>Order Placed Successfully! Thank you"." ".$name.", We will contact you shortly!</h1>";
                }
		else{
			echo "Something went wrong!";
		}
	     mysqli_close($conn);
        }

?>



























