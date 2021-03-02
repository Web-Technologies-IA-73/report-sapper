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

<p>Вбудовування CSS виконується за допомогою атрібуту <code>style</code> елементу:</p>

<svelte:component
        this={Prism}
        language="html"
        showLineNumbers
        data-line="8-12, 9"
>{`
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>
<iframe
    style="width: 100%; height: 85vh; margin: 0 0 1em 0; border-radius: 12px;"
    src="https://web-technologies-ia-73.github.io/labs"
    title="Головна сторінка"
></iframe>
</body>
</html>
`}</svelte:component>
