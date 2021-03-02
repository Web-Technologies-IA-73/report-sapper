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

<iframe src="https://web-technologies-ia-73.github.io/labs/pages/basket" title="Кошик"></iframe>

<svelte:component
        this={Prism}
        language="html"
        showLineNumbers
>{`
<form class="form-cart">
    <h2 class="cart-h2">Checkout order</h2>

    <div class="label-item">
        <label for="" class="label">Name *</label>
        <input placeholder="This field cannot be empty." type="text" />
    </div>
    <div class="label-item">
        <label for="" class="label">Contact phone *</label>
        <input placeholder="+38 (xxx) xxx-xx-xx" type="text" />
    </div>
    <div class="label-item">
        <label for="" class="label">Email</label>
        <input placeholder="Specify if you want to get a letter" type="text" />
    </div>
    <div class="label-item">
        <label for="" class="label">City / Settlement *</label>
        <input placeholder="Type city" type="text" />
    </div>

    <button class="btn-cart">Confirm order</button>
</form>
`}</svelte:component>
