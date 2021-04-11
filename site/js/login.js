

 $().ready(function()
{

let lUser;
let lPass;
let d;


//  -- IMPEDE SUBMISSÃO DE FORMULÁRIO


   $("#f").click(function (event) 
   {
       event.preventDefault();
    });
  
  
// -- FAZ LOGIN --


function msgErro(user, pass)
{
	if (user.length < 4 || pass.length < 4)
	{
		let alerta = '<div class="alert alert-danger">Todos os Campos devem ser preenchidos !</div>'
		$('#msg').append(alerta);

		setTimeout(function ()
		{
		   $('#msg').empty();
			
		}, 2500);
				
		return 1;		
	}	
}	


function fazerLogin(user, pass)
{
	
	if (msgErro(user, pass)	== 1)
	{
		return;
	}
		

	db.collection("empresas").where("user", "==", user).where("pass", "==", pass)
    .get()
    .then(function(querySnapshot) 
	{
        
		querySnapshot.forEach(function(doc, user, pass) 
		{

			d = doc.data();
			let nomeEmpresa = d.nome;
			let nivel  =  d.nivel;
			
			if (lUser == user && lPass == pass)
			{
				sessionStorage.setItem('logado', 1);
				sessionStorage.setItem('id', doc.id);
				sessionStorage.setItem('nomeEmpresa', nomeEmpresa);
				sessionStorage.setItem('nivel', nivel);
				location.href = 'views/dashboard.html';
			}
	
        });
    }).catch(function(error) 
		{
			console.log("Um erro ocorreu: ", error);
		});
}


    $('#entrar').on('click', function ()
    {
			let lUser = $('#user').val();
			let lPass = $('#pass').val();
		
			fazerLogin(lUser, lPass);

    });

});	