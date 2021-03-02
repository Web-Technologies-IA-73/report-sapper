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

<p>Лінкінг CSS виконується за допомогою тегу <code>&lt;link&gt;</code> з параметрами <code>rel="stylesheet"</code> та <code>href="path"</code>:</p>

<svelte:component
        this={Prism}
        language="html"
        showLineNumbers
        data-line="5"
>{`
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <link rel="stylesheet" href="style.css">
    <title>Title</title>
</head>
<body>
<!-- ... -->
</body>
</html>
`}</svelte:component>
