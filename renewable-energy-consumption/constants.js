export const ids = {
    renewable: 'renewable',
    nonRenewable: 'non_renewable',
    energiesComparison: 'energies_comparison',
    lineEnergiesComparison: 'line_energies_comparison'
}

const dimensionsDefault = svgHeight => {
    return ({
        circlesContainer: {
            nonRenewable: {
                x: 500,
                y: svgHeight - 825,
                width: 150,
                height: 575
            },
            renewable: {
                x: 1000,
                y: svgHeight - 350,
                width: 150,
                height: 100
            }
        },
        yearNumber: {
            x: 825,
            y: 850
        },
        comparisonText: {
            y0: svgHeight + 50,
            y1: null,
            x: null
        },
        lineEnergiesComparison: {
            x0: null,
            x1: null,
            y: null
        }
    })
}

export const dimensions = svgHeight => {
    const dims = dimensionsDefault(svgHeight)

    dims.comparisonText.y1 = dims.circlesContainer.renewable.y + 5
    dims.comparisonText.x = dims.circlesContainer.renewable.x + dims.circlesContainer.renewable.width + 10

    dims.lineEnergiesComparison.x0 = dims.circlesContainer.nonRenewable.x - 50
    dims.lineEnergiesComparison.x1 = dims.circlesContainer.renewable.x + dims.circlesContainer.renewable.width + 5
    dims.lineEnergiesComparison.y = dims.comparisonText.y1 - 5

    return dims
}

export const colours = {
    standard: 'grey',
    nonRenewableEnergy: '#826000',
    renewableEnergy: '#088F8F'
}

export const energyData = {
    years: [1970, 1971, 1972, 1973, 1974, 1975, 1976, 1977, 1978, 1979, 1980, 1981, 1982, 1983
        , 1984, 1985, 1986, 1987, 1988, 1989, 1990, 1991, 1992, 1993, 1994, 1995, 1996, 1997
        , 1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011
        , 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022],
    fossil: [53194, 55280, 58160, 61606, 61463, 61431, 64825, 66961, 69302, 71596
        , 70620, 69814, 69063, 69707, 72584, 73917, 75392, 77899, 80607, 82268
        , 83064, 83294, 83769, 83916, 84961, 86532, 89079, 90024, 90477, 91940
        , 94407, 95559, 97669, 101888, 106794, 110509, 113618, 117490, 118344, 116039
        , 121503, 124558, 126339, 128003, 128770, 129422, 130300, 132517, 135556, 136106
        , 129446, 136585, 137237],
    renewables: [3567, 3730, 3907, 3967, 4353, 4406, 4402, 4556, 4932, 5185, 5307, 5425
        , 5554, 5813, 6035, 6164, 6280, 6380, 6586, 6600, 6863, 7032, 7059, 7475
        , 7549, 7956, 8064, 8242, 8336, 8437, 8627, 8418, 8622, 8650, 9311, 9684
        , 10144, 10505, 11310, 11558, 12450, 13000, 13816, 14705, 15422, 15977, 16870, 17858
        , 18991, 19986, 21134, 22324, 23849],
    fossilMax: null,
    renewablesMax: null,
    renewablesPercentage: null
}
energyData.fossilMax = energyData.fossil[energyData.fossil.length - 1]
energyData.renewablesMax = energyData.renewables[energyData.renewables.length - 1]
energyData.renewablesPercentage = (energyData.renewablesMax / energyData.fossilMax) * 100