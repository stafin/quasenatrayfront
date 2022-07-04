<!doctype html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link href="./css/bootstrap.min.css" rel="stylesheet">
    <title>QuaseNaTray</title>
</head>
<body>
<div class="container-fluid">
    <nav class="navbar navbar-expand-lg bg-light">
        <div class="container-fluid">
            <a class="navbar-brand" href="index.php">QuaseNaTray</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link" href="orders.php">Vendas</a>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Vendedores
                        </a>
                        <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <li><a class="dropdown-item" href="sellers.php">Lista Vendedores</a></li>
                            <li><a class="dropdown-item" href="ordersfromseller.php">Vendas por Vendedor</a></li>
                        </ul>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="commissions.php">Comissões</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</div>
