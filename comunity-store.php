<html>
	<head>
    	<?php include("./res/common/head.php"); ?>
        <script src="js/comunity-store.js"></script>
    </head>
    <body>
    	<?php include("./res/common/nav.php"); ?>
		<main role="main" class="container-fluid" style="margin-top: 71px; padding-top: 10px;">
            <div class="container">
                <?php include("./res/common/comunity-nav.php"); ?>
                <div class="row" style="margin-top: 10px;">
                    <div class="col-3 shop-filter" style="background-color: white !important; border: 1px solid grey">
                        <b>Filtrar por</b><br>
                        <br>
                        Preço<br>
                        <input type="radio" name="value"> até R$25<br>
                        <input type="radio" name="value"> R$25-R$50<br>
                        <input type="radio" name="value"> R$50-R$99<br>
                        <input type="radio" name="value"> acima de R$99<br>
                    </div>
                    <div class="col-9">
                        <div class="row" id="import">
                        </div>
                    </div>
                </div>
            </div>
        </main> 
        <?php include("res/common/modal.php");?>
        <div style="display: none;">
    </body>
</html>
    </body>
</html>