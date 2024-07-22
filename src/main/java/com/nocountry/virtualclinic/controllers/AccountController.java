package com.nocountry.virtualclinic.controllers;

import com.nocountry.virtualclinic.domain.user.AppUser;
import com.nocountry.virtualclinic.domain.user.RegisterDto;
import com.nocountry.virtualclinic.repositories.AppUserRepository;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import java.util.Date;

@Controller
public class AccountController {

    @Autowired
    private AppUserRepository repository;

    @GetMapping("/register")
    public String register(Model model) { //Model viene de Spring
        RegisterDto registerDto = new RegisterDto();
        model.addAttribute(registerDto);
        model.addAttribute("success", false);
        return "register";
    }

    @PostMapping("/register")
    public String register(Model model, @Valid @ModelAttribute RegisterDto registerDto, BindingResult result){
        if (!registerDto.getPassword().equals(registerDto.getConfirmedPassword())) {
            result.addError(
                    new FieldError("registerDto", "confirmPassword", "Password and Confirm Password do not match")
            );
        }

        AppUser appUser = repository.findByEmail(registerDto.getEmail());
        if (appUser != null) {
            result.addError(new FieldError("registerDto", "email", "Email address is already used"));
        }

        if (result.hasErrors()) {
            return "register";
        }

        try {
            var bCryptEncoder = new BCryptPasswordEncoder();

            AppUser newUser = new AppUser();
            newUser.setFirstName(registerDto.getFirstName());
            newUser.setLastName(registerDto.getLastName());
            newUser.setEmail(registerDto.getEmail());
            newUser.setPhone(registerDto.getPhone());
            newUser.setRole("client");
            newUser.setCreatedAt(new Date()); //importar Date de java.util
            newUser.setPassword(bCryptEncoder.encode(registerDto.getPassword()));

            repository.save(newUser);

            model.addAttribute("registerDto", new RegisterDto());
            model.addAttribute("success", true);

        } catch(Exception e) {
            result.addError(
                    new FieldError("registerDto", "firstName", e.getMessage())
            );
        }

        return "register";
    }

}
