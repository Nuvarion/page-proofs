$('.tab').each(function(idx) {
    const btn = $(this)
    const id = btn.attr('data-scroll')
    btn.on('click', () => {
        $('html, body').animate({
         scrollTop: $('#' + id).offset().top
       }, 700);
     })
 })
 