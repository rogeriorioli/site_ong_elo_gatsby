import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import TitlePage from "../components/TitlePage/"
import SliderCamisetas from '../components/SliderCamisetas'
import Title from '../components/Title'
const markup = () =>  `<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
  <input type="hidden" name="cmd" value="_s-xclick">
  <input type="hidden" name="hosted_button_id" value="ZLP4H5AWZJKTL">
  <input type="image" src="https://www.paypalobjects.com/pt_BR/BR/i/btn/btn_subscribeCC_LG.gif" border="0" name="submit" alt="PayPal - A maneira fácil e segura de enviar pagamentos online!">
  <img alt="" border="0" src="https://www.paypalobjects.com/pt_BR/i/scr/pixel.gif" width="1" height="1">
  </form>
`
const buttonTshirt = () => `<form target="paypal" action="https://www.paypal.com/cgi-bin/webscr" method="post">
<input type="hidden" name="cmd" value="_s-xclick">
<input type="hidden" name="hosted_button_id" value="XEN4U2PRANSFS">
<table>
<tr><td><input type="hidden" name="on0" value="Tamanho">Tamanho</td></tr><tr><td><select name="os0">
	<option value="P">P R$30,00</option>
	<option value="M">M R$30,00</option>
	<option value="G">G R$30,00</option>
	<option value="GG">GG R$30,00</option>
</select> </td></tr>
<tr><td><input type="hidden" name="on1" value="Cores">Cores</td></tr><tr><td><select name="os1">
	<option value="Preto">Preto </option>
	<option value="Branca">Branca </option>
	<option value="Lilás">Lilás </option>
</select> </td></tr>
</table>
<input type="hidden" name="currency_code" value="BRL">
<input type="image" src="https://www.paypalobjects.com/pt_BR/i/btn/btn_cart_LG.gif" border="0" name="submit" alt="PayPal - A maneira fácil e segura de enviar pagamentos online!">
<img alt="" border="0" src="https://www.paypalobjects.com/pt_BR/i/scr/pixel.gif" width="1" height="1">
</form>`
const DoacoesPage = () => (
  <Layout>
    <SEO title="Doacoes" />
    <main>
      <TitlePage title="Doações" />
      <div className="container">
        <article>
          <h2>Próxima ação – 14/12 – NATAL</h2> 
          <p>O que vc coloca na sua árvore? Este Ano.</p>
          <p>NÓS da ELO, resolvemos adotar alguns moradores de rua... Na Páscoa,
          adoçamos os corações com chocolate... No Inverno, aquecemos com roupas
          e um café da manhã bem quente... No Dia das Crianças, eles foram
          passear e tiveram experiências que NUNCA tinham vivido.</p>
          <p>
          Tudo isso com a AJUDA de vcs! Agora, O NATAL está chegando e com ele, a espera do
          Papai Noel, dos presentes, dos brinquedos e claro, AMOR.. MUITO AMOR!
          Precisamos de VOCÊ para tornar este dia possível.</p>
          <p>Para isso, vamos montar uma linda Árvore de Natal e deixar que o CORAÇÃO DE CADA UM DE
          VOCÊS a decore com Panetones e Brinquedos. Vamos arrecadar as doações
          até o dia 13/12 e vcs acompanharão tudo por aqui.</p>
           <p>
          para moradores de rua (adultos e crianças) e vamos receber as doações
          até o dia 13/12 nos seguintes pontos de entrega:</p> 
          <b>Rua Nova York, 350 - Brooklin </b> <br/> 
          <p>
          Paulista Horário comercial - Combinar horário aproximado da
          entrega, para não ter imprevistos. </p>
          <b>
          Rua Praia do Castelo, 250 apto 124 - Vila Mascote </b> <br/>
          <p>Deixar na portaria para Carla Orioli. <br/>
          Nossa programação é fazer a entrega no da 14/12.  <br/>
          E então? Vamos JUNTOS dar um pouco mais
          de ALEGRIA & ESPERANÇA para estas Famílias?</p>
          <>
          <h2>Aceitamos Doações Financeiras</h2> 
          <p>Apenas 6 parcelas de R$10,00 você irá fazer muitos sorrisos</p>
          <p dangerouslySetInnerHTML={{ __html : markup()}} className="pButton" />
          </>
        </article>
        <article className="store">
          <Title title="Lojinha Elo" subtitle="Você pode nós ajudar adquirindo essa linda camiseta. "/> 
          <div className="col">
              <SliderCamisetas/>
          </div>
          <div className="col">
          <h2>Camisetas Elo</h2>
          <p>100% algodão , estamopa em silkscreen</p>
          <p dangerouslySetInnerHTML={{ __html : buttonTshirt()}} className="pButton" />
          </div>
        </article>
      </div>
    </main>
  </Layout>
)
export default DoacoesPage
