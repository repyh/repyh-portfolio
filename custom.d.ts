declare module 'three/examples/jsm/geometries/TextGeometry' {
    import { Geometry } from 'three';
    
    export class TextGeometry extends Geometry {
        constructor(text: string, parameters: any);
    }
}