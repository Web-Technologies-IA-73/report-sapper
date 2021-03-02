<script lang="ts">
    import {onMount} from "svelte";

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

<p>Селектор атрібута має такий синтаксис <code>selector[attrib="value"]</code>.</p>

<h3>Приклад</h3>

<svelte:component
        this={Prism}
        language="html"
        showLineNumbers
        data-line="2,8"
>{`
<style>
    input[type="text"] {
        background-color: red;
        display: block;
    }
</style>
<input type="text">
<input type="search">
`}</svelte:component>

<style>
    .display {
        border: 1px solid black;
        padding: 1em;
        border-radius: 12px;
    }

    input[type="text"] {
        background-color: red;
        display: block;
    }
</style>

<h3>Результат</h3>

<div class="display">
    <input type="text">
    <input type="search">
</div>
