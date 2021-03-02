<script lang="ts">
    import {onMount} from "svelte";

    let Prism;
    onMount(async () => {
        // Load the prismjs first after the page is loaded
        const prismModule = await import('svelte-prismjs');
        await Promise.all([
            import('prismjs/themes/prism-okaidia.css'),
            import('prismjs/components/prism-xml-doc.js'),
            import('prismjs/plugins/line-numbers/prism-line-numbers.css'),
        ]);
        // Once everything is loaded load the prismjs module
        Prism = prismModule.default;
    });
</script>

<p>
    Списки створюються за допомогою тегів <code>&lt;ul&gt;&lt;/ul&gt;</code> та вкладеного у нього <code>&lt;li&gt;&lt;/li&gt;</code>:
</p>

<svelte:component
        this={Prism}
        language="html"
        showLineNumbers
>{`
<ul>
    <li><a href=".">Головна</a></li>
    <li><a href="lab1">Лабораторна №1</a></li>
    <li><a href="lab2">Лабораторна №2</a></li>
    <li><a href="lab3">Лабораторна №3</a></li>
    <li><a href="lab4">Лабораторна №4</a></li>
    <li><a href="lab5">Лабораторна №5</a></li>
    <li><a href="lab6">Лабораторна №6</a></li>
    <li><a href="lab7">Лабораторна №7</a></li>
    <li><a href="lab8">Лабораторна №8</a></li>
    <li><a href="lab9">Лабораторна №9</a></li>
</ul>
`}</svelte:component>
