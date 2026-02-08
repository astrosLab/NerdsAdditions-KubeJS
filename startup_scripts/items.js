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
