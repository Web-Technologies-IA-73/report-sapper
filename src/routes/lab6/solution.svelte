<script lang="ts">
    import result from './result.png';
    import result2 from './result2.png';
</script>

<h3>Конфігурація веб-сервера</h3>

<p>У якості веб-сервера було використано nginx</p>

<p>Конфігурація nginx має наступний вигляд</p>

<pre>
<code>
    master_process off;
    worker_processes 1;
    pid nginx.pid;

    events &lcub;
        worker_connections 1024;
    &rcub;

    http &lcub;
        include mime.types;

        server &lcub;
            listen 80;
            root /www/web;

            location / &lcub;
                try_files $uri $uri.html $uri/ =404;
            &rcub;
        &rcub;
    &rcub;
</code>
</pre>

<p>Завдяки <code>try_files $uri $uri.html $uri/ =404;</code> можна прибрати з адресу сторінки розширення
<code>.html</code>.</p>

<h3>Результат</h3>

<img src=".{result}" alt="Результат">
<img src=".{result2}" alt="Результат">

<style>
    img {
        max-width: 850px;
    }
</style>
