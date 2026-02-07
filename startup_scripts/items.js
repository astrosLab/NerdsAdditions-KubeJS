StartupEvents.registry('item', event => {
    Platform.mods.kubejs.name = 'Nerds Placeholder';

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
        .texture('nerds_addons:item/dry_sack_of_sating')
        .unstackable();
})

/*StartupEvents.modifyCreativeTab('kubejs:tab', event =>{
    // Hide Incomplete Ender Eye
    event.remove('kubejs:incomplete_ender_eye');
})*/
