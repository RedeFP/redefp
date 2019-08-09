<!DOCTYPE html>
<html lang="en">
    <head>
        <?php include("../res/common/prphead.php"); ?>
        
        <script src="<?php echo URL; ?>js/notes.js"></script>
        <script>
        var id = 1
        </script>
    </head>
    <body>
        <?php include("../res/common/prp-nav.php"); ?>
        <main role="main" class="container" style="margin-top: 71px; padding-top: 10px;">
            <div class="row">
                <div class="col-3">
                    <!-- List group -->
                    <div class="list-group" id="myList" role="tablist">
                        <a href="#" class="list-group-item list-group-item-action" onclick="setModalAddNote()"><i class="far fa-sticky-note"></i>&nbsp;Criar</a>
                    </div>
                </div>
                <div class="col-6">
                    <!-- Tab panes -->
                    <div class="tab-content" id="myTab">

                    </div>
                </div>

                

                

            </div>
        </main>
        <?php include("../res/common/modal.php"); ?>
    </body>
</html>
