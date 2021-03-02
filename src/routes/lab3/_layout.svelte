<script lang="ts">
    import LabLayout from '../../components/LabLayout.svelte';
    import LabNav from '../../components/LabNav.svelte';

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
                        href: 'lab3',
                        text: 'Тема та мета',
                    },
                    {
                        segment: 'home',
                        href: 'lab3/home',
                        text: 'Головна сторінка сайту',
                    },
                    {
                        segment: 'html',
                        href: 'lab3/html',
                        text: 'HTML-код сайту',
                    },
                    {
                        segment: 'css',
                        href: 'lab3/css',
                        text: 'CSS-код сайту',
                    },
                    {
                        segment: 'shevchenko',
                        href: 'lab3/shevchenko',
                        text: 'Шевченко Данило',
                    },
                    {
                        segment: 'savchuk',
                        href: 'lab3/savchuk',
                        text: 'Савчук Олександр',
                    },
                    {
                        segment: 'zatsarnyi',
                        href: 'lab3/zatsarnyi',
                        text: 'Зацарний Максим',
                    },
                    {
                        segment: 'conclusions',
                        href: 'lab3/conclusions',
                        text: 'Висновки',
                    },
                ]}
        />
    </div>
    <div>
        <slot/>
    </div>
</LabLayout>
