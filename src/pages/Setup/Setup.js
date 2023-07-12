import './Setup.css'
import PageTitle from '../../components/PageTitle/PageTitle'
import DocumentTitle from '../../components/DocumentTitle/DocumentTitle'

function Setup() {
  return (
    <div className="page page-column setup-page">
      <DocumentTitle title="Setup" />
      <PageTitle name="Meu setup" />
      <section>
        <div className="setup-area">
          <h3>Workstation</h3>
          <ul>
            <li><a href="https://www.lenovo.com/br/pt/laptops/ideapad/ideapad-gaming-laptops/IdeaPad-L340-15IRH-Gaming/p/88IPL301161">Laptop: Lenovo Ideapad L340 Gaming</a></li>
            <li><a href="https://www.amazon.com.br/gp/product/B07XC936P8/ref=ppx_yo_dt_b_asin_title_o01_s00?ie=UTF8&psc=1">Headset: Razer Kraken Lite</a></li>
            <li><a href="https://www.amazon.com.br/gp/product/B07YNG2L67/ref=ppx_yo_dt_b_asin_title_o00_s00?ie=UTF8&psc=1">Headphone: Philips UH202 BT</a></li>
            <li><a href="https://www.amazon.com.br/gp/product/B01LYIY2HG/ref=ppx_yo_dt_b_asin_title_o00_s00?ie=UTF8&psc=1">Earphone: Bases Encok W04</a></li>
            <li><a href="https://pt.aliexpress.com/item/1005004866196078.html?spm=a2g0o.order_list.order_list_main.5.6d4bcaa4daN1Nt&gatewayAdapt=glo2bra">Earphone 2: Lenovo Thinkplus LP40</a></li>
            <li><a href="https://www.amazon.com.br/gp/product/B0765YY6TM/ref=ppx_yo_dt_b_asin_title_o01_s00?ie=UTF8&psc=1">Mousepad: Fortrek G Speed Medium</a></li>
            <li><a href="https://www.amazon.com.br/Mouse-Nanoreceptor-Inclusa-Logitech-Mouses/dp/B074L9L5KZ?th=1">Logitech M170 Wireless</a></li>
          </ul>
        </div>
        <div className="setup-area">
          <h3>Coding</h3>
          <ul>
            <li><a href="https://code.visualstudio.com/">IDE: VS Code</a></li>
            <li><a href="https://marketplace.visualstudio.com/items?itemName=rocketseat.theme-omni">Theme: Omni</a></li>
            <li><a href="https://www.jetbrains.com/pt-br/lp/mono/">Font: JetBrains Mono</a></li>
          </ul>
        </div>
        <div className="setup-area">
          <h3>Books</h3>
          <ul>
            <li><a href="https://www.amazon.com.br/gp/product/8576082675/ref=ppx_yo_dt_b_asin_title_o01_s00?ie=UTF8&psc=1">Código Limpo: Habilidades Práticas do Agile Software</a></li>
            <li><a href="https://www.amazon.com.br/gp/product/8550804606/ref=ppx_yo_dt_b_asin_title_o01_s00?ie=UTF8&psc=1">Arquitetura Limpa: O Guia do Artesão para Estrutura e Design de Software</a></li>
            <li><a href="/setup">PHP4 e MySQL</a></li>
            <li><a href="/setup">Introdução a Estrutura de Dados</a></li>
            <li><a href="/setup">Introdução ao Desenvolvimento de Aplicativos para o Android</a></li>
          </ul>
        </div>
        <div className="setup-area">
          <h3>Newsletter</h3>
          <ul>
            <li><a href="https://filipedeschamps.com.br/newsletter">Filipe Deschamps</a></li>
            <li><a href="https://thenewscc.com.br/indicacao/?grsf=vlch08">The News</a></li>
          </ul>
        </div>
      </section>
    </div>
  )
}

export default Setup