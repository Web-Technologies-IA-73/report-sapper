<script lang="ts">
    export let segment: string | undefined;
</script>

<style>
    nav {
        border-bottom: 1px solid rgba(255, 62, 0, 0.1);
        font-weight: 300;
        padding: 0 1em;
    }

    ul {
        margin: 0;
        padding: 0;
    }

    /* clearfix */
    ul::after {
        content: '';
        display: block;
        clear: both;
    }

    li {
        display: block;
        float: left;
    }

    [aria-current] {
        position: relative;
        display: inline-block;
    }

    [aria-current]::after {
        position: absolute;
        content: '';
        width: calc(100% - 1em);
        height: 2px;
        background-color: rgb(255, 62, 0);
        display: block;
        bottom: -1px;
    }

    a {
        text-decoration: none;
        padding: 1em 0.5em;
        display: block;
    }
</style>

<nav>
    <ul>
        <li><a aria-current="{segment === 'lab1' ? 'page' : undefined}" href="lab1">Лабораторна №1</a></li>
        <li><a aria-current="{segment === 'lab2' ? 'page' : undefined}" href="lab2">Лабораторна №2</a></li>
        <li><a aria-current="{segment === 'lab3' ? 'page' : undefined}" href="lab3">Лабораторна №3</a></li>
        <li><a aria-current="{segment === 'lab4' ? 'page' : undefined}" href="lab4">Лабораторна №4</a></li>
        <li><a aria-current="{segment === 'lab5' ? 'page' : undefined}" href="lab5">Лабораторна №5</a></li>
        <li><a aria-current="{segment === 'lab6' ? 'page' : undefined}" href="lab6">Лабораторна №6</a></li>
        <li><a aria-current="{segment === 'lab7' ? 'page' : undefined}" href="lab7">Лабораторна №7</a></li>
        <li><a aria-current="{segment === 'lab8' ? 'page' : undefined}" href="lab8">Лабораторна №8</a></li>
        <li><a aria-current="{segment === 'lab9' ? 'page' : undefined}" href="lab9">Лабораторна №9</a></li>

        <!-- for the blog link, we're using rel=prefetch so that Sapper prefetches
             the blog data when we hover over the link or tap it on a touchscreen -->
<!--        <li><a rel=prefetch aria-current="{segment === 'blog' ? 'page' : undefined}" href="blog">blog</a></li>-->
    </ul>
</nav>
