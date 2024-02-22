import './Setup.css'
import PageTitle from '../../components/PageTitle/PageTitle'
import DocumentTitle from '../../components/DocumentTitle/DocumentTitle'
import SetupCard from '../../components/SetupCard/SetupCard'

function Setup() {
  return (
    <div className="page page-column setup-page">
      <DocumentTitle title="Setup" />
      <PageTitle name="Meu setup" />
      <section>
        <div className="setup-area">
          <h3>Workstation</h3>
          <div className="setup-holder">
            <SetupCard src="laptop" social="Laptop" user="Lenovo L340 Gaming" url="https://www.lenovo.com/br/pt/laptops/ideapad/ideapad-gaming-laptops/IdeaPad-L340-15IRH-Gaming/p/88IPL301161" />
            <SetupCard src="suporte" social="Suporte p/ Laptop" url="https://pt.aliexpress.com/item/1005005217800671.html?spm=a2g0o.order_list.order_list_main.4.76eecaa4wvymvg&gatewayAdapt=glo2bra" />
            <SetupCard src="headset" social="Headset" user="Razer Kraken Lite" url="https://www.amazon.com.br/gp/product/B07XC936P8/ref=ppx_yo_dt_b_asin_title_o01_s00?ie=UTF8&psc=1" />
            <SetupCard src="headphone" social="Headphone" user="Philips UH202 BT" url="https://www.amazon.com.br/gp/product/B07YNG2L67/ref=ppx_yo_dt_b_asin_title_o00_s00?ie=UTF8&th=1" />
            <SetupCard src="earphone1" social="Earpods" user="Lenovo Thinkplus XT88" url="https://pt.aliexpress.com/item/1005005719551043.html?spm=a2g0o.order_list.order_list_main.10.79f0caa43SldAI&gatewayAdapt=glo2bra" />
            <SetupCard src="earphone2" social="Earpods" user="Baseus Encok W04" url="https://www.amazon.com.br/gp/product/B01LYIY2HG/ref=ppx_yo_dt_b_asin_title_o00_s00?ie=UTF8&psc=1" />
            <SetupCard src="mouse1" social="Mouse" user="Baseus F01B Wireless" url="https://pt.aliexpress.com/item/1005005847298347.html?spm=a2g0o.order_list.order_list_main.6.649ecaa4iWc5Ig&gatewayAdapt=glo2bra" />
            <SetupCard src="mouse2" social="Mouse" user="Dell MS3320p" url="https://pt.aliexpress.com/i/1005002494212473.html" />
            <SetupCard src="mousepad" social="Mousepad" user="Fortrek G Speed Medium" url="https://www.amazon.com.br/gp/product/B0765YY6TM/ref=ppx_yo_dt_b_asin_title_o01_s00?ie=UTF8&th=1" />
          </div>
        </div>
        <div className="setup-area">
          <h3>Coding</h3>
          <div className="setup-holder">
            <SetupCard src="vscode" social="IDE" user="VS Code" url="https://code.visualstudio.com/" />
            <SetupCard src="mintheme" social="Tema" user="Min Theme" url="https://marketplace.visualstudio.com/items?itemName=miguelsolorio.min-theme" />
            {/* <SetupCard src="omni-dracula" social="Tema 1" user="Omni Dracula" url="https://marketplace.visualstudio.com/items?itemName=ThiagoLcioBittencourt.omni-dracula-theme" /> */}
            {/* <SetupCard src="omni" social="Tema 2" user="Omni" url="https://marketplace.visualstudio.com/items?itemName=rocketseat.theme-omni" /> */}
            <SetupCard src="jetbrains" social="Fonte" user="JetBrains Mono" url="https://www.jetbrains.com/pt-br/lp/mono/" />
          </div>
        </div>
        <div className="setup-area">
          <h3>Books</h3>
          <div className="setup-holder tooltip-container">
            <SetupCard src="codigo" social="Código Limpo" url="https://www.amazon.com.br/gp/product/8576082675/ref=ppx_yo_dt_b_asin_title_o01_s00?ie=UTF8&psc=1" />
            <SetupCard src="arquitetura" social="Arquitetura Limpa" url="https://www.amazon.com.br/gp/product/8550804606/ref=ppx_yo_dt_b_asin_title_o01_s00?ie=UTF8&psc=1" />
            <SetupCard src="php4" social="PHP4 e MySQL" url="/setup" />
            <SetupCard src="estrutura" social="Estrutura de Dados" url="/setup" />
            <SetupCard src="android" social="Aplicativos para o Android" url="/setup" />
          </div>
        </div>
        <div className="setup-area">
          <h3>Newsletter</h3>
          <div className="setup-holder">
            <SetupCard src="deschamps" social="Filipe Deschamps" url="https://filipedeschamps.com.br/newsletter" />
            <SetupCard src="thenews" social="The News" url="https://thenewscc.beehiiv.com/subscribe?ref=huLORfHEBz" />
            <SetupCard src="codecon" social="Codecon" url="https://codecon.substack.com" />
            <SetupCard src="biro" social="Birobirobiro" url="https://birobirobiro.substack.com" />
          </div>
        </div>
      </section>
    </div>
  )
}

export default Setup