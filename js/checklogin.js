
// -- VERIFICA SE ESTÁ LOGADO --

	let logado = sessionStorage.getItem('logado');

	if (logado != 1)
	{
		location.href =  '../index.html';		
	}