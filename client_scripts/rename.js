function renameGroup(event, dict) {
    for (const [key, value] of Object.entries(dict)) {
        event.renameItem(key, value);
    }
}

ClientEvents.lang("en_us", event => {
    event.renameItem('minecraft:quartz', 'Quartz');

    // Alex's Caves Limestone -> Paleostone
    renameGroup(event, {
        'alexscaves:limestone': 'Paleostone',
        'alexscaves:limestone_stairs': 'Paleostone Stairs',
        'alexscaves:limestone_slab': 'Paleostone Slab',
        'alexscaves:limestone_wall': 'Paleostone Wall',
        'alexscaves:limestone_pillar': 'Paleostone Pillar',
        'alexscaves:limestone_chiseled': 'Chiseled Paleostone',
        'alexscaves:smooth_limestone': 'Smooth Paleostone',
        'alexscaves:smooth_limestone_stairs': 'Smooth Paleostone Stairs',
        'alexscaves:smooth_limestone_slab': 'Smooth Paleostone Slab',
        'alexscaves:smooth_limestone_wall': 'Smooth Paleostone Wall',
        'alexscaves:limestone_spear': 'Paleostone Spear'
    });

    // Alex's Caves/Confectionery Compatibility
    renameGroup(event, {
        'alexscaves:caramel': 'Condensed Caramel',

        'alexscaves:gingerbread_block': 'Gingercrumb Block',
        'alexscaves:gingerbread_bricks': 'Gingercrumb Bricks',
        'alexscaves:gingerbread_brick_stairs': 'Gingercrumb Brick Stairs',
        'alexscaves:gingerbread_brick_slab': 'Gingercrumb Brick Slab',
        'alexscaves:gingerbread_brick_wall': 'Gingercrumb Brick Wall',

        'alexscaves:frosted_gingerbread_block': 'Frosted Gingercrumb Block',
        'alexscaves:frosted_gingerbread_bricks': 'Frosted Gingercrumb Bricks',
        'alexscaves:frosted_gingerbread_brick_stairs': 'Frosted Gingercrumb Brick Stairs',
        'alexscaves:frosted_gingerbread_brick_slab': 'Frosted Gingercrumb Brick Slab',
        'alexscaves:frosted_gingerbread_brick_wall': 'Frosted Gingercrumb Brick Wall',

        'create_confectionery:gingerbread_man': 'Gingerbread Man Cookie',
        'create_confectionery:candy_cane_block': 'Peppermint Pillar',
    });

    // Flax Rope, String Rope, Straw Rope
    event.renameItem('supplementaries:rope', 'Flax Rope');
    event.renameItem('darkerdepths:rope', 'String Rope');
    event.renameItem('farmersdelight:rope', 'Straw Rope');

    // Replace Stone Tools with Copper
    renameGroup(event, {
        'minecraft:stone_axe': 'Copper Axe',
        'minecraft:stone_hoe': 'Copper Hoe',
        'minecraft:stone_pickaxe': 'Copper Pickaxe',
        'minecraft:stone_shovel': 'Copper Shovel',
        'minecraft:stone_sword': 'Copper Sword',

        'weapon_class:stone_battle_axe': 'Copper Battle Axe',
        'weapon_class:stone_dagger': 'Copper Dagger',
        'weapon_class:stone_executioners_sword': 'Copper Executioners Sword',
        'weapon_class:stone_hammer': 'Copper Hammer',
        'weapon_class:stone_katar': 'Copper Katar',
        'weapon_class:stone_rapier': 'Copper Rapier',
        'weapon_class:stone_scythe': 'Copper Scythe',
        'weapon_class:stone_sickle': 'Copper Sickle',
    });
});
