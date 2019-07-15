<?php setcookie("session", "", time()-3600,"/"); ?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Logout</title>
    <script>
        localStorage.removeItem("user");
        window.location.href = "../../index.php"
    </script>
</head>
<body>
    
</body>
</html>