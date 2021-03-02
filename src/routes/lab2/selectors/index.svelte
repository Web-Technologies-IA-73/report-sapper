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

<p>Селектор класу має префікс <code>.</code>.</p>
<p>Селектор тегу префіксів не має.</p>

<h3>Приклад</h3>

<svelte:component
        this={Prism}
        language="html"
        showLineNumbers
        data-line="2,9"
>{`
<style>
    .square {
        width: 100px;
        height: 100px;
        background: red;
        text-align: center;
    }

    footer {
        width: 200px;
        height: 80px;
        background: #d99a1c;
        text-align: center;
    }
</style>
<div class="square">Class</div>
<footer>Tag</footer>
`}</svelte:component>

<style>
    .display {
        border: 1px solid black;
        padding: 1em;
        border-radius: 12px;
    }

    .square {
        width: 100px;
        height: 100px;
        background: red;
        text-align: center;
    }

    footer {
        width: 200px;
        height: 80px;
        background: #d99a1c;
        text-align: center;
    }
</style>

<div class="display">
    <div class="square">Class</div>
    <footer>Tag</footer>
</div>
