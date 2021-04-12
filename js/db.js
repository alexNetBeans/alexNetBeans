
function a()
{
    
      var config = 
          {
              apiKey: "AIzaSyDIflcXwn59VICDiSrBov99In0IXyYVHdo",
              authDomain: "projeto1-e1d1b.firebaseapp.com",
              databaseURL: "https://projeto1-e1d1b.firebaseio.com",
              projectId: "projeto1-e1d1b",
              storageBucket: "projeto1-e1d1b.appspot.com",
              messagingSenderId: "1064308455402"
          };

          firebase.initializeApp(config);
};
a();
  
 
  
	var db = firebase.firestore();

function up()
{
	const onFileChange = (e) => 
	{
		const file = e.target.files[0];
		var storageRef = firebase.storage().ref();
		var fileRef = storageRef.child(file.name);

		// Create a reference to 'images/mountains.jpg'
		//var mountainImagesRef = storageRef.child('images/mountains.jpg');

		fileRef.put(file).then(function(snapshot) 
		{
		console.log('Uploaded a blob or file!');
		});	
	}
}
	




function add()
  {
    let factory = 'Aynatech Informática';
	
	let id = firebase.database().ref('/empresas/').push(
	{
		nome: factory,
		user: 'user',
		pass: '123'
		
	}).key;
        console.log(id);
  } 





/*;

  $(document).click(function(event) 
  {
    var text = $(event.target).text();
    
    if (text == 'aqui')
      {
          firebase.database().ref('/admin/logs/download').once('value').then(function(data)
          {
                let updateDownload = data.val();
                updateDownload = updateDownload + 1;
                let update = {download: updateDownload}

                firebase.database().ref('/admin/logs/').update(update);
          });      
      }
  });
  
  */

/*
  function addVisit()
  {
    firebase.database().ref('/admin/logs/visit').once('value').then(function(data)
        {
            let updateVisit = data.val();
            updateVisit = updateVisit + 1;
            $('#visit').text(updateVisit);
            let update = {visit: updateVisit}

            firebase.database().ref('/admin/logs/').update(update);
        });    
  } */