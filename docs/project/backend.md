# Backend-проект
Backend представлен в виде **Java Spring** приложения. **Maven** используется в качестве фреймворка для автоматизации сборки проектов на основе описания их описания в файле **pom.xml**
В проекте используется следующие основные библиотеки и расширения

- Spring Boot - для автономного запуска Java Spring приложения;
---
- PostgreSQL - для связи с СУБД PostgreSQL;
---
- Lombok - удобная библиотека для сокращения количества кода;
---
- JsonWebToken - библиотека для работы с JsonWebToken. Используется при авторизации и регистрации;
---
- Hibernate - Движок для работы с базами данных посредством ORM;

## Схема проекта в виде дерева **ASCII**
```
Dockerfile
pom.xml
src/
├─ main/
│  ├─ resources/
│  │  ├─ materials/
│  │  │  ├─ features.json
│  │  │  ├─ lessons/
│  │  ├─ application.properties
│  │  ├─ data.sql
│  ├─ java/
│  │  ├─ ru/
│  │  │  ├─ atomskills/
│  │  │  │  ├─ back/
│  │  │  │  │  ├─ configs/
│  │  │  │  │  │  ├─ JwtAuthFilter.java
│  │  │  │  │  │  ├─ RestAdviser.java
│  │  │  │  │  │  ├─ SecurityConfig.java
│  │  │  │  │  ├─ controllers/
│  │  │  │  │  │  ├─ AuthenticationController.java
│  │  │  │  │  │  ├─ LessonsController.java
│  │  │  │  │  │  ├─ SomeEntityController.java
│  │  │  │  │  │  ├─ TasksController.java
│  │  │  │  │  │  ├─ TopicsController.java
│  │  │  │  │  ├─ dto/
│  │  │  │  │  │  ├─ AuthRequest.java
│  │  │  │  │  │  ├─ LessonDto.java
│  │  │  │  │  │  ├─ LessonShortDto.java
│  │  │  │  │  │  ├─ LoginResponse.java
│  │  │  │  │  │  ├─ RefreshRequest.java
│  │  │  │  │  │  ├─ TaskDto.java
│  │  │  │  │  │  ├─ TaskShortDto.java
│  │  │  │  │  ├─ models/
│  │  │  │  │  │  ├─ AppUser.java
│  │  │  │  │  │  ├─ Feature.java
│  │  │  │  │  │  ├─ Lesson.java
│  │  │  │  │  │  ├─ Role.java
│  │  │  │  │  │  ├─ SomeEntity.java
│  │  │  │  │  │  ├─ Task.java
│  │  │  │  │  │  ├─ TaskProgress.java
│  │  │  │  │  │  ├─ TaskSubmission.java
│  │  │  │  │  │  ├─ Topic.java
│  │  │  │  │  │  ├─ Trait.java
│  │  │  │  │  ├─ repositories/
│  │  │  │  │  │  ├─ AppUserRepository.java
│  │  │  │  │  │  ├─ FeaturesRepository.java
│  │  │  │  │  │  ├─ LessonsRepository.java
│  │  │  │  │  │  ├─ SomeEntityRepository.java
│  │  │  │  │  │  ├─ TaskProgressRepository.java
│  │  │  │  │  │  ├─ TasksRepository.java
│  │  │  │  │  │  ├─ TopicsRepository.java
│  │  │  │  │  │  ├─ TraitsRepository.java
│  │  │  │  │  │  ├─ specifications/
│  │  │  │  │  │  │  ├─ SomeEntityRepositorySpecification.java
│  │  │  │  │  ├─ services/
│  │  │  │  │  │  ├─ AppUserService.java
│  │  │  │  │  │  ├─ AuthenticationService.java
│  │  │  │  │  │  ├─ FileLoader.java
│  │  │  │  │  │  ├─ LessonsService.java
│  │  │  │  │  │  ├─ SomeEntity.java
│  │  │  │  │  │  ├─ TasksService.java
│  │  │  │  │  │  ├─ TopicsService.java
│  │  │  │  │  ├─ utils/
│  │  │  │  │  │  ├─ FilesUtil.java
│  │  │  │  │  │  ├─ JwtUtil.java
│  │  │  │  │  ├─ BackApplication.java
├─ test/
│  ├─ java/
│  │  ├─ ru/
│  │  │  ├─ atomskills/
│  │  │  │  ├─ back/
│  │  │  │  │  ├─ BackApplicationTests.java
Dockerfile
pom.xml
```
<br/>

