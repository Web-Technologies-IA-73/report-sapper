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

<svelte:component
        this={Prism}
        language="html"
        showLineNumbers
>{`
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Shop</title>
    <link rel="stylesheet" href="./styles/main.css">
</head>
<body>
    <div class="primary">
        <nav class="nav">
            <div class="nav-container">
                <a href="./index.html" class="logo-wrapper">SHOPPO</a>
                <a href="./pages/catalog.html" class="catalog-wrapper">Каталог</a>
                <form class="form">
                    <input placeholder="Я ищу..." type="search" class="form-search"/>
                    <button type="submit" class="form-btn">Найти</button>
                </form>
                <a href="./pages/basket.html" class="nav-basket-wrapper"><img src="" class="basket-img"/>Корзина</a>
            </div>
        </nav>

        <div class="primary-page">
            <div class="primary-container">
                <div class="primary-content">
                    <h1 class="primary-h1">Ремешок в подарок при покупке Apple Watch</h1>
                    <div class="primary-btn-wrap">
                        <button class="primary-btn">Подробнее</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</body>
</html>
`}</svelte:component>
