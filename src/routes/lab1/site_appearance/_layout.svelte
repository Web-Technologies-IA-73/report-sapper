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
                        text: 'Главная страница',
                    },
                    {
                        segment: 'how_to_play',
                        href: 'lab1/site_appearance/how_to_play',
                        text: 'Как играть',
                    },
                    {
                        segment: 'server',
                        href: 'lab1/site_appearance/server',
                        text: 'Сервер',
                    },
                    {
                        segment: 'donate',
                        href: 'lab1/site_appearance/donate',
                        text: 'Донат',
                    },
                ]}
        />
    </div>
    <div>
        <slot/>
    </div>
</LabLayout>
