package com.nocountry.virtualclinic.repositories;

import com.nocountry.virtualclinic.domain.user.AppUser;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AppUserRepository extends JpaRepository<AppUser, Long> {
    AppUser findByEmail(String email);
}