## Dockerfile
Файл с описанием команд для развертки с помощью Docker
```
FROM mirror.gcr.io/eclipse-temurin:21-jdk-jammy

WORKDIR /app

COPY .mvn/ .mvn
COPY mvnw pom.xml ./

RUN sed -i 's/\r$//' ./mvnw && chmod +x ./mvnw && ./mvnw dependency:resolve

COPY src ./src

CMD ["./mvnw", "spring-boot:run"]

```
<br/>

## pom.xml
Описывает конфигурацию проекта, используемые библиотеки, фреймворки и расширения
```
<?xml version="1.0" encoding="UTF-8"?>
<project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
	xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 https://maven.apache.org/xsd/maven-4.0.0.xsd">
	<modelVersion>4.0.0</modelVersion>
	<parent>
		<groupId>org.springframework.boot</groupId>
		<artifactId>spring-boot-starter-parent</artifactId>
		<version>3.3.0</version>
		<relativePath/> <!-- lookup parent from repository -->
	</parent>
	<groupId>ru.atomskills</groupId>
	<artifactId>back</artifactId>
	<version>0.0.1-SNAPSHOT</version>
	<name>back</name>
	<description>Demo project for Spring Boot</description>
	<properties>
		<java.version>21</java.version>
	</properties>
	<dependencies>
		<dependency>
			<groupId>org.springframework.boot</groupId>
			<artifactId>spring-boot-starter-data-jpa</artifactId>
		</dependency>
		<dependency>
			<groupId>org.springframework.boot</groupId>
			<artifactId>spring-boot-starter-security</artifactId>
		</dependency>
		<dependency>
			<groupId>org.springframework.boot</groupId>
			<artifactId>spring-boot-starter-validation</artifactId>
		</dependency>
		<dependency>
			<groupId>org.springframework.boot</groupId>
			<artifactId>spring-boot-starter-web</artifactId>
		</dependency>

		<dependency>
			<groupId>org.postgresql</groupId>
			<artifactId>postgresql</artifactId>
			<scope>runtime</scope>
		</dependency>
		<dependency>
			<groupId>org.projectlombok</groupId>
			<artifactId>lombok</artifactId>
			<optional>true</optional>
		</dependency>
		<dependency>
			<groupId>org.springframework.boot</groupId>
			<artifactId>spring-boot-starter-test</artifactId>
			<scope>test</scope>
		</dependency>
		<dependency>
			<groupId>org.springframework.security</groupId>
			<artifactId>spring-security-test</artifactId>
			<scope>test</scope>
		</dependency>

		<dependency>
			<groupId>io.jsonwebtoken</groupId>
			<artifactId>jjwt-api</artifactId>
			<version>0.11.5</version>
		</dependency>
		<dependency>
			<groupId>io.jsonwebtoken</groupId>
			<artifactId>jjwt-impl</artifactId>
			<version>0.11.5</version>
		</dependency>
		<dependency>
			<groupId>io.jsonwebtoken</groupId>
			<artifactId>jjwt-jackson</artifactId>
			<version>0.11.5</version>
		</dependency>

		<dependency>
			<groupId>org.springdoc</groupId>
			<artifactId>springdoc-openapi-starter-webmvc-ui</artifactId>
			<version>2.5.0</version>
		</dependency>

		<dependency>
			<groupId>org.hibernate</groupId>
			<artifactId>hibernate-jpamodelgen</artifactId>
			<version>6.1.7.Final</version>
		</dependency>
	</dependencies>

	<build>
		<plugins>
			<plugin>
				<groupId>org.springframework.boot</groupId>
				<artifactId>spring-boot-maven-plugin</artifactId>
				<configuration>
					<excludes>
						<exclude>
							<groupId>org.projectlombok</groupId>
							<artifactId>lombok</artifactId>
						</exclude>
					</excludes>
				</configuration>
			</plugin>
		</plugins>
	</build>

</project>
```
<br/>

## src/test/java/ru/atomskills/back/BackApplicationTest.java
Данный файл запускает модуль тестирования JavaSpring приложения.
<br/><br/>

## src/main/java/ru/atomskills/back
### configs
Данная папка содержит различные конфигурации безопасности и работы с JWT.

