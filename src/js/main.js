const createHeader = () => {
  // New Html Tgas
  const menuContainerHtml = '<div class="menu_container"></div>';

  // Tag selectors for already 
  const mainHeader = $('.menu.superior');
  const mainMenu = $('.menu.superior .nivel-um');
  const logo = $('#cabecalho .logo');

  //Actions
  mainHeader.prepend(menuContainerHtml)
  $('.menu_container').prepend(logo).append(mainMenu);

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
  TEMP__incrementSubMenu()
});

//Load actions
jQuery(window).load(function () {

});

//On resize actions
jQuery(window).onresize = function () {

}
