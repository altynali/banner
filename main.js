$('body').hide();

document.body.classList.add('js-loading');

window.addEventListener("load", showPage);

function showPage() {

  $('body').show();
  document.body.classList.remove('js-loading');
}


$('.banner-content--sec').hide();
$('.banner-text--sec').hide();
$('.banner-black').hide();

  setTimeout(() => {
    $('.banner-content').hide();
    $('.banner-text').hide();

    $('.banner-content--sec').show();
    $('.banner-text--sec').show();
    $('.banner-black').show();
  }, 9300)
