<script lang="ts">
</script>

<style>
    h1, h2, p, ul {
        text-align: center;
        margin: 0 auto;
    }

    h1 {
        font-size: 2.8em;
        text-transform: uppercase;
        font-weight: 700;
        margin: 0 0 0.5em 0;
    }

    h2 {
        font-size: 1.8em;
        text-transform: uppercase;
        font-weight: 600;
        margin: 0 0 0.5em 0;
    }

    p {
        margin: 1em auto;
    }

    p.subheader {
        font-size: 1.6em;
    }

    /* clearfix */
    ul::after {
        content: '';
        display: block;
        clear: both;
    }

    li {
        float: start;
        display: block;
    }

    a {
        text-decoration: underline;
        color: dodgerblue;
        padding-left: 0.2em;
        padding-right: 0.2em;
    }

    .links::before {
        content: '(';
    }

    .links::after {
        content: ')';
    }

    @media (min-width: 480px) {
        h1 {
            font-size: 4em;
        }
    }
</style>

<svelte:head>
    <title>Лабораторные работы</title>
</svelte:head>


<h1>Лабораторные работы</h1>
<p class="subheader"><strong>по предмету Web-технологии</strong></p>

<h2>Выполнили</h2>
<p><strong>Студенты группы ИА-73</strong></p>
<ul>
    <li>
        Шевченко Данила
        <span class="links">
            <a
                    href="https://github.com/alienvspredator"
                    target="_blank" rel="noopener noreferrer"
            >
                GitHub
            </a>,
            <a
                    href="https://t.me/sheva123"
                    target="_blank" rel="noopener noreferrer"
            >
                Telegram
            </a>
        </span>
    </li>
    <li>
        Савчук Александр
        <span class="links">
            <a
                    href="https://github.com/tachka123"
                    target="_blank" rel="noopener noreferrer"
            >
                GitHub
            </a>,
            <a
                    href="https://t.me/tachka123"
                    target="_blank" rel="noopener noreferrer"
            >
                Telegram
            </a>
        </span>
    </li>
    <li>
        Зацарный Максим
        <span class="links">
            <a
                    href="https://github.com/maxzatsarnyi"
                    target="_blank" rel="noopener noreferrer"
            >
                GitHub
            </a>,
            <a
                    href="https://t.me/maxzatsarnyi"
                    target="_blank" rel="noopener noreferrer"
            >
                Telegram
            </a>
        </span>
    </li>
</ul>
