/**
 * Imports
 */
// Import Three.js
import * as THREE from 'three'

import {MTLLoader, OBJLoader} from 'three-obj-mtl-loader'


/**
 * Class
 */
class Shuttle{
    constructor(_options)
    {
        //this.scene = _options.scene
        this.container = new THREE.Object3D()

        this.mtlLoader = new MTLLoader
        this.objLoader = new OBJLoader

        // Object
        this.setShuttle()
    }

    setShuttle(){
        this.mtlLoader.load('SpaceShuttle.mtl', (materials) => {
            materials.preload()
            this.objLoader.setMaterials(materials)
            this.objLoader.load('SpaceShuttle.obj', (object) => {
                this.container.add(object)
            })
        })
    }
}


/**
 * Exports
 */
export default Shuttle