---
#### JwtAuthFilter.java
```
package ru.atomskills.back.configs;

import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;
import ru.atomskills.back.services.AppUsersService;
import ru.atomskills.back.utils.JwtUtil;

import java.io.IOException;

import static org.springframework.http.HttpHeaders.AUTHORIZATION;

@Component
@RequiredArgsConstructor
public class JwtAuthFilter extends OncePerRequestFilter {
    private final AppUsersService appUsersService;
    private final JwtUtil jwtUtil;

    @Override
    protected void doFilterInternal(
            HttpServletRequest request,
            HttpServletResponse response,
            FilterChain filterChain
    ) throws ServletException, IOException {
        final String authHeader = request.getHeader(AUTHORIZATION);
        final String username;
        final String jwtToken;

        if (authHeader == null || !authHeader.startsWith("Bearer")) {
            filterChain.doFilter(request, response);
            return;
        }

        jwtToken = authHeader.substring(7);
        username = jwtUtil.extractUsername(jwtToken);
        if (username != null && SecurityContextHolder.getContext().getAuthentication() == null) {
            UserDetails userDetails = appUsersService.loadUserByUsername(username);
            final boolean isTokenValid = jwtUtil.isTokenValid(jwtToken, userDetails);
            if (isTokenValid) {
                UsernamePasswordAuthenticationToken authToken =
                        new UsernamePasswordAuthenticationToken(userDetails, null, userDetails.getAuthorities());
                authToken.setDetails(new WebAuthenticationDetailsSource().buildDetails(request));
                SecurityContextHolder.getContext().setAuthentication(authToken);
            }
        }

        filterChain.doFilter(request, response);
    }

    @Override
    protected boolean shouldNotFilter(HttpServletRequest request) {
        String path = request.getServletPath();
        return path.startsWith("/auth");
    }
}
``` 
<br/>

#### SecurityConfig.java
Конфигурация безопасности приложения.<br/>  
Для шифрования паролей используется встроенный метод bcrypt - адаптивная криптографическая хеш-функция формирования ключа, используемого для защищенного хранения паролей.
```
package ru.atomskills.back.configs;

import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import ru.atomskills.back.services.AppUsersService;

import java.util.List;

@Configuration
@EnableWebSecurity
@RequiredArgsConstructor
public class SecurityConfig {
    private final JwtAuthFilter jwtAuthFilter;
    private final AppUsersService appUsersService;

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
            .cors(Customizer.withDefaults())
            .csrf(AbstractHttpConfigurer::disable)
            .authorizeHttpRequests((authorize) -> authorize
//                .requestMatchers("/auth/**", "/swagger-ui/**", "/v3/api-docs/**").permitAll()
//                .requestMatchers(HttpMethod.POST, "/entities/**").hasRole("ADMIN")
//                .requestMatchers(HttpMethod.PUT, "/entities/**").hasRole("ADMIN")
//                .requestMatchers(HttpMethod.DELETE, "/entities/**").hasRole("ADMIN")
//                .anyRequest().authenticated()
                            .anyRequest().permitAll()
            )
            .sessionManagement((session) -> session.sessionCreationPolicy(SessionCreationPolicy.STATELESS))
            .authenticationProvider(authenticationProvider())
            .addFilterBefore(jwtAuthFilter, UsernamePasswordAuthenticationFilter.class);
        return http.build();
    }

    @Bean
    public AuthenticationProvider authenticationProvider() {
        final DaoAuthenticationProvider authenticationProvider = new DaoAuthenticationProvider();
        authenticationProvider.setUserDetailsService(appUsersService);
        authenticationProvider.setPasswordEncoder(bCryptPasswordEncoder());
        return authenticationProvider;
    }

    @Bean
    public AuthenticationManager authenticationManager(AuthenticationConfiguration authenticationConfiguration) throws Exception{
        return authenticationConfiguration.getAuthenticationManager();
    }

    @Bean
    public BCryptPasswordEncoder bCryptPasswordEncoder() {
        return new BCryptPasswordEncoder();
    }

    @Bean
    CorsConfigurationSource corsConfigurationSource() {
        CorsConfiguration configuration = new CorsConfiguration();
        configuration.setAllowedOrigins(List.of("*"));
        configuration.setAllowedMethods(List.of("*"));
        configuration.setAllowedHeaders(List.of("*"));
        configuration.setExposedHeaders(List.of("*"));
        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/**", configuration);
        return source;
    }
}
```
<br/><br/>

### controllers
Содержит контроллеры в виде API.

