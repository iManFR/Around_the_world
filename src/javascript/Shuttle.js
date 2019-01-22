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
    constructor()
    {
        this.container = new THREE.Object3D()

        this.mtlLoader = new MTLLoader
        this.objLoader = new OBJLoader

        // Object
        this.setShuttle()
    }

    setShuttle(){
        this.mtlLoader.load('models/shuttle/SpaceShuttle.mtl', (materials) => {
            materials.preload()
            this.objLoader.setMaterials(materials)
            this.objLoader.load('models/shuttle/SpaceShuttle.obj', (object) => {
                this.container.add(object)
            })
        })
    }
}


/**
 * Exports
 */
export default Shuttle