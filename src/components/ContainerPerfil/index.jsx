import React from "react";
import "./styles.css";
import ModalPerfil from "../ModalPerfil";
import { Table } from "react-bootstrap";

function imprimir() {
  var divToPrint = document.getElementById("tabela-itens-rel");
  var newWin = window.open("");
  newWin.document.write(divToPrint.outerHTML);
  newWin.print();
  newWin.close();
}

const ContainerPerfil = (props) => {
  return (
    <div>
      <section className="usuario__perfil">
        <div className="dados-usuarios__perfil">
          <div className="dados-usuarios-texto__perfil">
            <h3>Isabela Almeida, 25</h3>
            <p>Recife, PE</p>
            <p>isalmeida@gmail.com</p>
          </div>
        </div>

        <div>
          <p className="dados-usuarios-texto__perfil">Saldo total</p>
          <h2 className="renda__perfil">RS 16.500,00</h2>
          <button className="button__relatorios" onClick={imprimir}>Gerar relatório</button>
        </div>
      </section>
      <div className="col-md-12 mt-5 d-none" id="tabela-itens-rel">
        <Table className="table table-bordered">
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
              <td className="semLinha_esquerda">01/06/2021</td>
              <td>Gasolina</td>
              <td>R$ 150,00</td>
              <td className="semLinha_direita">Despesa</td>
            </tr>
            <tr>
              <td className="semLinha_esquerda">04/06/2021</td>
              <td>Movimentação</td>
              <td>R$ 80,00</td>
              <td className="semLinha_direita">Entrada</td>
            </tr>
            <tr>
              <td className="semLinha_esquerda">05/06/2021</td>
              <td>Energia Elétrica</td>
              <td>R$ 120,00</td>
              <td className="semLinha_direita">Despesa</td>
            </tr>
            <tr>
              <td className="semLinha_esquerda">09/06/2021</td>
              <td>Compesa</td>
              <td>R$ 80,00</td>
              <td className="semLinha_direita">Despesa</td>
            </tr>
            <tr>
              <td className="semLinha_esquerda">10/06/2021</td>
              <td>Feira</td>
              <td>R$ 458,37</td>
              <td className="semLinha_direita">Despesa</td>
            </tr>
          </tbody>
        </Table>
      </div>
      <div>
        <ModalPerfil />
      </div>
    </div>
  );
};

export default ContainerPerfil;
