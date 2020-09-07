const {
  Color3,
  Vector3,
  HemisphericLight,
  DirectionalLight,
  ShadowGenerator,
  HighlightLayer,
  UniversalCamera,
  WebXRState,
} = BABYLON;

export class Environment {
  constructor(scene) {
    this.scene = scene;

    this.helper = scene.createDefaultEnvironment({
      skyboxSize: 100,
    });

    this.helper.ground.position.y = -3;

    this.setTheme([0.0, 0.1, 0.2]);
  }

  setTheme(colors) {
    const mainColor = new Color3(...colors);
    this.scene.clearColor = mainColor;
    this.scene.ambientColor = mainColor;
    this.helper.setMainColor(mainColor);
  }
}

/** @constructor */
export function AmbientLight(scene) {
  // TODO Diffuse and specular colors
  const ambient = new HemisphericLight(
    "ambientLight",
    new Vector3(0, 1, 0),
    scene
  );
  ambient.intensity = 0.5;
  return ambient;
}

/** @constructor */
export function DirectLight(scene) {
  const direct = new DirectionalLight(
    "directLight",
    new Vector3(0, -10, 5),
    scene
  );
  direct.intensity = 0.8;
  direct.position.z = 0;
  direct.position.x = 0;
  return direct;
}

// TODO scene is unused
/** @constructor */
export function ShadowGen(scene, direct) {
  const shadowGenerator = new ShadowGenerator(256, direct);
  shadowGenerator.usePoissonSampling = true;
  shadowGenerator.darkness = 0.4;
  return shadowGenerator;
}

// TODO scene is unused
/** @constructor */
export function Highlights(scene) {
  return new HighlightLayer("hover", scene);
}

/** @constructor */
export function IsoCam(scene) {
  const offset = 6;
  const isoCam = new UniversalCamera(
    "isoCam",
    new Vector3(0 - offset, offset, 0 - offset),
    scene
  );
  isoCam.rotation = new Vector3(Math.PI / 6, Math.PI / 6, 0);
  isoCam.position = new Vector3(-1, offset, -3);
  isoCam.maxZ = 1000;
  isoCam.speed = 0.5;
  isoCam.inputs.removeByType("FreeCameraMouseInput");
  isoCam.keysUp = [38, 87];
  isoCam.keysDown = [40, 83];
  isoCam.keysLeft = [37, 65];
  isoCam.keysRight = [39, 68];

  scene.onBeforeRenderObservable.add(() => {
    // Keep on isometric plane
    isoCam.position.y = offset;

    // Maximum distance
    if (isoCam.position.x > 6) {
      isoCam.position.x = 6;
    } else if (isoCam.position.x < -4) {
      isoCam.position.x = -4;
    }
    if (isoCam.position.z > 2) {
      isoCam.position.z = 2;
    } else if (isoCam.position.z < -10) {
      isoCam.position.z = -10;
    }
  });

  return isoCam;
}

export function initXRHelper(scene, dialogue) {
  if (window.navigator.xr) {
    return scene
      .createDefaultXRExperienceAsync({
        disableTeleportation: true,
        useMultiview: true,
      })
      .then((xr) => {
        const xrHelper = xr.baseExperience;
        xrHelper.onStateChangedObservable.add((state) => {
          if (state === WebXRState.IN_XR) {
            dialogue.attachCamera(xrHelper.camera);
          } else if (state === WebXRState.NOT_IN_XR) {
            dialogue.attachCamera(false);
          }
        });

        // Set camera height
        xrHelper.onInitialXRPoseSetObservable.add((xrCamera) => {
          xrCamera.position.y = 6;
        });

        return xrHelper;
      });
  } else {
    console.log("No WebXR support");
    return Promise.resolve();
  }
}
