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
  const BtMobMenu = $('<li class="mobMenu"><i class="fas fa-bars"></i><i class="fas fa-times"></i></li>')
  const mobSearch = $('<li class="mobSearch"><i class="fas fa-search-plus"></i><i class="fas fa-search-minus"></i></li>')
  const mobAcoesConta = $('<li class="mobAcoesConta"></li>');
  const categoryContainer = `
    <div class="catmob">
      <div class="titulo-categoria catmob-title">
        <strong>NOSSAS CATEGORIAS</strong>
      </div>
    </div>
  `

  //Already existing tag selector
  const mobileBar = $('.atalhos-mobile > ul');
  const mobMenuButton = $('.atalho-menu');
  const mobSearchBar = $('.busca');
  const acoesConta = $('#cabecalho .acoes-conta');
  const mobMenu = $('#cabecalho .nivel-um');
  const menu = $('.menu.superior .menu_container .nivel-um');



  // Actions
  if (pageW <= mobResMax) {
    mobileBar.prepend(BtMobMenu);
    mobileBar.append(mobSearch);
    mobMenu.append(mobAcoesConta);
    mobAcoesConta.append(acoesConta);
    $('#corpo').prepend(categoryContainer);
    menu.clone().appendTo($('.catmob'));


    $('.mobMenu').click(function () {
      $(this).toggleClass('active');
      mobMenuButton.click();
    });

    $('.mobSearch').click(function () {
      $(this).toggleClass('active');
      $('.logo').toggleClass('active');
      mobSearchBar.toggleClass('active');
    });

    $('.nivel-um .com-filho').click(function () {
      $(this).toggleClass('open');
    })
  }
}

const setSelectedCategory = () => {
  const bodyClasses = $('body').attr('class').trim().split(' ')
  const getClass = bodyClasses.find(bc => bc.includes('categoria-'))

  if (getClass !== undefined) {
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

const fixHomeMidBanner = () => {
  const mainBanner = $('#cabecalho + .secao-banners .banner.cheio');
  const midBanner = $('#cabecalho + .secao-banners .banner.cheio + .banner');


  $('.vitrine-mas-vendido').before(midBanner);
}

const removeCpf = () => {
  $('#rodape > div .conteiner p[style="margin-bottom: 0;"]').html(
    $('#rodape > div .conteiner p[style="margin-bottom: 0;"]')
    .html()
    .replace(' - CPF: 215.068.468-31', '')
  )
}

const createFooter = () => {
  const logoWhite = '<img class="logo_footer" src="https://loja-toni-armas.s3.amazonaws.com/img/logo_white.png" />';
  const contBlocks = $('#rodape .institucional .conteiner > .row-fluid > div > .row-fluid');
  const payments = $('#rodape .pagamento');
  const seals = $('#rodape .selos');
  const newsletter = $('.componente.newsletter');

  contBlocks
    .prepend(logoWhite)
    .append(payments)
    .append(seals)
    .append(newsletter)
}


const youtubeLastestVideos = () => {
  const apiKey = 'AIzaSyDQ8lZ0RtNipoC31pIaryrJBjtbFidbuxQ'
  const maxResults = 3
  const channelId = 'UCdXC0S2gfKYY7DI2NZJuzTA'
  const videosUrl = `https://www.googleapis.com/youtube/v3/search?order=date&part=snippet&channelId=${channelId}&maxResults=${maxResults}&key=${apiKey}`

  fetch(videosUrl)
    .then((resp) => resp.json())
    .then(function (data) {

      const setFormattedDate = (givenDate) => {
        const date = new Date(givenDate);
        const currentMonth = date.toLocaleString('pt-BR', {
          month: 'long'
        });
        const month = currentMonth.charAt(0).toUpperCase() + currentMonth.slice(1);
        return `${date.getDate()} de ${month} de ${date.getFullYear()}`
      }

      const formatTitle = (givenTitle) => {
        const strTitle = givenTitle
        const count = 55;
        const result = strTitle.slice(0, count) + (strTitle.length > count ? "..." : "");
        return result
      }

      const baseHtml = `
      <div class="last_yt_videos">
        <div class="titulo-categoria">
          <strong>ÚLTIMOS VÍDEOS DO CANAL</strong>
        </div>
        <div class="content">
          
          <div class="video main">
            <a href="https://www.youtube.com/watch?v=${data.items[0].id.videoId}" target="_blank" class="thumb"
              style="background-image: url(https://i.ytimg.com/vi_webp/${data.items[0].id.videoId}/maxresdefault.webp)"></a>
            <h2 class="video_title">${formatTitle(data.items[0].snippet.title)}</h2>
            <div class="desc">por <strong>Toni Armas</strong> - ${setFormattedDate(data.items[0].snippet.publishedAt)}</div>
          </div>

          <div class="side">
            
            <div class="video">
              <a href="https://www.youtube.com/watch?v=${data.items[1].id.videoId}" target="_blank" class="thumb"
                style="background-image: url(https://i.ytimg.com/vi_webp/${data.items[1].id.videoId}/maxresdefault.webp)"></a>
              <h2 class="video_title">${formatTitle(data.items[1].snippet.title)}</h2>
              <div class="desc">por <strong>Toni Armas</strong> - ${setFormattedDate(data.items[1].snippet.publishedAt)}</div>
            </div>

            <div class="video">
              <a href="https://www.youtube.com/watch?v=${data.items[2].id.videoId}" target="_blank" class="thumb"
                style="background-image: url(https://i.ytimg.com/vi_webp/${data.items[2].id.videoId}/maxresdefault.webp)"></a>
              <h2 class="video_title">${formatTitle(data.items[2].snippet.title)}</h2>
              <div class="desc">por <strong>Toni Armas</strong> - ${setFormattedDate(data.items[2].snippet.publishedAt)}</div>
            </div>

          </div>
        </div>
        <div class="subscribe">
          <div class="content">
            <a href="https://www.youtube.com/channel/UCdXC0S2gfKYY7DI2NZJuzTA" target="_blank" class="">Inscreva-se no
              canal</a>
          </div>
        </div>
      </div>
    `;


      $('#corpo').append(baseHtml);
    });

}

const createProductDetail = () => {
  // new tags
  const descriptionTitle = `
    <div class="titulo-categoria">
      <strong>DESCRIÇÃO DO PRODUTO</strong>
    </div>
  `
  const relatedProdsNewTitle = `
    <div class="titulo-categoria">
      <strong>Produtos relacionados</strong>
    </div>
  `

  //Existing tags
  const breadcrumb = $('.info-principal-produto .breadcrumbs');
  const productMainBloc = $('.pagina-produto .secao-principal');
  const description = $('.produto .abas-custom');
  const relatedProds = $('.produto .aproveite-tambem');
  const relatedProdsTitle = $('.produto .aproveite-tambem > .titulo');

  //Move elements
  productMainBloc.prepend(breadcrumb)
  description.prepend(descriptionTitle)
  relatedProdsTitle.addClass('titulo-categoria').html('<strong>Produtos relacionados</strong>')
}

//Ready actions
jQuery(document).ready(function () {
  createHeaderDesktop()
  createHeaderMobile()
  setSelectedCategory()
  fixHomeMidBanner()
  youtubeLastestVideos()
  createFooter()
  removeCpf()


  if ($('body').hasClass('pagina-produto')) {
    createProductDetail()
  }
});

//Load actions
jQuery(window).load(function () {

});

//On resize actions
jQuery(window).onresize = function () {

}