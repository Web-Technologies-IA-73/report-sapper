<script lang="ts">
    import {onMount} from "svelte";

    let Prism;
    onMount(async () => {
        // Load the prismjs first after the page is loaded
        const prismModule = await import('svelte-prismjs');
        await Promise.all([
            import('prismjs/themes/prism-okaidia.css'),
            import('prismjs/components/prism-typescript.js'),
            import('prismjs/components/prism-shell-session.js'),
            import('prismjs/plugins/line-numbers/prism-line-numbers.css'),
        ]);
        // Once everything is loaded load the prismjs module
        Prism = prismModule.default;
    });

    function randIntn(n: number): number {
        return Math.floor(Math.random() * n);
    }

    function makeRandomArray(size: number, maxN = 10): number[] {
        const arr = new Array(size);
        for (let i = 0; i < size; i++) {
            arr[i] = randIntn(maxN);
        }

        return arr;
    }

    function quickSort(arr: number[], lo: number, hi: number) {
        if (arr.length < 2) {
            return;
        }

        const idx = doPivot(arr, lo, hi);
        if (lo < idx - 1) {
            quickSort(arr, lo, idx - 1);
        }

        if (idx < hi) {
            quickSort(arr, idx, hi);
        }
    }

    function doPivot(arr: number[], lo: number, hi: number): number {
        const pivot = arr[Math.floor((lo + hi) / 2)];
        while (lo <= hi) {
            while (arr[lo] < pivot) {
                lo++;
            }

            while (arr[hi] > pivot) {
                hi--;
            }

            if (lo <= hi) {
                [arr[lo], arr[hi]] = [arr[hi], arr[lo]];
                lo++;
                hi--;
            }
        }

        return lo;
    }

    function qSort(arr: number[]): number[] {
        const arrCopy = arr.slice();
        quickSort(arrCopy, 0, arrCopy.length - 1);
        return arrCopy;
    }

    let size: number = 10;

    $: inputArr = makeRandomArray(size);
    $: outArr = qSort(inputArr);
</script>

<h3>Варіант №6</h3>
<p>
    Створити одновимірний массив, кількість елементів якого задана користувачем. Обчислити суму елементів між
    максимальним та мінімальними значеннями масиву.
</p>
<p>
    Упорядкувати масив у порядку зростання (метод <b>швидкого</b> сортування). Надрукувати вхідний та вихідний масив.
</p>
<p>Застосувати функції</p>

<h3>Результат</h3>

<label>
    <p>Розмір масиву: {size}</p>
    <input type=range bind:value={size} min=1 max=10>
</label>

<svelte:component
        this={Prism}
        language="shell-session"
>{`
$ inputArr: [${inputArr.join(', ')}]
$ outArr: [${outArr.join(', ')}]
$ max + min = ${outArr[outArr.length-1]} + ${outArr[0]} = ${outArr[outArr.length-1] + outArr[0]}
`}</svelte:component>

<h3>Код</h3>

<svelte:component
        this={Prism}
        language="ts"
        showLineNumbers
>{`
function randIntn(n: number): number {
    return Math.floor(Math.random() * n);
}

function makeRandomArray(size: number, maxN = 10): number[] {
    const arr = new Array(size);
    for (let i = 0; i < size; i++) {
        arr[i] = randIntn(maxN);
    }

    return arr;
}

function quickSort(arr: number[], lo: number, hi: number) {
    if (arr.length < 2) {
        return;
    }

    const idx = doPivot(arr, lo, hi);
    if (lo < idx - 1) {
        quickSort(arr, lo, idx - 1);
    }

    if (idx < hi) {
        quickSort(arr, idx, hi);
    }
}

function doPivot(arr: number[], lo: number, hi: number): number {
    const pivot = arr[Math.floor((lo + hi) / 2)];
    while (lo <= hi) {
        while (arr[lo] < pivot) {
            lo++;
        }

        while (arr[hi] > pivot) {
            hi--;
        }

        if (lo <= hi) {
            [arr[lo], arr[hi]] = [arr[hi], arr[lo]];
            lo++;
            hi--;
        }
    }

    return lo;
}

function qSort(arr: number[]): number[] {
    const arrCopy = arr.slice();
    quickSort(arrCopy, 0, arrCopy.length - 1);
    return arrCopy;
}

const inputArr = makeRandomArray(10);
const outArr = qSort(inputArr);

console.log(inputArr);
console.log(outArr);
`}</svelte:component>
