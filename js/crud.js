
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

// -- ATUALIZA DADOS DO USUÁRIO --

function updateUser(id, bairro, endereco, fone, nome, logo)
{
		let updateData = db.collection('empresas').doc(id).
		update(
		{
			'nome': nome,
			'fone': fone,
			'endereco': endereco,
			'bairro': bairro,
			'logotipo': logo
		})
		.then(function() 
		{
			console.log("Update Realizado com Sucesso !");
		})
		.catch(function(error) 
		{
			console.error("Error updating document: ", error);
		});
}

// -- RECUPERA OS DADOS --

function getDataFact()
{
	
	// let id = sessionStorage.getItem('id');
	let nomeEmpresa = sessionStorage.getItem('nomeEmpresa');
	
	$('#nome').val(nomeEmpresa);
	
	
	db.collection("empresas").where('nome','==',nomeEmpresa)
    .get()
    .then(function(querySnapshot) 
	{
        querySnapshot.forEach(function(doc) 
		{
            // doc.data() is never undefined for query doc snapshots
			
			d = doc.data();
			
			let end = d.endereco;
			let fone = d.fone;
			let bairro = d.bairro;
			let logo = d.logotipo;
			
			$('#end').val(end);
			$('#fone').val(fone);
			$('#bairro').val(bairro);
			
			nomeEmpresa = $('#nome').val();
			sessionStorage.setItem('nomeEmpresa', nomeEmpresa);
			
			// $('#logo').val(logo);
			
			//let imgPreview = '<img src=' + logo + ' width=80>';
			
			$('#logoPreview').text(logo);
			
        });
    })
    .catch(function(error) 
	{
        console.log("Error getting documents: ", error);
    });
}



