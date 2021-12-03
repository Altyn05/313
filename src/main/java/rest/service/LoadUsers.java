package rest.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import rest.model.Role;
import rest.model.User;

import javax.annotation.PostConstruct;
import java.util.HashSet;
import java.util.Set;

@Component
public class LoadUsers {

    private UserService userService;
    private RoleService roleService;


    @Autowired
    public LoadUsers(UserService userService, RoleService roleService) {
        this.userService = userService;
        this.roleService = roleService;
    }


    @PostConstruct
    public void forTestUsers() {

        Set<Role> allRoles = new HashSet<>();
        allRoles.add(new Role("ROLE_ADMIN"));
        allRoles.add(new Role("ROLE_USER"));
        roleService.addRole(allRoles);

        User user1 = new User("Elton", "Jon", "user1@mail.ru", "1");
        User user2 = new User("Alla",  "Pugacheva",  "user2@mail.ru", "1");
        User user3 = new User("Filip", "Kirkorov",  "user3@mail.ru", "1");

        user1.setRoles("ROLE_ADMIN, ROLE_USER");
        user2.setRoles("ROLE_USER");
        user3.setRoles("ROLE_USER");

        userService.addUser(user1);
        userService.addUser(user2);
        userService.addUser(user3);
    }

}
