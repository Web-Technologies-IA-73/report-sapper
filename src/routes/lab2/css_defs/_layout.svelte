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
                        href: 'lab2/css_defs',
                        text: 'Зв\'язування',
                    },
                    {
                        segment: 'embedding',
                        href: 'lab2/css_defs/embedding',
                        text: 'Вбодовування',
                    },
                    {
                        segment: 'inline',
                        href: 'lab2/css_defs/inline',
                        text: 'Вкладення',
                    },
                    {
                        segment: 'import',
                        href: 'lab2/css_defs/import',
                        text: 'Імпорт',
                    },
                ]}
        />
    </div>
    <div>
        <slot/>
    </div>
</LabLayout>
