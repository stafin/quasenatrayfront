const CURRENT_URL = new URL(window.location.href);
const URL_API_BASE = "http://localhost:8989/api";
const URL_API = URL_API_BASE + CURRENT_URL.pathname.split('.')[0];

const currentPage = function ()
{
    let searchParams = new URLSearchParams(window.location.search);
    if(searchParams.has('page'))
        return searchParams.get('page');
    return 1;
}

const sellerId = function ()
{
    let searchParams = new URLSearchParams(window.location.search);
    if(searchParams.has('vendedor_id'))
        return searchParams.get('vendedor_id');
    return 0;
}


function getChangePage(url)
{
    return url.split('=')[1];
}


/**
 * Comissão atual
 * index.php
 */
function loadCommissionCurrent()
{

    $.ajax({
        url : URL_API_BASE + "/commissions/current",
        dataType: "json",
        success : function (data) {
            $('.alertCommissionCurrent').html('Comissão atual: <b>'+data.data.porcentagem+'%</b>');
        }
    });

}


/**
 * Lista vendedores para o select
 * orders.php
 */
function loadSellersListAll()
{

    $.ajax({
        url : URL_API_BASE + "/sellers/listall",
        dataType: "json",
        success : function (data) {
            let sel = $("#vendedor_id");
            $.each(data.data, function (i, item) {
                let selected = (sellerId() == item.id) ? 'selected' : '';
                sel.append('<option value="' + item.id + '" '+selected+'>' + item.nome + '</option>');
            });
        }
    });

}


/**
 * Carrega os dados e aplica na tabela
 * commissions.php
 */
function loadDataCommissions()
{

    $.ajax({
        type: "GET",
        url: URL_API+'?page='+currentPage(),
        dataType: "json",
        success:function(data){

            //limpa a tabela
            $('#tableResults tbody').html('');

            if(data.data.length > 0) {

                let trHTML = '';
                $.each(data.data, function (i, item) {
                    trHTML += '<tr><td>' + item.id + '</td>' +
                        '<td>' + item.porcentagem + '</td>' +
                        '<td class="text-end">' + item.criado_em + '</td></tr>';
                });
                $('#tableResults tbody').append(trHTML);

                if (data.links.next) {
                    $('.btnPageNext').removeClass('disabled');
                    $('.btnPageNext a').attr('href', CURRENT_URL.origin + CURRENT_URL.pathname + '?page=' + getChangePage(data.links.next));
                }

                if (data.links.prev) {
                    $('.btnPagePrev').removeClass('disabled');
                    $('.btnPagePrev a').attr('href', CURRENT_URL.origin + CURRENT_URL.pathname + '?page=' + getChangePage(data.links.prev));
                }

            } else {

                $('#tableResults tbody').append('<tr class="table-warning text-center"><td colspan="3">nenhum item</td></tr>');

            }

        },
        error: function (request, status, error) {
            alert('Não foi possivel completar a requisição!')
        }
    });

}


/**
 * Carrega os dados e aplica na tabela
 * sellers.php
 */
function loadDataSellers()
{

    $.ajax({
        type: "GET",
        url: URL_API+'?page='+currentPage(),
        dataType: "json",
        success:function(data){

            //limpa a tabela
            $('#tableResults tbody').html('');

            if(data.data.length > 0) {

                let trHTML = '';
                $.each(data.data, function (i, item) {
                    trHTML += '<tr><td>' + item.id + '</td>' +
                        '<td>' + item.nome + '</td>' +
                        '<td>' + item.email + '</td>' +
                        '<td>' + item.comissao + '</td>' +
                        '<td class="text-end"><a href="ordersfromseller.php?vendedor_id='+item.id+'&page=1" class="btn btn-sm btn-link">Vendas</a></td></tr>';
                });
                $('#tableResults tbody').append(trHTML);

                if (data.links.next) {
                    $('.btnPageNext').removeClass('disabled');
                    $('.btnPageNext a').attr('href', CURRENT_URL.origin + CURRENT_URL.pathname + '?page=' + getChangePage(data.links.next));
                }

                if (data.links.prev) {
                    $('.btnPagePrev').removeClass('disabled');
                    $('.btnPagePrev a').attr('href', CURRENT_URL.origin + CURRENT_URL.pathname + '?page=' + getChangePage(data.links.prev));
                }

            } else {

                $('#tableResults tbody').append('<tr class="table-warning text-center"><td colspan="5">nenhum item</td></tr>');

            }

        },
        error: function (request, status, error) {
            alert('Não foi possivel completar a requisição!')
        }
    });

}


