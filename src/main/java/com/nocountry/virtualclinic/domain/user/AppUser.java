package com.nocountry.virtualclinic.domain.user;
import java.util.Date;
import jakarta.persistence.*;
import lombok.*;


@Entity
@Table(name = "users")

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode(of = "id")
public class AppUser {
    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private Long id;

    private String firstName;
    private String lastName;

    @Column (unique = true, nullable = false)
    private String email;
    
    private String phone;
    private String password;
    private String role;
    private Date createdAt; //Date de java.util

}
