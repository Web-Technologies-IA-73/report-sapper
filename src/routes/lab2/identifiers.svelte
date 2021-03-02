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

<p>Ідентифікатор елементу визначається за допомогою атрібуту <code>id</code>:</p>

<svelte:component
        this={Prism}
        language="html"
        showLineNumbers
        data-line="1"
>{`
<ul id="navigator">
    <!--  ...  -->
</ul>
`}</svelte:component>

<p>Селектор CSS за ідентифікатором має префікс <code>#</code>:</p>

<svelte:component
        this={Prism}
        language="css"
        showLineNumbers
>{`
#navigator {
    /* ... */
}
`}</svelte:component>
