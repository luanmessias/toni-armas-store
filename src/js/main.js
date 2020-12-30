// Gobal vars
const pageW = window.innerWidth;
const mobResMax = 767;


const createHeaderDesktop = () => {
  // New Html Tgas
  const menuContainerHtml = '<div class="menu_container"></div>';
  const IconLogin = '<i class="fas fa-sign-in-alt"></i>'
  const IconCart = '<i class="fas fa-shopping-cart"></i>'
  const MiniCartCont = '<div class="name-prod"></div>'

  // Selectors for tags that already exists 
  const fullHeader = $('#cabecalho');
  const fixedHeader = $('#barraTopo');
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

  if (pageW >= mobResMax) {
    var lastScrollTop = 0;

    $(window).scroll(function (event) {
      var st = jQuery(this).scrollTop();
      if (st > fullHeader.height()) {
        fullHeader.addClass('fixed');
        if (st > lastScrollTop) {
          fullHeader.addClass('reduce');
        } else if (st < lastScrollTop) {
          fullHeader.removeClass('reduce');
        }
      } else if (st < lastScrollTop) {
        fullHeader.removeClass('fixed');
      };
      lastScrollTop = st;
    });

  }

}

const createHeaderMobile = () => {
  //New Html Tags
  const MobMenu = $('<li class="mobMenu"><i class="fas fa-bars"></i><i class="fas fa-times"></i></li>')
  const mobSearch = $('<li class="mobSearch"><i class="fas fa-search-plus"></i><i class="fas fa-search-minus"></i></li>')
  
  //Already existing tag selector
  const mobileBar = $('.atalhos-mobile > ul');
  const mobMenuButton = $('.atalho-menu');
  const mobSearchBar = $('.busca');

  // Actions
  if(pageW <= mobResMax) {
    mobileBar.prepend(MobMenu);
    mobileBar.append(mobSearch);

    $('.mobMenu').click(function() {
      $(this).toggleClass('active');
      mobMenuButton.click();
    });

    $('.mobSearch').click(function() {
      $(this).toggleClass('active');
      $('.logo').toggleClass('active');
      mobSearchBar.toggleClass('active');
    });

    $('.nivel-um .com-filho').click(function() {
      $(this).toggleClass('open');
    })
  }
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
  createHeaderDesktop()
  createHeaderMobile()
  setSelectedCategory()
  //TEMP__incrementSubMenu()
});

//Load actions
jQuery(window).load(function () {

});

//On resize actions
jQuery(window).onresize = function () {

}
