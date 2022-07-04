<?php include_once("layout/header.php") ?>
<div class="container mt-3">
    <div class="row">
        <div class="col-12">
            <h1 class="text-center">Vendedores</h1>
        </div>
    </div>
    <div class="row">
        <div class="col-12 text-center">
            <button class="btn btn-sm btn-secondary" type="button" data-bs-toggle="collapse"
                    data-bs-target="#cardForm" aria-expanded="false" aria-controls="cardForm">
                + Novo(a) Vendedor(a)
            </button>
        </div>
    </div>
    <div class="row mt-3">
        <div class="col-12">
            <div class="card collapse" id="cardForm">
                <form class="processform">
                    <h5 class="card-header">Cadastrar novo(a) vendedor(a)</h5>
                    <div class="card-body">
                        <div class="row">
                            <div class="col-6">
                                <label for="nome">Nome <span class="text-danger">*</span></label>
                                <input type="text" class="form-control"
                                       name="nome" minlength="3" maxlength="120"
                                       value="" required>
                            </div>
                            <div class="col-6">
                                <label for="email">E-mail <span class="text-danger">*</span></label>
                                <input type="email" class="form-control"
                                       name="email" minlength="3" maxlength="120"
                                       value="" required>
                            </div>
                        </div>
                    </div>
                    <div class="card-body">
                        <button id="btnSalvar" type="submit" class="btn btn-primary">
                            <span class="spinner-border spinner-border-sm d-none" role="status" aria-hidden="true"></span>
                            Salvar
                        </button>
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
            Vendedor(a) cadastrado(a) com sucesso!
        </div>
    <?php } ?>
    <hr>
    <div class="row">
        <div class="col-12">
            <table id="tableResults" class="table table-sm table-striped table-hover">
                <thead>
                <tr>
                    <th>Id</th>
                    <th>Nome</th>
                    <th>E-mail</th>
                    <th>Total Comissão (R$)</th>
                    <th class="text-end">Ação</th>
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
<script>loadDataSellers();</script>
</body>
</html>