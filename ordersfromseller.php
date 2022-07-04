<?php include_once("layout/header.php") ?>
<div class="container mt-3">
    <div class="row">
        <div class="col-12">
            <h1 class="text-center">Vendar por vendedor</h1>
        </div>
    </div>
    <div class="row mt-3">
        <div class="col-12">
            <div class="card" id="cardForm">
                <form method="get" action="">
                    <h5 class="card-header">Selecione um vendedor</h5>
                    <div class="card-body">
                        <div class="row">
                            <div class="col-8">
                                <select name="vendedor_id" id="vendedor_id" class="form-select" required>
                                    <option value="">Selecione</option>
                                </select>
                            </div>
                            <div class="col-4">
                                <button id="btnSalvar" type="submit" class="btn btn-primary w-100">
                                    <span class="spinner-border spinner-border-sm d-none" role="status" aria-hidden="true"></span>
                                    Pesquisar
                                </button>
                            </div>
                        </div>
                    </div>
                    <div class="card-body collapse returnError">
                        <div class="alert alert-danger mb-0 messageError">
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
    <?php if(!empty($_GET['success'])) {?>
        <div class="alert alert-success mb-0 text-center messageSuccess">
            Venda cadastrada com sucesso!
        </div>
    <?php } ?>

    <div class="alert alert-info text-center mt-5">
        Selecione um vendedor para listar suas vendas
    </div>

    <div class="row mt-5">
        <div class="col-12">
            <table id="tableResults" class="table table-sm table-striped table-hover">
                <thead>
                <tr>
                    <th>Id</th>
                    <th>Vendedor</th>
                    <th>Valor Venda (R$)</th>
                    <th>Comissão(%)</th>
                    <th class="text-end">Comissão(R$)</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td colspan="5" class="text-center">
                        <div class="spinner-border spinner-border-sm" role="status">
                            <span class="visually-hidden">Loading...</span>
                        </div>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
    </div>
    <div class="row">
        <div class="col-12">
            <nav aria-label="Paginação">
                <ul class="pagination pagination-sm justify-content-center">
                    <li class="page-item btnPagePrev disabled">
                        <a class="page-link" href="#">< Anterior</a>
                    </li>
                    <li class="page-item btnPageNext disabled">
                        <a class="page-link" href="#">Próxima ></a>
                    </li>
                </ul>
            </nav>
        </div>
    </div>
</div>
<?php include_once("layout/footer.php") ?>
<script>
    loadSellersListAll();
    loadDataOrdersFromSeller();
</script>
</body>
</html>