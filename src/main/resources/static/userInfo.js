userInfo();

function userInfo(user) {

    fetch('http://localhost:8080/getAuthorizedUser')
        .then(response => response.json())
        .then(user => {


            let tBody = document.getElementById("userInfo");
            console.log(tBody)


            var row = tBody.insertRow(0);


            var cell0 = row.insertCell(0);
            cell0.innerHTML = user.id;
            var cell1 = row.insertCell(1);
            cell1.innerHTML = user.firstName;
            var cell2 = row.insertCell(2);
            cell2.innerHTML = user.lastName;
            var cell3 = row.insertCell(3);
            cell3.innerHTML = user.username;
            var cell4 = row.insertCell(4);
            cell4.innerHTML = allRoles(user).textContent;
        });

}