<?php include_once("layout/header.php") ?>
<div class="container mt-3">
    <h1 class="text-center">Sistema de registro de vendas</h1>
    <hr>
    <div class="row">
        <div class="col-12">
            <div class="alert alert-info h4 text-center alertCommissionCurrent">
                <div class="text-center">
                    <div class="spinner-border" role="status">
                        <span class="visually-hidden">Loading...</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<?php include_once("layout/footer.php") ?>
<script>

    loadCommissionCurrent();

</script>
</body>
</html>