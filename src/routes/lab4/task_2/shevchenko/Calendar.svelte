<script lang="ts">
    function daysInMonth(month: number, year: number): number {
        return new Date(year, month + 1, 0).getDate();
    }

    function startDayOfMonth(month: number, year: number): number {
        return new Date(year, month, 1).getDay();
    }

    type WeekType = 'prev-month' | 'current-month' | 'next-month'

    class Day {
        dayN: number;
        weekN: number;
        month: number;
        year: number;
        type: WeekType;

        constructor(dayN: number, weekN: number, month: number, year: number, type: WeekType) {
            this.dayN = dayN;
            this.weekN = weekN;
            this.month = month;
            this.year = year;
            this.type = type;
        }

        serialize(): string {
            return JSON.stringify({
                date: new Date(this.year, this.month, this.dayN + 1),
                type: this.type,
                weekN: this.weekN
            });
        }

        static deserialize(str: string): Day {
            const obj: {
                date: Date,
                type: WeekType,
                weekN: number,
            } = JSON.parse(str);
            obj.date = new Date(obj.date);

            return new Day(obj.date.getDate() - 1, obj.weekN, obj.date.getMonth(), obj.date.getFullYear(), obj.type);
        }

        asDate(): Date {
            return new Date(this.year, this.month, this.dayN + 1);
        }
    }

    type Week = Day[];

    function makeWeek(
        weekN: number,
        month: number,
        year: number,
        week: Week = new Array(7),
        skip = 0
    ): Week {
        const days = daysInMonth(month, year);
        const startDay = startDayOfMonth(month, year);
        for (let i = skip; i < 7; i++) {
            const dayN = weekN * 7 + i - startDay + 1;
            const normalizedDayN = dayN % days;
            const monthN = dayN >= days ? month + 1 : dayN < 0 ? month - 1 : month;
            const normalizedMonth = monthN % 12;
            const yearN = monthN > 11 ? year + 1 : monthN < 0 ? year - 1 : year;
            let type: WeekType = 'current-month';
            if (yearN > year || monthN > month) {
                type = 'next-month';
            }

            week[i] = new Day(
                normalizedDayN,
                month === normalizedMonth ? weekN : normalizedDayN > i ? 1 : 0,
                normalizedMonth,
                yearN,
                type
            );
        }

        return week;
    }

    type Month = Week[];

    function makeCalendar(month: number, year: number): Month {
        const startDay = (startDayOfMonth(month, year) + 6) % 7;
        const calendar = new Array(6) as Month;
        for (let i = 0; i < calendar.length; i++) {
            calendar[i] = new Array(7);
        }
        if (startDay !== 0) {
            const days = daysInMonth(month - 1, year);
            for (let i = 0; i < startDay; i++) {
                const dayN = days + i - startDay;
                const monthN = month - 1;
                const weekN = Math.floor(days / 7);
                const yearN = monthN < 0 ? year - 1 : year;
                let type: WeekType = 'current-month';
                if (yearN < year || monthN < month) {
                    type = 'prev-month';
                }

                calendar[0][i] = new Day(
                    dayN,
                    monthN < 0 ? 11 : monthN,
                    weekN,
                    yearN,
                    type
                );
            }
        }

        calendar[0] = makeWeek(0, month, year, calendar[0], startDay);

        for (let i = 1; i < calendar.length; i++) {
            calendar[i] = makeWeek(i, month, year);
        }

        return calendar;
    }

    let month = new Date().getMonth();
    let year = new Date().getFullYear();
    $: calendar = makeCalendar(month, year);

    let selected: Day | undefined;

    const clickLis = (elem: HTMLButtonElement, ev: HTMLElementEventMap['click']) => {
        const date = Day.deserialize(elem.getAttribute("theDay"));
        if (selected && selected.serialize() === date.serialize()) {
            selected = undefined;
        } else {
            selected = date;
        }
    }
</script>

<table>
    <tbody>
    <tr>
        <td>
            <button
                    class="month-button"
                    type="button"
                    on:click={() => {
                        month = (month - 1) % 12;
                        if (month < 0) {
                            year--;
                            month = 11;
                        }
                    }}
            >
                &lt;
            </button>
        </td>
        <td colspan="5">
            <label>
                <input
                        type="text"
                        value="{
                        selected
                            ? selected.asDate().toDateString()
                            : `${[
                                'Jan',
                                'Feb',
                                'Mar',
                                'Apr',
                                'May',
                                'Jun',
                                'Jul',
                                'Aug',
                                'Sep',
                                'Oct',
                                'Nov',
                                'Dec',
                            ][month]} ${year}`
                        }"
                />
            </label>
        </td>
        <td>
            <button
                    class="month-button"
                    type="button"
                    on:click={() => {
                        month = (month + 1) % 12;
                        if (month === 0) {
                            year++;
                        }
                    }}
            >
                &gt;
            </button>
        </td>
    </tr>
    <tr>
        <td>Mon</td>
        <td>Tue</td>
        <td>Wed</td>
        <td>Thu</td>
        <td>Fri</td>
        <td>Sat</td>
        <td>Sun</td>
    </tr>
    {#each calendar as week}
        <tr>
            {#each week as day (day.serialize())}
                <td>
                    <button
                            class="day-of-week {day.type !== 'current-month' ? 'not-current-month' : ''} {selected && selected.serialize() === day.serialize() ? 'active' : ''}"
                            type="button"
                            theDay="{day.serialize()}"
                            on:click={function(ev) { clickLis(this, ev) }}
                    >
                        {day.dayN + 1}
                    </button>
                </td>
            {/each}
        </tr>
    {/each}
    </tbody>
</table>

<style>
    input[type='text'] {
        -webkit-appearance: none;
        width: 80%;
        height: 25px;
        font-size: 8pt;
        margin: 0 10%;
        border: 1px solid #666;
        border-radius: 5px;
        padding: 0 10px;
    }

    .day-of-week {
        width: 3em;
        height: 3em;
        border: 1px solid dodgerblue;
        border-radius: 50%;
        background-color: white;
    }

    .day-of-week.not-current-month {
        background-color: #cbcbcb;
    }

    .day-of-week.active {
        background-color: #cfedff;
    }

    .day-of-week:hover {
        background-color: #cae7ff;
        cursor: pointer;
    }

    .day-of-week:active {
        color: initial;
        background-color: #b7e1ff;
    }

    .month-button {
        border-radius: 5px;
        background-color: white;
        border: 1px solid black;
        padding: 5px;
        width: 2.5em;
        vertical-align: middle;
        text-align: center;
        cursor: pointer;
    }

    .month-button:active {
        color: initial;
        background-color: whitesmoke;
    }
</style>
