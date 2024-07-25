package com.nocountry.virtualclinic.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;

import static org.springframework.security.config.Customizer.withDefaults;

@Configuration
@EnableWebSecurity
public class SecurityConfig{

    @Bean
    public SecurityFilterChain securityFilterChain (HttpSecurity httpSecurity) throws Exception {
        return httpSecurity
                .authorizeHttpRequests(auth -> auth
                    .requestMatchers("/").permitAll()
                    .requestMatchers("/register").permitAll()
                    .requestMatchers("/contact").permitAll()
                    .requestMatchers("/profile").permitAll()
                    .requestMatchers("/login").permitAll()
                    .requestMatchers("/logout").permitAll()
                    .anyRequest().authenticated()
                )
                .formLogin(form -> form.defaultSuccessUrl("/", true)) //despues de autenticar lo redirigimos a la url "/""
                .logout(config->config.logoutSuccessUrl("/")) //y despues del logout le redirigimos tambien a url"/"
//                .oauth2Login(withDefaults())
//                .formLogin(withDefaults())
                .build();
        }

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }


/*  @Bean
    SecurityFilterChain oauthSecurityFilterChain(HttpSecurity httpSecurity) throws Exception {
        return httpSecurity
                .authorizeHttpRequests(auth -> {
                    auth.requestMatchers("/").permitAll();
                    auth.anyRequest().authenticated();
                })
                .oauth2Login(withDefaults())
                .formLogin(withDefaults())
                .build();
    }*/

/*  @Bean  //
    public SecurityFilterChain formBasedSecurityFilterChain(HttpSecurity httpSecurity) throws Exception {
        httpSecurity
                    .antMatcher("/**")
                    .authorizeRequests(authorizeRequests ->
                        authorizeRequests
                            .antMatchers("/login").permitAll()
                            .anyRequest().authenticated()
                    )
                    .formLogin(formLogin ->
                            formLogin
                                .loginPage("/login")
                                .defaultSuccessURL("/index")
                                .permitAll()
                    );
        return httpSecurity.build();
    }*/




}
