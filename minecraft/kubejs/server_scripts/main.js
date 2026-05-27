// Visit the wiki for more info - https://kubejs.com/
console.info('Hello, World! (Loaded server example script)')


ServerEvents.recipes(event => {
    // Removals
    event.remove({input: '#c:nuggets', mod: 'createdeco', type: 'create:pressing'})

    // Andesite Alloy
    event.recipes.createdieselgenerators.hammering('createdeco:andesite_sheet', 'create:andesite_alloy')
    event.recipes.createdieselgenerators.hammering('kubejs:andesite_dust', 'minecraft:andesite')
    event.shapeless(
        Item.of('kubejs:raw_andesite_alloy', 3),
        [
            '#c:dusts/iron',
            'kubejs:andesite_dust'
        ]
    )
    event.blasting('2x create:andesite_alloy', 'kubejs:raw_andesite_alloy')

    // Cast Iron
    event.remove({output: 'nautec:cast_iron_compound'})
    event.shapeless(
        Item.of('nautec:cast_iron_compound', 3),
        [
            '#c:dusts/iron',
            'immersiveengineering:dust_coke',
            'immersiveengineering:dust_coke'
        ]
    )

    // Rolling
    event.custom({
        type: 'createaddition:rolling',
        ingredients: [{item: 'immersiveengineering:stick_iron'}],
        results: [{count: 1, id: 'simulated:spring'}]
    })
    event.remove({id: 'farmersdelight:rope'})
    event.custom({
        type: 'createaddition:rolling',
        ingredients: [{item: 'farmersdelight:straw'}],
        results: [{count: 1, id: 'farmersdelight:rope'}]
    })

    // Casings
    event.shaped(
        Item.of('create:andesite_casing', 8),
            [
                "CSC",
                "SHS",
                "CSC"
            ],

            {C: '#c:stripped_logs',
            S: 'createdeco:andesite_sheet',
            H: 'createdieselgenerators:hammer'
        }
    ).damageIngredient('createdieselgenerators:hammer')
    event.shaped(
        Item.of('create:copper_casing', 8),
            [
                "CSC",
                "SHS",
                "CSC"
            ],

            {C: '#c:stripped_logs',
            S: 'create:copper_sheet',
            H: 'createdieselgenerators:hammer'
        }
    ).damageIngredient('createdieselgenerators:hammer')
    event.shaped(
        Item.of('create:brass_casing', 6),
            [
                "CSC",
                "SHS",
                "CSC"
            ],

            {C: 'create:andesite_casing',
            S: 'create:brass_sheet',
            H: 'createdieselgenerators:hammer'
        }
    ).damageIngredient('createdieselgenerators:hammer')
    event.shaped(
        Item.of('create:railway_casing', 6),
            [
                "CSC",
                "SHS",
                "CSC"
            ],

            {C: 'create:brass_casing',
            S: 'create:sturdy_sheet',
            H: 'createdieselgenerators:hammer'
        }
    ).damageIngredient('createdieselgenerators:hammer')

    event.remove({id: 'simulated:physics_assembler'})
    event.shaped(
        Item.of('simulated:physics_assembler', 1),
            [
                " A ",
                " I ",
                "SCS"
            ],

            {A: 'create:andesite_alloy',
            I: 'create:shaft',
            S: 'createdeco:andesite_sheet',
            C: 'create:andesite_casing'
        }
    )
    event.shaped(
        Item.of('simulated:rope_coupling', 2),
            [
                "QBQ"
            ],

            {Q: 'farmersdelight:rope',
            B: 'create:minecart_coupling'
        }
    )
})

ServerEvents.tags('item', event => {
    event.add('#c:ingots/cast_iron', 'nautec:cast_iron_ingot')
})
