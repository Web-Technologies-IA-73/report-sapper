<script lang="ts">
    import LabLayout from '../../components/LabLayout.svelte';
    import LabNav from '../../components/LabNav.svelte';

    export let segment: string | undefined;
</script>

<svelte:head>
    <title>Лабораторна робота №1</title>
</svelte:head>

<LabLayout>
    <div slot="nav-bar">
        <LabNav
                segment={segment}
                links={[
                    {
                        segment: undefined,
                        href: 'lab1',
                        text: 'Постановка задачі',
                    },
                    {
                        segment: 'development_environment',
                        href: 'lab1/development_environment',
                        text: 'Середа розробки',
                    },
                    {
                        segment: 'site_location',
                        href: 'lab1/site_location',
                        text: 'Місце розташування сайту',
                    },
                    {
                        segment: 'description_of_the_subject_environment',
                        href: 'lab1/description_of_the_subject_environment',
                        text: 'Опис предметного середовища',
                    },
                    {
                        segment: 'site_appearance',
                        href: 'lab1/site_appearance',
                        text: 'Зовнішній вигляд сайту',
                    },
                    {
                        segment: 'conclusion',
                        href: 'lab1/conclusion',
                        text: 'Висновки',
                    },
                ]}
        />
    </div>
    <div>
        <slot/>
    </div>
</LabLayout>
