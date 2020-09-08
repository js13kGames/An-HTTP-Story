import { events } from "./utils";
import {
  ZYR,
  TLX,
  TLA,
  TLB,
  TLC,
  TLD,
  ___,
  __M,
  EYE,
  EY1,
  EY2,
  EY3,
  EY4,
  SEY,
} from "./levels";
const { Vector3 } = BABYLON;

export class LevelFactory {
  constructor(scene, state, envHelper, meshFactory, animationMixins, dialogue) {
    this.scene = scene;
    this.state = state;
    this._envHelper = envHelper;
    this._meshFactory = meshFactory;
    this._animationMixins = animationMixins;
    this._dialogue = dialogue;

    // this._level = { intro: [], outro: [] };
    this._levelMeshes = [];

    events.on("levelCompleted", async () => {
      this.state.playerControl = false;
      if (this.state.selected) {
        this.state.selected.renderOutline = false;
      }
      this.state.selected = null;

      await this._dialogue.load(this._level.outro);

      events.emit("levelNext");
    });
  }

  async load(level) {
    await this.reset();
    // this._level = level;
    this._envHelper.setTheme(level.theme);
    this._levelMeshes = await this._buildLevel(level);

    events.emit("levelReady");
    this.state.playerControl = true;
    await this._dialogue.load(level.intro);
  }

  _buildLevel(level) {
    const meshes = [];

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

              let mesh;
              switch (code) {
                case ___:
                  mesh = this._meshFactory.createBlock();
                  break;
                case __M:
                  mesh = this._meshFactory.createBlockMovable();
                  break;
                case EYE:
                  mesh = this._meshFactory.createEye();
                  break;
                case EY1:
                case EY2:
                case EY3:
                case EY4:
                  this.state.eyePatrolPath[y] =
                    this.state.eyePatrolPath[y] || {};
                  this.state.eyePatrolPath[y][code] = new Vector3(x, y, z);
                  break;
                case SEY:
                  mesh = this._meshFactory.createEye(true);
                  break;
                case TLX:
                case TLA:
                case TLB:
                case TLC:
                case TLD:
                  mesh = this._meshFactory.createTeleporter(code);
                  break;
                case ZYR:
                  mesh = this._meshFactory.createCharacter();
                  break;
              }

              if (mesh) {
                mesh.position.y = y;
                mesh.position.z = z;
                mesh.position.x = x;
                meshes.push(mesh);

                // NOTE Doesn't seem like we need to explicitly add meshes to
                // the scene. Perhaps some default logic at work.
                // this.scene.addMesh(mesh);
              }
            });
          });
      });

    const yRange = meshes.map((mesh) => mesh.position.y);
    const yMin = Math.min(...yRange);
    const meshesReady = meshes.map((mesh) => {
      return new Promise((resolve) => {
        const yTarget = mesh.position.y;
        const delay = (mesh.position.y - yMin) * 600;
        const random = Math.round(Math.random() * 600 + delay);
        mesh.position.y += 10;
        setTimeout(() => {
          this._animationMixins.enterScene(mesh, yTarget, () => {
            resolve(mesh);
          });
        }, random);
      });
    });

    return Promise.all(meshesReady);
  }

  reset() {
    events.emit("levelReset");

    const yRange = this._levelMeshes.map((mesh) => mesh.position.y);
    const yMax = Math.max(...yRange);
    const meshesReady = this._levelMeshes.map((mesh) => {
      return new Promise((resolve) => {
        const delay = (yMax - mesh.position.y) * 600;
        const random = Math.round(Math.random() * 600 + delay);

        setTimeout(() => {
          this._animationMixins.exitScene(mesh, () => {
            mesh.dispose();
            resolve();
          });
        }, random);
      });
    });

    this._levelMeshes = [];
    this.state.seekers = [];
    clearInterval(this.state.seekerTimer);
    this.state.seekerTimer = null;
    this.state.teleporters = [];
    this.state.eyePatrolPath = {};
    return Promise.all(meshesReady);
  }
}
