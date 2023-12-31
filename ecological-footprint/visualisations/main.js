import { prepareData } from "./prepareData.js"
import { width, duration } from "./constants.js"
import { height as barHeight } from "./race-bar-chart/constants.js"
import { height as lineHeight } from "./line-chart/constants.js"
import { createBarChart, updateBarChart } from "./race-bar-chart/main.js"
import { createLineChart } from "./line-chart/main.js"

const getData = async () =>
    Promise.all([
        d3.json('../etl/dataset.json'),
        d3.json('../etl/dataset_grouped.json')
    ])

getData().then(dataset => {
    const data = dataset[0]
    const dataGrouped = dataset[1]

    const { keyframes, prev, next } = prepareData(data)

    const chart = async () => {
        const svgBar = d3
            .select('#barChart')
            .attr('width', width)
            .attr('height', barHeight)

        const svgLine = d3
            .select('#lineChart')
            .attr('width', width)
            .attr('height', lineHeight)

        const barChartFuncs = createBarChart(svgBar, data, keyframes, prev, next)

        const transitionLine = svgLine
            .transition()
            .duration(duration * (keyframes.length + 4))
            .ease(d3.easeLinear)

        createLineChart(svgLine, dataGrouped, transitionLine)

        for (const keyframe of keyframes) {
            const transition = svgBar
                .transition()
                .duration(duration)
                .ease(d3.easeLinear)

            updateBarChart(barChartFuncs, keyframe, transition)

            await transition.end()
        }
    }

    chart()
})