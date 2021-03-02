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
                        href: 'lab2',
                        text: 'Постановка задачі',
                    },
                    {
                        segment: 'css_defs',
                        href: 'lab2/css_defs',
                        text: 'Визначення таблиці стилей',
                    },
                    {
                        segment: 'lists',
                        href: 'lab2/lists',
                        text: 'Списки',
                    },
                    {
                        segment: 'identifiers',
                        href: 'lab2/identifiers',
                        text: 'Ідентифікатори',
                    },
                    {
                        segment: 'indents',
                        href: 'lab2/indents',
                        text: 'Відступи',
                    },
                    {
                        segment: 'floating_elements',
                        href: 'lab2/floating_elements',
                        text: 'Плаваючі елементи',
                    },
                    {
                        segment: 'selectors',
                        href: 'lab2/selectors',
                        text: 'Селектори',
                    },
                ]}
        />
    </div>
    <div>
        <slot/>
    </div>
</LabLayout>
