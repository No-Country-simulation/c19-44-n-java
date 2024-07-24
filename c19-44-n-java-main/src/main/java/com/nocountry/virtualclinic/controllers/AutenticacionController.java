package com.nocountry.virtualclinic.controllers;


import com.nocountry.virtualclinic.domain.user.AppUser;
import com.nocountry.virtualclinic.domain.user.DatosAutenticacionUsuario;
import com.nocountry.virtualclinic.infra.security.config.DatosJWTToken;
import com.nocountry.virtualclinic.infra.security.config.TokenService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
@RestController
@RequestMapping("/login")
public class AutenticacionController {

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private TokenService tokenService;

    @PostMapping
    public ResponseEntity autenticarUsuario(@RequestBody @Valid DatosAutenticacionUsuario datosAutenticacionUsuario) {
        Authentication authenticationToken = new UsernamePasswordAuthenticationToken(datosAutenticacionUsuario.login(), datosAutenticacionUsuario.clave());
        var usuarioAutenticado = authenticationManager.authenticate(authenticationToken);
        var JWTtoken = tokenService.generarToken((AppUser) usuarioAutenticado.getPrincipal());
        return ResponseEntity.ok( new DatosJWTToken(JWTtoken));
    }

}
