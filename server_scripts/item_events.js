ItemEvents.foodEaten(event => {
    // Pilk Effects
    if (event.item == 'kubejs:pilk_bottle') {
        event.player.potionEffects.add('farmersdelight:comfort', 20 * 20, 0, true, false)
        event.player.potionEffects.add('oreganized:stunning', 10 * 20, 7, true, false)
        event.player.potionEffects.add('minecraft:strength', 2 * 20, 5, true, false)
    }
})
