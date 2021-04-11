
	let nomeEmpresa = sessionStorage.getItem('nomeEmpresa');
	$('#msgWelcome').text('Bem-vindo ' + nomeEmpresa);
	
	let nivel = sessionStorage.getItem('nivel');
	
	if (nivel != 1)
	{
		$('#addUser').remove();
	}
	
	
	
	
	
