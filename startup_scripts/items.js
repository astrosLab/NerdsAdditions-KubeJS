StartupEvents.registry('item', event => {
    Platform.mods.kubejs.name = 'Nerds Descent';

    // Incomplete Ender Eye (Stage 1: Deploy Blaze Powder)
    event.create('incomplete_ender_eye_fire', 'basic')
        .displayName('Incomplete Ender Eye')
        .texture('nerds_addons:item/incomplete_ender_eye_fire')
        .unstackable();

    // Incomplete Ender Eye (Stage 2: Superheated Compact)
    event.create('incomplete_ender_eye_empty', 'basic')
        .displayName('Incomplete Ender Eye')
        .texture('nerds_addons:item/incomplete_ender_eye_empty')
        .unstackable();

    // Dry Sack of Sating
    event.create('dry_sack_of_sating', 'basic')
        .displayName('Dry Sack of Sating')
        .tooltip('§l§cFeed him Pilk and Jelly Beans.')
        .texture('nerds_addons:item/dry_sack_of_sating')
        .unstackable();
    
    // Incomplete Sack of Sating
    event.create('incomplete_sack_of_sating', 'create:sequenced_assembly')
        .displayName('Incomplete Sack of Sating')
        .texture('nerds_addons:item/dry_sack_of_sating')
        .unstackable();

    // Pilk Bottle
    event.create('pilk_bottle')
        .displayName('Bottle of Pilk')
        .tooltip('§7Mmm... Pilk')
        .texture('nerds_addons:item/pilk_bottle')
        .useAnimation('drink')
        .food(food => {
            food
                .hunger(3)
                .saturation(5)
                .alwaysEdible()
                .eaten(ctx => {
                    ctx.item.shrink(1)
                    ctx.player.give('minecraft:glass_bottle')
                })
        })
        .maxStackSize(16);

    // Incomplete Water Wheel
    event.create('incomplete_large_water_wheel', 'create:sequenced_assembly')
        .displayName('Incomplete Large Water Wheel')
        .texture('nerds_addons:item/large_water_wheel')
        .unstackable();

    // Blazed Pan
    event.create('bc_blazed_pan', 'basic')
        .displayName('Blazed Pan')
        .tooltip('§aNext step: Deploy Moist Blaze Cake Dough onto this.')
        .texture('nerds_addons:item/bc_blazed_pan')
        .unstackable();

    // Incomplete Blazed Pan
    event.create('incomplete_bc_blazed_pan', 'create:sequenced_assembly')
        .displayName('Incomplete Blazed Pan')
        .texture('nerds_addons:item/bc_blazed_pan')
        .unstackable();
    
    // Bland Blaze Cake Mixture (2 Egg)
    event.create('bc_egg_mixture_one', 'basic')
        .displayName('Egg Mixture (2 Egg)')
        .tooltip('§aNext step: Mix this.')
        .texture('nerds_addons:item/bc_egg_mixture')
        .unstackable();

    // Bland Blaze Cake Mixture (3 Egg)
    event.create('bc_egg_mixture_two', 'basic')
        .displayName('Egg Mixture (3 Egg)')
        .tooltip('§aNext step: Mix this.')
        .texture('nerds_addons:item/bc_egg_mixture')
        .unstackable();

    // Bland Blaze Cake Mixture (4 Egg)
    event.create('bc_egg_mixture_three', 'basic')
        .displayName('Egg Mixture (4 Egg)')
        .tooltip('§aNext step: Mix this.')
        .texture('nerds_addons:item/bc_egg_mixture')
        .unstackable();

    // Bland Blaze Cake Mixed Mixture (2 Egg)
    event.create('bc_egg_mixed_mixture_one', 'basic')
        .displayName('Egg Mixed Mixture (2 Egg)')
        .tooltip('§aNext step: Mix this with 1 egg.')
        .texture('nerds_addons:item/bc_egg_mixture')
        .unstackable();

    // Bland Blaze Cake Mixed Mixture (3 Egg)
    event.create('bc_egg_mixed_mixture_two', 'basic')
        .displayName('Egg Mixed Mixture (3 Egg)')
        .tooltip('§aNext step: Mix this with 1 egg.')
        .texture('nerds_addons:item/bc_egg_mixture')
        .unstackable();

    // Bland Blaze Cake Mixed Mixture (4 Egg)
    event.create('bc_egg_mixed_mixture_three', 'basic')
        .displayName('Egg Mixed Mixture (4 Egg)')
        .tooltip('§aNext step: Heat mix this with 4 Propelplant Cane.')
        .texture('nerds_addons:item/bc_egg_mixture')
        .unstackable();

    // Vanilla Blaze Cake Mixture
    event.create('bc_vanilla_mixture', 'basic')
        .displayName('Vanilla Blaze Cake Mixture')
        .tooltip('§aNext step: Heat mix this with Blaze Cake Flour.')
        .texture('nerds_addons:item/bc_vanilla_egg_mixture')
        .unstackable();
    
    // Blaze Cake Flour
    event.create('bc_cake_flour', 'basic')
        .displayName('Blaze Cake Flour')
        .tooltip('§aNext step: Heat mix this with Vanilla Blaze Cake Mixture.')
        .texture('nerds_addons:item/bc_blaze_cake_flour')
        .unstackable();
    
    // Blaze Cake Dough
    event.create('bc_blaze_dough', 'basic')
        .displayName('Blaze Cake Dough')
        .tooltip('§aNext step: Spout 25mB Milk (x25).')
        .texture('nerds_addons:item/bc_blaze_dough')
        .unstackable();
    
    // Incomplete Moist Blaze Cake Dough
    event.create('incomplete_bc_moist_blaze_dough', 'create:sequenced_assembly')
        .displayName('Incomplete Moist Blaze Cake Dough')
        .texture('nerds_addons:item/bc_blaze_dough_milked')
        .unstackable();
    
    // Moist Blaze Cake Dough
    event.create('bc_moist_blaze_dough', 'basic')
        .displayName('Moist Blaze Cake Dough')
        .tooltip('§aNext step: Deploy this onto Blazed Pan.')
        .texture('nerds_addons:item/bc_blaze_dough_milked')
        .unstackable();

    // Blaze Cake Pan
    event.create('bc_pan', 'basic')
        .displayName('Blaze Cake Pan')
        .tooltip('§aNext step: Heated vacuumize this and 250mB Fire Resistance.')
        .texture('nerds_addons:item/bc_cakeonpan')
        .unstackable();
})

StartupEvents.registry('fluid', event => {
    event.create('pilk')
        .displayName('Pilk')
        .thinTexture(0xD7B9A4)
        .bucketColor(0xD7B9A4);
})

/*StartupEvents.modifyCreativeTab('kubejs:tab', event =>{
    // Hide Incomplete Ender Eye
    event.remove('kubejs:incomplete_ender_eye');
})*/
