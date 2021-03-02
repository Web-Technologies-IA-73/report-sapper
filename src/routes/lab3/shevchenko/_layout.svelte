<script lang="ts">
    import LabLayout from '../../../components/LabLayout.svelte';
    import LabNav from '../../../components/LabNav.svelte';

    export let segment: string | undefined;
</script>

<svelte:head>
    <title>Лабораторна робота №2</title>
</svelte:head>

<LabLayout>
    <div slot="nav-bar">
        <LabNav
                segment={segment}
                links={[
                    {
                        segment: undefined,
                        href: 'lab3/shevchenko',
                        text: 'Середовище розробки. Шлях до файлів',
                    },
                    {
                        segment: 'table',
                        href: 'lab3/shevchenko/table',
                        text: 'Розмітка за допомогою таблиці',
                    },
                    {
                        segment: 'blocks',
                        href: 'lab3/shevchenko/blocks',
                        text: 'Розмітка за допомогою блочних елементів',
                    },
                    {
                        segment: 'flexbox',
                        href: 'lab3/shevchenko/flexbox',
                        text: 'Flexbox',
                    },
                ]}
        />
    </div>
    <div>
        <slot/>
    </div>
</LabLayout>
