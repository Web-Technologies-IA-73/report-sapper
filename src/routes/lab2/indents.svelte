<script lang="ts">
    import {onMount} from "svelte";

    let Prism;
    onMount(async () => {
        // Load the prismjs first after the page is loaded
        const prismModule = await import('svelte-prismjs');
        await Promise.all([
            import('prismjs/themes/prism-okaidia.css'),
            import('prismjs/components/prism-css.js'),
            import('prismjs/plugins/line-highlight/prism-line-highlight.js'),
            import('prismjs/plugins/line-highlight/prism-line-highlight.css'),
            import('prismjs/plugins/line-numbers/prism-line-numbers.css'),
        ]);
        // Once everything is loaded load the prismjs module
        Prism = prismModule.default;
    });
</script>

<p>
    Відступи визначаються за допомогою параметрів стилей <code>margin</code> (зовнішній відступ) та <code>padding</code>
    (внутрішній відтуп):
</p>

<svelte:component
        this={Prism}
        language="css"
        showLineNumbers
>{`
#navigator {
    margin: 10px 5px;
    padding: 3px 6px;
}
`}</svelte:component>

<p>
    Або <code>margin-left</code>, <code>margin-right</code>, <code>margin-top</code>, <code>margin-bottom</code> та
    <code>padding-left</code>, <code>padding-right</code>, <code>padding-top</code>, <code>padding-bottom</code>:
</p>

<svelte:component
        this={Prism}
        language="css"
        showLineNumbers
>{`
#navigator {
    margin-left: 10px;
    margin-right: 10px;
    margin-top: 5px;
    margin-bottom: 5px;

    padding-left: 3px;
    padding-right: 3px;
    padding-top: 6px;
    padding-bottom: 6px;
}
`}</svelte:component>
