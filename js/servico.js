
  let servico = [];
  let qtd = [];
  let valor = [];
  
  
  function getDate()
  {
	  let now = new Date;
	  
	  let dia =  now.getDate();
	  let mes =  now.getMonth() + 1;
	  let ano =  now.getFullYear();
	  
	  let dataFormatada = dia + '/' + mes + '/' + ano; 
	  
	  return dataFormatada;
		
		
		
	  /* 
		  let d = $('#data').val();
		  let dia = d.substr(8);
		  let mes = d.substr(5, 2);
		  let ano = d.substr(0, 4);
	  */
  }
  
  
  function addItem()
  {
	
	// -- VERIFICA SE O CAMPO ESTÁ VAZIO --
	
	let servicoInput = $('#servico').val();
	
	if (servicoInput.length == 0)
	{
		let alerta = '<div class="alert alert-danger">Campo de Preenchimento Obrigatório !</div>'
		$('#msg').append(alerta);

		setTimeout(function ()
		{
		   $('#msg').empty();
			
		}, 3000)
		
		$('#servico').focus();
		return;
	}
	
	// -- ADICIONA OS VALORES NOS ARRAYS --
	
	servico.push($('#servico').val());
	qtd.push($('#qtd').val());
	valor.push($('#valor').val());	
	
	// -- PREPARA OS VALORES PARA SEREM ADICIONADOS NA TABELA DA MODAL --
	
	let qtdInput = $('#qtd').val();
	let valorInput = $('#valor').val();
	
	let content = '<tr><td>' + servicoInput + '</td><td>' + qtdInput + '</td><td>' + valorInput * qtdInput + '</td></tr>'
    $('#lst').before(content)
	
	// -- LIMPA OS CAMPOS --
	
	$('#servico').val('');
	$('#qtd').val(1);
	$('#valor').val('');
	
	
	// -- EXIBE MENSAGEM 'ITEM ADICIONANDO' --
	
		let alerta = '<div class="alert alert-success">Item Adicionado com Sucesso !</div>'
		$('#msg').append(alerta);

		setTimeout(function ()
		{
		   $('#msg').empty();
			
		}, 2000)
	
	// -- DEIXA O CAMPO 'DESCRIÇÃO DE SERVIÇO' EM FOCO
	
	$('#servico').focus();
	
  }
  
  // -- ADICIONA ITEM PARA A LISTA --
  
  $('#incluir').click(function ()
  {
		addItem();
  });
  
  
  // -- GERA O PDF COM A LISTAGEM E DADOS DO CLIENTE --
  
  $('#concluir').click(function ()
  {
	  makePDF();
	  
  });
  