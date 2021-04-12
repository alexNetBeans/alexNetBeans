
// -- ADICIONA NOVO USUÁRIO AO SISTEMA --

function insert(nome, user, pass)

{
	db.collection("empresas").add(
	{
		nome: nome,
		user: user,
		pass: pass,
		bairro: '',
		endereco: '',
		fone: '',
		logotipo: '',
		nivel: '2'
		
	})
	.then(function(docRef) 
	{
		// console.log("Document written with ID: ", docRef.id);
	})
	.catch(function(error) 
	{
		// console.error("Error adding document: ", error);
	});
}


