export const pxToInt = size => +size.replace('px', '')

export const getColourTransition = (colour, progress) => d3.color(colour).copy({ opacity: progress })

export function textTweenNumber(a, b, formatNumber) {
    const i = d3.interpolateNumber(a, b)
    return function (t) {
        this.textContent = formatNumber(i(t))
    }
}

export const getTranslatePos = g => {
    try {
        const tMatrix = g.node()
            .transform
            .baseVal
            .getItem(0)
            .matrix

        return { x0: tMatrix.e, y0: tMatrix.f }
    } catch {
        return { x0: 0, y0: 0 }
    }
}

export const moveAxis = (aInit, a0, a1, progress) => a0 + (a1 - aInit) * progress - (a0 - aInit)

export const progressLimit = value => value > 1 ? 1 : value < 0 ? 0 : value

export const colourChange = (from, to, progress = 1) =>
    d3.interpolateRgb(from, to)(progress)

export const getGroupOpacity = g => {
    try {
        return d3.color(d3.style(g.node(), 'fill')).opacity
    } catch {
        return 0
    }
}
