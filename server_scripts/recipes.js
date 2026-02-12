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
    .loops(10);

    // Remove Cured Membrane
    event.remove({output: 'galosphere:cured_membrane'});

    // VACUUMIZE Milk + Sugar + Caramel Bar + Red Phosphorus + Quartz
    // + Licoroot + Purple Soda -> Pilk
    event.recipes.vintage.vacuumizing(
        Fluid.of('kubejs:pilk', 1000),
        [
            Fluid.of('minecraft:milk', 1000),
            Item.of('minecraft:sugar', 10),
            'create_confectionery:bar_of_caramel',
            Item.of('createbb:red_phosphorus', 10),
            Item.of('minecraft:quartz', 10),
            Item.of('alexscaves:licoroot', 10),
            Fluid.of('alexscaves:purple_soda', 500)
        ]
    ).processingTime(500);

    // Pilk Bottle filling
    event.recipes.create.filling(
        'kubejs:pilk_bottle',
        [
            'minecraft:glass_bottle',
            Fluid.of('kubejs:pilk', 200)
        ]
    );

    // AC Giant Sweetberry HAMMER -> 50% sugar, 3% Sweet Berry
    event.recipes.vintage.hammering(
        [
            Item.of('minecraft:sugar', 1).withChance(0.5),
            Item.of('minecraft:sweet_berries', 1).withChance(0.03)
        ],
        'alexscaves:giant_sweetberry'
    ).hammerBlows(1);

    // All AC Ice Cream SUPERHEAT PRESSED -> Milk
    event.recipes.vintage.pressurizing(
        Fluid.of('minecraft:milk', 25),
        ['alexscaves:vanilla_ice_cream_scoop']
    ).processingTime(500);

    event.recipes.vintage.pressurizing(
        Fluid.of('minecraft:milk', 25),
        ['alexscaves:chocolate_ice_cream_scoop']
    ).processingTime(500);
    
    event.recipes.vintage.pressurizing(
        Fluid.of('minecraft:milk', 25),
        ['alexscaves:sweetberry_ice_cream_scoop']
    ).processingTime(600);

    // REPLACE Gingerbread Crumbs in AC Confection Oven recipe
    // with CF Gingerbread Bricks 
    event.remove({output: 'alexscaves:confection_oven'});
    
    event.shaped(
        'alexscaves:confection_oven',
        [
            'GEG',
            'CSC',
            'GRG'
        ],
        {
            'G': 'create_confectionery:gingerbreak_bricks',
            'E': 'alexscaves:radiant_essence',
            'C': 'alexscaves:candy_cane',
            'S': 'minecraft:smoker',
            'R': 'minecraft:redstone'
        }
    );

    // AC Dough Block HEATED MIX Cinder Flour + Sugar -> Ginger Dough
    event.recipes.create.mixing(
        Item.of('create_confectionery:gingerdough', 3),
        [
            'alexscaves:dough_block',
            Item.of('create:cinder_flour', 2),
            'minecraft:sugar'
        ]
    ).heated();

    // REPLACE Large Water Wheel recipe with
    // Water Wheel DEPLOY minecraft:logs DEPLOY minecraft:wooden_slabs
    // DEPLOY minecraft:fence_gates
    event.remove({output: 'create:large_water_wheel'});

    const lww = 'kubejs:incomplete_large_water_wheel';
    event.recipes.create.sequenced_assembly(
        [
            'create:large_water_wheel'
        ],
        'create:water_wheel',
        [
            event.recipes.create.deploying(
                lww,
                [lww, '#minecraft:logs']
            ),
            event.recipes.create.deploying(
                lww,
                [lww, '#minecraft:wooden_slabs']
            ),
            event.recipes.create.deploying(
                lww,
                [lww, '#minecraft:fence_gates']
            ),
        ]
    )
    .transitionalItem(lww)
    .loops(2);

    // Replace Blaze Cake Base recipe with
    // Tray
    // 1. Tray DEPLOY Cinder Flour, SPOUT 250mB Fire Resistance -> Blazed Pan
    //
    // Mixture
    // 2. MIX 2 Sugar + Cocoa Butter + forge:eggs -> Bland Blaze Cake Mixture (1 Egg)
    // 3. MIX forge:eggs -> Bland Blaze Cake Mixture (2 Egg)
    // 4. MIX forge:eggs -> Bland Blaze Cake Mixture (3 Egg)
    // 5. MIX 4 Propelplant Cane -> Vanilla Blaze Cake Mixture
    //
    // Flour
    // 6. HEATED MIX Cinder Flour + Gunpowder + Pink Salt Shard -> Blaze Cake Flour (OR USE 10 FIRE LIGHT DUST)
    // 
    // Combine (into Dough, Pan, Cake Base)
    // 7. HEATED MIX Mixture + Flour -> Blaze Cake Dough
    // 8. Incomplete Blaze Cake Dough FILL 10mB Milk (x25) -> Moist Blaze Cake Dough
    // 9. Blazed Pan DEPLOY Moist Blaze Cake Dough -> Blaze Cake Pan
    // 10. HEATED VACUUMIZE Blaze Cake Pan + 250mB Fire Resistance -> 2 Blaze Cake Base + Tray
    event.remove({output: 'create:blaze_cake_base'});
 
    // 1. Tray DEPLOY Cinder Flour, SPOUT 250mB Fire Resistance -> Blazed Pan
    const blazed_pan = 'kubejs:incomplete_bc_blazed_pan';
    event.recipes.create.sequenced_assembly(
        [
            'kubejs:bc_blazed_pan',
        ],
        'createbb:tray',
        [
            event.recipes.create.deploying(
                blazed_pan,
                [
                    blazed_pan, 
                    'create:cinder_flour'
                ]
            ),
            event.custom({
                'type': 'create:filling',
                'results': [
                    {'item': blazed_pan},
                ],
                'ingredients': [
                    {'item': blazed_pan},
                    {
                        'fluid': 'create:potion', 'amount': 250, 
                        'nbt': {'Potion': 'minecraft:fire_resistance'}
                    }
                ]
            })
        ]
    )
    .transitionalItem(blazed_pan)
    .loops(1);
 
    // 2. MIX 2 Sugar + Cocoa Butter + forge:egg -> Bland Blaze Cake Mixture (1 Egg)
    event.recipes.create.mixing(
        'kubejs:bc_egg_mixture_one',
        [
            Item.of('minecraft:sugar', 2),
            'create_confectionery:cocoa_butter',
            '#forge:eggs'
        ]
    );

    // 3. MIX forge:egg -> Bland Blaze Cake Mixture (2 Egg)
    event.recipes.create.mixing(
        'kubejs:bc_egg_mixture_two',
        [
            'kubejs:bc_egg_mixture_one',
            '#forge:eggs'
        ]
    );

    // 4. MIX forge:egg -> Bland Blaze Cake Mixture (3 Egg)
    event.recipes.create.mixing(
        'kubejs:bc_egg_mixture_three',
        [
            'kubejs:bc_egg_mixture_two',
            '#forge:eggs'
        ]
    );
    
    // 5. MIX 4 Propelplant Cane -> Vanilla Blaze Cake Mixture
    event.recipes.create.mixing(
        'kubejs:bc_vanilla_mixture',
        [
            'kubejs:bc_egg_mixture_three',
            Item.of('nethersdelight:propelplant_cane', 4)
        ]
    );
});
