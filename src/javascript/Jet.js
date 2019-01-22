/**
 * Imports
 */
// Import Three.js
import * as THREE from 'three'

import {MTLLoader, OBJLoader} from 'three-obj-mtl-loader'


/**
 * Class
 */
class Jet{
    constructor(_options)
    {
        //this.scene = _options.scene
        this.container = new THREE.Object3D()

        this.mtlLoader = new MTLLoader
        this.objLoader = new OBJLoader

        // Object
        this.setJet()
    }

    setJet(){
        this.mtlLoader.load('models/jet/Jet.mtl', (materials) => {
            materials.preload()
            this.objLoader.setMaterials(materials)
            this.objLoader.load('models/jet/Jet.obj', (object) => {
                this.container.add(object)
            })
        })
    }
}


/**
 * Exports
 */
export default Jet