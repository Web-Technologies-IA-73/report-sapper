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

<svelte:component
        this={Prism}
        language="css"
        showLineNumbers
>{`
* {
    box-sizing: border-box;
    padding: 0;
    margin: 0;

    /* border: 0.1px solid forestgreen; */
}

a {
    text-decoration: none;
    color: black;
}


/* NAVBAR */

.nav {
    width: 100%;
    position: sticky;
    top: 0;
    margin: 0 auto;
    height: 60px;
    background-color: black;
}

.nav-container {
    max-width: 1400px;
    margin: 0 auto;
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 60px;

}

.logo-wrapper {
    cursor: pointer;
    color: white;
}

.catalog-wrapper {
    cursor: pointer;
    color: white;
}

.catalog-wrapper:hover {
    cursor: pointer;
    color: rgb(157, 188, 255);
}

.form {
    width: 700px;
    cursor: pointer;
    display: flex;
}

.form-search {
    width: 100%;
    height: 30px;
    outline: none;
    padding-left: 20px;
    cursor: pointer;
}

.form-btn {
    color: white;
    background-color: rgb(95, 95, 95);
    border: none;
    outline: none;
    padding: 0 10px;
    height: 30px;
    cursor: pointer;
}

.nav-basket-wrapper {
    cursor: pointer;
    color: white;

}

/* NAVBAR END */

/* PRIMARY PAGE */

.primary-page {
    margin: 0 auto;
    height: 700px;
    background-image: url('../images/photo_2021-03-01_07-25-53.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    align-items: center;
}

.primary-container {
    max-width: 1400px;
    margin: 0 auto;
    display: flex;
    justify-content: flex-end;
    align-items: center;
}

.primary-content {
    width: 400px;
    /* margin-left: 300px; */
    display: flex;
    flex-direction: column;
    margin-left: 600px;
}

.primary-h1 {
    width: 400px;
    text-align: left;
    color: white;
    font-size: 50px;
    line-height: 3rem;
}

.primary-btn-wrap {
    margin-top: 70px;
}

.primary-btn {
    outline: none;
    background-color: transparent;
    border: 2px solid white;
    color: white;
    cursor: pointer;
    padding: 12px 30px;
}

.primary-btn:hover {
    background-color: white;
    border: 2px solid white;
    color: black;
}

/* PRIMARY PAGE END */

/* CATALOG PAGE */

.catalog {
    margin: 0 auto;
}

.catalog-container {
    max-width: 1400px;
    margin: 0 auto;
}

.catalog-h2 {
    margin-left: 200px;
    margin-top: 30px;
}

.products-list {
    list-style: none;
    margin: 0 auto;
    width: 900px;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    margin-bottom: 100px;
}

.product-item {
    margin-top: 20px;
    width: 200px;
}


.img-wrap {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
}

.product-img {
    height: 150px;
    width: 120px;
}

.product-desc:hover {
    color: rgb(135, 149, 228);
}

.product-stock {
    margin-top: 25px;
    color: rgb(47, 185, 47);
}

.product-price {
    margin-top: 5px;
    font-size: 20px;
}

.product-btn {
    cursor: pointer;
    margin-top: 20px;
    background: transparent;
    border: 2px solid rgb(47, 185, 47);
    outline: none;
    padding: 5px 10px;
    color: rgb(47, 185, 47);

}

.product-btn:hover {
    background-color: black;
    border: 2px solid black;
    color: white;

}


/* CATALOG PAGE END */


/* PRODUCT PAGE */

.product {
    margin: 0 auto;
    height: 700px;
}

.product-container {
    max-width: 1400px;
    margin: 30px auto;
    display: flex;
    justify-content: space-around;
}


.item-img-wrapper img {
    height: 350px;
}

.item-wrapper {
    width: 800px;
}


.item-content {
    margin-top: 30px;
    display: flex;
    justify-content: space-between;
}


.item-price {
    margin-top: 50px;
    font-size: 23px;
}

.item-stock {
    margin-top: 5px;
    color: rgb(19, 163, 19);
}

.val {
    font-size: 18px;
}

.item-btn-add {
    cursor: pointer;
    margin-top: 20px;
    padding: 10px 10px;
    background-color: rgb(19, 163, 19);
    border: 2px solid rgb(19, 163, 19);
    text-align: center;
    color: white;
}

.item-btn-add:hover {
    background-color: transparent;
    border: 2px solid rgb(19, 163, 19);
    color: rgb(19, 163, 19);
}

.item-block-2 {
    width: 480px;
}

/* PRODUCT PAGE END */

/* BASKET PAGE */

.basket {
    margin: 0 auto;
    height: 700px;
}

.basket-container {
    max-width: 1400px;
    margin: 50px auto;

}

.basket-wrapper {
    display: flex;
    justify-content: space-around;
    width: 80%;
    margin: 0 auto;
}

.form-cart {
    width: 350px;
    color: black;
}


.label-item {
    margin-top: 20px;
    display: flex;
    flex-direction: column;
}


.label-item input {
    margin-top: 7px;
    height: 40px;
    padding-left: 15px;
    outline: none;
}

.btn-cart {
    margin-top: 40px;
    padding: 10px 8px;
    background-color: rgb(14, 153, 14);
    border: 2px solid rgb(14, 153, 14);
    color: white;
    cursor: pointer;
}

.btn-cart:hover {
    background-color: transparent;
    border: 2px solid rgb(14, 153, 14);
    color: rgb(14, 153, 14);
}

.basket-content {
    color: black;
    width: 400px;
}

.basket-content-heading {
    display: flex;
    justify-content: space-between;
}

.basket-cont-h2 {
    font-size: 23px;
}

.basket-edit {
    color: rgb(14, 153, 14);
}

.basket-product-cont {
    margin-top: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}


.backet-pr-img {
    height: 100px;
}

.backet-pr-desc {
    width: 170px;
}


.backet-amount-cont {
    border-top: 1px solid silver;
    padding-top: 20px;
    margin-top: 20px;
    display: flex;
    justify-content: space-between;

}


.backet-shipping-cont {
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
}


.backet-total-cont {
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
}

.backet-total-price {
    font-size: 20px;

}

/* BASKET PAGE END */
`}</svelte:component>
