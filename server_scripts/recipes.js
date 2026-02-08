ServerEvents.recipes(event => {
    // Beetroot -> Sugar
    event.shapeless(
        Item.of('minecraft:sugar', 1), [
            'minecraft:beetroot'
        ]
    );

    // Egg DEPLOY Diamond Block -> Birt Egg
    event.recipes.create.deploying(
        'species:birt_egg',
        ['minecraft:egg', 'minecraft:diamond_block']
    );

    // Remove Ender Eye recipes
    event.remove({output: 'minecraft:ender_eye'})

    // Ender Pearl DEPLOY Blaze Powder 
    // COMPACT (SUPERHEATED) MIX Netherite Scrap -> Ender Eye
    
    // Ender Pearl DEPLOY Blaze Powder -> Incomplete Ender Eye Fire
    event.recipes.create.deploying(
        'kubejs:incomplete_ender_eye_fire', 
        ['minecraft:ender_pearl', 'minecraft:blaze_powder']
    );

    // Incomplete Ender Eye Fire COMPACT -> Incomplete Ender Eye Empty
    event.recipes.create.compacting(
        'kubejs:incomplete_ender_eye_empty', 
        [
            'kubejs:incomplete_ender_eye_fire',
            Fluid.of('alexscaves:acid', 100),
            Fluid.of('oreganized:molten_lead', 100)
        ]
    ).superheated();

    // Incomplete Ender Eye Empty MIX Netherite Scrap
    // -> Ender Eye
    event.recipes.create.mixing(
        'minecraft:ender_eye', 
        [
            'kubejs:incomplete_ender_eye_empty', 
            'minecraft:netherite_scrap',
        ] 
    );

    // Blue/White Stuff REPLACE Blue/White Stuff (Edible)
    event.remove({output: 'createbb:white_meth'}); 
    event.remove({output: 'createbb:blue_meth'});

    event.recipes.create.pressing(
        [
            'edible_stuff:white_stuff',
            'createbb:tray'
        ],
        'createbb:white_meth_tray'
    );

    event.recipes.create.pressing(
        [
            'edible_stuff:blue_stuff',
            'createbb:tray'
        ],
        'createbb:blue_meth_tray'
    );

    // AC Condensed Caramel MIX -> CF Caramel
    event.recipes.create.mixing(
        Fluid.of('create_confectionery:caramel', 500),
        'alexscaves:caramel'
    ).heated();

    // AC Caramel Apple WASH -> Apple
    event.recipes.create.splashing(
        'minecraft:apple',
        'alexscaves:caramel_apple'
    );

    // AC Gingerbread Crumbs MIX Sugar + Wheat Flour -> CF Gingerdough
    event.recipes.create.mixing(
        Item.of('create_confectionery:gingerdough', 2),
        [
            'alexscaves:gingerbread_crumbs',
            Item.of('minecraft:sugar', 2),
            'create:wheat_flour'
        ]
    );

    // Replace CF Candy Cane with AC Candy Cane
    event.remove({output: 'create_confectionery:candy_cane'});
    event.remove({output: 'create_confectionery:candy_cane_block'});
    event.remove({output: 'create_confectionery:the_bright_side'});

    event.recipes.create.mixing(
        'alexscaves:candy_cane',
        [
            Item.of('minecraft:sugar', 4),
            Fluid.of(
                'create:potion', 
                250,
                '{Bottle:"REGULAR", Potion:"minecraft:mundane"}'
            ),
            Fluid.of('minecraft:water', 250)
        ]
    ).heated();

    event.shaped(
        'create_confectionery:candy_cane_block',
        [
            'CCC',
            'CQC',
            'CCC'
        ],
        {
            'C': 'alexscaves:candy_cane',
            'Q': 'minecraft:quartz_block'
        }
    );

    event.shaped(
        'create_confectionery:the_bright_side',
        [
            'CCC',
            'CDC',
            'CCC'
        ],
        {
            'C': 'alexscaves:candy_cane',
            'D': 'create_confectionery:black_chocolate_bricks'
        }
    );

    // AC Block of Chocolate MIX Cocoa Butter + Cocoa Beans -> CF Dark Chocolate
    event.recipes.create.mixing(
        Fluid.of('create_confectionery:black_chocolate', 250),
        [
            'alexscaves:block_of_chocolate',
            'create_confectionery:cocoa_butter',
            'minecraft:cocoa_beans'
        ]
    ).heated();

    // Replace AC Vanilla Ice Cream Scoop 
    // with MIX Milk + Packed Ice + Sugar + Propelplant Cane + Frostmint
    event.remove({output: 'alexscaves:vanilla_ice_cream_scoop'});

    event.recipes.create.mixing(
        Item.of('alexscaves:vanilla_ice_cream_scoop', 8),
        [
            Fluid.of('minecraft:milk', 200),
            'minecraft:packed_ice',
            Item.of('minecraft:sugar', 2),
            'nethersdelight:propelplant_cane',
            'alexscaves:frostmint'
        ]
    );
    
    // Replace AC Chocolate Ice Cream Scoop 
    // with MIX Milk + Packed Ice + Sugar + (Dark) Chocolate + Frostmint
    event.remove({output: 'alexscaves:chocolate_ice_cream_scoop'});

    event.recipes.create.mixing(
        Item.of('alexscaves:chocolate_ice_cream_scoop', 8),
        [
            Fluid.of('minecraft:milk', 200),
            'minecraft:packed_ice',
            Item.of('minecraft:sugar', 2),
            Fluid.of('create:chocolate', 100),
            'alexscaves:frostmint'
        ]
    );
    
    event.recipes.create.mixing(
        Item.of('alexscaves:chocolate_ice_cream_scoop', 8),
        [
            Fluid.of('minecraft:milk', 200),
            'minecraft:packed_ice',
            Item.of('minecraft:sugar', 2),
            Fluid.of('create_confectionery:black_chocolate', 100),
            'alexscaves:frostmint'
        ]
    );
    
    // Replace AC Sweetberry Ice Cream Scoop 
    // with MIX Milk + Packed Ice + Sugar + Giant Sweetberry + Frostmint
    event.remove({output: 'alexscaves:sweetberry_ice_cream_scoop'});

    event.recipes.create.mixing(
        Item.of('alexscaves:sweetberry_ice_cream_scoop', 8),
        [
            Fluid.of('minecraft:milk', 200),
            'minecraft:packed_ice',
            Item.of('minecraft:sugar', 2),
            'alexscaves:giant_sweetberry',
            'alexscaves:frostmint'
        ]
    );

    // Replace AC Frostmint
    // with COMPACT Frostmint + Ectoplasm -> 1 Frostmint + 50% +1 Frostmint
    event.remove({output: 'alexscaves:frostmint'});

    event.recipes.create.compacting(
        [
            'alexscaves:frostmint',
            Item.of('alexscaves:frostmint').withChance(0.5)
        ],
        [
            'alexscaves:frostmint',
            Fluid.of('netherexp:ectoplasm', 1000)
        ]
    );

    // Replace AC Sack of Sating
    // with SUPERHEAT MIX Bundle + Sundae + Sweet Teeth + Each Gelatin
    // + Radiant Essence + White Chocolate
    // + Ruby Chocolate -> Dry Sack of Sating
    event.remove({output: 'alexscaves:sack_of_sating'});

    event.recipes.create.mixing(
        [
            'kubejs:dry_sack_of_sating'
        ],
        [
            'minecraft:bundle',
            'alexscaves:sundae',
            Item.of('alexscaves:sweet_tooth', 4),
            Item.of('alexscaves:gelatin_red', 16),
            Item.of('alexscaves:gelatin_green', 16),
            Item.of('alexscaves:gelatin_yellow', 16),
            Item.of('alexscaves:gelatin_blue', 16),
            Item.of('alexscaves:gelatin_pink', 16),
            Item.of('alexscaves:radiant_essence', 8),
            Fluid.of('create_confectionery:white_chocolate', 1000),
            Fluid.of('create_confectionery:ruby_chocolate', 1000),
        ]
    ).superheated();

    // Dry Sack of Sating FILL 50B (50000mB) Pilk DEPLOY Jelly Bean
    // -> 25% Sack of Sating, 37% Rotten Flesh Block, 37% Honey Bucket
    const dry_sack = 'kubejs:incomplete_sack_of_sating';
    event.recipes.create.sequenced_assembly(
        [
            Item.of('alexscaves:sack_of_sating').withChance(0.25),
            Item.of('caverns_and_chasms:rotten_flesh_block').withChance(0.37),
            Item.of('create:honey_bucket').withChance(0.37)
        ],
        'kubejs:dry_sack_of_sating',
        [
            event.recipes.create.filling(dry_sack, [dry_sack, Fluid.of('kubejs:pilk', 1000)]),
            event.recipes.create.filling(dry_sack, [dry_sack, Fluid.of('kubejs:pilk', 1000)]),
            event.recipes.create.filling(dry_sack, [dry_sack, Fluid.of('kubejs:pilk', 1000)]),
            event.recipes.create.filling(dry_sack, [dry_sack, Fluid.of('kubejs:pilk', 1000)]),
            event.recipes.create.filling(dry_sack, [dry_sack, Fluid.of('kubejs:pilk', 1000)]),
            event.recipes.create.deploying(
                dry_sack,
                [
                    dry_sack, 
                    'alexscaves:jelly_bean'
                ]
            ),
        ]
    )
    .transitionalItem(dry_sack)
    .loops(10)

    // Remove Cured Membrane
    event.remove({output: "galosphere:cured_membrane"})
});
