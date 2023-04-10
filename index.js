const plugin = require('tailwindcss/plugin')

const viewportSpacing = plugin.withOptions((options) => function ({matchUtilities}) {
  const units = ['vw', 'vh']
  
  const utilityNames = {
    p: 'padding',
    px: ['padding-left', 'padding-right'],
    py: ['padding-top', 'padding-bottom'],
    pt: 'padding-top',
    pr: 'padding-right',
    pb: 'padding-bottom',
    pl: 'padding-left',
    m: 'margin',
    mx: ['margin-left', 'margin-right'],
    my: ['margin-top', 'margin-bottom'],
    mt: 'margin-top',
    mr: 'margin-right',
    mb: 'margin-bottom',
    ml: 'margin-left',
    top: 'top',
    right: 'right',
    bottom: 'bottom',
    left: 'left',
    w: 'width',
    h: 'height',
    'max-w': 'max-width',
    'max-h': 'max-height',
    'min-w': 'min-width',
    'min-h': 'min-height',
    text: 'font-size',
    start: 'inset-inline-start',
    end: 'inset-inline-end',
    inset: 'inset',
  }
  
  const generateCssValue = (value, multiplier, unit) => `${value * (100 / multiplier)}${unit}`
  
  const generateUtilities = (prop, value, multiplier, unit) => {
    const props = Array.isArray(prop) ? prop : [prop]
    return props.reduce((acc, prop) => {
      acc[prop] = generateCssValue(value, multiplier, unit)
      return acc
    }, {})
  }
  
  const processEntries = (entries, generateFunction, multiplier, unit) => {
    entries.forEach(([key, prop]) => {
      matchUtilities({
        [`${key}`]: (value) => {
          return generateFunction(prop, value, multiplier, unit)
        },
      })
    })
  }
  
  const utilityEntries = (unit, screenName = '') => {
    return Object.entries(utilityNames).map(([key, prop]) => {
      return [`${key}-${unit}${screenName ? `-${screenName}` : ''}`, prop]
    })
  }
  
  const processScreens = (unit, screenName) => {
    const screenMultiplier = options[unit][screenName]
    processEntries(utilityEntries(unit, screenName), generateUtilities, screenMultiplier, unit)
  }
  
  units.forEach((unit) => {
    Object.keys(options[unit]).forEach((screenName) => {
      processScreens(unit, screenName)
    })
  })
})

module.exports = viewportSpacing
