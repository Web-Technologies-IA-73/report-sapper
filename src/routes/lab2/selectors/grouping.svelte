<script lang="ts">
    import {onMount} from 'svelte';
    import Nav from '../../../components/Nav.svelte';

    let Prism;
    onMount(async () => {
        // Load the prismjs first after the page is loaded
        const prismModule = await import('svelte-prismjs');
        await Promise.all([
            import('prismjs/themes/prism-okaidia.css'),
            import('prismjs/components/prism-xml-doc.js'),
            import('prismjs/plugins/line-highlight/prism-line-highlight.js'),
            import('prismjs/plugins/line-highlight/prism-line-highlight.css'),
            import('prismjs/plugins/line-numbers/prism-line-numbers.css'),
        ]);
        // Once everything is loaded load the prismjs module
        Prism = prismModule.default;
    });
</script>

<p>Селектори можна групувати та комбіювати. Ось деякі з комбінаторів:</p>
<ul>
    <li><code>,</code>: обирає усі співпадаючі вузли.</li>
    <li><code>&nbsp;</code>: обирає усі вкладені елементи, незалежно від рівня вкладеності.</li>
    <li><code>&gt;</code>: обирає прямого нащадка.</li>
</ul>

<h3>Приклад</h3>

<svelte:component
        this={Prism}
        language="css"
        showLineNumbers
        data-line="2,8"
>{`
h1, h2, h3, h4, h5, h6 {
    margin: 0 0 0.5em 0;
    font-weight: 400;
    line-height: 1.2;
}

nav > ul {
    margin: 0;
    padding: 0;
}

ul li {
    display: block;
    float: left;
}
`}</svelte:component>

<style>
    .display {
        border: 1px solid black;
        padding: 1em;
        border-radius: 12px;
    }
</style>

<h3>Результат</h3>

<div class="display">
    <Nav/>
</div>
