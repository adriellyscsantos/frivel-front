import React, { useState, useEffect } from "react";
import "./styles.css";
import api from "../../services/api";
import { RiSubtractFill } from "react-icons/ri";
import { GiBullseye } from "react-icons/gi";
import { AiOutlineEye } from "react-icons/ai";
import { BiEdit } from "react-icons/bi";
import { VscCalendar } from "react-icons/vsc";
import ModalMetas from "../../components/ModalMetas";
import ModalEditarMeta from "../../components/ModalEditarMetas";
import ModalExcluirMetas from "../../components/ModalExcluirMetas";
import VisualizarMetas from "../../components/VisualizarMetas";
import { ProgressBar } from "react-bootstrap";

const data = [
  {
    nome: "Adrielly",
    data: "21/05/2022",
    descricao: 'Lorem ipsum dolor sit amet, consectetur, sed do eiusmod tempor incididunt ut labore et dol'
  },
  {
    nome: "Adrielly",
    data: "21/05/2022",
    descricao: 'Lorem ipsum dolor sit amet, consectetur, sed do eiusmod tempor incididunt ut labore et dol'
  },
  {
    nome: "Adrielly",
    data: "21/05/2022",
    descricao: 'Lorem ipsum dolor sit amet, consectetur, sed do eiusmod tempor incididunt ut labore et dol'
  },
  {
    nome: "Adrielly",
    data: "21/05/2022",
    descricao: 'Lorem ipsum dolor sit amet, consectetur, sed do eiusmod tempor incididunt ut labore et dol'
  },
];
const Metas = () => {
  const [meta, setMeta] = useState();

  useEffect(() => {
    // api
    //   .get(`/meta/obtermetas`)
    //   .then((response) => {
    //     setMeta(response.data);
    //   })
    //   .catch(() => {
    //     alert("Erro");
    //   });
    // console.log(data);
  }, []);

  return (
    <main className="col-md-12 main__meta">
      <div>
      <div className="chartjs-size-monitor">
        <div className="chartjs-size-monitor-expand">
          <div className=""></div>
        </div>
        <div className="chartjs-size-monitor-shrink">
          <div className=""></div>
        </div>
      </div>
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center margin-d pb-2 mb-4 ">
        <h1 className="h2">Metas</h1>
        <div>
          <a href="#demo-modal">
            <button type="button" className="btn btn-new-meta btn-sm">
              <i aria-hidden="true"></i>+ NOVA META
            </button>
          </a>
        </div>
      </div>
      <div className="row">
        {data?.map((item) => (
          <div className="col-md-6  col-sm-12 col-xs-8  " key={item?.id}>
            <div className="card shadow p-2 mb-5 bg-white roundedx">
              <div className="card-body">
                <div className="row">
                  <div className="col-md-8">
                    <h5 className="card-title txt_meta_meio">{item?.nome}</h5>
                  </div>
                  <div className="col-md-4 d-flex justify-content-end">
                  <div className="col-md-2 icones">
                    <a href="#demo-modal-editar-meta">
                      <BiEdit size={20} className="edit_btn_icon" />
                    </a>
                  </div>
                  <div className="col-md-2 icones">
                    <a href="#demo-modalexcluirmetas">
                      <RiSubtractFill size={20} className="trash" />
                    </a>
                  </div>
                  </div>
                </div>
                
            <div className="txt-area">
              <textarea
                rows="4"
                // cols="50"
                className="modal__form-textarea p-3"
                disabled
              >{item.descricao}</textarea>
          
            </div>
                <div className="row">
                
                  <div className="col-md-12 progresso-txt">Progresso</div>
                  <div className="progresso-modal col-md-12">
                    <ProgressBar variant="success" now={60} />
                  </div>
                  <div className="col-md-12  progresso_meta mt-2">
                    R$ 500,00 de R$ 900,00
                  </div>
                  <div className="col-md-10 mt-3">
                    <VscCalendar className="fa-calendar-alt" />
                    <span className="calendar">{item?.data}</span>
                  </div>
                 
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div>
        <ModalMetas />
        <ModalEditarMeta />
        <ModalExcluirMetas />
        <VisualizarMetas />
      </div>
      </div>
    </main>
  );
};

export default Metas;
