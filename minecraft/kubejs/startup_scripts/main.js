// Visit the wiki for more info - https://kubejs.com/
console.info('Hello, World! (Loaded startup example script)')

ItemEvents.modification(event => {
    event.modify('createdieselgenerators:hammer', item => {
        item.maxDamage = 512
    })
})

StartupEvents.registry('item', event => {
    event.create('andesite_dust').displayName('Andesite Dust')
    event.create('raw_andesite_alloy').displayName('Raw Andesite Alloy')
})
