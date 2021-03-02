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
                        href: 'lab2/selectors',
                        text: 'Селектори тегу і класу',
                    },
                    {
                        segment: 'other',
                        href: 'lab2/selectors/other',
                        text: 'Інші селектори',
                    },
                    {
                        segment: 'grouping',
                        href: 'lab2/selectors/grouping',
                        text: 'Группування селекторів',
                    },
                ]}
        />
    </div>
    <div>
        <slot/>
    </div>
</LabLayout>
