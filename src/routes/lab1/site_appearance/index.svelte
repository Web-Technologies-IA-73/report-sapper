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

<style>
    iframe {
        width: 100%;
        height: 85vh;
        margin: 0 0 1em 0;
        border-radius: 12px;
    }
</style>

<iframe src="https://web-technologies-ia-73.github.io/labs" title="Головна сторінка"></iframe>

<svelte:component
        this={Prism}
        language="html"
        showLineNumbers
>{`
<img src="images/photo_2021-03-01_07-25-53.jpg"/>
`}</svelte:component>
