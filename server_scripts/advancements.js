AdvJSEvents.advancement(event => {
    // Rename description of 'Town of Bedrock'
    event.get("alexscaves:alexscaves/limestone")
        .modifyDisplay(displayBuilder => {
            displayBuilder.setDescription("Obtain Paleostone");
        });
    
    // Rename description of 'Modern Art. It'll Never Last'
    event.get("alexscaves:alexscaves/cave_painting")
        .modifyDisplay(displayBuilder => {
            displayBuilder.setDescription(
                "Create a Cave Painting by using Charcoal on Smooth Paleostone"
            );
        });
});
