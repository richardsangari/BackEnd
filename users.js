function ambilDataUser(){}
fetch('https://jsonplaceholder.typicode.com/users')
.then(response => response.json())
.then(user => console.log(user))
ambilDataUser('data');