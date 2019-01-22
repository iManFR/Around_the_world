/**
 * Imports
 */
// Import Three.js
import * as THREE from 'three'

import {MTLLoader, OBJLoader} from 'three-obj-mtl-loader'


/**
 * Class
 */
class Earth{
    constructor()
    {
        this.container = new THREE.Object3D()

        this.mtlLoader = new MTLLoader
        this.objLoader = new OBJLoader

        // Object
        this.setEarth()
    }

    setEarth(){
        this.mtlLoader.load('models/earth/CHAHIN_EARTH.mtl', (materials) => {
            materials.preload()
            this.objLoader.setMaterials(materials)
            this.objLoader.load('models/earth/CHAHIN_EARTH.obj', (object) => {
                this.container.add(object)
            })
        })
    }
}


/**
 * Exports
 */
export default Earth