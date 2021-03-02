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
<iframe src="https://web-technologies-ia-73.github.io/personal_tasks/shevchenko/tables" title="Таблиця"></iframe>

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
    <title>Таблиця</title>
</head>
<body>
<table>
    <thead>
    <tr>
        <th colspan="4">1</th>
    </tr>
    </thead>
    <tbody>
    <tr>
        <td>2</td>
        <td>3</td>
        <td>4</td>
        <td>5</td>
    </tr>
    </tbody>
    <tfoot>
    <tr>
        <th colspan="4">6</th>
    </tr>
    </tfoot>
</table>
</body>
</html>
`}</svelte:component>

<h3>style.css</h3>
<svelte:component
        this={Prism}
        language="css"
        showLineNumbers
>{`
table {
    margin: 1em auto 0;
}

th, td, tbody {
    border: 1px solid;
}

thead, tfoot {
    background-color: #f8cc46;
}

th {
    padding: 1em 0;
}

td {
    padding: 8em 2em;
    background-color: #ec5d57;
}

td:first-of-type {
    background-color: #3a6af6;
}

td:first-of-type + td + td {
    background-color: white;
}
`}</svelte:component>
