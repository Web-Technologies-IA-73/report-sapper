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
                        segment: 'shevchenko',
                        href: 'lab4/task_1/shevchenko',
                        text: 'Шевченко Данило',
                    },
                    {
                        segment: 'savchuk',
                        href: 'lab4/task_1/savchuk',
                        text: 'Савчук Олександр',
                    },
                    {
                        segment: 'zatsarnyi',
                        href: 'lab4/task_1/zatsarnyi',
                        text: 'Зацарний Максим',
                    },
                ]}
        />
    </div>
    <div>
        <slot/>
    </div>
</LabLayout>