---
#### AuthenticationController.java
Контроллер для работы с авторизацией и регистрацией. Подробнее по [ссылке](../api/auth.html).
#### LessonsController.java
Контроллер для работы с моделями учебных материалов. Подробнее по [ссылке](../api/lessons.html).
#### TasksController.java
Контроллер для работы с моделями заданий. Подробнее по [ссылке](../api/tasks.html).
#### TopicsController.java
Контроллер для работы с моделями тем. Подробнее по [ссылке](../api/topics.html).
<br/><br/>

### dto
Содержит модели промежуточных данных, передаваемых из Frontend в Backend.

---
#### AuthRequest.java
Промежуточная модель данных авторизации
```
package ru.atomskills.back.dto;

import lombok.Data;

@Data
public class AuthRequest {
    private String username;
    private String password;
}
```
#### LessonDto.java
Промежуточная модель данных учебного материала.
```
package ru.atomskills.back.dto;

import lombok.Builder;
import lombok.Data;
import ru.atomskills.back.models.Lesson;
import ru.atomskills.back.models.Task;
import ru.atomskills.back.models.Topic;
import ru.atomskills.back.models.Trait;
import ru.atomskills.back.services.LessonsService;

import java.util.List;

@Data
@Builder
public class LessonDto {

    private String code;
    private String title;
    private String content;
    private List<Trait> traits;
    private List<Lesson.Supplement> supplement;
    private List<TaskShortDto> tasks;
    private String author;
    private List<Topic> topics;

    public static LessonDto fromEntity(Lesson lesson) {
        return LessonDto.builder()
                .code(lesson.getCode())
                .title(lesson.getTitle())
                .content(lesson.getContent())
                .traits(lesson.getTraits())
                .supplement(lesson.getSupplement())
                .tasks(lesson.getTasks().stream().map(TaskShortDto::fromEntity).toList())
                .author(lesson.getAuthor())
                .topics(lesson.getTopics())
                .build();
    }
}
```
#### LessonShortDto.java
Представляет промежуточную модель данных учебных материалов с сокращенной информацией по ней.
```
package ru.atomskills.back.dto;

import lombok.Builder;
import lombok.Data;
import ru.atomskills.back.models.Lesson;
import ru.atomskills.back.models.Trait;

import java.util.List;

@Data
@Builder
public class LessonShortDto {

    private String code;
    private String title;
    private List<Trait> traits;

    public static LessonShortDto fromEntity(Lesson lesson) {
        return LessonShortDto.builder()
                .code(lesson.getCode())
                .title(lesson.getTitle())
                .traits(lesson.getTraits())
                .build();
    }
}
```
#### LoginResponse.java
Представляет промежуточную модель данных ответа на запрос авторизации.
```
package ru.atomskills.back.dto;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class LoginResponse {
    private String token;
    private String refreshToken;
    private long expiresIn;
}
```
#### RefreshRequest.java
Представляет промежуточную модель данных на обновление JWT токена.
```
package ru.atomskills.back.dto;

import lombok.Data;

@Data
public class RefreshRequest {
    private String refreshToken;
}
```
#### TaskDto.java
Представляет промежуточную модель данных задания.
```
package ru.atomskills.back.dto;

import lombok.Data;

@Data
public class RefreshRequest {
    private String refreshToken;
}
```
#### TaskShortDto.java
Представляет промежуточную модель данных задания с скоращенной информацией по ней.
```
package ru.atomskills.back.dto;

import lombok.Builder;
import lombok.Data;
import ru.atomskills.back.models.Task;

@Data
@Builder
public class TaskShortDto {

    private String code;
    private String title;
    private Integer difficulty;

    public static TaskShortDto fromEntity(Task task) {
        return TaskShortDto.builder()
                .code(task.getCode())
                .title(task.getTitle())
                .difficulty(task.getDifficulty())
                .build();
    }

}

```
<br/><br/>

<h3 id="models">models</h3>
Содержит модели данных, сохраняемые в базу данных.

---
#### AppUser.java
Модель данных пользователя системы
#### Feature.java
Модель данных пользователя системы. Загружается из файлов окружения.
#### Lesson.java
Модель данных пользователя системы. Загружается из файлов окружения.
#### Role.java
Модель данных пользователя системы. Инициализируется при запуске приложения начальными данными. Всего две роли:
- Обучающийся;
- Наставник;
#### Task.java
Модель данных пользователя системы. Загружается из файлов окружения.
#### TaskProgress.java
Модель данных пользователя системы
#### TaskSubmission.java
Модель данных пользователя системы
#### Topic.java
Модель данных пользователя системы. Загружается из файлов окружения.
#### Trait.java
Модель данных пользователя системы. Загружается из файлов окружения.
<br/><br/>

