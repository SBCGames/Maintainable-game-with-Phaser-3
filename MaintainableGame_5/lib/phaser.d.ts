declare type CallCallback = (item: Phaser.GameObjects.GameObject)=>void;

declare type GridAlignConfig = {
    width?: integer;
    height?: integer;
    cellWidth?: integer;
    cellHeight?: integer;
    position?: integer;
    x?: number;
    y?: number;
};

declare type JSONAnimation = {
    key: string;
    type: string;
    frames: JSONAnimationFrame[];
    frameRate: integer;
    duration: integer;
    skipMissedFrames: boolean;
    delay: integer;
    repeat: integer;
    repeatDelay: integer;
    yoyo: boolean;
    showOnStart: boolean;
    hideOnComplete: boolean;
};

declare type AnimationFrameConfig = {
    key: string;
    frame: string | number;
    duration?: number;
    visible?: boolean;
};

declare type AnimationConfig = {
    key?: string;
    frames?: AnimationFrameConfig[] | string[];
    defaultTextureKey?: string;
    frameRate?: integer;
    duration?: integer;
    skipMissedFrames?: boolean;
    delay?: integer;
    repeat?: integer;
    repeatDelay?: integer;
    yoyo?: boolean;
    showOnStart?: boolean;
    hideOnComplete?: boolean;
};

declare type JSONAnimationFrame = {
    key: string;
    frame: string | integer;
    duration: number;
};

declare type JSONAnimationManager = {
    anims: JSONAnimation[];
    globalTimeScale: number;
};

declare type GenerateFrameNamesConfig = {
    prefix?: string;
    start?: integer;
    end?: integer;
    suffix?: string;
    zeroPad?: integer;
    outputArray?: AnimationFrameConfig[];
    frames?: boolean | string[];
};

declare type GenerateFrameNumbersConfig = {
    start?: integer;
    end?: integer;
    first?: boolean;
    outputArray?: AnimationFrameConfig[];
    frames?: boolean;
};

declare type NOOP = ()=>void;

declare type BootCallback = (game: Phaser.Game)=>void;

declare type FPSConfig = {
    min?: integer;
    target?: integer;
    forceSetTimeOut?: boolean;
    deltaHistory?: integer;
    panicMax?: integer;
};

declare type LoaderConfig = {
    baseURL?: string;
    path?: string;
    maxParallelDownloads?: integer;
    crossOrigin?: string | undefined;
    responseType?: string;
    async?: boolean;
    user?: string;
    password?: string;
    timeout?: integer;
};

declare type GameConfig = {
    width?: integer | string;
    height?: integer | string;
    zoom?: number;
    resolution?: number;
    type?: number;
    parent?: any;
    canvas?: HTMLCanvasElement;
    canvasStyle?: string;
    context?: CanvasRenderingContext2D;
    scene?: object;
    seed?: string[];
    title?: string;
    url?: string;
    version?: string;
    autoFocus?: boolean;
    input?: boolean | object;
    "input.keyboard"?: boolean;
    "input.keyboard.target"?: any;
    "input.mouse"?: boolean | object;
    "input.mouse.target"?: any;
    "input.touch"?: boolean;
    "input.activePointers"?: integer;
    "input.touch.target"?: any;
    "input.touch.capture"?: boolean;
    "input.gamepad"?: boolean | object;
    disableContextMenu?: boolean;
    banner?: boolean | object;
    "banner.hidePhaser"?: boolean;
    "banner.text"?: string;
    "banner.background"?: string[];
    fps?: FPSConfig;
    "render.antialias"?: boolean;
    "render.pixelArt"?: boolean;
    "render.autoResize"?: boolean;
    "render.roundPixels"?: boolean;
    "render.transparent"?: boolean;
    "render.clearBeforeRender"?: boolean;
    "render.premultipliedAlpha"?: boolean;
    "render.preserveDrawingBuffer"?: boolean;
    "render.failIfMajorPerformanceCaveat"?: boolean;
    "render.powerPreference"?: string;
    backgroundColor?: string | number;
    callbacks?: object;
    "callbacks.preBoot"?: BootCallback;
    "callbacks.postBoot"?: BootCallback;
    loader?: LoaderConfig;
    images?: object;
    "images.default"?: string;
    "images.missing"?: string;
    physics?: object;
};

declare type TimeStepCallback = (time: number, average: number, interpolation: number)=>void;

declare type JSONCameraBounds = {
    x: number;
    y: number;
    width: number;
    height: number;
};

declare type JSONCamera = {
    name: string;
    x: number;
    y: number;
    width: number;
    height: number;
    zoom: number;
    rotation: number;
    roundPixels: boolean;
    scrollX: number;
    scrollY: number;
    backgroundColor: string;
    bounds?: JSONCameraBounds | undefined;
};

declare type InputJSONCameraObject = {
    name?: string;
    x?: integer;
    y?: integer;
    width?: integer;
    height?: integer;
    zoom?: number;
    rotation?: number;
    roundPixels?: boolean;
    scrollX?: number;
    scrollY?: number;
    backgroundColor?: false | string;
    bounds?: object;
    "bounds.x"?: number;
    "bounds.y"?: number;
    "bounds.width"?: number;
    "bounds.height"?: number;
};

declare type CameraFadeCallback = (camera: Phaser.Cameras.Scene2D.Camera, progress: number)=>void;

declare type CameraFlashCallback = (camera: Phaser.Cameras.Scene2D.Camera, progress: number)=>void;

declare type CameraShakeCallback = (camera: Phaser.Cameras.Scene2D.Camera, progress: number)=>void;

declare type FixedKeyControlConfig = {
    camera?: Phaser.Cameras.Scene2D.Camera;
    left?: Phaser.Input.Keyboard.Key;
    right?: Phaser.Input.Keyboard.Key;
    up?: Phaser.Input.Keyboard.Key;
    zoomIn?: Phaser.Input.Keyboard.Key;
    zoomOut?: Phaser.Input.Keyboard.Key;
    zoomSpeed?: number;
    speed?: number | Object;
};

declare type SmoothedKeyControlConfig = {
    camera?: Phaser.Cameras.Scene2D.Camera;
    left?: Phaser.Input.Keyboard.Key;
    right?: Phaser.Input.Keyboard.Key;
    up?: Phaser.Input.Keyboard.Key;
    zoomIn?: Phaser.Input.Keyboard.Key;
    zoomOut?: Phaser.Input.Keyboard.Key;
    zoomSpeed?: number;
    acceleration?: number | Object;
    drag?: number | Object;
    maxSpeed?: number | Object;
};

declare type RayDef = {
    origin: Phaser.Math.Vector3;
    direction: Phaser.Math.Vector3;
};

declare type GenerateTextureRendererCallback = (canvas: HTMLCanvasElement, context: CanvasRenderingContext2D)=>void;

declare type GenerateTextureConfig = {
    data?: any[];
    canvas?: HTMLCanvasElement;
    palette?: Palette;
    pixelWidth?: number;
    pixelHeight?: number;
    resizeCanvas?: boolean;
    clearCanvas?: boolean;
    preRender?: GenerateTextureRendererCallback;
    postRender?: GenerateTextureRendererCallback;
};

declare type Palette = {
    "0": string;
    "1": string;
    "2": string;
    "3": string;
    "4": string;
    "5": string;
    "6": string;
    "7": string;
    "8": string;
    "9": string;
    A: string;
    B: string;
    C: string;
    D: string;
    E: string;
    F: string;
};

declare type JSONEllipseCurve = {
    type: string;
    x: number;
    y: number;
    xRadius: number;
    yRadius: number;
    startAngle: integer;
    endAngle: integer;
    clockwise: boolean;
    rotation: integer;
};

declare type EllipseCurveConfig = {
    x?: number;
    y?: number;
    xRadius?: number;
    yRadius?: number;
    startAngle?: integer;
    endAngle?: integer;
    clockwise?: boolean;
    rotation?: integer;
};

declare type JSONCurve = {
    type: string;
    points: number[];
};

declare type JSONPath = {
    type: string;
    x: number;
    y: number;
    autoClose: boolean;
    curves: JSONCurve[];
};

declare type DataEachCallback = (parent: any, key: string, value: any, ...args: any[])=>void;

declare function init(): void;

declare type InputColorObject = {
    r?: number;
    g?: number;
    b?: number;
    a?: number;
};

declare type ColorObject = ()=>void;

declare namespace Phaser.Display.Color {
    namespace Interpolate {
        function RGBWithRGB(r1: number, g1: number, b1: number, r2: number, g2: number, b2: number, length?: number, index?: number): ColorObject;

        function ColorWithColor(color1: Phaser.Display.Color, color2: Phaser.Display.Color, length?: number, index?: number): ColorObject;

        function ColorWithRGB(color1: Phaser.Display.Color, r: number, g: number, b: number, length?: number, index?: number): ColorObject;

    }

}

declare type HSLColorObject = {
    h: number;
    s: number;
    l: number;
};

declare type ContentLoadedCallback = ()=>void;

declare type DisplayCallbackConfig = {
    tint: Object;
    index: number;
    charCode: number;
    x: number;
    y: number;
    scale: number;
    rotation: number;
    data: any;
};

declare type DisplayCallback = (display: DisplayCallbackConfig)=>void;

declare type BitmapTextConfig = GameObjectConfig & {
    font?: string;
    text?: string;
    size?: number | false;
};

declare type BitmapTextSize = {
    global: GlobalBitmapTextSize;
    local: LocalBitmapTextSize;
};

declare type GlobalBitmapTextSize = {
    x: number;
    y: number;
    width: number;
    height: number;
};

declare type LocalBitmapTextSize = {
    x: number;
    y: number;
    width: number;
    height: number;
};

declare type BitmapFontCharacterData = {
    x: number;
    y: number;
    width: number;
    height: number;
    centerX: number;
    centerY: number;
    xOffset: number;
    yOffset: number;
    data: object;
    kerning: {[key: string]: number};
};

declare type BitmapFontData = {
    font: string;
    size: number;
    lineHeight: number;
    retroFont: boolean;
    chars: {[key: number]:  BitmapFontCharacterData};
};

declare type JSONBitmapText = JSONGameObject & {
    font: string;
    text: string;
    fontSize: number;
    letterSpacing: number;
};

declare namespace Phaser.GameObjects.Blitter {
    type CreateCallback = (bob: Phaser.GameObjects.Blitter.Bob, index: integer)=>void;

    class Bob {
        constructor(blitter: Phaser.GameObjects.Blitter, x: number, y: number, frame: string | integer, visible: boolean);

        parent: Phaser.GameObjects.Blitter;

        x: number;

        y: number;

        protected frame: Phaser.Textures.Frame;

        data: object;

        flipX: boolean;

        flipY: boolean;

        setFrame(frame?: string | integer | Phaser.Textures.Frame): Phaser.GameObjects.Blitter.Bob;

        resetFlip(): Phaser.GameObjects.Blitter.Bob;

        reset(x: number, y: number, frame?: string | integer | Phaser.Textures.Frame): Phaser.GameObjects.Blitter.Bob;

        setFlipX(value: boolean): Phaser.GameObjects.Blitter.Bob;

        setFlipY(value: boolean): Phaser.GameObjects.Blitter.Bob;

        setFlip(x: boolean, y: boolean): Phaser.GameObjects.Blitter.Bob;

        setVisible(value: boolean): Phaser.GameObjects.Blitter.Bob;

        setAlpha(value: number): Phaser.GameObjects.Blitter.Bob;

        destroy(): void;

        visible: boolean;

        alpha: number;

    }

}

declare type GameObjectConfig = {
    x?: number;
    y?: number;
    depth?: number;
    flipX?: boolean;
    flipY?: boolean;
    scale?: number | object;
    scrollFactor?: number | object;
    rotation?: number;
    angle?: number;
    alpha?: number;
    origin?: number | object;
    scaleMode?: number;
    blendMode?: number;
    visible?: boolean;
    add?: boolean;
};

declare type JSONGameObject = {
    name: string;
    type: string;
    x: number;
    y: number;
    scale: object;
    "scale.x": number;
    "scale.y": number;
    origin: object;
    "origin.x": number;
    "origin.y": number;
    flipX: boolean;
    flipY: boolean;
    rotation: number;
    alpha: number;
    visible: boolean;
    scaleMode: integer;
    blendMode: integer | string;
    textureKey: string;
    frameKey: string;
    data: object;
};

declare type EachContainerCallback<I> = (item: any, ...args: any[])=>void;

declare namespace Phaser.GameObjects.Graphics {
    namespace Commands {
    }

}

declare type GraphicsLineStyle = {
    width: number;
    color: number;
    alpha: number;
};

declare type GraphicsFillStyle = {
    color: number;
    alpha: number;
};

declare type GraphicsStyles = {
    lineStyle: GraphicsLineStyle;
    fillStyle: GraphicsFillStyle;
};

declare type GraphicsOptions = Partial<GraphicsStyles> & {
    x: number;
    y: number;
};

declare type GroupCallback = (item: Phaser.GameObjects.GameObject)=>void;

declare type GroupMultipleCreateCallback = (items: Phaser.GameObjects.GameObject[])=>void;

declare type GroupConfig = {
    classType?: object;
    active?: boolean;
    maxSize?: number;
    defaultKey?: string;
    defaultFrame?: string | integer;
    runChildUpdate?: boolean;
    createCallback?: GroupCallback;
    removeCallback?: GroupCallback;
    createMultipleCallback?: GroupMultipleCreateCallback;
};

declare type GroupCreateConfig = {
    classType?: object;
    key?: string;
    frame?: string | integer;
    visible?: boolean;
    active?: boolean;
    repeat?: number;
    randomKey?: boolean;
    randomFrame?: boolean;
    yoyo?: boolean;
    frameQuantity?: number;
    max?: number;
    setXY?: object;
    "setXY.x"?: number;
    "setXY.y"?: number;
    "setXY.stepX"?: number;
    "setXY.stepY"?: number;
    setRotation?: object;
    "setRotation.value"?: number;
    "setRotation.step"?: number;
    setScale?: object;
    "setScale.x"?: number;
    "setScale.y"?: number;
    "setScale.stepX"?: number;
    "setScale.stepY"?: number;
    setAlpha?: object;
    "setAlpha.value"?: number;
    "setAlpha.step"?: number;
    hitArea?: any;
    hitAreaCallback?: HitAreaCallback;
    gridAlign?: false | GridAlignConfig;
};

declare type LightForEach = (light: Phaser.GameObjects.Light)=>void;

declare type EmitterOpOnEmitCallback = (particle: Phaser.GameObjects.Particles.Particle, key: string, value: number)=>void;

declare type EmitterOpOnUpdateCallback = (particle: Phaser.GameObjects.Particles.Particle, key: string, t: number, value: number)=>void;

declare type EmitterOpRandomConfig = {
    random: number[];
};

declare type EmitterOpRandomMinMaxConfig = {
    min: number;
    max: number;
};

declare type EmitterOpRandomStartEndConfig = {
    start: number;
    end: number;
    random: boolean;
};

declare type EmitterOpEaseConfig = {
    start: number;
    end: number;
    ease?: string;
};

declare type EmitterOpSteppedConfig = {
    start: number;
    end: number;
    steps: number;
};

declare type EmitterOpCustomEmitConfig = {
    onEmit: EmitterOpOnEmitCallback;
};

declare type EmitterOpCustomUpdateConfig = {
    onEmit?: EmitterOpOnEmitCallback;
    onUpdate: EmitterOpOnUpdateCallback;
};

declare type GravityWellConfig = {
    x?: number;
    y?: number;
    power?: number;
    epsilon?: number;
    gravity?: number;
};

declare type ParticleEmitterCallback = (particle: Phaser.GameObjects.Particles.Particle, emitter: Phaser.GameObjects.Particles.ParticleEmitter)=>void;

declare type ParticleDeathCallback = (particle: Phaser.GameObjects.Particles.Particle)=>void;

declare type ParticleEmitterBounds = {
    x: number;
    y: number;
    width: number;
    height: number;
};

declare type ParticleEmitterBoundsAlt = {
    x: number;
    y: number;
    w: number;
    h: number;
};

declare type ParticleEmitterDeathZoneConfig = {
    source: DeathZoneSource;
    type?: string;
};

declare type ParticleEmitterEdgeZoneConfig = {
    source: EdgeZoneSource;
    type: string;
    quantity: integer;
    stepRate?: number;
    yoyo?: boolean;
    seamless?: boolean;
};

declare type ParticleEmitterRandomZoneConfig = {
    source: RandomZoneSource;
    type?: string;
};

declare type ParticleEmitterConfig = {
    active?: boolean;
    blendMode?: integer;
    callbackScope?: any;
    collideBottom?: boolean;
    collideLeft?: boolean;
    collideRight?: boolean;
    collideTop?: boolean;
    deathCallback?: boolean;
    deathCallbackScope?: any;
    emitCallback?: Function;
    emitCallbackScope?: any;
    follow?: Phaser.GameObjects.GameObject;
    frequency?: number;
    gravityX?: number;
    gravityY?: number;
    maxParticles?: integer;
    name?: string;
    on?: boolean;
    particleBringToTop?: boolean;
    particleClass?: Phaser.GameObjects.Particles.Particle;
    radial?: boolean;
    timeScale?: number;
    trackVisible?: boolean;
    visible?: boolean;
    accelerationX?: number | number[] | EmitterOpOnEmitCallback | object;
    accelerationY?: number | number[] | EmitterOpOnEmitCallback | object;
    alpha?: number | number[] | EmitterOpOnUpdateCallback | object;
    angle?: number | number[] | EmitterOpOnEmitCallback | object;
    bounce?: number | number[] | EmitterOpOnEmitCallback | object;
    delay?: number | number[] | EmitterOpOnEmitCallback | object;
    lifespan?: number | number[] | EmitterOpOnEmitCallback | object;
    maxVelocityX?: number | number[] | EmitterOpOnEmitCallback | object;
    maxVelocityY?: number | number[] | EmitterOpOnEmitCallback | object;
    moveToX?: number | number[] | EmitterOpOnEmitCallback | object;
    moveToY?: number | number[] | EmitterOpOnEmitCallback | object;
    quantity?: number | number[] | EmitterOpOnEmitCallback | object;
    rotate?: number | number[] | EmitterOpOnUpdateCallback | object;
    scale?: number | number[] | EmitterOpOnUpdateCallback | object;
    scaleX?: number | number[] | EmitterOpOnUpdateCallback | object;
    scaleY?: number | number[] | EmitterOpOnUpdateCallback | object;
    speed?: number | number[] | EmitterOpOnEmitCallback | object;
    speedX?: number | number[] | EmitterOpOnEmitCallback | object;
    speedY?: number | number[] | EmitterOpOnEmitCallback | object;
    tint?: number | number[] | EmitterOpOnEmitCallback | object;
    x?: number | number[] | EmitterOpOnEmitCallback | object;
    y?: number | number[] | EmitterOpOnEmitCallback | object;
    emitZone?: object;
    bounds?: ParticleEmitterBounds | ParticleEmitterBoundsAlt;
    followOffset?: object;
    "followOffset.x"?: number;
    "followOffset.y"?: number;
    frames?: number | number[] | string | string[] | Phaser.Textures.Frame | Phaser.Textures.Frame[] | ParticleEmitterFrameConfig;
};

declare type ParticleEmitterFrameConfig = {
    frames?: number | number[] | string | string[] | Phaser.Textures.Frame | Phaser.Textures.Frame[];
    cycle?: boolean;
    quantity?: integer;
};

declare type DeathZoneSourceCallback = (x: number, y: number)=>void;

declare type DeathZoneSource = {
    contains: DeathZoneSourceCallback;
};

declare type EdgeZoneSourceCallback = (quantity: integer, stepRate?: integer)=>void;

declare type EdgeZoneSource = {
    getPoints: EdgeZoneSourceCallback;
};

declare type RandomZoneSourceCallback = (point: Phaser.Math.Vector2)=>void;

declare type RandomZoneSource = {
    getRandomPoint: RandomZoneSourceCallback;
};

declare type PathConfig = {
    duration: number;
    from: number;
    to: number;
    positionOnPath?: boolean;
    rotateToPath?: boolean;
    rotationOffset?: number;
    verticalAdjust?: boolean;
};

declare type RenderTextureConfig = {
    x?: number;
    y?: number;
    width?: number;
    height?: number;
};

declare type TextStyleWordWrapCallback = (text: string, textObject: Phaser.GameObjects.Text)=>void;

declare namespace Phaser.GameObjects.Text {
    class TextStyle {
        constructor(text: Phaser.GameObjects.Text, style: object);

        parent: Phaser.GameObjects.Text;

        fontFamily: string;

        fontSize: string;

        fontStyle: string;

        backgroundColor: string;

        color: string;

        stroke: string;

        strokeThickness: number;

        shadowOffsetX: number;

        shadowOffsetY: number;

        shadowColor: string;

        shadowBlur: number;

        shadowStroke: boolean;

        shadowFill: boolean;

        align: string;

        maxLines: integer;

        fixedWidth: number;

        fixedHeight: number;

        rtl: boolean;

        testString: string;

        baselineX: number;

        baselineY: number;

        setStyle(style: CSSStyleRule, updateText?: boolean): Phaser.GameObjects.Text;

        syncFont(canvas: HTMLCanvasElement, context: CanvasRenderingContext2D): void;

        syncStyle(canvas: HTMLCanvasElement, context: CanvasRenderingContext2D): void;

        syncShadow(context: CanvasRenderingContext2D, enabled: boolean): void;

        update(recalculateMetrics: boolean): Phaser.GameObjects.Text;

        setFont(font: string | object): Phaser.GameObjects.Text;

        setFontFamily(family: string): Phaser.GameObjects.Text;

        setFontStyle(style: string): Phaser.GameObjects.Text;

        setFontSize(size: number | string): Phaser.GameObjects.Text;

        setTestString(string: string): Phaser.GameObjects.Text;

        setFixedSize(width: number, height: number): Phaser.GameObjects.Text;

        setBackgroundColor(color: string): Phaser.GameObjects.Text;

        setFill(color: string): Phaser.GameObjects.Text;

        setColor(color: string): Phaser.GameObjects.Text;

        setStroke(color: string, thickness: number): Phaser.GameObjects.Text;

        setShadow(x?: number, y?: number, color?: string, blur?: number, shadowStroke?: boolean, shadowFill?: boolean): Phaser.GameObjects.Text;

        setShadowOffset(x?: number, y?: number): Phaser.GameObjects.Text;

        setShadowColor(color?: string): Phaser.GameObjects.Text;

        setShadowBlur(blur?: number): Phaser.GameObjects.Text;

        setShadowStroke(enabled: boolean): Phaser.GameObjects.Text;

        setShadowFill(enabled: boolean): Phaser.GameObjects.Text;

        setWordWrapWidth(width: number, useAdvancedWrap?: boolean): Phaser.GameObjects.Text;

        setWordWrapCallback(callback: TextStyleWordWrapCallback, scope?: object): Phaser.GameObjects.Text;

        setAlign(align: string): Phaser.GameObjects.Text;

        setMaxLines(max?: integer): Phaser.GameObjects.Text;

        getTextMetrics(): object;

        toJSON(): object;

        destroy(): void;

    }

}

declare type TileSprite = GameObjectConfig & {
    x?: number;
    y?: number;
    width?: number;
    height?: number;
    key?: string;
    frame?: string;
};

declare type CenterFunction = (triangle: Phaser.Geom.Triangle)=>void;

declare type HitAreaCallback = (hitArea: any, x: number, y: number, gameObject: Phaser.GameObjects.GameObject)=>void;

declare type Pad = {
    id: string;
    index: integer;
};

declare type InputPluginContainer = {
    key: string;
    plugin: Function;
    mapping?: string;
};

declare namespace Phaser.Input.InputPluginCache {
    function register(key: string, plugin: Function, mapping: string, settingsKey: string, configKey: string): void;

    function getCore(key: string): InputPluginContainer;

    function install(target: Phaser.Input.InputPlugin): void;

    function remove(key: string): void;

}

declare type KeyboardKeydownCallback = (event: KeyboardEvent)=>void;

declare type KeyComboConfig = {
    resetOnWrongKey?: boolean;
    maxKeyDelay?: number;
    resetOnMatch?: boolean;
    deleteOnMatch?: boolean;
};

declare type CursorKeys = {
    up?: Phaser.Input.Keyboard.Key;
    down?: Phaser.Input.Keyboard.Key;
    left?: Phaser.Input.Keyboard.Key;
    right?: Phaser.Input.Keyboard.Key;
    space?: Phaser.Input.Keyboard.Key;
    shift?: Phaser.Input.Keyboard.Key;
};

declare type FileConfig = {
    type: string;
    key: string;
    url?: string;
    path?: string;
    extension?: string;
    responseType?: XMLHttpRequestResponseType;
    xhrSettings?: XHRSettingsObject | false;
    config?: any;
};

declare namespace Phaser.Loader.AudioSpriteFile {
    function onFileComplete(file: Phaser.Loader.File): void;

    function addToCache(): void;

}

declare namespace Phaser.Loader.FileTypesManager {
    function register(loader: Phaser.Loader.LoaderPlugin): void;

    function destroy(): void;

}

declare type XHRSettingsObject = {
    responseType: XMLHttpRequestResponseType;
    async?: boolean;
    user?: string;
    password?: string;
    timeout?: integer;
    header?: string | undefined;
    headerValue?: string | undefined;
    requestedWith?: string | undefined;
    overrideMimeType?: string | undefined;
};

declare type SinCosTable = {
    sin: number;
    cos: number;
    length: number;
};

declare type Vector2Like = {
    x: number;
    y: number;
};

declare namespace Phaser {
    namespace Actions {
        function Angle<G extends Phaser.GameObjects.GameObject[]>(items: G, value: number, step?: number, index?: integer, direction?: integer): G;

        function Call<G extends Phaser.GameObjects.GameObject[]>(items: G, callback: CallCallback, context: any): G;

        function GetFirst<G extends Phaser.GameObjects.GameObject[]>(items: G, compare: object, index?: integer): object | Phaser.GameObjects.GameObject;

        function GetLast<G extends Phaser.GameObjects.GameObject[]>(items: G, compare: object, index?: integer): object | Phaser.GameObjects.GameObject;

        function GridAlign<G extends Phaser.GameObjects.GameObject[]>(items: G, options: GridAlignConfig): G;

        function IncAlpha<G extends Phaser.GameObjects.GameObject[]>(items: G, value: number, step?: number, index?: integer, direction?: integer): G;

        function IncX<G extends Phaser.GameObjects.GameObject[]>(items: G, value: number, step?: number, index?: integer, direction?: integer): G;

        function IncXY<G extends Phaser.GameObjects.GameObject[]>(items: G, x: number, y?: number, stepX?: number, stepY?: number, index?: integer, direction?: integer): G;

        function IncY<G extends Phaser.GameObjects.GameObject[]>(items: G, value: number, step?: number, index?: integer, direction?: integer): G;

        function PlaceOnCircle<G extends Phaser.GameObjects.GameObject[]>(items: G, circle: Phaser.Geom.Circle, startAngle?: number, endAngle?: number): G;

        function PlaceOnEllipse<G extends Phaser.GameObjects.GameObject[]>(items: G, ellipse: Phaser.Geom.Ellipse, startAngle?: number, endAngle?: number): G;

        function PlaceOnLine<G extends Phaser.GameObjects.GameObject[]>(items: G, line: Phaser.Geom.Line): G;

        function PlaceOnRectangle<G extends Phaser.GameObjects.GameObject[]>(items: G, rect: Phaser.Geom.Rectangle, shift?: integer): G;

        function PlaceOnTriangle<G extends Phaser.GameObjects.GameObject[]>(items: G, triangle: Phaser.Geom.Triangle, stepRate?: number): G;

        function PlayAnimation<G extends Phaser.GameObjects.GameObject[]>(items: G, key: string, startFrame?: string | integer): G;

        function PropertyValueInc<G extends Phaser.GameObjects.GameObject[]>(items: G, key: string, value: number, step?: number, index?: integer, direction?: integer): G;

        function PropertyValueSet<G extends Phaser.GameObjects.GameObject[]>(items: G, key: string, value: number, step?: number, index?: integer, direction?: integer): G;

        function RandomCircle<G extends Phaser.GameObjects.GameObject[]>(items: G, circle: Phaser.Geom.Circle): G;

        function RandomEllipse<G extends Phaser.GameObjects.GameObject[]>(items: G, ellipse: Phaser.Geom.Ellipse): G;

        function RandomLine<G extends Phaser.GameObjects.GameObject[]>(items: G, line: Phaser.Geom.Line): G;

        function RandomRectangle<G extends Phaser.GameObjects.GameObject[]>(items: G, rect: Phaser.Geom.Rectangle): G;

        function RandomTriangle<G extends Phaser.GameObjects.GameObject[]>(items: G, triangle: Phaser.Geom.Triangle): G;

        function Rotate<G extends Phaser.GameObjects.GameObject[]>(items: G, value: number, step?: number, index?: integer, direction?: integer): G;

        function RotateAround<G extends Phaser.GameObjects.GameObject[]>(items: G, point: object, angle: number): G;

        function RotateAroundDistance<G extends Phaser.GameObjects.GameObject[]>(items: G, point: object, angle: number, distance: number): G;

        function ScaleX<G extends Phaser.GameObjects.GameObject[]>(items: G, value: number, step?: number, index?: integer, direction?: integer): G;

        function ScaleXY<G extends Phaser.GameObjects.GameObject[]>(items: G, scaleX: number, scaleY?: number, stepX?: number, stepY?: number, index?: integer, direction?: integer): G;

        function ScaleY<G extends Phaser.GameObjects.GameObject[]>(items: G, value: number, step?: number, index?: integer, direction?: integer): G;

        function SetAlpha<G extends Phaser.GameObjects.GameObject[]>(items: G, value: number, step?: number, index?: integer, direction?: integer): G;

        function SetBlendMode<G extends Phaser.GameObjects.GameObject[]>(items: G, value: number, index?: integer, direction?: integer): G;

        function SetDepth<G extends Phaser.GameObjects.GameObject[]>(items: G, value: number, step?: number, index?: integer, direction?: integer): G;

        function SetHitArea<G extends Phaser.GameObjects.GameObject[]>(items: G, hitArea: any, hitAreaCallback: HitAreaCallback): G;

        function SetOrigin<G extends Phaser.GameObjects.GameObject[]>(items: G, originX: number, originY?: number, stepX?: number, stepY?: number, index?: integer, direction?: integer): G;

        function SetRotation<G extends Phaser.GameObjects.GameObject[]>(items: G, value: number, step?: number, index?: integer, direction?: integer): G;

        function SetScale<G extends Phaser.GameObjects.GameObject[]>(items: G, scaleX: number, scaleY?: number, stepX?: number, stepY?: number, index?: integer, direction?: integer): G;

        function SetScaleX<G extends Phaser.GameObjects.GameObject[]>(items: G, value: number, step?: number, index?: integer, direction?: integer): G;

        function SetScaleY<G extends Phaser.GameObjects.GameObject[]>(items: G, value: number, step?: number, index?: integer, direction?: integer): G;

        function SetTint<G extends Phaser.GameObjects.GameObject[]>(items: G, topLeft: number, topRight?: number, bottomLeft?: number, bottomRight?: number): G;

        function SetVisible<G extends Phaser.GameObjects.GameObject[]>(items: G, value: boolean, index?: integer, direction?: integer): G;

        function SetX<G extends Phaser.GameObjects.GameObject[]>(items: G, value: number, step?: number, index?: integer, direction?: integer): G;

        function SetXY<G extends Phaser.GameObjects.GameObject[]>(items: G, x: number, y?: number, stepX?: number, stepY?: number, index?: integer, direction?: integer): G;

        function SetY<G extends Phaser.GameObjects.GameObject[]>(items: G, value: number, step?: number, index?: integer, direction?: integer): G;

        function ShiftPosition<G extends Phaser.GameObjects.GameObject[], O extends Phaser.Math.Vector2>(items: G, x: number, y: number, direction?: integer, output?: O): O;

        function Shuffle<G extends Phaser.GameObjects.GameObject[]>(items: G): G;

        function SmootherStep<G extends Phaser.GameObjects.GameObject[]>(items: G, property: string, min: number, max: number, inc: number): G;

        function SmoothStep<G extends Phaser.GameObjects.GameObject[]>(items: G, property: string, min: number, max: number, inc: number): G;

        function Spread<G extends Phaser.GameObjects.GameObject[]>(items: G, property: string, min: number, max: number, inc?: number): G;

        function ToggleVisible<G extends Phaser.GameObjects.GameObject[]>(items: G): G;

        function WrapInRectangle<G extends Phaser.GameObjects.GameObject[]>(items: G, rect: Phaser.Geom.Rectangle, padding?: number): G;

    }

    namespace Animations {
        class Animation {
            constructor(manager: Phaser.Animations.AnimationManager, key: string, config: AnimationConfig);

            manager: Phaser.Animations.AnimationManager;

            key: string;

            type: string;

            frames: Phaser.Animations.AnimationFrame[];

            frameRate: integer;

            duration: integer;

            msPerFrame: integer;

            skipMissedFrames: boolean;

            delay: integer;

            repeat: integer;

            repeatDelay: integer;

            yoyo: boolean;

            showOnStart: boolean;

            hideOnComplete: boolean;

            paused: boolean;

            addFrame(config: string | AnimationFrameConfig[]): Phaser.Animations.Animation;

            addFrameAt(index: integer, config: string | AnimationFrameConfig[]): Phaser.Animations.Animation;

            checkFrame(index: integer): boolean;

            protected completeAnimation(component: Phaser.GameObjects.Components.Animation): void;

            protected getFirstTick(component: Phaser.GameObjects.Components.Animation, includeDelay?: boolean): void;

            protected getFrameAt(index: integer): Phaser.Animations.AnimationFrame;

            getFrames(textureManager: Phaser.Textures.TextureManager, frames: string | AnimationFrameConfig[], defaultTextureKey?: string): Phaser.Animations.AnimationFrame[];

            getNextTick(component: Phaser.GameObjects.Components.Animation): void;

            getFrameByProgress(value: number): Phaser.Animations.AnimationFrame;

            nextFrame(component: Phaser.GameObjects.Components.Animation): void;

            previousFrame(component: Phaser.GameObjects.Components.Animation): void;

            removeFrame(frame: Phaser.Animations.AnimationFrame): Phaser.Animations.Animation;

            removeFrameAt(index: integer): Phaser.Animations.Animation;

            repeatAnimation(component: Phaser.GameObjects.Components.Animation): void;

            setFrame(component: Phaser.GameObjects.Components.Animation): void;

            toJSON(): JSONAnimation;

            updateFrameSequence(): Phaser.Animations.Animation;

            pause(): Phaser.Animations.Animation;

            resume(): Phaser.Animations.Animation;

            destroy(): void;

        }

        class AnimationFrame {
            constructor(textureKey: string, textureFrame: string | integer, index: integer, frame: Phaser.Textures.Frame);

            textureKey: string;

            textureFrame: string | integer;

            index: integer;

            frame: Phaser.Textures.Frame;

            readonly isFirst: boolean;

            readonly isLast: boolean;

            readonly prevFrame: Phaser.Animations.AnimationFrame;

            readonly nextFrame: Phaser.Animations.AnimationFrame;

            duration: number;

            readonly progress: number;

            toJSON(): JSONAnimationFrame;

            destroy(): void;

        }

        class AnimationManager extends Phaser.Events.EventEmitter {
            constructor(game: Phaser.Game);

            protected game: Phaser.Game;

            protected textureManager: Phaser.Textures.TextureManager;

            globalTimeScale: number;

            protected anims: Phaser.Structs.Map<string, Phaser.Animations.Animation>;

            paused: boolean;

            name: string;

            boot(): void;

            add(key: string, animation: Phaser.Animations.Animation): Phaser.Animations.AnimationManager;

            create(config: AnimationConfig): Phaser.Animations.Animation;

            fromJSON(data: string | JSONAnimationManager | JSONAnimation, clearCurrentAnimations?: boolean): Phaser.Animations.Animation[];

            generateFrameNames(key: string, config?: GenerateFrameNamesConfig): AnimationFrameConfig[];

            generateFrameNumbers(key: string, config: GenerateFrameNumbersConfig): AnimationFrameConfig[];

            get(key: string): Phaser.Animations.Animation;

            load(child: Phaser.GameObjects.GameObject, key: string, startFrame?: string | integer): Phaser.GameObjects.GameObject;

            pauseAll(): Phaser.Animations.AnimationManager;

            play(key: string, child: Phaser.GameObjects.GameObject): Phaser.Animations.AnimationManager;

            remove(key: string): Phaser.Animations.Animation;

            resumeAll(): Phaser.Animations.AnimationManager;

            staggerPlay<G extends Phaser.GameObjects.GameObject[]>(key: string, children: Phaser.GameObjects.GameObject[], stagger?: number): G;

            toJSON(key: string): JSONAnimationManager;

            destroy(): void;

        }

    }

    class Game {
        constructor(GameConfig?: GameConfig);

        readonly config: Phaser.Boot.Config;

        renderer: Phaser.Renderer.Canvas.CanvasRenderer | Phaser.Renderer.WebGL.WebGLRenderer;

        canvas: HTMLCanvasElement;

        context: CanvasRenderingContext2D | WebGLRenderingContext;

        readonly isBooted: boolean;

        readonly isRunning: boolean;

        events: Phaser.Events.EventEmitter;

        anims: Phaser.Animations.AnimationManager;

        textures: Phaser.Textures.TextureManager;

        cache: Phaser.Cache.CacheManager;

        registry: Phaser.Data.DataManager;

        input: Phaser.Input.InputManager;

        scene: Phaser.Scenes.SceneManager;

        device: Phaser.DeviceConf;

        sound: Phaser.Sound.BaseSoundManager;

        loop: Phaser.Boot.TimeStep;

        plugins: Phaser.Plugins.PluginManager;

        readonly hasFocus: boolean;

        readonly isOver: boolean;

        protected boot(): void;

        protected start(): void;

        step(time: integer, delta: number): void;

        headlessStep(time: integer, delta: number): void;

        protected onHidden(): void;

        protected onVisible(): void;

        protected onBlur(): void;

        protected onFocus(): void;

        resize(width: number, height: number): void;

        destroy(removeCanvas: boolean): void;

    }

    namespace Boot {
        class Config {
            constructor(GameConfig?: GameConfig);

            readonly width: integer | string;

            readonly height: integer | string;

            readonly zoom: number;

            readonly resolution: number;

            readonly renderType: number;

            readonly parent: any;

            readonly canvas: HTMLCanvasElement;

            readonly context: CanvasRenderingContext2D | WebGLRenderingContext;

            readonly canvasStyle: string;

            readonly sceneConfig: object;

            readonly seed: string[];

            readonly gameTitle: string;

            readonly gameURL: string;

            readonly gameVersion: string;

            readonly autoFocus: boolean;

            readonly inputKeyboard: boolean;

            readonly inputKeyboardEventTarget: any;

            readonly inputMouse: boolean | object;

            readonly inputMouseEventTarget: any;

            readonly inputMouseCapture: boolean;

            readonly inputTouch: boolean;

            readonly inputTouchEventTarget: any;

            readonly inputTouchCapture: boolean;

            readonly inputActivePointers: integer;

            readonly inputGamepad: boolean;

            readonly inputGamepadEventTarget: any;

            readonly disableContextMenu: boolean;

            readonly audio: any;

            readonly hideBanner: boolean;

            readonly hidePhaser: boolean;

            readonly bannerTextColor: string;

            readonly bannerBackgroundColor: string[];

            readonly fps: FPSConfig;

            readonly antialias: boolean;

            readonly pixelArt: boolean;

            readonly autoResize: boolean;

            readonly roundPixels: boolean;

            readonly transparent: boolean;

            readonly zoclearBeforeRenderom: boolean;

            readonly premultipliedAlpha: boolean;

            readonly preserveDrawingBuffer: boolean;

            readonly failIfMajorPerformanceCaveat: boolean;

            readonly powerPreference: string;

            readonly backgroundColor: Phaser.Display.Color;

            readonly preBoot: BootCallback;

            readonly postBoot: BootCallback;

            readonly physics: object;

            readonly defaultPhysicsSystem: boolean;

            readonly loaderBaseURL: string;

            readonly loaderPath: string;

            readonly loaderMaxParallelDownloads: integer;

            readonly loaderCrossOrigin: string | undefined;

            readonly loaderResponseType: string;

            readonly loaderAsync: boolean;

            readonly loaderUser: string;

            readonly loaderPassword: string;

            readonly loaderTimeout: integer;

            readonly installGlobalPlugins: any;

            readonly installScenePlugins: any;

            readonly defaultPlugins: any;

            readonly defaultImage: string;

            readonly missingImage: string;

        }

        function CreateRenderer(game: Phaser.Game): void;

        function DebugHeader(game: Phaser.Game): void;

        class TimeStep {
            constructor(game: Phaser.Game, config: FPSConfig);

            readonly game: Phaser.Game;

            readonly raf: Phaser.DOM.RequestAnimationFrame;

            readonly started: boolean;

            readonly running: boolean;

            minFps: integer;

            targetFps: integer;

            readonly actualFps: integer;

            readonly nextFpsUpdate: integer;

            readonly framesThisSecond: integer;

            callback: TimeStepCallback;

            readonly forceSetTimeOut: boolean;

            time: integer;

            startTime: integer;

            lastTime: integer;

            readonly frame: integer;

            readonly inFocus: boolean;

            delta: integer;

            deltaIndex: integer;

            deltaHistory: integer[];

            deltaSmoothingMax: integer;

            panicMax: integer;

            rawDelta: number;

            blur(): void;

            focus(): void;

            pause(): void;

            resume(): void;

            resetDelta(): void;

            start(callback: TimeStepCallback): void;

            step(time: number): void;

            tick(): void;

            sleep(): void;

            wake(seamless?: boolean): void;

            stop(): Phaser.Boot.TimeStep;

            destroy(): void;

        }

        function VisibilityHandler(game: Phaser.Game): void;

    }

    namespace Cache {
        class BaseCache {
            entries: Phaser.Structs.Map<String, any>;

            events: Phaser.Events.EventEmitter;

            add(key: string, data: any): Phaser.Cache.BaseCache;

            has(key: string): boolean;

            exists(key: string): boolean;

            get(key: string): any;

            remove(key: string): Phaser.Cache.BaseCache;

            destroy(): void;

        }

        class CacheManager {
            constructor(game: Phaser.Game);

            protected game: Phaser.Game;

            binary: Phaser.Cache.BaseCache;

            bitmapFont: Phaser.Cache.BaseCache;

            json: Phaser.Cache.BaseCache;

            physics: Phaser.Cache.BaseCache;

            shader: Phaser.Cache.BaseCache;

            audio: Phaser.Cache.BaseCache;

            text: Phaser.Cache.BaseCache;

            obj: Phaser.Cache.BaseCache;

            tilemap: Phaser.Cache.BaseCache;

            xml: Phaser.Cache.BaseCache;

            custom: {[key: string]: Phaser.Cache.BaseCache};

            addCustom(key: string): Phaser.Cache.BaseCache;

            destroy(): void;

        }

    }

    namespace Cameras {
        namespace Scene2D {
            class Camera extends Phaser.Events.EventEmitter {
                constructor(x: number, y: number, width: number, height: number);

                scene: Phaser.Scene;

                name: string;

                x: number;

                y: number;

                width: number;

                height: number;

                roundPixels: boolean;

                visible: boolean;

                useBounds: boolean;

                inputEnabled: boolean;

                scrollX: number;

                scrollY: number;

                zoom: number;

                rotation: number;

                matrix: Phaser.GameObjects.Components.TransformMatrix;

                transparent: boolean;

                backgroundColor: Phaser.Display.Color;

                fadeEffect: Phaser.Cameras.Scene2D.Effects.Fade;

                flashEffect: Phaser.Cameras.Scene2D.Effects.Flash;

                shakeEffect: Phaser.Cameras.Scene2D.Effects.Shake;

                disableCull: boolean;

                culledObjects: Phaser.GameObjects.GameObject[];

                lerp: Phaser.Math.Vector2;

                followOffset: Phaser.Math.Vector2;

                centerToBounds(): Phaser.Cameras.Scene2D.Camera;

                centerToSize(): Phaser.Cameras.Scene2D.Camera;

                centerOn(x: number, y: number): Phaser.Cameras.Scene2D.Camera;

                cull<G extends Phaser.GameObjects.GameObject[]>(renderableObjects: G): G;

                fadeIn(duration?: integer, red?: integer, green?: integer, blue?: integer, callback?: Function, context?: any): Phaser.Cameras.Scene2D.Camera;

                fadeOut(duration?: integer, red?: integer, green?: integer, blue?: integer, callback?: Function, context?: any): Phaser.Cameras.Scene2D.Camera;

                fadeFrom(duration?: integer, red?: integer, green?: integer, blue?: integer, force?: boolean, callback?: Function, context?: any): Phaser.Cameras.Scene2D.Camera;

                fade(duration?: integer, red?: integer, green?: integer, blue?: integer, force?: boolean, callback?: Function, context?: any): Phaser.Cameras.Scene2D.Camera;

                flash(duration?: integer, red?: integer, green?: integer, blue?: integer, force?: boolean, callback?: Function, context?: any): Phaser.Cameras.Scene2D.Camera;

                shake(duration?: integer, intensity?: number, force?: boolean, callback?: Function, context?: any): Phaser.Cameras.Scene2D.Camera;

                getWorldPoint<O extends Phaser.Math.Vector2>(x: number, y: number, output?: O): O;

                ignore(gameObject: Phaser.GameObjects.GameObject | Phaser.GameObjects.GameObject[]): Phaser.Cameras.Scene2D.Camera;

                protected preRender(baseScale: number, resolution: number): void;

                removeBounds(): Phaser.Cameras.Scene2D.Camera;

                setAngle(value?: number): Phaser.Cameras.Scene2D.Camera;

                setLerp(x?: number, y?: number): this;

                setFollowOffset(x?: number, y?: number): this;

                setBackgroundColor(color?: string | number | InputColorObject): Phaser.Cameras.Scene2D.Camera;

                setBounds(x: integer, y: integer, width: integer, height: integer): Phaser.Cameras.Scene2D.Camera;

                setName(value?: string): Phaser.Cameras.Scene2D.Camera;

                setPosition(x: number, y?: number): Phaser.Cameras.Scene2D.Camera;

                setRotation(value?: number): Phaser.Cameras.Scene2D.Camera;

                setRoundPixels(value: boolean): Phaser.Cameras.Scene2D.Camera;

                setScene(scene: Phaser.Scene): Phaser.Cameras.Scene2D.Camera;

                setScroll(x: number, y?: number): Phaser.Cameras.Scene2D.Camera;

                setSize(width: integer, height?: integer): Phaser.Cameras.Scene2D.Camera;

                setViewport(x: number, y: number, width: integer, height?: integer): Phaser.Cameras.Scene2D.Camera;

                setZoom(value?: number): Phaser.Cameras.Scene2D.Camera;

                setVisible(value: boolean): this;

                startFollow(target: Phaser.GameObjects.GameObject | object, roundPixels?: boolean, lerpX?: number, lerpY?: number, offsetX?: number, offsetY?: number): this;

                stopFollow(): Phaser.Cameras.Scene2D.Camera;

                toJSON(): JSONCamera;

                resetFX(): Phaser.Cameras.Scene2D.Camera;

                protected update(time: integer, delta: number): void;

                destroy(): void;

                readonly centerX: number;

                readonly centerY: number;

            }

            class CameraManager {
                constructor(scene: Phaser.Scene);

                scene: Phaser.Scene;

                systems: Phaser.Scenes.Systems;

                readonly currentCameraId: number;

                cameras: Phaser.Cameras.Scene2D.Camera[];

                cameraPool: Phaser.Cameras.Scene2D.Camera[];

                main: Phaser.Cameras.Scene2D.Camera;

                baseScale: number;

                add(x?: number, y?: number, width?: number, height?: number, makeMain?: boolean, name?: string): Phaser.Cameras.Scene2D.Camera;

                addExisting(camera: Phaser.Cameras.Scene2D.Camera): Phaser.Cameras.Scene2D.Camera;

                fromJSON(config: InputJSONCameraObject | InputJSONCameraObject[]): Phaser.Cameras.Scene2D.CameraManager;

                getCamera(name: string): Phaser.Cameras.Scene2D.Camera;

                getCamerasBelowPointer(pointer: Phaser.Input.Pointer): Phaser.Cameras.Scene2D.Camera[];

                remove(camera: Phaser.Cameras.Scene2D.Camera): void;

                render(renderer: Phaser.Renderer.Canvas.CanvasRenderer | Phaser.Renderer.WebGL.WebGLRenderer, children: Phaser.GameObjects.GameObject[], interpolation: number): void;

                resetAll(): Phaser.Cameras.Scene2D.Camera;

                update(timestep: number, delta: number): void;

                resize(width: number, height: number): void;

            }

            namespace Effects {
                class Fade {
                    constructor(camera: Phaser.Cameras.Scene2D.Camera);

                    readonly camera: Phaser.Cameras.Scene2D.Camera;

                    readonly isRunning: boolean;

                    readonly isComplete: boolean;

                    readonly direction: boolean;

                    readonly duration: integer;

                    progress: number;

                    start(direction?: boolean, duration?: integer, red?: integer, green?: integer, blue?: integer, force?: boolean, callback?: CameraFadeCallback, context?: any): Phaser.Cameras.Scene2D.Camera;

                    update(time: integer, delta: number): void;

                    postRenderCanvas(ctx: CanvasRenderingContext2D): boolean;

                    postRenderWebGL(pipeline: Phaser.Renderer.WebGL.Pipelines.FlatTintPipeline, getTintFunction: Function): boolean;

                    effectComplete(): void;

                    reset(): void;

                    destroy(): void;

                }

                class Flash {
                    constructor(camera: Phaser.Cameras.Scene2D.Camera);

                    readonly camera: Phaser.Cameras.Scene2D.Camera;

                    readonly isRunning: boolean;

                    readonly duration: integer;

                    progress: number;

                    start(duration?: integer, red?: integer, green?: integer, blue?: integer, force?: boolean, callback?: CameraFlashCallback, context?: any): Phaser.Cameras.Scene2D.Camera;

                    update(time: integer, delta: number): void;

                    postRenderCanvas(ctx: CanvasRenderingContext2D): boolean;

                    postRenderWebGL(pipeline: Phaser.Renderer.WebGL.Pipelines.FlatTintPipeline, getTintFunction: Function): boolean;

                    effectComplete(): void;

                    reset(): void;

                    destroy(): void;

                }

                class Shake {
                    constructor(camera: Phaser.Cameras.Scene2D.Camera);

                    readonly camera: Phaser.Cameras.Scene2D.Camera;

                    readonly isRunning: boolean;

                    readonly duration: integer;

                    intensity: Phaser.Math.Vector2;

                    progress: number;

                    start(duration?: integer, intensity?: number, force?: boolean, callback?: CameraShakeCallback, context?: any): Phaser.Cameras.Scene2D.Camera;

                    preRender(): void;

                    update(time: integer, delta: number): void;

                    effectComplete(): void;

                    reset(): void;

                    destroy(): void;

                }

            }

        }

        namespace Controls {
            class FixedKeyControl {
                constructor(config: FixedKeyControlConfig);

                camera: Phaser.Cameras.Scene2D.Camera;

                left: Phaser.Input.Keyboard.Key;

                right: Phaser.Input.Keyboard.Key;

                up: Phaser.Input.Keyboard.Key;

                down: Phaser.Input.Keyboard.Key;

                zoomIn: Phaser.Input.Keyboard.Key;

                zoomOut: Phaser.Input.Keyboard.Key;

                zoomSpeed: number;

                speedX: number;

                speedY: number;

                active: boolean;

                start(): Phaser.Cameras.Controls.FixedKeyControl;

                stop(): Phaser.Cameras.Controls.FixedKeyControl;

                setCamera(camera: Phaser.Cameras.Scene2D.Camera): Phaser.Cameras.Controls.FixedKeyControl;

                update(delta: number): void;

                destroy(): void;

            }

            class SmoothedKeyControl {
                constructor(config: SmoothedKeyControlConfig);

                camera: Phaser.Cameras.Scene2D.Camera;

                left: Phaser.Input.Keyboard.Key;

                right: Phaser.Input.Keyboard.Key;

                up: Phaser.Input.Keyboard.Key;

                down: Phaser.Input.Keyboard.Key;

                zoomIn: Phaser.Input.Keyboard.Key;

                zoomOut: Phaser.Input.Keyboard.Key;

                zoomSpeed: number;

                accelX: number;

                accelY: number;

                dragX: number;

                dragY: number;

                maxSpeedX: number;

                maxSpeedY: number;

                active: boolean;

                start(): Phaser.Cameras.Controls.SmoothedKeyControl;

                stop(): Phaser.Cameras.Controls.SmoothedKeyControl;

                setCamera(camera: Phaser.Cameras.Scene2D.Camera): Phaser.Cameras.Controls.SmoothedKeyControl;

                update(delta: number): void;

                destroy(): void;

            }

        }

        namespace Sprite3D {
            class Camera {
                constructor(scene: Phaser.Scene);

                setPosition(x: number, y: number, z: number): Phaser.Cameras.Sprite3D.Camera;

                setScene(scene: Phaser.Scene): Phaser.Cameras.Sprite3D.Camera;

                setPixelScale(value: number): Phaser.Cameras.Sprite3D.Camera;

                add(sprite3D: Phaser.GameObjects.Sprite3D): Phaser.GameObjects.Sprite3D;

                remove(child: Phaser.GameObjects.GameObject): Phaser.Cameras.Sprite3D.Camera;

                clear(): Phaser.Cameras.Sprite3D.Camera;

                getChildren(): any[];

                create(x: number, y: number, z: number, key: string, frame: string | number, visible?: boolean): Phaser.GameObjects.Sprite3D;

                createMultiple(quantity: number, key: string, frame: string | number, visible?: boolean): Phaser.GameObjects.Sprite3D[];

                createRect(size: number | Object, spacing: number | Object, key: string, frame?: string | number): Phaser.GameObjects.Sprite3D[];

                randomSphere(radius?: number, sprites?: Phaser.GameObjects.Sprite3D[]): Phaser.Cameras.Sprite3D.Camera;

                randomCube(scale?: number, sprites?: Phaser.GameObjects.Sprite3D[]): Phaser.Cameras.Sprite3D.Camera;

                translateChildren(vec3: Phaser.Math.Vector3, sprites: Phaser.GameObjects.Sprite3D[]): Phaser.Cameras.Sprite3D.Camera;

                transformChildren(mat4: Phaser.Math.Matrix4, sprites: Phaser.GameObjects.Sprite3D[]): Phaser.Cameras.Sprite3D.Camera;

                setViewport(width: number, height: number): Phaser.Cameras.Sprite3D.Camera;

                translate(x: number | object, y?: number, z?: number): Phaser.Cameras.Sprite3D.Camera;

                lookAt(x: number | object, y?: number, z?: number): Phaser.Cameras.Sprite3D.Camera;

                rotate(radians: number, axis: Phaser.Math.Vector3): Phaser.Cameras.Sprite3D.Camera;

                rotateAround(point: Phaser.Math.Vector3, radians: number, axis: Phaser.Math.Vector3): Phaser.Cameras.Sprite3D.Camera;

                project(vec: Phaser.Math.Vector3, out: Phaser.Math.Vector4): Phaser.Math.Vector4;

                unproject(vec: Phaser.Math.Vector4, out: Phaser.Math.Vector3): Phaser.Math.Vector3;

                getPickRay(x: number, y?: number): RayDef;

                updateChildren(): Phaser.Cameras.Sprite3D.Camera;

                update(): Phaser.Cameras.Sprite3D.Camera;

                updateBillboardMatrix(): void;

                getPointSize(vec: Phaser.Math.Vector2, size: Phaser.Math.Vector2, out: Phaser.Math.Vector2): Phaser.Math.Vector2;

                destroy(): void;

                setX(value: number): Phaser.Cameras.Sprite3D.Camera;

                setY(value: number): Phaser.Cameras.Sprite3D.Camera;

                setZ(value: number): Phaser.Cameras.Sprite3D.Camera;

                x: number;

                y: number;

                z: number;

            }

            var scene: Phaser.Scene;

            var displayList: Phaser.GameObjects.DisplayList;

            var updateList: Phaser.GameObjects.UpdateList;

            var name: string;

            var direction: Phaser.Math.Vector3;

            var up: Phaser.Math.Vector3;

            var position: Phaser.Math.Vector3;

            var pixelScale: number;

            var projection: Phaser.Math.Matrix4;

            var view: Phaser.Math.Matrix4;

            var combined: Phaser.Math.Matrix4;

            var invProjectionView: Phaser.Math.Matrix4;

            var near: number;

            var far: number;

            var ray: RayDef;

            var viewportWidth: number;

            var viewportHeight: number;

            var billboardMatrixDirty: boolean;

            var children: Phaser.Structs.Set<Phaser.GameObjects.GameObject>;

            class CameraManager {
                constructor(scene: Phaser.Scene);

                scene: Phaser.Scene;

                systems: Phaser.Scenes.Systems;

                cameras: Phaser.Cameras.Sprite3D.Camera[];

                add(fieldOfView?: number, width?: number, height?: number): Phaser.Cameras.Sprite3D.PerspectiveCamera;

                addOrthographicCamera(width: number, height: number): Phaser.Cameras.Sprite3D.OrthographicCamera;

                addPerspectiveCamera(fieldOfView?: number, width?: number, height?: number): Phaser.Cameras.Sprite3D.PerspectiveCamera;

                getCamera(name: string): Phaser.Cameras.Sprite3D.OrthographicCamera | Phaser.Cameras.Sprite3D.PerspectiveCamera;

                removeCamera(camera: Phaser.Cameras.Sprite3D.OrthographicCamera | Phaser.Cameras.Sprite3D.PerspectiveCamera): void;

                removeAll(): Phaser.Cameras.Sprite3D.OrthographicCamera | Phaser.Cameras.Sprite3D.PerspectiveCamera;

                update(timestep: number, delta: number): void;

            }

            class OrthographicCamera extends Phaser.Cameras.Sprite3D.Camera {
                constructor(scene: Phaser.Scene, viewportWidth?: integer, viewportHeight?: integer);

                viewportWidth: integer;

                viewportHeight: integer;

                near: number;

                setToOrtho(yDown: number, viewportWidth?: number, viewportHeight?: number): Phaser.Cameras.Sprite3D.OrthographicCamera;

                update(): Phaser.Cameras.Sprite3D.OrthographicCamera;

                zoom: number;

            }

            class PerspectiveCamera extends Phaser.Cameras.Sprite3D.Camera {
                constructor(scene: Phaser.Scene, fieldOfView?: integer, viewportWidth?: integer, viewportHeight?: integer);

                viewportWidth: integer;

                viewportHeight: integer;

                fieldOfView: integer;

                setFOV(value: number): Phaser.Cameras.Sprite3D.PerspectiveCamera;

                update(): Phaser.Cameras.Sprite3D.PerspectiveCamera;

            }

        }

    }

    var VERSION: string;

    var AUTO: integer;

    var CANVAS: integer;

    var WEBGL: integer;

    var HEADLESS: integer;

    var FOREVER: integer;

    var NONE: integer;

    var UP: integer;

    var DOWN: integer;

    var LEFT: integer;

    var RIGHT: integer;

    namespace Create {
        function GenerateTexture(config: GenerateTextureConfig): HTMLCanvasElement;

        namespace Palettes {
            var ARNE16: Palette;

            var C64: Palette;

            var CGA: Palette;

            var JMP: Palette;

            var MSX: Palette;

        }

    }

    namespace Curves {
        class CubicBezier extends Phaser.Curves.Curve {
            constructor(p0: Phaser.Math.Vector2 | Phaser.Math.Vector2[], p1: Phaser.Math.Vector2, p2: Phaser.Math.Vector2, p3: Phaser.Math.Vector2);

            p0: Phaser.Math.Vector2;

            p1: Phaser.Math.Vector2;

            p2: Phaser.Math.Vector2;

            p3: Phaser.Math.Vector2;

            getStartPoint<O extends Phaser.Math.Vector2>(out?: O): O;

            getResolution(divisions: number): number;

            getPoint<O extends Phaser.Math.Vector2>(t: number, out?: O): O;

            draw<G extends Phaser.GameObjects.Graphics>(graphics: G, pointsTotal?: integer): G;

            toJSON(): JSONCurve;

            static fromJSON(data: JSONCurve): Phaser.Curves.CubicBezier;

        }

        class Curve {
            constructor(type: string);

            type: string;

            defaultDivisions: integer;

            arcLengthDivisions: integer;

            cacheArcLengths: number[];

            needsUpdate: boolean;

            active: boolean;

            draw<G extends Phaser.GameObjects.Graphics>(graphics: G, pointsTotal?: integer): G;

            getBounds(out?: Phaser.Geom.Rectangle, accuracy?: integer): Phaser.Geom.Rectangle;

            getDistancePoints(distance: integer): Phaser.Geom.Point[];

            getEndPoint(out: Phaser.Math.Vector2): Phaser.Math.Vector2;

            getLength(): number;

            getLengths(divisions?: integer): number[];

            getPointAt<O extends Phaser.Math.Vector2>(u: number, out?: O): O;

            getPoints(divisions?: integer): Phaser.Math.Vector2[];

            getRandomPoint<O extends Phaser.Math.Vector2>(out?: O): O;

            getSpacedPoints(divisions?: integer): Phaser.Math.Vector2[];

            getStartPoint<O extends Phaser.Math.Vector2>(out?: O): O;

            getTangent<O extends Phaser.Math.Vector2>(t: number, out?: O): O;

            getTangentAt<O extends Phaser.Math.Vector2>(u: number, out?: O): O;

            getTFromDistance(distance: integer, divisions?: integer): number;

            getUtoTmapping(u: number, distance: integer, divisions?: integer): number;

            updateArcLengths(): void;

        }

        class Ellipse extends Phaser.Curves.Curve {
            constructor(x?: number | EllipseCurveConfig, y?: number, xRadius?: number, yRadius?: number, startAngle?: integer, endAngle?: integer, clockwise?: boolean, rotation?: integer);

            p0: Phaser.Math.Vector2;

            getStartPoint<O extends Phaser.Math.Vector2>(out?: O): O;

            getResolution(divisions: number): number;

            getPoint<O extends Phaser.Math.Vector2>(t: number, out?: O): O;

            setXRadius(value: number): Phaser.Curves.Ellipse;

            setYRadius(value: number): Phaser.Curves.Ellipse;

            setWidth(value: number): Phaser.Curves.Ellipse;

            setHeight(value: number): Phaser.Curves.Ellipse;

            setStartAngle(value: number): Phaser.Curves.Ellipse;

            setEndAngle(value: number): Phaser.Curves.Ellipse;

            setClockwise(value: boolean): Phaser.Curves.Ellipse;

            setRotation(value: number): Phaser.Curves.Ellipse;

            x: number;

            y: number;

            xRadius: number;

            yRadius: number;

            startAngle: number;

            endAngle: number;

            clockwise: boolean;

            rotation: number;

            toJSON(): JSONEllipseCurve;

            static fromJSON(data: JSONEllipseCurve): Phaser.Curves.Ellipse;

        }

        class Line extends Phaser.Curves.Curve {
            constructor(p0: Phaser.Math.Vector2 | number[], p1?: Phaser.Math.Vector2);

            p0: Phaser.Math.Vector2;

            p1: Phaser.Math.Vector2;

            getBounds<O extends Phaser.Geom.Rectangle>(out?: O): O;

            getStartPoint<O extends Phaser.Math.Vector2>(out?: O): O;

            getResolution(divisions?: number): number;

            getPoint<O extends Phaser.Math.Vector2>(t: number, out?: O): O;

            getPointAt<O extends Phaser.Math.Vector2>(u: number, out?: O): O;

            getTangent<O extends Phaser.Math.Vector2>(): O;

            draw<G extends Phaser.GameObjects.Graphics>(graphics: G): G;

            toJSON(): JSONCurve;

            static fromJSON(data: JSONCurve): Phaser.Curves.Line;

        }

        class MoveTo {
            constructor(x?: number, y?: number);

            active: boolean;

            p0: Phaser.Math.Vector2;

            getPoint<O extends Phaser.Math.Vector2>(t: number, out?: O): O;

            getPointAt<O extends Phaser.Math.Vector2>(u: number, out?: O): O;

            getResolution(): number;

            getLength(): number;

            toJSON(): JSONCurve;

        }

        class Path {
            constructor(x?: number, y?: number);

            name: string;

            curves: Phaser.Curves.Curve[];

            cacheLengths: number[];

            autoClose: boolean;

            startPoint: Phaser.Math.Vector2;

            add(curve: Phaser.Curves.Curve): Phaser.Curves.Path;

            circleTo(radius: number, clockwise?: boolean, rotation?: number): Phaser.Curves.Path;

            closePath(): Phaser.Curves.Path;

            cubicBezierTo(x: number | Phaser.Math.Vector2, y: number | Phaser.Math.Vector2, control1X: number | Phaser.Math.Vector2, control1Y?: number, control2X?: number, control2Y?: number): Phaser.Curves.Path;

            quadraticBezierTo(x: number | Phaser.Math.Vector2[], y?: number, controlX?: number, controlY?: number): Phaser.Curves.Path;

            draw<G extends Phaser.GameObjects.Graphics>(graphics: Phaser.GameObjects.Graphics, pointsTotal?: integer): G;

            ellipseTo(xRadius: number, yRadius: number, startAngle: number, endAngle: number, clockwise: boolean, rotation: number): Phaser.Curves.Path;

            fromJSON(data: object): Phaser.Curves.Path;

            getBounds<O extends Phaser.Math.Vector2>(out?: O, accuracy?: integer): O;

            getCurveLengths(): number[];

            getEndPoint<O extends Phaser.Math.Vector2>(out?: O): O;

            getLength(): number;

            getPoint<O extends Phaser.Math.Vector2>(t: number, out?: O): O;

            getPoints(divisions?: integer): Phaser.Math.Vector2[];

            getRandomPoint<O extends Phaser.Math.Vector2>(out?: O): O;

            getSpacedPoints(divisions?: integer): Phaser.Math.Vector2[];

            getStartPoint<O extends Phaser.Math.Vector2>(out?: O): O;

            lineTo(x: number | Phaser.Math.Vector2, y?: number): Phaser.Curves.Path;

            splineTo(points: Phaser.Math.Vector2[]): Phaser.Curves.Path;

            moveTo(x: number, y: number): Phaser.Curves.Path;

            toJSON(): JSONPath;

            updateArcLengths(): void;

            destroy(): void;

        }

        class QuadraticBezier extends Phaser.Curves.Curve {
            constructor(p0: Phaser.Math.Vector2 | number[], p1: Phaser.Math.Vector2, p2: Phaser.Math.Vector2);

            p0: Phaser.Math.Vector2;

            p1: Phaser.Math.Vector2;

            p2: Phaser.Math.Vector2;

            getStartPoint<O extends Phaser.Math.Vector2>(out?: O): O;

            getResolution(divisions: number): number;

            getPoint<O extends Phaser.Math.Vector2>(t: number, out?: O): O;

            draw<G extends Phaser.GameObjects.Graphics>(graphics: G, pointsTotal?: integer): G;

            toJSON(): JSONCurve;

            static fromJSON(data: JSONCurve): Phaser.Curves.QuadraticBezier;

        }

        class Spline extends Phaser.Curves.Curve {
            constructor(points?: Phaser.Math.Vector2[]);

            points: Phaser.Math.Vector2[];

            addPoints(points: Phaser.Math.Vector2[] | number[] | number[][]): Phaser.Curves.Spline;

            addPoint(x: number, y: number): Phaser.Math.Vector2;

            getStartPoint<O extends Phaser.Math.Vector2>(out?: O): O;

            getResolution(divisions: number): number;

            getPoint<O extends Phaser.Math.Vector2>(t: number, out?: O): O;

            toJSON(): JSONCurve;

            static fromJSON(data: JSONCurve): Phaser.Curves.Spline;

        }

    }

    namespace Data {
        class DataManager {
            constructor(parent: object, eventEmitter: Phaser.Events.EventEmitter);

            parent: any;

            events: Phaser.Events.EventEmitter;

            list: {[key: string]:  any};

            values: {[key: string]:  any};

            get(key: string | string[]): any;

            getAll(): {[key: string]:  any};

            query(search: RegExp): {[key: string]:  any};

            set(key: string | object, data: any): Phaser.Data.DataManager;

            each(callback: DataEachCallback, context?: any, ...args: any[]): Phaser.Data.DataManager;

            merge(data: {[key: string]:  any}, overwrite?: boolean): Phaser.Data.DataManager;

            remove(key: string | string[]): Phaser.Data.DataManager;

            pop(key: string): any;

            has(key: string): boolean;

            setFreeze(value: boolean): Phaser.Data.DataManager;

            reset(): Phaser.Data.DataManager;

            destroy(): void;

            freeze: boolean;

            count: integer;

        }

        class DataManagerPlugin extends Phaser.Data.DataManager {
            constructor(scene: Phaser.Scene);

            scene: Phaser.Scene;

            systems: Phaser.Scenes.Systems;

            destroy(): void;

        }

    }

    namespace Device {
        type Audio = {
            audioData: boolean;
            dolby: boolean;
            m4a: boolean;
            mp3: boolean;
            ogg: boolean;
            opus: boolean;
            wav: boolean;
            webAudio: boolean;
            webm: boolean;
        };

        type Browser = {
            chrome: boolean;
            edge: boolean;
            firefox: boolean;
            ie: boolean;
            mobileSafari: boolean;
            opera: boolean;
            safari: boolean;
            silk: boolean;
            trident: boolean;
            chromeVersion: number;
            firefoxVersion: number;
            ieVersion: number;
            safariVersion: number;
            tridentVersion: number;
        };

        type CanvasFeatures = {
            supportInverseAlpha: boolean;
            supportNewBlendModes: boolean;
        };

        type Features = {
            canvasBitBltShift: boolean;
            canvas: boolean;
            file: boolean;
            fileSystem: boolean;
            getUserMedia: boolean;
            littleEndian: boolean;
            localStorage: boolean;
            pointerLock: boolean;
            support32bit: boolean;
            vibration: boolean;
            webGL: boolean;
            worker: boolean;
        };

        type Fullscreen = {
            available: boolean;
            keyboard: boolean;
            cancel: string;
            request: string;
        };

        type Input = {
            wheelType: string;
            gamepads: boolean;
            mspointer: boolean;
            touch: boolean;
        };

        type OS = {
            android: boolean;
            chromeOS: boolean;
            cocoonJS: boolean;
            cocoonJSApp: boolean;
            cordova: boolean;
            crosswalk: boolean;
            desktop: boolean;
            ejecta: boolean;
            electron: boolean;
            iOS: boolean;
            iPad: boolean;
            iPhone: boolean;
            kindle: boolean;
            linux: boolean;
            macOS: boolean;
            node: boolean;
            nodeWebkit: boolean;
            webApp: boolean;
            windows: boolean;
            windowsPhone: boolean;
            iOSVersion: number;
            pixelRatio: number;
        };

        type Video = {
            h264Video: boolean;
            hlsVideo: boolean;
            mp4Video: boolean;
            oggVideo: boolean;
            vp9Video: boolean;
            webmVideo: boolean;
        };

    }

    type DeviceConf = {
        os: Phaser.Device.OS;
        browser: Phaser.Device.Browser;
        features: Phaser.Device.Features;
        input: Phaser.Device.Input;
        audio: Phaser.Device.Audio;
        video: Phaser.Device.Video;
        fullscreen: Phaser.Device.Fullscreen;
        canvasFeatures: Phaser.Device.CanvasFeatures;
    };

    namespace Display {
        namespace Align {
            const TOP_LEFT: integer;

            const TOP_CENTER: integer;

            const TOP_RIGHT: integer;

            const LEFT_TOP: integer;

            const LEFT_CENTER: integer;

            const LEFT_BOTTOM: integer;

            const CENTER: integer;

            const RIGHT_TOP: integer;

            const RIGHT_CENTER: integer;

            const RIGHT_BOTTOM: integer;

            const BOTTOM_LEFT: integer;

            const BOTTOM_CENTER: integer;

            const BOTTOM_RIGHT: integer;

            namespace In {
                function BottomCenter<G extends Phaser.GameObjects.GameObject>(gameObject: G, alignIn: Phaser.GameObjects.GameObject, offsetX?: number, offsetY?: number): G;

                function BottomLeft<G extends Phaser.GameObjects.GameObject>(gameObject: G, alignIn: Phaser.GameObjects.GameObject, offsetX?: number, offsetY?: number): G;

                function BottomRight<G extends Phaser.GameObjects.GameObject>(gameObject: G, alignIn: Phaser.GameObjects.GameObject, offsetX?: number, offsetY?: number): G;

                function Center<G extends Phaser.GameObjects.GameObject>(gameObject: G, alignIn: Phaser.GameObjects.GameObject, offsetX?: number, offsetY?: number): G;

                function LeftCenter<G extends Phaser.GameObjects.GameObject>(gameObject: G, alignIn: Phaser.GameObjects.GameObject, offsetX?: number, offsetY?: number): G;

                function QuickSet<G extends Phaser.GameObjects.GameObject>(child: G, alignIn: Phaser.GameObjects.GameObject, position: integer, offsetX?: number, offsetY?: number): G;

                function RightCenter<G extends Phaser.GameObjects.GameObject>(gameObject: G, alignIn: Phaser.GameObjects.GameObject, offsetX?: number, offsetY?: number): G;

                function TopCenter<G extends Phaser.GameObjects.GameObject>(gameObject: G, alignIn: Phaser.GameObjects.GameObject, offsetX?: number, offsetY?: number): G;

                function TopLeft<G extends Phaser.GameObjects.GameObject>(gameObject: G, alignIn: Phaser.GameObjects.GameObject, offsetX?: number, offsetY?: number): G;

                function TopRight<G extends Phaser.GameObjects.GameObject>(gameObject: G, alignIn: Phaser.GameObjects.GameObject, offsetX?: number, offsetY?: number): G;

            }

            namespace To {
                function BottomCenter<G extends Phaser.GameObjects.GameObject>(gameObject: G, alignTo: Phaser.GameObjects.GameObject, offsetX?: number, offsetY?: number): G;

                function BottomLeft<G extends Phaser.GameObjects.GameObject>(gameObject: G, alignTo: Phaser.GameObjects.GameObject, offsetX?: number, offsetY?: number): G;

                function BottomRight<G extends Phaser.GameObjects.GameObject>(gameObject: G, alignTo: Phaser.GameObjects.GameObject, offsetX?: number, offsetY?: number): G;

                function LeftBottom<G extends Phaser.GameObjects.GameObject>(gameObject: G, alignTo: Phaser.GameObjects.GameObject, offsetX?: number, offsetY?: number): G;

                function LeftCenter<G extends Phaser.GameObjects.GameObject>(gameObject: G, alignTo: Phaser.GameObjects.GameObject, offsetX?: number, offsetY?: number): G;

                function LeftTop<G extends Phaser.GameObjects.GameObject>(gameObject: G, alignTo: Phaser.GameObjects.GameObject, offsetX?: number, offsetY?: number): G;

                function RightBottom<G extends Phaser.GameObjects.GameObject>(gameObject: G, alignTo: Phaser.GameObjects.GameObject, offsetX?: number, offsetY?: number): G;

                function RightCenter<G extends Phaser.GameObjects.GameObject>(gameObject: G, alignTo: Phaser.GameObjects.GameObject, offsetX?: number, offsetY?: number): G;

                function RightTop<G extends Phaser.GameObjects.GameObject>(gameObject: G, alignTo: Phaser.GameObjects.GameObject, offsetX?: number, offsetY?: number): G;

                function TopCenter<G extends Phaser.GameObjects.GameObject>(gameObject: G, alignTo: Phaser.GameObjects.GameObject, offsetX?: number, offsetY?: number): G;

                function TopLeft<G extends Phaser.GameObjects.GameObject>(gameObject: G, alignTo: Phaser.GameObjects.GameObject, offsetX?: number, offsetY?: number): G;

                function TopRight<G extends Phaser.GameObjects.GameObject>(gameObject: G, alignTo: Phaser.GameObjects.GameObject, offsetX?: number, offsetY?: number): G;

            }

        }

        namespace Bounds {
            function CenterOn<G extends Phaser.GameObjects.GameObject>(gameObject: G, x: number, y: number): G;

            function GetBottom(gameObject: Phaser.GameObjects.GameObject): number;

            function GetCenterX(gameObject: Phaser.GameObjects.GameObject): number;

            function GetCenterY(gameObject: Phaser.GameObjects.GameObject): number;

            function GetLeft(gameObject: Phaser.GameObjects.GameObject): number;

            function GetOffsetX(gameObject: Phaser.GameObjects.GameObject): number;

            function GetOffsetY(gameObject: Phaser.GameObjects.GameObject): number;

            function GetRight(gameObject: Phaser.GameObjects.GameObject): number;

            function GetTop(gameObject: Phaser.GameObjects.GameObject): number;

            function SetBottom<G extends Phaser.GameObjects.GameObject>(gameObject: G, value: number): G;

            function SetCenterX<G extends Phaser.GameObjects.GameObject>(gameObject: G, x: number): G;

            function SetCenterY<G extends Phaser.GameObjects.GameObject>(gameObject: G, y: number): G;

            function SetLeft<G extends Phaser.GameObjects.GameObject>(gameObject: G, value: number): G;

            function SetRight<G extends Phaser.GameObjects.GameObject>(gameObject: G, value: number): G;

            function SetTop<G extends Phaser.GameObjects.GameObject>(gameObject: G, value: number): G;

        }

        namespace Canvas {
            namespace CanvasInterpolation {
                function setCrisp(canvas: HTMLCanvasElement): HTMLCanvasElement;

                function setBicubic(canvas: HTMLCanvasElement): HTMLCanvasElement;

            }

            namespace CanvasPool {
                function create(parent: any, width?: integer, height?: integer, canvasType?: integer, selfParent?: boolean): HTMLCanvasElement;

                function create2D(parent: any, width?: integer, height?: integer): HTMLCanvasElement;

                function createWebGL(parent: any, width?: integer, height?: integer): HTMLCanvasElement;

                function first(canvasType?: integer): HTMLCanvasElement;

                function remove(parent: any): void;

                function total(): integer;

                function free(): integer;

                function disableSmoothing(): void;

                function enableSmoothing(): void;

            }

            namespace Smoothing {
                function getPrefix(context: CanvasRenderingContext2D | WebGLRenderingContext): string;

                function enable(context: CanvasRenderingContext2D | WebGLRenderingContext): CanvasRenderingContext2D | WebGLRenderingContext;

                function disable(context: CanvasRenderingContext2D | WebGLRenderingContext): CanvasRenderingContext2D | WebGLRenderingContext;

                function isEnabled(context: CanvasRenderingContext2D | WebGLRenderingContext): boolean;

            }

            function TouchAction(canvas: HTMLCanvasElement, value?: string): HTMLCanvasElement;

            function UserSelect(canvas: HTMLCanvasElement, value?: string): HTMLCanvasElement;

        }

        class Color {
            constructor(red?: integer, green?: integer, blue?: integer, alpha?: integer);

            gl: number[];

            transparent(): Phaser.Display.Color;

            setTo(red: integer, green: integer, blue: integer, alpha?: integer): Phaser.Display.Color;

            setGLTo(red: number, green: number, blue: number, alpha?: number): Phaser.Display.Color;

            setFromRGB(color: InputColorObject): Phaser.Display.Color;

            update(): Phaser.Display.Color;

            clone(): Phaser.Display.Color;

            readonly color: number;

            readonly color32: number;

            readonly rgba: string;

            redGL: number;

            greenGL: number;

            blueGL: number;

            alphaGL: number;

            red: number;

            green: number;

            blue: number;

            alpha: number;

            static ColorToRGBA(color: number): ColorObject;

            static ComponentToHex(color: integer): string;

            static GetColor(red: integer, green: integer, blue: integer): number;

            static GetColor32(red: integer, green: integer, blue: integer, alpha: integer): number;

            static HexStringToColor(hex: string): Phaser.Display.Color;

            static HSLToColor(h: number, s: number, l: number): Phaser.Display.Color;

            static HSVColorWheel(s?: number, v?: number): ColorObject[];

            static HSVToRGB(h: number, s: number, v: number): ColorObject;

            static HueToComponent(p: number, q: number, t: number): number;

            static IntegerToColor(input: integer): Phaser.Display.Color;

            static IntegerToRGB(input: integer): ColorObject;

            static ObjectToColor(input: InputColorObject): Phaser.Display.Color;

            static RandomRGB(min?: integer, max?: integer): Phaser.Display.Color;

            static RGBStringToColor(rgb: string): Phaser.Display.Color;

            static RGBToHSV(r: integer, g: integer, b: integer): HSLColorObject;

            static RGBToString(r: integer, g: integer, b: integer, a?: integer, prefix?: string): string;

            static ValueToColor(input: string | number | InputColorObject): Phaser.Display.Color;

        }

        namespace Masks {
            class BitmapMask {
                constructor(scene: Phaser.Scene, renderable: Phaser.GameObjects.GameObject);

                bitmapMask: Phaser.GameObjects.GameObject;

                maskTexture: WebGLTexture;

                mainTexture: WebGLTexture;

                dirty: boolean;

                mainFramebuffer: WebGLFramebuffer;

                maskFramebuffer: WebGLFramebuffer;

                invertAlpha: boolean;

                setBitmap(renderable: Phaser.GameObjects.GameObject): void;

                preRenderWebGL(renderer: Phaser.Renderer.Canvas.CanvasRenderer | Phaser.Renderer.WebGL.WebGLRenderer, maskedObject: Phaser.GameObjects.GameObject, camera: Phaser.Cameras.Scene2D.Camera): void;

                postRenderWebGL(renderer: Phaser.Renderer.Canvas.CanvasRenderer | Phaser.Renderer.WebGL.WebGLRenderer): void;

                preRenderCanvas(renderer: Phaser.Renderer.Canvas.CanvasRenderer | Phaser.Renderer.WebGL.WebGLRenderer, mask: Phaser.GameObjects.GameObject, camera: Phaser.Cameras.Scene2D.Camera): void;

                postRenderCanvas(renderer: Phaser.Renderer.Canvas.CanvasRenderer | Phaser.Renderer.WebGL.WebGLRenderer): void;

                destroy(): void;

            }

            class GeometryMask {
                constructor(scene: Phaser.Scene, graphicsGeometry: Phaser.GameObjects.Graphics);

                geometryMask: Phaser.GameObjects.Graphics;

                setShape(graphicsGeometry: Phaser.GameObjects.Graphics): void;

                preRenderWebGL(renderer: Phaser.Renderer.Canvas.CanvasRenderer | Phaser.Renderer.WebGL.WebGLRenderer, mask: Phaser.GameObjects.GameObject, camera: Phaser.Cameras.Scene2D.Camera): void;

                postRenderWebGL(renderer: Phaser.Renderer.Canvas.CanvasRenderer | Phaser.Renderer.WebGL.WebGLRenderer): void;

                preRenderCanvas(renderer: Phaser.Renderer.Canvas.CanvasRenderer | Phaser.Renderer.WebGL.WebGLRenderer, mask: Phaser.GameObjects.GameObject, camera: Phaser.Cameras.Scene2D.Camera): void;

                postRenderCanvas(renderer: Phaser.Renderer.Canvas.CanvasRenderer | Phaser.Renderer.WebGL.WebGLRenderer): void;

                destroy(): void;

            }

        }

    }

    namespace DOM {
        function AddToDOM(element: HTMLElement, parent?: string | HTMLElement, overflowHidden?: boolean): HTMLElement;

        function DOMContentLoaded(callback: ContentLoadedCallback): void;

        function ParseXML(data: string): DOMParser | ActiveXObject;

        function RemoveFromDOM(element: HTMLElement): void;

        class RequestAnimationFrame {
            isRunning: boolean;

            callback: FrameRequestCallback;

            tick: number;

            isSetTimeOut: boolean;

            timeOutID: number;

            lastTime: number;

            step: FrameRequestCallback;

            stepTimeout: Function;

            start(callback: FrameRequestCallback, forceSetTimeOut: boolean): void;

            stop(): void;

            destroy(): void;

        }

    }

    namespace Events {
        class EventEmitter {
            shutdown(): void;

            destroy(): void;

            eventNames(): any[];

            listeners(event: string | symbol): any[];

            listenerCount(event: string | symbol): number;

            emit(event: string | symbol, ...args: any[]): boolean;

            on(event: string | symbol, fn: Function, context?: any): Phaser.Events.EventEmitter;

            addListener(event: string | symbol, fn: Function, context?: any): Phaser.Events.EventEmitter;

            once(event: string | symbol, fn: Function, context?: any): Phaser.Events.EventEmitter;

            removeListener(event: string | symbol, fn: Function, context: any, once: boolean): Phaser.Events.EventEmitter;

            off(event: string | symbol, fn: Function, context: any, once: boolean): Phaser.Events.EventEmitter;

            removeAllListeners(event?: string | symbol): Phaser.Events.EventEmitter;

        }

    }

    namespace GameObjects {
        class DynamicBitmapText extends Phaser.GameObjects.GameObject implements Phaser.GameObjects.Components.Alpha, Phaser.GameObjects.Components.BlendMode, Phaser.GameObjects.Components.Depth, Phaser.GameObjects.Components.Mask, Phaser.GameObjects.Components.Origin, Phaser.GameObjects.Components.Pipeline, Phaser.GameObjects.Components.ScrollFactor, Phaser.GameObjects.Components.Texture, Phaser.GameObjects.Components.Tint, Phaser.GameObjects.Components.Transform, Phaser.GameObjects.Components.Visible {
            constructor(scene: Phaser.Scene, x: number, y: number, font: string, text?: string | string[], size?: number);

            font: string;

            fontData: BitmapFontData;

            text: string;

            fontSize: number;

            letterSpacing: number;

            scrollX: number;

            scrollY: number;

            cropWidth: number;

            cropHeight: number;

            "displayCallback;": DisplayCallback;

            setSize(width: number, height: number): Phaser.GameObjects.DynamicBitmapText;

            setDisplayCallback(callback: DisplayCallback): Phaser.GameObjects.DynamicBitmapText;

            setFontSize(size: number): Phaser.GameObjects.DynamicBitmapText;

            setText(value: string | string[]): Phaser.GameObjects.DynamicBitmapText;

            setScrollX(value: number): Phaser.GameObjects.DynamicBitmapText;

            setScrollY(value: number): Phaser.GameObjects.DynamicBitmapText;

            getTextBounds(round?: boolean): BitmapTextSize;

            readonly width: number;

            readonly height: number;

            toJSON(): JSONBitmapText;

            clearAlpha(): this;

            setAlpha(topLeft?: number, topRight?: number, bottomLeft?: number, bottomRight?: number): this;

            alpha: number;

            alphaTopLeft: number;

            alphaTopRight: number;

            alphaBottomLeft: number;

            alphaBottomRight: number;

            blendMode: Phaser.BlendModes | string;

            setBlendMode(value: string | Phaser.BlendModes): this;

            depth: number;

            setDepth(value: integer): this;

            mask: Phaser.Display.Masks.BitmapMask | Phaser.Display.Masks.GeometryMask;

            setMask(mask: Phaser.Display.Masks.BitmapMask | Phaser.Display.Masks.GeometryMask): this;

            clearMask(destroyMask?: boolean): this;

            createBitmapMask(renderable?: Phaser.GameObjects.GameObject): Phaser.Display.Masks.BitmapMask;

            createGeometryMask(graphics?: Phaser.GameObjects.Graphics): Phaser.Display.Masks.GeometryMask;

            originX: number;

            originY: number;

            displayOriginX: number;

            displayOriginY: number;

            setOrigin(x?: number, y?: number): this;

            setOriginFromFrame(): this;

            setDisplayOrigin(x?: number, y?: number): this;

            updateDisplayOrigin(): this;

            defaultPipeline: Phaser.Renderer.WebGL.WebGLPipeline;

            pipeline: Phaser.Renderer.WebGL.WebGLPipeline;

            initPipeline(pipelineName: string): boolean;

            setPipeline(pipelineName: string): boolean;

            resetPipeline(): boolean;

            getPipelineName(): string;

            scrollFactorX: number;

            scrollFactorY: number;

            setScrollFactor(x: number, y?: number): this;

            texture: Phaser.Textures.Texture | Phaser.Textures.CanvasTexture;

            frame: Phaser.Textures.Frame;

            setTexture(key: string, frame?: string | integer): this;

            setFrame(frame: string | integer, updateSize?: boolean, updateOrigin?: boolean): this;

            clearTint(): this;

            setTint(topLeft?: integer, topRight?: integer, bottomLeft?: integer, bottomRight?: integer): this;

            tintTopLeft: integer;

            tintTopRight: integer;

            tintBottomLeft: integer;

            tintBottomRight: integer;

            tint: integer;

            x: number;

            y: number;

            z: number;

            w: number;

            scaleX: number;

            scaleY: number;

            angle: integer;

            rotation: number;

            setPosition(x?: number, y?: number, z?: number, w?: number): this;

            setRandomPosition(x?: number, y?: number, width?: number, height?: number): this;

            setRotation(radians?: number): this;

            setAngle(degrees?: number): this;

            setScale(x: number, y?: number): this;

            setX(value?: number): this;

            setY(value?: number): this;

            setZ(value?: number): this;

            setW(value?: number): this;

            getLocalTransformMatrix(tempMatrix?: Phaser.GameObjects.Components.TransformMatrix): Phaser.GameObjects.Components.TransformMatrix;

            getWorldTransformMatrix(tempMatrix?: Phaser.GameObjects.Components.TransformMatrix): Phaser.GameObjects.Components.TransformMatrix;

            visible: boolean;

            setVisible(value: boolean): this;

        }

        namespace RetroFont {
            var TEXT_SET1: string;

            var TEXT_SET2: string;

            var TEXT_SET3: string;

            var TEXT_SET4: string;

            var TEXT_SET5: string;

            var TEXT_SET6: string;

            var TEXT_SET7: string;

            var TEXT_SET8: string;

            var TEXT_SET9: string;

            var TEXT_SET10: string;

            var TEXT_SET11: string;

            function Parse(scene: Phaser.Scene, config: Phaser.GameObjects.RetroFont.Config): object;

            type Config = {
                image: string;
                "offset.x": number;
                "offset.y": number;
                width: number;
                height: number;
                chars: string;
                charsPerRow: number;
                "spacing.x": number;
                "spacing.y": number;
            };

        }

        class BitmapText extends Phaser.GameObjects.GameObject implements Phaser.GameObjects.Components.Alpha, Phaser.GameObjects.Components.BlendMode, Phaser.GameObjects.Components.Depth, Phaser.GameObjects.Components.Mask, Phaser.GameObjects.Components.Origin, Phaser.GameObjects.Components.Pipeline, Phaser.GameObjects.Components.ScaleMode, Phaser.GameObjects.Components.ScrollFactor, Phaser.GameObjects.Components.Texture, Phaser.GameObjects.Components.Tint, Phaser.GameObjects.Components.Transform, Phaser.GameObjects.Components.Visible {
            constructor(scene: Phaser.Scene, x: number, y: number, font: string, text?: string | string[], size?: number);

            font: string;

            fontData: BitmapFontData;

            text: string;

            fontSize: number;

            letterSpacing: number;

            setFontSize(size: number): Phaser.GameObjects.BitmapText;

            setLetterSpacing(spacing?: number): Phaser.GameObjects.BitmapText;

            setText(value: string | string[]): Phaser.GameObjects.BitmapText;

            getTextBounds(round?: boolean): BitmapTextSize;

            readonly width: number;

            readonly height: number;

            toJSON(): JSONBitmapText;

            clearAlpha(): this;

            setAlpha(topLeft?: number, topRight?: number, bottomLeft?: number, bottomRight?: number): this;

            alpha: number;

            alphaTopLeft: number;

            alphaTopRight: number;

            alphaBottomLeft: number;

            alphaBottomRight: number;

            blendMode: Phaser.BlendModes | string;

            setBlendMode(value: string | Phaser.BlendModes): this;

            depth: number;

            setDepth(value: integer): this;

            mask: Phaser.Display.Masks.BitmapMask | Phaser.Display.Masks.GeometryMask;

            setMask(mask: Phaser.Display.Masks.BitmapMask | Phaser.Display.Masks.GeometryMask): this;

            clearMask(destroyMask?: boolean): this;

            createBitmapMask(renderable?: Phaser.GameObjects.GameObject): Phaser.Display.Masks.BitmapMask;

            createGeometryMask(graphics?: Phaser.GameObjects.Graphics): Phaser.Display.Masks.GeometryMask;

            originX: number;

            originY: number;

            displayOriginX: number;

            displayOriginY: number;

            setOrigin(x?: number, y?: number): this;

            setOriginFromFrame(): this;

            setDisplayOrigin(x?: number, y?: number): this;

            updateDisplayOrigin(): this;

            defaultPipeline: Phaser.Renderer.WebGL.WebGLPipeline;

            pipeline: Phaser.Renderer.WebGL.WebGLPipeline;

            initPipeline(pipelineName: string): boolean;

            setPipeline(pipelineName: string): boolean;

            resetPipeline(): boolean;

            getPipelineName(): string;

            scaleMode: Phaser.ScaleModes;

            setScaleMode(value: Phaser.ScaleModes): this;

            scrollFactorX: number;

            scrollFactorY: number;

            setScrollFactor(x: number, y?: number): this;

            texture: Phaser.Textures.Texture | Phaser.Textures.CanvasTexture;

            frame: Phaser.Textures.Frame;

            setTexture(key: string, frame?: string | integer): this;

            setFrame(frame: string | integer, updateSize?: boolean, updateOrigin?: boolean): this;

            clearTint(): this;

            setTint(topLeft?: integer, topRight?: integer, bottomLeft?: integer, bottomRight?: integer): this;

            tintTopLeft: integer;

            tintTopRight: integer;

            tintBottomLeft: integer;

            tintBottomRight: integer;

            tint: integer;

            x: number;

            y: number;

            z: number;

            w: number;

            scaleX: number;

            scaleY: number;

            angle: integer;

            rotation: number;

            setPosition(x?: number, y?: number, z?: number, w?: number): this;

            setRandomPosition(x?: number, y?: number, width?: number, height?: number): this;

            setRotation(radians?: number): this;

            setAngle(degrees?: number): this;

            setScale(x: number, y?: number): this;

            setX(value?: number): this;

            setY(value?: number): this;

            setZ(value?: number): this;

            setW(value?: number): this;

            getLocalTransformMatrix(tempMatrix?: Phaser.GameObjects.Components.TransformMatrix): Phaser.GameObjects.Components.TransformMatrix;

            getWorldTransformMatrix(tempMatrix?: Phaser.GameObjects.Components.TransformMatrix): Phaser.GameObjects.Components.TransformMatrix;

            visible: boolean;

            setVisible(value: boolean): this;

        }

        class Blitter extends Phaser.GameObjects.GameObject implements Phaser.GameObjects.Components.Alpha, Phaser.GameObjects.Components.BlendMode, Phaser.GameObjects.Components.Depth, Phaser.GameObjects.Components.Mask, Phaser.GameObjects.Components.Pipeline, Phaser.GameObjects.Components.ScaleMode, Phaser.GameObjects.Components.ScrollFactor, Phaser.GameObjects.Components.Size, Phaser.GameObjects.Components.Texture, Phaser.GameObjects.Components.Transform, Phaser.GameObjects.Components.Visible {
            constructor(scene: Phaser.Scene, x?: number, y?: number, texture?: string, frame?: string | integer);

            children: Phaser.Structs.List<Phaser.GameObjects.Blitter.Bob>;

            dirty: boolean;

            create(x: number, y: number, frame?: string | integer | Phaser.Textures.Frame, visible?: boolean, index?: integer): Phaser.GameObjects.Blitter.Bob;

            createFromCallback(callback: Phaser.GameObjects.Blitter.CreateCallback, quantity: integer, frame?: string | integer | Phaser.Textures.Frame | string[] | integer[] | Phaser.Textures.Frame[], visible?: boolean): Phaser.GameObjects.Blitter.Bob[];

            createMultiple(quantity: integer, frame?: string | integer | Phaser.Textures.Frame | string[] | integer[] | Phaser.Textures.Frame[], visible?: boolean): Phaser.GameObjects.Blitter.Bob[];

            childCanRender(child: Phaser.GameObjects.Blitter.Bob): boolean;

            getRenderList(): Phaser.GameObjects.Blitter.Bob[];

            clear(): void;

            protected preDestroy(): void;

            clearAlpha(): this;

            setAlpha(topLeft?: number, topRight?: number, bottomLeft?: number, bottomRight?: number): this;

            alpha: number;

            alphaTopLeft: number;

            alphaTopRight: number;

            alphaBottomLeft: number;

            alphaBottomRight: number;

            blendMode: Phaser.BlendModes | string;

            setBlendMode(value: string | Phaser.BlendModes): this;

            depth: number;

            setDepth(value: integer): this;

            mask: Phaser.Display.Masks.BitmapMask | Phaser.Display.Masks.GeometryMask;

            setMask(mask: Phaser.Display.Masks.BitmapMask | Phaser.Display.Masks.GeometryMask): this;

            clearMask(destroyMask?: boolean): this;

            createBitmapMask(renderable?: Phaser.GameObjects.GameObject): Phaser.Display.Masks.BitmapMask;

            createGeometryMask(graphics?: Phaser.GameObjects.Graphics): Phaser.Display.Masks.GeometryMask;

            defaultPipeline: Phaser.Renderer.WebGL.WebGLPipeline;

            pipeline: Phaser.Renderer.WebGL.WebGLPipeline;

            initPipeline(pipelineName: string): boolean;

            setPipeline(pipelineName: string): boolean;

            resetPipeline(): boolean;

            getPipelineName(): string;

            scaleMode: Phaser.ScaleModes;

            setScaleMode(value: Phaser.ScaleModes): this;

            scrollFactorX: number;

            scrollFactorY: number;

            setScrollFactor(x: number, y?: number): this;

            width: number;

            height: number;

            displayWidth: number;

            displayHeight: number;

            setSizeToFrame(frame: Phaser.Textures.Frame): this;

            setSize(width: number, height: number): this;

            setDisplaySize(width: number, height: number): this;

            texture: Phaser.Textures.Texture | Phaser.Textures.CanvasTexture;

            frame: Phaser.Textures.Frame;

            setTexture(key: string, frame?: string | integer): this;

            setFrame(frame: string | integer, updateSize?: boolean, updateOrigin?: boolean): this;

            x: number;

            y: number;

            z: number;

            w: number;

            scaleX: number;

            scaleY: number;

            angle: integer;

            rotation: number;

            setPosition(x?: number, y?: number, z?: number, w?: number): this;

            setRandomPosition(x?: number, y?: number, width?: number, height?: number): this;

            setRotation(radians?: number): this;

            setAngle(degrees?: number): this;

            setScale(x: number, y?: number): this;

            setX(value?: number): this;

            setY(value?: number): this;

            setZ(value?: number): this;

            setW(value?: number): this;

            getLocalTransformMatrix(tempMatrix?: Phaser.GameObjects.Components.TransformMatrix): Phaser.GameObjects.Components.TransformMatrix;

            getWorldTransformMatrix(tempMatrix?: Phaser.GameObjects.Components.TransformMatrix): Phaser.GameObjects.Components.TransformMatrix;

            visible: boolean;

            setVisible(value: boolean): this;

        }

        function BuildGameObject(scene: Phaser.Scene, gameObject: Phaser.GameObjects.GameObject, config: GameObjectConfig): Phaser.GameObjects.GameObject;

        function BuildGameObjectAnimation(sprite: Phaser.GameObjects.Sprite, config: object): Phaser.GameObjects.Sprite;

        namespace Components {
            interface Alpha {
                clearAlpha(): this;
                setAlpha(topLeft?: number, topRight?: number, bottomLeft?: number, bottomRight?: number): this;
                alpha: number;
                alphaTopLeft: number;
                alphaTopRight: number;
                alphaBottomLeft: number;
                alphaBottomRight: number;
            }

            interface Animation {
                parent: Phaser.GameObjects.GameObject;
                animationManager: Phaser.Animations.AnimationManager;
                isPlaying: boolean;
                currentAnim: Phaser.Animations.Animation;
                currentFrame: Phaser.Animations.AnimationFrame;
                frameRate: number;
                duration: number;
                msPerFrame: number;
                skipMissedFrames: boolean;
                forward: boolean;
                accumulator: number;
                nextTick: number;
                repeatCounter: number;
                pendingRepeat: boolean;
                setDelay(value?: integer): Phaser.GameObjects.GameObject;
                getDelay(): integer;
                delayedPlay(delay: integer, key: string, startFrame?: integer): Phaser.GameObjects.GameObject;
                getCurrentKey(): string;
                load(key: string, startFrame?: integer): Phaser.GameObjects.GameObject;
                pause(atFrame?: Phaser.Animations.AnimationFrame): Phaser.GameObjects.GameObject;
                resume(fromFrame?: Phaser.Animations.AnimationFrame): Phaser.GameObjects.GameObject;
                readonly isPaused: boolean;
                play(key: string, ignoreIfPlaying?: boolean, startFrame?: integer): Phaser.GameObjects.GameObject;
                getProgress(): number;
                setProgress(value?: number): Phaser.GameObjects.GameObject;
                remove(key?: string, animation?: Phaser.Animations.Animation): void;
                getRepeat(): integer;
                setRepeat(value: integer): Phaser.GameObjects.GameObject;
                getRepeatDelay(): number;
                setRepeatDelay(value: number): Phaser.GameObjects.GameObject;
                restart(includeDelay?: boolean): Phaser.GameObjects.GameObject;
                stop(): Phaser.GameObjects.GameObject;
                stopAfterDelay(delay: integer): Phaser.GameObjects.GameObject;
                stopOnRepeat(): Phaser.GameObjects.GameObject;
                stopOnFrame(delay: Phaser.Animations.AnimationFrame): Phaser.GameObjects.GameObject;
                setTimeScale(value?: number): Phaser.GameObjects.GameObject;
                getTimeScale(): number;
                getTotalFrames(): integer;
                update(time: number, delta: number): void;
                setCurrentFrame(animationFrame: Phaser.Animations.AnimationFrame): Phaser.GameObjects.GameObject;
                setYoyo(value?: boolean): Phaser.GameObjects.GameObject;
                getYoyo(): boolean;
                destroy(): void;
            }

            interface BlendMode {
                blendMode: Phaser.BlendModes | string;
                setBlendMode(value: string | Phaser.BlendModes): this;
            }

            interface ComputedSize {
                width: number;
                height: number;
                displayWidth: number;
                displayHeight: number;
                setSize(width: number, height: number): this;
                setDisplaySize(width: number, height: number): this;
            }

            interface Depth {
                depth: number;
                setDepth(value: integer): this;
            }

            interface Flip {
                flipX: boolean;
                flipY: boolean;
                toggleFlipX(): this;
                toggleFlipY(): this;
                setFlipX(value: boolean): this;
                setFlipY(value: boolean): this;
                setFlip(x: boolean, y: boolean): this;
                resetFlip(): this;
            }

            interface GetBounds {
                getCenter<O extends Phaser.Math.Vector2>(output?: O): O;
                getTopLeft<O extends Phaser.Math.Vector2>(output?: O, includeParent?: boolean): O;
                getTopRight<O extends Phaser.Math.Vector2>(output?: O, includeParent?: boolean): O;
                getBottomLeft<O extends Phaser.Math.Vector2>(output?: O, includeParent?: boolean): O;
                getBottomRight<O extends Phaser.Math.Vector2>(output?: O, includeParent?: boolean): O;
                getBounds<O extends Phaser.Geom.Rectangle>(output?: O): O;
            }

            interface Mask {
                mask: Phaser.Display.Masks.BitmapMask | Phaser.Display.Masks.GeometryMask;
                setMask(mask: Phaser.Display.Masks.BitmapMask | Phaser.Display.Masks.GeometryMask): this;
                clearMask(destroyMask?: boolean): this;
                createBitmapMask(renderable?: Phaser.GameObjects.GameObject): Phaser.Display.Masks.BitmapMask;
                createGeometryMask(graphics?: Phaser.GameObjects.Graphics): Phaser.Display.Masks.GeometryMask;
            }

            interface MatrixStack {
                initMatrixStack(): this;
                save(): this;
                restore(): this;
                loadIdentity(): this;
                transform(a: number, b: number, c: number, d: number, tx: number, ty: number): this;
                setTransform(a: number, b: number, c: number, d: number, tx: number, ty: number): this;
                translate(x: number, y: number): this;
                scale(x: number, y: number): this;
                rotate(t: number): this;
            }

            interface Origin {
                originX: number;
                originY: number;
                displayOriginX: number;
                displayOriginY: number;
                setOrigin(x?: number, y?: number): this;
                setOriginFromFrame(): this;
                setDisplayOrigin(x?: number, y?: number): this;
                updateDisplayOrigin(): this;
            }

            interface Pipeline {
                defaultPipeline: Phaser.Renderer.WebGL.WebGLPipeline;
                pipeline: Phaser.Renderer.WebGL.WebGLPipeline;
                initPipeline(pipelineName: string): boolean;
                setPipeline(pipelineName: string): boolean;
                resetPipeline(): boolean;
                getPipelineName(): string;
            }

            interface ScaleMode {
                scaleMode: Phaser.ScaleModes;
                setScaleMode(value: Phaser.ScaleModes): this;
            }

            interface ScrollFactor {
                scrollFactorX: number;
                scrollFactorY: number;
                setScrollFactor(x: number, y?: number): this;
            }

            interface Size {
                width: number;
                height: number;
                displayWidth: number;
                displayHeight: number;
                setSizeToFrame(frame: Phaser.Textures.Frame): this;
                setSize(width: number, height: number): this;
                setDisplaySize(width: number, height: number): this;
            }

            interface Texture {
                texture: Phaser.Textures.Texture | Phaser.Textures.CanvasTexture;
                frame: Phaser.Textures.Frame;
                setTexture(key: string, frame?: string | integer): this;
                setFrame(frame: string | integer, updateSize?: boolean, updateOrigin?: boolean): this;
            }

            interface Tint {
                clearTint(): this;
                setTint(topLeft?: integer, topRight?: integer, bottomLeft?: integer, bottomRight?: integer): this;
                tintTopLeft: integer;
                tintTopRight: integer;
                tintBottomLeft: integer;
                tintBottomRight: integer;
                tint: integer;
            }

            function ToJSON(gameObject: Phaser.GameObjects.GameObject): JSONGameObject;

            interface Transform {
                x: number;
                y: number;
                z: number;
                w: number;
                scaleX: number;
                scaleY: number;
                angle: integer;
                rotation: number;
                setPosition(x?: number, y?: number, z?: number, w?: number): this;
                setRandomPosition(x?: number, y?: number, width?: number, height?: number): this;
                setRotation(radians?: number): this;
                setAngle(degrees?: number): this;
                setScale(x: number, y?: number): this;
                setX(value?: number): this;
                setY(value?: number): this;
                setZ(value?: number): this;
                setW(value?: number): this;
                getLocalTransformMatrix(tempMatrix?: Phaser.GameObjects.Components.TransformMatrix): Phaser.GameObjects.Components.TransformMatrix;
                getWorldTransformMatrix(tempMatrix?: Phaser.GameObjects.Components.TransformMatrix): Phaser.GameObjects.Components.TransformMatrix;
            }

            class TransformMatrix {
                constructor(a?: number, b?: number, c?: number, d?: number, tx?: number, ty?: number);

                matrix: Float32Array;

                decomposedMatrix: object;

                a: number;

                b: number;

                c: number;

                d: number;

                tx: number;

                ty: number;

                readonly rotation: number;

                readonly scaleX: number;

                readonly scaleY: number;

                loadIdentity(): this;

                translate(x: number, y: number): this;

                scale(x: number, y: number): this;

                rotate(radian: number): this;

                multiply(rhs: Phaser.GameObjects.Components.TransformMatrix): this;

                transform(a: number, b: number, c: number, d: number, tx: number, ty: number): this;

                transformPoint(x: number, y: number, point: Phaser.Geom.Point | Phaser.Math.Vector2 | object): Phaser.Geom.Point | Phaser.Math.Vector2 | object;

                invert(): this;

                setTransform(a: number, b: number, c: number, d: number, tx: number, ty: number): this;

                decomposeMatrix(): object;

                applyITRS(x: number, y: number, rotation: number, scaleX: number, scaleY: number): this;

                destroy(): void;

            }

            interface Visible {
                visible: boolean;
                setVisible(value: boolean): this;
            }

        }

        class Container extends Phaser.GameObjects.GameObject implements Phaser.GameObjects.Components.Alpha, Phaser.GameObjects.Components.BlendMode, Phaser.GameObjects.Components.ComputedSize, Phaser.GameObjects.Components.Depth, Phaser.GameObjects.Components.Mask, Phaser.GameObjects.Components.ScrollFactor, Phaser.GameObjects.Components.Transform, Phaser.GameObjects.Components.Visible {
            constructor(scene: Phaser.Scene, x?: number, y?: number, children?: Phaser.GameObjects.GameObject[]);

            list: Phaser.GameObjects.GameObject[];

            exclusive: boolean;

            maxSize: integer;

            position: integer;

            localTransform: Phaser.GameObjects.Components.TransformMatrix;

            readonly originX: number;

            readonly originY: number;

            readonly displayOriginX: number;

            readonly displayOriginY: number;

            setExclusive(value?: boolean): Phaser.GameObjects.Container;

            getBounds(output?: Phaser.Geom.Rectangle): Phaser.Geom.Rectangle;

            pointToContainer(source: object | Phaser.Geom.Point | Phaser.Math.Vector2, output?: object | Phaser.Geom.Point | Phaser.Math.Vector2): object | Phaser.Geom.Point | Phaser.Math.Vector2;

            getBoundsTransformMatrix(): Phaser.GameObjects.Components.TransformMatrix;

            add(child: Phaser.GameObjects.GameObject | Phaser.GameObjects.GameObject[]): Phaser.GameObjects.Container;

            addAt(child: Phaser.GameObjects.GameObject | Phaser.GameObjects.GameObject[], index?: integer): Phaser.GameObjects.Container;

            getAt(index: integer): Phaser.GameObjects.GameObject;

            getIndex(child: Phaser.GameObjects.GameObject): integer;

            sort(property: string): Phaser.GameObjects.Container;

            getByName(name: string): Phaser.GameObjects.GameObject;

            getRandom(startIndex?: integer, length?: integer): Phaser.GameObjects.GameObject;

            getFirst(property?: string, value?: any, startIndex?: integer, endIndex?: integer): Phaser.GameObjects.GameObject;

            getAll(property?: string, value?: any, startIndex?: integer, endIndex?: integer): Phaser.GameObjects.GameObject[];

            count(property: string, value: any, startIndex?: integer, endIndex?: integer): integer;

            swap(child1: Phaser.GameObjects.GameObject, child2: Phaser.GameObjects.GameObject): Phaser.GameObjects.Container;

            moveTo(child: Phaser.GameObjects.GameObject, index: integer): Phaser.GameObjects.Container;

            remove(child: Phaser.GameObjects.GameObject | Phaser.GameObjects.GameObject[], destroyChild?: boolean): Phaser.GameObjects.Container;

            removeAt(index: integer, destroyChild?: boolean): Phaser.GameObjects.Container;

            removeBetween(startIndex?: integer, endIndex?: integer, destroyChild?: boolean): Phaser.GameObjects.Container;

            removeAll(destroyChild?: boolean): Phaser.GameObjects.Container;

            bringToTop(child: Phaser.GameObjects.GameObject): Phaser.GameObjects.Container;

            sendToBack(child: Phaser.GameObjects.GameObject): Phaser.GameObjects.Container;

            moveUp(child: Phaser.GameObjects.GameObject): Phaser.GameObjects.Container;

            moveDown(child: Phaser.GameObjects.GameObject): Phaser.GameObjects.Container;

            reverse(): Phaser.GameObjects.Container;

            shuffle(): Phaser.GameObjects.Container;

            replace(oldChild: Phaser.GameObjects.GameObject, newChild: Phaser.GameObjects.GameObject, destroyChild?: boolean): Phaser.GameObjects.Container;

            exists(child: Phaser.GameObjects.GameObject): boolean;

            setAll(property: string, value: any, startIndex?: integer, endIndex?: integer): Phaser.GameObjects.Container;

            each(callback: Function, context?: object, ...args: any[]): Phaser.GameObjects.Container;

            iterate(callback: Function, context?: object, ...args: any[]): Phaser.GameObjects.Container;

            readonly length: integer;

            readonly first: Phaser.GameObjects.GameObject;

            readonly last: Phaser.GameObjects.GameObject;

            readonly next: Phaser.GameObjects.GameObject;

            readonly previous: Phaser.GameObjects.GameObject;

            protected preDestroy(): void;

            clearAlpha(): this;

            setAlpha(topLeft?: number, topRight?: number, bottomLeft?: number, bottomRight?: number): this;

            alpha: number;

            alphaTopLeft: number;

            alphaTopRight: number;

            alphaBottomLeft: number;

            alphaBottomRight: number;

            blendMode: Phaser.BlendModes | string;

            setBlendMode(value: string | Phaser.BlendModes): this;

            width: number;

            height: number;

            displayWidth: number;

            displayHeight: number;

            setSize(width: number, height: number): this;

            setDisplaySize(width: number, height: number): this;

            depth: number;

            setDepth(value: integer): this;

            mask: Phaser.Display.Masks.BitmapMask | Phaser.Display.Masks.GeometryMask;

            setMask(mask: Phaser.Display.Masks.BitmapMask | Phaser.Display.Masks.GeometryMask): this;

            clearMask(destroyMask?: boolean): this;

            createBitmapMask(renderable?: Phaser.GameObjects.GameObject): Phaser.Display.Masks.BitmapMask;

            createGeometryMask(graphics?: Phaser.GameObjects.Graphics): Phaser.Display.Masks.GeometryMask;

            scrollFactorX: number;

            scrollFactorY: number;

            setScrollFactor(x: number, y?: number): this;

            x: number;

            y: number;

            z: number;

            w: number;

            scaleX: number;

            scaleY: number;

            angle: integer;

            rotation: number;

            setPosition(x?: number, y?: number, z?: number, w?: number): this;

            setRandomPosition(x?: number, y?: number, width?: number, height?: number): this;

            setRotation(radians?: number): this;

            setAngle(degrees?: number): this;

            setScale(x: number, y?: number): this;

            setX(value?: number): this;

            setY(value?: number): this;

            setZ(value?: number): this;

            setW(value?: number): this;

            getLocalTransformMatrix(tempMatrix?: Phaser.GameObjects.Components.TransformMatrix): Phaser.GameObjects.Components.TransformMatrix;

            getWorldTransformMatrix(tempMatrix?: Phaser.GameObjects.Components.TransformMatrix): Phaser.GameObjects.Components.TransformMatrix;

            visible: boolean;

            setVisible(value: boolean): this;

        }

        class DisplayList extends Phaser.Structs.List<Phaser.GameObjects.GameObject> {
            constructor(scene: Phaser.Scene);

            sortChildrenFlag: boolean;

            scene: Phaser.Scene;

            systems: Phaser.Scenes.Systems;

            queueDepthSort(): void;

            depthSort(): void;

            sortByDepth(childA: Phaser.GameObjects.GameObject, childB: Phaser.GameObjects.GameObject): integer;

            sortGameObjects(gameObjects: Phaser.GameObjects.GameObject[]): any[];

            getTopGameObject(gameObjects: Phaser.GameObjects.GameObject[]): Phaser.GameObjects.GameObject;

        }

        class GameObject extends Phaser.Events.EventEmitter {
            constructor(scene: Phaser.Scene, type: string);

            protected scene: Phaser.Scene;

            type: string;

            parentContainer: Phaser.GameObjects.Container;

            name: string;

            active: boolean;

            tabIndex: integer;

            data: Phaser.Data.DataManager;

            renderFlags: integer;

            cameraFilter: number;

            input: Phaser.Input.InteractiveObject;

            body: object | Phaser.Physics.Arcade.Body | Phaser.Physics.Impact.Body;

            ignoreDestroy: boolean;

            setActive(value: boolean): Phaser.GameObjects.GameObject;

            setName(value: string): Phaser.GameObjects.GameObject;

            setDataEnabled(): Phaser.GameObjects.GameObject;

            setData(key: string | object, data: any): this;

            getData(key: string | string[]): any;

            setInteractive(shape?: Phaser.Input.InputConfiguration | any, callback?: HitAreaCallback, dropZone?: boolean): Phaser.GameObjects.GameObject;

            disableInteractive(): Phaser.GameObjects.GameObject;

            removeInteractive(): Phaser.GameObjects.GameObject;

            update(): void;

            toJSON(): JSONGameObject;

            willRender(): boolean;

            getIndexList(): integer[];

            destroy(): void;

            static readonly RENDER_MASK: integer;

        }

        class GameObjectCreator {
            constructor(scene: Phaser.Scene);

            dynamicBitmapText(config: BitmapTextConfig, addToScene?: boolean): Phaser.GameObjects.DynamicBitmapText;

            bitmapText(config: BitmapTextConfig, addToScene?: boolean): Phaser.GameObjects.BitmapText;

            blitter(config: object, addToScene?: boolean): Phaser.GameObjects.Blitter;

            container(config: object, addToScene?: boolean): Phaser.GameObjects.Container;

            protected scene: Phaser.Scene;

            protected systems: Phaser.Scenes.Systems;

            protected displayList: Phaser.GameObjects.DisplayList;

            protected "updateList;": Phaser.GameObjects.UpdateList;

            graphics(config: object, addToScene?: boolean): Phaser.GameObjects.Graphics;

            group(config: GroupConfig): Phaser.GameObjects.Group;

            image(config: object, addToScene?: boolean): Phaser.GameObjects.Image;

            mesh(config: object, addToScene?: boolean): Phaser.GameObjects.Mesh;

            particles(config: object, addToScene?: boolean): Phaser.GameObjects.Particles.ParticleEmitterManager;

            quad(config: object, addToScene?: boolean): Phaser.GameObjects.Quad;

            renderTexture(config: RenderTextureConfig, addToScene?: boolean): Phaser.GameObjects.RenderTexture;

            sprite(config: object, addToScene?: boolean): Phaser.GameObjects.Sprite;

            sprite3D(config: object, addToScene?: boolean): Phaser.GameObjects.Sprite3D;

            text(config: object, addToScene?: boolean): Phaser.GameObjects.Text;

            tileSprite(config: TileSprite, addToScene?: boolean): Phaser.GameObjects.TileSprite;

            zone(config: object): Phaser.GameObjects.Zone;

            tilemap(config?: TilemapConfig): Phaser.Tilemaps.Tilemap;

            tween(config: object): Phaser.Tweens.Tween;

        }

        class GameObjectFactory {
            constructor(scene: Phaser.Scene);

            path(x: number, y: number): Phaser.Curves.Path;

            dynamicBitmapText(x: number, y: number, font: string, text?: string | string[], size?: number): Phaser.GameObjects.DynamicBitmapText;

            bitmapText(x: number, y: number, font: string, text?: string | string[], size?: number): Phaser.GameObjects.BitmapText;

            blitter(x: number, y: number, key: string, frame?: string | integer): Phaser.GameObjects.Blitter;

            container(x: number, y: number, children?: Phaser.GameObjects.GameObject | Phaser.GameObjects.GameObject[]): Phaser.GameObjects.Container;

            protected scene: Phaser.Scene;

            protected systems: Phaser.Scenes.Systems;

            protected displayList: Phaser.GameObjects.DisplayList;

            protected "updateList;": Phaser.GameObjects.UpdateList;

            existing(child: Phaser.GameObjects.GameObject): Phaser.GameObjects.GameObject;

            graphics(config?: GraphicsOptions): Phaser.GameObjects.Graphics;

            group(children?: Phaser.GameObjects.GameObject[] | GroupConfig, config?: GroupConfig): Phaser.GameObjects.Group;

            image(x: number, y: number, texture: string, frame?: string | integer): Phaser.GameObjects.Image;

            mesh(x: number, y: number, vertices: number[], uv: number[], colors: number[], alphas: number[], texture: string, frame?: string | integer): Phaser.GameObjects.Mesh;

            particles(texture: string, frame?: string | integer | object, emitters?: object): Phaser.GameObjects.Particles.ParticleEmitterManager;

            follower(path: Phaser.Curves.Path, x: number, y: number, texture: string, frame?: string | integer): Phaser.GameObjects.PathFollower;

            quad(x: number, y: number, texture: string, frame?: string | integer): Phaser.GameObjects.Quad;

            renderTexture(x: number, y: number, width?: integer, height?: integer): Phaser.GameObjects.RenderTexture;

            sprite(x: number, y: number, texture: string, frame?: string | integer): Phaser.GameObjects.Sprite;

            sprite3D(x: number, y: number, z: number, texture: string, frame?: string | integer): Phaser.GameObjects.Sprite3D;

            text(x: number, y: number, text: string | string[], style?: object): Phaser.GameObjects.Text;

            tileSprite(x: number, y: number, width: number, height: number, texture: string, frame?: string | integer): Phaser.GameObjects.TileSprite;

            zone(x: number, y: number, width: number, height: number): Phaser.GameObjects.Zone;

            tilemap(key?: string, tileWidth?: integer, tileHeight?: integer, width?: integer, height?: integer, data?: integer[][], insertNull?: boolean): Phaser.Tilemaps.Tilemap;

            tween(config: object): Phaser.Tweens.Tween;

        }

        class Graphics extends Phaser.GameObjects.GameObject implements Phaser.GameObjects.Components.Alpha, Phaser.GameObjects.Components.BlendMode, Phaser.GameObjects.Components.Depth, Phaser.GameObjects.Components.Mask, Phaser.GameObjects.Components.Pipeline, Phaser.GameObjects.Components.Transform, Phaser.GameObjects.Components.Visible, Phaser.GameObjects.Components.ScrollFactor {
            constructor(scene: Phaser.Scene, options: GraphicsOptions);

            displayOriginX: number;

            displayOriginY: number;

            commandBuffer: any[];

            defaultFillColor: number;

            defaultFillAlpha: number;

            defaultStrokeWidth: number;

            defaultStrokeColor: number;

            defaultStrokeAlpha: number;

            setDefaultStyles(options: GraphicsStyles): Phaser.GameObjects.Graphics;

            lineStyle(lineWidth: number, color: number, alpha?: number): Phaser.GameObjects.Graphics;

            fillStyle(color: number, alpha?: number): Phaser.GameObjects.Graphics;

            beginPath(): Phaser.GameObjects.Graphics;

            closePath(): Phaser.GameObjects.Graphics;

            fillPath(): Phaser.GameObjects.Graphics;

            strokePath(): Phaser.GameObjects.Graphics;

            fillCircleShape(circle: Phaser.Geom.Circle): Phaser.GameObjects.Graphics;

            strokeCircleShape(circle: Phaser.Geom.Circle): Phaser.GameObjects.Graphics;

            fillCircle(x: number, y: number, radius: number): Phaser.GameObjects.Graphics;

            strokeCircle(x: number, y: number, radius: number): Phaser.GameObjects.Graphics;

            fillRectShape(rect: Phaser.Geom.Rectangle): Phaser.GameObjects.Graphics;

            strokeRectShape(rect: Phaser.Geom.Rectangle): Phaser.GameObjects.Graphics;

            fillRect(x: number, y: number, width: number, height: number): Phaser.GameObjects.Graphics;

            strokeRect(x: number, y: number, width: number, height: number): Phaser.GameObjects.Graphics;

            fillPointShape(point: Phaser.Geom.Point | Phaser.Math.Vector2 | object, size?: number): Phaser.GameObjects.Graphics;

            fillPoint(x: number, y: number, size?: number): Phaser.GameObjects.Graphics;

            fillTriangleShape(triangle: Phaser.Geom.Triangle): Phaser.GameObjects.Graphics;

            strokeTriangleShape(triangle: Phaser.Geom.Triangle): Phaser.GameObjects.Graphics;

            fillTriangle(x0: number, y0: number, x1: number, y1: number, x2: number, y2: number): Phaser.GameObjects.Graphics;

            strokeTriangle(x0: number, y0: number, x1: number, y1: number, x2: number, y2: number): Phaser.GameObjects.Graphics;

            strokeLineShape(line: Phaser.Geom.Line): Phaser.GameObjects.Graphics;

            lineBetween(x1: number, y1: number, x2: number, y2: number): Phaser.GameObjects.Graphics;

            lineTo(x: number, y: number): Phaser.GameObjects.Graphics;

            moveTo(x: number, y: number): Phaser.GameObjects.Graphics;

            lineFxTo(x: number, y: number, width: number, rgb: number): Phaser.GameObjects.Graphics;

            moveFxTo(x: number, y: number, width: number, rgb: number): Phaser.GameObjects.Graphics;

            strokePoints(points: any[] | Phaser.Geom.Point[], autoClose?: boolean, endIndex?: integer): Phaser.GameObjects.Graphics;

            fillPoints(points: any[] | Phaser.Geom.Point[], autoClose?: boolean, endIndex?: integer): Phaser.GameObjects.Graphics;

            strokeEllipseShape(ellipse: Phaser.Geom.Ellipse, smoothness?: integer): Phaser.GameObjects.Graphics;

            strokeEllipse(x: number, y: number, width: number, height: number, smoothness?: integer): Phaser.GameObjects.Graphics;

            fillEllipseShape(ellipse: Phaser.Geom.Ellipse, smoothness?: integer): Phaser.GameObjects.Graphics;

            fillEllipse(x: number, y: number, width: number, height: number, smoothness?: integer): Phaser.GameObjects.Graphics;

            arc(x: number, y: number, radius: number, startAngle: number, endAngle: number, anticlockwise?: boolean): Phaser.GameObjects.Graphics;

            slice(x: number, y: number, radius: number, startAngle: number, endAngle: number, anticlockwise?: boolean): Phaser.GameObjects.Graphics;

            save(): Phaser.GameObjects.Graphics;

            restore(): Phaser.GameObjects.Graphics;

            translate(x: number, y: number): Phaser.GameObjects.Graphics;

            scale(x: number, y: number): Phaser.GameObjects.Graphics;

            rotate(radians: number): Phaser.GameObjects.Graphics;

            clear(): Phaser.GameObjects.Graphics;

            generateTexture(key: string | HTMLCanvasElement, width?: integer, height?: integer): Phaser.GameObjects.Graphics;

            protected preDestroy(): void;

            static TargetCamera: Phaser.Cameras.Scene2D.Camera;

            clearAlpha(): this;

            setAlpha(topLeft?: number, topRight?: number, bottomLeft?: number, bottomRight?: number): this;

            alpha: number;

            alphaTopLeft: number;

            alphaTopRight: number;

            alphaBottomLeft: number;

            alphaBottomRight: number;

            blendMode: Phaser.BlendModes | string;

            setBlendMode(value: string | Phaser.BlendModes): this;

            depth: number;

            setDepth(value: integer): this;

            mask: Phaser.Display.Masks.BitmapMask | Phaser.Display.Masks.GeometryMask;

            setMask(mask: Phaser.Display.Masks.BitmapMask | Phaser.Display.Masks.GeometryMask): this;

            clearMask(destroyMask?: boolean): this;

            createBitmapMask(renderable?: Phaser.GameObjects.GameObject): Phaser.Display.Masks.BitmapMask;

            createGeometryMask(graphics?: Phaser.GameObjects.Graphics): Phaser.Display.Masks.GeometryMask;

            defaultPipeline: Phaser.Renderer.WebGL.WebGLPipeline;

            pipeline: Phaser.Renderer.WebGL.WebGLPipeline;

            initPipeline(pipelineName: string): boolean;

            setPipeline(pipelineName: string): boolean;

            resetPipeline(): boolean;

            getPipelineName(): string;

            x: number;

            y: number;

            z: number;

            w: number;

            scaleX: number;

            scaleY: number;

            angle: integer;

            rotation: number;

            setPosition(x?: number, y?: number, z?: number, w?: number): this;

            setRandomPosition(x?: number, y?: number, width?: number, height?: number): this;

            setRotation(radians?: number): this;

            setAngle(degrees?: number): this;

            setScale(x: number, y?: number): this;

            setX(value?: number): this;

            setY(value?: number): this;

            setZ(value?: number): this;

            setW(value?: number): this;

            getLocalTransformMatrix(tempMatrix?: Phaser.GameObjects.Components.TransformMatrix): Phaser.GameObjects.Components.TransformMatrix;

            getWorldTransformMatrix(tempMatrix?: Phaser.GameObjects.Components.TransformMatrix): Phaser.GameObjects.Components.TransformMatrix;

            visible: boolean;

            setVisible(value: boolean): this;

            scrollFactorX: number;

            scrollFactorY: number;

            setScrollFactor(x: number, y?: number): this;

        }

        class Group {
            constructor(scene: Phaser.Scene, children?: Phaser.GameObjects.GameObject[] | GroupConfig, config?: GroupConfig | GroupCreateConfig);

            scene: Phaser.Scene;

            children: Phaser.Structs.Set<Phaser.GameObjects.GameObject>;

            isParent: boolean;

            classType: object;

            active: boolean;

            maxSize: integer;

            defaultKey: string;

            defaultFrame: string | integer;

            runChildUpdate: boolean;

            createCallback: GroupCallback;

            removeCallback: GroupCallback;

            createMultipleCallback: GroupMultipleCreateCallback;

            create(x?: number, y?: number, key?: string, frame?: string | integer, visible?: boolean, active?: boolean): any;

            createMultiple(config: GroupCreateConfig | GroupCreateConfig[]): any[];

            createFromConfig(options: GroupCreateConfig): any[];

            preUpdate(time: number, delta: number): void;

            add(child: Phaser.GameObjects.GameObject, addToScene?: boolean): Phaser.GameObjects.Group;

            addMultiple(children: Phaser.GameObjects.GameObject[], addToScene?: boolean): Phaser.GameObjects.Group;

            remove(child: Phaser.GameObjects.GameObject, removeFromScene?: boolean, destroyChild?: boolean): Phaser.GameObjects.Group;

            clear(removeFromScene?: boolean, destroyChild?: boolean): Phaser.GameObjects.Group;

            contains(child: Phaser.GameObjects.GameObject): boolean;

            getChildren(): Phaser.GameObjects.GameObject[];

            getLength(): integer;

            getFirst(state?: boolean, createIfNull?: boolean, x?: number, y?: number, key?: string, frame?: string | integer, visible?: boolean): any;

            getFirstNth(nth: integer, state?: boolean, createIfNull?: boolean, x?: number, y?: number, key?: string, frame?: string | integer, visible?: boolean): any;

            getLast(state?: boolean, createIfNull?: boolean, x?: number, y?: number, key?: string, frame?: string | integer, visible?: boolean): any;

            getLastNth(nth: integer, state?: boolean, createIfNull?: boolean, x?: number, y?: number, key?: string, frame?: string | integer, visible?: boolean): any;

            get(x?: number, y?: number, key?: string, frame?: string | integer, visible?: boolean): any;

            getFirstAlive(createIfNull?: boolean, x?: number, y?: number, key?: string, frame?: string | integer, visible?: boolean): any;

            getFirstDead(createIfNull?: boolean, x?: number, y?: number, key?: string, frame?: string | integer, visible?: boolean): any;

            playAnimation(key: string, startFrame?: string): Phaser.GameObjects.Group;

            isFull(): boolean;

            countActive(value?: boolean): integer;

            getTotalUsed(): integer;

            getTotalFree(): integer;

            setDepth(value: number, step: number): Phaser.GameObjects.Group;

            kill(gameObject: Phaser.GameObjects.GameObject): void;

            killAndHide(gameObject: Phaser.GameObjects.GameObject): void;

            toggleVisible(): Phaser.GameObjects.Group;

            destroy(destroyChildren?: boolean): void;

        }

        class Image extends Phaser.GameObjects.GameObject implements Phaser.GameObjects.Components.Alpha, Phaser.GameObjects.Components.BlendMode, Phaser.GameObjects.Components.Depth, Phaser.GameObjects.Components.Flip, Phaser.GameObjects.Components.GetBounds, Phaser.GameObjects.Components.Mask, Phaser.GameObjects.Components.Origin, Phaser.GameObjects.Components.Pipeline, Phaser.GameObjects.Components.ScaleMode, Phaser.GameObjects.Components.ScrollFactor, Phaser.GameObjects.Components.Size, Phaser.GameObjects.Components.Texture, Phaser.GameObjects.Components.Tint, Phaser.GameObjects.Components.Transform, Phaser.GameObjects.Components.Visible {
            constructor(scene: Phaser.Scene, x: number, y: number, texture: string, frame?: string | integer);

            clearAlpha(): this;

            setAlpha(topLeft?: number, topRight?: number, bottomLeft?: number, bottomRight?: number): this;

            alpha: number;

            alphaTopLeft: number;

            alphaTopRight: number;

            alphaBottomLeft: number;

            alphaBottomRight: number;

            blendMode: Phaser.BlendModes | string;

            setBlendMode(value: string | Phaser.BlendModes): this;

            depth: number;

            setDepth(value: integer): this;

            flipX: boolean;

            flipY: boolean;

            toggleFlipX(): this;

            toggleFlipY(): this;

            setFlipX(value: boolean): this;

            setFlipY(value: boolean): this;

            setFlip(x: boolean, y: boolean): this;

            resetFlip(): this;

            getCenter<O extends Phaser.Math.Vector2>(output?: O): O;

            getTopLeft<O extends Phaser.Math.Vector2>(output?: O, includeParent?: boolean): O;

            getTopRight<O extends Phaser.Math.Vector2>(output?: O, includeParent?: boolean): O;

            getBottomLeft<O extends Phaser.Math.Vector2>(output?: O, includeParent?: boolean): O;

            getBottomRight<O extends Phaser.Math.Vector2>(output?: O, includeParent?: boolean): O;

            getBounds<O extends Phaser.Geom.Rectangle>(output?: O): O;

            mask: Phaser.Display.Masks.BitmapMask | Phaser.Display.Masks.GeometryMask;

            setMask(mask: Phaser.Display.Masks.BitmapMask | Phaser.Display.Masks.GeometryMask): this;

            clearMask(destroyMask?: boolean): this;

            createBitmapMask(renderable?: Phaser.GameObjects.GameObject): Phaser.Display.Masks.BitmapMask;

            createGeometryMask(graphics?: Phaser.GameObjects.Graphics): Phaser.Display.Masks.GeometryMask;

            originX: number;

            originY: number;

            displayOriginX: number;

            displayOriginY: number;

            setOrigin(x?: number, y?: number): this;

            setOriginFromFrame(): this;

            setDisplayOrigin(x?: number, y?: number): this;

            updateDisplayOrigin(): this;

            defaultPipeline: Phaser.Renderer.WebGL.WebGLPipeline;

            pipeline: Phaser.Renderer.WebGL.WebGLPipeline;

            initPipeline(pipelineName: string): boolean;

            setPipeline(pipelineName: string): boolean;

            resetPipeline(): boolean;

            getPipelineName(): string;

            scaleMode: Phaser.ScaleModes;

            setScaleMode(value: Phaser.ScaleModes): this;

            scrollFactorX: number;

            scrollFactorY: number;

            setScrollFactor(x: number, y?: number): this;

            width: number;

            height: number;

            displayWidth: number;

            displayHeight: number;

            setSizeToFrame(frame: Phaser.Textures.Frame): this;

            setSize(width: number, height: number): this;

            setDisplaySize(width: number, height: number): this;

            texture: Phaser.Textures.Texture | Phaser.Textures.CanvasTexture;

            frame: Phaser.Textures.Frame;

            setTexture(key: string, frame?: string | integer): this;

            setFrame(frame: string | integer, updateSize?: boolean, updateOrigin?: boolean): this;

            clearTint(): this;

            setTint(topLeft?: integer, topRight?: integer, bottomLeft?: integer, bottomRight?: integer): this;

            tintTopLeft: integer;

            tintTopRight: integer;

            tintBottomLeft: integer;

            tintBottomRight: integer;

            tint: integer;

            x: number;

            y: number;

            z: number;

            w: number;

            scaleX: number;

            scaleY: number;

            angle: integer;

            rotation: number;

            setPosition(x?: number, y?: number, z?: number, w?: number): this;

            setRandomPosition(x?: number, y?: number, width?: number, height?: number): this;

            setRotation(radians?: number): this;

            setAngle(degrees?: number): this;

            setScale(x: number, y?: number): this;

            setX(value?: number): this;

            setY(value?: number): this;

            setZ(value?: number): this;

            setW(value?: number): this;

            getLocalTransformMatrix(tempMatrix?: Phaser.GameObjects.Components.TransformMatrix): Phaser.GameObjects.Components.TransformMatrix;

            getWorldTransformMatrix(tempMatrix?: Phaser.GameObjects.Components.TransformMatrix): Phaser.GameObjects.Components.TransformMatrix;

            visible: boolean;

            setVisible(value: boolean): this;

        }

        class Light {
            constructor(x: number, y: number, radius: number, r: number, g: number, b: number, intensity: number);

            x: number;

            y: number;

            radius: number;

            r: number;

            g: number;

            b: number;

            intensity: number;

            scrollFactorX: number;

            scrollFactorY: number;

            set(x: number, y: number, radius: number, r: number, g: number, b: number, intensity: number): Phaser.GameObjects.Light;

            setScrollFactor(x: number, y: number): Phaser.GameObjects.Light;

            setColor(rgb: number): Phaser.GameObjects.Light;

            setIntensity(intensity: number): Phaser.GameObjects.Light;

            setPosition(x: number, y: number): Phaser.GameObjects.Light;

            setRadius(radius: number): Phaser.GameObjects.Light;

        }

        class LightsManager {
            lightPool: Phaser.GameObjects.Light[];

            lights: Phaser.GameObjects.Light[];

            culledLights: Phaser.GameObjects.Light[];

            ambientColor: Object;

            active: boolean;

            enable(): Phaser.GameObjects.LightsManager;

            disable(): Phaser.GameObjects.LightsManager;

            cull(camera: Phaser.Cameras.Scene2D.Camera): Phaser.GameObjects.Light[];

            forEachLight(callback: LightForEach): Phaser.GameObjects.LightsManager;

            setAmbientColor(rgb: number): Phaser.GameObjects.LightsManager;

            getMaxVisibleLights(): integer;

            getLightCount(): integer;

            addLight(x: number, y: number, radius: number, rgb: number, intensity: number): Phaser.GameObjects.Light;

            removeLight(light: Phaser.GameObjects.Light): Phaser.GameObjects.LightsManager;

            shutdown(): void;

            destroy(): void;

        }

        class LightsPlugin extends Phaser.GameObjects.LightsManager {
            constructor(scene: Phaser.Scene);

            scene: Phaser.Scene;

            systems: Phaser.Scenes.Systems;

            boot(): void;

            destroy(): void;

        }

        class Mesh extends Phaser.GameObjects.GameObject implements Phaser.GameObjects.Components.Alpha, Phaser.GameObjects.Components.BlendMode, Phaser.GameObjects.Components.Depth, Phaser.GameObjects.Components.Flip, Phaser.GameObjects.Components.GetBounds, Phaser.GameObjects.Components.Mask, Phaser.GameObjects.Components.Origin, Phaser.GameObjects.Components.Pipeline, Phaser.GameObjects.Components.ScaleMode, Phaser.GameObjects.Components.Size, Phaser.GameObjects.Components.Texture, Phaser.GameObjects.Components.Transform, Phaser.GameObjects.Components.Visible, Phaser.GameObjects.Components.ScrollFactor {
            constructor(scene: Phaser.Scene, x: number, y: number, vertices: number[], uv: number[], colors: number[], alphas: number[], texture: string, frame?: string | integer);

            vertices: Float32Array;

            uv: Float32Array;

            colors: Uint32Array;

            alphas: Float32Array;

            clearAlpha(): this;

            setAlpha(topLeft?: number, topRight?: number, bottomLeft?: number, bottomRight?: number): this;

            alpha: number;

            alphaTopLeft: number;

            alphaTopRight: number;

            alphaBottomLeft: number;

            alphaBottomRight: number;

            blendMode: Phaser.BlendModes | string;

            setBlendMode(value: string | Phaser.BlendModes): this;

            depth: number;

            setDepth(value: integer): this;

            flipX: boolean;

            flipY: boolean;

            toggleFlipX(): this;

            toggleFlipY(): this;

            setFlipX(value: boolean): this;

            setFlipY(value: boolean): this;

            setFlip(x: boolean, y: boolean): this;

            resetFlip(): this;

            getCenter<O extends Phaser.Math.Vector2>(output?: O): O;

            getTopLeft<O extends Phaser.Math.Vector2>(output?: O, includeParent?: boolean): O;

            getTopRight<O extends Phaser.Math.Vector2>(output?: O, includeParent?: boolean): O;

            getBottomLeft<O extends Phaser.Math.Vector2>(output?: O, includeParent?: boolean): O;

            getBottomRight<O extends Phaser.Math.Vector2>(output?: O, includeParent?: boolean): O;

            getBounds<O extends Phaser.Geom.Rectangle>(output?: O): O;

            mask: Phaser.Display.Masks.BitmapMask | Phaser.Display.Masks.GeometryMask;

            setMask(mask: Phaser.Display.Masks.BitmapMask | Phaser.Display.Masks.GeometryMask): this;

            clearMask(destroyMask?: boolean): this;

            createBitmapMask(renderable?: Phaser.GameObjects.GameObject): Phaser.Display.Masks.BitmapMask;

            createGeometryMask(graphics?: Phaser.GameObjects.Graphics): Phaser.Display.Masks.GeometryMask;

            originX: number;

            originY: number;

            displayOriginX: number;

            displayOriginY: number;

            setOrigin(x?: number, y?: number): this;

            setOriginFromFrame(): this;

            setDisplayOrigin(x?: number, y?: number): this;

            updateDisplayOrigin(): this;

            defaultPipeline: Phaser.Renderer.WebGL.WebGLPipeline;

            pipeline: Phaser.Renderer.WebGL.WebGLPipeline;

            initPipeline(pipelineName: string): boolean;

            setPipeline(pipelineName: string): boolean;

            resetPipeline(): boolean;

            getPipelineName(): string;

            scaleMode: Phaser.ScaleModes;

            setScaleMode(value: Phaser.ScaleModes): this;

            width: number;

            height: number;

            displayWidth: number;

            displayHeight: number;

            setSizeToFrame(frame: Phaser.Textures.Frame): this;

            setSize(width: number, height: number): this;

            setDisplaySize(width: number, height: number): this;

            texture: Phaser.Textures.Texture | Phaser.Textures.CanvasTexture;

            frame: Phaser.Textures.Frame;

            setTexture(key: string, frame?: string | integer): this;

            setFrame(frame: string | integer, updateSize?: boolean, updateOrigin?: boolean): this;

            x: number;

            y: number;

            z: number;

            w: number;

            scaleX: number;

            scaleY: number;

            angle: integer;

            rotation: number;

            setPosition(x?: number, y?: number, z?: number, w?: number): this;

            setRandomPosition(x?: number, y?: number, width?: number, height?: number): this;

            setRotation(radians?: number): this;

            setAngle(degrees?: number): this;

            setScale(x: number, y?: number): this;

            setX(value?: number): this;

            setY(value?: number): this;

            setZ(value?: number): this;

            setW(value?: number): this;

            getLocalTransformMatrix(tempMatrix?: Phaser.GameObjects.Components.TransformMatrix): Phaser.GameObjects.Components.TransformMatrix;

            getWorldTransformMatrix(tempMatrix?: Phaser.GameObjects.Components.TransformMatrix): Phaser.GameObjects.Components.TransformMatrix;

            visible: boolean;

            setVisible(value: boolean): this;

            scrollFactorX: number;

            scrollFactorY: number;

            setScrollFactor(x: number, y?: number): this;

        }

        namespace Particles {
            class EmitterOp {
                constructor(config: object, key: string, defaultValue: number, emitOnly?: boolean);

                propertyKey: string;

                propertyValue: number;

                defaultValue: number;

                steps: number;

                counter: number;

                start: number;

                end: number;

                ease: Function;

                emitOnly: boolean;

                onEmit: EmitterOpOnEmitCallback;

                onUpdate: EmitterOpOnUpdateCallback;

                loadConfig(config?: object, newKey?: string): void;

                toJSON(): object;

                onChange(value: number): Phaser.GameObjects.Particles.EmitterOp;

                setMethods(): Phaser.GameObjects.Particles.EmitterOp;

                has(object: object, key: string): boolean;

                hasBoth(object: object, key1: string, key2: string): boolean;

                hasEither(object: object, key1: string, key2: string): boolean;

                defaultEmit(particle: Phaser.GameObjects.Particles.Particle, key: string, value: number): number;

                defaultUpdate(particle: Phaser.GameObjects.Particles.Particle, key: string, t: number, value: number): number;

                staticValueEmit(): number;

                staticValueUpdate(): number;

                randomStaticValueEmit(): number;

                randomRangedValueEmit(particle: Phaser.GameObjects.Particles.Particle, key: string): number;

                steppedEmit(): number;

                easedValueEmit(particle: Phaser.GameObjects.Particles.Particle, key: string): number;

                easeValueUpdate(particle: Phaser.GameObjects.Particles.Particle, key: string, t: number): number;

            }

            class GravityWell {
                constructor(x?: number | GravityWellConfig, y?: number, power?: number, epsilon?: number, gravity?: number);

                x: number;

                y: number;

                active: boolean;

                power: number;

                epsilon: number;

                update(particle: Phaser.GameObjects.Particles.Particle, delta: number, step: number): void;

            }

            class Particle {
                constructor(emitter: Phaser.GameObjects.Particles.ParticleEmitter);

                emitter: Phaser.GameObjects.Particles.ParticleEmitter;

                frame: Phaser.Textures.Frame;

                index: number;

                x: number;

                y: number;

                velocityX: number;

                velocityY: number;

                accelerationX: number;

                accelerationY: number;

                maxVelocityX: number;

                maxVelocityY: number;

                bounce: number;

                scaleX: number;

                scaleY: number;

                alpha: number;

                angle: number;

                rotation: number;

                tint: integer;

                color: integer;

                life: number;

                lifeCurrent: number;

                delayCurrent: number;

                lifeT: number;

                data: object;

                isAlive(): boolean;

                fire(x: number, y: number): void;

                computeVelocity(emitter: Phaser.GameObjects.Particles.ParticleEmitter, delta: number, step: number, processors: any[]): void;

                checkBounds(emitter: Phaser.GameObjects.Particles.ParticleEmitter): void;

                update(delta: number, step: number, processors: any[]): boolean;

            }

            class ParticleEmitter implements Phaser.GameObjects.Components.BlendMode, Phaser.GameObjects.Components.Mask, Phaser.GameObjects.Components.ScrollFactor, Phaser.GameObjects.Components.Visible {
                constructor(manager: Phaser.GameObjects.Particles.ParticleEmitterManager, config: ParticleEmitterConfig);

                manager: Phaser.GameObjects.Particles.ParticleEmitterManager;

                texture: Phaser.Textures.Texture;

                frames: Phaser.Textures.Frame[];

                defaultFrame: Phaser.Textures.Frame;

                configFastMap: object;

                configOpMap: object;

                name: string;

                particleClass: Phaser.GameObjects.Particles.Particle;

                x: Phaser.GameObjects.Particles.EmitterOp;

                y: Phaser.GameObjects.Particles.EmitterOp;

                radial: boolean;

                gravityX: number;

                gravityY: number;

                acceleration: boolean;

                accelerationX: Phaser.GameObjects.Particles.EmitterOp;

                accelerationY: Phaser.GameObjects.Particles.EmitterOp;

                maxVelocityX: Phaser.GameObjects.Particles.EmitterOp;

                maxVelocityY: Phaser.GameObjects.Particles.EmitterOp;

                speedX: Phaser.GameObjects.Particles.EmitterOp;

                speedY: Phaser.GameObjects.Particles.EmitterOp;

                moveTo: boolean;

                moveToX: Phaser.GameObjects.Particles.EmitterOp;

                moveToY: Phaser.GameObjects.Particles.EmitterOp;

                bounce: Phaser.GameObjects.Particles.EmitterOp;

                scaleX: Phaser.GameObjects.Particles.EmitterOp;

                scaleY: Phaser.GameObjects.Particles.EmitterOp;

                tint: Phaser.GameObjects.Particles.EmitterOp;

                alpha: Phaser.GameObjects.Particles.EmitterOp;

                lifespan: Phaser.GameObjects.Particles.EmitterOp;

                angle: Phaser.GameObjects.Particles.EmitterOp;

                rotate: Phaser.GameObjects.Particles.EmitterOp;

                emitCallback: ParticleEmitterCallback;

                emitCallbackScope: any;

                deathCallback: ParticleDeathCallback;

                deathCallbackScope: any;

                maxParticles: integer;

                quantity: Phaser.GameObjects.Particles.EmitterOp;

                delay: Phaser.GameObjects.Particles.EmitterOp;

                frequency: number;

                on: boolean;

                particleBringToTop: boolean;

                timeScale: number;

                emitZone: Phaser.GameObjects.Particles.Zones.EdgeZone | Phaser.GameObjects.Particles.Zones.RandomZone;

                deathZone: Phaser.GameObjects.Particles.Zones.DeathZone;

                bounds: Phaser.Geom.Rectangle;

                collideLeft: boolean;

                collideRight: boolean;

                collideTop: boolean;

                collideBottom: boolean;

                active: boolean;

                visible: boolean;

                blendMode: integer;

                follow: Phaser.GameObjects.GameObject;

                followOffset: Phaser.Math.Vector2;

                trackVisible: boolean;

                currentFrame: integer;

                randomFrame: boolean;

                frameQuantity: integer;

                fromJSON(config: ParticleEmitterConfig): Phaser.GameObjects.Particles.ParticleEmitter;

                toJSON(output?: object): object;

                startFollow(target: Phaser.GameObjects.Particles.Particle, offsetX?: number, offsetY?: number, trackVisible?: boolean): Phaser.GameObjects.Particles.ParticleEmitter;

                stopFollow(): Phaser.GameObjects.Particles.ParticleEmitter;

                getFrame(): Phaser.Textures.Frame;

                setFrame(frames: any[] | string | integer | ParticleEmitterFrameConfig, pickRandom?: boolean, quantity?: integer): Phaser.GameObjects.Particles.ParticleEmitter;

                setRadial(value?: boolean): Phaser.GameObjects.Particles.ParticleEmitter;

                setPosition(x: number | number[] | EmitterOpOnEmitCallback | object, y: number | number[] | EmitterOpOnEmitCallback | object): Phaser.GameObjects.Particles.ParticleEmitter;

                setBounds(x: number | ParticleEmitterBounds | ParticleEmitterBoundsAlt, y: number, width: number, height: number): Phaser.GameObjects.Particles.ParticleEmitter;

                setSpeedX(value: number | number[] | EmitterOpOnEmitCallback | object): Phaser.GameObjects.Particles.ParticleEmitter;

                setSpeedY(value: number | number[] | EmitterOpOnEmitCallback | object): Phaser.GameObjects.Particles.ParticleEmitter;

                setSpeed(value: number | number[] | EmitterOpOnEmitCallback | object): Phaser.GameObjects.Particles.ParticleEmitter;

                setScaleX(value: number | number[] | EmitterOpOnUpdateCallback | object): Phaser.GameObjects.Particles.ParticleEmitter;

                setScaleY(value: number | number[] | EmitterOpOnUpdateCallback | object): Phaser.GameObjects.Particles.ParticleEmitter;

                setScale(value: number | number[] | EmitterOpOnUpdateCallback | object): Phaser.GameObjects.Particles.ParticleEmitter;

                setGravityX(value: number): Phaser.GameObjects.Particles.ParticleEmitter;

                setGravityY(value: number): Phaser.GameObjects.Particles.ParticleEmitter;

                setGravity(x: number, y: number): Phaser.GameObjects.Particles.ParticleEmitter;

                setAlpha(value: number | number[] | EmitterOpOnUpdateCallback | object): Phaser.GameObjects.Particles.ParticleEmitter;

                setEmitterAngle(value: number | number[] | EmitterOpOnEmitCallback | object): Phaser.GameObjects.Particles.ParticleEmitter;

                setAngle(value: number | number[] | EmitterOpOnEmitCallback | object): Phaser.GameObjects.Particles.ParticleEmitter;

                setLifespan(value: number | number[] | EmitterOpOnEmitCallback | object): Phaser.GameObjects.Particles.ParticleEmitter;

                setQuantity(quantity: number | number[] | EmitterOpOnEmitCallback | object): Phaser.GameObjects.Particles.ParticleEmitter;

                setFrequency(frequency: number, quantity?: number | number[] | EmitterOpOnEmitCallback | object): Phaser.GameObjects.Particles.ParticleEmitter;

                setEmitZone(zoneConfig?: ParticleEmitterEdgeZoneConfig | ParticleEmitterRandomZoneConfig): Phaser.GameObjects.Particles.ParticleEmitter;

                setDeathZone(zoneConfig?: ParticleEmitterDeathZoneConfig): Phaser.GameObjects.Particles.ParticleEmitter;

                reserve(particleCount: integer): Phaser.GameObjects.Particles.ParticleEmitter;

                getAliveParticleCount(): integer;

                getDeadParticleCount(): integer;

                getParticleCount(): integer;

                atLimit(): boolean;

                onParticleEmit(callback: ParticleEmitterCallback, context?: any): Phaser.GameObjects.Particles.ParticleEmitter;

                onParticleDeath(callback: ParticleDeathCallback, context?: any): Phaser.GameObjects.Particles.ParticleEmitter;

                killAll(): Phaser.GameObjects.Particles.ParticleEmitter;

                forEachAlive(callback: ParticleEmitterCallback, context: any): Phaser.GameObjects.Particles.ParticleEmitter;

                forEachDead(callback: ParticleEmitterCallback, context: any): Phaser.GameObjects.Particles.ParticleEmitter;

                start(): Phaser.GameObjects.Particles.ParticleEmitter;

                pause(): Phaser.GameObjects.Particles.ParticleEmitter;

                resume(): Phaser.GameObjects.Particles.ParticleEmitter;

                depthSort(): Phaser.GameObjects.Particles.ParticleEmitter;

                flow(frequency: number, count?: number | number[] | EmitterOpOnEmitCallback | object): Phaser.GameObjects.Particles.ParticleEmitter;

                explode(count: integer, x: number, y: number): Phaser.GameObjects.Particles.Particle;

                emitParticleAt(x?: number, y?: number, count?: integer): Phaser.GameObjects.Particles.Particle;

                emitParticle(count?: integer, x?: number, y?: number): Phaser.GameObjects.Particles.Particle;

                preUpdate(time: integer, delta: number): void;

                depthSortCallback(a: object, b: object): integer;

                indexSortCallback(a: object, b: object): integer;

                setBlendMode(value: string | Phaser.BlendModes): this;

                mask: Phaser.Display.Masks.BitmapMask | Phaser.Display.Masks.GeometryMask;

                setMask(mask: Phaser.Display.Masks.BitmapMask | Phaser.Display.Masks.GeometryMask): this;

                clearMask(destroyMask?: boolean): this;

                createBitmapMask(renderable?: Phaser.GameObjects.GameObject): Phaser.Display.Masks.BitmapMask;

                createGeometryMask(graphics?: Phaser.GameObjects.Graphics): Phaser.Display.Masks.GeometryMask;

                scrollFactorX: number;

                scrollFactorY: number;

                setScrollFactor(x: number, y?: number): this;

                setVisible(value: boolean): this;

            }

            class ParticleEmitterManager extends Phaser.GameObjects.GameObject {
                constructor(scene: Phaser.Scene, texture: string, frame: string | integer, emitters: ParticleEmitterConfig | ParticleEmitterConfig[]);

                timeScale: number;

                texture: Phaser.Textures.Texture;

                frame: Phaser.Textures.Frame;

                frameNames: string[];

                emitters: Phaser.Structs.List<Phaser.GameObjects.Particles.ParticleEmitter>;

                wells: Phaser.Structs.List<Phaser.GameObjects.Particles.GravityWell>;

                setTexture(key: string, frame?: string | integer): Phaser.GameObjects.Particles.ParticleEmitterManager;

                setFrame(frame?: string | integer): Phaser.GameObjects.Particles.ParticleEmitterManager;

                setEmitterFrames(frames: Phaser.Textures.Frame | Phaser.Textures.Frame[], emitter: Phaser.GameObjects.Particles.ParticleEmitter): Phaser.GameObjects.Particles.ParticleEmitterManager;

                addEmitter(emitter: Phaser.GameObjects.Particles.ParticleEmitter): Phaser.GameObjects.Particles.ParticleEmitter;

                createEmitter(config: object): Phaser.GameObjects.Particles.ParticleEmitter;

                addGravityWell(well: Phaser.GameObjects.Particles.GravityWell): Phaser.GameObjects.Particles.GravityWell;

                createGravityWell(config: object): Phaser.GameObjects.Particles.GravityWell;

                emitParticle(count?: integer, x?: number, y?: number): Phaser.GameObjects.Particles.ParticleEmitterManager;

                emitParticleAt(x?: number, y?: number, count?: integer): Phaser.GameObjects.Particles.ParticleEmitterManager;

                pause(): Phaser.GameObjects.Particles.ParticleEmitterManager;

                resume(): Phaser.GameObjects.Particles.ParticleEmitterManager;

                getProcessors(): Phaser.GameObjects.Particles.GravityWell[];

                preUpdate(time: integer, delta: number): void;

            }

            namespace Zones {
                class DeathZone {
                    constructor(source: DeathZoneSource, killOnEnter: boolean);

                    source: DeathZoneSource;

                    killOnEnter: boolean;

                    willKill(particle: Phaser.GameObjects.Particles.Particle): boolean;

                }

                class EdgeZone {
                    constructor(source: EdgeZoneSource, quantity: number, stepRate: number, yoyo?: boolean, seamless?: boolean);

                    source: EdgeZoneSource | RandomZoneSource;

                    points: Phaser.Geom.Point[];

                    quantity: number;

                    stepRate: number;

                    yoyo: boolean;

                    counter: number;

                    seamless: boolean;

                    updateSource(): Phaser.GameObjects.Particles.Zones.EdgeZone;

                    changeSource(source: object): Phaser.GameObjects.Particles.Zones.EdgeZone;

                    getPoint(particle: Phaser.GameObjects.Particles.Particle): void;

                }

                class RandomZone {
                    constructor(source: RandomZoneSource);

                    source: RandomZoneSource;

                    getPoint(particle: Phaser.GameObjects.Particles.Particle): void;

                }

            }

        }

        class PathFollower extends Phaser.GameObjects.Sprite {
            constructor(scene: Phaser.Scene, path: Phaser.Curves.Path, x: number, y: number, texture: string, frame?: string | integer);

            path: Phaser.Curves.Path;

            rotateToPath: boolean;

            pathRotationVerticalAdjust: boolean;

            pathRotationOffset: number;

            pathOffset: Phaser.Math.Vector2;

            pathVector: Phaser.Math.Vector2;

            pathTween: Phaser.Tweens.Tween;

            pathConfig: PathConfig;

            setPath(path: Phaser.Curves.Path, config?: PathConfig): Phaser.GameObjects.PathFollower;

            setRotateToPath(value: number, offset?: number, verticalAdjust?: boolean): Phaser.GameObjects.PathFollower;

            isFollowing(): boolean;

            startFollow(config?: number | PathConfig, startAt?: number): Phaser.GameObjects.PathFollower;

            pauseFollow(): Phaser.GameObjects.PathFollower;

            resumeFollow(): Phaser.GameObjects.PathFollower;

            stopFollow(): Phaser.GameObjects.PathFollower;

            protected preUpdate(time: integer, delta: number): void;

            clearAlpha(): this;

            setAlpha(topLeft?: number, topRight?: number, bottomLeft?: number, bottomRight?: number): this;

            alpha: number;

            alphaTopLeft: number;

            alphaTopRight: number;

            alphaBottomLeft: number;

            alphaBottomRight: number;

            blendMode: Phaser.BlendModes | string;

            setBlendMode(value: string | Phaser.BlendModes): this;

            depth: number;

            setDepth(value: integer): this;

            flipX: boolean;

            flipY: boolean;

            toggleFlipX(): this;

            toggleFlipY(): this;

            setFlipX(value: boolean): this;

            setFlipY(value: boolean): this;

            setFlip(x: boolean, y: boolean): this;

            resetFlip(): this;

            getCenter<O extends Phaser.Math.Vector2>(output?: O): O;

            getTopLeft<O extends Phaser.Math.Vector2>(output?: O, includeParent?: boolean): O;

            getTopRight<O extends Phaser.Math.Vector2>(output?: O, includeParent?: boolean): O;

            getBottomLeft<O extends Phaser.Math.Vector2>(output?: O, includeParent?: boolean): O;

            getBottomRight<O extends Phaser.Math.Vector2>(output?: O, includeParent?: boolean): O;

            getBounds<O extends Phaser.Geom.Rectangle>(output?: O): O;

            mask: Phaser.Display.Masks.BitmapMask | Phaser.Display.Masks.GeometryMask;

            setMask(mask: Phaser.Display.Masks.BitmapMask | Phaser.Display.Masks.GeometryMask): this;

            clearMask(destroyMask?: boolean): this;

            createBitmapMask(renderable?: Phaser.GameObjects.GameObject): Phaser.Display.Masks.BitmapMask;

            createGeometryMask(graphics?: Phaser.GameObjects.Graphics): Phaser.Display.Masks.GeometryMask;

            originX: number;

            originY: number;

            displayOriginX: number;

            displayOriginY: number;

            setOrigin(x?: number, y?: number): this;

            setOriginFromFrame(): this;

            setDisplayOrigin(x?: number, y?: number): this;

            updateDisplayOrigin(): this;

            defaultPipeline: Phaser.Renderer.WebGL.WebGLPipeline;

            pipeline: Phaser.Renderer.WebGL.WebGLPipeline;

            initPipeline(pipelineName: string): boolean;

            setPipeline(pipelineName: string): boolean;

            resetPipeline(): boolean;

            getPipelineName(): string;

            scaleMode: Phaser.ScaleModes;

            setScaleMode(value: Phaser.ScaleModes): this;

            scrollFactorX: number;

            scrollFactorY: number;

            setScrollFactor(x: number, y?: number): this;

            width: number;

            height: number;

            displayWidth: number;

            displayHeight: number;

            setSizeToFrame(frame: Phaser.Textures.Frame): this;

            setSize(width: number, height: number): this;

            setDisplaySize(width: number, height: number): this;

            texture: Phaser.Textures.Texture | Phaser.Textures.CanvasTexture;

            frame: Phaser.Textures.Frame;

            setTexture(key: string, frame?: string | integer): this;

            setFrame(frame: string | integer, updateSize?: boolean, updateOrigin?: boolean): this;

            clearTint(): this;

            setTint(topLeft?: integer, topRight?: integer, bottomLeft?: integer, bottomRight?: integer): this;

            tintTopLeft: integer;

            tintTopRight: integer;

            tintBottomLeft: integer;

            tintBottomRight: integer;

            tint: integer;

            x: number;

            y: number;

            z: number;

            w: number;

            scaleX: number;

            scaleY: number;

            angle: integer;

            rotation: number;

            setPosition(x?: number, y?: number, z?: number, w?: number): this;

            setRandomPosition(x?: number, y?: number, width?: number, height?: number): this;

            setRotation(radians?: number): this;

            setAngle(degrees?: number): this;

            setScale(x: number, y?: number): this;

            setX(value?: number): this;

            setY(value?: number): this;

            setZ(value?: number): this;

            setW(value?: number): this;

            getLocalTransformMatrix(tempMatrix?: Phaser.GameObjects.Components.TransformMatrix): Phaser.GameObjects.Components.TransformMatrix;

            getWorldTransformMatrix(tempMatrix?: Phaser.GameObjects.Components.TransformMatrix): Phaser.GameObjects.Components.TransformMatrix;

            visible: boolean;

            setVisible(value: boolean): this;

        }

        class Quad extends Phaser.GameObjects.Mesh {
            constructor(scene: Phaser.Scene, x: number, y: number, texture: string, frame?: string | integer);

            topLeftX: number;

            topLeftY: number;

            topRightX: number;

            topRightY: number;

            bottomLeftX: number;

            bottomLeftY: number;

            bottomRightX: number;

            bottomRightY: number;

            topLeftAlpha: number;

            topRightAlpha: number;

            bottomLeftAlpha: number;

            bottomRightAlpha: number;

            topLeftColor: number;

            topRightColor: number;

            bottomLeftColor: number;

            bottomRightColor: number;

            setTopLeft(x: number, y: number): Phaser.GameObjects.Quad;

            setTopRight(x: number, y: number): Phaser.GameObjects.Quad;

            setBottomLeft(x: number, y: number): Phaser.GameObjects.Quad;

            setBottomRight(x: number, y: number): Phaser.GameObjects.Quad;

            resetPosition(): Phaser.GameObjects.Quad;

            resetAlpha(): Phaser.GameObjects.Quad;

            resetColors(): Phaser.GameObjects.Quad;

            reset(): Phaser.GameObjects.Quad;

            clearAlpha(): this;

            setAlpha(topLeft?: number, topRight?: number, bottomLeft?: number, bottomRight?: number): this;

            alpha: number;

            alphaTopLeft: number;

            alphaTopRight: number;

            alphaBottomLeft: number;

            alphaBottomRight: number;

            blendMode: Phaser.BlendModes | string;

            setBlendMode(value: string | Phaser.BlendModes): this;

            depth: number;

            setDepth(value: integer): this;

            flipX: boolean;

            flipY: boolean;

            toggleFlipX(): this;

            toggleFlipY(): this;

            setFlipX(value: boolean): this;

            setFlipY(value: boolean): this;

            setFlip(x: boolean, y: boolean): this;

            resetFlip(): this;

            getCenter<O extends Phaser.Math.Vector2>(output?: O): O;

            getTopLeft<O extends Phaser.Math.Vector2>(output?: O, includeParent?: boolean): O;

            getTopRight<O extends Phaser.Math.Vector2>(output?: O, includeParent?: boolean): O;

            getBottomLeft<O extends Phaser.Math.Vector2>(output?: O, includeParent?: boolean): O;

            getBottomRight<O extends Phaser.Math.Vector2>(output?: O, includeParent?: boolean): O;

            getBounds<O extends Phaser.Geom.Rectangle>(output?: O): O;

            mask: Phaser.Display.Masks.BitmapMask | Phaser.Display.Masks.GeometryMask;

            setMask(mask: Phaser.Display.Masks.BitmapMask | Phaser.Display.Masks.GeometryMask): this;

            clearMask(destroyMask?: boolean): this;

            createBitmapMask(renderable?: Phaser.GameObjects.GameObject): Phaser.Display.Masks.BitmapMask;

            createGeometryMask(graphics?: Phaser.GameObjects.Graphics): Phaser.Display.Masks.GeometryMask;

            originX: number;

            originY: number;

            displayOriginX: number;

            displayOriginY: number;

            setOrigin(x?: number, y?: number): this;

            setOriginFromFrame(): this;

            setDisplayOrigin(x?: number, y?: number): this;

            updateDisplayOrigin(): this;

            defaultPipeline: Phaser.Renderer.WebGL.WebGLPipeline;

            pipeline: Phaser.Renderer.WebGL.WebGLPipeline;

            initPipeline(pipelineName: string): boolean;

            setPipeline(pipelineName: string): boolean;

            resetPipeline(): boolean;

            getPipelineName(): string;

            scaleMode: Phaser.ScaleModes;

            setScaleMode(value: Phaser.ScaleModes): this;

            width: number;

            height: number;

            displayWidth: number;

            displayHeight: number;

            setSizeToFrame(frame: Phaser.Textures.Frame): this;

            setSize(width: number, height: number): this;

            setDisplaySize(width: number, height: number): this;

            texture: Phaser.Textures.Texture | Phaser.Textures.CanvasTexture;

            frame: Phaser.Textures.Frame;

            setTexture(key: string, frame?: string | integer): this;

            setFrame(frame: string | integer, updateSize?: boolean, updateOrigin?: boolean): this;

            x: number;

            y: number;

            z: number;

            w: number;

            scaleX: number;

            scaleY: number;

            angle: integer;

            rotation: number;

            setPosition(x?: number, y?: number, z?: number, w?: number): this;

            setRandomPosition(x?: number, y?: number, width?: number, height?: number): this;

            setRotation(radians?: number): this;

            setAngle(degrees?: number): this;

            setScale(x: number, y?: number): this;

            setX(value?: number): this;

            setY(value?: number): this;

            setZ(value?: number): this;

            setW(value?: number): this;

            getLocalTransformMatrix(tempMatrix?: Phaser.GameObjects.Components.TransformMatrix): Phaser.GameObjects.Components.TransformMatrix;

            getWorldTransformMatrix(tempMatrix?: Phaser.GameObjects.Components.TransformMatrix): Phaser.GameObjects.Components.TransformMatrix;

            visible: boolean;

            setVisible(value: boolean): this;

            scrollFactorX: number;

            scrollFactorY: number;

            setScrollFactor(x: number, y?: number): this;

        }

        class RenderTexture extends Phaser.GameObjects.GameObject implements Phaser.GameObjects.Components.Alpha, Phaser.GameObjects.Components.BlendMode, Phaser.GameObjects.Components.ComputedSize, Phaser.GameObjects.Components.Depth, Phaser.GameObjects.Components.Flip, Phaser.GameObjects.Components.GetBounds, Phaser.GameObjects.Components.Mask, Phaser.GameObjects.Components.MatrixStack, Phaser.GameObjects.Components.Origin, Phaser.GameObjects.Components.Pipeline, Phaser.GameObjects.Components.ScaleMode, Phaser.GameObjects.Components.ScrollFactor, Phaser.GameObjects.Components.Tint, Phaser.GameObjects.Components.Transform, Phaser.GameObjects.Components.Visible {
            constructor(scene: Phaser.Scene, x: number, y: number, width?: integer, height?: integer);

            renderer: Phaser.Renderer.Canvas.CanvasRenderer | Phaser.Renderer.WebGL.WebGLRenderer;

            globalTint: number;

            globalAlpha: number;

            canvas: HTMLCanvasElement;

            context: CanvasRenderingContext2D;

            framebuffer: WebGLFramebuffer;

            resize(width: number, height?: number): this;

            setGlobalTint(tint: integer): this;

            setGlobalAlpha(alpha: number): this;

            protected preDestroy(): void;

            clearAlpha(): this;

            setAlpha(topLeft?: number, topRight?: number, bottomLeft?: number, bottomRight?: number): this;

            alpha: number;

            alphaTopLeft: number;

            alphaTopRight: number;

            alphaBottomLeft: number;

            alphaBottomRight: number;

            blendMode: Phaser.BlendModes | string;

            setBlendMode(value: string | Phaser.BlendModes): this;

            width: number;

            height: number;

            displayWidth: number;

            displayHeight: number;

            setSize(width: number, height: number): this;

            setDisplaySize(width: number, height: number): this;

            depth: number;

            setDepth(value: integer): this;

            flipX: boolean;

            flipY: boolean;

            toggleFlipX(): this;

            toggleFlipY(): this;

            setFlipX(value: boolean): this;

            setFlipY(value: boolean): this;

            setFlip(x: boolean, y: boolean): this;

            resetFlip(): this;

            getCenter<O extends Phaser.Math.Vector2>(output?: O): O;

            getTopLeft<O extends Phaser.Math.Vector2>(output?: O, includeParent?: boolean): O;

            getTopRight<O extends Phaser.Math.Vector2>(output?: O, includeParent?: boolean): O;

            getBottomLeft<O extends Phaser.Math.Vector2>(output?: O, includeParent?: boolean): O;

            getBottomRight<O extends Phaser.Math.Vector2>(output?: O, includeParent?: boolean): O;

            getBounds<O extends Phaser.Geom.Rectangle>(output?: O): O;

            mask: Phaser.Display.Masks.BitmapMask | Phaser.Display.Masks.GeometryMask;

            setMask(mask: Phaser.Display.Masks.BitmapMask | Phaser.Display.Masks.GeometryMask): this;

            clearMask(destroyMask?: boolean): this;

            createBitmapMask(renderable?: Phaser.GameObjects.GameObject): Phaser.Display.Masks.BitmapMask;

            createGeometryMask(graphics?: Phaser.GameObjects.Graphics): Phaser.Display.Masks.GeometryMask;

            initMatrixStack(): this;

            save(): this;

            restore(): this;

            loadIdentity(): this;

            transform(a: number, b: number, c: number, d: number, tx: number, ty: number): this;

            setTransform(a: number, b: number, c: number, d: number, tx: number, ty: number): this;

            translate(x: number, y: number): this;

            scale(x: number, y: number): this;

            rotate(t: number): this;

            originX: number;

            originY: number;

            displayOriginX: number;

            displayOriginY: number;

            setOrigin(x?: number, y?: number): this;

            setOriginFromFrame(): this;

            setDisplayOrigin(x?: number, y?: number): this;

            updateDisplayOrigin(): this;

            defaultPipeline: Phaser.Renderer.WebGL.WebGLPipeline;

            pipeline: Phaser.Renderer.WebGL.WebGLPipeline;

            initPipeline(pipelineName: string): boolean;

            setPipeline(pipelineName: string): boolean;

            resetPipeline(): boolean;

            getPipelineName(): string;

            scaleMode: Phaser.ScaleModes;

            setScaleMode(value: Phaser.ScaleModes): this;

            scrollFactorX: number;

            scrollFactorY: number;

            setScrollFactor(x: number, y?: number): this;

            clearTint(): this;

            setTint(topLeft?: integer, topRight?: integer, bottomLeft?: integer, bottomRight?: integer): this;

            tintTopLeft: integer;

            tintTopRight: integer;

            tintBottomLeft: integer;

            tintBottomRight: integer;

            tint: integer;

            x: number;

            y: number;

            z: number;

            w: number;

            scaleX: number;

            scaleY: number;

            angle: integer;

            rotation: number;

            setPosition(x?: number, y?: number, z?: number, w?: number): this;

            setRandomPosition(x?: number, y?: number, width?: number, height?: number): this;

            setRotation(radians?: number): this;

            setAngle(degrees?: number): this;

            setScale(x: number, y?: number): this;

            setX(value?: number): this;

            setY(value?: number): this;

            setZ(value?: number): this;

            setW(value?: number): this;

            getLocalTransformMatrix(tempMatrix?: Phaser.GameObjects.Components.TransformMatrix): Phaser.GameObjects.Components.TransformMatrix;

            getWorldTransformMatrix(tempMatrix?: Phaser.GameObjects.Components.TransformMatrix): Phaser.GameObjects.Components.TransformMatrix;

            visible: boolean;

            setVisible(value: boolean): this;

        }

        class Sprite extends Phaser.GameObjects.GameObject implements Phaser.GameObjects.Components.Alpha, Phaser.GameObjects.Components.BlendMode, Phaser.GameObjects.Components.Depth, Phaser.GameObjects.Components.Flip, Phaser.GameObjects.Components.GetBounds, Phaser.GameObjects.Components.Mask, Phaser.GameObjects.Components.Origin, Phaser.GameObjects.Components.Pipeline, Phaser.GameObjects.Components.ScaleMode, Phaser.GameObjects.Components.ScrollFactor, Phaser.GameObjects.Components.Size, Phaser.GameObjects.Components.Texture, Phaser.GameObjects.Components.Tint, Phaser.GameObjects.Components.Transform, Phaser.GameObjects.Components.Visible {
            constructor(scene: Phaser.Scene, x: number, y: number, texture: string, frame?: string | integer);

            anims: Phaser.GameObjects.Components.Animation;

            protected preUpdate(time: number, delta: number): void;

            play(key: string, ignoreIfPlaying?: boolean, startFrame?: integer): Phaser.GameObjects.Sprite;

            toJSON(): JSONGameObject;

            clearAlpha(): this;

            setAlpha(topLeft?: number, topRight?: number, bottomLeft?: number, bottomRight?: number): this;

            alpha: number;

            alphaTopLeft: number;

            alphaTopRight: number;

            alphaBottomLeft: number;

            alphaBottomRight: number;

            blendMode: Phaser.BlendModes | string;

            setBlendMode(value: string | Phaser.BlendModes): this;

            depth: number;

            setDepth(value: integer): this;

            flipX: boolean;

            flipY: boolean;

            toggleFlipX(): this;

            toggleFlipY(): this;

            setFlipX(value: boolean): this;

            setFlipY(value: boolean): this;

            setFlip(x: boolean, y: boolean): this;

            resetFlip(): this;

            getCenter<O extends Phaser.Math.Vector2>(output?: O): O;

            getTopLeft<O extends Phaser.Math.Vector2>(output?: O, includeParent?: boolean): O;

            getTopRight<O extends Phaser.Math.Vector2>(output?: O, includeParent?: boolean): O;

            getBottomLeft<O extends Phaser.Math.Vector2>(output?: O, includeParent?: boolean): O;

            getBottomRight<O extends Phaser.Math.Vector2>(output?: O, includeParent?: boolean): O;

            getBounds<O extends Phaser.Geom.Rectangle>(output?: O): O;

            mask: Phaser.Display.Masks.BitmapMask | Phaser.Display.Masks.GeometryMask;

            setMask(mask: Phaser.Display.Masks.BitmapMask | Phaser.Display.Masks.GeometryMask): this;

            clearMask(destroyMask?: boolean): this;

            createBitmapMask(renderable?: Phaser.GameObjects.GameObject): Phaser.Display.Masks.BitmapMask;

            createGeometryMask(graphics?: Phaser.GameObjects.Graphics): Phaser.Display.Masks.GeometryMask;

            originX: number;

            originY: number;

            displayOriginX: number;

            displayOriginY: number;

            setOrigin(x?: number, y?: number): this;

            setOriginFromFrame(): this;

            setDisplayOrigin(x?: number, y?: number): this;

            updateDisplayOrigin(): this;

            defaultPipeline: Phaser.Renderer.WebGL.WebGLPipeline;

            pipeline: Phaser.Renderer.WebGL.WebGLPipeline;

            initPipeline(pipelineName: string): boolean;

            setPipeline(pipelineName: string): boolean;

            resetPipeline(): boolean;

            getPipelineName(): string;

            scaleMode: Phaser.ScaleModes;

            setScaleMode(value: Phaser.ScaleModes): this;

            scrollFactorX: number;

            scrollFactorY: number;

            setScrollFactor(x: number, y?: number): this;

            width: number;

            height: number;

            displayWidth: number;

            displayHeight: number;

            setSizeToFrame(frame: Phaser.Textures.Frame): this;

            setSize(width: number, height: number): this;

            setDisplaySize(width: number, height: number): this;

            texture: Phaser.Textures.Texture | Phaser.Textures.CanvasTexture;

            frame: Phaser.Textures.Frame;

            setTexture(key: string, frame?: string | integer): this;

            setFrame(frame: string | integer, updateSize?: boolean, updateOrigin?: boolean): this;

            clearTint(): this;

            setTint(topLeft?: integer, topRight?: integer, bottomLeft?: integer, bottomRight?: integer): this;

            tintTopLeft: integer;

            tintTopRight: integer;

            tintBottomLeft: integer;

            tintBottomRight: integer;

            tint: integer;

            x: number;

            y: number;

            z: number;

            w: number;

            scaleX: number;

            scaleY: number;

            angle: integer;

            rotation: number;

            setPosition(x?: number, y?: number, z?: number, w?: number): this;

            setRandomPosition(x?: number, y?: number, width?: number, height?: number): this;

            setRotation(radians?: number): this;

            setAngle(degrees?: number): this;

            setScale(x: number, y?: number): this;

            setX(value?: number): this;

            setY(value?: number): this;

            setZ(value?: number): this;

            setW(value?: number): this;

            getLocalTransformMatrix(tempMatrix?: Phaser.GameObjects.Components.TransformMatrix): Phaser.GameObjects.Components.TransformMatrix;

            getWorldTransformMatrix(tempMatrix?: Phaser.GameObjects.Components.TransformMatrix): Phaser.GameObjects.Components.TransformMatrix;

            visible: boolean;

            setVisible(value: boolean): this;

        }

        class Sprite3D extends Phaser.GameObjects.GameObject {
            constructor(scene: Phaser.Scene, x: number, y: number, z: number, texture: string, frame?: string | integer);

            gameObject: Phaser.GameObjects.GameObject;

            position: Phaser.Math.Vector4;

            size: Phaser.Math.Vector2;

            scale: Phaser.Math.Vector2;

            adjustScaleX: boolean;

            adjustScaleY: boolean;

            project(camera: Phaser.Cameras.Sprite3D.Camera): void;

            setVisible(value: boolean): Phaser.GameObjects.Sprite3D;

            visible: boolean;

            x: number;

            y: number;

            z: number;

        }

        class Text extends Phaser.GameObjects.GameObject implements Phaser.GameObjects.Components.Alpha, Phaser.GameObjects.Components.BlendMode, Phaser.GameObjects.Components.ComputedSize, Phaser.GameObjects.Components.Depth, Phaser.GameObjects.Components.Flip, Phaser.GameObjects.Components.GetBounds, Phaser.GameObjects.Components.Mask, Phaser.GameObjects.Components.Origin, Phaser.GameObjects.Components.Pipeline, Phaser.GameObjects.Components.ScaleMode, Phaser.GameObjects.Components.ScrollFactor, Phaser.GameObjects.Components.Tint, Phaser.GameObjects.Components.Transform, Phaser.GameObjects.Components.Visible {
            constructor(scene: Phaser.Scene, x: number, y: number, text: string | string[], style: object);

            static GetTextSize(text: Phaser.GameObjects.Text, size: number, lines: any[]): object;

            static MeasureText(textStyle: Phaser.GameObjects.Text.TextStyle): object;

            canvas: HTMLCanvasElement;

            context: CanvasRenderingContext2D;

            style: Phaser.GameObjects.Text.TextStyle;

            autoRound: boolean;

            splitRegExp: object;

            text: string;

            resolution: number;

            padding: Object;

            width: number;

            height: number;

            canvasTexture: HTMLCanvasElement;

            dirty: boolean;

            initRTL(): void;

            runWordWrap(text: string): string;

            advancedWordWrap(text: string, context: CanvasRenderingContext2D, wordWrapWidth: number): string;

            basicWordWrap(text: string, context: CanvasRenderingContext2D, wordWrapWidth: number): string;

            getWrappedText(text: string): string[];

            setText(value: string | string[]): Phaser.GameObjects.Text;

            setStyle(style: object): Phaser.GameObjects.Text;

            setFont(font: string): Phaser.GameObjects.Text;

            setFontFamily(family: string): Phaser.GameObjects.Text;

            setFontSize(size: number): Phaser.GameObjects.Text;

            setFontStyle(style: string): Phaser.GameObjects.Text;

            setFixedSize(width: number, height: number): Phaser.GameObjects.Text;

            setBackgroundColor(color: string): Phaser.GameObjects.Text;

            setFill(color: string): Phaser.GameObjects.Text;

            setColor(color: string): Phaser.GameObjects.Text;

            setStroke(color: string, thickness: number): Phaser.GameObjects.Text;

            setShadow(x: number, y: number, color: string, blur: number, shadowStroke: boolean, shadowFill: boolean): Phaser.GameObjects.Text;

            setShadowOffset(x: number, y: number): Phaser.GameObjects.Text;

            setShadowColor(color: string): Phaser.GameObjects.Text;

            setShadowBlur(blur: number): Phaser.GameObjects.Text;

            setShadowStroke(enabled: boolean): Phaser.GameObjects.Text;

            setShadowFill(enabled: boolean): Phaser.GameObjects.Text;

            setWordWrapWidth(width: number, useAdvancedWrap?: boolean): Phaser.GameObjects.Text;

            setWordWrapCallback(callback: TextStyleWordWrapCallback, scope?: object): Phaser.GameObjects.Text;

            setAlign(align: string): Phaser.GameObjects.Text;

            setPadding(left: number | object, top: number, right: number, bottom: number): Phaser.GameObjects.Text;

            setMaxLines(max?: integer): Phaser.GameObjects.Text;

            updateText(): Phaser.GameObjects.Text;

            getTextMetrics(): object;

            toJSON(): JSONGameObject;

            protected preDestroy(): void;

            clearAlpha(): this;

            setAlpha(topLeft?: number, topRight?: number, bottomLeft?: number, bottomRight?: number): this;

            alpha: number;

            alphaTopLeft: number;

            alphaTopRight: number;

            alphaBottomLeft: number;

            alphaBottomRight: number;

            blendMode: Phaser.BlendModes | string;

            setBlendMode(value: string | Phaser.BlendModes): this;

            displayWidth: number;

            displayHeight: number;

            setSize(width: number, height: number): this;

            setDisplaySize(width: number, height: number): this;

            depth: number;

            setDepth(value: integer): this;

            flipX: boolean;

            flipY: boolean;

            toggleFlipX(): this;

            toggleFlipY(): this;

            setFlipX(value: boolean): this;

            setFlipY(value: boolean): this;

            setFlip(x: boolean, y: boolean): this;

            resetFlip(): this;

            getCenter<O extends Phaser.Math.Vector2>(output?: O): O;

            getTopLeft<O extends Phaser.Math.Vector2>(output?: O, includeParent?: boolean): O;

            getTopRight<O extends Phaser.Math.Vector2>(output?: O, includeParent?: boolean): O;

            getBottomLeft<O extends Phaser.Math.Vector2>(output?: O, includeParent?: boolean): O;

            getBottomRight<O extends Phaser.Math.Vector2>(output?: O, includeParent?: boolean): O;

            getBounds<O extends Phaser.Geom.Rectangle>(output?: O): O;

            mask: Phaser.Display.Masks.BitmapMask | Phaser.Display.Masks.GeometryMask;

            setMask(mask: Phaser.Display.Masks.BitmapMask | Phaser.Display.Masks.GeometryMask): this;

            clearMask(destroyMask?: boolean): this;

            createBitmapMask(renderable?: Phaser.GameObjects.GameObject): Phaser.Display.Masks.BitmapMask;

            createGeometryMask(graphics?: Phaser.GameObjects.Graphics): Phaser.Display.Masks.GeometryMask;

            originX: number;

            originY: number;

            displayOriginX: number;

            displayOriginY: number;

            setOrigin(x?: number, y?: number): this;

            setOriginFromFrame(): this;

            setDisplayOrigin(x?: number, y?: number): this;

            updateDisplayOrigin(): this;

            defaultPipeline: Phaser.Renderer.WebGL.WebGLPipeline;

            pipeline: Phaser.Renderer.WebGL.WebGLPipeline;

            initPipeline(pipelineName: string): boolean;

            setPipeline(pipelineName: string): boolean;

            resetPipeline(): boolean;

            getPipelineName(): string;

            scaleMode: Phaser.ScaleModes;

            setScaleMode(value: Phaser.ScaleModes): this;

            scrollFactorX: number;

            scrollFactorY: number;

            setScrollFactor(x: number, y?: number): this;

            clearTint(): this;

            setTint(topLeft?: integer, topRight?: integer, bottomLeft?: integer, bottomRight?: integer): this;

            tintTopLeft: integer;

            tintTopRight: integer;

            tintBottomLeft: integer;

            tintBottomRight: integer;

            tint: integer;

            x: number;

            y: number;

            z: number;

            w: number;

            scaleX: number;

            scaleY: number;

            angle: integer;

            rotation: number;

            setPosition(x?: number, y?: number, z?: number, w?: number): this;

            setRandomPosition(x?: number, y?: number, width?: number, height?: number): this;

            setRotation(radians?: number): this;

            setAngle(degrees?: number): this;

            setScale(x: number, y?: number): this;

            setX(value?: number): this;

            setY(value?: number): this;

            setZ(value?: number): this;

            setW(value?: number): this;

            getLocalTransformMatrix(tempMatrix?: Phaser.GameObjects.Components.TransformMatrix): Phaser.GameObjects.Components.TransformMatrix;

            getWorldTransformMatrix(tempMatrix?: Phaser.GameObjects.Components.TransformMatrix): Phaser.GameObjects.Components.TransformMatrix;

            visible: boolean;

            setVisible(value: boolean): this;

        }

        class TileSprite extends Phaser.GameObjects.GameObject implements Phaser.GameObjects.Components.Alpha, Phaser.GameObjects.Components.BlendMode, Phaser.GameObjects.Components.Depth, Phaser.GameObjects.Components.Flip, Phaser.GameObjects.Components.GetBounds, Phaser.GameObjects.Components.Mask, Phaser.GameObjects.Components.Origin, Phaser.GameObjects.Components.Pipeline, Phaser.GameObjects.Components.ScaleMode, Phaser.GameObjects.Components.ScrollFactor, Phaser.GameObjects.Components.Size, Phaser.GameObjects.Components.Texture, Phaser.GameObjects.Components.Tint, Phaser.GameObjects.Components.Transform, Phaser.GameObjects.Components.Visible {
            constructor(scene: Phaser.Scene, x: number, y: number, width: number, height: number, texture: string, frame?: string | integer);

            tilePositionX: number;

            tilePositionY: number;

            dirty: boolean;

            tileTexture: WebGLTexture;

            renderer: Phaser.Renderer.Canvas.CanvasRenderer | Phaser.Renderer.WebGL.WebGLRenderer;

            potWidth: integer;

            potHeight: integer;

            canvasPattern: CanvasPattern;

            canvasBuffer: HTMLCanvasElement;

            canvasBufferCtx: CanvasRenderingContext2D;

            setTilePosition(x?: number, y?: number): Phaser.GameObjects.TileSprite;

            updateTileTexture(): void;

            protected preDestroy(): void;

            clearAlpha(): this;

            setAlpha(topLeft?: number, topRight?: number, bottomLeft?: number, bottomRight?: number): this;

            alpha: number;

            alphaTopLeft: number;

            alphaTopRight: number;

            alphaBottomLeft: number;

            alphaBottomRight: number;

            blendMode: Phaser.BlendModes | string;

            setBlendMode(value: string | Phaser.BlendModes): this;

            depth: number;

            setDepth(value: integer): this;

            flipX: boolean;

            flipY: boolean;

            toggleFlipX(): this;

            toggleFlipY(): this;

            setFlipX(value: boolean): this;

            setFlipY(value: boolean): this;

            setFlip(x: boolean, y: boolean): this;

            resetFlip(): this;

            getCenter<O extends Phaser.Math.Vector2>(output?: O): O;

            getTopLeft<O extends Phaser.Math.Vector2>(output?: O, includeParent?: boolean): O;

            getTopRight<O extends Phaser.Math.Vector2>(output?: O, includeParent?: boolean): O;

            getBottomLeft<O extends Phaser.Math.Vector2>(output?: O, includeParent?: boolean): O;

            getBottomRight<O extends Phaser.Math.Vector2>(output?: O, includeParent?: boolean): O;

            getBounds<O extends Phaser.Geom.Rectangle>(output?: O): O;

            mask: Phaser.Display.Masks.BitmapMask | Phaser.Display.Masks.GeometryMask;

            setMask(mask: Phaser.Display.Masks.BitmapMask | Phaser.Display.Masks.GeometryMask): this;

            clearMask(destroyMask?: boolean): this;

            createBitmapMask(renderable?: Phaser.GameObjects.GameObject): Phaser.Display.Masks.BitmapMask;

            createGeometryMask(graphics?: Phaser.GameObjects.Graphics): Phaser.Display.Masks.GeometryMask;

            originX: number;

            originY: number;

            displayOriginX: number;

            displayOriginY: number;

            setOrigin(x?: number, y?: number): this;

            setOriginFromFrame(): this;

            setDisplayOrigin(x?: number, y?: number): this;

            updateDisplayOrigin(): this;

            defaultPipeline: Phaser.Renderer.WebGL.WebGLPipeline;

            pipeline: Phaser.Renderer.WebGL.WebGLPipeline;

            initPipeline(pipelineName: string): boolean;

            setPipeline(pipelineName: string): boolean;

            resetPipeline(): boolean;

            getPipelineName(): string;

            scaleMode: Phaser.ScaleModes;

            setScaleMode(value: Phaser.ScaleModes): this;

            scrollFactorX: number;

            scrollFactorY: number;

            setScrollFactor(x: number, y?: number): this;

            width: number;

            height: number;

            displayWidth: number;

            displayHeight: number;

            setSizeToFrame(frame: Phaser.Textures.Frame): this;

            setSize(width: number, height: number): this;

            setDisplaySize(width: number, height: number): this;

            texture: Phaser.Textures.Texture | Phaser.Textures.CanvasTexture;

            frame: Phaser.Textures.Frame;

            setTexture(key: string, frame?: string | integer): this;

            setFrame(frame: string | integer, updateSize?: boolean, updateOrigin?: boolean): this;

            clearTint(): this;

            setTint(topLeft?: integer, topRight?: integer, bottomLeft?: integer, bottomRight?: integer): this;

            tintTopLeft: integer;

            tintTopRight: integer;

            tintBottomLeft: integer;

            tintBottomRight: integer;

            tint: integer;

            x: number;

            y: number;

            z: number;

            w: number;

            scaleX: number;

            scaleY: number;

            angle: integer;

            rotation: number;

            setPosition(x?: number, y?: number, z?: number, w?: number): this;

            setRandomPosition(x?: number, y?: number, width?: number, height?: number): this;

            setRotation(radians?: number): this;

            setAngle(degrees?: number): this;

            setScale(x: number, y?: number): this;

            setX(value?: number): this;

            setY(value?: number): this;

            setZ(value?: number): this;

            setW(value?: number): this;

            getLocalTransformMatrix(tempMatrix?: Phaser.GameObjects.Components.TransformMatrix): Phaser.GameObjects.Components.TransformMatrix;

            getWorldTransformMatrix(tempMatrix?: Phaser.GameObjects.Components.TransformMatrix): Phaser.GameObjects.Components.TransformMatrix;

            visible: boolean;

            setVisible(value: boolean): this;

        }

        class UpdateList {
            constructor(scene: Phaser.Scene);

            scene: Phaser.Scene;

            systems: Phaser.Scenes.Systems;

            add(child: Phaser.GameObjects.GameObject): Phaser.GameObjects.GameObject;

            preUpdate(): void;

            update(time: number, delta: number): void;

            remove(child: Phaser.GameObjects.GameObject): Phaser.GameObjects.GameObject;

            removeAll(): Phaser.GameObjects.UpdateList;

            shutdown(): void;

            destroy(): void;

            readonly length: integer;

        }

        class Zone extends Phaser.GameObjects.GameObject implements Phaser.GameObjects.Components.Depth, Phaser.GameObjects.Components.GetBounds, Phaser.GameObjects.Components.Origin, Phaser.GameObjects.Components.ScaleMode, Phaser.GameObjects.Components.Transform, Phaser.GameObjects.Components.ScrollFactor, Phaser.GameObjects.Components.Visible {
            constructor(scene: Phaser.Scene, x: number, y: number, width?: number, height?: number);

            width: number;

            height: number;

            blendMode: integer;

            displayWidth: number;

            displayHeight: number;

            setSize(width: number, height: number, resizeInput?: boolean): Phaser.GameObjects.Zone;

            setDisplaySize(width: number, height: number): Phaser.GameObjects.Zone;

            setCircleDropZone(radius: number): Phaser.GameObjects.Zone;

            setRectangleDropZone(width: number, height: number): Phaser.GameObjects.Zone;

            setDropZone(shape: object, callback: HitAreaCallback): Phaser.GameObjects.Zone;

            depth: number;

            setDepth(value: integer): this;

            getCenter<O extends Phaser.Math.Vector2>(output?: O): O;

            getTopLeft<O extends Phaser.Math.Vector2>(output?: O, includeParent?: boolean): O;

            getTopRight<O extends Phaser.Math.Vector2>(output?: O, includeParent?: boolean): O;

            getBottomLeft<O extends Phaser.Math.Vector2>(output?: O, includeParent?: boolean): O;

            getBottomRight<O extends Phaser.Math.Vector2>(output?: O, includeParent?: boolean): O;

            getBounds<O extends Phaser.Geom.Rectangle>(output?: O): O;

            originX: number;

            originY: number;

            displayOriginX: number;

            displayOriginY: number;

            setOrigin(x?: number, y?: number): this;

            setOriginFromFrame(): this;

            setDisplayOrigin(x?: number, y?: number): this;

            updateDisplayOrigin(): this;

            scaleMode: Phaser.ScaleModes;

            setScaleMode(value: Phaser.ScaleModes): this;

            x: number;

            y: number;

            z: number;

            w: number;

            scaleX: number;

            scaleY: number;

            angle: integer;

            rotation: number;

            setPosition(x?: number, y?: number, z?: number, w?: number): this;

            setRandomPosition(x?: number, y?: number, width?: number, height?: number): this;

            setRotation(radians?: number): this;

            setAngle(degrees?: number): this;

            setScale(x: number, y?: number): this;

            setX(value?: number): this;

            setY(value?: number): this;

            setZ(value?: number): this;

            setW(value?: number): this;

            getLocalTransformMatrix(tempMatrix?: Phaser.GameObjects.Components.TransformMatrix): Phaser.GameObjects.Components.TransformMatrix;

            getWorldTransformMatrix(tempMatrix?: Phaser.GameObjects.Components.TransformMatrix): Phaser.GameObjects.Components.TransformMatrix;

            scrollFactorX: number;

            scrollFactorY: number;

            setScrollFactor(x: number, y?: number): this;

            visible: boolean;

            setVisible(value: boolean): this;

        }

    }

    namespace Geom {
        class Circle {
            constructor(x?: number, y?: number, radius?: number);

            static Area(circle: Phaser.Geom.Circle): number;

            x: number;

            y: number;

            contains(x: number, y: number): boolean;

            getPoint<O extends Phaser.Geom.Point>(position: number, out?: O): O;

            getPoints<O extends Phaser.Geom.Point[]>(quantity: integer, stepRate?: number, output?: O): O;

            getRandomPoint<O extends Phaser.Geom.Point>(point?: O): O;

            setTo(x?: number, y?: number, radius?: number): Phaser.Geom.Circle;

            setEmpty(): Phaser.Geom.Circle;

            setPosition(x?: number, y?: number): Phaser.Geom.Circle;

            isEmpty(): boolean;

            radius: number;

            diameter: number;

            left: number;

            right: number;

            top: number;

            bottom: number;

            static Circumference(circle: Phaser.Geom.Circle): number;

            static CircumferencePoint<O extends Phaser.Geom.Point>(circle: Phaser.Geom.Circle, angle: number, out?: O): O;

            static Clone(source: Phaser.Geom.Circle | object): Phaser.Geom.Circle;

            static Contains(circle: Phaser.Geom.Circle, x: number, y: number): boolean;

            static ContainsPoint(circle: Phaser.Geom.Circle, point: Phaser.Geom.Point | object): boolean;

            static ContainsRect(circle: Phaser.Geom.Circle, rect: Phaser.Geom.Rectangle | object): boolean;

            static CopyFrom<O extends Phaser.Geom.Circle>(source: Phaser.Geom.Circle, dest: O): O;

            static Equals(circle: Phaser.Geom.Circle, toCompare: Phaser.Geom.Circle): boolean;

            static GetBounds<O extends Phaser.Geom.Rectangle>(circle: Phaser.Geom.Circle, out?: O): O;

            static GetPoint<O extends Phaser.Geom.Point>(circle: Phaser.Geom.Circle, position: number, out?: O): O;

            static GetPoints(circle: Phaser.Geom.Circle, quantity: integer, stepRate?: number, output?: any[]): Phaser.Geom.Point[];

            static Offset<O extends Phaser.Geom.Circle>(circle: O, x: number, y: number): O;

            static OffsetPoint<O extends Phaser.Geom.Circle>(circle: O, point: Phaser.Geom.Point | object): O;

            static Random<O extends Phaser.Geom.Point>(circle: Phaser.Geom.Circle, out?: O): O;

        }

        class Ellipse {
            constructor(x?: number, y?: number, width?: number, height?: number);

            static Area(ellipse: Phaser.Geom.Ellipse): number;

            static Circumference(ellipse: Phaser.Geom.Ellipse): number;

            static CircumferencePoint<O extends Phaser.Geom.Point>(ellipse: Phaser.Geom.Ellipse, angle: number, out?: O): O;

            static Clone(source: Phaser.Geom.Ellipse): Phaser.Geom.Ellipse;

            static Contains(ellipse: Phaser.Geom.Ellipse, x: number, y: number): boolean;

            static ContainsPoint(ellipse: Phaser.Geom.Ellipse, point: Phaser.Geom.Point | object): boolean;

            static ContainsRect(ellipse: Phaser.Geom.Ellipse, rect: Phaser.Geom.Rectangle | object): boolean;

            static CopyFrom<O extends Phaser.Geom.Ellipse>(source: Phaser.Geom.Ellipse, dest: O): O;

            x: number;

            y: number;

            width: number;

            height: number;

            contains(x: number, y: number): boolean;

            getPoint<O extends Phaser.Geom.Point>(position: number, out?: O): O;

            getPoints(quantity: integer, stepRate?: number, output?: any[]): Phaser.Geom.Point[];

            getRandomPoint<O extends Phaser.Geom.Point>(point?: O): O;

            setTo(x: number, y: number, width: number, height: number): Phaser.Geom.Ellipse;

            setEmpty(): Phaser.Geom.Ellipse;

            setPosition(x: number, y: number): Phaser.Geom.Ellipse;

            setSize(width: number, height?: number): Phaser.Geom.Ellipse;

            isEmpty(): boolean;

            getMinorRadius(): number;

            getMajorRadius(): number;

            left: number;

            right: number;

            top: number;

            bottom: number;

            static Equals(ellipse: Phaser.Geom.Ellipse, toCompare: Phaser.Geom.Ellipse): boolean;

            static GetBounds<O extends Phaser.Geom.Rectangle>(ellipse: Phaser.Geom.Ellipse, out?: O): O;

            static GetPoint<O extends Phaser.Geom.Point>(ellipse: Phaser.Geom.Ellipse, position: number, out?: O): O;

            static GetPoints<O extends Phaser.Geom.Point[]>(ellipse: Phaser.Geom.Ellipse, quantity: integer, stepRate?: number, out?: O): O;

            static Offset<O extends Phaser.Geom.Ellipse>(ellipse: O, x: number, y: number): O;

            static OffsetPoint<O extends Phaser.Geom.Ellipse>(ellipse: O, point: Phaser.Geom.Point | object): O;

            static Random<O extends Phaser.Geom.Point>(ellipse: Phaser.Geom.Ellipse, out?: O): O;

        }

        namespace Intersects {
            function CircleToCircle(circleA: Phaser.Geom.Circle, circleB: Phaser.Geom.Circle): boolean;

            function CircleToRectangle(circle: Phaser.Geom.Circle, rect: Phaser.Geom.Rectangle): boolean;

            function GetRectangleIntersection<O extends Phaser.Geom.Rectangle>(rectA: Phaser.Geom.Rectangle, rectB: Phaser.Geom.Rectangle, output?: O): O;

            function LineToCircle(line: Phaser.Geom.Line, circle: Phaser.Geom.Circle, nearest?: Phaser.Geom.Point): boolean;

            function LineToLine(line1: Phaser.Geom.Line, line2: Phaser.Geom.Line, out?: Phaser.Geom.Point): boolean;

            function LineToRectangle(line: Phaser.Geom.Line, rect: Phaser.Geom.Rectangle | object): boolean;

            function PointToLine(point: Phaser.Geom.Point, line: Phaser.Geom.Line): boolean;

            function PointToLineSegment(point: Phaser.Geom.Point, line: Phaser.Geom.Line): boolean;

            function RectangleToRectangle(rectA: Phaser.Geom.Rectangle, rectB: Phaser.Geom.Rectangle): boolean;

            function RectangleToTriangle(rect: Phaser.Geom.Rectangle, triangle: Phaser.Geom.Triangle): boolean;

            function RectangleToValues(rect: Phaser.Geom.Rectangle, left: number, right: number, top: number, bottom: number, tolerance?: number): boolean;

            function TriangleToCircle(triangle: Phaser.Geom.Triangle, circle: Phaser.Geom.Circle): boolean;

            function TriangleToLine(triangle: Phaser.Geom.Triangle, line: Phaser.Geom.Line): boolean;

            function TriangleToTriangle(triangleA: Phaser.Geom.Triangle, triangleB: Phaser.Geom.Triangle): boolean;

        }

        class Line {
            constructor(x1?: number, y1?: number, x2?: number, y2?: number);

            static Angle(line: Phaser.Geom.Line): number;

            static BresenhamPoints(line: Phaser.Geom.Line, stepRate?: integer, results?: any[]): any[];

            static CenterOn(line: Phaser.Geom.Line, x: number, y: number): Phaser.Geom.Line;

            static Clone(source: Phaser.Geom.Line): Phaser.Geom.Line;

            static CopyFrom<O extends Phaser.Geom.Line>(source: Phaser.Geom.Line, dest: O): O;

            static Equals(line: Phaser.Geom.Line, toCompare: Phaser.Geom.Line): boolean;

            static GetMidPoint<O extends Phaser.Geom.Point>(line: Phaser.Geom.Line, out?: O): O;

            static GetNormal<O extends Phaser.Geom.Point>(line: Phaser.Geom.Line, out?: O): O;

            static GetPoint<O extends Phaser.Geom.Point>(line: Phaser.Geom.Line, position: number, out?: O): O;

            static GetPoints<O extends Phaser.Geom.Point[]>(line: Phaser.Geom.Line, quantity: integer, stepRate?: integer, out?: O): O;

            static Height(line: Phaser.Geom.Line): number;

            static Length(line: Phaser.Geom.Line): number;

            x1: number;

            y1: number;

            x2: number;

            y2: number;

            getPoint<O extends Phaser.Geom.Point>(position: number, output?: O): O;

            getPoints<O extends Phaser.Geom.Point>(quantity: integer, stepRate?: integer, output?: O): O;

            getRandomPoint<O extends Phaser.Geom.Point>(point?: O): O;

            setTo(x1?: number, y1?: number, x2?: number, y2?: number): Phaser.Geom.Line;

            getPointA<O extends Phaser.Math.Vector2>(vec2?: O): O;

            getPointB<O extends Phaser.Math.Vector2>(vec2?: O): O;

            left: number;

            right: number;

            top: number;

            bottom: number;

            static NormalAngle(line: Phaser.Geom.Line): number;

            static NormalX(line: Phaser.Geom.Line): number;

            static NormalY(line: Phaser.Geom.Line): number;

            static Offset<O extends Phaser.Geom.Line>(line: O, x: number, y: number): O;

            static PerpSlope(line: Phaser.Geom.Line): number;

            static Random<O extends Phaser.Geom.Point>(line: Phaser.Geom.Line, out?: O): O;

            static ReflectAngle(lineA: Phaser.Geom.Line, lineB: Phaser.Geom.Line): number;

            static Rotate<O extends Phaser.Geom.Line>(line: O, angle: number): O;

            static RotateAroundPoint<O extends Phaser.Geom.Line>(line: O, point: Phaser.Geom.Point | object, angle: number): O;

            static RotateAroundXY<O extends Phaser.Geom.Line>(line: O, x: number, y: number, angle: number): O;

            static SetToAngle<O extends Phaser.Geom.Line>(line: O, x: number, y: number, angle: number, length: number): O;

            static Slope(line: Phaser.Geom.Line): number;

            static Width(line: Phaser.Geom.Line): number;

        }

        class Point {
            constructor(x?: number, y?: number);

            static Ceil<O extends Phaser.Geom.Point>(point: O): O;

            static Clone(source: Phaser.Geom.Point): Phaser.Geom.Point;

            static CopyFrom<O extends Phaser.Geom.Point>(source: Phaser.Geom.Point, dest: O): O;

            static Equals(point: Phaser.Geom.Point, toCompare: Phaser.Geom.Point): boolean;

            static Floor<O extends Phaser.Geom.Point>(point: O): O;

            static GetCentroid<O extends Phaser.Geom.Point>(points: Phaser.Geom.Point[], out?: O): O;

            static GetMagnitude(point: Phaser.Geom.Point): number;

            static GetMagnitudeSq(point: Phaser.Geom.Point): number;

            static GetRectangleFromPoints<O extends Phaser.Geom.Rectangle>(points: Phaser.Geom.Point[], out?: O): O;

            static Interpolate<O extends Phaser.Geom.Point>(pointA: Phaser.Geom.Point, pointB: Phaser.Geom.Point, t?: number, out?: O): O;

            static Invert<O extends Phaser.Geom.Point>(point: O): O;

            static Negative<O extends Phaser.Geom.Point>(point: Phaser.Geom.Point, out?: O): O;

            x: number;

            y: number;

            setTo(x?: number, y?: number): Phaser.Geom.Point;

            static Project<O extends Phaser.Geom.Point>(pointA: Phaser.Geom.Point, pointB: Phaser.Geom.Point, out?: O): O;

            static ProjectUnit<O extends Phaser.Geom.Point>(pointA: Phaser.Geom.Point, pointB: Phaser.Geom.Point, out?: O): O;

            static SetMagnitude<O extends Phaser.Geom.Point>(point: O, magnitude: number): O;

        }

        class Polygon {
            constructor(points?: Phaser.Geom.Point[]);

            static Clone(polygon: Phaser.Geom.Polygon): Phaser.Geom.Polygon;

            static Contains(polygon: Phaser.Geom.Polygon, x: number, y: number): boolean;

            static ContainsPoint(polygon: Phaser.Geom.Polygon, point: Phaser.Geom.Point): boolean;

            static GetAABB<O extends Phaser.Geom.Rectangle>(polygon: Phaser.Geom.Polygon, out?: O): O;

            static GetNumberArray<O extends number[]>(polygon: Phaser.Geom.Polygon, output?: O): O;

            area: number;

            points: Phaser.Geom.Point[];

            contains(x: number, y: number): boolean;

            setTo(points: any[]): Phaser.Geom.Polygon;

            calculateArea(): number;

            static Reverse<O extends Phaser.Geom.Polygon>(polygon: O): O;

        }

        class Rectangle {
            constructor(x?: number, y?: number, width?: number, height?: number);

            static Area(rect: Phaser.Geom.Rectangle): number;

            static Ceil<O extends Phaser.Geom.Rectangle>(rect: O): O;

            static CeilAll<O extends Phaser.Geom.Rectangle>(rect: O): O;

            static CenterOn<O extends Phaser.Geom.Rectangle>(rect: O, x: number, y: number): O;

            static Clone(source: Phaser.Geom.Rectangle): Phaser.Geom.Rectangle;

            static Contains(rect: Phaser.Geom.Rectangle, x: number, y: number): boolean;

            static ContainsPoint(rect: Phaser.Geom.Rectangle, point: Phaser.Geom.Point): boolean;

            static ContainsRect(rectA: Phaser.Geom.Rectangle, rectB: Phaser.Geom.Rectangle): boolean;

            static CopyFrom<O extends Phaser.Geom.Rectangle>(source: Phaser.Geom.Rectangle, dest: O): O;

            static Decompose(rect: Phaser.Geom.Rectangle, out?: any[]): any[];

            static Equals(rect: Phaser.Geom.Rectangle, toCompare: Phaser.Geom.Rectangle): boolean;

            static FitInside<O extends Phaser.Geom.Rectangle>(target: O, source: Phaser.Geom.Rectangle): O;

            static FitOutside<O extends Phaser.Geom.Rectangle>(target: O, source: Phaser.Geom.Rectangle): O;

            static Floor<O extends Phaser.Geom.Rectangle>(rect: O): O;

            static FloorAll<O extends Phaser.Geom.Rectangle>(rect: O): O;

            static FromPoints<O extends Phaser.Geom.Rectangle>(points: any[], out?: O): O;

            static GetAspectRatio(rect: Phaser.Geom.Rectangle): number;

            static GetCenter<O extends Phaser.Geom.Point>(rect: Phaser.Geom.Rectangle, out?: O): O;

            static GetPoint<O extends Phaser.Geom.Point>(rectangle: Phaser.Geom.Rectangle, position: number, out?: O): O;

            static GetPoints<O extends Phaser.Geom.Point[]>(rectangle: Phaser.Geom.Rectangle, step: number, quantity: integer, out?: O): O;

            static GetSize<O extends Phaser.Geom.Point>(rect: Phaser.Geom.Rectangle, out?: O): O;

            static Inflate<O extends Phaser.Geom.Rectangle>(rect: O, x: number, y: number): O;

            static MarchingAnts<O extends Phaser.Geom.Point[]>(rect: Phaser.Geom.Rectangle, step: number, quantity: integer, out?: O): O;

            static MergePoints<O extends Phaser.Geom.Rectangle>(target: O, points: Phaser.Geom.Point[]): O;

            static MergeRect<O extends Phaser.Geom.Rectangle>(target: O, source: Phaser.Geom.Rectangle): O;

            static MergeXY<O extends Phaser.Geom.Rectangle>(target: O, x: number, y: number): O;

            static Offset<O extends Phaser.Geom.Rectangle>(rect: O, x: number, y: number): O;

            static OffsetPoint<O extends Phaser.Geom.Rectangle>(rect: O, point: Phaser.Geom.Point): O;

            static Overlaps(rectA: Phaser.Geom.Rectangle, rectB: Phaser.Geom.Rectangle): boolean;

            static Perimeter(rect: Phaser.Geom.Rectangle): number;

            static PerimeterPoint<O extends Phaser.Geom.Point>(rectangle: Phaser.Geom.Rectangle, angle: integer, out?: O): O;

            static Random<O extends Phaser.Geom.Point>(rect: Phaser.Geom.Rectangle, out: O): O;

            static RandomOutside<O extends Phaser.Geom.Point>(outer: Phaser.Geom.Rectangle, inner: Phaser.Geom.Rectangle, out?: O): O;

            x: number;

            y: number;

            width: number;

            height: number;

            contains(x: number, y: number): boolean;

            getPoint<O extends Phaser.Geom.Point>(position: number, output?: O): O;

            getPoints<O extends Phaser.Geom.Point[]>(quantity: integer, stepRate?: number, output?: O): O;

            getRandomPoint<O extends Phaser.Geom.Point>(point?: O): O;

            setTo(x: number, y: number, width: number, height: number): Phaser.Geom.Rectangle;

            setEmpty(): Phaser.Geom.Rectangle;

            setPosition(x: number, y?: number): Phaser.Geom.Rectangle;

            setSize(width: number, height?: number): Phaser.Geom.Rectangle;

            isEmpty(): boolean;

            getLineA<O extends Phaser.Geom.Line>(line?: O): O;

            getLineB<O extends Phaser.Geom.Line>(line?: O): O;

            getLineC<O extends Phaser.Geom.Line>(line?: O): O;

            getLineD<O extends Phaser.Geom.Line>(line?: O): O;

            left: number;

            right: number;

            top: number;

            bottom: number;

            centerX: number;

            centerY: number;

            static Scale<O extends Phaser.Geom.Rectangle>(rect: O, x: number, y: number): O;

            static Union<O extends Phaser.Geom.Rectangle>(rectA: Phaser.Geom.Rectangle, rectB: Phaser.Geom.Rectangle, out?: O): O;

        }

        class Triangle {
            constructor(x1?: number, y1?: number, x2?: number, y2?: number, x3?: number, y3?: number);

            static Area(triangle: Phaser.Geom.Triangle): number;

            static BuildEquilateral(x: number, y: number, length: number): Phaser.Geom.Triangle;

            static BuildFromPolygon<O extends Phaser.Geom.Triangle[]>(data: any[], holes?: any[], scaleX?: number, scaleY?: number, out?: O): O;

            static BuildRight(x: number, y: number, width: number, height: number): Phaser.Geom.Triangle;

            static CenterOn<O extends Phaser.Geom.Triangle>(triangle: O, x: number, y: number, centerFunc?: CenterFunction): O;

            static Centroid<O extends Phaser.Geom.Point>(triangle: Phaser.Geom.Triangle, out?: O): O;

            static CircumCenter<O extends Phaser.Math.Vector2>(triangle: Phaser.Geom.Triangle, out?: O): O;

            static CircumCircle<O extends Phaser.Geom.Circle>(triangle: Phaser.Geom.Triangle, out?: O): O;

            static Clone(source: Phaser.Geom.Triangle): Phaser.Geom.Triangle;

            static Contains(triangle: Phaser.Geom.Triangle, x: number, y: number): boolean;

            static ContainsArray(triangle: Phaser.Geom.Triangle, points: Phaser.Geom.Point[], returnFirst?: boolean, out?: any[]): Phaser.Geom.Point[];

            static ContainsPoint(triangle: Phaser.Geom.Triangle, point: Phaser.Geom.Point): boolean;

            static CopyFrom<O extends Phaser.Geom.Triangle>(source: Phaser.Geom.Triangle, dest: O): O;

            static Decompose(triangle: Phaser.Geom.Triangle, out?: any[]): any[];

            static Equals(triangle: Phaser.Geom.Triangle, toCompare: Phaser.Geom.Triangle): boolean;

            static GetPoint<O extends Phaser.Geom.Point>(triangle: Phaser.Geom.Triangle, position: number, out?: O): O;

            static GetPoints<O extends Phaser.Geom.Point>(triangle: Phaser.Geom.Triangle, quantity: integer, stepRate: number, out?: O): O;

            static InCenter<O extends Phaser.Geom.Point>(triangle: Phaser.Geom.Triangle, out?: O): O;

            static Offset<O extends Phaser.Geom.Triangle>(triangle: O, x: number, y: number): O;

            static Perimeter(triangle: Phaser.Geom.Triangle): number;

            static Random<O extends Phaser.Geom.Point>(triangle: Phaser.Geom.Triangle, out?: O): O;

            static Rotate<O extends Phaser.Geom.Triangle>(triangle: O, angle: number): O;

            static RotateAroundPoint<O extends Phaser.Geom.Triangle>(triangle: O, point: Phaser.Geom.Point, angle: number): O;

            static RotateAroundXY<O extends Phaser.Geom.Triangle>(triangle: O, x: number, y: number, angle: number): O;

            x1: number;

            y1: number;

            x2: number;

            y2: number;

            x3: number;

            y3: number;

            contains(x: number, y: number): boolean;

            getPoint<O extends Phaser.Geom.Point>(position: number, output?: O): O;

            getPoints<O extends Phaser.Geom.Point[]>(quantity: integer, stepRate?: number, output?: O): O;

            getRandomPoint<O extends Phaser.Geom.Point>(point?: O): O;

            setTo(x1?: number, y1?: number, x2?: number, y2?: number, x3?: number, y3?: number): Phaser.Geom.Triangle;

            getLineA<O extends Phaser.Geom.Line>(line?: O): O;

            getLineB<O extends Phaser.Geom.Line>(line?: O): O;

            getLineC<O extends Phaser.Geom.Line>(line?: O): O;

            left: number;

            right: number;

            top: number;

            bottom: number;

        }

    }

    namespace Input {
        var MOUSE_DOWN: integer;

        var MOUSE_MOVE: integer;

        var MOUSE_UP: integer;

        var TOUCH_START: integer;

        var TOUCH_MOVE: integer;

        var TOUCH_END: integer;

        var POINTER_LOCK_CHANGE: integer;

        type InteractiveObject = {
            gameObject: Phaser.GameObjects.GameObject;
            enabled: boolean;
            draggable: boolean;
            dropZone: boolean;
            cursor: boolean | string;
            target: Phaser.GameObjects.GameObject;
            camera: Phaser.Cameras.Scene2D.Camera;
            hitArea: any;
            hitAreaCallback: HitAreaCallback;
            localX: number;
            localY: number;
            dragState: 0 | 1 | 2;
            dragStartX: number;
            dragStartY: number;
            dragX: number;
            dragY: number;
        };

        function CreateInteractiveObject(gameObject: Phaser.GameObjects.GameObject, hitArea: any, hitAreaCallback: HitAreaCallback): Phaser.Input.InteractiveObject;

        function CreatePixelPerfectHandler(textureManager: Phaser.Textures.TextureManager, alphaTolerance: integer): Function;

        namespace Gamepad {
            class Axis {
                constructor(pad: Phaser.Input.Gamepad.Gamepad, index: integer);

                pad: Phaser.Input.Gamepad.Gamepad;

                events: Phaser.Events.EventEmitter;

                index: integer;

                value: number;

                threshold: number;

                getValue(): number;

                destroy(): void;

            }

            class Button {
                constructor(pad: Phaser.Input.Gamepad.Gamepad, index: integer);

                pad: Phaser.Input.Gamepad.Gamepad;

                events: Phaser.Events.EventEmitter;

                index: integer;

                value: number;

                threshold: number;

                pressed: boolean;

                destroy(): void;

            }

            namespace Configs {
                var SNES_USB: object;

                var DUALSHOCK_4: object;

                var XBOX_360: object;

            }

            class Gamepad extends Phaser.Events.EventEmitter {
                constructor(manager: Phaser.Input.Gamepad.GamepadPlugin, pad: Pad);

                manager: Phaser.Input.Gamepad.GamepadPlugin;

                pad: any;

                id: string;

                index: number;

                buttons: Phaser.Input.Gamepad.Button[];

                axes: Phaser.Input.Gamepad.Axis[];

                vibration: GamepadHapticActuator;

                leftStick: Phaser.Math.Vector2;

                rightStick: Phaser.Math.Vector2;

                getAxisTotal(): integer;

                getAxisValue(index: integer): number;

                setAxisThreshold(value: number): void;

                getButtonTotal(): integer;

                getButtonValue(index: integer): number;

                isButtonDown(index: integer): boolean;

                destroy(): void;

                connected: boolean;

                timestamp: number;

                left: boolean;

                right: boolean;

                up: boolean;

                down: boolean;

                A: boolean;

                Y: boolean;

                X: boolean;

                B: boolean;

                L1: number;

                L2: number;

                R1: number;

                R2: number;

            }

            class GamepadPlugin extends Phaser.Events.EventEmitter {
                constructor(sceneInputPlugin: Phaser.Input.InputPlugin);

                scene: Phaser.Scene;

                settings: Phaser.Scenes.Settings.Object;

                sceneInputPlugin: Phaser.Input.InputPlugin;

                enabled: boolean;

                target: any;

                gamepads: Phaser.Input.Gamepad.Gamepad[];

                isActive(): boolean;

                disconnectAll(): void;

                getAll(): Phaser.Input.Gamepad.Gamepad[];

                getPad(index: number): Phaser.Input.Gamepad.Gamepad;

                total: integer;

                pad1: Phaser.Input.Gamepad.Gamepad;

                pad2: Phaser.Input.Gamepad.Gamepad;

                pad3: Phaser.Input.Gamepad.Gamepad;

                pad4: Phaser.Input.Gamepad.Gamepad;

            }

        }

        class InputManager {
            constructor(game: Phaser.Game, config: object);

            readonly game: Phaser.Game;

            canvas: HTMLCanvasElement;

            config: object;

            enabled: boolean;

            events: Phaser.Events.EventEmitter;

            queue: any[];

            defaultCursor: string;

            mouse: Phaser.Input.Mouse.MouseManager;

            touch: Phaser.Input.Touch.TouchManager;

            pointers: Phaser.Input.Pointer[];

            readonly pointersTotal: integer;

            mousePointer: Phaser.Input.Pointer;

            activePointer: Phaser.Input.Pointer;

            dirty: boolean;

            scale: Object;

            globalTopOnly: boolean;

            ignoreEvents: boolean;

            bounds: Phaser.Geom.Rectangle;

            protected boot(): void;

            updateBounds(): void;

            resize(): void;

            setDefaultCursor(cursor: string): void;

            addPointer(quantity?: integer): Phaser.Input.Pointer[];

            addUpCallback(callback: Function, isOnce?: boolean): this;

            addDownCallback(callback: Function, isOnce?: boolean): this;

            addMoveCallback(callback: Function, isOnce?: boolean): this;

            hitTest(pointer: Phaser.Input.Pointer, gameObjects: any[], camera: Phaser.Cameras.Scene2D.Camera, output?: any[]): any[];

            pointWithinHitArea(gameObject: Phaser.GameObjects.GameObject, x: number, y: number): boolean;

            pointWithinInteractiveObject(object: Phaser.Input.InteractiveObject, x: number, y: number): boolean;

            transformPointer(pointer: Phaser.Input.Pointer): number;

            transformX(pageX: number): number;

            transformY(pageY: number): number;

            getOffsetX(): number;

            getOffsetY(): number;

            getScaleX(): number;

            getScaleY(): number;

            destroy(): void;

        }

        class InputPlugin extends Phaser.Events.EventEmitter {
            constructor(scene: Phaser.Scene);

            gamepad: Phaser.Input.Gamepad.GamepadPlugin;

            scene: Phaser.Scene;

            systems: Phaser.Scenes.Systems;

            settings: Phaser.Scenes.Settings.Object;

            manager: Phaser.Input.InputManager;

            enabled: boolean;

            displayList: Phaser.GameObjects.DisplayList;

            cameras: Phaser.Cameras.Scene2D.CameraManager;

            mouse: Phaser.Input.Mouse.MouseManager;

            topOnly: boolean;

            pollRate: integer;

            dragDistanceThreshold: number;

            dragTimeThreshold: number;

            isActive(): boolean;

            clear(gameObject: Phaser.GameObjects.GameObject): Phaser.GameObjects.GameObject;

            disable(gameObject: Phaser.GameObjects.GameObject): void;

            enable(gameObject: Phaser.GameObjects.GameObject, shape?: Phaser.Input.InputConfiguration | any, callback?: HitAreaCallback, dropZone?: boolean): Phaser.Input.InputPlugin;

            hitTestPointer(pointer: Phaser.Input.Pointer): Phaser.GameObjects.GameObject[];

            setDraggable(gameObjects: Phaser.GameObjects.GameObject | Phaser.GameObjects.GameObject[], value?: boolean): Phaser.Input.InputPlugin;

            makePixelPerfect(alphaTolerance?: integer): Function;

            setHitArea(gameObjects: Phaser.GameObjects.GameObject | Phaser.GameObjects.GameObject[], shape?: Phaser.Input.InputConfiguration | any, callback?: HitAreaCallback): Phaser.Input.InputPlugin;

            setHitAreaCircle(gameObjects: Phaser.GameObjects.GameObject | Phaser.GameObjects.GameObject[], x: number, y: number, radius: number, callback?: HitAreaCallback): Phaser.Input.InputPlugin;

            setHitAreaEllipse(gameObjects: Phaser.GameObjects.GameObject | Phaser.GameObjects.GameObject[], x: number, y: number, width: number, height: number, callback?: HitAreaCallback): Phaser.Input.InputPlugin;

            setHitAreaFromTexture(gameObjects: Phaser.GameObjects.GameObject | Phaser.GameObjects.GameObject[], callback?: HitAreaCallback): Phaser.Input.InputPlugin;

            setHitAreaRectangle(gameObjects: Phaser.GameObjects.GameObject | Phaser.GameObjects.GameObject[], x: number, y: number, width: number, height: number, callback?: HitAreaCallback): Phaser.Input.InputPlugin;

            setHitAreaTriangle(gameObjects: Phaser.GameObjects.GameObject | Phaser.GameObjects.GameObject[], x1: number, y1: number, x2: number, y2: number, x3: number, y3: number, callback?: HitAreaCallback): Phaser.Input.InputPlugin;

            setPollAlways(): Phaser.Input.InputPlugin;

            setPollOnMove(): Phaser.Input.InputPlugin;

            setPollRate(value: number): Phaser.Input.InputPlugin;

            setGlobalTopOnly(value: boolean): Phaser.Input.InputPlugin;

            setTopOnly(value: boolean): Phaser.Input.InputPlugin;

            sortGameObjects(gameObjects: Phaser.GameObjects.GameObject[]): Phaser.GameObjects.GameObject[];

            stopPropagation(): Phaser.Input.InputPlugin;

            addUpCallback(callback: Function, isOnce?: boolean): this;

            addDownCallback(callback: Function, isOnce?: boolean): this;

            addMoveCallback(callback: Function, isOnce?: boolean): this;

            addPointer(quantity?: integer): Phaser.Input.Pointer[];

            setDefaultCursor(cursor: string): Phaser.Input.InputPlugin;

            readonly x: number;

            readonly y: number;

            readonly mousePointer: Phaser.Input.Pointer;

            readonly activePointer: Phaser.Input.Pointer;

            readonly pointer1: Phaser.Input.Pointer;

            readonly pointer2: Phaser.Input.Pointer;

            readonly pointer3: Phaser.Input.Pointer;

            readonly pointer4: Phaser.Input.Pointer;

            readonly pointer5: Phaser.Input.Pointer;

            readonly pointer6: Phaser.Input.Pointer;

            readonly pointer7: Phaser.Input.Pointer;

            readonly pointer8: Phaser.Input.Pointer;

            readonly pointer9: Phaser.Input.Pointer;

            readonly pointer10: Phaser.Input.Pointer;

            keyboard: Phaser.Input.Keyboard.KeyboardPlugin;

        }

        type InputConfiguration = {
            hitArea?: any;
            hitAreaCallback?: Function;
            draggable?: boolean;
            dropZone?: boolean;
            useHandCursor?: boolean;
            cursor?: string;
            pixelPerfect?: boolean;
            alphaTolerance?: integer;
        };

        namespace Keyboard {
            class KeyCombo {
                constructor(keyboardPlugin: Phaser.Input.Keyboard.KeyboardPlugin, keys: string | integer[] | object[], config?: KeyComboConfig);

                manager: Phaser.Input.Keyboard.KeyboardPlugin;

                enabled: boolean;

                keyCodes: any[];

                current: integer;

                index: integer;

                size: number;

                timeLastMatched: number;

                matched: boolean;

                timeMatched: number;

                resetOnWrongKey: boolean;

                maxKeyDelay: integer;

                resetOnMatch: boolean;

                deleteOnMatch: boolean;

                readonly progress: number;

                destroy(): void;

            }

            class KeyboardPlugin extends Phaser.Events.EventEmitter {
                constructor(sceneInputPlugin: Phaser.Input.InputPlugin);

                scene: Phaser.Scene;

                settings: Phaser.Scenes.Settings.Object;

                sceneInputPlugin: Phaser.Input.InputPlugin;

                enabled: boolean;

                target: any;

                keys: Phaser.Input.Keyboard.Key[];

                combos: Phaser.Input.Keyboard.KeyCombo[];

                isActive(): boolean;

                createCursorKeys(): CursorKeys;

                addKeys(keys: object | string): object;

                addKey(key: Phaser.Input.Keyboard.Key | string | integer): Phaser.Input.Keyboard.Key;

                removeKey(key: Phaser.Input.Keyboard.Key | string | integer): void;

                createCombo(keys: string | integer[] | object[], config?: KeyComboConfig): Phaser.Input.Keyboard.KeyCombo;

            }

            function DownDuration(key: Phaser.Input.Keyboard.Key, duration?: integer): boolean;

            function JustDown(key: Phaser.Input.Keyboard.Key): boolean;

            function JustUp(key: Phaser.Input.Keyboard.Key): boolean;

            class Key {
                constructor(keyCode: integer);

                keyCode: integer;

                originalEvent: KeyboardEvent;

                preventDefault: boolean;

                enabled: boolean;

                isDown: boolean;

                isUp: boolean;

                altKey: boolean;

                ctrlKey: boolean;

                shiftKey: boolean;

                location: number;

                timeDown: number;

                duration: number;

                timeUp: number;

                repeats: number;

                static reset(): Phaser.Input.Keyboard.Key;

            }

            enum KeyCodes {
                BACKSPACE,
                TAB,
                ENTER,
                SHIFT,
                CTRL,
                ALT,
                PAUSE,
                CAPS_LOCK,
                ESC,
                SPACE,
                PAGE_UP,
                PAGE_DOWN,
                END,
                HOME,
                LEFT,
                UP,
                RIGHT,
                DOWN,
                PRINT_SCREEN,
                INSERT,
                DELETE,
                ZERO,
                ONE,
                TWO,
                THREE,
                FOUR,
                FIVE,
                SIX,
                SEVEN,
                EIGHT,
                NINE,
                NUMPAD_ZERO,
                NUMPAD_ONE,
                NUMPAD_TWO,
                NUMPAD_THREE,
                NUMPAD_FOUR,
                NUMPAD_FIVE,
                NUMPAD_SIX,
                NUMPAD_SEVEN,
                NUMPAD_EIGHT,
                NUMPAD_NINE,
                A,
                B,
                C,
                D,
                E,
                F,
                G,
                H,
                I,
                J,
                K,
                L,
                M,
                N,
                O,
                P,
                Q,
                R,
                S,
                T,
                U,
                V,
                W,
                X,
                Y,
                Z,
                F1,
                F2,
                F3,
                F4,
                F5,
                F6,
                F7,
                F8,
                F9,
                F10,
                F11,
                F12,
                SEMICOLON,
                PLUS,
                COMMA,
                MINUS,
                PERIOD,
                FORWARD_SLASH,
                BACK_SLASH,
                QUOTES,
                BACKTICK,
                OPEN_BRACKET,
                CLOSED_BRACKET,
            }

            function UpDuration(key: Phaser.Input.Keyboard.Key, duration?: integer): boolean;

        }

        namespace Mouse {
            class MouseManager {
                constructor(inputManager: Phaser.Input.InputManager);

                manager: Phaser.Input.InputManager;

                capture: boolean;

                enabled: boolean;

                target: any;

                locked: boolean;

                disableContextMenu(): Phaser.Input.Mouse.MouseManager;

                requestPointerLock(): void;

                pointerLockChange(event: MouseEvent): void;

                releasePointerLock(): void;

                onMouseMove(event: MouseEvent): void;

                onMouseDown(event: MouseEvent): void;

                onMouseUp(event: MouseEvent): void;

                startListeners(): void;

                stopListeners(): void;

                destroy(): void;

            }

        }

        class Pointer {
            constructor(manager: Phaser.Input.InputManager, id: integer);

            manager: Phaser.Input.InputManager;

            readonly id: integer;

            event: TouchEvent | MouseEvent;

            camera: Phaser.Cameras.Scene2D.Camera;

            buttons: integer;

            position: Phaser.Math.Vector2;

            worldX: number;

            worldY: number;

            downX: number;

            downY: number;

            downTime: number;

            upX: number;

            upY: number;

            upTime: number;

            primaryDown: boolean;

            dragState: number;

            isDown: boolean;

            dirty: boolean;

            justDown: boolean;

            justUp: boolean;

            justMoved: boolean;

            wasTouch: boolean;

            movementX: number;

            movementY: number;

            identifier: number;

            pointerId: number;

            active: boolean;

            positionToCamera(camera: Phaser.Cameras.Scene2D.Camera, output?: Phaser.Math.Vector2 | object): Phaser.Math.Vector2 | object;

            noButtonDown(): boolean;

            leftButtonDown(): boolean;

            rightButtonDown(): boolean;

            middleButtonDown(): boolean;

            backButtonDown(): boolean;

            forwardButtonDown(): boolean;

            destroy(): void;

            x: number;

            y: number;

        }

        namespace Touch {
            class TouchManager {
                constructor(inputManager: Phaser.Input.InputManager);

                manager: Phaser.Input.InputManager;

                capture: boolean;

                enabled: boolean;

                target: any;

                onTouchStart(event: TouchEvent): void;

                onTouchMove(event: TouchEvent): void;

                onTouchEnd(event: TouchEvent): void;

                startListeners(): void;

                stopListeners(): void;

                destroy(): void;

            }

        }

    }

    namespace Loader {
        var LOADER_IDLE: integer;

        var LOADER_LOADING: integer;

        var LOADER_PROCESSING: integer;

        var LOADER_COMPLETE: integer;

        var LOADER_SHUTDOWN: integer;

        var LOADER_DESTROYED: integer;

        var FILE_PENDING: integer;

        var FILE_LOADING: integer;

        var FILE_LOADED: integer;

        var FILE_FAILED: integer;

        var FILE_PROCESSING: integer;

        var FILE_ERRORED: integer;

        var FILE_COMPLETE: integer;

        var FILE_DESTROYED: integer;

        var FILE_POPULATED: integer;

        class File {
            constructor(loader: Phaser.Loader.LoaderPlugin, fileConfig: FileConfig);

            loader: Phaser.Loader.LoaderPlugin;

            cache: Phaser.Cache.BaseCache | Phaser.Textures.TextureManager;

            type: string;

            key: string;

            url: string;

            src: string;

            xhrSettings: XHRSettingsObject;

            xhrLoader: XMLHttpRequest;

            state: integer;

            bytesTotal: number;

            bytesLoaded: number;

            percentComplete: number;

            crossOrigin: string | undefined;

            data: any;

            config: any;

            multiFile: Phaser.Loader.MultiFile;

            linkFile: Phaser.Loader.File;

            setLink(fileB: Phaser.Loader.File): void;

            resetXHR(): void;

            load(): void;

            onLoad(xhr: XMLHttpRequest, event: ProgressEvent): void;

            onError(event: ProgressEvent): void;

            onProgress(event: ProgressEvent): void;

            onProcess(): void;

            onProcessComplete(): void;

            onProcessError(): void;

            hasCacheConflict(): boolean;

            addToCache(): void;

            pendingDestroy(): void;

            destroy(): void;

            static createObjectURL(image: HTMLImageElement, blob: Blob, defaultType: string): void;

            static revokeObjectURL(image: HTMLImageElement): void;

        }

        namespace FileTypes {
            class AnimationJSONFile extends Phaser.Loader.File {
                constructor(loader: Phaser.Loader.LoaderPlugin, key: string | Phaser.Loader.FileTypes.JSONFileConfig, url?: string, xhrSettings?: XHRSettingsObject, dataKey?: string);

                onProcess(): void;

                onLoadComplete(): void;

            }

            type AtlasJSONFileConfig = {
                key: string;
                textureURL?: string;
                textureExtension?: string;
                textureXhrSettings?: XHRSettingsObject;
                normalMap?: string;
                atlasURL?: string;
                atlasExtension?: string;
                atlasXhrSettings?: XHRSettingsObject;
            };

            class AtlasJSONFile extends Phaser.Loader.MultiFile {
                constructor(loader: Phaser.Loader.LoaderPlugin, key: string | Phaser.Loader.FileTypes.AtlasJSONFileConfig, textureURL?: string | string[], atlasURL?: string, textureXhrSettings?: XHRSettingsObject, atlasXhrSettings?: XHRSettingsObject);

                addToCache(): void;

            }

            type AtlasXMLFileConfig = {
                key: string;
                textureURL?: string;
                textureExtension?: string;
                textureXhrSettings?: XHRSettingsObject;
                normalMap?: string;
                atlasURL?: string;
                atlasExtension?: string;
                atlasXhrSettings?: XHRSettingsObject;
            };

            class AtlasXMLFile extends Phaser.Loader.MultiFile {
                constructor(loader: Phaser.Loader.LoaderPlugin, key: string | Phaser.Loader.FileTypes.AtlasXMLFileConfig, textureURL?: string | string[], atlasURL?: string, textureXhrSettings?: XHRSettingsObject, atlasXhrSettings?: XHRSettingsObject);

                addToCache(): void;

            }

            type AudioFileConfig = {
                key: string;
                urlConfig?: string;
                xhrSettings?: XHRSettingsObject;
                audioContext?: AudioContext;
            };

            class AudioFile extends Phaser.Loader.File {
                constructor(loader: Phaser.Loader.LoaderPlugin, key: string | Phaser.Loader.FileTypes.AudioFileConfig, urlConfig?: any, xhrSettings?: XHRSettingsObject, audioContext?: AudioContext);

                onProcess(): void;

            }

            type AudioSpriteFileConfig = {
                key: string;
                jsonURL: string;
                jsonXhrSettings?: XHRSettingsObject;
                audioURL?: string;
                audioConfig?: any;
                audioXhrSettings?: XHRSettingsObject;
            };

            class AudioSpriteFile extends Phaser.Loader.MultiFile {
                constructor(loader: Phaser.Loader.LoaderPlugin, key: string | Phaser.Loader.FileTypes.AudioSpriteFileConfig, jsonURL: string, audioURL?: string, audioConfig?: any, audioXhrSettings?: XHRSettingsObject, jsonXhrSettings?: XHRSettingsObject);

            }

            type BinaryFileConfig = {
                key: string;
                url?: string;
                extension?: string;
                xhrSettings?: XHRSettingsObject;
                dataType?: any;
            };

            class BinaryFile extends Phaser.Loader.File {
                constructor(loader: Phaser.Loader.LoaderPlugin, key: string | Phaser.Loader.FileTypes.BinaryFileConfig, url?: string, xhrSettings?: XHRSettingsObject, dataType?: any);

                onProcess(): void;

            }

            type BitmapFontFileConfig = {
                key: string;
                textureURL?: string;
                textureExtension?: string;
                textureXhrSettings?: XHRSettingsObject;
                normalMap?: string;
                fontDataURL?: string;
                fontDataExtension?: string;
                fontDataXhrSettings?: XHRSettingsObject;
            };

            class BitmapFontFile extends Phaser.Loader.MultiFile {
                constructor(loader: Phaser.Loader.LoaderPlugin, key: string | Phaser.Loader.FileTypes.BitmapFontFileConfig, textureURL?: string | string[], fontDataURL?: string, textureXhrSettings?: XHRSettingsObject, fontDataXhrSettings?: XHRSettingsObject);

                addToCache(): void;

            }

            type GLSLFileConfig = {
                key: string;
                url?: string;
                extension?: string;
                xhrSettings?: XHRSettingsObject;
            };

            class GLSLFile extends Phaser.Loader.File {
                constructor(loader: Phaser.Loader.LoaderPlugin, key: string | Phaser.Loader.FileTypes.TextFileConfig, url?: string, xhrSettings?: XHRSettingsObject);

                onProcess(): void;

            }

            class HTML5AudioFile extends Phaser.Loader.File {
                constructor(loader: Phaser.Loader.LoaderPlugin, key: string | Phaser.Loader.FileTypes.AudioFileConfig, urlConfig?: string, xhrSettings?: XHRSettingsObject);

                onLoad(): void;

                onError(): void;

                onProgress(): void;

                load(): void;

            }

            type HTMLFileConfig = {
                key: string;
                url?: string;
                extension?: string;
                xhrSettings?: XHRSettingsObject;
                width?: integer;
                height?: integer;
            };

            class HTMLFile extends Phaser.Loader.File {
                constructor(loader: Phaser.Loader.LoaderPlugin, key: string | Phaser.Loader.FileTypes.HTMLFileConfig, url?: string, width?: integer, height?: integer, xhrSettings?: XHRSettingsObject);

                onProcess(): void;

                addToCache(): void;

            }

            type ImageFrameConfig = {
                frameWidth: integer;
                frameHeight?: integer;
                startFrame?: integer;
                endFrame?: integer;
                margin?: integer;
                spacing?: integer;
            };

            type ImageFileConfig = {
                key: string;
                url?: string;
                extension?: string;
                normalMap?: string;
                frameConfig?: Phaser.Loader.FileTypes.ImageFrameConfig;
                xhrSettings?: XHRSettingsObject;
            };

            class ImageFile extends Phaser.Loader.File {
                constructor(loader: Phaser.Loader.LoaderPlugin, key: string | Phaser.Loader.FileTypes.ImageFileConfig, url?: string | string[], xhrSettings?: XHRSettingsObject, frameConfig?: Phaser.Loader.FileTypes.ImageFrameConfig);

                onProcess(): void;

                addToCache(): void;

            }

            type JSONFileConfig = {
                key: string;
                url?: string | any;
                extension?: string;
                dataKey?: string;
                xhrSettings?: XHRSettingsObject;
            };

            class JSONFile extends Phaser.Loader.File {
                constructor(loader: Phaser.Loader.LoaderPlugin, key: string | Phaser.Loader.FileTypes.JSONFileConfig, url?: string, xhrSettings?: XHRSettingsObject, dataKey?: string);

                onProcess(): void;

            }

            type MultiAtlasFileConfig = {
                key: string;
                atlasURL?: string;
                atlasExtension?: string;
                atlasXhrSettings?: XHRSettingsObject;
                path?: string;
                baseURL?: string;
                textureXhrSettings?: XHRSettingsObject;
            };

            class MultiAtlasFile extends Phaser.Loader.MultiFile {
                constructor(loader: Phaser.Loader.LoaderPlugin, key: string, atlasURL?: string, path?: string, baseURL?: string, atlasXhrSettings?: XHRSettingsObject, textureXhrSettings?: XHRSettingsObject);

            }

            type PackFileConfig = {
                key: string;
                url?: string | any;
                extension?: string;
                dataKey?: string;
                xhrSettings?: XHRSettingsObject;
            };

            class PackFile extends Phaser.Loader.File {
                constructor(loader: Phaser.Loader.LoaderPlugin, key: string | Phaser.Loader.FileTypes.JSONFileConfig, url?: string, xhrSettings?: XHRSettingsObject, dataKey?: string);

                onProcess(): void;

            }

            type PluginFileConfig = {
                key: string;
                url?: string;
                extension?: string;
                start?: boolean;
                mapping?: string;
                xhrSettings?: XHRSettingsObject;
            };

            class PluginFile extends Phaser.Loader.File {
                constructor(loader: Phaser.Loader.LoaderPlugin, key: string | Phaser.Loader.FileTypes.PluginFileConfig, url?: string, start?: boolean, mapping?: string, xhrSettings?: XHRSettingsObject);

                onProcess(): void;

            }

            type ScenePluginFileConfig = {
                key: string;
                url?: string | Function;
                extension?: string;
                systemKey?: string;
                sceneKey?: string;
                xhrSettings?: XHRSettingsObject;
            };

            class ScenePluginFile extends Phaser.Loader.File {
                constructor(loader: Phaser.Loader.LoaderPlugin, key: string | Phaser.Loader.FileTypes.ScenePluginFileConfig, url?: string, systemKey?: string, sceneKey?: string, xhrSettings?: XHRSettingsObject);

                onProcess(): void;

            }

            type ScriptFileConfig = {
                key: string;
                url?: string;
                extension?: string;
                xhrSettings?: XHRSettingsObject;
            };

            class ScriptFile extends Phaser.Loader.File {
                constructor(loader: Phaser.Loader.LoaderPlugin, key: string | Phaser.Loader.FileTypes.ScriptFileConfig, url?: string, xhrSettings?: XHRSettingsObject);

                onProcess(): void;

            }

            type SpriteSheetFileConfig = {
                key: string;
                url?: string;
                extension?: string;
                normalMap?: string;
                frameConfig?: Phaser.Loader.FileTypes.ImageFrameConfig;
                xhrSettings?: XHRSettingsObject;
            };

            class SpriteSheetFile extends Phaser.Loader.File {
                constructor(loader: Phaser.Loader.LoaderPlugin, key: string | Phaser.Loader.FileTypes.SpriteSheetFileConfig, url?: string | string[], frameConfig?: Phaser.Loader.FileTypes.ImageFrameConfig, xhrSettings?: XHRSettingsObject);

                addToCache(): void;

            }

            type SVGFileConfig = {
                key: string;
                url?: string;
                extension?: string;
                xhrSettings?: XHRSettingsObject;
            };

            class SVGFile extends Phaser.Loader.File {
                constructor(loader: Phaser.Loader.LoaderPlugin, key: string | Phaser.Loader.FileTypes.SVGFileConfig, url?: string, xhrSettings?: XHRSettingsObject);

                onProcess(): void;

                addToCache(): void;

            }

            type TextFileConfig = {
                key: string;
                url?: string;
                extension?: string;
                xhrSettings?: XHRSettingsObject;
            };

            class TextFile extends Phaser.Loader.File {
                constructor(loader: Phaser.Loader.LoaderPlugin, key: string | Phaser.Loader.FileTypes.TextFileConfig, url?: string, xhrSettings?: XHRSettingsObject);

                onProcess(): void;

            }

            type TilemapCSVFileConfig = {
                key: string;
                url?: string;
                extension?: string;
                xhrSettings?: XHRSettingsObject;
            };

            class TilemapCSVFile extends Phaser.Loader.File {
                constructor(loader: Phaser.Loader.LoaderPlugin, key: string | Phaser.Loader.FileTypes.TilemapCSVFileConfig, url?: string, xhrSettings?: XHRSettingsObject);

                onProcess(): void;

                addToCache(): void;

            }

            type TilemapImpactFileConfig = {
                key: string;
                url?: string;
                extension?: string;
                xhrSettings?: XHRSettingsObject;
            };

            class TilemapImpactFile extends Phaser.Loader.File {
                constructor(loader: Phaser.Loader.LoaderPlugin, key: string | Phaser.Loader.FileTypes.TilemapImpactFileConfig, url?: string, xhrSettings?: XHRSettingsObject);

                addToCache(): void;

            }

            type TilemapJSONFileConfig = {
                key: string;
                url?: string;
                extension?: string;
                xhrSettings?: XHRSettingsObject;
            };

            class TilemapJSONFile extends Phaser.Loader.File {
                constructor(loader: Phaser.Loader.LoaderPlugin, key: string | Phaser.Loader.FileTypes.TilemapJSONFileConfig, url?: string, xhrSettings?: XHRSettingsObject);

                addToCache(): void;

            }

            type UnityAtlasFileConfig = {
                key: string;
                textureURL?: string;
                textureExtension?: string;
                textureXhrSettings?: XHRSettingsObject;
                normalMap?: string;
                atlasURL?: string;
                atlasExtension?: string;
                atlasXhrSettings?: XHRSettingsObject;
            };

            class UnityAtlasFile extends Phaser.Loader.MultiFile {
                constructor(loader: Phaser.Loader.LoaderPlugin, key: string | Phaser.Loader.FileTypes.UnityAtlasFileConfig, textureURL?: string | string[], atlasURL?: string, textureXhrSettings?: XHRSettingsObject, atlasXhrSettings?: XHRSettingsObject);

                addToCache(): void;

            }

            type XMLFileConfig = {
                key: string;
                url?: string;
                extension?: string;
                xhrSettings?: XHRSettingsObject;
            };

            class XMLFile extends Phaser.Loader.File {
                constructor(loader: Phaser.Loader.LoaderPlugin, key: string | Phaser.Loader.FileTypes.XMLFileConfig, url?: string, xhrSettings?: XHRSettingsObject);

                onProcess(): void;

            }

        }

        function GetURL(file: Phaser.Loader.File, baseURL: string): string;

        class LoaderPlugin extends Phaser.Events.EventEmitter {
            constructor(scene: Phaser.Scene);

            animation(key: string | Phaser.Loader.FileTypes.JSONFileConfig | Phaser.Loader.FileTypes.JSONFileConfig[], url?: string, dataKey?: string, xhrSettings?: XHRSettingsObject): Phaser.Loader.LoaderPlugin;

            atlas(key: string | Phaser.Loader.FileTypes.AtlasJSONFileConfig | Phaser.Loader.FileTypes.AtlasJSONFileConfig[], textureURL?: string | string[], atlasURL?: string, textureXhrSettings?: XHRSettingsObject, atlasXhrSettings?: XHRSettingsObject): Phaser.Loader.LoaderPlugin;

            atlasXML(key: string | Phaser.Loader.FileTypes.AtlasXMLFileConfig | Phaser.Loader.FileTypes.AtlasXMLFileConfig[], textureURL?: string | string[], atlasURL?: string, textureXhrSettings?: XHRSettingsObject, atlasXhrSettings?: XHRSettingsObject): Phaser.Loader.LoaderPlugin;

            audio(key: string | Phaser.Loader.FileTypes.AudioFileConfig | Phaser.Loader.FileTypes.AudioFileConfig[], urls?: string | string[], config?: any, xhrSettings?: XHRSettingsObject): Phaser.Loader.LoaderPlugin;

            audioSprite(key: string | Phaser.Loader.FileTypes.AudioSpriteFileConfig | Phaser.Loader.FileTypes.AudioSpriteFileConfig[], jsonURL: string, audioURL?: string, audioConfig?: any, audioXhrSettings?: XHRSettingsObject, jsonXhrSettings?: XHRSettingsObject): Phaser.Loader.LoaderPlugin;

            binary(key: string | Phaser.Loader.FileTypes.BinaryFileConfig | Phaser.Loader.FileTypes.BinaryFileConfig[], url?: string, dataType?: any, xhrSettings?: XHRSettingsObject): Phaser.Loader.LoaderPlugin;

            bitmapFont(key: string | Phaser.Loader.FileTypes.BitmapFontFileConfig | Phaser.Loader.FileTypes.BitmapFontFileConfig[], textureURL?: string | string[], fontDataURL?: string, textureXhrSettings?: XHRSettingsObject, fontDataXhrSettings?: XHRSettingsObject): Phaser.Loader.LoaderPlugin;

            glsl(key: string | Phaser.Loader.FileTypes.GLSLFileConfig | Phaser.Loader.FileTypes.GLSLFileConfig[], url?: string, xhrSettings?: XHRSettingsObject): Phaser.Loader.LoaderPlugin;

            html(key: string | Phaser.Loader.FileTypes.ImageFileConfig | Phaser.Loader.FileTypes.ImageFileConfig[], url?: string, width?: integer, height?: integer, xhrSettings?: XHRSettingsObject): Phaser.Loader.LoaderPlugin;

            image(key: string | Phaser.Loader.FileTypes.ImageFileConfig | Phaser.Loader.FileTypes.ImageFileConfig[], url?: string | string[], xhrSettings?: XHRSettingsObject): Phaser.Loader.LoaderPlugin;

            json(key: string | Phaser.Loader.FileTypes.JSONFileConfig | Phaser.Loader.FileTypes.JSONFileConfig[], url?: string, dataKey?: string, xhrSettings?: XHRSettingsObject): Phaser.Loader.LoaderPlugin;

            multiatlas(key: string | Phaser.Loader.FileTypes.MultiAtlasFileConfig | Phaser.Loader.FileTypes.MultiAtlasFileConfig[], atlasURL?: string, path?: string, baseURL?: string, atlasXhrSettings?: XHRSettingsObject): Phaser.Loader.LoaderPlugin;

            pack(key: string | Phaser.Loader.FileTypes.PackFileConfig | Phaser.Loader.FileTypes.PackFileConfig[], url?: string, dataKey?: string, xhrSettings?: XHRSettingsObject): Phaser.Loader.LoaderPlugin;

            plugin(key: string | Phaser.Loader.FileTypes.PluginFileConfig | Phaser.Loader.FileTypes.PluginFileConfig[], url?: string | Function, start?: boolean, mapping?: string, xhrSettings?: XHRSettingsObject): Phaser.Loader.LoaderPlugin;

            scenePlugin(key: string | Phaser.Loader.FileTypes.ScenePluginFileConfig | Phaser.Loader.FileTypes.ScenePluginFileConfig[], url?: string | Function, systemKey?: string, sceneKey?: string, xhrSettings?: XHRSettingsObject): Phaser.Loader.LoaderPlugin;

            script(key: string | Phaser.Loader.FileTypes.ScriptFileConfig | Phaser.Loader.FileTypes.ScriptFileConfig[], url?: string, xhrSettings?: XHRSettingsObject): Phaser.Loader.LoaderPlugin;

            spritesheet(key: string | Phaser.Loader.FileTypes.SpriteSheetFileConfig | Phaser.Loader.FileTypes.SpriteSheetFileConfig[], url?: string, frameConfig?: Phaser.Loader.FileTypes.ImageFrameConfig, xhrSettings?: XHRSettingsObject): Phaser.Loader.LoaderPlugin;

            svg(key: string | Phaser.Loader.FileTypes.SVGFileConfig | Phaser.Loader.FileTypes.SVGFileConfig[], url?: string, xhrSettings?: XHRSettingsObject): Phaser.Loader.LoaderPlugin;

            text(key: string | Phaser.Loader.FileTypes.TextFileConfig | Phaser.Loader.FileTypes.TextFileConfig[], url?: string, xhrSettings?: XHRSettingsObject): Phaser.Loader.LoaderPlugin;

            tilemapCSV(key: string | Phaser.Loader.FileTypes.TilemapCSVFileConfig | Phaser.Loader.FileTypes.TilemapCSVFileConfig[], url?: string, xhrSettings?: XHRSettingsObject): Phaser.Loader.LoaderPlugin;

            tilemapImpact(key: string | Phaser.Loader.FileTypes.TilemapImpactFileConfig | Phaser.Loader.FileTypes.TilemapImpactFileConfig[], url?: string, xhrSettings?: XHRSettingsObject): Phaser.Loader.LoaderPlugin;

            tilemapTiledJSON(key: string | Phaser.Loader.FileTypes.TilemapJSONFileConfig | Phaser.Loader.FileTypes.TilemapJSONFileConfig[], url?: string, xhrSettings?: XHRSettingsObject): Phaser.Loader.LoaderPlugin;

            unityAtlas(key: string | Phaser.Loader.FileTypes.UnityAtlasFileConfig | Phaser.Loader.FileTypes.UnityAtlasFileConfig[], textureURL?: string | string[], atlasURL?: string, textureXhrSettings?: XHRSettingsObject, atlasXhrSettings?: XHRSettingsObject): Phaser.Loader.LoaderPlugin;

            xml(key: string | Phaser.Loader.FileTypes.XMLFileConfig | Phaser.Loader.FileTypes.XMLFileConfig[], url?: string, xhrSettings?: XHRSettingsObject): Phaser.Loader.LoaderPlugin;

            protected scene: Phaser.Scene;

            protected systems: Phaser.Scenes.Systems;

            protected cacheManager: Phaser.Cache.CacheManager;

            protected textureManager: Phaser.Textures.TextureManager;

            prefix: string;

            path: string;

            baseURL: string;

            maxParallelDownloads: integer;

            xhr: XHRSettingsObject;

            crossOrigin: string;

            totalToLoad: integer;

            progress: number;

            list: Phaser.Structs.Set<Phaser.Loader.File>;

            inflight: Phaser.Structs.Set<Phaser.Loader.File>;

            queue: Phaser.Structs.Set<Phaser.Loader.File>;

            totalFailed: integer;

            totalComplete: integer;

            readonly state: integer;

            setBaseURL(url?: string): Phaser.Loader.LoaderPlugin;

            setPath(path?: string): Phaser.Loader.LoaderPlugin;

            setPrefix(prefix?: string): Phaser.Loader.LoaderPlugin;

            setCORS(crossOrigin?: string): Phaser.Loader.LoaderPlugin;

            addFile(file: Phaser.Loader.File | Phaser.Loader.File[]): void;

            keyExists(file: Phaser.Loader.File): boolean;

            addPack(data: any, packKey?: string): boolean;

            isLoading(): boolean;

            isReady(): boolean;

            start(): void;

            updateProgress(): void;

            update(): void;

            nextFile(file: Phaser.Loader.File, success: boolean): void;

            fileProcessComplete(file: Phaser.Loader.File): void;

            loadComplete(): void;

            flagForRemoval(file: Phaser.Loader.File): void;

            saveJSON(data: any, filename?: string): Phaser.Loader.LoaderPlugin;

            save(data: any, filename?: string, filetype?: string): Phaser.Loader.LoaderPlugin;

            reset(): void;

        }

        function MergeXHRSettings(global: XHRSettingsObject, local: XHRSettingsObject): XHRSettingsObject;

        class MultiFile {
            constructor(loader: Phaser.Loader.LoaderPlugin, type: string, key: string, files: Phaser.Loader.File[]);

            onFileComplete(file: Phaser.Loader.File): void;

            addToCache(): void;

            loader: Phaser.Loader.LoaderPlugin;

            type: string;

            key: string;

            files: Phaser.Loader.File[];

            complete: boolean;

            pending: integer;

            failed: integer;

            config: any;

            isReadyToProcess(): boolean;

            addToMultiFile(files: Phaser.Loader.File): Phaser.Loader.MultiFile;

            onFileFailed(file: Phaser.Loader.File): void;

        }

        function XHRLoader(file: Phaser.Loader.File, globalXHRSettings: XHRSettingsObject): XMLHttpRequest;

        function XHRSettings(responseType?: XMLHttpRequestResponseType, async?: boolean, user?: string, password?: string, timeout?: integer): XHRSettingsObject;

    }

    namespace Math {
        namespace Angle {
            function Between(x1: number, y1: number, x2: number, y2: number): number;

            function BetweenPoints(point1: Phaser.Geom.Point | object, point2: Phaser.Geom.Point | object): number;

            function BetweenPointsY(point1: Phaser.Geom.Point | object, point2: Phaser.Geom.Point | object): number;

            function BetweenY(x1: number, y1: number, x2: number, y2: number): number;

            function Normalize(angle: number): number;

            function Reverse(angle: number): number;

            function RotateTo(currentAngle: number, targetAngle: number, lerp?: number): number;

            function ShortestBetween(angle1: number, angle2: number): number;

            function Wrap(angle: number): number;

            function WrapDegrees(angle: number): number;

        }

        function Average(values: number[]): number;

        function Bernstein(n: number, i: number): number;

        function Between(min: integer, max: integer): integer;

        function CatmullRom(t: number, p0: number, p1: number, p2: number, p3: number): number;

        function CeilTo(value: number, place?: number, base?: integer): number;

        function Clamp(value: number, min: number, max: number): number;

        var PI2: number;

        var TAU: number;

        var EPSILON: number;

        var DEG_TO_RAD: number;

        var RAD_TO_DEG: number;

        var RND: Phaser.Math.RandomDataGenerator;

        function DegToRad(degrees: integer): number;

        function Difference(a: number, b: number): number;

        namespace Distance {
            function Between(x1: number, y1: number, x2: number, y2: number): number;

            function Power(x1: number, y1: number, x2: number, y2: number, pow: number): number;

            function Squared(x1: number, y1: number, x2: number, y2: number): number;

        }

        namespace Easing {
            namespace Back {
                function In(v: number, overshoot?: number): number;

                function InOut(v: number, overshoot?: number): number;

                function Out(v: number, overshoot?: number): number;

            }

            namespace Bounce {
                function In(v: number): number;

                function InOut(v: number): number;

                function Out(v: number): number;

            }

            namespace Circular {
                function In(v: number): number;

                function InOut(v: number): number;

                function Out(v: number): number;

            }

            namespace Cubic {
                function In(v: number): number;

                function InOut(v: number): number;

                function Out(v: number): number;

            }

            namespace Elastic {
                function In(v: number, amplitude?: number, period?: number): number;

                function InOut(v: number, amplitude?: number, period?: number): number;

                function Out(v: number, amplitude?: number, period?: number): number;

            }

            namespace Expo {
                function In(v: number): number;

                function InOut(v: number): number;

                function Out(v: number): number;

            }

            namespace Linear {
                function Linear(v: number): number;

            }

            namespace Quadratic {
                function In(v: number): number;

                function InOut(v: number): number;

                function Out(v: number): number;

            }

            namespace Quartic {
                function In(v: number): number;

                function InOut(v: number): number;

                function Out(v: number): number;

            }

            namespace Quintic {
                function In(v: number): number;

                function InOut(v: number): number;

                function Out(v: number): number;

            }

            namespace Sine {
                function In(v: number): number;

                function InOut(v: number): number;

                function Out(v: number): number;

            }

            namespace Stepped {
                function Stepped(v: number, steps?: number): number;

            }

        }

        function Factorial(value: number): number;

        function FloatBetween(min: number, max: number): number;

        function FloorTo(value: number, place?: integer, base?: integer): number;

        function FromPercent(percent: number, min: number, max?: number): number;

        namespace Fuzzy {
            function Ceil(value: number, epsilon?: number): number;

            function Equal(a: number, b: number, epsilon?: number): boolean;

            function Floor(value: number, epsilon?: number): number;

            function GreaterThan(a: number, b: number, epsilon?: number): boolean;

            function LessThan(a: number, b: number, epsilon?: number): boolean;

        }

        function GetSpeed(distance: number, time: integer): number;

        namespace Interpolation {
            function Bezier(v: number[], k: number): number;

            function CatmullRom(v: number[], k: number): number;

            function CubicBezier(t: number, p0: number, p1: number, p2: number, p3: number): number;

            function Linear(v: number[], k: number): number;

            function QuadraticBezier(t: number, p0: number, p1: number, p2: number): number;

            function SmootherStep(t: number, min: number, max: number): number;

            function SmoothStep(t: number, min: number, max: number): number;

        }

        function IsEven(value: number): boolean;

        function IsEvenStrict(value: number): boolean;

        function Linear(p0: number, p1: number, t: number): number;

        class Matrix3 {
            constructor(m?: Phaser.Math.Matrix3);

            val: Float32Array;

            clone(): Phaser.Math.Matrix3;

            set(src: Phaser.Math.Matrix3): Phaser.Math.Matrix3;

            copy(src: Phaser.Math.Matrix3): Phaser.Math.Matrix3;

            fromMat4(m: Phaser.Math.Matrix4): Phaser.Math.Matrix3;

            fromArray(a: any[]): Phaser.Math.Matrix3;

            identity(): Phaser.Math.Matrix3;

            transpose(): Phaser.Math.Matrix3;

            invert(): Phaser.Math.Matrix3;

            adjoint(): Phaser.Math.Matrix3;

            determinant(): number;

            multiply(src: Phaser.Math.Matrix3): Phaser.Math.Matrix3;

            translate(v: Phaser.Math.Vector2 | Phaser.Math.Vector3 | Phaser.Math.Vector4): Phaser.Math.Matrix3;

            rotate(rad: number): Phaser.Math.Matrix3;

            scale(v: Phaser.Math.Vector2 | Phaser.Math.Vector3 | Phaser.Math.Vector4): Phaser.Math.Matrix3;

            fromQuat(q: Phaser.Math.Quaternion): Phaser.Math.Matrix3;

            normalFromMat4(m: Phaser.Math.Matrix4): Phaser.Math.Matrix3;

        }

        class Matrix4 {
            constructor(m?: Phaser.Math.Matrix4);

            val: Float32Array;

            clone(): Phaser.Math.Matrix4;

            set(src: Phaser.Math.Matrix4): Phaser.Math.Matrix4;

            copy(src: Phaser.Math.Matrix4): Phaser.Math.Matrix4;

            fromArray(a: any[]): Phaser.Math.Matrix4;

            zero(): Phaser.Math.Matrix4;

            xyz(x: number, y: number, z: number): Phaser.Math.Matrix4;

            scaling(x: number, y: number, z: number): Phaser.Math.Matrix4;

            identity(): Phaser.Math.Matrix4;

            transpose(): Phaser.Math.Matrix4;

            invert(): Phaser.Math.Matrix4;

            adjoint(): Phaser.Math.Matrix4;

            determinant(): number;

            multiply(src: Phaser.Math.Matrix4): Phaser.Math.Matrix4;

            multiplyLocal(src: Phaser.Math.Matrix4): Phaser.Math.Matrix4;

            translate(v: Phaser.Math.Vector3 | Phaser.Math.Vector4): Phaser.Math.Matrix4;

            scale(v: Phaser.Math.Vector3 | Phaser.Math.Vector4): Phaser.Math.Matrix4;

            makeRotationAxis(axis: Phaser.Math.Vector3 | Phaser.Math.Vector4, angle: number): Phaser.Math.Matrix4;

            rotate(rad: number, axis: Phaser.Math.Vector3): Phaser.Math.Matrix4;

            rotateX(rad: number): Phaser.Math.Matrix4;

            rotateY(rad: number): Phaser.Math.Matrix4;

            rotateZ(rad: number): Phaser.Math.Matrix4;

            fromRotationTranslation(q: Phaser.Math.Quaternion, v: Phaser.Math.Vector3): Phaser.Math.Matrix4;

            fromQuat(q: Phaser.Math.Quaternion): Phaser.Math.Matrix4;

            frustum(left: number, right: number, bottom: number, top: number, near: number, far: number): Phaser.Math.Matrix4;

            perspective(fovy: number, aspect: number, near: number, far: number): Phaser.Math.Matrix4;

            perspectiveLH(width: number, height: number, near: number, far: number): Phaser.Math.Matrix4;

            ortho(left: number, right: number, bottom: number, top: number, near: number, far: number): Phaser.Math.Matrix4;

            lookAt(eye: Phaser.Math.Vector3, center: Phaser.Math.Vector3, up: Phaser.Math.Vector3): Phaser.Math.Matrix4;

            yawPitchRoll(yaw: number, pitch: number, roll: number): Phaser.Math.Matrix4;

            setWorldMatrix(rotation: Phaser.Math.Vector3, position: Phaser.Math.Vector3, scale: Phaser.Math.Vector3, viewMatrix?: Phaser.Math.Matrix4, projectionMatrix?: Phaser.Math.Matrix4): Phaser.Math.Matrix4;

        }

        function MaxAdd(value: number, amount: number, max: number): number;

        function MinSub(value: number, amount: number, min: number): number;

        function Percent(value: number, min: number, max?: number, upperMax?: number): number;

        namespace Pow2 {
            function GetPowerOfTwo(value: number): integer;

            function IsSizePowerOfTwo(width: number, height: number): boolean;

            function IsValuePowerOfTwo(value: number): boolean;

        }

        class Quaternion {
            constructor(x?: number, y?: number, z?: number, w?: number);

            x: number;

            y: number;

            z: number;

            w: number;

            copy(src: Phaser.Math.Quaternion | Phaser.Math.Vector4): Phaser.Math.Quaternion;

            set(x?: number | object, y?: number, z?: number, w?: number): Phaser.Math.Quaternion;

            add(v: Phaser.Math.Quaternion | Phaser.Math.Vector4): Phaser.Math.Quaternion;

            subtract(v: Phaser.Math.Quaternion | Phaser.Math.Vector4): Phaser.Math.Quaternion;

            scale(scale: number): Phaser.Math.Quaternion;

            length(): number;

            lengthSq(): number;

            normalize(): Phaser.Math.Quaternion;

            dot(v: Phaser.Math.Quaternion | Phaser.Math.Vector4): number;

            lerp(v: Phaser.Math.Quaternion | Phaser.Math.Vector4, t?: number): Phaser.Math.Quaternion;

            rotationTo(a: Phaser.Math.Vector3, b: Phaser.Math.Vector3): Phaser.Math.Quaternion;

            setAxes(view: Phaser.Math.Vector3, right: Phaser.Math.Vector3, up: Phaser.Math.Vector3): Phaser.Math.Quaternion;

            identity(): Phaser.Math.Quaternion;

            setAxisAngle(axis: Phaser.Math.Vector3, rad: number): Phaser.Math.Quaternion;

            multiply(b: Phaser.Math.Quaternion | Phaser.Math.Vector4): Phaser.Math.Quaternion;

            slerp(b: Phaser.Math.Quaternion | Phaser.Math.Vector4, t: number): Phaser.Math.Quaternion;

            invert(): Phaser.Math.Quaternion;

            conjugate(): Phaser.Math.Quaternion;

            rotateX(rad: number): Phaser.Math.Quaternion;

            rotateY(rad: number): Phaser.Math.Quaternion;

            rotateZ(rad: number): Phaser.Math.Quaternion;

            calculateW(): Phaser.Math.Quaternion;

            fromMat3(mat: Phaser.Math.Matrix3): Phaser.Math.Quaternion;

        }

        function RadToDeg(radians: number): integer;

        class RandomDataGenerator {
            constructor(seeds?: string[]);

            signs: number[];

            init(seeds: string | string[]): void;

            sow(seeds: string[]): void;

            integer(): number;

            frac(): number;

            real(): number;

            integerInRange(min: number, max: number): number;

            between(min: number, max: number): number;

            realInRange(min: number, max: number): number;

            normal(): number;

            uuid(): string;

            pick(array: any[]): any;

            sign(): number;

            weightedPick(array: any[]): any;

            timestamp(min: number, max: number): number;

            angle(): number;

            rotation(): number;

            state(state?: string): string;

            shuffle(array?: any[]): any[];

        }

        function RandomXY(vector: Phaser.Math.Vector2, scale?: number): Phaser.Math.Vector2;

        function RandomXYZ(vec3: Phaser.Math.Vector3, radius?: number): Phaser.Math.Vector3;

        function RandomXYZW(vec4: Phaser.Math.Vector4, scale?: number): Phaser.Math.Vector4;

        function Rotate(point: Phaser.Geom.Point | object, angle: number): Phaser.Geom.Point;

        function RotateAround(point: Phaser.Geom.Point | object, x: number, y: number, angle: number): Phaser.Geom.Point;

        function RotateAroundDistance(point: Phaser.Geom.Point | object, x: number, y: number, angle: number, distance: number): Phaser.Geom.Point;

        function RotateVec3(vec: Phaser.Math.Vector3, axis: Phaser.Math.Vector3, radians: number): Phaser.Math.Vector3;

        function RoundAwayFromZero(value: number): number;

        function RoundTo(value: number, place?: integer, base?: integer): number;

        function SinCosTableGenerator(length: number, sinAmp?: number, cosAmp?: number, frequency?: number): SinCosTable;

        function SmootherStep(x: number, min: number, max: number): number;

        function SmoothStep(x: number, min: number, max: number): number;

        namespace Snap {
            function Ceil(value: number, gap: number, start?: number): number;

            function Floor(value: number, gap: number, start?: number): number;

            function To(value: number, gap: number, start?: number): number;

        }

        function TransformXY(x: number, y: number, positionX: number, positionY: number, rotation: number, scaleX: number, scaleY: number, output?: Phaser.Math.Vector2 | Phaser.Geom.Point | object): Phaser.Math.Vector2 | Phaser.Geom.Point | object;

        class Vector2 {
            constructor(x?: number, y?: number);

            x: number;

            y: number;

            clone(): Phaser.Math.Vector2;

            copy(src: Phaser.Math.Vector2): Phaser.Math.Vector2;

            setFromObject(obj: Vector2Like): Phaser.Math.Vector2;

            set(x: number, y?: number): Phaser.Math.Vector2;

            setTo(x: number, y?: number): Phaser.Math.Vector2;

            setToPolar(azimuth: number, radius?: number): Phaser.Math.Vector2;

            equals(v: Phaser.Math.Vector2): boolean;

            angle(): number;

            add(src: Phaser.Math.Vector2): Phaser.Math.Vector2;

            subtract(src: Phaser.Math.Vector2): Phaser.Math.Vector2;

            multiply(src: Phaser.Math.Vector2): Phaser.Math.Vector2;

            scale(value: number): Phaser.Math.Vector2;

            divide(src: Phaser.Math.Vector2): Phaser.Math.Vector2;

            negate(): Phaser.Math.Vector2;

            distance(src: Phaser.Math.Vector2): number;

            distanceSq(src: Phaser.Math.Vector2): number;

            length(): number;

            lengthSq(): number;

            normalize(): Phaser.Math.Vector2;

            normalizeRightHand(): Phaser.Math.Vector2;

            dot(src: Phaser.Math.Vector2): number;

            cross(src: Phaser.Math.Vector2): number;

            lerp(src: Phaser.Math.Vector2, t?: number): Phaser.Math.Vector2;

            transformMat3(mat: Phaser.Math.Matrix3): Phaser.Math.Vector2;

            transformMat4(mat: Phaser.Math.Matrix4): Phaser.Math.Vector2;

            reset(): Phaser.Math.Vector2;

            static ZERO(): void;

        }

        class Vector3 {
            constructor(x?: number, y?: number, z?: number);

            x: number;

            y: number;

            z: number;

            up(): Phaser.Math.Vector3;

            clone(): Phaser.Math.Vector3;

            crossVectors(a: Phaser.Math.Vector3, b: Phaser.Math.Vector3): Phaser.Math.Vector3;

            equals(v: Phaser.Math.Vector3): boolean;

            copy(src: Phaser.Math.Vector2 | Phaser.Math.Vector3): Phaser.Math.Vector3;

            set(x: number | object, y?: number, z?: number): Phaser.Math.Vector3;

            add(v: Phaser.Math.Vector2 | Phaser.Math.Vector3): Phaser.Math.Vector3;

            subtract(v: Phaser.Math.Vector2 | Phaser.Math.Vector3): Phaser.Math.Vector3;

            multiply(v: Phaser.Math.Vector2 | Phaser.Math.Vector3): Phaser.Math.Vector3;

            scale(scale: number): Phaser.Math.Vector3;

            divide(v: Phaser.Math.Vector2 | Phaser.Math.Vector3): Phaser.Math.Vector3;

            negate(): Phaser.Math.Vector3;

            distance(v: Phaser.Math.Vector2 | Phaser.Math.Vector3): number;

            distanceSq(v: Phaser.Math.Vector2 | Phaser.Math.Vector3): number;

            length(): number;

            lengthSq(): number;

            normalize(): Phaser.Math.Vector3;

            dot(v: Phaser.Math.Vector3): number;

            cross(v: Phaser.Math.Vector3): Phaser.Math.Vector3;

            lerp(v: Phaser.Math.Vector3, t?: number): Phaser.Math.Vector3;

            transformMat3(mat: Phaser.Math.Matrix3): Phaser.Math.Vector3;

            transformMat4(mat: Phaser.Math.Matrix4): Phaser.Math.Vector3;

            transformCoordinates(mat: Phaser.Math.Matrix4): Phaser.Math.Vector3;

            transformQuat(q: Phaser.Math.Quaternion): Phaser.Math.Vector3;

            project(mat: Phaser.Math.Matrix4): Phaser.Math.Vector3;

            unproject(viewport: Phaser.Math.Vector4, invProjectionView: Phaser.Math.Matrix4): Phaser.Math.Vector3;

            reset(): Phaser.Math.Vector3;

        }

        class Vector4 {
            constructor(x?: number, y?: number, z?: number, w?: number);

            x: number;

            y: number;

            z: number;

            w: number;

            clone(): Phaser.Math.Vector4;

            copy(src: Phaser.Math.Vector4): Phaser.Math.Vector4;

            equals(v: Phaser.Math.Vector4): boolean;

            set(x: number | object, y: number, z: number, w: number): Phaser.Math.Vector4;

            add(v: Phaser.Math.Vector2 | Phaser.Math.Vector3 | Phaser.Math.Vector4): Phaser.Math.Vector4;

            subtract(v: Phaser.Math.Vector2 | Phaser.Math.Vector3 | Phaser.Math.Vector4): Phaser.Math.Vector4;

            scale(scale: number): Phaser.Math.Vector4;

            length(): number;

            lengthSq(): number;

            normalize(): Phaser.Math.Vector4;

            dot(v: Phaser.Math.Vector4): number;

            lerp(v: Phaser.Math.Vector4, t?: number): Phaser.Math.Vector4;

            multiply(v: Phaser.Math.Vector2 | Phaser.Math.Vector3 | Phaser.Math.Vector4): Phaser.Math.Vector4;

            divide(v: Phaser.Math.Vector2 | Phaser.Math.Vector3 | Phaser.Math.Vector4): Phaser.Math.Vector4;

            distance(v: Phaser.Math.Vector2 | Phaser.Math.Vector3 | Phaser.Math.Vector4): number;

            distanceSq(v: Phaser.Math.Vector2 | Phaser.Math.Vector3 | Phaser.Math.Vector4): number;

            negate(): Phaser.Math.Vector4;

            transformMat4(mat: Phaser.Math.Matrix4): Phaser.Math.Vector4;

            transformQuat(q: Phaser.Math.Quaternion): Phaser.Math.Vector4;

            reset(): Phaser.Math.Vector4;

        }

        function Within(a: number, b: number, tolerance: number): boolean;

        function Wrap(value: number, min: number, max: number): number;

    }

    namespace Physics {
        namespace Arcade {
            class Image extends Phaser.GameObjects.Image implements Phaser.Physics.Arcade.Components.Acceleration, Phaser.Physics.Arcade.Components.Angular, Phaser.Physics.Arcade.Components.Bounce, Phaser.Physics.Arcade.Components.Debug, Phaser.Physics.Arcade.Components.Drag, Phaser.Physics.Arcade.Components.Enable, Phaser.Physics.Arcade.Components.Friction, Phaser.Physics.Arcade.Components.Gravity, Phaser.Physics.Arcade.Components.Immovable, Phaser.Physics.Arcade.Components.Mass, Phaser.Physics.Arcade.Components.Size, Phaser.Physics.Arcade.Components.Velocity, Phaser.GameObjects.Components.Alpha, Phaser.GameObjects.Components.BlendMode, Phaser.GameObjects.Components.Depth, Phaser.GameObjects.Components.Flip, Phaser.GameObjects.Components.GetBounds, Phaser.GameObjects.Components.Origin, Phaser.GameObjects.Components.Pipeline, Phaser.GameObjects.Components.ScaleMode, Phaser.GameObjects.Components.ScrollFactor, Phaser.GameObjects.Components.Size, Phaser.GameObjects.Components.Texture, Phaser.GameObjects.Components.Tint, Phaser.GameObjects.Components.Transform, Phaser.GameObjects.Components.Visible {
                constructor(scene: Phaser.Scene, x: number, y: number, texture: string, frame?: string | integer);

                clearAlpha(): this;

                setAlpha(topLeft?: number, topRight?: number, bottomLeft?: number, bottomRight?: number): this;

                alpha: number;

                alphaTopLeft: number;

                alphaTopRight: number;

                alphaBottomLeft: number;

                alphaBottomRight: number;

                blendMode: Phaser.BlendModes | string;

                setBlendMode(value: string | Phaser.BlendModes): this;

                depth: number;

                setDepth(value: integer): this;

                flipX: boolean;

                flipY: boolean;

                toggleFlipX(): this;

                toggleFlipY(): this;

                setFlipX(value: boolean): this;

                setFlipY(value: boolean): this;

                setFlip(x: boolean, y: boolean): this;

                resetFlip(): this;

                getCenter<O extends Phaser.Math.Vector2>(output?: O): O;

                getTopLeft<O extends Phaser.Math.Vector2>(output?: O, includeParent?: boolean): O;

                getTopRight<O extends Phaser.Math.Vector2>(output?: O, includeParent?: boolean): O;

                getBottomLeft<O extends Phaser.Math.Vector2>(output?: O, includeParent?: boolean): O;

                getBottomRight<O extends Phaser.Math.Vector2>(output?: O, includeParent?: boolean): O;

                getBounds<O extends Phaser.Geom.Rectangle>(output?: O): O;

                mask: Phaser.Display.Masks.BitmapMask | Phaser.Display.Masks.GeometryMask;

                setMask(mask: Phaser.Display.Masks.BitmapMask | Phaser.Display.Masks.GeometryMask): this;

                clearMask(destroyMask?: boolean): this;

                createBitmapMask(renderable?: Phaser.GameObjects.GameObject): Phaser.Display.Masks.BitmapMask;

                createGeometryMask(graphics?: Phaser.GameObjects.Graphics): Phaser.Display.Masks.GeometryMask;

                originX: number;

                originY: number;

                displayOriginX: number;

                displayOriginY: number;

                setOrigin(x?: number, y?: number): this;

                setOriginFromFrame(): this;

                setDisplayOrigin(x?: number, y?: number): this;

                updateDisplayOrigin(): this;

                defaultPipeline: Phaser.Renderer.WebGL.WebGLPipeline;

                pipeline: Phaser.Renderer.WebGL.WebGLPipeline;

                initPipeline(pipelineName: string): boolean;

                setPipeline(pipelineName: string): boolean;

                resetPipeline(): boolean;

                getPipelineName(): string;

                scaleMode: Phaser.ScaleModes;

                setScaleMode(value: Phaser.ScaleModes): this;

                scrollFactorX: number;

                scrollFactorY: number;

                setScrollFactor(x: number, y?: number): this;

                width: number;

                height: number;

                displayWidth: number;

                displayHeight: number;

                setSizeToFrame(frame: Phaser.Textures.Frame): this;

                setSize(width: number, height: number): this;

                setDisplaySize(width: number, height: number): this;

                texture: Phaser.Textures.Texture | Phaser.Textures.CanvasTexture;

                frame: Phaser.Textures.Frame;

                setTexture(key: string, frame?: string | integer): this;

                setFrame(frame: string | integer, updateSize?: boolean, updateOrigin?: boolean): this;

                clearTint(): this;

                setTint(topLeft?: integer, topRight?: integer, bottomLeft?: integer, bottomRight?: integer): this;

                tintTopLeft: integer;

                tintTopRight: integer;

                tintBottomLeft: integer;

                tintBottomRight: integer;

                tint: integer;

                x: number;

                y: number;

                z: number;

                w: number;

                scaleX: number;

                scaleY: number;

                angle: integer;

                rotation: number;

                setPosition(x?: number, y?: number, z?: number, w?: number): this;

                setRandomPosition(x?: number, y?: number, width?: number, height?: number): this;

                setRotation(radians?: number): this;

                setAngle(degrees?: number): this;

                setScale(x: number, y?: number): this;

                setX(value?: number): this;

                setY(value?: number): this;

                setZ(value?: number): this;

                setW(value?: number): this;

                getLocalTransformMatrix(tempMatrix?: Phaser.GameObjects.Components.TransformMatrix): Phaser.GameObjects.Components.TransformMatrix;

                getWorldTransformMatrix(tempMatrix?: Phaser.GameObjects.Components.TransformMatrix): Phaser.GameObjects.Components.TransformMatrix;

                visible: boolean;

                setVisible(value: boolean): this;

                setAcceleration(x: number, y?: number): this;

                setAccelerationX(value: number): this;

                setAccelerationY(value: number): this;

                setAngularVelocity(value: number): this;

                setAngularAcceleration(value: number): this;

                setAngularDrag(value: number): this;

                setBounce(x: number, y?: number): this;

                setBounceX(value: number): this;

                setBounceY(value: number): this;

                setCollideWorldBounds(value: boolean): this;

                setDebug(showBody: boolean, showVelocity: boolean, bodyColor: number): this;

                setDebugBodyColor(value: number): this;

                debugShowBody: boolean;

                debugShowVelocity: boolean;

                debugBodyColor: number;

                setDrag(x: number, y?: number): this;

                setDragX(value: number): this;

                setDragY(value: number): this;

                setDamping(value: boolean): this;

                enableBody(reset: boolean, x: number, y: number, enableGameObject: boolean, showGameObject: boolean): this;

                disableBody(disableGameObject?: boolean, hideGameObject?: boolean): this;

                refreshBody(): this;

                setFriction(x: number, y?: number): this;

                setFrictionX(x: number): this;

                setFrictionY(y: number): this;

                setGravity(x: number, y?: number): this;

                setGravityX(x: number): this;

                setGravityY(y: number): this;

                setImmovable(value?: boolean): this;

                setMass(value: number): this;

                setOffset(x: number, y?: number): this;

                setCircle(radius: number, offsetX?: number, offsetY?: number): this;

                setVelocity(x: number, y?: number): this;

                setVelocityX(x: number): this;

                setVelocityY(y: number): this;

                setMaxVelocity(x: number, y?: number): this;

            }

            class ArcadePhysics {
                constructor(scene: Phaser.Scene);

                scene: Phaser.Scene;

                systems: Phaser.Scenes.Systems;

                config: object;

                world: Phaser.Physics.Arcade.World;

                add: Phaser.Physics.Arcade.Factory;

                getConfig(): object;

                overlap(object1: Phaser.GameObjects.GameObject | any[], object2: Phaser.GameObjects.GameObject | any[], overlapCallback?: ArcadePhysicsCallback, processCallback?: ArcadePhysicsCallback, callbackContext?: any): boolean;

                collide(object1: Phaser.GameObjects.GameObject | any[], object2: Phaser.GameObjects.GameObject | any[], collideCallback?: ArcadePhysicsCallback, processCallback?: ArcadePhysicsCallback, callbackContext?: any): boolean;

                pause(): Phaser.Physics.Arcade.World;

                resume(): Phaser.Physics.Arcade.World;

                accelerateTo(gameObject: Phaser.GameObjects.GameObject, x: number, y: number, speed?: number, xSpeedMax?: number, ySpeedMax?: number): number;

                accelerateToObject(gameObject: Phaser.GameObjects.GameObject, destination: Phaser.GameObjects.GameObject, speed?: number, xSpeedMax?: number, ySpeedMax?: number): number;

                closest(source: object): Phaser.Physics.Arcade.Body;

                furthest(source: object): Phaser.Physics.Arcade.Body;

                moveTo(gameObject: Phaser.GameObjects.GameObject, x: number, y: number, speed?: number, maxTime?: number): number;

                moveToObject(gameObject: Phaser.GameObjects.GameObject, destination: object, speed?: number, maxTime?: number): number;

                velocityFromAngle(angle: number, speed?: number, vec2?: Phaser.Math.Vector2): Phaser.Math.Vector2;

                velocityFromRotation(rotation: number, speed?: number, vec2?: Phaser.Math.Vector2): Phaser.Math.Vector2;

                shutdown(): void;

                destroy(): void;

            }

            class Sprite extends Phaser.GameObjects.Sprite implements Phaser.Physics.Arcade.Components.Acceleration, Phaser.Physics.Arcade.Components.Angular, Phaser.Physics.Arcade.Components.Bounce, Phaser.Physics.Arcade.Components.Debug, Phaser.Physics.Arcade.Components.Drag, Phaser.Physics.Arcade.Components.Enable, Phaser.Physics.Arcade.Components.Friction, Phaser.Physics.Arcade.Components.Gravity, Phaser.Physics.Arcade.Components.Immovable, Phaser.Physics.Arcade.Components.Mass, Phaser.Physics.Arcade.Components.Size, Phaser.Physics.Arcade.Components.Velocity, Phaser.GameObjects.Components.Alpha, Phaser.GameObjects.Components.BlendMode, Phaser.GameObjects.Components.Depth, Phaser.GameObjects.Components.Flip, Phaser.GameObjects.Components.GetBounds, Phaser.GameObjects.Components.Origin, Phaser.GameObjects.Components.Pipeline, Phaser.GameObjects.Components.ScaleMode, Phaser.GameObjects.Components.ScrollFactor, Phaser.GameObjects.Components.Size, Phaser.GameObjects.Components.Texture, Phaser.GameObjects.Components.Tint, Phaser.GameObjects.Components.Transform, Phaser.GameObjects.Components.Visible {
                constructor(scene: Phaser.Scene, x: number, y: number, texture: string, frame?: string | integer);

                body: Phaser.Physics.Arcade.Body;

                clearAlpha(): this;

                setAlpha(topLeft?: number, topRight?: number, bottomLeft?: number, bottomRight?: number): this;

                alpha: number;

                alphaTopLeft: number;

                alphaTopRight: number;

                alphaBottomLeft: number;

                alphaBottomRight: number;

                blendMode: Phaser.BlendModes | string;

                setBlendMode(value: string | Phaser.BlendModes): this;

                depth: number;

                setDepth(value: integer): this;

                flipX: boolean;

                flipY: boolean;

                toggleFlipX(): this;

                toggleFlipY(): this;

                setFlipX(value: boolean): this;

                setFlipY(value: boolean): this;

                setFlip(x: boolean, y: boolean): this;

                resetFlip(): this;

                getCenter<O extends Phaser.Math.Vector2>(output?: O): O;

                getTopLeft<O extends Phaser.Math.Vector2>(output?: O, includeParent?: boolean): O;

                getTopRight<O extends Phaser.Math.Vector2>(output?: O, includeParent?: boolean): O;

                getBottomLeft<O extends Phaser.Math.Vector2>(output?: O, includeParent?: boolean): O;

                getBottomRight<O extends Phaser.Math.Vector2>(output?: O, includeParent?: boolean): O;

                getBounds<O extends Phaser.Geom.Rectangle>(output?: O): O;

                mask: Phaser.Display.Masks.BitmapMask | Phaser.Display.Masks.GeometryMask;

                setMask(mask: Phaser.Display.Masks.BitmapMask | Phaser.Display.Masks.GeometryMask): this;

                clearMask(destroyMask?: boolean): this;

                createBitmapMask(renderable?: Phaser.GameObjects.GameObject): Phaser.Display.Masks.BitmapMask;

                createGeometryMask(graphics?: Phaser.GameObjects.Graphics): Phaser.Display.Masks.GeometryMask;

                originX: number;

                originY: number;

                displayOriginX: number;

                displayOriginY: number;

                setOrigin(x?: number, y?: number): this;

                setOriginFromFrame(): this;

                setDisplayOrigin(x?: number, y?: number): this;

                updateDisplayOrigin(): this;

                defaultPipeline: Phaser.Renderer.WebGL.WebGLPipeline;

                pipeline: Phaser.Renderer.WebGL.WebGLPipeline;

                initPipeline(pipelineName: string): boolean;

                setPipeline(pipelineName: string): boolean;

                resetPipeline(): boolean;

                getPipelineName(): string;

                scaleMode: Phaser.ScaleModes;

                setScaleMode(value: Phaser.ScaleModes): this;

                scrollFactorX: number;

                scrollFactorY: number;

                setScrollFactor(x: number, y?: number): this;

                width: number;

                height: number;

                displayWidth: number;

                displayHeight: number;

                setSizeToFrame(frame: Phaser.Textures.Frame): this;

                setSize(width: number, height: number): this;

                setDisplaySize(width: number, height: number): this;

                texture: Phaser.Textures.Texture | Phaser.Textures.CanvasTexture;

                frame: Phaser.Textures.Frame;

                setTexture(key: string, frame?: string | integer): this;

                setFrame(frame: string | integer, updateSize?: boolean, updateOrigin?: boolean): this;

                clearTint(): this;

                setTint(topLeft?: integer, topRight?: integer, bottomLeft?: integer, bottomRight?: integer): this;

                tintTopLeft: integer;

                tintTopRight: integer;

                tintBottomLeft: integer;

                tintBottomRight: integer;

                tint: integer;

                x: number;

                y: number;

                z: number;

                w: number;

                scaleX: number;

                scaleY: number;

                angle: integer;

                rotation: number;

                setPosition(x?: number, y?: number, z?: number, w?: number): this;

                setRandomPosition(x?: number, y?: number, width?: number, height?: number): this;

                setRotation(radians?: number): this;

                setAngle(degrees?: number): this;

                setScale(x: number, y?: number): this;

                setX(value?: number): this;

                setY(value?: number): this;

                setZ(value?: number): this;

                setW(value?: number): this;

                getLocalTransformMatrix(tempMatrix?: Phaser.GameObjects.Components.TransformMatrix): Phaser.GameObjects.Components.TransformMatrix;

                getWorldTransformMatrix(tempMatrix?: Phaser.GameObjects.Components.TransformMatrix): Phaser.GameObjects.Components.TransformMatrix;

                visible: boolean;

                setVisible(value: boolean): this;

                setAcceleration(x: number, y?: number): this;

                setAccelerationX(value: number): this;

                setAccelerationY(value: number): this;

                setAngularVelocity(value: number): this;

                setAngularAcceleration(value: number): this;

                setAngularDrag(value: number): this;

                setBounce(x: number, y?: number): this;

                setBounceX(value: number): this;

                setBounceY(value: number): this;

                setCollideWorldBounds(value: boolean): this;

                setDebug(showBody: boolean, showVelocity: boolean, bodyColor: number): this;

                setDebugBodyColor(value: number): this;

                debugShowBody: boolean;

                debugShowVelocity: boolean;

                debugBodyColor: number;

                setDrag(x: number, y?: number): this;

                setDragX(value: number): this;

                setDragY(value: number): this;

                setDamping(value: boolean): this;

                enableBody(reset: boolean, x: number, y: number, enableGameObject: boolean, showGameObject: boolean): this;

                disableBody(disableGameObject?: boolean, hideGameObject?: boolean): this;

                refreshBody(): this;

                setFriction(x: number, y?: number): this;

                setFrictionX(x: number): this;

                setFrictionY(y: number): this;

                setGravity(x: number, y?: number): this;

                setGravityX(x: number): this;

                setGravityY(y: number): this;

                setImmovable(value?: boolean): this;

                setMass(value: number): this;

                setOffset(x: number, y?: number): this;

                setCircle(radius: number, offsetX?: number, offsetY?: number): this;

                setVelocity(x: number, y?: number): this;

                setVelocityX(x: number): this;

                setVelocityY(y: number): this;

                setMaxVelocity(x: number, y?: number): this;

            }

            class Body {
                constructor(world: Phaser.Physics.Arcade.World, gameObject: Phaser.GameObjects.GameObject);

                world: Phaser.Physics.Arcade.World;

                gameObject: Phaser.GameObjects.GameObject;

                transform: object;

                debugShowBody: boolean;

                debugShowVelocity: boolean;

                debugBodyColor: integer;

                enable: boolean;

                isCircle: boolean;

                radius: number;

                offset: Phaser.Math.Vector2;

                position: Phaser.Math.Vector2;

                prev: Phaser.Math.Vector2;

                allowRotation: boolean;

                rotation: number;

                preRotation: number;

                width: number;

                height: number;

                sourceWidth: number;

                sourceHeight: number;

                halfWidth: number;

                halfHeight: number;

                center: Phaser.Math.Vector2;

                velocity: Phaser.Math.Vector2;

                readonly newVelocity: Phaser.Math.Vector2;

                deltaMax: Phaser.Math.Vector2;

                acceleration: Phaser.Math.Vector2;

                allowDrag: boolean;

                drag: Phaser.Math.Vector2;

                allowGravity: boolean;

                gravity: Phaser.Math.Vector2;

                bounce: Phaser.Math.Vector2;

                worldBounce: Phaser.Math.Vector2;

                onWorldBounds: boolean;

                onCollide: boolean;

                onOverlap: boolean;

                maxVelocity: Phaser.Math.Vector2;

                friction: Phaser.Math.Vector2;

                useDamping: boolean;

                angularVelocity: number;

                angularAcceleration: number;

                angularDrag: number;

                maxAngular: number;

                mass: number;

                angle: number;

                speed: number;

                facing: integer;

                immovable: boolean;

                moves: boolean;

                customSeparateX: boolean;

                customSeparateY: boolean;

                overlapX: number;

                overlapY: number;

                overlapR: number;

                embedded: boolean;

                collideWorldBounds: boolean;

                checkCollision: ArcadeBodyCollision;

                touching: ArcadeBodyCollision;

                wasTouching: ArcadeBodyCollision;

                blocked: ArcadeBodyCollision;

                syncBounds: boolean;

                isMoving: boolean;

                stopVelocityOnCollide: boolean;

                readonly physicsType: integer;

                updateBounds(): void;

                updateCenter(): void;

                update(delta: number): void;

                postUpdate(resetDelta: boolean): void;

                checkWorldBounds(): boolean;

                setOffset(x: number, y?: number): Phaser.Physics.Arcade.Body;

                setSize(width: number, height: number, center?: boolean): Phaser.Physics.Arcade.Body;

                setCircle(radius: number, offsetX?: number, offsetY?: number): Phaser.Physics.Arcade.Body;

                reset(x: number, y: number): void;

                stop(): Phaser.Physics.Arcade.Body;

                getBounds(obj: ArcadeBodyBounds): ArcadeBodyBounds;

                hitTest(x: number, y: number): boolean;

                onFloor(): boolean;

                onCeiling(): boolean;

                onWall(): boolean;

                deltaAbsX(): number;

                deltaAbsY(): number;

                deltaX(): number;

                deltaY(): number;

                deltaZ(): number;

                destroy(): void;

                drawDebug(graphic: Phaser.GameObjects.Graphics): void;

                willDrawDebug(): boolean;

                setCollideWorldBounds(value?: boolean): Phaser.Physics.Arcade.Body;

                setVelocity(x: number, y?: number): Phaser.Physics.Arcade.Body;

                setVelocityX(value: number): Phaser.Physics.Arcade.Body;

                setVelocityY(value: number): Phaser.Physics.Arcade.Body;

                setMaxVelocity(x: number, y?: number): Phaser.Physics.Arcade.Body;

                setBounce(x: number, y: number): Phaser.Physics.Arcade.Body;

                setBounceX(value: number): Phaser.Physics.Arcade.Body;

                setBounceY(value: number): Phaser.Physics.Arcade.Body;

                setAcceleration(x: number, y: number): Phaser.Physics.Arcade.Body;

                setAccelerationX(value: number): Phaser.Physics.Arcade.Body;

                setAccelerationY(value: number): Phaser.Physics.Arcade.Body;

                setAllowDrag(value?: boolean): Phaser.Physics.Arcade.Body;

                setAllowGravity(value?: boolean): Phaser.Physics.Arcade.Body;

                setAllowRotation(value?: boolean): Phaser.Physics.Arcade.Body;

                setDrag(x: number, y: number): Phaser.Physics.Arcade.Body;

                setDragX(value: number): Phaser.Physics.Arcade.Body;

                setDragY(value: number): Phaser.Physics.Arcade.Body;

                setGravity(x: number, y: number): Phaser.Physics.Arcade.Body;

                setGravityX(value: number): Phaser.Physics.Arcade.Body;

                setGravityY(value: number): Phaser.Physics.Arcade.Body;

                setFriction(x: number, y: number): Phaser.Physics.Arcade.Body;

                setFrictionX(value: number): Phaser.Physics.Arcade.Body;

                setFrictionY(value: number): Phaser.Physics.Arcade.Body;

                setAngularVelocity(value: number): Phaser.Physics.Arcade.Body;

                setAngularAcceleration(value: number): Phaser.Physics.Arcade.Body;

                setAngularDrag(value: number): Phaser.Physics.Arcade.Body;

                setMass(value: number): Phaser.Physics.Arcade.Body;

                setImmovable(value?: boolean): Phaser.Physics.Arcade.Body;

                x: number;

                y: number;

                readonly left: number;

                readonly right: number;

                readonly top: number;

                readonly bottom: number;

            }

            class Collider {
                constructor(world: Phaser.Physics.Arcade.World, overlapOnly: boolean, object1: ArcadeColliderType, object2: ArcadeColliderType, collideCallback: ArcadePhysicsCallback, processCallback: ArcadePhysicsCallback, callbackContext: any);

                world: Phaser.Physics.Arcade.World;

                name: string;

                active: boolean;

                overlapOnly: boolean;

                object1: ArcadeColliderType;

                object2: ArcadeColliderType;

                collideCallback: ArcadePhysicsCallback;

                processCallback: ArcadePhysicsCallback;

                callbackContext: object;

                setName(name: string): Phaser.Physics.Arcade.Collider;

                update(): void;

                destroy(): void;

            }

            namespace Components {
                interface Acceleration {
                    setAcceleration(x: number, y?: number): this;
                    setAccelerationX(value: number): this;
                    setAccelerationY(value: number): this;
                }

                interface Angular {
                    setAngularVelocity(value: number): this;
                    setAngularAcceleration(value: number): this;
                    setAngularDrag(value: number): this;
                }

                interface Bounce {
                    setBounce(x: number, y?: number): this;
                    setBounceX(value: number): this;
                    setBounceY(value: number): this;
                    setCollideWorldBounds(value: boolean): this;
                }

                interface Debug {
                    setDebug(showBody: boolean, showVelocity: boolean, bodyColor: number): this;
                    setDebugBodyColor(value: number): this;
                    debugShowBody: boolean;
                    debugShowVelocity: boolean;
                    debugBodyColor: number;
                }

                interface Drag {
                    setDrag(x: number, y?: number): this;
                    setDragX(value: number): this;
                    setDragY(value: number): this;
                    setDamping(value: boolean): this;
                }

                interface Enable {
                    enableBody(reset: boolean, x: number, y: number, enableGameObject: boolean, showGameObject: boolean): this;
                    disableBody(disableGameObject?: boolean, hideGameObject?: boolean): this;
                    refreshBody(): this;
                }

                interface Friction {
                    setFriction(x: number, y?: number): this;
                    setFrictionX(x: number): this;
                    setFrictionY(y: number): this;
                }

                interface Gravity {
                    setGravity(x: number, y?: number): this;
                    setGravityX(x: number): this;
                    setGravityY(y: number): this;
                }

                interface Immovable {
                    setImmovable(value?: boolean): this;
                }

                interface Mass {
                    setMass(value: number): this;
                }

                interface Size {
                    setOffset(x: number, y?: number): this;
                    setSize(width: number, height: number, center?: boolean): this;
                    setCircle(radius: number, offsetX?: number, offsetY?: number): this;
                }

                interface Velocity {
                    setVelocity(x: number, y?: number): this;
                    setVelocityX(x: number): this;
                    setVelocityY(y: number): this;
                    setMaxVelocity(x: number, y?: number): this;
                }

            }

            var DYNAMIC_BODY: number;

            var STATIC_BODY: number;

            var GROUP: number;

            var TILEMAPLAYER: number;

            var FACING_NONE: number;

            var FACING_UP: number;

            var FACING_DOWN: number;

            var FACING_LEFT: number;

            var FACING_RIGHT: number;

            class Factory {
                constructor(world: Phaser.Physics.Arcade.World);

                world: Phaser.Physics.Arcade.World;

                scene: Phaser.Scene;

                sys: Phaser.Scenes.Systems;

                collider(object1: Phaser.GameObjects.GameObject | Phaser.GameObjects.GameObject[] | Phaser.GameObjects.Group | Phaser.GameObjects.Group[], object2: Phaser.GameObjects.GameObject | Phaser.GameObjects.GameObject[] | Phaser.GameObjects.Group | Phaser.GameObjects.Group[], collideCallback?: ArcadePhysicsCallback, processCallback?: ArcadePhysicsCallback, callbackContext?: any): Phaser.Physics.Arcade.Collider;

                overlap(object1: Phaser.GameObjects.GameObject | Phaser.GameObjects.GameObject[] | Phaser.GameObjects.Group | Phaser.GameObjects.Group[], object2: Phaser.GameObjects.GameObject | Phaser.GameObjects.GameObject[] | Phaser.GameObjects.Group | Phaser.GameObjects.Group[], collideCallback?: ArcadePhysicsCallback, processCallback?: ArcadePhysicsCallback, callbackContext?: any): Phaser.Physics.Arcade.Collider;

                existing(gameObject: Phaser.GameObjects.GameObject, isStatic?: boolean): Phaser.GameObjects.GameObject;

                staticImage(x: number, y: number, texture: string, frame?: string | integer): Phaser.Physics.Arcade.Image;

                image(x: number, y: number, texture: string, frame?: string | integer): Phaser.Physics.Arcade.Image;

                staticSprite(x: number, y: number, texture: string, frame?: string | integer): Phaser.Physics.Arcade.Sprite;

                sprite(x: number, y: number, key: string, frame?: string | integer): Phaser.Physics.Arcade.Sprite;

                staticGroup(children?: object | object[], config?: GroupConfig): Phaser.Physics.Arcade.StaticGroup;

                group(children?: object | object[], config?: PhysicsGroupConfig): Phaser.Physics.Arcade.Group;

                destroy(): void;

            }

            function GetOverlapX(body1: Phaser.Physics.Arcade.Body, body2: Phaser.Physics.Arcade.Body, overlapOnly: boolean, bias: number): number;

            function GetOverlapY(body1: Phaser.Physics.Arcade.Body, body2: Phaser.Physics.Arcade.Body, overlapOnly: boolean, bias: number): number;

            class Group extends Phaser.GameObjects.Group {
                constructor(world: Phaser.Physics.Arcade.World, scene: Phaser.Scene, children: any[], config?: PhysicsGroupConfig);

                world: Phaser.Physics.Arcade.World;

                classType: Phaser.Physics.Arcade.Sprite;

                physicsType: integer;

                defaults: PhysicsGroupDefaults;

                createCallbackHandler(child: Phaser.GameObjects.GameObject): void;

                removeCallbackHandler(child: Phaser.GameObjects.GameObject): void;

                setVelocity(x: number, y: number, step: number): Phaser.Physics.Arcade.Group;

                setVelocityX(value: number, step: number): Phaser.Physics.Arcade.Group;

                setVelocityY(value: number, step: number): Phaser.Physics.Arcade.Group;

            }

            function SeparateX(body1: Phaser.Physics.Arcade.Body, body2: Phaser.Physics.Arcade.Body, overlapOnly: boolean, bias: number): boolean;

            function SeparateY(body1: Phaser.Physics.Arcade.Body, body2: Phaser.Physics.Arcade.Body, overlapOnly: boolean, bias: number): boolean;

            class StaticBody {
                constructor(world: Phaser.Physics.Arcade.World, gameObject: Phaser.GameObjects.GameObject);

                world: Phaser.Physics.Arcade.World;

                gameObject: Phaser.GameObjects.GameObject;

                debugShowBody: boolean;

                debugBodyColor: integer;

                enable: boolean;

                isCircle: boolean;

                radius: number;

                offset: Phaser.Math.Vector2;

                position: Phaser.Math.Vector2;

                width: number;

                height: number;

                halfWidth: number;

                halfHeight: number;

                center: Phaser.Math.Vector2;

                velocity: Phaser.Math.Vector2;

                allowGravity: boolean;

                gravity: Phaser.Math.Vector2;

                bounce: Phaser.Math.Vector2;

                onWorldBounds: boolean;

                onCollide: boolean;

                onOverlap: boolean;

                mass: number;

                immovable: boolean;

                customSeparateX: boolean;

                customSeparateY: boolean;

                overlapX: number;

                overlapY: number;

                overlapR: number;

                embedded: boolean;

                collideWorldBounds: boolean;

                checkCollision: ArcadeBodyCollision;

                touching: ArcadeBodyCollision;

                wasTouching: ArcadeBodyCollision;

                blocked: ArcadeBodyCollision;

                physicsType: integer;

                setGameObject(gameObject: Phaser.GameObjects.GameObject, update?: boolean): Phaser.Physics.Arcade.StaticBody;

                updateFromGameObject(): Phaser.Physics.Arcade.StaticBody;

                setOffset(x: number, y: number): Phaser.Physics.Arcade.StaticBody;

                setSize(width: number, height: number, offsetX?: number, offsetY?: number): Phaser.Physics.Arcade.StaticBody;

                setCircle(radius: number, offsetX?: number, offsetY?: number): Phaser.Physics.Arcade.StaticBody;

                updateCenter(): void;

                reset(x: number, y: number): void;

                stop(): Phaser.Physics.Arcade.StaticBody;

                getBounds(obj: ArcadeBodyBounds): ArcadeBodyBounds;

                hitTest(x: number, y: number): boolean;

                deltaAbsX(): number;

                deltaAbsY(): number;

                deltaX(): number;

                deltaY(): number;

                deltaZ(): number;

                destroy(): void;

                drawDebug(graphic: Phaser.GameObjects.Graphics): void;

                willDrawDebug(): boolean;

                setMass(value: number): Phaser.Physics.Arcade.StaticBody;

                x: number;

                y: number;

                readonly left: number;

                readonly right: number;

                readonly top: number;

                readonly bottom: number;

            }

            class StaticGroup extends Phaser.GameObjects.Group {
                constructor(world: Phaser.Physics.Arcade.World, scene: Phaser.Scene, children: any[], config: GroupConfig);

                world: Phaser.Physics.Arcade.World;

                physicsType: integer;

                createCallbackHandler(child: Phaser.GameObjects.GameObject): void;

                removeCallbackHandler(child: Phaser.GameObjects.GameObject): void;

                createMultipleCallbackHandler(entries: object): void;

                refresh(): Phaser.Physics.Arcade.StaticGroup;

            }

            namespace Tilemap {
                function ProcessTileCallbacks(tile: Phaser.Tilemaps.Tilemap, sprite: Phaser.GameObjects.Sprite): boolean;

                function ProcessTileSeparationX(body: Phaser.Physics.Arcade.Body, x: number): void;

                function ProcessTileSeparationY(body: Phaser.Physics.Arcade.Body, y: number): void;

                function SeparateTile(i: number, body: Phaser.Physics.Arcade.Body, tile: Phaser.Tilemaps.Tile, tileWorldRect: Phaser.Geom.Rectangle, tilemapLayer: Phaser.Tilemaps.DynamicTilemapLayer | Phaser.Tilemaps.StaticTilemapLayer, tileBias: number): boolean;

                function TileCheckX(body: Phaser.Physics.Arcade.Body, tile: Phaser.Tilemaps.Tile, tileLeft: number, tileRight: number, tileBias: number): number;

                function TileCheckY(body: Phaser.Physics.Arcade.Body, tile: Phaser.Tilemaps.Tile, tileTop: number, tileBottom: number, tileBias: number): number;

                function TileIntersectsBody(tileWorldRect: Object, body: Phaser.Physics.Arcade.Body): boolean;

            }

            class World extends Phaser.Events.EventEmitter {
                constructor(scene: Phaser.Scene, config: ArcadeWorldConfig);

                scene: Phaser.Scene;

                bodies: Phaser.Structs.Set<Phaser.Physics.Arcade.Body>;

                staticBodies: Phaser.Structs.Set<Phaser.Physics.Arcade.StaticBody>;

                pendingDestroy: Phaser.Structs.Set<(Phaser.Physics.Arcade.Body|Phaser.Physics.Arcade.StaticBody)>;

                colliders: Phaser.Structs.ProcessQueue<Phaser.Physics.Arcade.Collider>;

                gravity: Phaser.Math.Vector2;

                bounds: Phaser.Geom.Rectangle;

                checkCollision: CheckCollisionObject;

                readonly fps: number;

                readonly stepsLastFrame: number;

                timeScale: any;

                OVERLAP_BIAS: number;

                TILE_BIAS: number;

                forceX: boolean;

                isPaused: boolean;

                drawDebug: boolean;

                debugGraphic: Phaser.GameObjects.Graphics;

                defaults: ArcadeWorldDefaults;

                maxEntries: integer;

                useTree: boolean;

                tree: Phaser.Structs.RTree;

                staticTree: Phaser.Structs.RTree;

                treeMinMax: ArcadeWorldTreeMinMax;

                enable(object: Phaser.GameObjects.GameObject | Phaser.GameObjects.GameObject[] | Phaser.GameObjects.Group | Phaser.GameObjects.Group[], bodyType?: integer): void;

                enableBody(object: Phaser.GameObjects.GameObject, bodyType?: integer): Phaser.GameObjects.GameObject;

                add(body: Phaser.Physics.Arcade.Body | Phaser.Physics.Arcade.StaticBody): Phaser.Physics.Arcade.Body | Phaser.Physics.Arcade.StaticBody;

                disable(object: Phaser.GameObjects.GameObject | Phaser.GameObjects.GameObject[] | Phaser.GameObjects.Group | Phaser.GameObjects.Group[]): void;

                disableBody(body: Phaser.Physics.Arcade.Body | Phaser.Physics.Arcade.StaticBody): void;

                remove(body: Phaser.Physics.Arcade.Body | Phaser.Physics.Arcade.StaticBody): void;

                createDebugGraphic(): Phaser.GameObjects.Graphics;

                setBounds(x: number, y: number, width: number, height: number, checkLeft?: boolean, checkRight?: boolean, checkUp?: boolean, checkDown?: boolean): Phaser.Physics.Arcade.World;

                setBoundsCollision(left?: boolean, right?: boolean, up?: boolean, down?: boolean): Phaser.Physics.Arcade.World;

                pause(): Phaser.Physics.Arcade.World;

                resume(): Phaser.Physics.Arcade.World;

                addCollider(object1: ArcadeColliderType, object2: ArcadeColliderType, collideCallback?: ArcadePhysicsCallback, processCallback?: ArcadePhysicsCallback, callbackContext?: any): Phaser.Physics.Arcade.Collider;

                addOverlap(object1: ArcadeColliderType, object2: ArcadeColliderType, collideCallback?: ArcadePhysicsCallback, processCallback?: ArcadePhysicsCallback, callbackContext?: any): Phaser.Physics.Arcade.Collider;

                removeCollider(collider: Phaser.Physics.Arcade.Collider): Phaser.Physics.Arcade.World;

                setFPS(framerate: integer): this;

                protected update(time: number, delta: number): void;

                step(delta: number): void;

                postUpdate(): void;

                updateMotion(body: Phaser.Physics.Arcade.Body, delta: number): void;

                computeAngularVelocity(body: Phaser.Physics.Arcade.Body, delta: number): void;

                computeVelocity(body: Phaser.Physics.Arcade.Body, delta: number): void;

                separate(body1: Phaser.Physics.Arcade.Body, body2: Phaser.Physics.Arcade.Body, processCallback?: ArcadePhysicsCallback, callbackContext?: any, overlapOnly?: boolean): boolean;

                separateCircle(body1: Phaser.Physics.Arcade.Body, body2: Phaser.Physics.Arcade.Body, overlapOnly?: boolean, bias?: number): boolean;

                intersects(body1: Phaser.Physics.Arcade.Body, body2: Phaser.Physics.Arcade.Body): boolean;

                circleBodyIntersects(circle: Phaser.Physics.Arcade.Body, body: Phaser.Physics.Arcade.Body): boolean;

                overlap(object1: ArcadeColliderType, object2?: ArcadeColliderType, overlapCallback?: ArcadePhysicsCallback, processCallback?: ArcadePhysicsCallback, callbackContext?: any): boolean;

                collide(object1: ArcadeColliderType, object2?: ArcadeColliderType, collideCallback?: ArcadePhysicsCallback, processCallback?: ArcadePhysicsCallback, callbackContext?: any): boolean;

                collideObjects(object1: ArcadeColliderType, object2?: ArcadeColliderType, collideCallback?: ArcadePhysicsCallback, processCallback?: ArcadePhysicsCallback, callbackContext?: any, overlapOnly?: boolean): boolean;

                collideHandler(object1: ArcadeColliderType, object2?: ArcadeColliderType, collideCallback?: ArcadePhysicsCallback, processCallback?: ArcadePhysicsCallback, callbackContext?: any, overlapOnly?: boolean): boolean;

                collideSpriteVsSprite(sprite1: Phaser.GameObjects.GameObject, sprite2: Phaser.GameObjects.GameObject, collideCallback: ArcadePhysicsCallback, processCallback: ArcadePhysicsCallback, callbackContext: any, overlapOnly: boolean): boolean;

                collideSpriteVsGroup(sprite: Phaser.GameObjects.GameObject, group: Phaser.GameObjects.Group, collideCallback: ArcadePhysicsCallback, processCallback: ArcadePhysicsCallback, callbackContext: any, overlapOnly: boolean): boolean;

                collideGroupVsTilemapLayer(group: Phaser.GameObjects.Group, tilemapLayer: Phaser.Tilemaps.DynamicTilemapLayer | Phaser.Tilemaps.StaticTilemapLayer, collideCallback: ArcadePhysicsCallback, processCallback: ArcadePhysicsCallback, callbackContext: any, overlapOnly: boolean): boolean;

                collideSpriteVsTilemapLayer(sprite: Phaser.GameObjects.GameObject, tilemapLayer: Phaser.Tilemaps.DynamicTilemapLayer | Phaser.Tilemaps.StaticTilemapLayer, collideCallback: ArcadePhysicsCallback, processCallback: ArcadePhysicsCallback, callbackContext: any, overlapOnly: boolean): boolean;

                collideGroupVsGroup(group1: Phaser.GameObjects.Group, group2: Phaser.GameObjects.Group, collideCallback: ArcadePhysicsCallback, processCallback: ArcadePhysicsCallback, callbackContext: any, overlapOnly: boolean): boolean;

                wrap(object: any, padding?: number): void;

                wrapArray(objects: any[], padding?: number): void;

                wrapObject(object: any, padding?: number): void;

                shutdown(): void;

                destroy(): void;

            }

        }

        namespace Impact {
            class Body {
                constructor(world: Phaser.Physics.Impact.World, x: number, y: number, sx?: number, sy?: number);

                world: Phaser.Physics.Impact.World;

                gameObject: Phaser.GameObjects.GameObject;

                enabled: boolean;

                parent: Phaser.Physics.Impact.ImpactBody | Phaser.Physics.Impact.ImpactImage | Phaser.Physics.Impact.ImpactSprite;

                id: integer;

                name: string;

                size: Object;

                offset: Object;

                pos: Object;

                last: Object;

                vel: Object;

                accel: Object;

                friction: Object;

                maxVel: Object;

                standing: boolean;

                gravityFactor: number;

                bounciness: number;

                minBounceVelocity: number;

                accelGround: number;

                accelAir: number;

                jumpSpeed: number;

                type: Phaser.Physics.Impact.TYPE;

                checkAgainst: Phaser.Physics.Impact.TYPE;

                collides: Phaser.Physics.Impact.COLLIDES;

                debugShowBody: boolean;

                debugShowVelocity: boolean;

                debugBodyColor: integer;

                updateCallback: BodyUpdateCallback;

                slopeStanding: Object;

                reset(x: number, y: number): void;

                update(delta: number): void;

                drawDebug(graphic: Phaser.GameObjects.Graphics): void;

                willDrawDebug(): boolean;

                skipHash(): boolean;

                touches(other: Phaser.Physics.Impact.Body): boolean;

                resetSize(x: number, y: number, width: number, height: number): Phaser.Physics.Impact.Body;

                toJSON(): JSONImpactBody;

                fromJSON(config: object): void;

                check(other: Phaser.Physics.Impact.Body): void;

                collideWith(other: Phaser.Physics.Impact.Body, axis: string): void;

                handleMovementTrace(res: number): boolean;

                destroy(): void;

            }

            enum COLLIDES {
                NEVER,
                LITE,
                PASSIVE,
                ACTIVE,
                FIXED,
            }

            class CollisionMap {
                constructor(tilesize?: integer, data?: any[]);

                tilesize: integer;

                data: any[];

                width: number;

                height: number;

                lastSlope: integer;

                tiledef: object;

                trace(x: number, y: number, vx: number, vy: number, objectWidth: number, objectHeight: number): boolean;

                step(res: object, x: number, y: number, vx: number, vy: number, width: number, height: number, rvx: number, rvy: number, step: number): void;

                checkDef(res: object, t: number, x: number, y: number, vx: number, vy: number, width: number, height: number, tileX: number, tileY: number): boolean;

            }

            namespace Components {
                interface Acceleration {
                    setAccelerationX(x: number): Phaser.GameObjects.GameObject;
                    setAccelerationY(y: number): Phaser.GameObjects.GameObject;
                    setAcceleration(x: number, y: number): Phaser.GameObjects.GameObject;
                }

                interface BodyScale {
                    setBodySize(width: number, height?: number): Phaser.GameObjects.GameObject;
                    setBodyScale(scaleX: number, scaleY?: number): Phaser.GameObjects.GameObject;
                }

                interface BodyType {
                    getBodyType(): number;
                    setTypeNone(): Phaser.GameObjects.GameObject;
                    setTypeA(): Phaser.GameObjects.GameObject;
                    setTypeB(): Phaser.GameObjects.GameObject;
                }

                interface Bounce {
                    setBounce(value: number): Phaser.GameObjects.GameObject;
                    setMinBounceVelocity(value: number): Phaser.GameObjects.GameObject;
                    bounce: number;
                }

                interface CheckAgainst {
                    setAvsB(): Phaser.GameObjects.GameObject;
                    setBvsA(): Phaser.GameObjects.GameObject;
                    setCheckAgainstNone(): Phaser.GameObjects.GameObject;
                    setCheckAgainstA(): Phaser.GameObjects.GameObject;
                    setCheckAgainstB(): Phaser.GameObjects.GameObject;
                    checkAgainst: number;
                }

                interface Collides {
                    setCollideCallback(callback: CollideCallback, scope: any): Phaser.GameObjects.GameObject;
                    setCollidesNever(): Phaser.GameObjects.GameObject;
                    setLiteCollision(): Phaser.GameObjects.GameObject;
                    setPassiveCollision(): Phaser.GameObjects.GameObject;
                    setActiveCollision(): Phaser.GameObjects.GameObject;
                    setFixedCollision(): Phaser.GameObjects.GameObject;
                    collides: number;
                }

                interface Debug {
                    setDebug(showBody: boolean, showVelocity: boolean, bodyColor: number): Phaser.GameObjects.GameObject;
                    setDebugBodyColor(value: number): Phaser.GameObjects.GameObject;
                    debugShowBody: boolean;
                    debugShowVelocity: boolean;
                    debugBodyColor: number;
                }

                interface Friction {
                    setFrictionX(x: number): Phaser.GameObjects.GameObject;
                    setFrictionY(y: number): Phaser.GameObjects.GameObject;
                    setFriction(x: number, y: number): Phaser.GameObjects.GameObject;
                }

                interface Gravity {
                    setGravity(value: number): Phaser.GameObjects.GameObject;
                    gravity: number;
                }

                interface Offset {
                    setOffset(x: number, y: number, width?: number, height?: number): Phaser.GameObjects.GameObject;
                }

                interface SetGameObject {
                    setGameObject(gameObject: Phaser.GameObjects.GameObject, sync?: boolean): Phaser.GameObjects.GameObject;
                    syncGameObject(): Phaser.GameObjects.GameObject;
                }

                interface Velocity {
                    setVelocityX(x: number): Phaser.GameObjects.GameObject;
                    setVelocityY(y: number): Phaser.GameObjects.GameObject;
                    setVelocity(x: number, y?: number): Phaser.GameObjects.GameObject;
                    setMaxVelocity(x: number, y?: number): Phaser.GameObjects.GameObject;
                }

            }

            class Factory {
                constructor(world: Phaser.Physics.Impact.World);

                world: Phaser.Physics.Impact.World;

                sys: Phaser.Scenes.Systems;

                body(x: number, y: number, width: number, height: number): Phaser.Physics.Impact.ImpactBody;

                existing(gameObject: Phaser.GameObjects.GameObject): Phaser.GameObjects.GameObject;

                image(x: number, y: number, key: string, frame?: string | integer): Phaser.Physics.Impact.ImpactImage;

                sprite(x: number, y: number, key: string, frame?: string | integer): Phaser.Physics.Impact.ImpactSprite;

                destroy(): void;

            }

            function GetVelocity(delta: number, vel: number, accel: number, friction: number, max: number): number;

            class ImpactBody implements Phaser.Physics.Impact.Components.Acceleration, Phaser.Physics.Impact.Components.BodyScale, Phaser.Physics.Impact.Components.BodyType, Phaser.Physics.Impact.Components.Bounce, Phaser.Physics.Impact.Components.CheckAgainst, Phaser.Physics.Impact.Components.Collides, Phaser.Physics.Impact.Components.Debug, Phaser.Physics.Impact.Components.Friction, Phaser.Physics.Impact.Components.Gravity, Phaser.Physics.Impact.Components.Offset, Phaser.Physics.Impact.Components.SetGameObject, Phaser.Physics.Impact.Components.Velocity {
                constructor(world: Phaser.Physics.Impact.World, x: number, y: number, width: number, height: number);

                body: Phaser.Physics.Impact.Body;

                size: Object;

                offset: Object;

                vel: Object;

                accel: Object;

                friction: Object;

                maxVel: Object;

                setAccelerationX(x: number): Phaser.GameObjects.GameObject;

                setAccelerationY(y: number): Phaser.GameObjects.GameObject;

                setAcceleration(x: number, y: number): Phaser.GameObjects.GameObject;

                setBodySize(width: number, height?: number): Phaser.GameObjects.GameObject;

                setBodyScale(scaleX: number, scaleY?: number): Phaser.GameObjects.GameObject;

                getBodyType(): number;

                setTypeNone(): Phaser.GameObjects.GameObject;

                setTypeA(): Phaser.GameObjects.GameObject;

                setTypeB(): Phaser.GameObjects.GameObject;

                setBounce(value: number): Phaser.GameObjects.GameObject;

                setMinBounceVelocity(value: number): Phaser.GameObjects.GameObject;

                bounce: number;

                setAvsB(): Phaser.GameObjects.GameObject;

                setBvsA(): Phaser.GameObjects.GameObject;

                setCheckAgainstNone(): Phaser.GameObjects.GameObject;

                setCheckAgainstA(): Phaser.GameObjects.GameObject;

                setCheckAgainstB(): Phaser.GameObjects.GameObject;

                checkAgainst: number;

                setCollideCallback(callback: CollideCallback, scope: any): Phaser.GameObjects.GameObject;

                setCollidesNever(): Phaser.GameObjects.GameObject;

                setLiteCollision(): Phaser.GameObjects.GameObject;

                setPassiveCollision(): Phaser.GameObjects.GameObject;

                setActiveCollision(): Phaser.GameObjects.GameObject;

                setFixedCollision(): Phaser.GameObjects.GameObject;

                collides: number;

                setDebug(showBody: boolean, showVelocity: boolean, bodyColor: number): Phaser.GameObjects.GameObject;

                setDebugBodyColor(value: number): Phaser.GameObjects.GameObject;

                debugShowBody: boolean;

                debugShowVelocity: boolean;

                debugBodyColor: number;

                setFrictionX(x: number): Phaser.GameObjects.GameObject;

                setFrictionY(y: number): Phaser.GameObjects.GameObject;

                setFriction(x: number, y: number): Phaser.GameObjects.GameObject;

                setGravity(value: number): Phaser.GameObjects.GameObject;

                gravity: number;

                setOffset(x: number, y: number, width?: number, height?: number): Phaser.GameObjects.GameObject;

                setGameObject(gameObject: Phaser.GameObjects.GameObject, sync?: boolean): Phaser.GameObjects.GameObject;

                syncGameObject(): Phaser.GameObjects.GameObject;

                setVelocityX(x: number): Phaser.GameObjects.GameObject;

                setVelocityY(y: number): Phaser.GameObjects.GameObject;

                setVelocity(x: number, y?: number): Phaser.GameObjects.GameObject;

                setMaxVelocity(x: number, y?: number): Phaser.GameObjects.GameObject;

            }

            class ImpactImage extends Phaser.GameObjects.Image implements Phaser.Physics.Impact.Components.Acceleration, Phaser.Physics.Impact.Components.BodyScale, Phaser.Physics.Impact.Components.BodyType, Phaser.Physics.Impact.Components.Bounce, Phaser.Physics.Impact.Components.CheckAgainst, Phaser.Physics.Impact.Components.Collides, Phaser.Physics.Impact.Components.Debug, Phaser.Physics.Impact.Components.Friction, Phaser.Physics.Impact.Components.Gravity, Phaser.Physics.Impact.Components.Offset, Phaser.Physics.Impact.Components.SetGameObject, Phaser.Physics.Impact.Components.Velocity, Phaser.GameObjects.Components.Alpha, Phaser.GameObjects.Components.BlendMode, Phaser.GameObjects.Components.Depth, Phaser.GameObjects.Components.Flip, Phaser.GameObjects.Components.GetBounds, Phaser.GameObjects.Components.Origin, Phaser.GameObjects.Components.Pipeline, Phaser.GameObjects.Components.ScaleMode, Phaser.GameObjects.Components.ScrollFactor, Phaser.GameObjects.Components.Size, Phaser.GameObjects.Components.Texture, Phaser.GameObjects.Components.Tint, Phaser.GameObjects.Components.Transform, Phaser.GameObjects.Components.Visible {
                constructor(world: Phaser.Physics.Impact.World, x: number, y: number, texture: string, frame?: string | integer);

                body: Phaser.Physics.Impact.Body;

                size: Object;

                offset: Object;

                vel: Object;

                accel: Object;

                friction: Object;

                maxVel: Object;

                clearAlpha(): this;

                setAlpha(topLeft?: number, topRight?: number, bottomLeft?: number, bottomRight?: number): this;

                alpha: number;

                alphaTopLeft: number;

                alphaTopRight: number;

                alphaBottomLeft: number;

                alphaBottomRight: number;

                blendMode: Phaser.BlendModes | string;

                setBlendMode(value: string | Phaser.BlendModes): this;

                depth: number;

                setDepth(value: integer): this;

                flipX: boolean;

                flipY: boolean;

                toggleFlipX(): this;

                toggleFlipY(): this;

                setFlipX(value: boolean): this;

                setFlipY(value: boolean): this;

                setFlip(x: boolean, y: boolean): this;

                resetFlip(): this;

                getCenter<O extends Phaser.Math.Vector2>(output?: O): O;

                getTopLeft<O extends Phaser.Math.Vector2>(output?: O, includeParent?: boolean): O;

                getTopRight<O extends Phaser.Math.Vector2>(output?: O, includeParent?: boolean): O;

                getBottomLeft<O extends Phaser.Math.Vector2>(output?: O, includeParent?: boolean): O;

                getBottomRight<O extends Phaser.Math.Vector2>(output?: O, includeParent?: boolean): O;

                getBounds<O extends Phaser.Geom.Rectangle>(output?: O): O;

                mask: Phaser.Display.Masks.BitmapMask | Phaser.Display.Masks.GeometryMask;

                setMask(mask: Phaser.Display.Masks.BitmapMask | Phaser.Display.Masks.GeometryMask): this;

                clearMask(destroyMask?: boolean): this;

                createBitmapMask(renderable?: Phaser.GameObjects.GameObject): Phaser.Display.Masks.BitmapMask;

                createGeometryMask(graphics?: Phaser.GameObjects.Graphics): Phaser.Display.Masks.GeometryMask;

                originX: number;

                originY: number;

                displayOriginX: number;

                displayOriginY: number;

                setOrigin(x?: number, y?: number): this;

                setOriginFromFrame(): this;

                setDisplayOrigin(x?: number, y?: number): this;

                updateDisplayOrigin(): this;

                defaultPipeline: Phaser.Renderer.WebGL.WebGLPipeline;

                pipeline: Phaser.Renderer.WebGL.WebGLPipeline;

                initPipeline(pipelineName: string): boolean;

                setPipeline(pipelineName: string): boolean;

                resetPipeline(): boolean;

                getPipelineName(): string;

                scaleMode: Phaser.ScaleModes;

                setScaleMode(value: Phaser.ScaleModes): this;

                scrollFactorX: number;

                scrollFactorY: number;

                setScrollFactor(x: number, y?: number): this;

                width: number;

                height: number;

                displayWidth: number;

                displayHeight: number;

                setSizeToFrame(frame: Phaser.Textures.Frame): this;

                setSize(width: number, height: number): this;

                setDisplaySize(width: number, height: number): this;

                texture: Phaser.Textures.Texture | Phaser.Textures.CanvasTexture;

                frame: Phaser.Textures.Frame;

                setTexture(key: string, frame?: string | integer): this;

                setFrame(frame: string | integer, updateSize?: boolean, updateOrigin?: boolean): this;

                clearTint(): this;

                setTint(topLeft?: integer, topRight?: integer, bottomLeft?: integer, bottomRight?: integer): this;

                tintTopLeft: integer;

                tintTopRight: integer;

                tintBottomLeft: integer;

                tintBottomRight: integer;

                tint: integer;

                x: number;

                y: number;

                z: number;

                w: number;

                scaleX: number;

                scaleY: number;

                angle: integer;

                rotation: number;

                setPosition(x?: number, y?: number, z?: number, w?: number): this;

                setRandomPosition(x?: number, y?: number, width?: number, height?: number): this;

                setRotation(radians?: number): this;

                setAngle(degrees?: number): this;

                setScale(x: number, y?: number): this;

                setX(value?: number): this;

                setY(value?: number): this;

                setZ(value?: number): this;

                setW(value?: number): this;

                getLocalTransformMatrix(tempMatrix?: Phaser.GameObjects.Components.TransformMatrix): Phaser.GameObjects.Components.TransformMatrix;

                getWorldTransformMatrix(tempMatrix?: Phaser.GameObjects.Components.TransformMatrix): Phaser.GameObjects.Components.TransformMatrix;

                visible: boolean;

                setVisible(value: boolean): this;

                setAccelerationX(x: number): Phaser.GameObjects.GameObject;

                setAccelerationY(y: number): Phaser.GameObjects.GameObject;

                setAcceleration(x: number, y: number): Phaser.GameObjects.GameObject;

                setBodySize(width: number, height?: number): Phaser.GameObjects.GameObject;

                setBodyScale(scaleX: number, scaleY?: number): Phaser.GameObjects.GameObject;

                getBodyType(): number;

                setTypeNone(): Phaser.GameObjects.GameObject;

                setTypeA(): Phaser.GameObjects.GameObject;

                setTypeB(): Phaser.GameObjects.GameObject;

                setBounce(value: number): Phaser.GameObjects.GameObject;

                setMinBounceVelocity(value: number): Phaser.GameObjects.GameObject;

                bounce: number;

                setAvsB(): Phaser.GameObjects.GameObject;

                setBvsA(): Phaser.GameObjects.GameObject;

                setCheckAgainstNone(): Phaser.GameObjects.GameObject;

                setCheckAgainstA(): Phaser.GameObjects.GameObject;

                setCheckAgainstB(): Phaser.GameObjects.GameObject;

                checkAgainst: number;

                setCollideCallback(callback: CollideCallback, scope: any): Phaser.GameObjects.GameObject;

                setCollidesNever(): Phaser.GameObjects.GameObject;

                setLiteCollision(): Phaser.GameObjects.GameObject;

                setPassiveCollision(): Phaser.GameObjects.GameObject;

                setActiveCollision(): Phaser.GameObjects.GameObject;

                setFixedCollision(): Phaser.GameObjects.GameObject;

                collides: number;

                setDebug(showBody: boolean, showVelocity: boolean, bodyColor: number): Phaser.GameObjects.GameObject;

                setDebugBodyColor(value: number): Phaser.GameObjects.GameObject;

                debugShowBody: boolean;

                debugShowVelocity: boolean;

                debugBodyColor: number;

                setFrictionX(x: number): Phaser.GameObjects.GameObject;

                setFrictionY(y: number): Phaser.GameObjects.GameObject;

                setFriction(x: number, y: number): Phaser.GameObjects.GameObject;

                setGravity(value: number): Phaser.GameObjects.GameObject;

                gravity: number;

                setOffset(x: number, y: number, width?: number, height?: number): Phaser.GameObjects.GameObject;

                setGameObject(gameObject: Phaser.GameObjects.GameObject, sync?: boolean): Phaser.GameObjects.GameObject;

                syncGameObject(): Phaser.GameObjects.GameObject;

                setVelocityX(x: number): Phaser.GameObjects.GameObject;

                setVelocityY(y: number): Phaser.GameObjects.GameObject;

                setVelocity(x: number, y?: number): Phaser.GameObjects.GameObject;

                setMaxVelocity(x: number, y?: number): Phaser.GameObjects.GameObject;

            }

            class ImpactPhysics {
                constructor(scene: Phaser.Scene);

                scene: Phaser.Scene;

                systems: Phaser.Scenes.Systems;

                config: object;

                world: Phaser.Physics.Impact.World;

                add: Phaser.Physics.Impact.Factory;

                getConfig(): object;

                pause(): Phaser.Physics.Impact.World;

                resume(): Phaser.Physics.Impact.World;

            }

            class ImpactSprite extends Phaser.GameObjects.Sprite implements Phaser.Physics.Impact.Components.Acceleration, Phaser.Physics.Impact.Components.BodyScale, Phaser.Physics.Impact.Components.BodyType, Phaser.Physics.Impact.Components.Bounce, Phaser.Physics.Impact.Components.CheckAgainst, Phaser.Physics.Impact.Components.Collides, Phaser.Physics.Impact.Components.Debug, Phaser.Physics.Impact.Components.Friction, Phaser.Physics.Impact.Components.Gravity, Phaser.Physics.Impact.Components.Offset, Phaser.Physics.Impact.Components.SetGameObject, Phaser.Physics.Impact.Components.Velocity, Phaser.GameObjects.Components.Alpha, Phaser.GameObjects.Components.BlendMode, Phaser.GameObjects.Components.Depth, Phaser.GameObjects.Components.Flip, Phaser.GameObjects.Components.GetBounds, Phaser.GameObjects.Components.Origin, Phaser.GameObjects.Components.Pipeline, Phaser.GameObjects.Components.ScaleMode, Phaser.GameObjects.Components.ScrollFactor, Phaser.GameObjects.Components.Size, Phaser.GameObjects.Components.Texture, Phaser.GameObjects.Components.Tint, Phaser.GameObjects.Components.Transform, Phaser.GameObjects.Components.Visible {
                constructor(world: Phaser.Physics.Impact.World, x: number, y: number, texture: string, frame?: string | integer);

                body: Phaser.Physics.Impact.Body;

                size: Object;

                offset: Object;

                vel: Object;

                accel: Object;

                friction: Object;

                maxVel: Object;

                clearAlpha(): this;

                setAlpha(topLeft?: number, topRight?: number, bottomLeft?: number, bottomRight?: number): this;

                alpha: number;

                alphaTopLeft: number;

                alphaTopRight: number;

                alphaBottomLeft: number;

                alphaBottomRight: number;

                blendMode: Phaser.BlendModes | string;

                setBlendMode(value: string | Phaser.BlendModes): this;

                depth: number;

                setDepth(value: integer): this;

                flipX: boolean;

                flipY: boolean;

                toggleFlipX(): this;

                toggleFlipY(): this;

                setFlipX(value: boolean): this;

                setFlipY(value: boolean): this;

                setFlip(x: boolean, y: boolean): this;

                resetFlip(): this;

                getCenter<O extends Phaser.Math.Vector2>(output?: O): O;

                getTopLeft<O extends Phaser.Math.Vector2>(output?: O, includeParent?: boolean): O;

                getTopRight<O extends Phaser.Math.Vector2>(output?: O, includeParent?: boolean): O;

                getBottomLeft<O extends Phaser.Math.Vector2>(output?: O, includeParent?: boolean): O;

                getBottomRight<O extends Phaser.Math.Vector2>(output?: O, includeParent?: boolean): O;

                getBounds<O extends Phaser.Geom.Rectangle>(output?: O): O;

                mask: Phaser.Display.Masks.BitmapMask | Phaser.Display.Masks.GeometryMask;

                setMask(mask: Phaser.Display.Masks.BitmapMask | Phaser.Display.Masks.GeometryMask): this;

                clearMask(destroyMask?: boolean): this;

                createBitmapMask(renderable?: Phaser.GameObjects.GameObject): Phaser.Display.Masks.BitmapMask;

                createGeometryMask(graphics?: Phaser.GameObjects.Graphics): Phaser.Display.Masks.GeometryMask;

                originX: number;

                originY: number;

                displayOriginX: number;

                displayOriginY: number;

                setOrigin(x?: number, y?: number): this;

                setOriginFromFrame(): this;

                setDisplayOrigin(x?: number, y?: number): this;

                updateDisplayOrigin(): this;

                defaultPipeline: Phaser.Renderer.WebGL.WebGLPipeline;

                pipeline: Phaser.Renderer.WebGL.WebGLPipeline;

                initPipeline(pipelineName: string): boolean;

                setPipeline(pipelineName: string): boolean;

                resetPipeline(): boolean;

                getPipelineName(): string;

                scaleMode: Phaser.ScaleModes;

                setScaleMode(value: Phaser.ScaleModes): this;

                scrollFactorX: number;

                scrollFactorY: number;

                setScrollFactor(x: number, y?: number): this;

                width: number;

                height: number;

                displayWidth: number;

                displayHeight: number;

                setSizeToFrame(frame: Phaser.Textures.Frame): this;

                setSize(width: number, height: number): this;

                setDisplaySize(width: number, height: number): this;

                texture: Phaser.Textures.Texture | Phaser.Textures.CanvasTexture;

                frame: Phaser.Textures.Frame;

                setTexture(key: string, frame?: string | integer): this;

                setFrame(frame: string | integer, updateSize?: boolean, updateOrigin?: boolean): this;

                clearTint(): this;

                setTint(topLeft?: integer, topRight?: integer, bottomLeft?: integer, bottomRight?: integer): this;

                tintTopLeft: integer;

                tintTopRight: integer;

                tintBottomLeft: integer;

                tintBottomRight: integer;

                tint: integer;

                x: number;

                y: number;

                z: number;

                w: number;

                scaleX: number;

                scaleY: number;

                angle: integer;

                rotation: number;

                setPosition(x?: number, y?: number, z?: number, w?: number): this;

                setRandomPosition(x?: number, y?: number, width?: number, height?: number): this;

                setRotation(radians?: number): this;

                setAngle(degrees?: number): this;

                setScale(x: number, y?: number): this;

                setX(value?: number): this;

                setY(value?: number): this;

                setZ(value?: number): this;

                setW(value?: number): this;

                getLocalTransformMatrix(tempMatrix?: Phaser.GameObjects.Components.TransformMatrix): Phaser.GameObjects.Components.TransformMatrix;

                getWorldTransformMatrix(tempMatrix?: Phaser.GameObjects.Components.TransformMatrix): Phaser.GameObjects.Components.TransformMatrix;

                visible: boolean;

                setVisible(value: boolean): this;

                setAccelerationX(x: number): Phaser.GameObjects.GameObject;

                setAccelerationY(y: number): Phaser.GameObjects.GameObject;

                setAcceleration(x: number, y: number): Phaser.GameObjects.GameObject;

                setBodySize(width: number, height?: number): Phaser.GameObjects.GameObject;

                setBodyScale(scaleX: number, scaleY?: number): Phaser.GameObjects.GameObject;

                getBodyType(): number;

                setTypeNone(): Phaser.GameObjects.GameObject;

                setTypeA(): Phaser.GameObjects.GameObject;

                setTypeB(): Phaser.GameObjects.GameObject;

                setBounce(value: number): Phaser.GameObjects.GameObject;

                setMinBounceVelocity(value: number): Phaser.GameObjects.GameObject;

                bounce: number;

                setAvsB(): Phaser.GameObjects.GameObject;

                setBvsA(): Phaser.GameObjects.GameObject;

                setCheckAgainstNone(): Phaser.GameObjects.GameObject;

                setCheckAgainstA(): Phaser.GameObjects.GameObject;

                setCheckAgainstB(): Phaser.GameObjects.GameObject;

                checkAgainst: number;

                setCollideCallback(callback: CollideCallback, scope: any): Phaser.GameObjects.GameObject;

                setCollidesNever(): Phaser.GameObjects.GameObject;

                setLiteCollision(): Phaser.GameObjects.GameObject;

                setPassiveCollision(): Phaser.GameObjects.GameObject;

                setActiveCollision(): Phaser.GameObjects.GameObject;

                setFixedCollision(): Phaser.GameObjects.GameObject;

                collides: number;

                setDebug(showBody: boolean, showVelocity: boolean, bodyColor: number): Phaser.GameObjects.GameObject;

                setDebugBodyColor(value: number): Phaser.GameObjects.GameObject;

                debugShowBody: boolean;

                debugShowVelocity: boolean;

                debugBodyColor: number;

                setFrictionX(x: number): Phaser.GameObjects.GameObject;

                setFrictionY(y: number): Phaser.GameObjects.GameObject;

                setFriction(x: number, y: number): Phaser.GameObjects.GameObject;

                setGravity(value: number): Phaser.GameObjects.GameObject;

                gravity: number;

                setOffset(x: number, y: number, width?: number, height?: number): Phaser.GameObjects.GameObject;

                setGameObject(gameObject: Phaser.GameObjects.GameObject, sync?: boolean): Phaser.GameObjects.GameObject;

                syncGameObject(): Phaser.GameObjects.GameObject;

                setVelocityX(x: number): Phaser.GameObjects.GameObject;

                setVelocityY(y: number): Phaser.GameObjects.GameObject;

                setVelocity(x: number, y?: number): Phaser.GameObjects.GameObject;

                setMaxVelocity(x: number, y?: number): Phaser.GameObjects.GameObject;

            }

            function SeperateX(world: Phaser.Physics.Impact.World, left: Phaser.Physics.Impact.Body, right: Phaser.Physics.Impact.Body, weak?: Phaser.Physics.Impact.Body): void;

            function SeperateY(world: Phaser.Physics.Impact.World, top: Phaser.Physics.Impact.Body, bottom: Phaser.Physics.Impact.Body, weak?: Phaser.Physics.Impact.Body): void;

            function Solver(world: Phaser.Physics.Impact.World, bodyA: Phaser.Physics.Impact.Body, bodyB: Phaser.Physics.Impact.Body): void;

            enum TYPE {
                NONE,
                A,
                B,
                BOTH,
            }

            function UpdateMotion(body: Phaser.Physics.Impact.Body, res: object): void;

            type WorldConfig = {
                gravity?: number;
                cellSize?: number;
                timeScale?: number;
                maxStep?: number;
                debug?: boolean;
                maxVelocity?: number;
                debugShowBody?: boolean;
                debugShowVelocity?: boolean;
                debugBodyColor?: number;
                debugVelocityColor?: number;
                maxVelocityX?: number;
                maxVelocityY?: number;
                minBounceVelocity?: number;
                gravityFactor?: number;
                bounciness?: number;
                setBounds?: object | boolean;
                "setBounds.x"?: number;
                "setBounds.y"?: number;
                "setBounds.width"?: number;
                "setBounds.height"?: number;
                "setBounds.thickness"?: number;
                "setBounds.left"?: boolean;
                "setBounds.right"?: boolean;
                "setBounds.top"?: boolean;
                "setBounds.bottom"?: boolean;
            };

            type WorldDefaults = {
                debugShowBody: boolean;
                debugShowVelocity: boolean;
                bodyDebugColor: number;
                velocityDebugColor: number;
                maxVelocityX: number;
                maxVelocityY: number;
                minBounceVelocity: number;
                gravityFactor: number;
                bounciness: number;
            };

            type WorldWalls = {
                left: Phaser.Physics.Impact.Body;
                right: Phaser.Physics.Impact.Body;
                top: Phaser.Physics.Impact.Body;
                bottom: Phaser.Physics.Impact.Body;
            };

            class World extends Phaser.Events.EventEmitter {
                constructor(scene: Phaser.Scene, config: Phaser.Physics.Impact.WorldConfig);

                scene: Phaser.Scene;

                bodies: Phaser.Structs.Set<Phaser.Physics.Impact.Body>;

                gravity: number;

                cellSize: integer;

                collisionMap: Phaser.Physics.Impact.CollisionMap;

                timeScale: number;

                maxStep: number;

                enabled: boolean;

                drawDebug: boolean;

                debugGraphic: Phaser.GameObjects.Graphics;

                defaults: Phaser.Physics.Impact.WorldDefaults;

                walls: Phaser.Physics.Impact.WorldWalls;

                delta: number;

                setCollisionMap(key: string | integer[][], tileSize: integer): Phaser.Physics.Impact.CollisionMap;

                setCollisionMapFromTilemapLayer(tilemapLayer: Phaser.Tilemaps.DynamicTilemapLayer | Phaser.Tilemaps.StaticTilemapLayer, options?: object): Phaser.Physics.Impact.CollisionMap;

                setBounds(x?: number, y?: number, width?: number, height?: number, thickness?: number, left?: boolean, right?: boolean, top?: boolean, bottom?: boolean): Phaser.Physics.Impact.World;

                updateWall(add: boolean, position: string, x: number, y: number, width: number, height: number): void;

                createDebugGraphic(): Phaser.GameObjects.Graphics;

                getNextID(): integer;

                create(x: number, y: number, sizeX: number, sizeY: number): Phaser.Physics.Impact.Body;

                remove(object: Phaser.Physics.Impact.Body): void;

                pause(): Phaser.Physics.Impact.World;

                resume(): Phaser.Physics.Impact.World;

                update(time: number, delta: number): void;

                checkHash(body: Phaser.Physics.Impact.Body, hash: object, size: number): void;

                checkBodies(bodyA: Phaser.Physics.Impact.Body, bodyB: Phaser.Physics.Impact.Body): void;

                setCollidesNever(bodies: Phaser.Physics.Impact.Body[]): Phaser.Physics.Impact.World;

                setLite(bodies: Phaser.Physics.Impact.Body[]): Phaser.Physics.Impact.World;

                setPassive(bodies: Phaser.Physics.Impact.Body[]): Phaser.Physics.Impact.World;

                setActive(bodies: Phaser.Physics.Impact.Body[]): Phaser.Physics.Impact.World;

                setFixed(bodies: Phaser.Physics.Impact.Body[]): Phaser.Physics.Impact.World;

                setTypeNone(bodies: Phaser.Physics.Impact.Body[]): Phaser.Physics.Impact.World;

                setTypeA(bodies: Phaser.Physics.Impact.Body[]): Phaser.Physics.Impact.World;

                setTypeB(bodies: Phaser.Physics.Impact.Body[]): Phaser.Physics.Impact.World;

                setAvsB(bodies: Phaser.Physics.Impact.Body[]): Phaser.Physics.Impact.World;

                setBvsA(bodies: Phaser.Physics.Impact.Body[]): Phaser.Physics.Impact.World;

                setCheckAgainstNone(bodies: Phaser.Physics.Impact.Body[]): Phaser.Physics.Impact.World;

                setCheckAgainstA(bodies: Phaser.Physics.Impact.Body[]): Phaser.Physics.Impact.World;

                setCheckAgainstB(bodies: Phaser.Physics.Impact.Body[]): Phaser.Physics.Impact.World;

                shutdown(): void;

                destroy(): void;

            }

        }

        namespace Matter {
            namespace Components {
                interface Bounce {
                    setBounce(value: number): Phaser.GameObjects.GameObject;
                }

                interface Collision {
                    setCollisionCategory(value: number): Phaser.GameObjects.GameObject;
                    setCollisionGroup(value: number): Phaser.GameObjects.GameObject;
                    setCollidesWith(categories: number | number[]): Phaser.GameObjects.GameObject;
                }

                interface Force {
                    applyForce(force: Phaser.Math.Vector2): Phaser.GameObjects.GameObject;
                    applyForceFrom(position: Phaser.Math.Vector2, force: Phaser.Math.Vector2): Phaser.GameObjects.GameObject;
                    thrust(speed: number): Phaser.GameObjects.GameObject;
                    thrustLeft(speed: number): Phaser.GameObjects.GameObject;
                    thrustRight(speed: number): Phaser.GameObjects.GameObject;
                    thrustBack(speed: number): Phaser.GameObjects.GameObject;
                }

                interface Friction {
                    setFriction(value: number, air?: number, fstatic?: number): Phaser.GameObjects.GameObject;
                    setFrictionAir(value: number): Phaser.GameObjects.GameObject;
                    setFrictionStatic(value: number): Phaser.GameObjects.GameObject;
                }

                interface Gravity {
                    setIgnoreGravity(value: boolean): Phaser.GameObjects.GameObject;
                }

                interface Mass {
                    setMass(value: number): Phaser.GameObjects.GameObject;
                    setDensity(value: number): Phaser.GameObjects.GameObject;
                    readonly centerOfMass: any;
                }

                interface Sensor {
                    setSensor(value: boolean): Phaser.GameObjects.GameObject;
                    isSensor(): boolean;
                }

                interface SetBody {
                    setRectangle(width: number, height: number, options: object): Phaser.GameObjects.GameObject;
                    setCircle(radius: number, options: object): Phaser.GameObjects.GameObject;
                    setPolygon(radius: number, sides: number, options: object): Phaser.GameObjects.GameObject;
                    setTrapezoid(width: number, height: number, slope: number, options: object): Phaser.GameObjects.GameObject;
                    setExistingBody(body: MatterJS.Body, addToWorld?: boolean): Phaser.GameObjects.GameObject;
                    setBody(config: object, options: object): Phaser.GameObjects.GameObject;
                }

                interface Sleep {
                    setSleepThreshold(value?: number): Phaser.GameObjects.GameObject;
                    setSleepEvents(start: boolean, end: boolean): Phaser.GameObjects.GameObject;
                    setSleepStartEvent(value: boolean): Phaser.GameObjects.GameObject;
                    setSleepEndEvent(value: boolean): Phaser.GameObjects.GameObject;
                }

                interface Static {
                    setStatic(value: boolean): Phaser.GameObjects.GameObject;
                    isStatic(): boolean;
                }

                interface Transform {
                    x: number;
                    y: number;
                    scaleX: number;
                    scaleY: number;
                    angle: number;
                    rotation: number;
                    setPosition(x?: number, y?: number): void;
                    setRotation(radians?: number): Phaser.GameObjects.GameObject;
                    setFixedRotation(): Phaser.GameObjects.GameObject;
                    setAngle(degrees?: number): Phaser.GameObjects.GameObject;
                    setScale(x?: number, y?: number, point?: Phaser.Math.Vector2): Phaser.GameObjects.GameObject;
                }

                interface Velocity {
                    setAngularVelocity(value: number): Phaser.GameObjects.GameObject;
                    setVelocityX(x: number): Phaser.GameObjects.GameObject;
                    setVelocityY(y: number): Phaser.GameObjects.GameObject;
                    setVelocity(x: number, y?: number): Phaser.GameObjects.GameObject;
                }

            }

            class Factory {
                constructor(world: Phaser.Physics.Matter.World);

                world: Phaser.Physics.Matter.World;

                scene: Phaser.Scene;

                sys: Phaser.Scenes.Systems;

                rectangle(x: number, y: number, width: number, height: number, options: object): MatterJS.Body;

                trapezoid(x: number, y: number, width: number, height: number, slope: number, options: object): MatterJS.Body;

                circle(x: number, y: number, radius: number, options: object, maxSides: number): MatterJS.Body;

                polygon(x: number, y: number, sides: number, radius: number, options: object): MatterJS.Body;

                fromVertices(x: number, y: number, vertexSets: any[], options: object, flagInternal: boolean, removeCollinear: boolean, minimumArea: number): MatterJS.Body;

                imageStack(key: string, frame: string | integer, x: number, y: number, columns: number, rows: number, columnGap?: number, rowGap?: number, options?: object): MatterJS.Composite;

                stack(x: number, y: number, columns: number, rows: number, columnGap: number, rowGap: number, callback: Function): MatterJS.Composite;

                pyramid(x: number, y: number, columns: number, rows: number, columnGap: number, rowGap: number, callback: Function): MatterJS.Composite;

                chain(composite: MatterJS.Composite, xOffsetA: number, yOffsetA: number, xOffsetB: number, yOffsetB: number, options: object): MatterJS.Composite;

                mesh(composite: MatterJS.Composite, columns: number, rows: number, crossBrace: boolean, options: object): MatterJS.Composite;

                newtonsCradle(x: number, y: number, number: number, size: number, length: number): MatterJS.Composite;

                car(x: number, y: number, width: number, height: number, wheelSize: number): MatterJS.Composite;

                softBody(x: number, y: number, columns: number, rows: number, columnGap: number, rowGap: number, crossBrace: boolean, particleRadius: number, particleOptions: object, constraintOptions: object): MatterJS.Composite;

                joint(bodyA: MatterJS.Body, bodyB: MatterJS.Body, length: number, stiffness?: number, options?: object): MatterJS.Constraint;

                spring(bodyA: MatterJS.Body, bodyB: MatterJS.Body, length: number, stiffness?: number, options?: object): MatterJS.Constraint;

                constraint(bodyA: MatterJS.Body, bodyB: MatterJS.Body, length: number, stiffness?: number, options?: object): MatterJS.Constraint;

                worldConstraint(bodyB: MatterJS.Body, length: number, stiffness?: number, options?: object): MatterJS.Constraint;

                mouseSpring(options: object): MatterJS.Constraint;

                pointerConstraint(options: object): MatterJS.Constraint;

                image(x: number, y: number, key: string, frame?: string | integer, options?: object): Phaser.Physics.Matter.Image;

                tileBody(tile: Phaser.Tilemaps.Tile, options: object): Phaser.Physics.Matter.TileBody;

                sprite(x: number, y: number, key: string, frame?: string | integer, options?: object): Phaser.Physics.Matter.Sprite;

                gameObject(gameObject: Phaser.GameObjects.GameObject, options: object): Phaser.GameObjects.GameObject;

                destroy(): void;

            }

            function MatterGameObject(world: Phaser.Physics.Matter.World, gameObject: Phaser.GameObjects.GameObject, options: object): Phaser.GameObjects.GameObject;

            class Image extends Phaser.GameObjects.Image implements Phaser.Physics.Matter.Components.Bounce, Phaser.Physics.Matter.Components.Collision, Phaser.Physics.Matter.Components.Force, Phaser.Physics.Matter.Components.Friction, Phaser.Physics.Matter.Components.Gravity, Phaser.Physics.Matter.Components.Mass, Phaser.Physics.Matter.Components.Sensor, Phaser.Physics.Matter.Components.SetBody, Phaser.Physics.Matter.Components.Sleep, Phaser.Physics.Matter.Components.Static, Phaser.Physics.Matter.Components.Transform, Phaser.Physics.Matter.Components.Velocity, Phaser.GameObjects.Components.Alpha, Phaser.GameObjects.Components.BlendMode, Phaser.GameObjects.Components.Depth, Phaser.GameObjects.Components.Flip, Phaser.GameObjects.Components.GetBounds, Phaser.GameObjects.Components.Origin, Phaser.GameObjects.Components.Pipeline, Phaser.GameObjects.Components.ScaleMode, Phaser.GameObjects.Components.ScrollFactor, Phaser.GameObjects.Components.Size, Phaser.GameObjects.Components.Texture, Phaser.GameObjects.Components.Tint, Phaser.GameObjects.Components.Transform, Phaser.GameObjects.Components.Visible {
                constructor(world: Phaser.Physics.Matter.World, x: number, y: number, texture: string, frame?: string | integer, options?: object);

                world: Phaser.Physics.Matter.World;

                clearAlpha(): this;

                setAlpha(topLeft?: number, topRight?: number, bottomLeft?: number, bottomRight?: number): this;

                alpha: number;

                alphaTopLeft: number;

                alphaTopRight: number;

                alphaBottomLeft: number;

                alphaBottomRight: number;

                blendMode: Phaser.BlendModes | string;

                setBlendMode(value: string | Phaser.BlendModes): this;

                depth: number;

                setDepth(value: integer): this;

                flipX: boolean;

                flipY: boolean;

                toggleFlipX(): this;

                toggleFlipY(): this;

                setFlipX(value: boolean): this;

                setFlipY(value: boolean): this;

                setFlip(x: boolean, y: boolean): this;

                resetFlip(): this;

                getCenter<O extends Phaser.Math.Vector2>(output?: O): O;

                getTopLeft<O extends Phaser.Math.Vector2>(output?: O, includeParent?: boolean): O;

                getTopRight<O extends Phaser.Math.Vector2>(output?: O, includeParent?: boolean): O;

                getBottomLeft<O extends Phaser.Math.Vector2>(output?: O, includeParent?: boolean): O;

                getBottomRight<O extends Phaser.Math.Vector2>(output?: O, includeParent?: boolean): O;

                getBounds<O extends Phaser.Geom.Rectangle>(output?: O): O;

                mask: Phaser.Display.Masks.BitmapMask | Phaser.Display.Masks.GeometryMask;

                setMask(mask: Phaser.Display.Masks.BitmapMask | Phaser.Display.Masks.GeometryMask): this;

                clearMask(destroyMask?: boolean): this;

                createBitmapMask(renderable?: Phaser.GameObjects.GameObject): Phaser.Display.Masks.BitmapMask;

                createGeometryMask(graphics?: Phaser.GameObjects.Graphics): Phaser.Display.Masks.GeometryMask;

                originX: number;

                originY: number;

                displayOriginX: number;

                displayOriginY: number;

                setOrigin(x?: number, y?: number): this;

                setOriginFromFrame(): this;

                setDisplayOrigin(x?: number, y?: number): this;

                updateDisplayOrigin(): this;

                defaultPipeline: Phaser.Renderer.WebGL.WebGLPipeline;

                pipeline: Phaser.Renderer.WebGL.WebGLPipeline;

                initPipeline(pipelineName: string): boolean;

                setPipeline(pipelineName: string): boolean;

                resetPipeline(): boolean;

                getPipelineName(): string;

                scaleMode: Phaser.ScaleModes;

                setScaleMode(value: Phaser.ScaleModes): this;

                scrollFactorX: number;

                scrollFactorY: number;

                setScrollFactor(x: number, y?: number): this;

                width: number;

                height: number;

                displayWidth: number;

                displayHeight: number;

                setSizeToFrame(frame: Phaser.Textures.Frame): this;

                setSize(width: number, height: number): this;

                setDisplaySize(width: number, height: number): this;

                texture: Phaser.Textures.Texture | Phaser.Textures.CanvasTexture;

                frame: Phaser.Textures.Frame;

                setTexture(key: string, frame?: string | integer): this;

                setFrame(frame: string | integer, updateSize?: boolean, updateOrigin?: boolean): this;

                clearTint(): this;

                setTint(topLeft?: integer, topRight?: integer, bottomLeft?: integer, bottomRight?: integer): this;

                tintTopLeft: integer;

                tintTopRight: integer;

                tintBottomLeft: integer;

                tintBottomRight: integer;

                tint: integer;

                x: number;

                y: number;

                z: number;

                w: number;

                scaleX: number;

                scaleY: number;

                angle: integer;

                rotation: number;

                setPosition(x?: number, y?: number, z?: number, w?: number): this;

                setRandomPosition(x?: number, y?: number, width?: number, height?: number): this;

                setRotation(radians?: number): this;

                setAngle(degrees?: number): this;

                setScale(x: number, y?: number): this;

                setX(value?: number): this;

                setY(value?: number): this;

                setZ(value?: number): this;

                setW(value?: number): this;

                getLocalTransformMatrix(tempMatrix?: Phaser.GameObjects.Components.TransformMatrix): Phaser.GameObjects.Components.TransformMatrix;

                getWorldTransformMatrix(tempMatrix?: Phaser.GameObjects.Components.TransformMatrix): Phaser.GameObjects.Components.TransformMatrix;

                visible: boolean;

                setVisible(value: boolean): this;

                setBounce(value: number): Phaser.GameObjects.GameObject;

                setCollisionCategory(value: number): Phaser.GameObjects.GameObject;

                setCollisionGroup(value: number): Phaser.GameObjects.GameObject;

                setCollidesWith(categories: number | number[]): Phaser.GameObjects.GameObject;

                applyForce(force: Phaser.Math.Vector2): Phaser.GameObjects.GameObject;

                applyForceFrom(position: Phaser.Math.Vector2, force: Phaser.Math.Vector2): Phaser.GameObjects.GameObject;

                thrust(speed: number): Phaser.GameObjects.GameObject;

                thrustLeft(speed: number): Phaser.GameObjects.GameObject;

                thrustRight(speed: number): Phaser.GameObjects.GameObject;

                thrustBack(speed: number): Phaser.GameObjects.GameObject;

                setFriction(value: number, air?: number, fstatic?: number): Phaser.GameObjects.GameObject;

                setFrictionAir(value: number): Phaser.GameObjects.GameObject;

                setFrictionStatic(value: number): Phaser.GameObjects.GameObject;

                setIgnoreGravity(value: boolean): Phaser.GameObjects.GameObject;

                setMass(value: number): Phaser.GameObjects.GameObject;

                setDensity(value: number): Phaser.GameObjects.GameObject;

                readonly centerOfMass: any;

                setSensor(value: boolean): Phaser.GameObjects.GameObject;

                isSensor(): boolean;

                setRectangle(width: number, height: number, options: object): Phaser.GameObjects.GameObject;

                setCircle(radius: number, options: object): Phaser.GameObjects.GameObject;

                setPolygon(radius: number, sides: number, options: object): Phaser.GameObjects.GameObject;

                setTrapezoid(width: number, height: number, slope: number, options: object): Phaser.GameObjects.GameObject;

                setExistingBody(body: MatterJS.Body, addToWorld?: boolean): Phaser.GameObjects.GameObject;

                setBody(config: object, options: object): Phaser.GameObjects.GameObject;

                setSleepThreshold(value?: number): Phaser.GameObjects.GameObject;

                setSleepEvents(start: boolean, end: boolean): Phaser.GameObjects.GameObject;

                setSleepStartEvent(value: boolean): Phaser.GameObjects.GameObject;

                setSleepEndEvent(value: boolean): Phaser.GameObjects.GameObject;

                setStatic(value: boolean): Phaser.GameObjects.GameObject;

                isStatic(): boolean;

                setFixedRotation(): Phaser.GameObjects.GameObject;

                setAngularVelocity(value: number): Phaser.GameObjects.GameObject;

                setVelocityX(x: number): Phaser.GameObjects.GameObject;

                setVelocityY(y: number): Phaser.GameObjects.GameObject;

                setVelocity(x: number, y?: number): Phaser.GameObjects.GameObject;

            }

            class MatterPhysics {
                constructor(scene: Phaser.Scene);

                scene: Phaser.Scene;

                systems: Phaser.Scenes.Systems;

                config: object;

                world: Phaser.Physics.Matter.World;

                add: Phaser.Physics.Matter.Factory;

                getConfig(): object;

                enableAttractorPlugin(): Phaser.Physics.Matter.MatterPhysics;

                enableWrapPlugin(): Phaser.Physics.Matter.MatterPhysics;

                pause(): Phaser.Physics.Matter.World;

                resume(): Phaser.Physics.Matter.World;

                set60Hz(): Phaser.Physics.Matter.MatterPhysics;

                set30Hz(): Phaser.Physics.Matter.MatterPhysics;

                step(delta?: number, correction?: number): void;

            }

            class Sprite extends Phaser.GameObjects.Sprite implements Phaser.Physics.Matter.Components.Bounce, Phaser.Physics.Matter.Components.Collision, Phaser.Physics.Matter.Components.Force, Phaser.Physics.Matter.Components.Friction, Phaser.Physics.Matter.Components.Gravity, Phaser.Physics.Matter.Components.Mass, Phaser.Physics.Matter.Components.Sensor, Phaser.Physics.Matter.Components.SetBody, Phaser.Physics.Matter.Components.Sleep, Phaser.Physics.Matter.Components.Static, Phaser.Physics.Matter.Components.Transform, Phaser.Physics.Matter.Components.Velocity, Phaser.GameObjects.Components.Alpha, Phaser.GameObjects.Components.BlendMode, Phaser.GameObjects.Components.Depth, Phaser.GameObjects.Components.Flip, Phaser.GameObjects.Components.GetBounds, Phaser.GameObjects.Components.Origin, Phaser.GameObjects.Components.Pipeline, Phaser.GameObjects.Components.ScaleMode, Phaser.GameObjects.Components.ScrollFactor, Phaser.GameObjects.Components.Size, Phaser.GameObjects.Components.Texture, Phaser.GameObjects.Components.Tint, Phaser.GameObjects.Components.Transform, Phaser.GameObjects.Components.Visible {
                constructor(world: Phaser.Physics.Matter.World, x: number, y: number, texture: string, frame?: string | integer, options?: object);

                world: Phaser.Physics.Matter.World;

                clearAlpha(): this;

                setAlpha(topLeft?: number, topRight?: number, bottomLeft?: number, bottomRight?: number): this;

                alpha: number;

                alphaTopLeft: number;

                alphaTopRight: number;

                alphaBottomLeft: number;

                alphaBottomRight: number;

                blendMode: Phaser.BlendModes | string;

                setBlendMode(value: string | Phaser.BlendModes): this;

                depth: number;

                setDepth(value: integer): this;

                flipX: boolean;

                flipY: boolean;

                toggleFlipX(): this;

                toggleFlipY(): this;

                setFlipX(value: boolean): this;

                setFlipY(value: boolean): this;

                setFlip(x: boolean, y: boolean): this;

                resetFlip(): this;

                getCenter<O extends Phaser.Math.Vector2>(output?: O): O;

                getTopLeft<O extends Phaser.Math.Vector2>(output?: O, includeParent?: boolean): O;

                getTopRight<O extends Phaser.Math.Vector2>(output?: O, includeParent?: boolean): O;

                getBottomLeft<O extends Phaser.Math.Vector2>(output?: O, includeParent?: boolean): O;

                getBottomRight<O extends Phaser.Math.Vector2>(output?: O, includeParent?: boolean): O;

                getBounds<O extends Phaser.Geom.Rectangle>(output?: O): O;

                mask: Phaser.Display.Masks.BitmapMask | Phaser.Display.Masks.GeometryMask;

                setMask(mask: Phaser.Display.Masks.BitmapMask | Phaser.Display.Masks.GeometryMask): this;

                clearMask(destroyMask?: boolean): this;

                createBitmapMask(renderable?: Phaser.GameObjects.GameObject): Phaser.Display.Masks.BitmapMask;

                createGeometryMask(graphics?: Phaser.GameObjects.Graphics): Phaser.Display.Masks.GeometryMask;

                originX: number;

                originY: number;

                displayOriginX: number;

                displayOriginY: number;

                setOrigin(x?: number, y?: number): this;

                setOriginFromFrame(): this;

                setDisplayOrigin(x?: number, y?: number): this;

                updateDisplayOrigin(): this;

                defaultPipeline: Phaser.Renderer.WebGL.WebGLPipeline;

                pipeline: Phaser.Renderer.WebGL.WebGLPipeline;

                initPipeline(pipelineName: string): boolean;

                setPipeline(pipelineName: string): boolean;

                resetPipeline(): boolean;

                getPipelineName(): string;

                scaleMode: Phaser.ScaleModes;

                setScaleMode(value: Phaser.ScaleModes): this;

                scrollFactorX: number;

                scrollFactorY: number;

                setScrollFactor(x: number, y?: number): this;

                width: number;

                height: number;

                displayWidth: number;

                displayHeight: number;

                setSizeToFrame(frame: Phaser.Textures.Frame): this;

                setSize(width: number, height: number): this;

                setDisplaySize(width: number, height: number): this;

                texture: Phaser.Textures.Texture | Phaser.Textures.CanvasTexture;

                frame: Phaser.Textures.Frame;

                setTexture(key: string, frame?: string | integer): this;

                setFrame(frame: string | integer, updateSize?: boolean, updateOrigin?: boolean): this;

                clearTint(): this;

                setTint(topLeft?: integer, topRight?: integer, bottomLeft?: integer, bottomRight?: integer): this;

                tintTopLeft: integer;

                tintTopRight: integer;

                tintBottomLeft: integer;

                tintBottomRight: integer;

                tint: integer;

                x: number;

                y: number;

                z: number;

                w: number;

                scaleX: number;

                scaleY: number;

                angle: integer;

                rotation: number;

                setPosition(x?: number, y?: number, z?: number, w?: number): this;

                setRandomPosition(x?: number, y?: number, width?: number, height?: number): this;

                setRotation(radians?: number): this;

                setAngle(degrees?: number): this;

                setScale(x: number, y?: number): this;

                setX(value?: number): this;

                setY(value?: number): this;

                setZ(value?: number): this;

                setW(value?: number): this;

                getLocalTransformMatrix(tempMatrix?: Phaser.GameObjects.Components.TransformMatrix): Phaser.GameObjects.Components.TransformMatrix;

                getWorldTransformMatrix(tempMatrix?: Phaser.GameObjects.Components.TransformMatrix): Phaser.GameObjects.Components.TransformMatrix;

                visible: boolean;

                setVisible(value: boolean): this;

                setBounce(value: number): Phaser.GameObjects.GameObject;

                setCollisionCategory(value: number): Phaser.GameObjects.GameObject;

                setCollisionGroup(value: number): Phaser.GameObjects.GameObject;

                setCollidesWith(categories: number | number[]): Phaser.GameObjects.GameObject;

                applyForce(force: Phaser.Math.Vector2): Phaser.GameObjects.GameObject;

                applyForceFrom(position: Phaser.Math.Vector2, force: Phaser.Math.Vector2): Phaser.GameObjects.GameObject;

                thrust(speed: number): Phaser.GameObjects.GameObject;

                thrustLeft(speed: number): Phaser.GameObjects.GameObject;

                thrustRight(speed: number): Phaser.GameObjects.GameObject;

                thrustBack(speed: number): Phaser.GameObjects.GameObject;

                setFriction(value: number, air?: number, fstatic?: number): Phaser.GameObjects.GameObject;

                setFrictionAir(value: number): Phaser.GameObjects.GameObject;

                setFrictionStatic(value: number): Phaser.GameObjects.GameObject;

                setIgnoreGravity(value: boolean): Phaser.GameObjects.GameObject;

                setMass(value: number): Phaser.GameObjects.GameObject;

                setDensity(value: number): Phaser.GameObjects.GameObject;

                readonly centerOfMass: any;

                setSensor(value: boolean): Phaser.GameObjects.GameObject;

                isSensor(): boolean;

                setRectangle(width: number, height: number, options: object): Phaser.GameObjects.GameObject;

                setCircle(radius: number, options: object): Phaser.GameObjects.GameObject;

                setPolygon(radius: number, sides: number, options: object): Phaser.GameObjects.GameObject;

                setTrapezoid(width: number, height: number, slope: number, options: object): Phaser.GameObjects.GameObject;

                setExistingBody(body: MatterJS.Body, addToWorld?: boolean): Phaser.GameObjects.GameObject;

                setBody(config: object, options: object): Phaser.GameObjects.GameObject;

                setSleepThreshold(value?: number): Phaser.GameObjects.GameObject;

                setSleepEvents(start: boolean, end: boolean): Phaser.GameObjects.GameObject;

                setSleepStartEvent(value: boolean): Phaser.GameObjects.GameObject;

                setSleepEndEvent(value: boolean): Phaser.GameObjects.GameObject;

                setStatic(value: boolean): Phaser.GameObjects.GameObject;

                isStatic(): boolean;

                setFixedRotation(): Phaser.GameObjects.GameObject;

                setAngularVelocity(value: number): Phaser.GameObjects.GameObject;

                setVelocityX(x: number): Phaser.GameObjects.GameObject;

                setVelocityY(y: number): Phaser.GameObjects.GameObject;

                setVelocity(x: number, y?: number): Phaser.GameObjects.GameObject;

            }

            class TileBody implements Phaser.Physics.Matter.Components.Bounce, Phaser.Physics.Matter.Components.Collision, Phaser.Physics.Matter.Components.Friction, Phaser.Physics.Matter.Components.Gravity, Phaser.Physics.Matter.Components.Mass, Phaser.Physics.Matter.Components.Sensor, Phaser.Physics.Matter.Components.Sleep, Phaser.Physics.Matter.Components.Static {
                constructor(world: Phaser.Physics.Matter.World, tile: Phaser.Tilemaps.Tile, options?: object);

                tile: Phaser.Tilemaps.Tile;

                world: Phaser.Physics.Matter.World;

                setFromTileRectangle(options?: object): Phaser.Physics.Matter.TileBody;

                setFromTileCollision(options?: object): Phaser.Physics.Matter.TileBody;

                setBody(body: MatterJS.Body, addToWorld?: boolean): Phaser.Physics.Matter.TileBody;

                removeBody(): Phaser.Physics.Matter.TileBody;

                destroy(): Phaser.Physics.Matter.TileBody;

                setBounce(value: number): Phaser.GameObjects.GameObject;

                setCollisionCategory(value: number): Phaser.GameObjects.GameObject;

                setCollisionGroup(value: number): Phaser.GameObjects.GameObject;

                setCollidesWith(categories: number | number[]): Phaser.GameObjects.GameObject;

                setFriction(value: number, air?: number, fstatic?: number): Phaser.GameObjects.GameObject;

                setFrictionAir(value: number): Phaser.GameObjects.GameObject;

                setFrictionStatic(value: number): Phaser.GameObjects.GameObject;

                setIgnoreGravity(value: boolean): Phaser.GameObjects.GameObject;

                setMass(value: number): Phaser.GameObjects.GameObject;

                setDensity(value: number): Phaser.GameObjects.GameObject;

                readonly centerOfMass: any;

                setSensor(value: boolean): Phaser.GameObjects.GameObject;

                isSensor(): boolean;

                setSleepThreshold(value?: number): Phaser.GameObjects.GameObject;

                setSleepEvents(start: boolean, end: boolean): Phaser.GameObjects.GameObject;

                setSleepStartEvent(value: boolean): Phaser.GameObjects.GameObject;

                setSleepEndEvent(value: boolean): Phaser.GameObjects.GameObject;

                setStatic(value: boolean): Phaser.GameObjects.GameObject;

                isStatic(): boolean;

            }

            namespace PhysicsEditorParser {
                function parseBody(x: number, y: number, w: number, h: number, config: object): object;

                function parseFixture(fixtureConfig: object): object[];

                function parseVertices(vertexSets: object, options: object): object[];

            }

            class PointerConstraint {
                constructor(scene: Phaser.Scene, world: Phaser.Physics.Matter.World, options: object);

                scene: Phaser.Scene;

                world: Phaser.Physics.Matter.World;

                camera: Phaser.Cameras.Scene2D.Camera;

                pointer: Phaser.Input.Pointer;

                active: boolean;

                position: Phaser.Math.Vector2;

                constraint: object;

                onDown(pointer: Phaser.Input.Pointer): void;

                onUp(): void;

                getBodyPart(body: MatterJS.Body, position: Phaser.Math.Vector2): boolean;

                update(): void;

                destroy(): void;

            }

            class World extends Phaser.Events.EventEmitter {
                constructor(scene: Phaser.Scene, config: object);

                scene: Phaser.Scene;

                engine: MatterJS.Engine;

                localWorld: MatterJS.World;

                walls: object;

                enabled: boolean;

                correction: number;

                getDelta: Function;

                autoUpdate: boolean;

                drawDebug: boolean;

                debugGraphic: Phaser.GameObjects.Graphics;

                defaults: object;

                setEventsProxy(): void;

                setBounds(x?: number, y?: number, width?: number, height?: number, thickness?: number, left?: boolean, right?: boolean, top?: boolean, bottom?: boolean): Phaser.Physics.Matter.World;

                updateWall(add: boolean, position: string, x: number, y: number, width: number, height: number): void;

                createDebugGraphic(): Phaser.GameObjects.Graphics;

                disableGravity(): Phaser.Physics.Matter.World;

                setGravity(x?: number, y?: number, scale?: number): Phaser.Physics.Matter.World;

                create(x: number, y: number, width: number, height: number, options: object): MatterJS.Body;

                add(object: object | object[]): Phaser.Physics.Matter.World;

                remove(object: object, deep: boolean): Phaser.Physics.Matter.World;

                removeConstraint(constraint: MatterJS.Constraint, deep: boolean): Phaser.Physics.Matter.World;

                convertTilemapLayer(tilemapLayer: Phaser.Tilemaps.DynamicTilemapLayer | Phaser.Tilemaps.StaticTilemapLayer, options?: object): Phaser.Physics.Matter.World;

                convertTiles(tiles: Phaser.Tilemaps.Tile[], options?: object): Phaser.Physics.Matter.World;

                nextGroup(isNonColliding: boolean): number;

                nextCategory(): number;

                pause(): Phaser.Physics.Matter.World;

                resume(): Phaser.Physics.Matter.World;

                update(time: number, delta: number): void;

                step(delta?: number, correction?: number): void;

                update60Hz(): number;

                update30Hz(): number;

                postUpdate(): void;

                fromPath(path: string, points: any[]): any[];

                shutdown(): void;

                destroy(): void;

            }

        }

    }

    namespace Plugins {
        class BasePlugin {
            constructor(pluginManager: Phaser.Plugins.PluginManager);

            protected pluginManager: Phaser.Plugins.PluginManager;

            protected game: Phaser.Game;

            protected scene: Phaser.Scene;

            protected systems: Phaser.Scenes.Systems;

            init(): void;

            start(): void;

            stop(): void;

            boot(): void;

            destroy(): void;

        }

        type DefaultPlugins = {
            Global: any[];
            CoreScene: any[];
            DefaultScene: any[];
        };

        var Global: any[];

        var CoreScene: any[];

        var DefaultScene: any[];

        class PluginManager {
            constructor(game: Phaser.Game);

            game: Phaser.Game;

            plugins: GlobalPlugin[];

            scenePlugins: string[];

            protected boot(): void;

            protected addToScene(sys: Phaser.Scenes.Systems, globalPlugins: any[], scenePlugins: any[]): void;

            protected getDefaultScenePlugins(): string[];

            installScenePlugin(key: string, plugin: Function, mapping?: string, addToScene?: Phaser.Scene): void;

            install(key: string, plugin: Function, start?: boolean, mapping?: string): void;

            protected getIndex(key: string): integer;

            protected getEntry(key: string): GlobalPlugin;

            isActive(key: string): boolean;

            start(key: string, runAs?: string): Phaser.Plugins.BasePlugin;

            stop(key: string): Phaser.Plugins.PluginManager;

            get(key: string, autoStart?: boolean): Phaser.Plugins.BasePlugin | Function;

            getClass(key: string): Phaser.Plugins.BasePlugin;

            removeGlobalPlugin(key: string): void;

            removeScenePlugin(key: string): void;

            registerGameObject(key: string, factoryCallback?: Function, creatorCallback?: Function): void;

            registerFileType(key: string, callback: Function, addToScene?: Phaser.Scene): void;

            destroy(): void;

        }

        class ScenePlugin extends Phaser.Plugins.BasePlugin {
            constructor(scene: Phaser.Scene, pluginManager: Phaser.Plugins.PluginManager);

            protected scene: Phaser.Scene;

            protected systems: Phaser.Scenes.Systems;

            boot(): void;

        }

    }

    enum BlendModes {
        SKIP_CHECK,
        NORMAL,
        ADD,
        MULTIPLY,
        SCREEN,
        OVERLAY,
        DARKEN,
        LIGHTEN,
        COLOR_DODGE,
        COLOR_BURN,
        HARD_LIGHT,
        SOFT_LIGHT,
        DIFFERENCE,
        EXCLUSION,
        HUE,
        SATURATION,
        COLOR,
        LUMINOSITY,
    }

    namespace Renderer {
        namespace Canvas {
            class CanvasRenderer {
                constructor(game: Phaser.Game);

                game: Phaser.Game;

                type: integer;

                drawCount: number;

                width: number;

                height: number;

                config: RendererConfig;

                scaleMode: integer;

                gameCanvas: HTMLCanvasElement;

                gameContext: CanvasRenderingContext2D;

                currentContext: CanvasRenderingContext2D;

                drawImage: Function;

                blitImage: Function;

                blendModes: any[];

                currentAlpha: number;

                currentBlendMode: number;

                currentScaleMode: number;

                snapshotCallback: SnapshotCallback;

                snapshotType: string;

                snapshotEncoder: number;

                init(): void;

                resize(width: integer, height: integer): void;

                onContextLost(callback: Function): void;

                onContextRestored(callback: Function): void;

                resetTransform(): void;

                setBlendMode(blendMode: number): number;

                setAlpha(alpha: number): number;

                preRender(): void;

                render(scene: Phaser.Scene, children: Phaser.GameObjects.DisplayList, interpolationPercentage: number, camera: Phaser.Cameras.Scene2D.Camera): void;

                postRender(): void;

                snapshot(callback: SnapshotCallback, type: string, encoderOptions: number): void;

                destroy(): void;

            }

            function BlitImage(dx: number, dy: number, frame: Phaser.Textures.Frame): void;

            function DrawImage(src: Phaser.GameObjects.GameObject, camera: Phaser.Cameras.Scene2D.Camera, parentMatrix: Phaser.GameObjects.Components.TransformMatrix): void;

            function GetBlendModes(): any[];

        }

        namespace Snapshot {
            function Canvas(canvas: HTMLCanvasElement, type?: string, encoderOptions?: number): HTMLImageElement;

            function WebGL(sourceCanvas: HTMLCanvasElement, type?: string, encoderOptions?: number): HTMLImageElement;

        }

        namespace WebGL {
            namespace Pipelines {
                class BitmapMaskPipeline extends Phaser.Renderer.WebGL.WebGLPipeline {
                    constructor(config: object);

                    vertexViewF32: Float32Array;

                    maxQuads: number;

                    resolutionDirty: boolean;

                    onBind(): Phaser.Renderer.WebGL.Pipelines.BitmapMaskPipeline;

                    resize(width: number, height: number, resolution: number): Phaser.Renderer.WebGL.Pipelines.BitmapMaskPipeline;

                    beginMask(mask: Phaser.GameObjects.GameObject, maskedObject: Phaser.GameObjects.GameObject, camera: Phaser.Cameras.Scene2D.Camera): void;

                    endMask(mask: Phaser.GameObjects.GameObject): void;

                }

                class FlatTintPipeline extends Phaser.Renderer.WebGL.WebGLPipeline {
                    constructor(config: object);

                    vertexViewF32: Float32Array;

                    vertexViewU32: Uint32Array;

                    tempTriangle: any[];

                    polygonCache: any[];

                    onBind(): Phaser.Renderer.WebGL.Pipelines.FlatTintPipeline;

                    resize(width: number, height: number, resolution: number): Phaser.Renderer.WebGL.Pipelines.FlatTintPipeline;

                    batchFillRect(srcX: number, srcY: number, srcScaleX: number, srcScaleY: number, srcRotation: number, x: number, y: number, width: number, height: number, fillColor: integer, fillAlpha: number, a1: number, b1: number, c1: number, d1: number, e1: number, f1: number, currentMatrix: Float32Array): void;

                    batchFillTriangle(srcX: number, srcY: number, srcScaleX: number, srcScaleY: number, srcRotation: number, x0: number, y0: number, x1: number, y1: number, x2: number, y2: number, fillColor: integer, fillAlpha: number, a1: number, b1: number, c1: number, d1: number, e1: number, f1: number, currentMatrix: Float32Array): void;

                    batchStrokeTriangle(srcX: number, srcY: number, srcScaleX: number, srcScaleY: number, srcRotation: number, x0: number, y0: number, x1: number, y1: number, x2: number, y2: number, lineWidth: number, lineColor: integer, lineAlpha: number, a: number, b: number, c: number, d: number, e: number, f: number, currentMatrix: Float32Array): void;

                    batchFillPath(srcX: number, srcY: number, srcScaleX: number, srcScaleY: number, srcRotation: number, path: number, fillColor: integer, fillAlpha: number, a1: number, b1: number, c1: number, d1: number, e1: number, f1: number, currentMatrix: Float32Array): void;

                    batchStrokePath(srcX: number, srcY: number, srcScaleX: number, srcScaleY: number, srcRotation: number, path: any[], lineWidth: number, lineColor: integer, lineAlpha: number, a: number, b: number, c: number, d: number, e: number, f: number, isLastPath: boolean, currentMatrix: Float32Array): void;

                    batchLine(srcX: number, srcY: number, srcScaleX: number, srcScaleY: number, srcRotation: number, ax: number, ay: number, bx: number, by: number, aLineWidth: number, bLineWidth: number, aLineColor: integer, bLineColor: integer, lineAlpha: number, a1: number, b1: number, c1: number, d1: number, e1: number, f1: number, currentMatrix: Float32Array): void;

                    batchGraphics(graphics: Phaser.GameObjects.Graphics, camera: Phaser.Cameras.Scene2D.Camera, parentTransformMatrix: Phaser.GameObjects.Components.TransformMatrix): void;

                    drawStaticTilemapLayer(tilemap: Phaser.Tilemaps.StaticTilemapLayer, camera: Phaser.Cameras.Scene2D.Camera): void;

                    drawEmitterManager(emitterManager: Phaser.GameObjects.Particles.ParticleEmitterManager, camera: Phaser.Cameras.Scene2D.Camera): void;

                    drawBlitter(blitter: Phaser.GameObjects.Blitter, camera: Phaser.Cameras.Scene2D.Camera): void;

                    batchSprite(sprite: Phaser.GameObjects.Sprite, camera: Phaser.Cameras.Scene2D.Camera): void;

                    batchMesh(mesh: Phaser.GameObjects.Mesh, camera: Phaser.Cameras.Scene2D.Camera): void;

                    batchBitmapText(bitmapText: Phaser.GameObjects.BitmapText, camera: Phaser.Cameras.Scene2D.Camera): void;

                    batchDynamicBitmapText(bitmapText: Phaser.GameObjects.DynamicBitmapText, camera: Phaser.Cameras.Scene2D.Camera): void;

                    batchText(text: Phaser.GameObjects.Text, camera: Phaser.Cameras.Scene2D.Camera): void;

                    batchDynamicTilemapLayer(tilemapLayer: Phaser.Tilemaps.DynamicTilemapLayer, camera: Phaser.Cameras.Scene2D.Camera): void;

                    batchTileSprite(tileSprite: Phaser.GameObjects.TileSprite, camera: Phaser.Cameras.Scene2D.Camera): void;

                }

                class ForwardDiffuseLightPipeline extends Phaser.Renderer.WebGL.Pipelines.TextureTintPipeline {
                    constructor(config: object);

                    onRender(scene: Phaser.Scene, camera: Phaser.Cameras.Scene2D.Camera): Phaser.Renderer.WebGL.Pipelines.ForwardDiffuseLightPipeline;

                    drawEmitterManager(emitterManager: Phaser.GameObjects.Particles.ParticleEmitterManager, camera: Phaser.Cameras.Scene2D.Camera, parentTransformMatrix: Phaser.GameObjects.Components.TransformMatrix): void;

                    drawBlitter(blitter: Phaser.GameObjects.Blitter, camera: Phaser.Cameras.Scene2D.Camera, parentTransformMatrix: Phaser.GameObjects.Components.TransformMatrix): void;

                    batchSprite(sprite: Phaser.GameObjects.Sprite, camera: Phaser.Cameras.Scene2D.Camera, parentTransformMatrix: Phaser.GameObjects.Components.TransformMatrix): void;

                    batchMesh(mesh: Phaser.GameObjects.Mesh, camera: Phaser.Cameras.Scene2D.Camera, parentTransformMatrix: Phaser.GameObjects.Components.TransformMatrix): void;

                    batchBitmapText(bitmapText: Phaser.GameObjects.BitmapText, camera: Phaser.Cameras.Scene2D.Camera, parentTransformMatrix: Phaser.GameObjects.Components.TransformMatrix): void;

                    batchDynamicBitmapText(bitmapText: Phaser.GameObjects.DynamicBitmapText, camera: Phaser.Cameras.Scene2D.Camera, parentTransformMatrix: Phaser.GameObjects.Components.TransformMatrix): void;

                    batchText(text: Phaser.GameObjects.Text, camera: Phaser.Cameras.Scene2D.Camera, parentTransformMatrix: Phaser.GameObjects.Components.TransformMatrix): void;

                    batchDynamicTilemapLayer(tilemapLayer: Phaser.Tilemaps.DynamicTilemapLayer, camera: Phaser.Cameras.Scene2D.Camera, parentTransformMatrix: Phaser.GameObjects.Components.TransformMatrix): void;

                    batchTileSprite(tileSprite: Phaser.GameObjects.TileSprite, camera: Phaser.Cameras.Scene2D.Camera, parentTransformMatrix: Phaser.GameObjects.Components.TransformMatrix): void;

                }

                class TextureTintPipeline extends Phaser.Renderer.WebGL.WebGLPipeline {
                    constructor(config: object);

                    vertexViewF32: Float32Array;

                    vertexViewU32: Uint32Array;

                    maxQuads: integer;

                    batches: any[];

                    setTexture2D(texture: WebGLTexture, textureUnit: integer): Phaser.Renderer.WebGL.Pipelines.TextureTintPipeline;

                    pushBatch(): void;

                    flush(): Phaser.Renderer.WebGL.Pipelines.TextureTintPipeline;

                    onBind(): Phaser.Renderer.WebGL.Pipelines.TextureTintPipeline;

                    resize(width: number, height: number, resolution: number): Phaser.Renderer.WebGL.Pipelines.TextureTintPipeline;

                    drawStaticTilemapLayer(tilemap: Phaser.Tilemaps.StaticTilemapLayer, camera: Phaser.Cameras.Scene2D.Camera, parentTransformMatrix: Phaser.GameObjects.Components.TransformMatrix): void;

                    drawEmitterManager(emitterManager: Phaser.GameObjects.Particles.ParticleEmitterManager, camera: Phaser.Cameras.Scene2D.Camera, parentTransformMatrix: Phaser.GameObjects.Components.TransformMatrix): void;

                    drawBlitter(blitter: Phaser.GameObjects.Blitter, camera: Phaser.Cameras.Scene2D.Camera, parentTransformMatrix: Phaser.GameObjects.Components.TransformMatrix): void;

                    batchSprite(sprite: Phaser.GameObjects.Sprite, camera: Phaser.Cameras.Scene2D.Camera, parentTransformMatrix: Phaser.GameObjects.Components.TransformMatrix): void;

                    batchMesh(mesh: Phaser.GameObjects.Mesh, camera: Phaser.Cameras.Scene2D.Camera, parentTransformMatrix: Phaser.GameObjects.Components.TransformMatrix): void;

                    batchBitmapText(bitmapText: Phaser.GameObjects.BitmapText, camera: Phaser.Cameras.Scene2D.Camera, parentTransformMatrix: Phaser.GameObjects.Components.TransformMatrix): void;

                    batchDynamicBitmapText(bitmapText: Phaser.GameObjects.DynamicBitmapText, camera: Phaser.Cameras.Scene2D.Camera, parentTransformMatrix: Phaser.GameObjects.Components.TransformMatrix): void;

                    batchText(text: Phaser.GameObjects.Text, camera: Phaser.Cameras.Scene2D.Camera, parentTransformMatrix: Phaser.GameObjects.Components.TransformMatrix): void;

                    batchDynamicTilemapLayer(tilemapLayer: Phaser.Tilemaps.DynamicTilemapLayer, camera: Phaser.Cameras.Scene2D.Camera, parentTransformMatrix: Phaser.GameObjects.Components.TransformMatrix): void;

                    batchTileSprite(tileSprite: Phaser.GameObjects.TileSprite, camera: Phaser.Cameras.Scene2D.Camera, parentTransformMatrix: Phaser.GameObjects.Components.TransformMatrix): void;

                    batchTexture(gameObject: Phaser.GameObjects.GameObject, texture: WebGLTexture, textureWidth: integer, textureHeight: integer, srcX: number, srcY: number, srcWidth: number, srcHeight: number, scaleX: number, scaleY: number, rotation: number, flipX: boolean, flipY: boolean, scrollFactorX: number, scrollFactorY: number, displayOriginX: number, displayOriginY: number, frameX: number, frameY: number, frameWidth: number, frameHeight: number, tintTL: integer, tintTR: integer, tintBL: integer, tintBR: integer, uOffset: number, vOffset: number, camera: Phaser.Cameras.Scene2D.Camera, parentTransformMatrix: Phaser.GameObjects.Components.TransformMatrix): void;

                    drawTexture(texture: WebGLTexture, srcX: number, srcY: number, tint: number, alpha: number, frameX: number, frameY: number, frameWidth: number, frameHeight: number, transformMatrix: Phaser.GameObjects.Components.TransformMatrix, parentTransformMatrix: Phaser.GameObjects.Components.TransformMatrix): Phaser.Renderer.WebGL.Pipelines.TextureTintPipeline;

                    batchGraphics(graphics: Phaser.GameObjects.Graphics, camera: Phaser.Cameras.Scene2D.Camera): void;

                }

            }

            namespace Utils {
                function getTintFromFloats(r: number, g: number, b: number, a: number): number;

                function getTintAppendFloatAlpha(rgb: number, a: number): number;

                function getTintAppendFloatAlphaAndSwap(rgb: number, a: number): number;

                function getFloatsFromUintRGB(rgb: number): any[];

                function getComponentCount(attributes: any[], glContext: WebGLRenderingContext): number;

            }

            class WebGLPipeline {
                constructor(config: object);

                name: string;

                game: Phaser.Game;

                view: HTMLCanvasElement;

                resolution: number;

                width: number;

                height: number;

                gl: WebGLRenderingContext;

                vertexCount: number;

                vertexCapacity: integer;

                renderer: Phaser.Renderer.WebGL.WebGLRenderer;

                vertexData: ArrayBuffer;

                vertexBuffer: WebGLBuffer;

                program: WebGLProgram;

                attributes: object;

                vertexSize: integer;

                topology: integer;

                bytes: Uint8Array;

                vertexComponentCount: integer;

                flushLocked: boolean;

                active: boolean;

                addAttribute(name: string, size: integer, type: integer, normalized: boolean, offset: integer): Phaser.Renderer.WebGL.WebGLPipeline;

                shouldFlush(): boolean;

                resize(width: number, height: number, resolution: number): Phaser.Renderer.WebGL.WebGLPipeline;

                bind(): Phaser.Renderer.WebGL.WebGLPipeline;

                onBind(): Phaser.Renderer.WebGL.WebGLPipeline;

                onPreRender(): Phaser.Renderer.WebGL.WebGLPipeline;

                onRender(scene: Phaser.Scene, camera: Phaser.Cameras.Scene2D.Camera): Phaser.Renderer.WebGL.WebGLPipeline;

                onPostRender(): Phaser.Renderer.WebGL.WebGLPipeline;

                flush(): Phaser.Renderer.WebGL.WebGLPipeline;

                destroy(): Phaser.Renderer.WebGL.WebGLPipeline;

                setFloat1(name: string, x: number): Phaser.Renderer.WebGL.WebGLPipeline;

                setFloat2(name: string, x: number, y: number): Phaser.Renderer.WebGL.WebGLPipeline;

                setFloat3(name: string, x: number, y: number, z: number): Phaser.Renderer.WebGL.WebGLPipeline;

                setFloat4(name: string, x: number, y: number, z: number, w: number): Phaser.Renderer.WebGL.WebGLPipeline;

                setInt1(name: string, x: integer): Phaser.Renderer.WebGL.WebGLPipeline;

                setInt2(name: string, x: integer, y: integer): Phaser.Renderer.WebGL.WebGLPipeline;

                setInt3(name: string, x: integer, y: integer, z: integer): Phaser.Renderer.WebGL.WebGLPipeline;

                setInt4(name: string, x: integer, y: integer, z: integer, w: integer): Phaser.Renderer.WebGL.WebGLPipeline;

                setMatrix2(name: string, transpose: boolean, matrix: Float32Array): Phaser.Renderer.WebGL.WebGLPipeline;

                setMatrix3(name: string, transpose: boolean, matrix: Float32Array): Phaser.Renderer.WebGL.WebGLPipeline;

                setMatrix4(name: string, transpose: boolean, matrix: Float32Array): Phaser.Renderer.WebGL.WebGLPipeline;

            }

            class WebGLRenderer {
                constructor(game: Phaser.Game);

                config: RendererConfig;

                game: Phaser.Game;

                type: integer;

                width: number;

                height: number;

                canvas: HTMLCanvasElement;

                lostContextCallbacks: WebGLContextCallback[];

                restoredContextCallbacks: WebGLContextCallback[];

                blendModes: any[];

                nativeTextures: any[];

                contextLost: boolean;

                pipelines: object;

                snapshotState: SnapshotState;

                currentActiveTextureUnit: integer;

                currentTextures: any[];

                currentFramebuffer: WebGLFramebuffer;

                currentPipeline: Phaser.Renderer.WebGL.WebGLPipeline;

                currentProgram: WebGLProgram;

                currentVertexBuffer: WebGLBuffer;

                currentIndexBuffer: WebGLBuffer;

                currentBlendMode: integer;

                currentScissorEnabled: boolean;

                currentScissor: Uint32Array;

                currentScissorIdx: number;

                scissorStack: Uint32Array;

                gl: WebGLRenderingContext;

                supportedExtensions: object;

                extensions: object;

                glFormats: any[];

                compression: any[];

                init(config: object): Phaser.Renderer.WebGL.WebGLRenderer;

                resize(width: number, height: number): Phaser.Renderer.WebGL.WebGLRenderer;

                onContextRestored(callback: WebGLContextCallback, target: object): Phaser.Renderer.WebGL.WebGLRenderer;

                onContextLost(callback: WebGLContextCallback, target: object): Phaser.Renderer.WebGL.WebGLRenderer;

                hasExtension(extensionName: string): boolean;

                getExtension(extensionName: string): object;

                flush(): void;

                hasPipeline(pipelineName: string): boolean;

                getPipeline(pipelineName: string): Phaser.Renderer.WebGL.WebGLPipeline;

                removePipeline(pipelineName: string): Phaser.Renderer.WebGL.WebGLRenderer;

                addPipeline(pipelineName: string, pipelineInstance: Phaser.Renderer.WebGL.WebGLPipeline): Phaser.Renderer.WebGL.WebGLPipeline;

                setScissor(x: integer, y: integer, w: integer, h: integer): Phaser.Renderer.WebGL.WebGLRenderer;

                pushScissor(x: integer, y: integer, w: integer, h: integer): Phaser.Renderer.WebGL.WebGLRenderer;

                popScissor(): Phaser.Renderer.WebGL.WebGLRenderer;

                setPipeline(pipelineInstance: Phaser.Renderer.WebGL.WebGLPipeline): Phaser.Renderer.WebGL.WebGLPipeline;

                setBlendMode(blendModeId: integer): Phaser.Renderer.WebGL.WebGLRenderer;

                addBlendMode(func: Function, equation: Function): integer;

                updateBlendMode(index: integer, func: Function, equation: Function): Phaser.Renderer.WebGL.WebGLRenderer;

                removeBlendMode(index: integer): Phaser.Renderer.WebGL.WebGLRenderer;

                setTexture2D(texture: WebGLTexture, textureUnit: integer): Phaser.Renderer.WebGL.WebGLRenderer;

                setFramebuffer(framebuffer: WebGLFramebuffer): Phaser.Renderer.WebGL.WebGLRenderer;

                setProgram(program: WebGLProgram): Phaser.Renderer.WebGL.WebGLRenderer;

                setVertexBuffer(vertexBuffer: WebGLBuffer): Phaser.Renderer.WebGL.WebGLRenderer;

                setIndexBuffer(indexBuffer: WebGLBuffer): Phaser.Renderer.WebGL.WebGLRenderer;

                createTextureFromSource(source: object, width: integer, height: integer, scaleMode: integer): WebGLTexture;

                createTexture2D(mipLevel: integer, minFilter: integer, magFilter: integer, wrapT: integer, wrapS: integer, format: integer, pixels: object, width: integer, height: integer, pma: boolean): WebGLTexture;

                createFramebuffer(width: integer, height: integer, renderTexture: WebGLTexture, addDepthStencilBuffer: boolean): WebGLFramebuffer;

                createProgram(vertexShader: string, fragmentShader: string): WebGLProgram;

                createVertexBuffer(initialDataOrSize: ArrayBuffer, bufferUsage: integer): WebGLBuffer;

                createIndexBuffer(initialDataOrSize: ArrayBuffer, bufferUsage: integer): WebGLBuffer;

                deleteTexture(texture: WebGLTexture): Phaser.Renderer.WebGL.WebGLRenderer;

                deleteFramebuffer(framebuffer: WebGLFramebuffer): Phaser.Renderer.WebGL.WebGLRenderer;

                deleteProgram(program: WebGLProgram): Phaser.Renderer.WebGL.WebGLRenderer;

                deleteBuffer(vertexBuffer: WebGLBuffer): Phaser.Renderer.WebGL.WebGLRenderer;

                preRenderCamera(camera: Phaser.Cameras.Scene2D.Camera): void;

                postRenderCamera(camera: Phaser.Cameras.Scene2D.Camera): void;

                preRender(): void;

                render(scene: Phaser.Scene, children: Phaser.GameObjects.GameObject, interpolationPercentage: number, camera: Phaser.Cameras.Scene2D.Camera): void;

                postRender(): void;

                snapshot(callback: SnapshotCallback, type: string, encoderOptions: number): Phaser.Renderer.WebGL.WebGLRenderer;

                canvasToTexture(srcCanvas: HTMLCanvasElement, dstTexture?: WebGLTexture): WebGLTexture;

                setTextureFilter(texture: integer, filter: integer): Phaser.Renderer.WebGL.WebGLRenderer;

                setFloat1(program: WebGLProgram, name: string, x: number): Phaser.Renderer.WebGL.WebGLRenderer;

                setFloat2(program: WebGLProgram, name: string, x: number, y: number): Phaser.Renderer.WebGL.WebGLRenderer;

                setFloat3(program: WebGLProgram, name: string, x: number, y: number, z: number): Phaser.Renderer.WebGL.WebGLRenderer;

                setFloat4(program: WebGLProgram, name: string, x: number, y: number, z: number, w: number): Phaser.Renderer.WebGL.WebGLRenderer;

                setInt1(program: WebGLProgram, name: string, x: integer): Phaser.Renderer.WebGL.WebGLRenderer;

                setInt2(program: WebGLProgram, name: string, x: integer, y: integer): Phaser.Renderer.WebGL.WebGLRenderer;

                setInt3(program: WebGLProgram, name: string, x: integer, y: integer, z: integer): Phaser.Renderer.WebGL.WebGLRenderer;

                setInt4(program: WebGLProgram, name: string, x: integer, y: integer, z: integer, w: integer): Phaser.Renderer.WebGL.WebGLRenderer;

                setMatrix2(program: WebGLProgram, name: string, transpose: boolean, matrix: Float32Array): Phaser.Renderer.WebGL.WebGLRenderer;

                setMatrix3(program: WebGLProgram, name: string, transpose: boolean, matrix: Float32Array): Phaser.Renderer.WebGL.WebGLRenderer;

                setMatrix4(program: WebGLProgram, name: string, transpose: boolean, matrix: Float32Array): Phaser.Renderer.WebGL.WebGLRenderer;

                getMaxTextures(): integer;

                getMaxTextureSize(): integer;

                destroy(): void;

            }

        }

    }

    enum ScaleModes {
        DEFAULT,
        LINEAR,
        NEAREST,
    }

    namespace Scenes {
        var PENDING: integer;

        var INIT: integer;

        var START: integer;

        var LOADING: integer;

        var CREATING: integer;

        var RUNNING: integer;

        var PAUSED: integer;

        var SLEEPING: integer;

        var SHUTDOWN: integer;

        var DESTROYED: integer;

        function GetPhysicsPlugins(sys: Phaser.Scenes.Systems): any[];

        function GetScenePlugins(sys: Phaser.Scenes.Systems): any[];

        class SceneManager {
            constructor(game: Phaser.Game, sceneConfig: object);

            game: Phaser.Game;

            keys: object;

            scenes: any[];

            readonly isProcessing: boolean;

            readonly isBooted: boolean;

            processQueue(): void;

            add(key: string, sceneConfig: Phaser.Scene | Phaser.Scenes.Settings.Config | Function, autoStart?: boolean, data?: object): Phaser.Scene;

            remove(scene: string | Phaser.Scene): Phaser.Scenes.SceneManager;

            update(time: number, delta: number): void;

            resize(width: number, height: number): void;

            render(renderer: Phaser.Renderer.Canvas.CanvasRenderer | Phaser.Renderer.WebGL.WebGLRenderer): void;

            getScene(key: string | Phaser.Scene): Phaser.Scene;

            isActive(key: string): boolean;

            isVisible(key: string): boolean;

            isSleeping(key: string): boolean;

            pause(key: string): Phaser.Scenes.SceneManager;

            resume(key: string): Phaser.Scenes.SceneManager;

            sleep(key: string): Phaser.Scenes.SceneManager;

            wake(key: string): Phaser.Scenes.SceneManager;

            run(key: string, data?: object): Phaser.Scenes.SceneManager;

            start(key: string, data?: object): Phaser.Scenes.SceneManager;

            stop(key: string): Phaser.Scenes.SceneManager;

            switch(from: string, to: string): Phaser.Scenes.SceneManager;

            getAt(index: integer): Phaser.Scene | undefined;

            getIndex(key: string | Phaser.Scene): integer;

            bringToTop(key: string | Phaser.Scene): Phaser.Scenes.SceneManager;

            sendToBack(key: string | Phaser.Scene): Phaser.Scenes.SceneManager;

            moveDown(key: string | Phaser.Scene): Phaser.Scenes.SceneManager;

            moveUp(key: string | Phaser.Scene): Phaser.Scenes.SceneManager;

            moveAbove(keyA: string | Phaser.Scene, keyB: string | Phaser.Scene): Phaser.Scenes.SceneManager;

            moveBelow(keyA: string | Phaser.Scene, keyB: string | Phaser.Scene): Phaser.Scenes.SceneManager;

            swapPosition(keyA: string | Phaser.Scene, keyB: string | Phaser.Scene): Phaser.Scenes.SceneManager;

            dump(): void;

            destroy(): void;

        }

        class ScenePlugin {
            constructor(scene: Phaser.Scene);

            scene: Phaser.Scene;

            systems: Phaser.Scenes.Systems;

            settings: Phaser.Scenes.Settings.Object;

            key: string;

            manager: Phaser.Scenes.SceneManager;

            transitionProgress: number;

            start(key: string, data?: object): Phaser.Scenes.ScenePlugin;

            restart(data?: object): Phaser.Scenes.ScenePlugin;

            transition(config: Phaser.Scenes.ScenePlugin.SceneTransitionConfig): boolean;

            add(key: string, sceneConfig: Phaser.Scene | Phaser.Scenes.Settings.Config | Function, autoStart: boolean): Phaser.Scenes.ScenePlugin;

            launch(key: string, data?: object): Phaser.Scenes.ScenePlugin;

            run(key: string, data?: object): Phaser.Scenes.ScenePlugin;

            pause(key: string): Phaser.Scenes.ScenePlugin;

            resume(key: string): Phaser.Scenes.ScenePlugin;

            sleep(key: string): Phaser.Scenes.ScenePlugin;

            wake(key: string): Phaser.Scenes.ScenePlugin;

            switch(key: string): Phaser.Scenes.ScenePlugin;

            stop(key: string): Phaser.Scenes.ScenePlugin;

            setActive(value: boolean, key?: string): Phaser.Scenes.ScenePlugin;

            setVisible(value: boolean, key?: string): Phaser.Scenes.ScenePlugin;

            isSleeping(key: string): boolean;

            isActive(key: string): boolean;

            isVisible(key: string): boolean;

            swapPosition(keyA: string, keyB?: string): Phaser.Scenes.ScenePlugin;

            moveAbove(keyA: string, keyB?: string): Phaser.Scenes.ScenePlugin;

            moveBelow(keyA: string, keyB?: string): Phaser.Scenes.ScenePlugin;

            remove(key: string | Phaser.Scene): Phaser.Scenes.SceneManager;

            moveUp(key: string): Phaser.Scenes.ScenePlugin;

            moveDown(key: string): Phaser.Scenes.ScenePlugin;

            bringToTop(key: string): Phaser.Scenes.ScenePlugin;

            sendToBack(key: string): Phaser.Scenes.ScenePlugin;

            get(key: string): Phaser.Scene;

            getIndex(key?: string | Phaser.Scene): integer;

        }

        namespace Settings {
            type Config = {
                key?: string;
                active?: boolean;
                visible?: boolean;
                pack?: false | Phaser.Loader.FileTypes.PackFileConfig;
                cameras?: InputJSONCameraObject | InputJSONCameraObject[];
                map?: {[key: string]:  string};
                mapAdd?: {[key: string]:  string};
                physics?: object;
                loader?: object;
                plugins?: false | any;
            };

            type Object = {
                status: number;
                key: string;
                active: boolean;
                visible: boolean;
                isBooted: boolean;
                isTransition: boolean;
                transitionFrom: Phaser.Scene;
                transitionDuration: integer;
                transitionAllowInput: boolean;
                data: object;
                pack: false | Phaser.Loader.FileTypes.PackFileConfig;
                cameras: InputJSONCameraObject | InputJSONCameraObject[];
                map: {[key: string]:  string};
                physics: object;
                loader: object;
                plugins: false | any;
            };

            function create(config: string | Phaser.Scenes.Settings.Config): Phaser.Scenes.Settings.Object;

        }

        class Systems {
            constructor(scene: Phaser.Scene, config: string | Phaser.Scenes.Settings.Config);

            scene: Phaser.Scene;

            game: Phaser.Game;

            config: string | Phaser.Scenes.Settings.Config;

            settings: Phaser.Scenes.Settings.Object;

            canvas: HTMLCanvasElement;

            context: CanvasRenderingContext2D;

            anims: Phaser.Animations.AnimationManager;

            cache: Phaser.Cache.CacheManager;

            plugins: Phaser.Plugins.PluginManager;

            registry: Phaser.Data.DataManager;

            sound: Phaser.Sound.BaseSoundManager;

            textures: Phaser.Textures.TextureManager;

            add: Phaser.GameObjects.GameObjectFactory;

            cameras: Phaser.Cameras.Scene2D.CameraManager;

            displayList: Phaser.GameObjects.DisplayList;

            events: Phaser.Events.EventEmitter;

            make: Phaser.GameObjects.GameObjectCreator;

            scenePlugin: Phaser.Scenes.ScenePlugin;

            updateList: Phaser.GameObjects.UpdateList;

            protected init(game: Phaser.Game): void;

            step(time: number, delta: number): void;

            render(renderer: Phaser.Renderer.Canvas.CanvasRenderer | Phaser.Renderer.WebGL.WebGLRenderer): void;

            queueDepthSort(): void;

            depthSort(): void;

            pause(): Phaser.Scenes.Systems;

            resume(): Phaser.Scenes.Systems;

            sleep(): Phaser.Scenes.Systems;

            wake(): Phaser.Scenes.Systems;

            isSleeping(): boolean;

            isActive(): boolean;

            isTransitioning(): boolean;

            isTransitionOut(): boolean;

            isTransitionIn(): boolean;

            isVisible(): boolean;

            setVisible(value: boolean): Phaser.Scenes.Systems;

            setActive(value: boolean): Phaser.Scenes.Systems;

            start(data: object): void;

            resize(width: number, height: number): void;

            shutdown(): void;

        }

    }

    class Scene {
        constructor(config: string | Phaser.Scenes.Settings.Config);

        sys: Phaser.Scenes.Systems;

        game: Phaser.Game;

        anims: Phaser.Animations.AnimationManager;

        cache: Phaser.Cache.CacheManager;

        registry: Phaser.Data.DataManager;

        sound: Phaser.Sound.BaseSoundManager;

        textures: Phaser.Textures.TextureManager;

        events: Phaser.Events.EventEmitter;

        cameras: Phaser.Cameras.Scene2D.CameraManager;

        cameras3d: Phaser.Cameras.Sprite3D.CameraManager;

        add: Phaser.GameObjects.GameObjectFactory;

        make: Phaser.GameObjects.GameObjectCreator;

        scene: Phaser.Scenes.ScenePlugin;

        children: Phaser.GameObjects.DisplayList;

        lights: Phaser.GameObjects.LightsManager;

        data: Phaser.Data.DataManager;

        input: Phaser.Input.InputPlugin;

        load: Phaser.Loader.LoaderPlugin;

        time: Phaser.Time.Clock;

        tweens: Phaser.Tweens.TweenManager;

        physics: Phaser.Physics.Arcade.ArcadePhysics;

        impact: Phaser.Physics.Impact.ImpactPhysics;

        matter: Phaser.Physics.Matter.MatterPhysics;

        update(time: number, delta: number): void;

    }

    namespace Sound {
        class BaseSound extends Phaser.Events.EventEmitter {
            constructor(manager: Phaser.Sound.BaseSoundManager, key: string, config?: SoundConfig);

            readonly key: string;

            readonly isPlaying: boolean;

            readonly isPaused: boolean;

            readonly totalRate: number;

            readonly duration: number;

            readonly totalDuration: number;

            readonly markers: {[key: string]:  SoundMarker};

            readonly currentMarker: SoundMarker;

            addMarker(marker: SoundMarker): boolean;

            updateMarker(marker: SoundMarker): boolean;

            removeMarker(markerName: string): SoundMarker;

            play(markerName?: string, config?: SoundConfig): boolean;

            pause(): boolean;

            resume(): boolean;

            stop(): boolean;

            protected applyConfig(): void;

            protected resetConfig(): void;

            protected update(time: number, delta: number): void;

            protected calculateRate(): void;

            destroy(): void;

        }

        class BaseSoundManager extends Phaser.Events.EventEmitter {
            constructor(game: Phaser.Game);

            readonly game: Phaser.Game;

            readonly jsonCache: Phaser.Cache.BaseCache;

            mute: boolean;

            volume: number;

            pauseOnBlur: boolean;

            readonly locked: boolean;

            add(key: string, config?: SoundConfig): Phaser.Sound.BaseSound;

            addAudioSprite(key: string, config?: SoundConfig): Phaser.Sound.BaseSound.AudioSpriteSound;

            play(key: string, extra?: SoundConfig | SoundMarker): boolean;

            playAudioSprite(key: string, spriteName: string, config?: SoundConfig): boolean;

            remove(sound: Phaser.Sound.BaseSound): boolean;

            removeByKey(key: string): number;

            pauseAll(): void;

            resumeAll(): void;

            stopAll(): void;

            protected unlock(): void;

            protected onBlur(): void;

            protected onFocus(): void;

            protected update(time: number, delta: number): void;

            destroy(): void;

            setRate(value: number): Phaser.Sound.BaseSoundManager;

            rate: number;

            setDetune(value: number): Phaser.Sound.BaseSoundManager;

            detune: number;

        }

        class HTML5AudioSound extends Phaser.Sound.BaseSound {
            constructor(manager: Phaser.Sound.HTML5AudioSoundManager, key: string, config?: SoundConfig);

            play(markerName?: string, config?: SoundConfig): boolean;

            pause(): boolean;

            resume(): boolean;

            stop(): boolean;

            protected update(time: number, delta: number): void;

            destroy(): void;

            protected calculateRate(): void;

            mute: boolean;

            setMute(value: boolean): Phaser.Sound.HTML5AudioSound;

            volume: number;

            setVolume(value: number): Phaser.Sound.HTML5AudioSound;

            rate: number;

            setRate(value: number): Phaser.Sound.HTML5AudioSound;

            detune: number;

            setDetune(value: number): Phaser.Sound.HTML5AudioSound;

            seek: number;

            setSeek(value: number): Phaser.Sound.HTML5AudioSound;

            loop: boolean;

            setLoop(value: boolean): Phaser.Sound.HTML5AudioSound;

        }

        class HTML5AudioSoundManager extends Phaser.Sound.BaseSoundManager {
            constructor(game: Phaser.Game);

            override: boolean;

            audioPlayDelay: number;

            loopEndOffset: number;

            add(key: string, config?: SoundConfig): Phaser.Sound.HTML5AudioSound;

            unlock(): void;

            protected onBlur(): void;

            protected onFocus(): void;

            destroy(): void;

            protected isLocked(sound: Phaser.Sound.HTML5AudioSound, prop: string, value?: any): boolean;

            setMute(value: boolean): Phaser.Sound.HTML5AudioSoundManager;

            mute: boolean;

            setVolume(value: number): Phaser.Sound.HTML5AudioSoundManager;

            volume: number;

        }

        class NoAudioSound extends Phaser.Sound.BaseSound {
            constructor(manager: Phaser.Sound.NoAudioSoundManager, key: string, config?: SoundConfig);

        }

        class NoAudioSoundManager extends Phaser.Sound.BaseSoundManager {
            constructor(game: Phaser.Game);

        }

        function SoundManagerCreator(game: Phaser.Game): void;

        class WebAudioSound extends Phaser.Sound.BaseSound {
            constructor(manager: Phaser.Sound.WebAudioSoundManager, key: string, config?: SoundConfig);

            play(markerName?: string, config?: SoundConfig): boolean;

            pause(): boolean;

            resume(): boolean;

            stop(): boolean;

            protected applyConfig(): void;

            protected update(time: number, delta: number): void;

            destroy(): void;

            protected calculateRate(): void;

            rate: number;

            setRate(value: number): Phaser.Sound.WebAudioSound;

            detune: number;

            setDetune(value: number): Phaser.Sound.WebAudioSound;

            mute: boolean;

            setMute(value: boolean): Phaser.Sound.WebAudioSound;

            volume: number;

            setVolume(value: number): Phaser.Sound.WebAudioSound;

            seek: number;

            setSeek(value: number): Phaser.Sound.WebAudioSound;

            loop: boolean;

            setLoop(value: boolean): Phaser.Sound.WebAudioSound;

        }

        class WebAudioSoundManager extends Phaser.Sound.BaseSoundManager {
            constructor(game: Phaser.Game);

            add(key: string, config?: SoundConfig): Phaser.Sound.WebAudioSound;

            unlock(): void;

            protected onBlur(): void;

            protected onFocus(): void;

            destroy(): void;

            setMute(value: boolean): Phaser.Sound.WebAudioSoundManager;

            mute: boolean;

            setVolume(value: number): Phaser.Sound.WebAudioSoundManager;

            volume: number;

        }

    }

    namespace Structs {
        class List<T> {
            constructor(parent: any);

            parent: any;

            list: T[];

            position: integer;

            addCallback: Function;

            removeCallback: Function;

            _sortKey: string;

            add(child: T, skipCallback?: boolean): T;

            addAt(child: T, index?: integer, skipCallback?: boolean): T;

            getAt(index: integer): T;

            getIndex(child: T): integer;

            sort(property: string): T[];

            getByName(name: string): T | null;

            getRandom(startIndex?: integer, length?: integer): T | null;

            getFirst(property: string, value: T, startIndex?: number, endIndex?: number): T | null;

            getAll(property?: string, value?: T, startIndex?: integer, endIndex?: integer): T[];

            count(property: string, value: T): integer;

            swap(child1: T, child2: T): void;

            moveTo(child: T, index: integer): T;

            remove(child: T, skipCallback?: boolean): T;

            removeAt(index: integer, skipCallback?: boolean): T;

            removeBetween(startIndex?: integer, endIndex?: integer, skipCallback?: boolean): T[];

            removeAll(skipCallback?: boolean): Phaser.Structs.List<T>;

            bringToTop(child: T): T;

            sendToBack(child: T): T;

            moveUp(child: T): T;

            moveDown(child: T): T;

            reverse(): Phaser.Structs.List<T>;

            shuffle(): Phaser.Structs.List<T>;

            replace(oldChild: T, newChild: T): T;

            exists(child: T): boolean;

            setAll(property: string, value: T, startIndex?: integer, endIndex?: integer): void;

            each(callback: EachListCallback<T>, context?: any, ...args: any[]): void;

            shutdown(): void;

            destroy(): void;

            readonly length: integer;

            readonly first: integer;

            readonly last: integer;

            readonly next: integer;

            readonly previous: integer;

        }

        class Map<K, V> {
            constructor(elements: V[]);

            entries: {[key: string]:  V};

            size: number;

            set(key: K, value: V): Phaser.Structs.Map<K, V>;

            get(key: K): V;

            getArray(): V[];

            has(key: K): boolean;

            delete(key: K): Phaser.Structs.Map<K, V>;

            clear(): Phaser.Structs.Map<K, V>;

            keys(): K[];

            values(): V[];

            dump(): void;

            each(callback: EachMapCallback<V>): Phaser.Structs.Map<K, V>;

            contains(value: V): boolean;

            merge(map: Phaser.Structs.Map<K, V>, override?: boolean): Phaser.Structs.Map<K, V>;

        }

        class ProcessQueue<T> {
            add(item: T): Phaser.Structs.ProcessQueue<T>;

            remove(item: T): Phaser.Structs.ProcessQueue<T>;

            update(): T[];

            getActive(): T[];

            destroy(): void;

        }

        class RTree {
        }

        class Set<T> {
            constructor(elements?: T[]);

            entries: T[];

            set(value: T): Phaser.Structs.Set<T>;

            get(property: string, value: T): T;

            getArray(): T[];

            delete(value: T): Phaser.Structs.Set<T>;

            dump(): void;

            each(callback: EachSetCallback<T>, callbackScope: any): Phaser.Structs.Set<T>;

            iterate(callback: EachSetCallback<T>, callbackScope: any): Phaser.Structs.Set<T>;

            iterateLocal(callbackKey: string, ...args: any[]): Phaser.Structs.Set<T>;

            clear(): Phaser.Structs.Set<T>;

            contains(value: T): boolean;

            union(set: Phaser.Structs.Set<T>): Phaser.Structs.Set<T>;

            intersect(set: Phaser.Structs.Set<T>): Phaser.Structs.Set<T>;

            difference(set: Phaser.Structs.Set<T>): Phaser.Structs.Set<T>;

            size: integer;

        }

    }

    namespace Textures {
        class CanvasTexture extends Phaser.Textures.Texture {
            constructor(manager: Phaser.Textures.TextureManager, key: string, source: HTMLCanvasElement, width: integer, height: integer);

            refresh(): Phaser.Textures.CanvasTexture;

            getCanvas(): HTMLCanvasElement;

            getContext(): CanvasRenderingContext2D;

            clear(): Phaser.Textures.CanvasTexture;

            setSize(width: integer, height?: integer): Phaser.Textures.CanvasTexture;

        }

        enum FilterMode {
            LINEAR,
            NEAREST,
        }

        class Frame {
            constructor(texture: Phaser.Textures.Texture, name: integer | string, sourceIndex: integer, x: number, y: number, width: number, height: number);

            texture: Phaser.Textures.Texture;

            name: string;

            source: Phaser.Textures.TextureSource;

            sourceIndex: integer;

            cutX: integer;

            cutY: integer;

            cutWidth: integer;

            cutHeight: integer;

            x: integer;

            y: integer;

            width: integer;

            height: integer;

            halfWidth: integer;

            halfHeight: integer;

            centerX: integer;

            centerY: integer;

            pivotX: number;

            pivotY: number;

            customPivot: boolean;

            rotated: boolean;

            autoRound: integer;

            customData: object;

            setSize(width: integer, height: integer, x?: integer, y?: integer): Phaser.Textures.Frame;

            setTrim(actualWidth: number, actualHeight: number, destX: number, destY: number, destWidth: number, destHeight: number): Phaser.Textures.Frame;

            updateUVs(): Phaser.Textures.Frame;

            updateUVsInverted(): Phaser.Textures.Frame;

            clone(): Phaser.Textures.Frame;

            destroy(): void;

            readonly realWidth: number;

            readonly realHeight: number;

            readonly uvs: object;

            readonly radius: number;

            readonly trimmed: boolean;

            readonly canvasData: object;

        }

        const LINEAR: any;

        const NEAREST: any;

        namespace Parsers {
        }

        class Texture {
            constructor(manager: Phaser.Textures.TextureManager, key: string, source: HTMLImageElement[] | HTMLCanvasElement[], width?: number, height?: number);

            manager: Phaser.Textures.TextureManager;

            key: string;

            source: Phaser.Textures.TextureSource[];

            dataSource: any[];

            frames: object;

            customData: object;

            firstFrame: string;

            frameTotal: integer;

            add(name: integer | string, sourceIndex: integer, x: number, y: number, width: number, height: number): Phaser.Textures.Frame;

            has(name: string): boolean;

            get(name?: string | integer): Phaser.Textures.Frame;

            getTextureSourceIndex(source: Phaser.Textures.TextureSource): integer;

            getFramesFromTextureSource(sourceIndex: integer): Phaser.Textures.Frame[];

            getFrameNames(includeBase?: boolean): string[];

            getSourceImage(name?: string | integer): HTMLImageElement | HTMLCanvasElement;

            getDataSourceImage(name?: string | integer): HTMLImageElement | HTMLCanvasElement;

            setDataSource(data: HTMLImageElement | HTMLCanvasElement): void;

            setFilter(filterMode: Phaser.Textures.FilterMode): void;

            destroy(): void;

        }

        class TextureManager extends Phaser.Events.EventEmitter {
            constructor(game: Phaser.Game);

            readonly canvas: HTMLCanvasElement;

            readonly width: integer;

            readonly height: integer;

            game: Phaser.Game;

            name: string;

            list: object;

            boot(): void;

            updatePending(): void;

            checkKey(key: string): boolean;

            remove(key: string | Phaser.Textures.Texture): Phaser.Textures.TextureManager;

            addBase64(key: string, data: any): void;

            addImage(key: string, source: HTMLImageElement, dataSource?: HTMLImageElement): Phaser.Textures.Texture;

            generate(key: string, config: object): Phaser.Textures.Texture;

            createCanvas(key: string, width?: integer, height?: integer): Phaser.Textures.CanvasTexture;

            addCanvas(key: string, source: HTMLCanvasElement): Phaser.Textures.CanvasTexture;

            addAtlas(key: string, source: HTMLImageElement, data: object, dataSource?: HTMLImageElement): Phaser.Textures.Texture;

            addAtlasJSONArray(key: string, source: HTMLImageElement | HTMLImageElement[], data: object | object[], dataSource?: HTMLImageElement): Phaser.Textures.Texture;

            addAtlasJSONHash(key: string, source: HTMLImageElement, data: object, dataSource?: HTMLImageElement): Phaser.Textures.Texture;

            addAtlasXML(key: string, source: HTMLImageElement, data: object, dataSource?: HTMLImageElement): Phaser.Textures.Texture;

            addUnityAtlas(key: string, source: HTMLImageElement, data: object, dataSource?: HTMLImageElement): Phaser.Textures.Texture;

            addSpriteSheet(key: string, source: HTMLImageElement, config: SpriteSheetConfig): Phaser.Textures.Texture;

            addSpriteSheetFromAtlas(key: string, config: SpriteSheetFromAtlasConfig): Phaser.Textures.Texture;

            create(key: string, source: HTMLImageElement, width: integer, height: integer): Phaser.Textures.Texture;

            exists(key: string): boolean;

            get(key: string): Phaser.Textures.Texture;

            cloneFrame(key: string, frame: string | integer): Phaser.Textures.Frame;

            getFrame(key: string, frame: string | integer): Phaser.Textures.Frame;

            getTextureKeys(): string[];

            getPixel(x: integer, y: integer, key: string, frame: string | integer): Phaser.Display.Color;

            getPixelAlpha(x: integer, y: integer, key: string, frame: string | integer): integer;

            setTexture(gameObject: Phaser.GameObjects.GameObject, key: string, frame: string | integer): Phaser.GameObjects.GameObject;

            each(callback: EachTextureCallback, scope: object, ...args: any[]): void;

            destroy(): void;

        }

        class TextureSource {
            constructor(texture: Phaser.Textures.Texture, source: HTMLImageElement | HTMLCanvasElement, width?: integer, height?: integer);

            renderer: Phaser.Renderer.Canvas.CanvasRenderer | Phaser.Renderer.WebGL.WebGLRenderer;

            texture: string;

            image: HTMLImageElement | HTMLCanvasElement;

            compressionAlgorithm: integer;

            resolution: number;

            width: integer;

            height: integer;

            scaleMode: number;

            isCanvas: boolean;

            isPowerOf2: boolean;

            glTexture: WebGLTexture;

            init(game: Phaser.Game): void;

            setFilter(filterMode: Phaser.Textures.FilterMode): void;

            update(): void;

            destroy(): void;

        }

    }

    namespace Tilemaps {
        namespace Components {
        }

        class DynamicTilemapLayer extends Phaser.GameObjects.GameObject implements Phaser.GameObjects.Components.Alpha, Phaser.GameObjects.Components.BlendMode, Phaser.GameObjects.Components.ComputedSize, Phaser.GameObjects.Components.Depth, Phaser.GameObjects.Components.Flip, Phaser.GameObjects.Components.GetBounds, Phaser.GameObjects.Components.Origin, Phaser.GameObjects.Components.Pipeline, Phaser.GameObjects.Components.ScaleMode, Phaser.GameObjects.Components.ScrollFactor, Phaser.GameObjects.Components.Transform, Phaser.GameObjects.Components.Visible {
            constructor(scene: Phaser.Scene, tilemap: Phaser.Tilemaps.Tilemap, layerIndex: integer, tileset: Phaser.Tilemaps.Tileset, x?: number, y?: number);

            readonly isTilemap: boolean;

            tilemap: Phaser.Tilemaps.Tilemap;

            layerIndex: integer;

            layer: Phaser.Tilemaps.LayerData;

            tileset: Phaser.Tilemaps.Tileset;

            culledTiles: any[];

            calculateFacesAt(tileX: integer, tileY: integer): Phaser.Tilemaps.DynamicTilemapLayer;

            calculateFacesWithin(tileX?: integer, tileY?: integer, width?: integer, height?: integer): Phaser.Tilemaps.DynamicTilemapLayer;

            createFromTiles(indexes: integer | any[], replacements: integer | any[], spriteConfig: object, scene?: Phaser.Scene, camera?: Phaser.Cameras.Scene2D.Camera): Phaser.GameObjects.Sprite[];

            cull(camera?: Phaser.Cameras.Scene2D.Camera): Phaser.Tilemaps.Tile[];

            copy(srcTileX: integer, srcTileY: integer, width: integer, height: integer, destTileX: integer, destTileY: integer, recalculateFaces?: boolean): Phaser.Tilemaps.DynamicTilemapLayer;

            destroy(): void;

            fill(index: integer, tileX?: integer, tileY?: integer, width?: integer, height?: integer, recalculateFaces?: boolean): Phaser.Tilemaps.DynamicTilemapLayer;

            filterTiles(callback: Function, context?: object, tileX?: integer, tileY?: integer, width?: integer, height?: integer, filteringOptions?: object): Phaser.Tilemaps.Tile[];

            findByIndex(index: integer, skip?: integer, reverse?: boolean): Phaser.Tilemaps.Tile;

            findTile(callback: Function, context?: object, tileX?: integer, tileY?: integer, width?: integer, height?: integer, filteringOptions?: object): Phaser.Tilemaps.Tile;

            forEachTile(callback: Function, context?: object, tileX?: integer, tileY?: integer, width?: integer, height?: integer, filteringOptions?: object): Phaser.Tilemaps.DynamicTilemapLayer;

            getTileAt(tileX: integer, tileY: integer, nonNull?: boolean): Phaser.Tilemaps.Tile;

            getTileAtWorldXY(worldX: number, worldY: number, nonNull?: boolean, camera?: Phaser.Cameras.Scene2D.Camera): Phaser.Tilemaps.Tile;

            getTilesWithin(tileX?: integer, tileY?: integer, width?: integer, height?: integer, filteringOptions?: object): Phaser.Tilemaps.Tile[];

            getTilesWithinShape(shape: Phaser.Geom.Circle | Phaser.Geom.Line | Phaser.Geom.Rectangle | Phaser.Geom.Triangle, filteringOptions?: object, camera?: Phaser.Cameras.Scene2D.Camera): Phaser.Tilemaps.Tile[];

            getTilesWithinWorldXY(worldX: number, worldY: number, width: number, height: number, filteringOptions?: object, camera?: Phaser.Cameras.Scene2D.Camera): Phaser.Tilemaps.Tile[];

            hasTileAt(tileX: integer, tileY: integer): boolean;

            hasTileAtWorldXY(worldX: number, worldY: number, camera?: Phaser.Cameras.Scene2D.Camera): boolean;

            putTileAt(tile: integer | Phaser.Tilemaps.Tile, tileX: integer, tileY: integer, recalculateFaces?: boolean): Phaser.Tilemaps.Tile;

            putTileAtWorldXY(tile: integer | Phaser.Tilemaps.Tile, worldX: integer, worldY: integer, recalculateFaces?: boolean, camera?: Phaser.Cameras.Scene2D.Camera): Phaser.Tilemaps.Tile;

            putTilesAt(tile: integer[] | integer[][] | Phaser.Tilemaps.Tile[] | Phaser.Tilemaps.Tile[][], tileX: integer, tileY: integer, recalculateFaces?: boolean): Phaser.Tilemaps.DynamicTilemapLayer;

            randomize(tileX?: integer, tileY?: integer, width?: integer, height?: integer, indexes?: integer[]): Phaser.Tilemaps.DynamicTilemapLayer;

            removeTileAt(tile: integer | Phaser.Tilemaps.Tile, tileX: integer, tileY: integer, replaceWithNull?: boolean, recalculateFaces?: boolean): Phaser.Tilemaps.Tile;

            removeTileAtWorldXY(tile: integer | Phaser.Tilemaps.Tile, worldX: number, worldY: number, replaceWithNull?: boolean, recalculateFaces?: boolean, camera?: Phaser.Cameras.Scene2D.Camera): Phaser.Tilemaps.Tile;

            renderDebug(graphics: Phaser.GameObjects.Graphics, styleConfig: object): Phaser.Tilemaps.DynamicTilemapLayer;

            replaceByIndex(findIndex: integer, newIndex: integer, tileX?: integer, tileY?: integer, width?: integer, height?: integer): Phaser.Tilemaps.DynamicTilemapLayer;

            setCollision(indexes: integer | any[], collides?: boolean, recalculateFaces?: boolean): Phaser.Tilemaps.DynamicTilemapLayer;

            setCollisionBetween(start: integer, stop: integer, collides?: boolean, recalculateFaces?: boolean): Phaser.Tilemaps.DynamicTilemapLayer;

            setCollisionByProperty(properties: object, collides?: boolean, recalculateFaces?: boolean): Phaser.Tilemaps.DynamicTilemapLayer;

            setCollisionByExclusion(indexes: integer[], collides?: boolean, recalculateFaces?: boolean): Phaser.Tilemaps.DynamicTilemapLayer;

            setCollisionFromCollisionGroup(collides?: boolean, recalculateFaces?: boolean): Phaser.Tilemaps.DynamicTilemapLayer;

            setTileIndexCallback(indexes: integer | any[], callback: Function, callbackContext: object): Phaser.Tilemaps.DynamicTilemapLayer;

            setTileLocationCallback(tileX: integer, tileY: integer, width: integer, height: integer, callback: Function, callbackContext?: object): Phaser.Tilemaps.DynamicTilemapLayer;

            shuffle(tileX?: integer, tileY?: integer, width?: integer, height?: integer): Phaser.Tilemaps.DynamicTilemapLayer;

            swapByIndex(tileA: integer, tileB: integer, tileX?: integer, tileY?: integer, width?: integer, height?: integer): Phaser.Tilemaps.DynamicTilemapLayer;

            tileToWorldX(tileX: integer, camera?: Phaser.Cameras.Scene2D.Camera): number;

            tileToWorldY(tileY: integer, camera?: Phaser.Cameras.Scene2D.Camera): number;

            tileToWorldXY(tileX: integer, tileY: integer, point?: Phaser.Math.Vector2, camera?: Phaser.Cameras.Scene2D.Camera): Phaser.Math.Vector2;

            weightedRandomize(tileX?: integer, tileY?: integer, width?: integer, height?: integer, weightedIndexes?: object[]): Phaser.Tilemaps.DynamicTilemapLayer;

            worldToTileX(worldX: number, snapToFloor?: boolean, camera?: Phaser.Cameras.Scene2D.Camera): number;

            worldToTileY(worldY: number, snapToFloor?: boolean, camera?: Phaser.Cameras.Scene2D.Camera): number;

            worldToTileXY(worldX: number, worldY: number, snapToFloor?: boolean, point?: Phaser.Math.Vector2, camera?: Phaser.Cameras.Scene2D.Camera): Phaser.Math.Vector2;

            clearAlpha(): this;

            setAlpha(topLeft?: number, topRight?: number, bottomLeft?: number, bottomRight?: number): this;

            alpha: number;

            alphaTopLeft: number;

            alphaTopRight: number;

            alphaBottomLeft: number;

            alphaBottomRight: number;

            blendMode: Phaser.BlendModes | string;

            setBlendMode(value: string | Phaser.BlendModes): this;

            width: number;

            height: number;

            displayWidth: number;

            displayHeight: number;

            setSize(width: number, height: number): this;

            setDisplaySize(width: number, height: number): this;

            depth: number;

            setDepth(value: integer): this;

            flipX: boolean;

            flipY: boolean;

            toggleFlipX(): this;

            toggleFlipY(): this;

            setFlipX(value: boolean): this;

            setFlipY(value: boolean): this;

            setFlip(x: boolean, y: boolean): this;

            resetFlip(): this;

            getCenter<O extends Phaser.Math.Vector2>(output?: O): O;

            getTopLeft<O extends Phaser.Math.Vector2>(output?: O, includeParent?: boolean): O;

            getTopRight<O extends Phaser.Math.Vector2>(output?: O, includeParent?: boolean): O;

            getBottomLeft<O extends Phaser.Math.Vector2>(output?: O, includeParent?: boolean): O;

            getBottomRight<O extends Phaser.Math.Vector2>(output?: O, includeParent?: boolean): O;

            getBounds<O extends Phaser.Geom.Rectangle>(output?: O): O;

            originX: number;

            originY: number;

            displayOriginX: number;

            displayOriginY: number;

            setOrigin(x?: number, y?: number): this;

            setOriginFromFrame(): this;

            setDisplayOrigin(x?: number, y?: number): this;

            updateDisplayOrigin(): this;

            defaultPipeline: Phaser.Renderer.WebGL.WebGLPipeline;

            pipeline: Phaser.Renderer.WebGL.WebGLPipeline;

            initPipeline(pipelineName: string): boolean;

            setPipeline(pipelineName: string): boolean;

            resetPipeline(): boolean;

            getPipelineName(): string;

            scaleMode: Phaser.ScaleModes;

            setScaleMode(value: Phaser.ScaleModes): this;

            scrollFactorX: number;

            scrollFactorY: number;

            setScrollFactor(x: number, y?: number): this;

            x: number;

            y: number;

            z: number;

            w: number;

            scaleX: number;

            scaleY: number;

            angle: integer;

            rotation: number;

            setPosition(x?: number, y?: number, z?: number, w?: number): this;

            setRandomPosition(x?: number, y?: number, width?: number, height?: number): this;

            setRotation(radians?: number): this;

            setAngle(degrees?: number): this;

            setScale(x: number, y?: number): this;

            setX(value?: number): this;

            setY(value?: number): this;

            setZ(value?: number): this;

            setW(value?: number): this;

            getLocalTransformMatrix(tempMatrix?: Phaser.GameObjects.Components.TransformMatrix): Phaser.GameObjects.Components.TransformMatrix;

            getWorldTransformMatrix(tempMatrix?: Phaser.GameObjects.Components.TransformMatrix): Phaser.GameObjects.Components.TransformMatrix;

            visible: boolean;

            setVisible(value: boolean): this;

        }

        namespace Formats {
            var CSV: number;

            var TILED_JSON: number;

            var ARRAY_2D: number;

            var WELTMEISTER: number;

        }

        class ImageCollection {
            constructor(name: string, firstgid: integer, width?: integer, height?: integer, margin?: integer, spacing?: integer, properties?: object);

            name: string;

            firstgid: integer;

            readonly imageWidth: integer;

            readonly imageHeight: integer;

            readonly imageMarge: integer;

            readonly imageSpacing: integer;

            properties: object;

            readonly images: any[];

            readonly total: integer;

            containsImageIndex(imageIndex: integer): boolean;

            addImage(gid: integer, image: string): Phaser.Tilemaps.ImageCollection;

        }

        class LayerData {
            constructor(config?: object);

            name: string;

            x: number;

            y: number;

            width: number;

            height: number;

            tileWidth: number;

            tileHeight: number;

            baseTileWidth: number;

            baseTileHeight: number;

            widthInPixels: number;

            heightInPixels: number;

            alpha: number;

            visible: boolean;

            properties: object;

            indexes: any[];

            collideIndexes: any[];

            callbacks: any[];

            bodies: any[];

            data: any[];

            tilemapLayer: Phaser.Tilemaps.DynamicTilemapLayer | Phaser.Tilemaps.StaticTilemapLayer;

        }

        class MapData {
            constructor(config?: object);

            name: string;

            width: number;

            height: number;

            tileWidth: number;

            tileHeight: number;

            widthInPixels: number;

            heightInPixels: number;

            format: integer;

            orientation: string;

            version: string;

            properties: object;

            layers: any[];

            images: any[];

            objects: object;

            collision: object;

            tilesets: any[];

            imageCollections: any[];

            tiles: any[];

        }

        class ObjectLayer {
            constructor(config?: object);

            name: string;

            opacity: number;

            properties: object;

            propertyTypes: object;

            type: string;

            visible: boolean;

            objects: Phaser.GameObjects.GameObject[];

        }

        namespace Parsers {
            namespace Impact {
                function ParseTileLayers(json: object, insertNull: boolean): any[];

                function ParseTilesets(json: object): any[];

                function ParseWeltmeister(name: string, json: object, insertNull: boolean): object;

            }

            function Parse(name: string, mapFormat: integer, data: integer[][] | string | object, tileWidth: integer, tileHeight: integer, insertNull: boolean): Phaser.Tilemaps.MapData;

            function Parse2DArray(name: string, data: integer[][], tileWidth: integer, tileHeight: integer, insertNull: boolean): Phaser.Tilemaps.MapData;

            function ParseCSV(name: string, data: string, tileWidth: integer, tileHeight: integer, insertNull: boolean): Phaser.Tilemaps.MapData;

            namespace Tiled {
                function AssignTileProperties(mapData: Phaser.Tilemaps.MapData): void;

                function Base64Decode(data: object): any[];

                function BuildTilesetIndex(mapData: Phaser.Tilemaps.MapData): any[];

                function ParseGID(gid: number): object;

                function ParseImageLayers(json: object): any[];

                function ParseJSONTiled(name: string, json: object, insertNull: boolean): Phaser.Tilemaps.MapData;

                function ParseObject(tiledObject: object, offsetX?: number, offsetY?: number): object;

                function ParseObjectLayers(json: object): any[];

                function ParseTileLayers(json: object, insertNull: boolean): any[];

                function ParseTilesets(json: object): object;

                function Pick(object: object, keys: any[]): object;

            }

        }

        function ParseToTilemap(scene: Phaser.Scene, key?: string, tileWidth?: integer, tileHeight?: integer, width?: integer, height?: integer, data?: integer[][], insertNull?: boolean): Phaser.Tilemaps.Tilemap;

        class StaticTilemapLayer extends Phaser.GameObjects.GameObject implements Phaser.GameObjects.Components.Alpha, Phaser.GameObjects.Components.BlendMode, Phaser.GameObjects.Components.ComputedSize, Phaser.GameObjects.Components.Depth, Phaser.GameObjects.Components.Flip, Phaser.GameObjects.Components.GetBounds, Phaser.GameObjects.Components.Origin, Phaser.GameObjects.Components.Pipeline, Phaser.GameObjects.Components.ScaleMode, Phaser.GameObjects.Components.Transform, Phaser.GameObjects.Components.Visible, Phaser.GameObjects.Components.ScrollFactor {
            constructor(scene: Phaser.Scene, tilemap: Phaser.Tilemaps.Tilemap, layerIndex: integer, tileset: Phaser.Tilemaps.Tileset, x?: number, y?: number);

            readonly isTilemap: boolean;

            tilemap: Phaser.Tilemaps.Tilemap;

            layerIndex: integer;

            layer: Phaser.Tilemaps.LayerData;

            tileset: Phaser.Tilemaps.Tileset;

            culledTiles: any[];

            upload(camera: Phaser.Cameras.Scene2D.Camera): Phaser.Tilemaps.StaticTilemapLayer;

            calculateFacesAt(tileX: integer, tileY: integer): Phaser.Tilemaps.StaticTilemapLayer;

            calculateFacesWithin(tileX?: integer, tileY?: integer, width?: integer, height?: integer): Phaser.Tilemaps.StaticTilemapLayer;

            createFromTiles(indexes: integer | any[], replacements: integer | any[], spriteConfig: object, scene?: Phaser.Scene, camera?: Phaser.Cameras.Scene2D.Camera): Phaser.GameObjects.Sprite[];

            cull(camera?: Phaser.Cameras.Scene2D.Camera): Phaser.Tilemaps.Tile[];

            destroy(): void;

            findByIndex(index: integer, skip?: integer, reverse?: boolean): Phaser.Tilemaps.Tile;

            findTile(callback: Function, context?: object, tileX?: integer, tileY?: integer, width?: integer, height?: integer, filteringOptions?: object): Phaser.Tilemaps.Tile;

            filterTiles(callback: Function, context?: object, tileX?: integer, tileY?: integer, width?: integer, height?: integer, filteringOptions?: object): Phaser.Tilemaps.Tile[];

            forEachTile(callback: Function, context?: object, tileX?: integer, tileY?: integer, width?: integer, height?: integer, filteringOptions?: object): Phaser.Tilemaps.StaticTilemapLayer;

            getTileAt(tileX: integer, tileY: integer, nonNull?: boolean): Phaser.Tilemaps.Tile;

            getTileAtWorldXY(worldX: number, worldY: number, nonNull?: boolean, camera?: Phaser.Cameras.Scene2D.Camera): Phaser.Tilemaps.Tile;

            getTilesWithin(tileX?: integer, tileY?: integer, width?: integer, height?: integer, filteringOptions?: object): Phaser.Tilemaps.Tile[];

            getTilesWithinWorldXY(worldX: number, worldY: number, width: number, height: number, filteringOptions?: object, camera?: Phaser.Cameras.Scene2D.Camera): Phaser.Tilemaps.Tile[];

            getTilesWithinShape(shape: Phaser.Geom.Circle | Phaser.Geom.Line | Phaser.Geom.Rectangle | Phaser.Geom.Triangle, filteringOptions?: object, camera?: Phaser.Cameras.Scene2D.Camera): Phaser.Tilemaps.Tile[];

            hasTileAt(tileX: integer, tileY: integer): boolean;

            hasTileAtWorldXY(worldX: number, worldY: number, camera?: Phaser.Cameras.Scene2D.Camera): boolean;

            renderDebug(graphics: Phaser.GameObjects.Graphics, styleConfig: object): Phaser.Tilemaps.StaticTilemapLayer;

            setCollision(indexes: integer | any[], collides?: boolean, recalculateFaces?: boolean): Phaser.Tilemaps.StaticTilemapLayer;

            setCollisionBetween(start: integer, stop: integer, collides?: boolean, recalculateFaces?: boolean): Phaser.Tilemaps.StaticTilemapLayer;

            setCollisionByProperty(properties: object, collides?: boolean, recalculateFaces?: boolean): Phaser.Tilemaps.StaticTilemapLayer;

            setCollisionByExclusion(indexes: integer[], collides?: boolean, recalculateFaces?: boolean): Phaser.Tilemaps.StaticTilemapLayer;

            setTileIndexCallback(indexes: integer | any[], callback: Function, callbackContext: object): Phaser.Tilemaps.StaticTilemapLayer;

            setCollisionFromCollisionGroup(collides?: boolean, recalculateFaces?: boolean): Phaser.Tilemaps.StaticTilemapLayer;

            setTileLocationCallback(tileX: integer, tileY: integer, width: integer, height: integer, callback: Function, callbackContext?: object): Phaser.Tilemaps.StaticTilemapLayer;

            tileToWorldX(tileX: integer, camera?: Phaser.Cameras.Scene2D.Camera): number;

            tileToWorldY(tileY: integer, camera?: Phaser.Cameras.Scene2D.Camera): number;

            tileToWorldXY(tileX: integer, tileY: integer, point?: Phaser.Math.Vector2, camera?: Phaser.Cameras.Scene2D.Camera): Phaser.Math.Vector2;

            worldToTileX(worldX: number, snapToFloor?: boolean, camera?: Phaser.Cameras.Scene2D.Camera): number;

            worldToTileY(worldY: number, snapToFloor?: boolean, camera?: Phaser.Cameras.Scene2D.Camera): number;

            worldToTileXY(worldX: number, worldY: number, snapToFloor?: boolean, point?: Phaser.Math.Vector2, camera?: Phaser.Cameras.Scene2D.Camera): Phaser.Math.Vector2;

            clearAlpha(): this;

            setAlpha(topLeft?: number, topRight?: number, bottomLeft?: number, bottomRight?: number): this;

            alpha: number;

            alphaTopLeft: number;

            alphaTopRight: number;

            alphaBottomLeft: number;

            alphaBottomRight: number;

            blendMode: Phaser.BlendModes | string;

            setBlendMode(value: string | Phaser.BlendModes): this;

            width: number;

            height: number;

            displayWidth: number;

            displayHeight: number;

            setSize(width: number, height: number): this;

            setDisplaySize(width: number, height: number): this;

            depth: number;

            setDepth(value: integer): this;

            flipX: boolean;

            flipY: boolean;

            toggleFlipX(): this;

            toggleFlipY(): this;

            setFlipX(value: boolean): this;

            setFlipY(value: boolean): this;

            setFlip(x: boolean, y: boolean): this;

            resetFlip(): this;

            getCenter<O extends Phaser.Math.Vector2>(output?: O): O;

            getTopLeft<O extends Phaser.Math.Vector2>(output?: O, includeParent?: boolean): O;

            getTopRight<O extends Phaser.Math.Vector2>(output?: O, includeParent?: boolean): O;

            getBottomLeft<O extends Phaser.Math.Vector2>(output?: O, includeParent?: boolean): O;

            getBottomRight<O extends Phaser.Math.Vector2>(output?: O, includeParent?: boolean): O;

            getBounds<O extends Phaser.Geom.Rectangle>(output?: O): O;

            originX: number;

            originY: number;

            displayOriginX: number;

            displayOriginY: number;

            setOrigin(x?: number, y?: number): this;

            setOriginFromFrame(): this;

            setDisplayOrigin(x?: number, y?: number): this;

            updateDisplayOrigin(): this;

            defaultPipeline: Phaser.Renderer.WebGL.WebGLPipeline;

            pipeline: Phaser.Renderer.WebGL.WebGLPipeline;

            initPipeline(pipelineName: string): boolean;

            setPipeline(pipelineName: string): boolean;

            resetPipeline(): boolean;

            getPipelineName(): string;

            scaleMode: Phaser.ScaleModes;

            setScaleMode(value: Phaser.ScaleModes): this;

            x: number;

            y: number;

            z: number;

            w: number;

            scaleX: number;

            scaleY: number;

            angle: integer;

            rotation: number;

            setPosition(x?: number, y?: number, z?: number, w?: number): this;

            setRandomPosition(x?: number, y?: number, width?: number, height?: number): this;

            setRotation(radians?: number): this;

            setAngle(degrees?: number): this;

            setScale(x: number, y?: number): this;

            setX(value?: number): this;

            setY(value?: number): this;

            setZ(value?: number): this;

            setW(value?: number): this;

            getLocalTransformMatrix(tempMatrix?: Phaser.GameObjects.Components.TransformMatrix): Phaser.GameObjects.Components.TransformMatrix;

            getWorldTransformMatrix(tempMatrix?: Phaser.GameObjects.Components.TransformMatrix): Phaser.GameObjects.Components.TransformMatrix;

            visible: boolean;

            setVisible(value: boolean): this;

            scrollFactorX: number;

            scrollFactorY: number;

            setScrollFactor(x: number, y?: number): this;

        }

        class Tile implements Phaser.GameObjects.Components.Alpha, Phaser.GameObjects.Components.Flip, Phaser.GameObjects.Components.Visible {
            constructor(layer: Phaser.Tilemaps.LayerData, index: integer, x: integer, y: integer, width: integer, height: integer, baseWidth: integer, baseHeight: integer);

            layer: Phaser.Tilemaps.LayerData;

            index: integer;

            x: integer;

            y: integer;

            width: integer;

            height: integer;

            baseWidth: integer;

            baseHeight: integer;

            pixelX: number;

            pixelY: number;

            properties: object;

            rotation: number;

            collideLeft: boolean;

            collideRight: boolean;

            collideUp: boolean;

            collideDown: boolean;

            faceLeft: boolean;

            faceRight: boolean;

            faceTop: boolean;

            faceBottom: boolean;

            collisionCallback: Function;

            collisionCallbackContext: object;

            tint: number;

            physics: object;

            containsPoint(x: number, y: number): boolean;

            copy(tile: Phaser.Tilemaps.Tile): Phaser.Tilemaps.Tile;

            getCollisionGroup(): object;

            getTileData(): object;

            getLeft(camera?: Phaser.Cameras.Scene2D.Camera): number;

            getRight(camera?: Phaser.Cameras.Scene2D.Camera): number;

            getTop(camera?: Phaser.Cameras.Scene2D.Camera): number;

            getBottom(camera?: Phaser.Cameras.Scene2D.Camera): number;

            getBounds(camera?: Phaser.Cameras.Scene2D.Camera, output?: object): Phaser.Geom.Rectangle | object;

            getCenterX(camera?: Phaser.Cameras.Scene2D.Camera): number;

            getCenterY(camera?: Phaser.Cameras.Scene2D.Camera): number;

            destroy(): void;

            intersects(x: number, y: number, right: number, bottom: number): boolean;

            isInteresting(collides: boolean, faces: boolean): boolean;

            resetCollision(recalculateFaces?: boolean): Phaser.Tilemaps.Tile;

            resetFaces(): Phaser.Tilemaps.Tile;

            setCollision(left: boolean, right?: boolean, up?: boolean, down?: boolean, recalculateFaces?: boolean): Phaser.Tilemaps.Tile;

            setCollisionCallback(callback: Function, context: object): Phaser.Tilemaps.Tile;

            setSize(tileWidth: integer, tileHeight: integer, baseWidth: integer, baseHeight: integer): Phaser.Tilemaps.Tile;

            updatePixelXY(): Phaser.Tilemaps.Tile;

            readonly canCollide: boolean;

            readonly collides: boolean;

            readonly hasInterestingFace: boolean;

            readonly tileset: Phaser.Tilemaps.Tileset;

            readonly tilemapLayer: Phaser.Tilemaps.StaticTilemapLayer | Phaser.Tilemaps.DynamicTilemapLayer;

            readonly tilemap: Phaser.Tilemaps.Tilemap;

            clearAlpha(): this;

            setAlpha(topLeft?: number, topRight?: number, bottomLeft?: number, bottomRight?: number): this;

            alpha: number;

            alphaTopLeft: number;

            alphaTopRight: number;

            alphaBottomLeft: number;

            alphaBottomRight: number;

            flipX: boolean;

            flipY: boolean;

            toggleFlipX(): this;

            toggleFlipY(): this;

            setFlipX(value: boolean): this;

            setFlipY(value: boolean): this;

            setFlip(x: boolean, y: boolean): this;

            resetFlip(): this;

            visible: boolean;

            setVisible(value: boolean): this;

        }

        class Tilemap {
            constructor(scene: Phaser.Scene, mapData: Phaser.Tilemaps.MapData);

            scene: Phaser.Scene;

            tileWidth: integer;

            tileHeight: integer;

            width: number;

            height: number;

            orientation: string;

            format: number;

            version: number;

            properties: object;

            widthInPixels: number;

            heightInPixels: number;

            imageCollections: Phaser.Tilemaps.ImageCollection[];

            images: any[];

            layers: Phaser.Tilemaps.LayerData[];

            tilesets: Phaser.Tilemaps.Tileset[];

            objects: Phaser.Tilemaps.ObjectLayer[];

            currentLayerIndex: integer;

            addTilesetImage(tilesetName: string, key?: string, tileWidth?: integer, tileHeight?: integer, tileMargin?: integer, tileSpacing?: integer, gid?: integer): Phaser.Tilemaps.Tileset;

            convertLayerToStatic(layer?: string | integer | Phaser.Tilemaps.DynamicTilemapLayer): Phaser.Tilemaps.StaticTilemapLayer;

            copy(): Phaser.Tilemaps.Tilemap;

            createBlankDynamicLayer(name: string, tileset: Phaser.Tilemaps.Tileset, width: integer, height: integer, tileWidth: integer, tileHeight: integer): Phaser.Tilemaps.DynamicTilemapLayer;

            createDynamicLayer(layerID: integer | string, tileset: Phaser.Tilemaps.Tileset, x: number, y: number): Phaser.Tilemaps.DynamicTilemapLayer;

            createFromObjects(name: string, id: integer | string, spriteConfig: object, scene?: Phaser.Scene): Phaser.GameObjects.Sprite[];

            createFromTiles(indexes: integer | any[], replacements: integer | any[], spriteConfig: object, scene?: Phaser.Scene, camera?: Phaser.Cameras.Scene2D.Camera, layer?: Phaser.Tilemaps.LayerData): Phaser.GameObjects.Sprite[];

            createStaticLayer(layerID: integer | string, tileset: Phaser.Tilemaps.Tileset, x: number, y: number): Phaser.Tilemaps.StaticTilemapLayer;

            destroy(): void;

            fill(index: integer, tileX?: integer, tileY?: integer, width?: integer, height?: integer, recalculateFaces?: boolean, layer?: Phaser.Tilemaps.LayerData): Phaser.Tilemaps.Tilemap;

            filterObjects(objectLayer: Phaser.Tilemaps.ObjectLayer | string, callback: TilemapFilterCallback, context?: object): Phaser.GameObjects.GameObject[];

            filterTiles(callback: Function, context?: object, tileX?: integer, tileY?: integer, width?: integer, height?: integer, filteringOptions?: object, layer?: Phaser.Tilemaps.LayerData): Phaser.Tilemaps.Tile[];

            findByIndex(index: integer, skip?: integer, reverse?: boolean, layer?: Phaser.Tilemaps.LayerData): Phaser.Tilemaps.Tile;

            findObject(objectLayer: Phaser.Tilemaps.ObjectLayer | string, callback: TilemapFindCallback, context?: object): Phaser.GameObjects.GameObject;

            findTile(callback: FindTileCallback, context?: object, tileX?: integer, tileY?: integer, width?: integer, height?: integer, filteringOptions?: object, layer?: Phaser.Tilemaps.LayerData): Phaser.Tilemaps.Tile;

            forEachTile(callback: EachTileCallback, context?: object, tileX?: integer, tileY?: integer, width?: integer, height?: integer, filteringOptions?: object, layer?: LayerData): Phaser.Tilemaps.Tilemap;

            getImageIndex(name: string): integer;

            getIndex(location: any[], name: string): number;

            getLayer(layer?: string | integer | Phaser.Tilemaps.DynamicTilemapLayer | Phaser.Tilemaps.StaticTilemapLayer): Phaser.Tilemaps.LayerData;

            getObjectLayer(name?: string): Phaser.Tilemaps.ObjectLayer;

            getLayerIndex(layer?: string | integer | Phaser.Tilemaps.DynamicTilemapLayer | Phaser.Tilemaps.StaticTilemapLayer): integer;

            getLayerIndexByName(name: string): integer;

            getTileAt(tileX: integer, tileY: integer, nonNull?: boolean, layer?: Phaser.Tilemaps.LayerData): Phaser.Tilemaps.Tile;

            getTileAtWorldXY(worldX: number, worldY: number, nonNull?: boolean, camera?: Phaser.Cameras.Scene2D.Camera, layer?: Phaser.Tilemaps.LayerData): Phaser.Tilemaps.Tile;

            getTilesWithin(tileX?: integer, tileY?: integer, width?: integer, height?: integer, filteringOptions?: object, layer?: Phaser.Tilemaps.LayerData): Phaser.Tilemaps.Tile[];

            getTilesWithinShape(shape: Phaser.Geom.Circle | Phaser.Geom.Line | Phaser.Geom.Rectangle | Phaser.Geom.Triangle, filteringOptions?: object, camera?: Phaser.Cameras.Scene2D.Camera, layer?: Phaser.Tilemaps.LayerData): Phaser.Tilemaps.Tile[];

            getTilesWithinWorldXY(worldX: number, worldY: number, width: number, height: number, filteringOptions?: object, camera?: Phaser.Cameras.Scene2D.Camera, layer?: Phaser.Tilemaps.LayerData): Phaser.Tilemaps.Tile[];

            getTilesetIndex(name: string): integer;

            hasTileAt(tileX: integer, tileY: integer, layer?: Phaser.Tilemaps.LayerData): boolean;

            hasTileAtWorldXY(worldX: number, worldY: number, camera?: Phaser.Cameras.Scene2D.Camera, layer?: Phaser.Tilemaps.LayerData): boolean;

            layer: Phaser.Tilemaps.LayerData;

            putTileAt(tile: integer | Phaser.Tilemaps.Tile, tileX: integer, tileY: integer, recalculateFaces?: boolean, layer?: Phaser.Tilemaps.LayerData): Phaser.Tilemaps.Tile;

            putTileAtWorldXY(tile: integer | Phaser.Tilemaps.Tile, worldX: integer, worldY: integer, recalculateFaces?: boolean, camera?: Phaser.Cameras.Scene2D.Camera, layer?: Phaser.Tilemaps.LayerData): Phaser.Tilemaps.Tile;

            putTilesAt(tile: integer[] | integer[][] | Phaser.Tilemaps.Tile[] | Phaser.Tilemaps.Tile[][], tileX: integer, tileY: integer, recalculateFaces?: boolean, layer?: Phaser.Tilemaps.LayerData): Phaser.Tilemaps.Tilemap;

            randomize(tileX?: integer, tileY?: integer, width?: integer, height?: integer, indexes?: integer[], layer?: Phaser.Tilemaps.LayerData): Phaser.Tilemaps.Tilemap;

            calculateFacesAt(tileX: integer, tileY: integer, layer?: Phaser.Tilemaps.LayerData): Phaser.Tilemaps.Tilemap;

            calculateFacesWithin(tileX?: integer, tileY?: integer, width?: integer, height?: integer, layer?: Phaser.Tilemaps.LayerData): Phaser.Tilemaps.Tilemap;

            removeAllLayers(): Phaser.Tilemaps.Tilemap;

            removeTileAt(tile: integer | Phaser.Tilemaps.Tile, tileX: integer, tileY: integer, replaceWithNull?: boolean, recalculateFaces?: boolean, layer?: Phaser.Tilemaps.LayerData): Phaser.Tilemaps.Tile;

            removeTileAtWorldXY(tile: integer | Phaser.Tilemaps.Tile, worldX: number, worldY: number, replaceWithNull?: boolean, recalculateFaces?: boolean, camera?: Phaser.Cameras.Scene2D.Camera, layer?: Phaser.Tilemaps.LayerData): Phaser.Tilemaps.Tile;

            renderDebug(graphics: Phaser.GameObjects.Graphics, styleConfig: object, layer?: Phaser.Tilemaps.LayerData): Phaser.Tilemaps.Tilemap;

            replaceByIndex(findIndex: integer, newIndex: integer, tileX?: integer, tileY?: integer, width?: integer, height?: integer, layer?: Phaser.Tilemaps.LayerData): Phaser.Tilemaps.Tilemap;

            setCollision(indexes: integer | any[], collides?: boolean, recalculateFaces?: boolean, layer?: Phaser.Tilemaps.LayerData): Phaser.Tilemaps.Tilemap;

            setCollisionBetween(start: integer, stop: integer, collides?: boolean, recalculateFaces?: boolean, layer?: Phaser.Tilemaps.LayerData): Phaser.Tilemaps.Tilemap;

            setCollisionByProperty(properties: object, collides?: boolean, recalculateFaces?: boolean, layer?: Phaser.Tilemaps.LayerData): Phaser.Tilemaps.Tilemap;

            setCollisionByExclusion(indexes: integer[], collides?: boolean, recalculateFaces?: boolean, layer?: Phaser.Tilemaps.LayerData): Phaser.Tilemaps.Tilemap;

            setCollisionFromCollisionGroup(collides?: boolean, recalculateFaces?: boolean, layer?: Phaser.Tilemaps.LayerData): Phaser.Tilemaps.Tilemap;

            setTileIndexCallback(indexes: integer | any[], callback: Function, callbackContext: object, layer?: Phaser.Tilemaps.LayerData): Phaser.Tilemaps.Tilemap;

            setTileLocationCallback(tileX: integer, tileY: integer, width: integer, height: integer, callback: Function, callbackContext?: object, layer?: Phaser.Tilemaps.LayerData): Phaser.Tilemaps.Tilemap;

            setLayer(layer?: string | integer | Phaser.Tilemaps.DynamicTilemapLayer | Phaser.Tilemaps.StaticTilemapLayer): Phaser.Tilemaps.Tilemap;

            setBaseTileSize(tileWidth: integer, tileHeight: integer): Phaser.Tilemaps.Tilemap;

            setLayerTileSize(tileWidth: integer, tileHeight: integer, layer?: string | integer | Phaser.Tilemaps.DynamicTilemapLayer | Phaser.Tilemaps.StaticTilemapLayer): Phaser.Tilemaps.Tilemap;

            shuffle(tileX?: integer, tileY?: integer, width?: integer, height?: integer, layer?: Phaser.Tilemaps.LayerData): Phaser.Tilemaps.Tilemap;

            swapByIndex(tileA: integer, tileB: integer, tileX?: integer, tileY?: integer, width?: integer, height?: integer, layer?: Phaser.Tilemaps.LayerData): Phaser.Tilemaps.Tilemap;

            tileToWorldX(tileX: integer, camera?: Phaser.Cameras.Scene2D.Camera, layer?: Phaser.Tilemaps.LayerData): number;

            tileToWorldY(tileY: integer, camera?: Phaser.Cameras.Scene2D.Camera, layer?: Phaser.Tilemaps.LayerData): number;

            tileToWorldXY(tileX: integer, tileY: integer, point?: Phaser.Math.Vector2, camera?: Phaser.Cameras.Scene2D.Camera, layer?: Phaser.Tilemaps.LayerData): Phaser.Math.Vector2;

            weightedRandomize(tileX?: integer, tileY?: integer, width?: integer, height?: integer, weightedIndexes?: object[], layer?: Phaser.Tilemaps.LayerData): Phaser.Tilemaps.Tilemap;

            worldToTileX(worldX: number, snapToFloor?: boolean, camera?: Phaser.Cameras.Scene2D.Camera, layer?: Phaser.Tilemaps.LayerData): number;

            worldToTileY(worldY: number, snapToFloor?: boolean, camera?: Phaser.Cameras.Scene2D.Camera, layer?: Phaser.Tilemaps.LayerData): number;

            worldToTileXY(worldX: number, worldY: number, snapToFloor?: boolean, point?: Phaser.Math.Vector2, camera?: Phaser.Cameras.Scene2D.Camera, layer?: Phaser.Tilemaps.LayerData): Phaser.Math.Vector2;

        }

        class Tileset {
            constructor(name: string, firstgid: integer, tileWidth?: integer, tileHeight?: integer, tileMargin?: integer, tileSpacing?: integer, tileProperties?: object, tileData?: object);

            name: string;

            firstgid: integer;

            readonly tileWidth: integer;

            readonly tileHeight: integer;

            readonly tileMargin: integer;

            readonly tileSpacing: integer;

            tileProperties: object;

            tileData: object;

            readonly image: Phaser.Textures.Texture;

            readonly rows: integer;

            readonly columns: integer;

            readonly total: integer;

            readonly texCoordinates: object[];

            getTileProperties(tileIndex: integer): object | undefined;

            getTileData(tileIndex: integer): object | undefined;

            getTileCollisionGroup(tileIndex: integer): object;

            containsTileIndex(tileIndex: integer): boolean;

            getTileTextureCoordinates(tileIndex: integer): object;

            setImage(texture: Phaser.Textures.Texture): Phaser.Tilemaps.Tileset;

            setTileSize(tileWidth?: integer, tileHeight?: integer): Phaser.Tilemaps.Tileset;

            setSpacing(margin?: integer, spacing?: integer): Phaser.Tilemaps.Tileset;

            updateTileData(imageWidth: integer, imageHeight: integer): Phaser.Tilemaps.Tileset;

        }

    }

    namespace Time {
        class Clock {
            constructor(scene: Phaser.Scene);

            scene: Phaser.Scene;

            systems: Phaser.Scenes.Systems;

            now: number;

            timeScale: number;

            paused: boolean;

            addEvent(config: TimerEventConfig): Phaser.Time.TimerEvent;

            delayedCall(delay: number, callback: Function, args: any[], callbackScope: any): Phaser.Time.TimerEvent;

            clearPendingEvents(): Phaser.Time.Clock;

            removeAllEvents(): Phaser.Time.Clock;

            preUpdate(time: number, delta: number): void;

            update(time: number, delta: number): void;

        }

        class TimerEvent {
            constructor(config: TimerEventConfig);

            readonly delay: number;

            readonly repeat: number;

            repeatCount: number;

            readonly loop: boolean;

            callback: Function;

            callbackScope: object;

            args: any[];

            timeScale: number;

            startAt: number;

            elapsed: number;

            paused: boolean;

            hasDispatched: boolean;

            reset(config: TimerEventConfig): Phaser.Time.TimerEvent;

            getProgress(): number;

            getOverallProgress(): number;

            getRepeatCount(): number;

            getElapsed(): number;

            getElapsedSeconds(): number;

            remove(dispatchCallback: Function): void;

            destroy(): void;

        }

    }

    namespace Tweens {
        namespace Builders {
            function GetBoolean(source: object, key: string, defaultValue: any): any;

            function GetEaseFunction(ease: string | Function, easeParams: any[]): Function;

            function GetNewValue(source: object, key: string, defaultValue: any): Function;

            function GetProps(config: object): any[];

            function GetTargets(config: object): any[];

            function GetTweens(config: object): any[];

            function GetValueOp(key: string, propertyValue: any): Function;

            function NumberTweenBuilder(parent: Phaser.Tweens.TweenManager | Phaser.Tweens.Timeline, config: object, defaults: Phaser.Tweens.TweenConfigDefaults): Phaser.Tweens.Tween;

            function TimelineBuilder(manager: Phaser.Tweens.TweenManager, config: object): Phaser.Tweens.Timeline;

            function TweenBuilder(parent: Phaser.Tweens.TweenManager | Phaser.Tweens.Timeline, config: object, defaults: Phaser.Tweens.TweenConfigDefaults): Phaser.Tweens.Tween;

        }

        class Timeline extends Phaser.Events.EventEmitter {
            constructor(manager: Phaser.Tweens.TweenManager);

            manager: Phaser.Tweens.TweenManager;

            isTimeline: boolean;

            data: any[];

            totalData: number;

            useFrames: boolean;

            timeScale: number;

            loop: number;

            loopDelay: number;

            loopCounter: number;

            completeDelay: number;

            countdown: number;

            state: integer;

            paused: boolean;

            elapsed: number;

            totalElapsed: number;

            duration: number;

            progress: number;

            totalDuration: number;

            totalProgress: number;

            setTimeScale(value: number): Phaser.Tweens.Timeline;

            getTimeScale(): number;

            isPlaying(): boolean;

            add(config: object): Phaser.Tweens.Timeline;

            queue(tween: Phaser.Tweens.Tween): Phaser.Tweens.Timeline;

            hasOffset(tween: Phaser.Tweens.Tween): boolean;

            isOffsetAbsolute(value: number): boolean;

            isOffsetRelative(value: string): boolean;

            getRelativeOffset(value: string, base: number): number;

            calcDuration(): void;

            init(): boolean;

            resetTweens(resetFromLoop: boolean): void;

            setCallback(type: string, callback: Function, params?: any[], scope?: object): Phaser.Tweens.Timeline;

            makeActive(tween: Phaser.Tweens.Tween): Phaser.Tweens.TweenManager;

            play(): void;

            nextState(): void;

            update(timestamp: number, delta: number): boolean;

            stop(): void;

            pause(): Phaser.Tweens.Timeline;

            resume(): Phaser.Tweens.Timeline;

            hasTarget(target: object): boolean;

            destroy(): void;

        }

        var CREATED: integer;

        var INIT: integer;

        var DELAY: integer;

        var OFFSET_DELAY: integer;

        var PENDING_RENDER: integer;

        var PLAYING_FORWARD: integer;

        var PLAYING_BACKWARD: integer;

        var HOLD_DELAY: integer;

        var REPEAT_DELAY: integer;

        var COMPLETE: integer;

        var PENDING_ADD: integer;

        var PAUSED: integer;

        var LOOP_DELAY: integer;

        var ACTIVE: integer;

        var COMPLETE_DELAY: integer;

        var PENDING_REMOVE: integer;

        var REMOVED: integer;

        type TweenConfigDefaults = {
            targets: object | object[];
            delay?: number;
            duration?: number;
            ease?: string;
            easeParams?: any[];
            hold?: number;
            repeat?: number;
            repeatDelay?: number;
            yoyo?: boolean;
            flipX?: boolean;
            flipY?: boolean;
        };

        class Tween {
            constructor(parent: Phaser.Tweens.TweenManager | Phaser.Tweens.Timeline, data: Phaser.Tweens.TweenDataConfig[], targets: any[]);

            parent: Phaser.Tweens.TweenManager | Phaser.Tweens.Timeline;

            parentIsTimeline: boolean;

            data: Phaser.Tweens.TweenDataConfig[];

            totalData: integer;

            targets: object[];

            totalTargets: integer;

            useFrames: boolean;

            timeScale: number;

            loop: number;

            loopDelay: number;

            loopCounter: number;

            completeDelay: number;

            countdown: number;

            offset: number;

            calculatedOffset: number;

            state: integer;

            paused: boolean;

            elapsed: number;

            totalElapsed: number;

            duration: number;

            progress: number;

            totalDuration: number;

            totalProgress: number;

            callbacks: object;

            getValue(): number;

            setTimeScale(value: number): Phaser.Tweens.Tween;

            getTimeScale(): number;

            isPlaying(): boolean;

            isPaused(): boolean;

            hasTarget(target: object): boolean;

            updateTo(key: string, value: any, startToCurrent: boolean): Phaser.Tweens.Tween;

            restart(): void;

            calcDuration(): void;

            init(): boolean;

            nextState(): void;

            pause(): Phaser.Tweens.Tween;

            play(resetFromTimeline: boolean): void;

            resetTweenData(resetFromLoop: boolean): void;

            resume(): Phaser.Tweens.Tween;

            seek(toPosition: number): void;

            setCallback(type: string, callback: Function, params?: any[], scope?: object): Phaser.Tweens.Tween;

            complete(delay?: number): void;

            stop(resetTo?: number): void;

            update(timestamp: number, delta: number): boolean;

            setStateFromEnd(tween: Phaser.Tweens.Tween, tweenData: Phaser.Tweens.TweenDataConfig, diff: number): integer;

            setStateFromStart(tween: Phaser.Tweens.Tween, tweenData: Phaser.Tweens.TweenDataConfig, diff: number): integer;

            updateTweenData(tween: Phaser.Tweens.Tween, tweenData: Phaser.Tweens.TweenDataConfig, delta: number): boolean;

        }

        type TweenDataConfig = {
            target: object;
            key: string;
            getEndValue: Function;
            getStartValue: Function;
            ease: Function;
            duration?: number;
            totalDuration?: number;
            delay?: number;
            yoyo?: boolean;
            hold?: number;
            repeat?: integer;
            repeatDelay?: number;
            flipX?: boolean;
            flipY?: boolean;
            progress?: number;
            elapsed?: number;
            repeatCounter?: integer;
            start?: number;
            current?: number;
            end?: number;
            t1?: number;
            t2?: number;
            gen?: TweenDataGenConfig;
            state?: integer;
        };

        function TweenData(target: object, key: string, getEnd: Function, getStart: Function, ease: Function, delay: number, duration: number, yoyo: boolean, hold: number, repeat: number, repeatDelay: number, flipX: boolean, flipY: boolean): TweenDataConfig;

        class TweenManager {
            constructor(scene: Phaser.Scene);

            scene: Phaser.Scene;

            systems: Phaser.Scenes.Systems;

            timeScale: number;

            createTimeline(config: object): Phaser.Tweens.Timeline;

            timeline(config: object): Phaser.Tweens.Timeline;

            create(config: object): Phaser.Tweens.Tween;

            add(config: object): Phaser.Tweens.Tween;

            existing(tween: Phaser.Tweens.Tween): Phaser.Tweens.TweenManager;

            addCounter(config: object): Phaser.Tweens.Tween;

            preUpdate(): void;

            update(timestamp: number, delta: number): void;

            makeActive(tween: Phaser.Tweens.Tween): Phaser.Tweens.TweenManager;

            each(callback: Function, scope?: object, ...args: any[]): void;

            getAllTweens(): Phaser.Tweens.Tween[];

            getGlobalTimeScale(): number;

            getTweensOf(target: object | any[]): Phaser.Tweens.Tween[];

            isTweening(target: object): boolean;

            killAll(): Phaser.Tweens.TweenManager;

            killTweensOf(target: object | any[]): Phaser.Tweens.TweenManager;

            pauseAll(): Phaser.Tweens.TweenManager;

            resumeAll(): Phaser.Tweens.TweenManager;

            setGlobalTimeScale(value: number): Phaser.Tweens.TweenManager;

            shutdown(): void;

            destroy(): void;

        }

    }

    namespace Utils {
        namespace Array {
            function Add(array: any[], item: any | any[], limit?: integer, callback?: Function, context?: object): any[];

            function AddAt(array: any[], item: any | any[], index?: integer, limit?: integer, callback?: Function, context?: object): any[];

            function BringToTop(array: any[], item: any): any;

            function CountAllMatching(array: any[], property: string, value: any, startIndex?: integer, endIndex?: integer): integer;

            function Each(array: any[], callback: Function, context: object, ...args: any[]): any[];

            function EachInRange(array: any[], callback: Function, context: object, startIndex: integer, endIndex: integer, ...args: any[]): any[];

            function FindClosestInSorted(value: number, array: any[], key?: string): number | object;

            function GetAll(array: any[], property?: string, value?: any, startIndex?: integer, endIndex?: integer): any[];

            function GetFirst(array: any[], property?: string, value?: any, startIndex?: integer, endIndex?: integer): object;

            function GetRandom(array: any[], startIndex?: integer, length?: integer): object;

            namespace Matrix {
                function CheckMatrix(matrix: any[]): boolean;

                function MatrixToString(matrix: any[]): string;

                function ReverseColumns(matrix: any[]): any[];

                function ReverseRows(matrix: any[]): any[];

                function Rotate180(matrix: any[]): any[];

                function RotateLeft(matrix: any[]): any[];

                function RotateMatrix(matrix: any[], direction?: number | string): any[];

                function RotateRight(matrix: any[]): any[];

                function TransposeMatrix(array: any[]): any[];

            }

            function MoveDown(array: any[], item: any): any[];

            function MoveTo(array: any[], item: any, index: integer): any;

            function MoveUp(array: any[], item: any): any[];

            function NumberArray(start: number, end: number, prefix?: string, suffix?: string): number[] | string[];

            function NumberArrayStep(start?: number, end?: number, step?: number): number[];

            function QuickSelect(arr: any[], k: number, left: number, right: number, compare: Function): void;

            function Range(a: any[], b: any[], options: object): any[];

            function Remove(array: any[], item: any | any[], callback?: Function, context?: object): any | any[];

            function RemoveAt(array: any[], index: integer, callback?: Function, context?: object): any;

            function RemoveBetween(array: any[], startIndex: integer, endIndex: integer, callback?: Function, context?: object): any[];

            function RemoveRandomElement(array: any[], start?: integer, length?: integer): object;

            function Replace(oldChild: any, newChild: any): boolean;

            function RotateLeft(array: any[], total?: integer): any;

            function RotateRight(array: any[], total?: integer): any;

            function SafeRange(array: any[], startIndex: integer, endIndex: integer, throwError?: boolean): boolean;

            function SendToBack(array: any[], item: any): any;

            function SetAll(array: any[], property: string, value: any, startIndex?: integer, endIndex?: integer): any[];

            function Shuffle(array: any[]): any[];

            function SpliceOne(array: any[], index: integer): any;

            function Swap(array: any[], item1: any, item2: any): any[];

        }

        function NOOP(): void;

        namespace Object {
            function Clone(obj: object): object;

            function Extend(): object;

            function GetAdvancedValue(source: object, key: string, defaultValue: any): any;

            function GetFastValue(source: object, key: string, defaultValue?: any): any;

            function GetMinMaxValue(source: object, key: string, min: number, max: number, defaultValue: number): number;

            function GetValue(source: object, key: string, defaultValue: any): any;

            function HasAll(source: object, keys: string[]): boolean;

            function HasAny(source: object, keys: string[]): boolean;

            function HasValue(source: object, key: string): boolean;

            function IsPlainObject(obj: object): boolean;

            function Merge(obj1: object, obj2: object): object;

            function MergeRight(obj1: object, obj2: object): object;

        }

        namespace String {
            function Format(string: string, values: any[]): string;

            function Pad(str: string, len?: integer, pad?: string, dir?: integer): string;

            function ReverseString(string: string): string;

            function UppercaseFirst(str: string): string;

        }

    }

}

declare type ArcadeBodyBounds = {
    x: number;
    y: number;
    right: number;
    bottom: number;
};

declare type ArcadeBodyCollision = {
    none: boolean;
    up: boolean;
    down: boolean;
    left: boolean;
    right: boolean;
};

declare type ArcadePhysicsCallback = (object1: Phaser.GameObjects.GameObject, object2: Phaser.GameObjects.GameObject)=>void;

declare type PhysicsGroupConfig = GroupConfig & {
    collideWorldBounds?: boolean;
    accelerationX?: number;
    accelerationY?: number;
    allowDrag?: boolean;
    allowGravity?: boolean;
    allowRotation?: boolean;
    bounceX?: number;
    bounceY?: number;
    dragX?: number;
    dragY?: number;
    gravityX?: number;
    gravityY?: number;
    frictionX?: number;
    frictionY?: number;
    velocityX?: number;
    velocityY?: number;
    angularVelocity?: number;
    angularAcceleration?: number;
    angularDrag?: number;
    mass?: number;
    immovable?: boolean;
};

declare type PhysicsGroupDefaults = {
    setCollideWorldBounds: boolean;
    setAccelerationX: number;
    setAccelerationY: number;
    setAllowDrag: boolean;
    setAllowGravity: boolean;
    setAllowRotation: boolean;
    setBounceX: number;
    setBounceY: number;
    setDragX: number;
    setDragY: number;
    setGravityX: number;
    setGravityY: number;
    setFrictionX: number;
    setFrictionY: number;
    setVelocityX: number;
    setVelocityY: number;
    setAngularVelocity: number;
    setAngularAcceleration: number;
    setAngularDrag: number;
    setMass: number;
    setImmovable: boolean;
};

declare type ArcadeWorldConfig = {
    fps?: number;
    timeScale?: number;
    gravity?: object;
    "gravity.x"?: number;
    "gravity.y"?: number;
    x?: number;
    y?: number;
    width?: number;
    height?: number;
    checkCollision?: object;
    "checkCollision.up"?: boolean;
    "checkCollision.down"?: boolean;
    "checkCollision.left"?: boolean;
    "checkCollision.right"?: boolean;
    overlapBias?: number;
    tileBias?: number;
    forceX?: boolean;
    isPaused?: boolean;
    debug?: boolean;
    debugShowBody?: boolean;
    debugShowStaticBody?: boolean;
    debugShowVelocity?: boolean;
    debugBodyColor?: number;
    debugStaticBodyColor?: number;
    debugVelocityColor?: number;
    maxEntries?: number;
    useTree?: boolean;
};

declare type CheckCollisionObject = {
    up: boolean;
    down: boolean;
    left: boolean;
    right: boolean;
};

declare type ArcadeWorldDefaults = {
    debugShowBody: boolean;
    debugShowStaticBody: boolean;
    debugShowVelocity: boolean;
    bodyDebugColor: number;
    staticBodyDebugColor: number;
    velocityDebugColor: number;
};

declare type ArcadeWorldTreeMinMax = {
    minX: number;
    minY: number;
    maxX: number;
    maxY: number;
};

declare type ArcadeColliderType = ()=>void;

declare type BodyUpdateCallback = (body: Phaser.Physics.Impact.Body)=>void;

declare type JSONImpactBody = {
    name: string;
    size: object;
    pos: object;
    vel: object;
    accel: object;
    friction: object;
    maxVel: object;
    gravityFactor: number;
    bounciness: number;
    minBounceVelocity: number;
    type: Phaser.Physics.Impact.TYPE;
    checkAgainst: Phaser.Physics.Impact.TYPE;
    collides: Phaser.Physics.Impact.COLLIDES;
};

declare type CollideCallback = (body: Phaser.Physics.Impact.Body, other: Phaser.Physics.Impact.Body, axis: string)=>void;

declare namespace MatterJS {
    class Body {
    }

    class Composite {
    }

    class World extends MatterJS.Composite {
    }

    class Constraint {
    }

    class Engine {
    }

}

declare type CorePluginContainer = {
    key: string;
    plugin: Function;
    mapping?: string;
    custom?: boolean;
};

declare type CustomPluginContainer = {
    key: string;
    plugin: Function;
};

declare namespace Phaser.Plugins.PluginCache {
    function register(key: string, plugin: Function, mapping: string, custom?: boolean): void;

    function registerCustom(key: string, plugin: Function, mapping: string): void;

    function hasCore(key: string): boolean;

    function hasCustom(key: string): boolean;

    function getCore(key: string): CorePluginContainer;

    function getCustom(key: string): CustomPluginContainer;

    function getCustomClass(key: string): Function;

    function remove(key: string): void;

    function removeCustom(key: string): void;

}

declare type GlobalPlugin = {
    key: string;
    plugin: Function;
    active?: boolean;
    mapping?: string;
};

declare type RendererConfig = {
    clearBeforeRender: boolean;
    pixelArt: boolean;
    backgroundColor: Phaser.Display.Color;
    resolution: number;
    autoResize: boolean;
    roundPixels: boolean;
};

declare type SnapshotCallback = (snapshot: HTMLImageElement)=>void;

declare interface ModelViewProjection {
    modelMatrixDirty: any;
    viewMatrixDirty: any;
    projectionMatrixDirty: any;
    modelMatrix: any;
    viewMatrix: any;
    projectionMatrix: any;
    mvpInit(): void;
    mvpUpdate(): void;
    modelIdentity(): void;
    modelScale(): void;
    modelTranslate(): void;
    modelRotateX(): void;
    modelRotateY(): void;
    modelRotateZ(): void;
    viewIdentity(): void;
    viewScale(): void;
    viewTranslate(): void;
    viewRotateX(): void;
    viewRotateY(): void;
    viewRotateZ(): void;
    viewLoad2D(): void;
    viewLoad(): void;
    projIdentity(): void;
    projOrtho(): void;
    projPersp(): void;
}

declare type WebGLContextCallback = (renderer: Phaser.Renderer.WebGL.WebGLRenderer)=>void;

declare type SnapshotState = {
    callback: SnapshotCallback;
    type: string;
    encoder: number;
};

declare namespace Phaser.Scenes.ScenePlugin {
    type SceneTransitionConfig = {
        target: string;
        duration?: integer;
        sleep?: boolean;
        allowInput?: boolean;
        moveAbove?: boolean;
        moveBelow?: boolean;
        onUpdate?: Function;
        onUpdateScope?: any;
        data?: any;
    };

}

declare type EachActiveSoundCallback = (manager: Phaser.Sound.BaseSoundManager, sound: Phaser.Sound.BaseSound, index: number, sounds: Phaser.Sound.BaseSound[])=>void;

declare namespace Phaser.Sound.BaseSound {
    type AudioSpriteSound = ()=>void;

}

declare type SoundConfig = {
    mute?: boolean;
    volume?: number;
    rate?: number;
    detune?: number;
    seek?: number;
    loop?: boolean;
    delay?: number;
};

declare type SoundMarker = {
    name: string;
    start?: number;
    duration?: number;
    config?: SoundConfig;
};

declare type EachListCallback<I> = (item: any, ...args: any[])=>void;

declare type EachMapCallback<E> = (key: string, entry: any)=>void;

declare type EachSetCallback<E> = (entry: any, index: number)=>void;

declare type EachTextureCallback = (texture: Phaser.Textures.Texture, ...args: any[])=>void;

declare type SpriteSheetConfig = {
    frameWidth: integer;
    frameHeight?: integer;
    startFrame?: integer;
    endFrame?: integer;
    margin?: integer;
    spacing?: integer;
};

declare type SpriteSheetFromAtlasConfig = {
    atlas: string;
    frame: string;
    frameWidth: integer;
    frameHeight?: integer;
    startFrame?: integer;
    endFrame?: integer;
    margin?: integer;
    spacing?: integer;
};

declare type FindTileCallback = (value: Phaser.Tilemaps.Tile, index: number, array: Phaser.Tilemaps.Tile[])=>void;

declare type EachTileCallback = (value: Phaser.Tilemaps.Tile, index: number, array: Phaser.Tilemaps.Tile[])=>void;

declare type GetTilesWithinFilteringOptions = {
    isNotEmpty?: boolean;
    isColliding?: boolean;
    hasInterestingFace?: boolean;
};

declare type TilemapFilterCallback = (value: Phaser.GameObjects.GameObject, index: number, array: Phaser.GameObjects.GameObject[])=>void;

declare type TilemapFindCallback = (value: Phaser.GameObjects.GameObject, index: number, array: Phaser.GameObjects.GameObject[])=>void;

declare type TilemapConfig = {
    key?: string;
    data?: integer[][];
    tileWidth?: integer;
    tileHeight?: integer;
    width?: integer;
    height?: integer;
    insertNull?: boolean;
};

declare type TimerEventConfig = {
    delay?: number;
    repeat?: number;
    loop?: boolean;
    callback?: Function;
    callbackScope?: any;
    args?: any[];
    timeScale?: number;
    startAt?: number;
    paused?: boolean;
};

declare type TweenDataGenConfig = {
    delay: Function;
    duration: Function;
    hold: Function;
    repeat: Function;
    repeatDelay: Function;
};

declare class Class {
    constructor(definition: Object);

}

declare type integer = number;

declare module 'phaser' {
    export = Phaser;

}

