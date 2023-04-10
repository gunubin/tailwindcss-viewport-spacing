const plugin = require('tailwindcss/plugin')

const viewportSpacing = plugin.withOptions((options) => function ({matchUtilities}) {
  
  const nameKey = 'vw'
  
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
    start:	'inset-inline-start',
    end:	'inset-inline-end',
    inset: 'inset',
  }
  
  const generateCssValue = (value, multiplier) => `${value * (100 / multiplier)}${nameKey}`
  
  const generateUtilities = (prop, value, multiplier) => {
    const props = Array.isArray(prop) ? prop : [prop]
    return props.reduce((acc, prop) => {
      acc[prop] = generateCssValue(value, multiplier)
      return acc
    }, {})
  }
  
  const processEntries = (entries, generateFunction, multiplier) => {
    entries.forEach(([key, prop]) => {
      matchUtilities({
        [`${key}`]: (value) => {
          return generateFunction(prop, value, multiplier)
        },
      })
    })
  }
  
  const utilityEntries = (screenName = '') => {
    return Object.entries(utilityNames).map(([key, prop]) => {
      return [`${key}-${nameKey}${screenName ? `-${screenName}` : ''}`, prop]
    })
  }
  
  const processScreens = (screenName) => {
    const screenMultiplier = options[screenName]
    processEntries(utilityEntries(screenName), generateUtilities, screenMultiplier)
  }
  
  Object.keys(options).forEach(processScreens)
})

module.exports = {viewportSpacing}
