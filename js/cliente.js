
 $().ready(function()
{

// -- SALVA OS DADOS NA MEMÓRIA --

$('#continuar').click(function ()
{
	let nome = $('#nome').val();
	let end = $('#end').val();
	let bairro = $('#bairro').val();
	let fone = $('#fone').val();
	
//-- VERIFICA SE O CAMPOS ESTÃO PREENCHIDOS --	

	if (nome.length < 4 || end.length < 4 || bairro.length < 4 || fone.length < 4)
	{
		let alerta = '<div class="alert alert-danger">Todos os Campos devem ser preenchidos !</div>'
		$('#msg').append(alerta);

		setTimeout(function ()
		{
		   $('#msg').empty();
			
		}, 2500);	
	
	
		if (nome.length < 4)
		{
			$('#nome').focus();
		}
		else if (end.length < 4)
		{
			$('#end').focus();
		}
		else if (bairro.length < 4)
		{
			$('#bairro').focus();
		}
		else if (fone.length < 4)
		{
			$('#fone').focus();
		}
		
		return;
	}
	
	
//-- ARMAZENA OS DADOS DA MEMÓRIA --
	
	localStorage.setItem('nome', nome);	
	localStorage.setItem('end', end);	
	localStorage.setItem('bairro', bairro);	
	localStorage.setItem('fone', fone);

// -- REDIRECIONA PARA A PÁGINA DOS SERVIÇOS --	
	
	location.href = 'servico.html';	
		
});

// -- APLICA MASCARA PARA CAMPO TELEFONE --

$('#fone').mask('(00)90000-0000');

});	

