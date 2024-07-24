package com.nocountry.virtualclinic.domain.user;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.security.core.userdetails.UserDetails;

public interface AppUserRepository extends JpaRepository<AppUser, Long> {
    UserDetails findByLogin(String username);
}
