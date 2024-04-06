// Type definitions for non-npm package dom-speech-recognition-browser 0.0
// Project: https://wicg.github.io/speech-api/
// Definitions by: Hana Joo <https://github.com/h-joo>
//                 Jan Kuehle <https://github.com/frigus02>
//                 Martin Probst <https://github.com/mprobst>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Minimum TypeScript Version: 4.4

// https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognition#events
interface SpeechRecognitionEventMap {
  audioend: Event;
  audiostart: Event;
  end: Event;
  error: SpeechRecognitionErrorEvent;
  nomatch: SpeechRecognitionEvent;
  result: SpeechRecognitionEvent;
  soundend: Event;
  soundstart: Event;
  speechend: Event;
  speechstart: Event;
  start: Event;
}

// https://wicg.github.io/speech-api/#speechreco-section
interface SpeechRecognition extends EventTarget {
  abort(): void;
  addEventListener<K extends keyof SpeechRecognitionEventMap>(
    type: K,
    listener: (this: SpeechRecognition, ev: SpeechRecognitionEventMap[K]) => any,
    options?: boolean | AddEventListenerOptions,
  ): void;
  addEventListener(
    type: string,
    listener: EventListenerOrEventListenerObject,
    options?: boolean | AddEventListenerOptions,
  ): void;
  continuous: boolean;
  grammars: SpeechGrammarList;
  interimResults: boolean;
  lang: string;
  maxAlternatives: number;
  onaudioend: ((this: SpeechRecognition, ev: Event) => any) | null;
  onaudiostart: ((this: SpeechRecognition, ev: Event) => any) | null;
  onend: ((this: SpeechRecognition, ev: Event) => any) | null;
  onerror: ((this: SpeechRecognition, ev: SpeechRecognitionErrorEvent) => any) | null;
  onnomatch: ((this: SpeechRecognition, ev: SpeechRecognitionEvent) => any) | null;
  onresult: ((this: SpeechRecognition, ev: SpeechRecognitionEvent) => any) | null;
  onsoundend: ((this: SpeechRecognition, ev: Event) => any) | null;
  onsoundstart: ((this: SpeechRecognition, ev: Event) => any) | null;
  onspeechend: ((this: SpeechRecognition, ev: Event) => any) | null;
  onspeechstart: ((this: SpeechRecognition, ev: Event) => any) | null;
  onstart: ((this: SpeechRecognition, ev: Event) => any) | null;
  removeEventListener<K extends keyof SpeechRecognitionEventMap>(
    type: K,
    listener: (this: SpeechRecognition, ev: SpeechRecognitionEventMap[K]) => any,
    options?: boolean | EventListenerOptions,
  ): void;
  removeEventListener(
    type: string,
    listener: EventListenerOrEventListenerObject,
    options?: boolean | EventListenerOptions,
  ): void;
  start(): void;
  stop(): void;
}

declare var SpeechRecognition: { prototype: SpeechRecognition; new (): SpeechRecognition };

// https://wicg.github.io/speech-api/#speechrecognitionevent
interface SpeechRecognitionEventInit extends EventInit {
  resultIndex?: number;
  results: SpeechRecognitionResultList;
}

// https://wicg.github.io/speech-api/#dictdef-speechrecognitioneventinit
interface SpeechRecognitionEvent extends Event {
  readonly resultIndex: number;
  readonly results: SpeechRecognitionResultList;
}

declare var SpeechRecognitionEvent: {
  prototype: SpeechRecognitionEvent;
  new (type: string, eventInitDict: SpeechRecognitionEventInit): SpeechRecognitionEvent;
};

// https://wicg.github.io/speech-api/#enumdef-speechrecognitionerrorcode
type SpeechRecognitionErrorCode =
  | 'aborted'
  | 'audio-capture'
  | 'bad-grammar'
  | 'language-not-supported'
  | 'network'
  | 'no-speech'
  | 'not-allowed'
  | 'service-not-allowed';

// https://wicg.github.io/speech-api/#dictdef-speechrecognitionerroreventinit
interface SpeechRecognitionErrorEventInit extends EventInit {
  error: SpeechRecognitionErrorCode;
  message?: string;
}

// https://wicg.github.io/speech-api/#speechrecognitionerrorevent
interface SpeechRecognitionErrorEvent extends Event {
  readonly error: SpeechRecognitionErrorCode;
  readonly message: string;
}

declare var SpeechRecognitionErrorEvent: {
  prototype: SpeechRecognitionErrorEvent;
  new (type: string, eventInitDict: SpeechRecognitionErrorEventInit): SpeechRecognitionErrorEvent;
};

// https://wicg.github.io/speech-api/#speechgrammar
interface SpeechGrammar {
  src: string;
  weight: number;
}

declare var SpeechGrammar: {
  prototype: SpeechGrammar;
  new (): SpeechGrammar;
};

// https://wicg.github.io/speech-api/#speechgrammarlist
interface SpeechGrammarList {
  [index: number]: SpeechGrammar;
  addFromString(string: string, weight?: number): void;
  addFromURI(src: string, weight?: number): void;
  item(index: number): SpeechGrammar;
  readonly length: number;
}

declare var SpeechGrammarList: { prototype: SpeechGrammarList; new (): SpeechGrammarList };

// prefixed global variables in Chrome; should match the equivalents above
// https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API/Using_the_Web_Speech_API#chrome_support
declare let webkitSpeechRecognition: { prototype: SpeechRecognition; new (): SpeechRecognition };
declare let webkitSpeechGrammarList: { prototype: SpeechGrammarList; new (): SpeechGrammarList };
declare let webkitSpeechRecognitionEvent: {
  prototype: SpeechRecognitionEvent;
  new (type: string, eventInitDict: SpeechRecognitionEventInit): SpeechRecognitionEvent;
};

declare module 'mmd-parser' {
  export const CharsetEncoder: any;
  export class Parser {
    parsePmd(buffer: ArrayBufferLike, leftToRight?: boolean): any;
    parsePmx(buffer: ArrayBufferLike, leftToRight?: boolean): any;
    parseVmd(buffer: ArrayBufferLike, leftToRight?: boolean): VmdFile;
    parseVpd(buffer: ArrayBufferLike, leftToRight?: boolean): any;
    mergeVmds(vmds: VmdFile[]): VmdFile;
    leftToRightModel(model: any): any;
    leftToRightVmd(vmd: any): any;
    leftToRightVpd(vpd: any): any;
  }

  export interface VmdFile {
    cameras: {
      distance: number;
      fov: number;
      frameNum: number;
      interpolation: number[];
      perspective: number;
      position: number[];
      rotation: number[];
    }[];
    metadata: {
      cameraCount: number;
      coordinateSystem: string;
      magic: string;
      morphCount: number;
      motionCount: number;
      name: string;
    };
    morphs: {
      frameNum: number;
      morphName: string;
      weight: number;
    }[];
    motions: {
      boneName: string;
      frameNum: number;
      interpolation: number[];
      position: number[];
      rotation: number[];
    }[];
  }
}
