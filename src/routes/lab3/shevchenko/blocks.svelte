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

<style>
    iframe {
        width: 100%;
        height: 85vh;
        margin: 0 0 1em 0;
        border-radius: 12px;
    }
</style>

<h3>Результат</h3>
<iframe src="https://web-technologies-ia-73.github.io/personal_tasks/shevchenko/float-blocks"
        title="Блочні елементи"></iframe>

<h3>HTML</h3>

<svelte:component
        this={Prism}
        language="html"
        showLineNumbers
>{`
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <link rel="stylesheet" href="style.css">
    <title>Плаваючі блоки</title>
</head>
<body>
<main>
    <div class="top">1</div>
    <div class="container">
        <div class="elem">2</div>
        <div class="elem">3</div>
        <div class="elem">4</div>
        <div class="elem">5</div>
    </div>
    <div class="bottom">6</div>
</main>
</body>
</html>
`}</svelte:component>

<h3>style.css</h3>
<svelte:component
        this={Prism}
        language="css"
        showLineNumbers
>{`
main {
    margin: 1em auto 0;
    width: 20em;
    height: 20em;
}

div {
    text-align: center;
    outline: 1px solid;
}

.container {
    height: 68%;
}

.elem {
    float: left;
    width: 4em;
    height: 100%;
    margin: 0 2.5%;
}

.elem {
    background-color: #ec5d57;
}

.elem:first-of-type {
    background-color: #3a6af6;
}

.elem:first-of-type + .elem + .elem {
    background-color: white;
}

.top, .bottom {
    clear: left;
    height: 16%;
    width: auto;
    background-color: #f8cc46;
}
`}</svelte:component>
