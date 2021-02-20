import {
  ArcRotateCamera,
  HemisphericLight,
  MeshBuilder,
  Vector3,
} from '@babylonjs/core';
import { Scene } from '@babylonjs/core/scene';

import InitBabylon from './lib/babylon';
import { SceneModule } from './lib/createScene';

const GameSceneModule: SceneModule = {
  create: async (engine, canvas) => {
    const scene = new Scene(engine);

    const camera = new ArcRotateCamera(
      'camera',
      -Math.PI / 2,
      Math.PI / 2.5,
      3,
      new Vector3(0, 0, 0),
      scene
    );

    camera.attachControl(canvas, true);

    new HemisphericLight('light', new Vector3(0, 1, 0), scene);
    MeshBuilder.CreateBox('box', {}, scene);

    return scene;
  },
};

// Get the canvas element
const canvas = document.getElementById('canvas') as HTMLCanvasElement;

InitBabylon(GameSceneModule, canvas);
