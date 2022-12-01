const listUsers = async () => {
    const response = await fetch("https://date.nager.at/api/v3/PublicHolidays/2022/MX");
    const users = await response.json();

    let tableBody = ``;
    users.forEach((user, index) => {
        tableBody += `<tr>
        <td class='centered'>${user.date}</td>
        <td class='centered'>${user.localName}</td>
        <td class='centered'>${user.name}</td>
        <td class='centered'>${user.countryCode}</td>
        </tr>`;
    });
    // document.getElementById("tableBody_Users").innerHTML = tableBody;
    tableBody_Users.innerHTML = tableBody;
};

window.addEventListener("load", function () {
    listUsers();
});
