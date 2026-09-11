var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
import { V as Vector2, g as getSettings, C as Camera, I as Input, t as three_module, D as DefaultInputScheme, K as KEYS, a as Viewer, B as BimOpenSchemaLoader, l as loadBimGeometryFromZip } from "./viewer.258782e2.js";
import { G as GltfLoader } from "./gltfLoader.66b2bd2c.js";
import { D as DataTable } from "./DataTable.e67c04b5.js";
class GizmoOptions {
  constructor(init) {
    __publicField(this, "size", 84);
    __publicField(this, "padding", 4);
    __publicField(this, "bubbleSizePrimary", 8);
    __publicField(this, "bubbleSizeSecondary", 6);
    __publicField(this, "lineWidth", 2);
    __publicField(this, "fontSize", "12px");
    __publicField(this, "fontFamily", "arial");
    __publicField(this, "fontWeight", "bold");
    __publicField(this, "fontColor", "#222222");
    __publicField(this, "className", "gizmo-axis-canvas");
    __publicField(this, "colorX", "#f73c3c");
    __publicField(this, "colorY", "#6ccb26");
    __publicField(this, "colorZ", "#178cf0");
    __publicField(this, "colorXSub", "#942424");
    __publicField(this, "colorYSub", "#417a17");
    __publicField(this, "colorZSub", "#0e5490");
    this.size = init?.size ?? this.size;
    this.padding = init?.padding ?? this.padding;
    this.bubbleSizePrimary = init?.bubbleSizePrimary ?? this.bubbleSizePrimary;
    this.bubbleSizeSecondary = init?.bubbleSizeSecondary ?? this.bubbleSizeSecondary;
    this.lineWidth = init?.lineWidth ?? this.lineWidth;
    this.fontSize = init?.fontSize ?? this.fontSize;
    this.fontFamily = init?.fontFamily ?? this.fontFamily;
    this.fontWeight = init?.fontWeight ?? this.fontWeight;
    this.fontColor = init?.fontColor ?? this.fontColor;
    this.className = init?.className ?? this.className;
    this.colorX = init?.colorX ?? this.colorX;
    this.colorY = init?.colorY ?? this.colorY;
    this.colorZ = init?.colorZ ?? this.colorZ;
    this.colorXSub = init?.colorXSub ?? this.colorXSub;
    this.colorYSub = init?.colorYSub ?? this.colorYSub;
    this.colorZSub = init?.colorZSub ?? this.colorZSub;
  }
}
class CanvasViewport {
  constructor(canvas) {
    __publicField(this, "canvas");
    this.canvas = canvas;
  }
  getSize() {
    return new Vector2(this.canvas.clientWidth, this.canvas.clientHeight);
  }
  getAspectRatio() {
    const size = this.getSize();
    return size.y === 0 ? 1 : size.x / size.y;
  }
}
class CameraControls {
  constructor(canvas, options) {
    __publicField(this, "camera");
    __publicField(this, "viewport");
    __publicField(this, "settings");
    __publicField(this, "inputs");
    __publicField(this, "onRequestRender");
    this.settings = getSettings(options);
    this.viewport = new CanvasViewport(canvas);
    this.camera = new Camera(this.viewport, this.settings);
    this.inputs = new Input(this);
    this.inputs.registerAll();
  }
  requestRender() {
    this.onRequestRender?.();
  }
  get speed() {
    return this.camera.speed;
  }
  set speed(value) {
    this.camera.speed = value;
  }
  get mouseSensitivity() {
    return this.inputs.mouse.sensitivity;
  }
  set mouseSensitivity(value) {
    this.inputs.mouse.sensitivity = value;
  }
  update(deltaTime) {
    return this.camera.update(deltaTime);
  }
  frame(bounds, forward = this.camera.defaultForward) {
    this.camera.sceneBounds = bounds.clone();
    this.camera.do().frame(bounds, forward);
    this.camera.save();
  }
  setClipPlanes(near, far) {
    const perspective = this.camera.camPerspective.camera;
    perspective.near = near;
    perspective.far = far;
    perspective.updateProjectionMatrix();
    const orthographic = this.camera.camOrthographic.camera;
    orthographic.near = -far;
    orthographic.far = far;
    orthographic.updateProjectionMatrix();
  }
  dispose() {
    this.inputs.unregisterAll();
  }
}
const ARA3D = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  THREE: three_module,
  DefaultInputScheme,
  KEYS,
  Viewer,
  GizmoOptions,
  getSettings,
  CameraControls,
  CanvasViewport,
  GltfLoader,
  BimOpenSchemaLoader,
  loadBimGeometryFromZip,
  DataTable
}, Symbol.toStringTag, { value: "Module" }));
console.log(ARA3D);
//# sourceMappingURL=input.f5d26079.js.map
