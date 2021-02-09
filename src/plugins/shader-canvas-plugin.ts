export type ShaderCanvasPluginFactory = () => ShaderCanvasPlugin;

export interface ShaderCanvasPlugin {
  name: string;
  setup(
    hostElement: HTMLElement,
    gl: WebGLRenderingContext | WebGL2RenderingContext,
    program: WebGLProgram,
    canvas: HTMLCanvasElement
  ): void;
  dispose(): void;
}