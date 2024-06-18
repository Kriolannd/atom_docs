<template><div><h1 id="backend-проект" tabindex="-1"><a class="header-anchor" href="#backend-проект"><span>Backend-проект</span></a></h1>
<p>Backend представлен в виде <strong>Java Spring</strong> приложения. <strong>Maven</strong> используется в качестве фреймворка для автоматизации сборки проектов на основе описания их описания в файле <strong>pom.xml</strong>
В проекте используется следующие основные библиотеки и расширения</p>
<ul>
<li>Spring Boot - для автономного запуска Java Spring приложения;</li>
</ul>
<hr>
<ul>
<li>PostgreSQL - для связи с СУБД PostgreSQL;</li>
</ul>
<hr>
<ul>
<li>Lombok - удобная библиотека для сокращения количества кода;</li>
</ul>
<hr>
<ul>
<li>JsonWebToken - библиотека для работы с JsonWebToken. Используется при авторизации и регистрации;</li>
</ul>
<hr>
<ul>
<li>Hibernate - Движок для работы с базами данных посредством ORM;</li>
</ul>
<h2 id="схема-проекта-в-виде-дерева-ascii" tabindex="-1"><a class="header-anchor" href="#схема-проекта-в-виде-дерева-ascii"><span>Схема проекта в виде дерева <strong>ASCII</strong></span></a></h2>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>Dockerfile</span></span>
<span class="line"><span>pom.xml</span></span>
<span class="line"><span>src/</span></span>
<span class="line"><span>├─ main/</span></span>
<span class="line"><span>│  ├─ resources/</span></span>
<span class="line"><span>│  │  ├─ materials/</span></span>
<span class="line"><span>│  │  │  ├─ features.json</span></span>
<span class="line"><span>│  │  │  ├─ lessons/</span></span>
<span class="line"><span>│  │  ├─ application.properties</span></span>
<span class="line"><span>│  │  ├─ data.sql</span></span>
<span class="line"><span>│  ├─ java/</span></span>
<span class="line"><span>│  │  ├─ ru/</span></span>
<span class="line"><span>│  │  │  ├─ atomskills/</span></span>
<span class="line"><span>│  │  │  │  ├─ back/</span></span>
<span class="line"><span>│  │  │  │  │  ├─ configs/</span></span>
<span class="line"><span>│  │  │  │  │  │  ├─ JwtAuthFilter.java</span></span>
<span class="line"><span>│  │  │  │  │  │  ├─ RestAdviser.java</span></span>
<span class="line"><span>│  │  │  │  │  │  ├─ SecurityConfig.java</span></span>
<span class="line"><span>│  │  │  │  │  ├─ controllers/</span></span>
<span class="line"><span>│  │  │  │  │  │  ├─ AuthenticationController.java</span></span>
<span class="line"><span>│  │  │  │  │  │  ├─ LessonsController.java</span></span>
<span class="line"><span>│  │  │  │  │  │  ├─ SomeEntityController.java</span></span>
<span class="line"><span>│  │  │  │  │  │  ├─ TasksController.java</span></span>
<span class="line"><span>│  │  │  │  │  │  ├─ TopicsController.java</span></span>
<span class="line"><span>│  │  │  │  │  ├─ dto/</span></span>
<span class="line"><span>│  │  │  │  │  │  ├─ AuthRequest.java</span></span>
<span class="line"><span>│  │  │  │  │  │  ├─ LessonDto.java</span></span>
<span class="line"><span>│  │  │  │  │  │  ├─ LessonShortDto.java</span></span>
<span class="line"><span>│  │  │  │  │  │  ├─ LoginResponse.java</span></span>
<span class="line"><span>│  │  │  │  │  │  ├─ RefreshRequest.java</span></span>
<span class="line"><span>│  │  │  │  │  │  ├─ TaskDto.java</span></span>
<span class="line"><span>│  │  │  │  │  │  ├─ TaskShortDto.java</span></span>
<span class="line"><span>│  │  │  │  │  ├─ models/</span></span>
<span class="line"><span>│  │  │  │  │  │  ├─ AppUser.java</span></span>
<span class="line"><span>│  │  │  │  │  │  ├─ Feature.java</span></span>
<span class="line"><span>│  │  │  │  │  │  ├─ Lesson.java</span></span>
<span class="line"><span>│  │  │  │  │  │  ├─ Role.java</span></span>
<span class="line"><span>│  │  │  │  │  │  ├─ SomeEntity.java</span></span>
<span class="line"><span>│  │  │  │  │  │  ├─ Task.java</span></span>
<span class="line"><span>│  │  │  │  │  │  ├─ TaskProgress.java</span></span>
<span class="line"><span>│  │  │  │  │  │  ├─ TaskSubmission.java</span></span>
<span class="line"><span>│  │  │  │  │  │  ├─ Topic.java</span></span>
<span class="line"><span>│  │  │  │  │  │  ├─ Trait.java</span></span>
<span class="line"><span>│  │  │  │  │  ├─ repositories/</span></span>
<span class="line"><span>│  │  │  │  │  │  ├─ AppUserRepository.java</span></span>
<span class="line"><span>│  │  │  │  │  │  ├─ FeaturesRepository.java</span></span>
<span class="line"><span>│  │  │  │  │  │  ├─ LessonsRepository.java</span></span>
<span class="line"><span>│  │  │  │  │  │  ├─ SomeEntityRepository.java</span></span>
<span class="line"><span>│  │  │  │  │  │  ├─ TaskProgressRepository.java</span></span>
<span class="line"><span>│  │  │  │  │  │  ├─ TasksRepository.java</span></span>
<span class="line"><span>│  │  │  │  │  │  ├─ TopicsRepository.java</span></span>
<span class="line"><span>│  │  │  │  │  │  ├─ TraitsRepository.java</span></span>
<span class="line"><span>│  │  │  │  │  │  ├─ specifications/</span></span>
<span class="line"><span>│  │  │  │  │  │  │  ├─ SomeEntityRepositorySpecification.java</span></span>
<span class="line"><span>│  │  │  │  │  ├─ services/</span></span>
<span class="line"><span>│  │  │  │  │  │  ├─ AppUserService.java</span></span>
<span class="line"><span>│  │  │  │  │  │  ├─ AuthenticationService.java</span></span>
<span class="line"><span>│  │  │  │  │  │  ├─ FileLoader.java</span></span>
<span class="line"><span>│  │  │  │  │  │  ├─ LessonsService.java</span></span>
<span class="line"><span>│  │  │  │  │  │  ├─ SomeEntity.java</span></span>
<span class="line"><span>│  │  │  │  │  │  ├─ TasksService.java</span></span>
<span class="line"><span>│  │  │  │  │  │  ├─ TopicsService.java</span></span>
<span class="line"><span>│  │  │  │  │  ├─ utils/</span></span>
<span class="line"><span>│  │  │  │  │  │  ├─ FilesUtil.java</span></span>
<span class="line"><span>│  │  │  │  │  │  ├─ JwtUtil.java</span></span>
<span class="line"><span>│  │  │  │  │  ├─ BackApplication.java</span></span>
<span class="line"><span>├─ test/</span></span>
<span class="line"><span>│  ├─ java/</span></span>
<span class="line"><span>│  │  ├─ ru/</span></span>
<span class="line"><span>│  │  │  ├─ atomskills/</span></span>
<span class="line"><span>│  │  │  │  ├─ back/</span></span>
<span class="line"><span>│  │  │  │  │  ├─ BackApplicationTests.java</span></span>
<span class="line"><span>Dockerfile</span></span>
<span class="line"><span>pom.xml</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br/>
<h2 id="dockerfile" tabindex="-1"><a class="header-anchor" href="#dockerfile"><span>Dockerfile</span></a></h2>
<p>Файл с описанием команд для развертки с помощью Docker</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>FROM mirror.gcr.io/eclipse-temurin:21-jdk-jammy</span></span>
<span class="line"><span></span></span>
<span class="line"><span>WORKDIR /app</span></span>
<span class="line"><span></span></span>
<span class="line"><span>COPY .mvn/ .mvn</span></span>
<span class="line"><span>COPY mvnw pom.xml ./</span></span>
<span class="line"><span></span></span>
<span class="line"><span>RUN sed -i 's/\r$//' ./mvnw &#x26;&#x26; chmod +x ./mvnw &#x26;&#x26; ./mvnw dependency:resolve</span></span>
<span class="line"><span></span></span>
<span class="line"><span>COPY src ./src</span></span>
<span class="line"><span></span></span>
<span class="line"><span>CMD ["./mvnw", "spring-boot:run"]</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br/>
<h2 id="pom-xml" tabindex="-1"><a class="header-anchor" href="#pom-xml"><span>pom.xml</span></a></h2>
<p>Описывает конфигурацию проекта, используемые библиотеки, фреймворки и расширения</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>&#x3C;?xml version="1.0" encoding="UTF-8"?></span></span>
<span class="line"><span>&#x3C;project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"</span></span>
<span class="line"><span>	xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 https://maven.apache.org/xsd/maven-4.0.0.xsd"></span></span>
<span class="line"><span>	&#x3C;modelVersion>4.0.0&#x3C;/modelVersion></span></span>
<span class="line"><span>	&#x3C;parent></span></span>
<span class="line"><span>		&#x3C;groupId>org.springframework.boot&#x3C;/groupId></span></span>
<span class="line"><span>		&#x3C;artifactId>spring-boot-starter-parent&#x3C;/artifactId></span></span>
<span class="line"><span>		&#x3C;version>3.3.0&#x3C;/version></span></span>
<span class="line"><span>		&#x3C;relativePath/> &#x3C;!-- lookup parent from repository --></span></span>
<span class="line"><span>	&#x3C;/parent></span></span>
<span class="line"><span>	&#x3C;groupId>ru.atomskills&#x3C;/groupId></span></span>
<span class="line"><span>	&#x3C;artifactId>back&#x3C;/artifactId></span></span>
<span class="line"><span>	&#x3C;version>0.0.1-SNAPSHOT&#x3C;/version></span></span>
<span class="line"><span>	&#x3C;name>back&#x3C;/name></span></span>
<span class="line"><span>	&#x3C;description>Demo project for Spring Boot&#x3C;/description></span></span>
<span class="line"><span>	&#x3C;properties></span></span>
<span class="line"><span>		&#x3C;java.version>21&#x3C;/java.version></span></span>
<span class="line"><span>	&#x3C;/properties></span></span>
<span class="line"><span>	&#x3C;dependencies></span></span>
<span class="line"><span>		&#x3C;dependency></span></span>
<span class="line"><span>			&#x3C;groupId>org.springframework.boot&#x3C;/groupId></span></span>
<span class="line"><span>			&#x3C;artifactId>spring-boot-starter-data-jpa&#x3C;/artifactId></span></span>
<span class="line"><span>		&#x3C;/dependency></span></span>
<span class="line"><span>		&#x3C;dependency></span></span>
<span class="line"><span>			&#x3C;groupId>org.springframework.boot&#x3C;/groupId></span></span>
<span class="line"><span>			&#x3C;artifactId>spring-boot-starter-security&#x3C;/artifactId></span></span>
<span class="line"><span>		&#x3C;/dependency></span></span>
<span class="line"><span>		&#x3C;dependency></span></span>
<span class="line"><span>			&#x3C;groupId>org.springframework.boot&#x3C;/groupId></span></span>
<span class="line"><span>			&#x3C;artifactId>spring-boot-starter-validation&#x3C;/artifactId></span></span>
<span class="line"><span>		&#x3C;/dependency></span></span>
<span class="line"><span>		&#x3C;dependency></span></span>
<span class="line"><span>			&#x3C;groupId>org.springframework.boot&#x3C;/groupId></span></span>
<span class="line"><span>			&#x3C;artifactId>spring-boot-starter-web&#x3C;/artifactId></span></span>
<span class="line"><span>		&#x3C;/dependency></span></span>
<span class="line"><span></span></span>
<span class="line"><span>		&#x3C;dependency></span></span>
<span class="line"><span>			&#x3C;groupId>org.postgresql&#x3C;/groupId></span></span>
<span class="line"><span>			&#x3C;artifactId>postgresql&#x3C;/artifactId></span></span>
<span class="line"><span>			&#x3C;scope>runtime&#x3C;/scope></span></span>
<span class="line"><span>		&#x3C;/dependency></span></span>
<span class="line"><span>		&#x3C;dependency></span></span>
<span class="line"><span>			&#x3C;groupId>org.projectlombok&#x3C;/groupId></span></span>
<span class="line"><span>			&#x3C;artifactId>lombok&#x3C;/artifactId></span></span>
<span class="line"><span>			&#x3C;optional>true&#x3C;/optional></span></span>
<span class="line"><span>		&#x3C;/dependency></span></span>
<span class="line"><span>		&#x3C;dependency></span></span>
<span class="line"><span>			&#x3C;groupId>org.springframework.boot&#x3C;/groupId></span></span>
<span class="line"><span>			&#x3C;artifactId>spring-boot-starter-test&#x3C;/artifactId></span></span>
<span class="line"><span>			&#x3C;scope>test&#x3C;/scope></span></span>
<span class="line"><span>		&#x3C;/dependency></span></span>
<span class="line"><span>		&#x3C;dependency></span></span>
<span class="line"><span>			&#x3C;groupId>org.springframework.security&#x3C;/groupId></span></span>
<span class="line"><span>			&#x3C;artifactId>spring-security-test&#x3C;/artifactId></span></span>
<span class="line"><span>			&#x3C;scope>test&#x3C;/scope></span></span>
<span class="line"><span>		&#x3C;/dependency></span></span>
<span class="line"><span></span></span>
<span class="line"><span>		&#x3C;dependency></span></span>
<span class="line"><span>			&#x3C;groupId>io.jsonwebtoken&#x3C;/groupId></span></span>
<span class="line"><span>			&#x3C;artifactId>jjwt-api&#x3C;/artifactId></span></span>
<span class="line"><span>			&#x3C;version>0.11.5&#x3C;/version></span></span>
<span class="line"><span>		&#x3C;/dependency></span></span>
<span class="line"><span>		&#x3C;dependency></span></span>
<span class="line"><span>			&#x3C;groupId>io.jsonwebtoken&#x3C;/groupId></span></span>
<span class="line"><span>			&#x3C;artifactId>jjwt-impl&#x3C;/artifactId></span></span>
<span class="line"><span>			&#x3C;version>0.11.5&#x3C;/version></span></span>
<span class="line"><span>		&#x3C;/dependency></span></span>
<span class="line"><span>		&#x3C;dependency></span></span>
<span class="line"><span>			&#x3C;groupId>io.jsonwebtoken&#x3C;/groupId></span></span>
<span class="line"><span>			&#x3C;artifactId>jjwt-jackson&#x3C;/artifactId></span></span>
<span class="line"><span>			&#x3C;version>0.11.5&#x3C;/version></span></span>
<span class="line"><span>		&#x3C;/dependency></span></span>
<span class="line"><span></span></span>
<span class="line"><span>		&#x3C;dependency></span></span>
<span class="line"><span>			&#x3C;groupId>org.springdoc&#x3C;/groupId></span></span>
<span class="line"><span>			&#x3C;artifactId>springdoc-openapi-starter-webmvc-ui&#x3C;/artifactId></span></span>
<span class="line"><span>			&#x3C;version>2.5.0&#x3C;/version></span></span>
<span class="line"><span>		&#x3C;/dependency></span></span>
<span class="line"><span></span></span>
<span class="line"><span>		&#x3C;dependency></span></span>
<span class="line"><span>			&#x3C;groupId>org.hibernate&#x3C;/groupId></span></span>
<span class="line"><span>			&#x3C;artifactId>hibernate-jpamodelgen&#x3C;/artifactId></span></span>
<span class="line"><span>			&#x3C;version>6.1.7.Final&#x3C;/version></span></span>
<span class="line"><span>		&#x3C;/dependency></span></span>
<span class="line"><span>	&#x3C;/dependencies></span></span>
<span class="line"><span></span></span>
<span class="line"><span>	&#x3C;build></span></span>
<span class="line"><span>		&#x3C;plugins></span></span>
<span class="line"><span>			&#x3C;plugin></span></span>
<span class="line"><span>				&#x3C;groupId>org.springframework.boot&#x3C;/groupId></span></span>
<span class="line"><span>				&#x3C;artifactId>spring-boot-maven-plugin&#x3C;/artifactId></span></span>
<span class="line"><span>				&#x3C;configuration></span></span>
<span class="line"><span>					&#x3C;excludes></span></span>
<span class="line"><span>						&#x3C;exclude></span></span>
<span class="line"><span>							&#x3C;groupId>org.projectlombok&#x3C;/groupId></span></span>
<span class="line"><span>							&#x3C;artifactId>lombok&#x3C;/artifactId></span></span>
<span class="line"><span>						&#x3C;/exclude></span></span>
<span class="line"><span>					&#x3C;/excludes></span></span>
<span class="line"><span>				&#x3C;/configuration></span></span>
<span class="line"><span>			&#x3C;/plugin></span></span>
<span class="line"><span>		&#x3C;/plugins></span></span>
<span class="line"><span>	&#x3C;/build></span></span>
<span class="line"><span></span></span>
<span class="line"><span>&#x3C;/project></span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br/>
<h2 id="src-test-java-ru-atomskills-back-backapplicationtest-java" tabindex="-1"><a class="header-anchor" href="#src-test-java-ru-atomskills-back-backapplicationtest-java"><span>src/test/java/ru/atomskills/back/BackApplicationTest.java</span></a></h2>
<p>Данный файл запускает модуль тестирования JavaSpring приложения.
<br/><br/></p>
<h2 id="src-main-java-ru-atomskills-back" tabindex="-1"><a class="header-anchor" href="#src-main-java-ru-atomskills-back"><span>src/main/java/ru/atomskills/back</span></a></h2>
<h3 id="configs" tabindex="-1"><a class="header-anchor" href="#configs"><span>configs</span></a></h3>
<p>Данная папка содержит различные конфигурации безопасности и работы с JWT.</p>
<hr>
<h4 id="jwtauthfilter-java" tabindex="-1"><a class="header-anchor" href="#jwtauthfilter-java"><span>JwtAuthFilter.java</span></a></h4>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>package ru.atomskills.back.configs;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import jakarta.servlet.FilterChain;</span></span>
<span class="line"><span>import jakarta.servlet.ServletException;</span></span>
<span class="line"><span>import jakarta.servlet.http.HttpServletRequest;</span></span>
<span class="line"><span>import jakarta.servlet.http.HttpServletResponse;</span></span>
<span class="line"><span>import lombok.RequiredArgsConstructor;</span></span>
<span class="line"><span>import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;</span></span>
<span class="line"><span>import org.springframework.security.core.context.SecurityContextHolder;</span></span>
<span class="line"><span>import org.springframework.security.core.userdetails.UserDetails;</span></span>
<span class="line"><span>import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;</span></span>
<span class="line"><span>import org.springframework.stereotype.Component;</span></span>
<span class="line"><span>import org.springframework.web.filter.OncePerRequestFilter;</span></span>
<span class="line"><span>import ru.atomskills.back.services.AppUsersService;</span></span>
<span class="line"><span>import ru.atomskills.back.utils.JwtUtil;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import java.io.IOException;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import static org.springframework.http.HttpHeaders.AUTHORIZATION;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>@Component</span></span>
<span class="line"><span>@RequiredArgsConstructor</span></span>
<span class="line"><span>public class JwtAuthFilter extends OncePerRequestFilter {</span></span>
<span class="line"><span>    private final AppUsersService appUsersService;</span></span>
<span class="line"><span>    private final JwtUtil jwtUtil;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>    protected void doFilterInternal(</span></span>
<span class="line"><span>            HttpServletRequest request,</span></span>
<span class="line"><span>            HttpServletResponse response,</span></span>
<span class="line"><span>            FilterChain filterChain</span></span>
<span class="line"><span>    ) throws ServletException, IOException {</span></span>
<span class="line"><span>        final String authHeader = request.getHeader(AUTHORIZATION);</span></span>
<span class="line"><span>        final String username;</span></span>
<span class="line"><span>        final String jwtToken;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        if (authHeader == null || !authHeader.startsWith("Bearer")) {</span></span>
<span class="line"><span>            filterChain.doFilter(request, response);</span></span>
<span class="line"><span>            return;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        jwtToken = authHeader.substring(7);</span></span>
<span class="line"><span>        username = jwtUtil.extractUsername(jwtToken);</span></span>
<span class="line"><span>        if (username != null &#x26;&#x26; SecurityContextHolder.getContext().getAuthentication() == null) {</span></span>
<span class="line"><span>            UserDetails userDetails = appUsersService.loadUserByUsername(username);</span></span>
<span class="line"><span>            final boolean isTokenValid = jwtUtil.isTokenValid(jwtToken, userDetails);</span></span>
<span class="line"><span>            if (isTokenValid) {</span></span>
<span class="line"><span>                UsernamePasswordAuthenticationToken authToken =</span></span>
<span class="line"><span>                        new UsernamePasswordAuthenticationToken(userDetails, null, userDetails.getAuthorities());</span></span>
<span class="line"><span>                authToken.setDetails(new WebAuthenticationDetailsSource().buildDetails(request));</span></span>
<span class="line"><span>                SecurityContextHolder.getContext().setAuthentication(authToken);</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        filterChain.doFilter(request, response);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>    protected boolean shouldNotFilter(HttpServletRequest request) {</span></span>
<span class="line"><span>        String path = request.getServletPath();</span></span>
<span class="line"><span>        return path.startsWith("/auth");</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br/>
<h4 id="securityconfig-java" tabindex="-1"><a class="header-anchor" href="#securityconfig-java"><span>SecurityConfig.java</span></a></h4>
<p>Конфигурация безопасности приложения.<br/><br>
Для шифрования паролей используется встроенный метод bcrypt - адаптивная криптографическая хеш-функция формирования ключа, используемого для защищенного хранения паролей.</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>package ru.atomskills.back.configs;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import lombok.RequiredArgsConstructor;</span></span>
<span class="line"><span>import org.springframework.context.annotation.Bean;</span></span>
<span class="line"><span>import org.springframework.context.annotation.Configuration;</span></span>
<span class="line"><span>import org.springframework.http.HttpMethod;</span></span>
<span class="line"><span>import org.springframework.security.authentication.AuthenticationManager;</span></span>
<span class="line"><span>import org.springframework.security.authentication.AuthenticationProvider;</span></span>
<span class="line"><span>import org.springframework.security.authentication.dao.DaoAuthenticationProvider;</span></span>
<span class="line"><span>import org.springframework.security.config.Customizer;</span></span>
<span class="line"><span>import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;</span></span>
<span class="line"><span>import org.springframework.security.config.annotation.web.builders.HttpSecurity;</span></span>
<span class="line"><span>import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;</span></span>
<span class="line"><span>import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;</span></span>
<span class="line"><span>import org.springframework.security.config.http.SessionCreationPolicy;</span></span>
<span class="line"><span>import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;</span></span>
<span class="line"><span>import org.springframework.security.web.SecurityFilterChain;</span></span>
<span class="line"><span>import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;</span></span>
<span class="line"><span>import org.springframework.web.cors.CorsConfiguration;</span></span>
<span class="line"><span>import org.springframework.web.cors.CorsConfigurationSource;</span></span>
<span class="line"><span>import org.springframework.web.cors.UrlBasedCorsConfigurationSource;</span></span>
<span class="line"><span>import ru.atomskills.back.services.AppUsersService;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import java.util.List;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>@Configuration</span></span>
<span class="line"><span>@EnableWebSecurity</span></span>
<span class="line"><span>@RequiredArgsConstructor</span></span>
<span class="line"><span>public class SecurityConfig {</span></span>
<span class="line"><span>    private final JwtAuthFilter jwtAuthFilter;</span></span>
<span class="line"><span>    private final AppUsersService appUsersService;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Bean</span></span>
<span class="line"><span>    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {</span></span>
<span class="line"><span>        http</span></span>
<span class="line"><span>            .cors(Customizer.withDefaults())</span></span>
<span class="line"><span>            .csrf(AbstractHttpConfigurer::disable)</span></span>
<span class="line"><span>            .authorizeHttpRequests((authorize) -> authorize</span></span>
<span class="line"><span>//                .requestMatchers("/auth/**", "/swagger-ui/**", "/v3/api-docs/**").permitAll()</span></span>
<span class="line"><span>//                .requestMatchers(HttpMethod.POST, "/entities/**").hasRole("ADMIN")</span></span>
<span class="line"><span>//                .requestMatchers(HttpMethod.PUT, "/entities/**").hasRole("ADMIN")</span></span>
<span class="line"><span>//                .requestMatchers(HttpMethod.DELETE, "/entities/**").hasRole("ADMIN")</span></span>
<span class="line"><span>//                .anyRequest().authenticated()</span></span>
<span class="line"><span>                            .anyRequest().permitAll()</span></span>
<span class="line"><span>            )</span></span>
<span class="line"><span>            .sessionManagement((session) -> session.sessionCreationPolicy(SessionCreationPolicy.STATELESS))</span></span>
<span class="line"><span>            .authenticationProvider(authenticationProvider())</span></span>
<span class="line"><span>            .addFilterBefore(jwtAuthFilter, UsernamePasswordAuthenticationFilter.class);</span></span>
<span class="line"><span>        return http.build();</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Bean</span></span>
<span class="line"><span>    public AuthenticationProvider authenticationProvider() {</span></span>
<span class="line"><span>        final DaoAuthenticationProvider authenticationProvider = new DaoAuthenticationProvider();</span></span>
<span class="line"><span>        authenticationProvider.setUserDetailsService(appUsersService);</span></span>
<span class="line"><span>        authenticationProvider.setPasswordEncoder(bCryptPasswordEncoder());</span></span>
<span class="line"><span>        return authenticationProvider;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Bean</span></span>
<span class="line"><span>    public AuthenticationManager authenticationManager(AuthenticationConfiguration authenticationConfiguration) throws Exception{</span></span>
<span class="line"><span>        return authenticationConfiguration.getAuthenticationManager();</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Bean</span></span>
<span class="line"><span>    public BCryptPasswordEncoder bCryptPasswordEncoder() {</span></span>
<span class="line"><span>        return new BCryptPasswordEncoder();</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Bean</span></span>
<span class="line"><span>    CorsConfigurationSource corsConfigurationSource() {</span></span>
<span class="line"><span>        CorsConfiguration configuration = new CorsConfiguration();</span></span>
<span class="line"><span>        configuration.setAllowedOrigins(List.of("*"));</span></span>
<span class="line"><span>        configuration.setAllowedMethods(List.of("*"));</span></span>
<span class="line"><span>        configuration.setAllowedHeaders(List.of("*"));</span></span>
<span class="line"><span>        configuration.setExposedHeaders(List.of("*"));</span></span>
<span class="line"><span>        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();</span></span>
<span class="line"><span>        source.registerCorsConfiguration("/**", configuration);</span></span>
<span class="line"><span>        return source;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><br/><br/></p>
<h3 id="controllers" tabindex="-1"><a class="header-anchor" href="#controllers"><span>controllers</span></a></h3>
<p>Содержит контроллеры в виде API.</p>
<hr>
<h4 id="authenticationcontroller-java" tabindex="-1"><a class="header-anchor" href="#authenticationcontroller-java"><span>AuthenticationController.java</span></a></h4>
<p>Контроллер для работы с авторизацией и регистрацией. Подробнее по <RouteLink to="/api/auth.html">ссылке</RouteLink>.</p>
<h4 id="lessonscontroller-java" tabindex="-1"><a class="header-anchor" href="#lessonscontroller-java"><span>LessonsController.java</span></a></h4>
<p>Контроллер для работы с моделями учебных материалов. Подробнее по <RouteLink to="/api/lessons.html">ссылке</RouteLink>.</p>
<h4 id="taskscontroller-java" tabindex="-1"><a class="header-anchor" href="#taskscontroller-java"><span>TasksController.java</span></a></h4>
<p>Контроллер для работы с моделями заданий. Подробнее по <RouteLink to="/api/tasks.html">ссылке</RouteLink>.</p>
<h4 id="topicscontroller-java" tabindex="-1"><a class="header-anchor" href="#topicscontroller-java"><span>TopicsController.java</span></a></h4>
<p>Контроллер для работы с моделями тем. Подробнее по <RouteLink to="/api/topics.html">ссылке</RouteLink>.
<br/><br/></p>
<h3 id="dto" tabindex="-1"><a class="header-anchor" href="#dto"><span>dto</span></a></h3>
<p>Содержит модели промежуточных данных, передаваемых из Frontend в Backend.</p>
<hr>
<h4 id="authrequest-java" tabindex="-1"><a class="header-anchor" href="#authrequest-java"><span>AuthRequest.java</span></a></h4>
<p>Промежуточная модель данных авторизации</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>package ru.atomskills.back.dto;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import lombok.Data;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>@Data</span></span>
<span class="line"><span>public class AuthRequest {</span></span>
<span class="line"><span>    private String username;</span></span>
<span class="line"><span>    private String password;</span></span>
<span class="line"><span>}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="lessondto-java" tabindex="-1"><a class="header-anchor" href="#lessondto-java"><span>LessonDto.java</span></a></h4>
<p>Промежуточная модель данных учебного материала.</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>package ru.atomskills.back.dto;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import lombok.Builder;</span></span>
<span class="line"><span>import lombok.Data;</span></span>
<span class="line"><span>import ru.atomskills.back.models.Lesson;</span></span>
<span class="line"><span>import ru.atomskills.back.models.Task;</span></span>
<span class="line"><span>import ru.atomskills.back.models.Topic;</span></span>
<span class="line"><span>import ru.atomskills.back.models.Trait;</span></span>
<span class="line"><span>import ru.atomskills.back.services.LessonsService;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import java.util.List;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>@Data</span></span>
<span class="line"><span>@Builder</span></span>
<span class="line"><span>public class LessonDto {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    private String code;</span></span>
<span class="line"><span>    private String title;</span></span>
<span class="line"><span>    private String content;</span></span>
<span class="line"><span>    private List&#x3C;Trait> traits;</span></span>
<span class="line"><span>    private List&#x3C;Lesson.Supplement> supplement;</span></span>
<span class="line"><span>    private List&#x3C;TaskShortDto> tasks;</span></span>
<span class="line"><span>    private String author;</span></span>
<span class="line"><span>    private List&#x3C;Topic> topics;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public static LessonDto fromEntity(Lesson lesson) {</span></span>
<span class="line"><span>        return LessonDto.builder()</span></span>
<span class="line"><span>                .code(lesson.getCode())</span></span>
<span class="line"><span>                .title(lesson.getTitle())</span></span>
<span class="line"><span>                .content(lesson.getContent())</span></span>
<span class="line"><span>                .traits(lesson.getTraits())</span></span>
<span class="line"><span>                .supplement(lesson.getSupplement())</span></span>
<span class="line"><span>                .tasks(lesson.getTasks().stream().map(TaskShortDto::fromEntity).toList())</span></span>
<span class="line"><span>                .author(lesson.getAuthor())</span></span>
<span class="line"><span>                .topics(lesson.getTopics())</span></span>
<span class="line"><span>                .build();</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="lessonshortdto-java" tabindex="-1"><a class="header-anchor" href="#lessonshortdto-java"><span>LessonShortDto.java</span></a></h4>
<p>Представляет промежуточную модель данных учебных материалов с сокращенной информацией по ней.</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>package ru.atomskills.back.dto;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import lombok.Builder;</span></span>
<span class="line"><span>import lombok.Data;</span></span>
<span class="line"><span>import ru.atomskills.back.models.Lesson;</span></span>
<span class="line"><span>import ru.atomskills.back.models.Trait;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import java.util.List;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>@Data</span></span>
<span class="line"><span>@Builder</span></span>
<span class="line"><span>public class LessonShortDto {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    private String code;</span></span>
<span class="line"><span>    private String title;</span></span>
<span class="line"><span>    private List&#x3C;Trait> traits;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public static LessonShortDto fromEntity(Lesson lesson) {</span></span>
<span class="line"><span>        return LessonShortDto.builder()</span></span>
<span class="line"><span>                .code(lesson.getCode())</span></span>
<span class="line"><span>                .title(lesson.getTitle())</span></span>
<span class="line"><span>                .traits(lesson.getTraits())</span></span>
<span class="line"><span>                .build();</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="loginresponse-java" tabindex="-1"><a class="header-anchor" href="#loginresponse-java"><span>LoginResponse.java</span></a></h4>
<p>Представляет промежуточную модель данных ответа на запрос авторизации.</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>package ru.atomskills.back.dto;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import lombok.Builder;</span></span>
<span class="line"><span>import lombok.Data;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>@Data</span></span>
<span class="line"><span>@Builder</span></span>
<span class="line"><span>public class LoginResponse {</span></span>
<span class="line"><span>    private String token;</span></span>
<span class="line"><span>    private String refreshToken;</span></span>
<span class="line"><span>    private long expiresIn;</span></span>
<span class="line"><span>}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="refreshrequest-java" tabindex="-1"><a class="header-anchor" href="#refreshrequest-java"><span>RefreshRequest.java</span></a></h4>
<p>Представляет промежуточную модель данных на обновление JWT токена.</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>package ru.atomskills.back.dto;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import lombok.Data;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>@Data</span></span>
<span class="line"><span>public class RefreshRequest {</span></span>
<span class="line"><span>    private String refreshToken;</span></span>
<span class="line"><span>}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="taskdto-java" tabindex="-1"><a class="header-anchor" href="#taskdto-java"><span>TaskDto.java</span></a></h4>
<p>Представляет промежуточную модель данных задания.</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>package ru.atomskills.back.dto;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import lombok.Data;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>@Data</span></span>
<span class="line"><span>public class RefreshRequest {</span></span>
<span class="line"><span>    private String refreshToken;</span></span>
<span class="line"><span>}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="taskshortdto-java" tabindex="-1"><a class="header-anchor" href="#taskshortdto-java"><span>TaskShortDto.java</span></a></h4>
<p>Представляет промежуточную модель данных задания с скоращенной информацией по ней.</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>package ru.atomskills.back.dto;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import lombok.Builder;</span></span>
<span class="line"><span>import lombok.Data;</span></span>
<span class="line"><span>import ru.atomskills.back.models.Task;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>@Data</span></span>
<span class="line"><span>@Builder</span></span>
<span class="line"><span>public class TaskShortDto {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    private String code;</span></span>
<span class="line"><span>    private String title;</span></span>
<span class="line"><span>    private Integer difficulty;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public static TaskShortDto fromEntity(Task task) {</span></span>
<span class="line"><span>        return TaskShortDto.builder()</span></span>
<span class="line"><span>                .code(task.getCode())</span></span>
<span class="line"><span>                .title(task.getTitle())</span></span>
<span class="line"><span>                .difficulty(task.getDifficulty())</span></span>
<span class="line"><span>                .build();</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><br/><br/></p>
<h3 id="models">models</h3>
Содержит модели данных, сохраняемые в базу данных.
<hr>
<h4 id="appuser-java" tabindex="-1"><a class="header-anchor" href="#appuser-java"><span>AppUser.java</span></a></h4>
<p>Модель данных пользователя системы</p>
<h4 id="feature-java" tabindex="-1"><a class="header-anchor" href="#feature-java"><span>Feature.java</span></a></h4>
<p>Модель данных пользователя системы. Загружается из файлов окружения.</p>
<h4 id="lesson-java" tabindex="-1"><a class="header-anchor" href="#lesson-java"><span>Lesson.java</span></a></h4>
<p>Модель данных пользователя системы. Загружается из файлов окружения.</p>
<h4 id="role-java" tabindex="-1"><a class="header-anchor" href="#role-java"><span>Role.java</span></a></h4>
<p>Модель данных пользователя системы. Инициализируется при запуске приложения начальными данными. Всего две роли:</p>
<ul>
<li>Обучающийся;</li>
<li>Наставник;</li>
</ul>
<h4 id="task-java" tabindex="-1"><a class="header-anchor" href="#task-java"><span>Task.java</span></a></h4>
<p>Модель данных пользователя системы. Загружается из файлов окружения.</p>
<h4 id="taskprogress-java" tabindex="-1"><a class="header-anchor" href="#taskprogress-java"><span>TaskProgress.java</span></a></h4>
<p>Модель данных пользователя системы</p>
<h4 id="tasksubmission-java" tabindex="-1"><a class="header-anchor" href="#tasksubmission-java"><span>TaskSubmission.java</span></a></h4>
<p>Модель данных пользователя системы</p>
<h4 id="topic-java" tabindex="-1"><a class="header-anchor" href="#topic-java"><span>Topic.java</span></a></h4>
<p>Модель данных пользователя системы. Загружается из файлов окружения.</p>
<h4 id="trait-java" tabindex="-1"><a class="header-anchor" href="#trait-java"><span>Trait.java</span></a></h4>
<p>Модель данных пользователя системы. Загружается из файлов окружения.
<br/><br/></p>
<h3 id="repositories" tabindex="-1"><a class="header-anchor" href="#repositories"><span>repositories</span></a></h3>
<p>Содержит репозитории для запросов из базы данных. Структура аналогична структуре <a href="#models">models</a>.
<br/><br/></p>
<h3 id="services" tabindex="-1"><a class="header-anchor" href="#services"><span>services</span></a></h3>
<p>Содержит бизнес-логику для работы с моделями</p>
<hr>
<h4 id="appuserservice-java" tabindex="-1"><a class="header-anchor" href="#appuserservice-java"><span>AppUserService.java</span></a></h4>
<p>Сервис для работы с моделью пользователя.</p>
<h4 id="authenticationservice-java" tabindex="-1"><a class="header-anchor" href="#authenticationservice-java"><span>AuthenticationService.java</span></a></h4>
<p>Сервис для работы с моделью пользователя.</p>
<h4 id="fileloader-java" tabindex="-1"><a class="header-anchor" href="#fileloader-java"><span>FileLoader.java</span></a></h4>
<p>Сервис для работы с моделью пользователя.</p>
<h4 id="lessonsservice-java" tabindex="-1"><a class="header-anchor" href="#lessonsservice-java"><span>LessonsService.java</span></a></h4>
<p>Сервис для работы с моделью пользователя.</p>
<h4 id="tasksservice-java" tabindex="-1"><a class="header-anchor" href="#tasksservice-java"><span>TasksService.java</span></a></h4>
<p>Сервис для работы с моделью пользователя.</p>
<h4 id="topicsservice-java" tabindex="-1"><a class="header-anchor" href="#topicsservice-java"><span>TopicsService.java</span></a></h4>
<p>Сервис для работы с моделью пользователя.
<br/><br/></p>
<h3 id="utils" tabindex="-1"><a class="header-anchor" href="#utils"><span>utils</span></a></h3>
<p>Утилиты для работа с файлами и JWT токенами.</p>
<hr>
<h4 id="filesutil-java" tabindex="-1"><a class="header-anchor" href="#filesutil-java"><span>FilesUtil.java</span></a></h4>
<p>Работа с файлами.</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>package ru.atomskills.back.utils;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import org.springframework.core.io.PathResource;</span></span>
<span class="line"><span>import org.springframework.core.io.Resource;</span></span>
<span class="line"><span>import org.springframework.web.multipart.MultipartFile;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import java.io.IOException;</span></span>
<span class="line"><span>import java.io.InputStream;</span></span>
<span class="line"><span>import java.nio.file.Files;</span></span>
<span class="line"><span>import java.nio.file.Path;</span></span>
<span class="line"><span>import java.nio.file.Paths;</span></span>
<span class="line"><span>import java.nio.file.StandardCopyOption;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>public class FilesUtil {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    private final static String BASE_DIR = "files";</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public static void saveFile(String path, String fileName, MultipartFile multipartFile) throws IOException {</span></span>
<span class="line"><span>        Path uploadPath = Paths.get(BASE_DIR, path);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        if (!Files.exists(uploadPath)) {</span></span>
<span class="line"><span>            Files.createDirectories(uploadPath);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        try (InputStream inputStream = multipartFile.getInputStream()) {</span></span>
<span class="line"><span>            Path filePath = uploadPath.resolve(fileName);</span></span>
<span class="line"><span>            Files.copy(inputStream, filePath, StandardCopyOption.REPLACE_EXISTING);</span></span>
<span class="line"><span>        } catch (IOException ioe) {</span></span>
<span class="line"><span>            throw new IOException("Could not save file: " + fileName, ioe);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public static Resource getFile(String path, String fileName) {</span></span>
<span class="line"><span>        return new PathResource(Paths.get(BASE_DIR, path, fileName));</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="jwtutil-java" tabindex="-1"><a class="header-anchor" href="#jwtutil-java"><span>JwtUtil.java</span></a></h4>
<p>Работа с JWT токенами.</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>package ru.atomskills.back.utils;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import io.jsonwebtoken.Claims;</span></span>
<span class="line"><span>import io.jsonwebtoken.Jwts;</span></span>
<span class="line"><span>import io.jsonwebtoken.SignatureAlgorithm;</span></span>
<span class="line"><span>import io.jsonwebtoken.security.Keys;</span></span>
<span class="line"><span>import org.springframework.security.core.userdetails.UserDetails;</span></span>
<span class="line"><span>import org.springframework.stereotype.Component;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import javax.crypto.SecretKey;</span></span>
<span class="line"><span>import java.util.Date;</span></span>
<span class="line"><span>import java.util.concurrent.TimeUnit;</span></span>
<span class="line"><span>import java.util.function.Function;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>@Component</span></span>
<span class="line"><span>public class JwtUtil {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    private static final Long EXPIRATION_TIME = TimeUnit.HOURS.toMillis(1);</span></span>
<span class="line"><span>    private static final Long REFRESH_EXPIRATION_TIME = TimeUnit.DAYS.toMillis(1);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    private final SecretKey key = Keys.secretKeyFor(SignatureAlgorithm.HS256);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public String extractUsername(String token) {</span></span>
<span class="line"><span>        return extractClaim(token, Claims::getSubject);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public Date extractExpiration(String token) {</span></span>
<span class="line"><span>        return extractClaim(token, Claims::getExpiration);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public boolean hasClaim(String token, String claimName) {</span></span>
<span class="line"><span>        final Claims claims = extractAllClaims(token);</span></span>
<span class="line"><span>        return claims.get(claimName) != null;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    private &#x3C;T> T extractClaim(String token, Function&#x3C;Claims, T> claimsResolver) {</span></span>
<span class="line"><span>        final Claims claims = extractAllClaims(token);</span></span>
<span class="line"><span>        return claimsResolver.apply(claims);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    private Claims extractAllClaims(String token) {</span></span>
<span class="line"><span>        return Jwts.parserBuilder().setSigningKey(key).build().parseClaimsJws(token).getBody();</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public boolean isTokenExpired(String token) {</span></span>
<span class="line"><span>        return extractExpiration(token).before(new Date());</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public String generateAccessToken(UserDetails userDetails) {</span></span>
<span class="line"><span>        return Jwts.builder()</span></span>
<span class="line"><span>                .setSubject(userDetails.getUsername())</span></span>
<span class="line"><span>                .claim("authorities", userDetails.getAuthorities())</span></span>
<span class="line"><span>                .setIssuedAt(new Date(System.currentTimeMillis()))</span></span>
<span class="line"><span>                .setExpiration(new Date(System.currentTimeMillis() + EXPIRATION_TIME))</span></span>
<span class="line"><span>                .signWith(key).compact();</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public String generateRefreshToken(UserDetails userDetails) {</span></span>
<span class="line"><span>        return Jwts.builder()</span></span>
<span class="line"><span>                .setSubject(userDetails.getUsername())</span></span>
<span class="line"><span>                .setExpiration(new Date(System.currentTimeMillis() + REFRESH_EXPIRATION_TIME))</span></span>
<span class="line"><span>                .signWith(key)</span></span>
<span class="line"><span>                .compact();</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public long getExpirationTime() {</span></span>
<span class="line"><span>        return EXPIRATION_TIME;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public boolean isTokenValid(String token, UserDetails userDetails) {</span></span>
<span class="line"><span>        final String username = extractUsername(token);</span></span>
<span class="line"><span>        return (username.equals(userDetails.getUsername()) &#x26;&#x26; !isTokenExpired(token));</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


