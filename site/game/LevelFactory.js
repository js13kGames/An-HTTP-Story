export class LevelFactory {
  constructor(scene, state, meshFactory) {
    this.scene = scene;
    this.state = state;
    this.meshFactory = meshFactory;
  }

  // TODO Merge non-movable meshes of same type?
  // TODO Or use Instances?
  create(level) {
    const levelObjects = [];

    // Start from bottom layer
    level.map
      .slice()
      .reverse()
      .forEach((layer, layerIndex) => {
        const y = -1 + layerIndex;

        // And bottom row
        layer
          .slice()
          .reverse()
          .forEach((row, rowIndex) => {
            const x = 0 + rowIndex;

            row.forEach((code, colIndex) => {
              const z = 5 - colIndex;
              const id = `z${z}x${x}`;

              let mesh;
              switch (code) {
                case "_":
                  mesh = this.meshFactory.createBlock(id);
                  break;
                case "m":
                  mesh = this.meshFactory.createBlockMovable(id);
                  break;
                case "^":
                  mesh = this.meshFactory.createCharacter();
                  break;
                case "$":
                  mesh = this.meshFactory.createTeleporter();
                  break;
              }

              if (mesh) {
                mesh.position.y += y;
                mesh.position.z += z;
                mesh.position.x += x;

                levelObjects.push(mesh);
                // TODO What happens if we don't add meshes to the scene?
                // this.scene.addMesh(mesh);
              }
            });
          });
      });

    return levelObjects;
  }
}