<template>
    <div class="px-5 py-3" v-if="!loading">
        <p class="statsTitle pt-3 pb-2">Витрати</p>
        <apexchart class='px-4' type="donut" :options="outcomesOptions" :series="pieDataOutcomes"></apexchart>

        <p class="statsTitle pt-5 pb-2">Доходи</p>
        <apexchart class='px-4' type="donut" :options="incomesOptions" :series="pieDataIncomes"></apexchart>

    </div>
</template>

<script>
    import {BarChart, PieChart} from 'vue-chartisan';

    export default {
        name: 'StatisticsBlock',
        components: {
            BarChart, PieChart
        },
        data: function () {
            return {
                colors: ['#890000', "#CC0000", "#E95700", "#FF9900",
                    "#FFBF00", "#FFE600", "#A2D800", "#4ECC00",
                    "#52BE80", "#16A086", "#1F8BA1", "#18A6C3",
                    "#6BC4D7", "#9AEEFF"],
                chart: {
                    type: 'donut',
                    fontFamily: 'Igra Sans'
                },
                responsive: [{
                    breakpoint: 480,
                    options: {
                        chart: {width: 200},
                        legend: {position: 'bottom'}
                    }
                }],
                labels: {
                    show: true,
                    name: {
                        show: true,
                        fontSize: '20px',
                        fontFamily: 'Igra Sans',
                        fontWeight: 600,
                        color: undefined,
                        offsetY: -10,
                        formatter: function (val) {
                            return val
                        }
                    },
                    value: {
                        show: true,
                        fontSize: '16px',
                        fontFamily: 'Helvetica, Arial, sans-serif',
                        fontWeight: 400,
                        color: undefined,
                        offsetY: 16,
                        formatter: function (val) {
                            return '₴' + val
                        }
                    },
                }
            };
        },
        computed: {
            loading: function () {
                return this.$store.getters['category/loading']
            },
            incomes: function () {
                return this.$store.getters['category/incomes']
            },
            outcomes: function () {
                return this.$store.getters['category/outcomes']
            },
            pieDataIncomes: function () {
                return this.incomes.map(a => a.total)
            },
            pieDataOutcomes: function () {
                return this.outcomes.map(a => a.total);

            },
            incomesOptions: function () {
                return {
                    plotOptions: {
                        pie: {donut: {labels: this.labels}}
                    },
                    chart: this.chart,
                    responsive: this.responsive,
                    labels: this.incomes.map(a => a.name),
                    colors: this.colors.slice(0, 7).reverse()
                }
            },
            outcomesOptions: function () {
                return {
                    plotOptions: {
                        pie: {donut: {labels: this.labels}}
                    },
                    chart: this.chart,
                    responsive: this.responsive,
                    labels: this.outcomes.map(a => a.name),
                    colors: this.colors
                }
            }

            ,
        }
    }


</script>

<style scoped>
    .statsTitle {
        font-size: 20px;
        text-align: center;
        font-family: 'Igra Sans', serif;
    }

</style>