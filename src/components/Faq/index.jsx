import React from "react";
import "./styles.css";
import { BiConversation } from "react-icons/bi";
import frivelmusica from '../../assets/frivelmusica.mpeg';
import teladereceita from '../../assets/teladereceita.mp3';
import teladelogin from '../../assets/teladelogin.mp3';
import teladeinicio from '../../assets/teladeinicio.mp3';
import telaprincipal from '../../assets/telaprincipal.mp3';
import telademetas from '../../assets/telademetas.mp3';
import teladerelatorio from '../../assets/teladerelatorio.mp3';
import teladegastos from '../../assets/teladegastos.mp3';
import frivelvideo from  '../../assets/frivelvideo.mp4';


const Faq = () => {
    return (
        <main className="col-md-12 main__meta">
            <div className="card faq_card d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center margin-d pb-2 mb-4 ">
                <h5 className="subtitle_faq">Central de ajuda</h5>
                <BiConversation size={25} className='icon_conver' />
                <div className="row" >
                    <h4 className="title_faq">Como podemos te ajudar?
                        <img className="gif_faq" src="https://media.giphy.com/media/AfEhbVGJ7mGP8yQoCC/giphy.gif"></img></h4>
                </div>
                <div>
                    <h2 className="sub_faq">Apresentação:</h2>
                    <video className="videofaq" width="550" height="450" controls="controls" autoplay="autoplay">
                        <source src={frivelvideo} type="video/mp4"></source>
                        <object data="" width="340" height="250"></object>
                    </video>
                </div>
                <div>
                    {/* <h2 className="per_faq">Perguntas Frequentes:</h2> */}
                </div>
                <div>
                    <img className="imgvet" src="https://media.discordapp.net/attachments/891129745130008620/915447627854794752/DESENHO_FRIVEL15.png"></img>
                    <h5 className="titletext">Tela de Inicio</h5>
                    <h5 className="text">É a tela de inicial da aplicação e leva para as telas de “Login” ou “Cadastro”, assim como outro botão no meio da aplicação leva para uma outra pagina que ensina sobre a aplicação</h5>
                    <div>
                        <audio className="audio-t" autoplay controls src={teladeinicio} type="audio/mp3"></audio>
                    </div>
                </div>
                <div>
                    <h5 className="titletext">Tela de login</h5>
                    <h5 className="text">É a tela de acesso a aplicação, a qual você pode acessar depois de inserir seu “Email” e “senha” cadastrados anteriormente, caso não tenha se cadastrado, há uma opção ao lado esquerdo do login, ao qual lhe leva para a tela de “Cadastro”.</h5>
                    <div>
                        <audio className="audio-t" autoplay controls src={teladelogin} type="audio/mpeg"></audio>
                    </div>
                </div>
                <div>
                    <h5 className="titletext">Dashboard</h5>
                    <h5 className="text">É a  tela principal e primeira tela que a aplicação apresenta ao acessa-la, nesta tela você consegue visualizar seu saldo atual, suas informações pessoas, um gráfico comparativo com seus gastos e receitas adicionadas, assim como outro gráfico mostrando o andamento de suas metas, dessa tela você pode acessar a tela de metas ao clicar no botão "ver todas", assim como visualizar uma única meta ao clicar em "visualizar", além disso você pode adicionar ou alterar algumas informações suas ao clicar no botão "Editar perfil" situado embaixo da suas informações adicionadas anteriormente, esse botão abrirá um modal ao qual você pode modificar seu nome pre-registrado e também adicionar novas informações da forma que desejar, também é possível modificar a senha já registrada nessa "tela".</h5>
                    <div>
                        <audio className="audio-t" autoplay controls src={telaprincipal} type="audio/mp3"></audio>
                    </div>
                </div>
                <div>
                    <h5 className="titletext">Tela de cadastro</h5>
                    <h5 className="text">É a tela a qual se cria sua conta na aplicação, nela você precisa preencher os campos “Nome”, “Email” e “Senha”, logo após preencher todos os campos você pode confirmar seu cadastro. Caso tenha acessado a tela de cadastro já tendo uma conta, você pode clicar no botão “Entrar” que irá lhe direcionar para a tela de login.</h5>
                    <div>
                        <audio className="audio-t" autoplay controls src={telademetas} type="audio/mp3"></audio>
                    </div>
                </div>
                <div>
                    <h5 className="titletext">Tela de Relatório</h5>
                    <h5 className="text">Nessa tela você consegue ver todas as “receitas” adicionadas e todos os “gastos” que você teve no mês atual, caso queira, você pode mudar o mês ao qual está visualizando no “botão” no canto superior direito da tela, selecionando o mês desejado, além disso se pode imprimir todos os gastos e lucros do mês com um “botão” no canto inferior direito da tela.</h5>
                    <div>
                        <audio className="audio-t" autoplay controls src={teladerelatorio} type="audio/mp3"></audio>
                    </div>
                </div>
                <div>
                    <h5 className="titletext">Tela de Metas </h5>
                    <h5 className="text">É a tela que se cria as metas as quais o usuário pretende atingir ao economizar o seu dinheiro, o usuário pode criar quantas metas ele quiser no “botão” no canto superior direito da tela, ao clicar nesse botão aparecerá um “modal” aonde você pode registrar o “nome” da sua meta, descrevê-la, adicionar o valor da meta e até quando deseja atingi-la, após adicionar uma nova meta, você voltará para a tela onde tem todas as suas metas. Você pode observar que em cada meta criada, possuem 3 botões, um para editar a meta, um para visualizar a meta e outra para excluí-la, ao apertar o botão com “um olho” você observara todas as informações que você adicionou anteriormente e o seu progresso; no botão com “uma caneta”, você verá o mesmo “modal” que viu ao adicionar uma nova meta e ao clicar no botão “vermelho com um traço” aparecerá uma confirmação para você dizer se quer ou não excluir a meta.</h5>
                    <div>
                        <audio className="audio-t" autoplay controls src={telademetas} type="audio/mp3"></audio>
                    </div>
                </div>
                <div>
                    <h5 className="titletext">Tela de gastos</h5>
                    <h5 className="text">   É a tela que o usuário adiciona seus gastos mensais(fixos) e gastos e ocasionais(variados), o usuário pode criar um novo gasto no botão "novo gasto" que abrirá um modal, nesse modal o usuário pode descrever o gasto; classificar o tipo(fixo ou variado); categoria do gasto(lazer, alimentação, estudo, divida); adicionar valor ao gasto e a data do gasto em si... com o gasto criado, o usuário pode visualizar seu gasto e edita-lo no momento que quiser, ao apertar o botão com “um olho” e também pode excluir o gasto ao clicar no botão “vermelho com um traço” aparecerá uma notificação para você decidir se vai ou não excluir o gasto e logo depois aparecerá outra mensagem na parte superior da tela, confirmando a exclusão do gasto, no lado esquerdo da tela você também pode ver o seu histórico dos gastos registrados anteriormente.</h5>
                    <div>
                        <audio className="audio-t" autoplay controls src={teladegastos} type="audio/mp3"></audio>
                    </div>
                </div>
                <div>
                    <h5 className="titletext">Tela de receita</h5>
                    <h5 className="text"> É a tela a qual você adiciona valores ao saldo da sua conta, assim você pode controlar todo o dinheiro que receber, ao clicar em "nova receita", você pode descrever a receita e adicionar o seu valor e ao clicar no botão “vermelho com um traço” você pode excluir uma despesa adicionada erradamente.</h5>
                    <div>
                        <audio className="audio-t" autoplay controls src={teladereceita} type="audio/mp3"></audio>
                    </div>
                </div>
                <div>
                    <img className="imgmatri" src="https://media.discordapp.net/attachments/891129745130008620/915409015658409994/frivel.jpg"></img>
                </div>
                <div>
                    <h5 className="titletext-m"> Música =)</h5>
                    <audio className="musica" autoplay controls src={frivelmusica} type="audio/mpeg"></audio>
                </div>
            </div>
        </main>
    );
};
export default Faq;