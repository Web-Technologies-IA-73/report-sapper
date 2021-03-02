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

<p>
    <code>float</code> використовується для обгорнення елементів навколо. Наприклад, для обгорнення тексту навколо
    картинки.
</p>
<p>
    <code>float</code> може приймати наступні значення: left, right, none, inline, inline-block, inline-table,
    table-row, inline-flex, inline-grid та ін..
</p>
<p>
    При деяких значеннях цей параметр може впливати на обчислювальне значення display: встановити його у значення
    <code>block</code>, <code>table</code>, <code>flex</code>, або <code>grid</code>.
</p>

<h3>Приклад</h3>

<svelte:component
        this={Prism}
        language="html"
        showLineNumbers
        data-line="6"
>{`
<style>
    .square {
        background: red;
        width: 100px;
        height: 100px;
        float: left;
        margin: 1em;
    }
</style>
<main>
    <div class="square"></div>
    <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
        dolore magna aliqua. Integer feugiat scelerisque varius morbi enim. Cursus euismod quis viverra nibh cras
        pulvinar mattis nunc sed. Et ligula ullamcorper malesuada proin libero nunc consequat interdum varius.
        Pellentesque habitant morbi tristique senectus et. Tortor posuere ac ut consequat semper. Fermentum odio eu
        feugiat pretium nibh ipsum consequat. Porttitor leo a diam sollicitudin tempor id eu nisl nunc. Mollis
        aliquam ut porttitor leo a diam sollicitudin tempor. Ipsum nunc aliquet bibendum enim facilisis gravida
        neque convallis a. Tempor orci eu lobortis elementum nibh. Lobortis feugiat vivamus at augue eget arcu
        dictum. Lorem ipsum dolor sit amet consectetur. Morbi tincidunt ornare massa eget egestas purus viverra
        accumsan in. Ac turpis egestas maecenas pharetra convallis posuere morbi leo. Ut sem viverra aliquet eget.
        Consequat id porta nibh venenatis cras sed.<br/>
        Eu mi bibendum neque egestas. Elit duis tristique sollicitudin nibh sit amet. Auctor neque vitae tempus quam
        pellentesque nec nam. Faucibus in ornare quam viverra orci sagittis eu volutpat. Odio pellentesque diam
        volutpat commodo. Netus et malesuada fames ac turpis egestas. Quisque id diam vel quam elementum pulvinar.
        Aliquet risus feugiat in ante metus dictum at tempor commodo. Tempus quam pellentesque nec nam aliquam sem
        et tortor consequat. Commodo sed egestas egestas fringilla phasellus faucibus. Nibh venenatis cras sed felis
        eget. Id consectetur purus ut faucibus pulvinar elementum integer enim neque. Egestas sed tempus urna et
        pharetra pharetra. Pulvinar elementum integer enim neque volutpat ac tincidunt.
    </p>
</main>
`}</svelte:component>

<h3>Результат виконання</h3>

<style>
    .square {
        background: red;
        width: 100px;
        height: 100px;
        float: left;
        margin: 1em;
    }

    .display {
        border: 1px solid black;
        padding: 1em;
        border-radius: 12px;
    }
</style>
<div class="display">
    <div class="square"></div>
    <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
        dolore magna aliqua. Integer feugiat scelerisque varius morbi enim. Cursus euismod quis viverra nibh cras
        pulvinar mattis nunc sed. Et ligula ullamcorper malesuada proin libero nunc consequat interdum varius.
        Pellentesque habitant morbi tristique senectus et. Tortor posuere ac ut consequat semper. Fermentum odio eu
        feugiat pretium nibh ipsum consequat. Porttitor leo a diam sollicitudin tempor id eu nisl nunc. Mollis
        aliquam ut porttitor leo a diam sollicitudin tempor. Ipsum nunc aliquet bibendum enim facilisis gravida
        neque convallis a. Tempor orci eu lobortis elementum nibh. Lobortis feugiat vivamus at augue eget arcu
        dictum. Lorem ipsum dolor sit amet consectetur. Morbi tincidunt ornare massa eget egestas purus viverra
        accumsan in. Ac turpis egestas maecenas pharetra convallis posuere morbi leo. Ut sem viverra aliquet eget.
        Consequat id porta nibh venenatis cras sed.<br/>
        Eu mi bibendum neque egestas. Elit duis tristique sollicitudin nibh sit amet. Auctor neque vitae tempus quam
        pellentesque nec nam. Faucibus in ornare quam viverra orci sagittis eu volutpat. Odio pellentesque diam
        volutpat commodo. Netus et malesuada fames ac turpis egestas. Quisque id diam vel quam elementum pulvinar.
        Aliquet risus feugiat in ante metus dictum at tempor commodo. Tempus quam pellentesque nec nam aliquam sem
        et tortor consequat. Commodo sed egestas egestas fringilla phasellus faucibus. Nibh venenatis cras sed felis
        eget. Id consectetur purus ut faucibus pulvinar elementum integer enim neque. Egestas sed tempus urna et
        pharetra pharetra. Pulvinar elementum integer enim neque volutpat ac tincidunt.
    </p>
</div>
