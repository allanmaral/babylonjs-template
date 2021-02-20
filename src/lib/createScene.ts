import { Engine } from '@babylonjs/core/Engines/engine';
import { Scene } from '@babylonjs/core/scene';

export interface SceneModule {
  // eslint-disable-next-line no-unused-vars
  create: (engine: Engine, canvas: HTMLCanvasElement) => Promise<Scene>;
  onBeforeRender?: () => void;
  onAfterRender?: () => void;
  onBeforeInit?: () => Promise<unknown>;
  onResize?: (e: UIEvent) => Promise<void>;
}
