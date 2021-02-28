<script lang="ts">
    export let segment: string | undefined;

    export interface ILink {
        segment?: string;
        href: string;
        text: string;
    }

    export let links: ILink[] = [];
</script>

<style>
    nav {
        border-bottom: 1px solid rgba(255, 62, 0, 0.1);
        font-weight: 300;
        padding: 0 1em;
    }

    ul {
        margin: 0;
        padding: 0;
        overflow-y: hidden;
        overflow-x: auto;
        /*overflow: auto;*/
        white-space: nowrap;
    }

    ul::-webkit-scrollbar {
        display: none;
    }

    /* clearfix */
    ul::after {
        content: '';
        display: block;
        clear: both;
    }

    li {
        float: start;
        display: inline-block;
    }

    [aria-current] {
        position: relative;
        display: inline-block;
    }

    [aria-current]::after {
        position: absolute;
        content: '';
        width: calc(100% - 1em);
        height: 2px;
        background-color: rgb(255, 62, 0);
        display: block;
        bottom: -1px;
    }

    a {
        text-decoration: none;
        padding: 1em 0.5em;
        display: block;
    }
</style>

<nav>
    <ul>
        {#each links as link}
            <li>
                <a rel=prefetch aria-current={segment === link.segment ? 'page' : undefined} href={link.href}>
                    {link.text}
                </a>
            </li>
        {/each}
    </ul>
</nav>