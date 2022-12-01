const listUsers = async () => {

    //USUARIOS
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await response.json();

    

    let tableBody = ``;
    users.forEach((user, index) => {
        tableBody += `<tr>
        <td class='centered'>${user.name}</td>
       
       
        </tr>`;
    });
    tableBody_Users.innerHTML = tableBody;

    //PUBLICACIONES
    const response2 = await fetch("https://jsonplaceholder.typicode.com/posts");
    const users2 = await response2.json();

    let tableBody2 = ``;
    users2.forEach((user, index) => {
        tableBody2 += `<tr>
        <td class='centered'>${user.title}</td>
       
       
        </tr>`;
    });
    tableBody_Users2.innerHTML = tableBody2;

    //FOTOS
    const response1 = await fetch("https://jsonplaceholder.typicode.com/photos");
    const users1 = await response1.json();

    let tableBody1 = ``;
     users1.forEach((user, index) => {
        tableBody1 += `<tr>
        <td class='centered'>${user.url}</td>
       
        </tr>`;
    });
    // document.getElementById("tableBody_Users").innerHTML = tableBody;  
    tableBody_Users1.innerHTML = tableBody1;
};

window.addEventListener("load", function () {
    listUsers();
});