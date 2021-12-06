Header();

function Header() {

    fetch('http://localhost:8080/getAuthorizedUser')
        .then(response => response.json())
        .then(user => {


            document.getElementById("header_email").innerHTML = user.username;
            console.log(user)
            console.log(user.username)


            let rolesList = document.createElement('ul');
            for (let i = 0; i < user.roles.length; i++) {


                let role = document.createElement('li');

                role.textContent = user.roles[i].role + " ";
                rolesList.appendChild(role);
            }

            document.getElementById("header_roles").innerHTML = ' with roles: ' + rolesList.textContent;
        });
}