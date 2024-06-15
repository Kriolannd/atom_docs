<template><div><h1 id="инструкция-по-развертыванию" tabindex="-1"><a class="header-anchor" href="#инструкция-по-развертыванию"><span>Инструкция по развертыванию</span></a></h1>
<p>Здесь вы сможете узнать как развернуть сервис в полном объеме на локальной машине.</p>
<p>Исходный код проекта можно найти по <a href="https://github.com/Kriolannd/atom_skills" target="_blank" rel="noopener noreferrer">ссылке на github</a></p>
<p>Следующие шаги помогут вам запустить проект локально</p>
<hr>
<h1 id="_1-склонировать-репозитории" tabindex="-1"><a class="header-anchor" href="#_1-склонировать-репозитории"><span>1. Склонировать репозиторий</span></a></h1>
<p>Откройте терминал в месте куда хотите склонировать репозиторий, далее выполните следующую команду:</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="background-color:#282c34;color:#abb2bf"><pre v-pre class="shiki one-dark-pro vp-code"><code><span class="line"><span>git clone https://github.com/Kriolannd/atom_skills.git</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>Далее требуется также склонировать все его подмодули, для этого введите следующую команду:</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="background-color:#282c34;color:#abb2bf"><pre v-pre class="shiki one-dark-pro vp-code"><code><span class="line"><span>git submodule update --init --recursive</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><hr>
<h1 id="_2-запустить-проект-в-docker" tabindex="-1"><a class="header-anchor" href="#_2-запустить-проект-в-docker"><span>2. Запустить проект в Docker</span></a></h1>
<p>Если у вас еще не имеется Docker, то вы можете установить его, следуя <a href="https://docs.docker.com/get-docker/" target="_blank" rel="noopener noreferrer">инструкции</a></p>
<p>В терминале перейдите в корневую папку с проектом и выполните следующее действие:</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="background-color:#282c34;color:#abb2bf"><pre v-pre class="shiki one-dark-pro vp-code"><code><span class="line"><span>docker compose up</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></div></template>