/**
 * Carrega os dados e aplica na tabela
 * orders.php
 */
function loadDataOrders()
{

    $.ajax({
        type: "GET",
        url: URL_API+'?page='+currentPage(),
        dataType: "json",
        success:function(data){

            //limpa a tabela
            $('#tableResults tbody').html('');

            if(data.data.length > 0) {

                let trHTML = '';
                $.each(data.data, function (i, item) {
                    trHTML += '<tr><td>' + item.id + '</td>' +
                        '<td>' + item.vendedor.nome + '</td>' +
                        '<td>' + item.venda_valor + '</td>' +
                        '<td>' + item.comissao.porcentagem + '</td>' +
                        '<td class="text-end">' + item.comissao_valor + '</td></tr>';
                });
                $('#tableResults tbody').append(trHTML);

                if (data.links.next) {
                    $('.btnPageNext').removeClass('disabled');
                    $('.btnPageNext a').attr('href', CURRENT_URL.origin + CURRENT_URL.pathname + '?page=' + getChangePage(data.links.next));
                }

                if (data.links.prev) {
                    $('.btnPagePrev').removeClass('disabled');
                    $('.btnPagePrev a').attr('href', CURRENT_URL.origin + CURRENT_URL.pathname + '?page=' + getChangePage(data.links.prev));
                }

            } else {

                $('#tableResults tbody').append('<tr class="table-warning text-center"><td colspan="5">nenhum item</td></tr>');

            }

        },
        error: function (request, status, error) {
            alert('Não foi possivel completar a requisição!')
        }
    });

}


/**
 * Carrega os dados e aplica na tabela
 * ordersfromseller.php
 */
function loadDataOrdersFromSeller()
{

    $.ajax({
        type: "GET",
        url: URL_API+'/'+sellerId()+'?page='+currentPage(),
        dataType: "json",
        success:function(data){

            //limpa a tabela
            $('#tableResults tbody').html('');

            if(data.data.length > 0) {

                let trHTML = '';
                $.each(data.data, function (i, item) {
                    trHTML += '<tr><td>' + item.id + '</td>' +
                        '<td>' + item.nome + '</td>' +
                        '<td>' + item.venda_valor + '</td>' +
                        '<td>' + item.comissao_per + '</td>' +
                        '<td class="text-end">' + item.comissao_valor + '</td></tr>';
                });
                $('#tableResults tbody').append(trHTML);

                if (data.links.next) {
                    $('.btnPageNext').removeClass('disabled');
                    $('.btnPageNext a').attr('href', CURRENT_URL.origin + CURRENT_URL.pathname + '?vendedor_id='+sellerId()+'&page=' + getChangePage(data.links.next));
                }

                if (data.links.prev) {
                    $('.btnPagePrev').removeClass('disabled');
                    $('.btnPagePrev a').attr('href', CURRENT_URL.origin + CURRENT_URL.pathname + '?vendedor_id='+sellerId()+'&page=' + getChangePage(data.links.prev));
                }

            } else {

                $('#tableResults tbody').append('<tr class="table-warning text-center"><td colspan="5">nenhum item</td></tr>');

            }

        },
        error: function (request, status, error) {
            alert('Não foi possivel completar a requisição!')
        }
    });

}


//Formulario cadastro
$(document).ready(function() {

    $('.processform').submit(function (e){

        e.preventDefault();
        let form = $(this);

        $('#btnSalvar').attr('disabled', true);
        $('#btnSalvar span').removeClass('d-none');

        $.ajax({
            type: "POST",
            url: URL_API,
            data: form.serialize(),
            dataType: "json",
            success:function(data){
                window.location.href = CURRENT_URL.origin + CURRENT_URL.pathname + '?success=1'
            },
            error: function (request, status, error) {
                $('.returnError').show();
                $('.messageError').html(request.responseJSON.message);
                $('#btnSalvar').attr('disabled', false);
                $('#btnSalvar span').addClass('d-none');
            }
        });
    })

});
