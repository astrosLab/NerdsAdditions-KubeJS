BlockEvents.broken(event =>{
    // Bone bricks dropping bones -> dropping itself
    if (event.block.id == 'cave_stuff:bonebricks') {
        event.block.popItem('cave_stuff:bonebricks');
        event.block.set('minecraft:air');
    }
});
