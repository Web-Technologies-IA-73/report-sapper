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

    // Генерирует случайное число в заданном диапазоне
    function randIntn(max: number, min: number): number {
        return Math.floor(Math.random() * (max - min)) + min;
    }

    // Генерирует массив со случайными числами
    function makeRandomArray(size: number, maxN = 10, minN = 0): number[] {
        const arr = new Array(size);
        for (let i = 0; i < size; i++) {
            arr[i] = randIntn(maxN, minN);
        }

        return arr;
    }

    // Функция сортировки вставкой
    function sort(_arr: IList): IList {
        const arr = _arr.clone();
        for (let i = 0; i < arr.length() - 1; i++) {
            let minIdx = i;
            for (let j = i + 1; j < arr.length(); j++) {
                if (arr.less(j, minIdx)) {
                    minIdx = j;
                }
            }

            if (minIdx !== i) {
                arr.swap(i, minIdx);
            }
        }

        return arr;
    }

    interface IList {
        arr: number[];

        clone(): IList;

        length(): number;

        less(i: number, j: number): boolean;

        swap(i: number, j: number): void;
    }

    // Обвёртка над массивом, для создания абстракции
    class List implements IList {
        arr: number[];

        constructor(arr: number[]) {
            this.arr = arr;
        }

        // Создание клона
        clone(): IList {
            return new List(this.arr.slice());
        }

        length(): number {
            return this.arr.length;
        }

        // Сравнение элементов массива
        less(i: number, j: number): boolean {
            return this.arr[i] < this.arr[j];
        }

        // Поменять местами элементы в массиве
        swap(i: number, j: number) {
            [this.arr[i], this.arr[j]] = [this.arr[j], this.arr[i]];
        }
    }

    // Инвертированое представление List.
    class Reverse extends List {
        constructor(arr: number[]) {
            super(arr);
        }

        // Создание клона
        clone(): IList {
            return new Reverse(this.arr.slice());
        }

        // Инвертированое сравнение элементов
        less(i: number, j: number): boolean {
            return super.less(j, i);
        }
    }

    let size: number = 10;

    $: inputArr = makeRandomArray(size, 10, -10);
    $: outArr = sort(new Reverse(inputArr)).arr;

    $: negative = outArr.filter(v => v < 0);
    $: positive = outArr.filter(v => v >= 0);

    $: maxNegative = negative[0];
    $: minPositive = positive[positive.length - 1];
</script>

<h3>Варіант №6</h3>
<p>
    Створити одновимірний массив. Знайти найбільший серед від’ємних та найменший серед додатних елементів масиву.
</p>
<p>
    Упорядкувати масив у порядку зменшення методом вибору. Надрукувати вхідний та вихідний масив.
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
$ maxNegative = ${maxNegative}
$ minPositive = ${minPositive}
`}</svelte:component>

<h3>Код</h3>

<svelte:component
        this={Prism}
        language="ts"
        showLineNumbers
>{`
function randIntn(max: number, min: number): number {
    return Math.floor(Math.random() * (max - min)) + min;
}

function makeRandomArray(size: number, maxN = 10, minN = 0): number[] {
    const arr = new Array(size);
    for (let i = 0; i < size; i++) {
        arr[i] = randIntn(maxN, minN);
    }

    return arr;
}

function sort(_arr: IList): IList {
    const arr = _arr.clone();
    for (let i = 0; i < arr.length() - 1; i++) {
        let minIdx = i;
        for (let j = i + 1; j < arr.length(); j++) {
            if (arr.less(j, minIdx)) {
                minIdx = j;
            }
        }

        if (minIdx !== i) {
            arr.swap(i, minIdx);
        }
    }

    return arr;
}

interface IList {
    arr: number[];

    clone(): IList;

    length(): number;

    less(i: number, j: number): boolean;

    swap(i: number, j: number): void;
}

class List implements IList {
    arr: number[];

    constructor(arr: number[]) {
        this.arr = arr;
    }

    clone(): IList {
        return new Reverse(this.arr.slice());
    }

    length(): number {
        return this.arr.length;
    }

    less(i: number, j: number): boolean {
        return this.arr[i] < this.arr[j];
    }

    swap(i: number, j: number) {
        [this.arr[i], this.arr[j]] = [this.arr[j], this.arr[i]];
    }
}

class Reverse extends List {
    constructor(arr: number[]) {
        super(arr);
    }

    clone(): IList {
        return new Reverse(this.arr.slice());
    }

    less(i: number, j: number): boolean {
        return super.less(j, i);
    }
}
`}</svelte:component>