### repositories
Содержит репозитории для запросов из базы данных. Структура аналогична структуре [models](#models).
<br/><br/>

### services
Содержит бизнес-логику для работы с моделями

---
#### AppUserService.java
Сервис для работы с моделью пользователя.
#### AuthenticationService.java
Сервис для работы с моделью пользователя.
#### FileLoader.java
Сервис для работы с моделью пользователя.
#### LessonsService.java
Сервис для работы с моделью пользователя.
#### TasksService.java
Сервис для работы с моделью пользователя.
#### TopicsService.java
Сервис для работы с моделью пользователя.
<br/><br/>

### utils
Утилиты для работа с файлами и JWT токенами.

---
#### FilesUtil.java
Работа с файлами.
```
package ru.atomskills.back.utils;

import org.springframework.core.io.PathResource;
import org.springframework.core.io.Resource;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.io.InputStream;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;

public class FilesUtil {

    private final static String BASE_DIR = "files";

    public static void saveFile(String path, String fileName, MultipartFile multipartFile) throws IOException {
        Path uploadPath = Paths.get(BASE_DIR, path);

        if (!Files.exists(uploadPath)) {
            Files.createDirectories(uploadPath);
        }

        try (InputStream inputStream = multipartFile.getInputStream()) {
            Path filePath = uploadPath.resolve(fileName);
            Files.copy(inputStream, filePath, StandardCopyOption.REPLACE_EXISTING);
        } catch (IOException ioe) {
            throw new IOException("Could not save file: " + fileName, ioe);
        }
    }

    public static Resource getFile(String path, String fileName) {
        return new PathResource(Paths.get(BASE_DIR, path, fileName));
    }
}
```
#### JwtUtil.java
Работа с JWT токенами.
```
package ru.atomskills.back.utils;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.security.Keys;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Component;

import javax.crypto.SecretKey;
import java.util.Date;
import java.util.concurrent.TimeUnit;
import java.util.function.Function;

@Component
public class JwtUtil {

    private static final Long EXPIRATION_TIME = TimeUnit.HOURS.toMillis(1);
    private static final Long REFRESH_EXPIRATION_TIME = TimeUnit.DAYS.toMillis(1);

    private final SecretKey key = Keys.secretKeyFor(SignatureAlgorithm.HS256);

    public String extractUsername(String token) {
        return extractClaim(token, Claims::getSubject);
    }

    public Date extractExpiration(String token) {
        return extractClaim(token, Claims::getExpiration);
    }

    public boolean hasClaim(String token, String claimName) {
        final Claims claims = extractAllClaims(token);
        return claims.get(claimName) != null;
    }

    private <T> T extractClaim(String token, Function<Claims, T> claimsResolver) {
        final Claims claims = extractAllClaims(token);
        return claimsResolver.apply(claims);
    }

    private Claims extractAllClaims(String token) {
        return Jwts.parserBuilder().setSigningKey(key).build().parseClaimsJws(token).getBody();
    }

    public boolean isTokenExpired(String token) {
        return extractExpiration(token).before(new Date());
    }

    public String generateAccessToken(UserDetails userDetails) {
        return Jwts.builder()
                .setSubject(userDetails.getUsername())
                .claim("authorities", userDetails.getAuthorities())
                .setIssuedAt(new Date(System.currentTimeMillis()))
                .setExpiration(new Date(System.currentTimeMillis() + EXPIRATION_TIME))
                .signWith(key).compact();
    }

    public String generateRefreshToken(UserDetails userDetails) {
        return Jwts.builder()
                .setSubject(userDetails.getUsername())
                .setExpiration(new Date(System.currentTimeMillis() + REFRESH_EXPIRATION_TIME))
                .signWith(key)
                .compact();
    }

    public long getExpirationTime() {
        return EXPIRATION_TIME;
    }

    public boolean isTokenValid(String token, UserDetails userDetails) {
        final String username = extractUsername(token);
        return (username.equals(userDetails.getUsername()) && !isTokenExpired(token));
    }
}

```
