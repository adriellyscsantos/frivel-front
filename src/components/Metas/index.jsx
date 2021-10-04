import React from "react";
import "./styles.css";
import { IoTrashOutline } from "react-icons/io5";
import { GiArcheryTarget } from "react-icons/gi";
import { VscCalendar } from "react-icons/vsc";
import ModalMetas from "../../components/ModalMetas";
import ModalExcluirMetas from "../../components/ModalExcluirMetas";
import VisualizarMetas from "../../components/VisualizarMetas";

const Metas = () => {
  return (
    <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4"><div className="chartjs-size-monitor"><div className="chartjs-size-monitor-expand"><div className=""></div></div><div className="chartjs-size-monitor-shrink"><div className=""></div></div></div>
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center margin-d pb-2 mb-4 ">
        <h1 className="h2">Metas</h1>
        <div>
          <a href="#demo-modal"><button type="button" className="btn btn-new-meta btn-sm"><i aria-hidden="true"></i>+ NOVA META</button></a>
        </div>
      </div>
      <div className="row">
        <div className="col-md-4">
          <div className="card shadow p-2 mb-5 bg-white roundedx">
            <div className="card-body">
              <div className="row">
                <div className="col-md-2 icones">
                  <GiArcheryTarget size={25} className='target' />
                </div>
                <div className="col-md-8">
                  <h5 className="card-title">Viagem para Londres</h5>
                </div>
                <div className="col-md-2 icones">
                  <a href="#demo-modalexcluirmetas"><IoTrashOutline size={25} className='trash' /></a>
                </div>
              </div>
              <div className="row">
                <div className="col-md-8">
                  <VscCalendar className="fa-calendar-alt" />
                  <span className="calendar">11/10/2022</span>
                </div>
                <div className="col-md-4">
                  <a href="#demo-visualizarmetas"><button type="button" className="buttonvisualizar"> Visualizar</button></a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card shadow p-2 mb-5 bg-white roundedx">
            <div className="card-body">
              <div className="row">
                <div className="col-md-2  icones">
                  <GiArcheryTarget size={25} className='target' />
                </div>
                <div className="col-md-8">
                  <h5 className="card-title">Notebook Novo</h5>
                </div>
                <div className="col-md-2 icones">
                  <a href="#demo-modalexcluirmetas"><IoTrashOutline size={25} className='trash' /></a>
                </div>
              </div>
              <div className="row">
                <div className="col-md-8">
                  <VscCalendar className="fa-calendar-alt" />
                  <span className="calendar">11/03/2022</span>
                </div>
                <div className="col-md-4">
                <a href="#demo-visualizarmetas"><button type="button" className="buttonvisualizar"> Visualizar</button></a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card shadow p-2 mb-5 bg-white roundedx">
            <div className="card-body">
              <div className="row">
                <div className="col-md-2 icones">
                  <GiArcheryTarget size={25} className='target' />
                </div>
                <div className="col-md-8">
                  <h5 className="card-title">Reserva de emergência</h5>
                </div>
                <div className="col-md-2 icones">
                  <a href="#demo-modalexcluirmetas"><IoTrashOutline size={25} className='trash' /></a>
                </div>
              </div>
              <div className="row">
                <div className="col-md-8">
                  <VscCalendar className="fa-calendar-alt" />
                  <span className="calendar">01/02/2022</span>
                </div>
                <div className="col-md-4">
                <a href="#demo-visualizarmetas"><button type="button" className="buttonvisualizar"> Visualizar</button></a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card shadow p-2 mb-5 bg-white roundedx">
            <div className="card-body">
              <div className="row">
                <div className="col-md-2 icones">
                  <GiArcheryTarget size={25} className='target' />
                </div>
                <div className="col-md-8">
                  <h5 className="card-title">Casa Nova</h5>
                </div>
                <div className="col-md-2 icones">
                  <a href="#demo-modalexcluirmetas"><IoTrashOutline size={25} className='trash' /></a>
                </div>
              </div>
              <div className="row">
                <div className="col-md-8">
                  <VscCalendar className="fa-calendar-alt" />
                  <span className="calendar">01/01/2024</span>
                </div>
                <div className="col-md-4">
                <a href="#demo-visualizarmetas"><button type="button" className="buttonvisualizar"> Visualizar</button></a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card shadow p-2 mb-5 bg-white roundedx">
            <div className="card-body">
              <div className="row">
                <div className="col-md-2 icones">
                  <GiArcheryTarget size={25} className='target' />
                </div>
                <div className="col-md-8">
                  <h5 className="card-title">Carro Novo</h5>
                </div>
                <div className="col-md-2 icones">
                  <a href="#demo-modalexcluirmetas"><IoTrashOutline size={25} className='trash' /></a>
                </div>
              </div>
              <div className="row">
                <div className="col-md-8">
                  <VscCalendar className="fa-calendar-alt" />
                  <span className="calendar">23/12/2022</span>
                </div>
                <div className="col-md-4">
                <a href="#demo-visualizarmetas"><button type="button" className="buttonvisualizar"> Visualizar</button></a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card shadow p-2 mb-5 bg-white roundedx">
            <div className="card-body">
              <div className="row">
                <div className="col-md-2 icones">
                  <GiArcheryTarget size={25} className='target' />
                </div>
                <div className="col-md-8">
                  <h5 className="card-title">Cozinha Planejada</h5>
                </div>
                <div className="col-md-2 icones">
                  <a href="#demo-modalexcluirmetas"><IoTrashOutline size={25} className='trash' /></a>
                </div>
              </div>
              <div className="row">
                <div className="col-md-8">
                  <VscCalendar className="fa-calendar-alt" />
                  <span className="calendar">01/02/2024</span>
                </div>
                <div className="col-md-4">
                <a href="#demo-visualizarmetas"><button type="button" className="buttonvisualizar"> Visualizar</button></a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card shadow p-2 mb-5 bg-white roundedx">
            <div className="card-body">
              <div className="row">
                <div className="col-md-2 icones">
                  <GiArcheryTarget size={25} className='target' />
                </div>
                <div className="col-md-8">
                  <h5 className="card-title">Viagem para Gramado</h5>
                </div>
                <div className="col-md-2 icones">
                  <a href="#demo-modalexcluirmetas"><IoTrashOutline size={25} className='trash' /></a>
                </div>
              </div>
              <div className="row">
                <div className="col-md-8">
                  <VscCalendar className="fa-calendar-alt" />
                  <span className="calendar">15/07/2022</span>
                </div>
                <div className="col-md-4">
                <a href="#demo-visualizarmetas"><button type="button" className="buttonvisualizar"> Visualizar</button></a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card shadow p-2 mb-5 bg-white roundedx">
            <div className="card-body">
              <div className="row">
                <div className="col-md-2 icones">
                  <GiArcheryTarget size={25} className='target' />
                </div>
                <div className="col-md-8">
                  <h5 className="card-title">Aposentadoria</h5>
                </div>
                <div className="col-md-2 icones">
                  <a href="#demo-modalexcluirmetas"><IoTrashOutline size={25} className='trash' /></a>
                </div>
              </div>
              <div className="row">
                <div className="col-md-8">
                  <VscCalendar className="fa-calendar-alt" />
                  <span className="calendar">01/01/2050</span>
                </div>
                <div className="col-md-4">
                <a href="#demo-visualizarmetas"><button type="button" className="buttonvisualizar"> Visualizar</button></a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card shadow p-2 mb-5 bg-white roundedx">
            <div className="card-body">
              <div className="row">
                <div className="col-md-2 icones">
                  <GiArcheryTarget size={25} className='target' />
                </div>
                <div className="col-md-8">
                  <h5 className="card-title">Casa de Praia</h5>
                </div>
                <div className="col-md-2 icones">
                  <a href="#demo-modalexcluirmetas"><IoTrashOutline size={25} className='trash' /></a>
                </div>
              </div>
              <div className="row">
                <div className="col-md-8">
                  <VscCalendar className="fa-calendar-alt" />
                  <span className="calendar">15/03/2026</span>
                </div>
                <div className="col-md-4">
                <a href="#demo-visualizarmetas"><button type="button" className="buttonvisualizar"> Visualizar</button></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <ModalMetas />
        <ModalExcluirMetas />
        <VisualizarMetas />
      </div>
    </main>
  );
};

export default Metas;
