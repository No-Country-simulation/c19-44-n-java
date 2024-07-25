package com.nocountry.virtualclinic.domain.user;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.Size;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class RegisterDto {
    
    @NotEmpty
    private String firstName;
    
    @NotEmpty
    private String lastName;

    @NotEmpty
    @Email
    private String email;

    private String phone;

    @Size(min = 6, message = "Minimun Password length is 6 characters")
    private String password;

    private String confirmPassword;

    public String getConfirmedPassword() {
        return confirmPassword;
    }
}

