const createHeader = () => {
  // New Html Tgas
  const menuContainerHtml = '<div class="menu_container"></div>';
  const IconLogin = '<i class="fas fa-sign-in-alt"></i>'
  const IconCart = '<i class="fas fa-shopping-cart"></i>'
  const MiniCartCont = '<div class="name-prod"></div>'

  // Selectors for tags that already exists 
  const mainHeader = $('.menu.superior');
  const mainMenu = $('.menu.superior .nivel-um');
  const logo = $('#cabecalho .logo');
  const faleConosco = $('.barra-inicial .canais-contato .hidden-phone');
  const topLinks = $('#cabecalho .acoes-conta');
  const minhaConta = $('#cabecalho .acoes-conta > li + li');
  const headerSearchCont = $('#cabecalho .conteudo-topo .inferior');
  const BemVindo = $('#cabecalho .bem-vindo');
  const BemVindoSpan = $('#cabecalho .bem-vindo > span');
  const CarrinhoLinkHeader = $('#cabecalho .inferior .hidden-phone');
  const MiniCartProd = $('.carrinho-interno > ul > li');

  //Actions
  mainHeader.prepend(menuContainerHtml);
  $('.menu_container').prepend(logo).append(mainMenu);
  topLinks.append(faleConosco);
  CarrinhoLinkHeader.before(BemVindo);
  BemVindo.prepend(IconLogin);
  BemVindoSpan.html('LOGAR NA LOJA');

  MiniCartProd.each(function () {
    $('.preco-produto', this).prepend($('.nome-produto', this));
  });
}


const setSelectedCategory = () => {
  const bodyClasses = $('body').attr('class').trim().split(' ')
  const getClass = bodyClasses.find(bc => bc.includes('categoria-'))

  if(getClass !== undefined) {
    const categoryId = $(`.categoria-id-${getClass.split('categoria-').pop()}`)
    categoryId.addClass('active')
  }
}

const TEMP__incrementSubMenu = () => {
  for (let index = 0; index < 8; index++) {
    $('.nivel-dois').append(`
    <li class="categoria-marca-toni-armas">
      <a href="/marca/toni-armas.html" title="TONI ARMAS">
        PRODUTO ${index} <span class="count">(${index})</span>
      </a>
    </li>
    `)
  }
}


//Ready actions
jQuery(document).ready(function () {
  createHeader()
  setSelectedCategory()
  //TEMP__incrementSubMenu()
});

//Load actions
jQuery(window).load(function () {

});

//On resize actions
jQuery(window).onresize = function () {

}
