import React from "react";
import "./style.css";
import { Table } from "react-bootstrap";

function imprimir(){
    var divToPrint=document.getElementById("tabela-itens-rel");
        var newWin= window.open("");
        newWin.document.write(divToPrint.outerHTML);
        newWin.print();
        newWin.close();
}

const Relatorios = () => {
    return (
        <main className="col-md-12 main__meta"><div className="chartjs-size-monitor"><div className="chartjs-size-monitor-expand"><div className=""></div></div><div className="chartjs-size-monitor-shrink"><div className=""></div></div></div>
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center margin-d pb-2 mb-4 ">
                <div className="row col-md-12 card card-geral-rel">
                    <div className="row">
                        <div className="col-md-4">
                            <h5 className="mt-5 titulo_rel" >Relatório Mensal</h5>
                        </div>
                        <div className="col-md-8">
                            <select className="float-end select-relatorio" defaultValue={6}>
                                <option value="1">Janeiro</option>
                                <option value="2">Fevereiro</option>
                                <option value="3">Maio</option>
                                <option value="4">Março</option>
                                <option value="5">Julho</option>
                                <option value="6" >Junho</option>
                                <option value="7">Julho</option>
                                <option value="8">Agosto</option>
                                <option value="9">Setembro</option>
                                <option value="10">Outubro</option>
                                <option value="11">Novembro</option>
                                <option value="12">Dezembro</option>

                            </select>
                        </div>
                    </div>
                    <div className="col-md-12 mt-5" id="tabela-itens-rel">
                        <Table className="table table-bordered" >
                            <thead>
                                <tr>
                                    <th className="semLinha_esquerda">Data</th>
                                    <th>Nome</th>
                                    <th>Valor</th>
                                    <th className="semLinha_direita">Tipo</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="semLinha_esquerda">04/06/2021</td>
                                    <td>Despeza</td>
                                    <td>R$ 40,00</td>
                                    <td className="semLinha_direita">Lazer</td>
                                </tr>
                                <tr>
                                    <td className="semLinha_esquerda">04/06/2021</td>
                                    <td>Movimentação</td>
                                    <td>R$ 80,00</td>
                                    <td className="semLinha_direita">Entrada</td>
                                </tr>
                                <tr>
                                    <td className="semLinha_esquerda">04/06/2021</td>
                                    <td>Despeza</td>
                                    <td>R$ 40,00</td>
                                    <td className="semLinha_direita">Lazer</td>
                                </tr>
                                <tr>
                                    <td className="semLinha_esquerda">04/06/2021</td>
                                    <td>Despeza</td>
                                    <td>R$ 40,00</td>
                                    <td className="semLinha_direita">Lazer</td>
                                </tr>
                                <tr>
                                    <td className="semLinha_esquerda">04/06/2021</td>
                                    <td>Despeza</td>
                                    <td>R$ 80,00</td>
                                    <td className="semLinha_direita">Lazer</td>
                                </tr>
                            </tbody>
                        </Table>
                    </div>
                    <div className="col-md-12">
                        <button className="float-end btn-imprimir" onClick={imprimir}>IMPRIMIR</button>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Relatorios;
