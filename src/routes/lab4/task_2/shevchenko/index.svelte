<script lang="ts">
    import {onMount} from "svelte";
    import Calendar from './Calendar.svelte';

    let Prism;
    onMount(async () => {
        // Load the prismjs first after the page is loaded
        const prismModule = await import('svelte-prismjs');
        await Promise.all([
            import('prismjs/themes/prism-okaidia.css'),
            import('prismjs/components/prism-xml-doc.js'),
            import('prismjs/components/prism-shell-session.js'),
            import('prismjs/plugins/line-numbers/prism-line-numbers.css'),
        ]);
        // Once everything is loaded load the prismjs module
        Prism = prismModule.default;
    });
</script>

<h3>Варіант №6</h3>

<p><b>Календар</b></p>
<p>
    Реалізувати можливість вибору дати у елемент форми з спеціального візуального компоненту. Вимоги до компоненту:
    вибір числа, перехід між місяцями та роками, відміна вибору дати.
</p>

<h3>Результат</h3>

<Calendar/>

<h3>Код</h3>

<a
        href="https://github.com/Web-Technologies-IA-73/report-sapper/blob/main/src/routes/lab4/task_2/shevchenko/Calendar.svelte"
        target="_blank" rel="noopener noreferrer"
>
    GitHub
</a>
