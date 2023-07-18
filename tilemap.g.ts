// Automatisch generierter Code. Nicht bearbeiten.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "Level1":
            case "Level1":return tiles.createTilemap(hex`1000100001010101010101010101010101010101010000000000010000000000000000010100000000000000000000000000000101000000000000000000000100000001010000000000010000000001000000010100000000010100000000010000000101000100000100000000010101010001010000000000000000000000000000010100000000000000000000000000000101010000000100000000000000000001010000000001000000000000000000010100000000010000010101000000000101000000000100000000000000000001010000000000000000000000000000010100000000000101010000000000000101010101010101010101010101010101`, img`
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 . . . . . 2 . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . 2 . . . 2 
2 . . . . . 2 . . . . 2 . . . 2 
2 . . . . 2 2 . . . . 2 . . . 2 
2 . 2 . . 2 . . . . 2 2 2 2 . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 2 . . . 2 . . . . . . . . . 2 
2 . . . . 2 . . . . . . . . . 2 
2 . . . . 2 . . 2 2 2 . . . . 2 
2 . . . . 2 . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . 2 2 2 . . . . . . 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`, [myTiles.transparency16,sprites.builtin.forestTiles2], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
        }
        return null;
    })

}
// Automatisch generierter Code. Nicht bearbeiten.
