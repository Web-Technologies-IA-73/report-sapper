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
                        href: 'lab4',
                        text: 'Постановка задачі',
                    },
                    {
                        segment: 'js',
                        href: 'lab4/js',
                        text: 'JavaScript на власному сайті',
                    },
                    {
                        segment: 'task_1',
                        href: 'lab4/task_1/shevchenko',
                        text: 'Індивідуальне завдання №1',
                    },
                    {
                        segment: 'task_2',
                        href: 'lab4/task_2/shevchenko',
                        text: 'Індивідуальне завдання №2',
                    },{
                        segment: 'task_3',
                        href: 'lab4/task_3/shevchenko',
                        text: 'Індивідуальне завдання №3',
                    },
                ]}
        />
    </div>
    <div>
        <slot/>
    </div>
</LabLayout>
