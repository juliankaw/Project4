$(function(){
    $('nav a').click(function(){
		var href = $(this).attr('href'); //pega o id correspondente a cada seção
		var offsetTop = $(href).offset().top; //pega a posição do lugar de cada seção

		$('html,body').animate({'scrollTop':offsetTop}); // damos um scroll usando animação
	})
});