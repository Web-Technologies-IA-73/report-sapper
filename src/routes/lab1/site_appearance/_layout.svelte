<script lang="ts">
    import LabLayout from '../../../components/LabLayout.svelte';
    import LabNav from '../../../components/LabNav.svelte';

    export let segment: string | undefined;
</script>

<LabLayout>
    <div slot="nav-bar">
        <LabNav
                segment={segment}
                links={[
                    {
                        segment: undefined,
                        href: 'lab1/site_appearance',
                        text: 'Головна сторінка',
                    },
                    {
                        segment: 'catalogue',
                        href: 'lab1/site_appearance/catalogue',
                        text: 'Сторінка з каталогом смартфонів',
                    },
                    {
                        segment: 'product',
                        href: 'lab1/site_appearance/product',
                        text: 'Сторінка для перегляду розширеної інформації про обраний смартфон',
                    },
                    {
                        segment: 'cart',
                        href: 'lab1/site_appearance/cart',
                        text: 'Кошик користувача',
                    },
                ]}
        />
    </div>
    <div>
        <slot/>
    </div>
</LabLayout>
