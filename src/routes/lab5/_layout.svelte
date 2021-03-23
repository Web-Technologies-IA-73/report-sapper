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
                        href: 'lab5',
                        text: 'Постановка задачі',
                    },
                    {
                        segment: 'solution',
                        href: 'lab5/solution',
                        text: 'Виконання',
                    },
                ]}
        />
    </div>
    <div>
        <slot/>
    </div>
</LabLayout>
