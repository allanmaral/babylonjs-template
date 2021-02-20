import { Engine } from '@babylonjs/core/Engines/engine';
import { SceneModule } from './createScene';

const initBabylon = async (
  sceneModule: SceneModule,
  canvas: HTMLCanvasElement
): Promise<void> => {
  // Call any beforeInit hook
  await sceneModule.onBeforeInit?.();

  // Instantiate the Babylon 3D engine
  const engine = new Engine(canvas, true);

  // Create scene
  const scene = await sceneModule.create(engine, canvas);

  // Register a render loop to repeatedly render the scene
  engine.runRenderLoop(() => {
    sceneModule.onBeforeRender?.();
    scene.render();
    sceneModule.onAfterRender?.();
  });

  // Watch for browser/canvas resize events
  window.addEventListener('resize', async (e) => {
    engine.resize();
    await sceneModule.onResize?.(e);
  });
};

export default initBabylon;
