/**
 * Imports
 */
// Import Three.js
import * as THREE from 'three'


/**
 * Class
 */
class Environment{
    constructor(_options)
    {   
        // Texture
        this.textureLoader = _options.textureLoader
        // Settings Floor Texture
        /*this.floorTexture = this.textureLoader.load(marsSource)
        this.floorTexture.wrapS = THREE.RepeatWrapping
        this.floorTexture.wrapT = THREE.RepeatWrapping
        this.floorTexture.repeat.set( 100, 100 )*/

        this.container = new THREE.Object3D()

        // Items
        this.setStars()
        //this.setFloor()

        // Animation
        this.setAnimation()
    }

    setStars(){
        this.stars = {}
        this.stars.geometry = new THREE.Geometry()

        for (let i = 0; i < 1000; i++){
            const vertice = new THREE.Vector3()

            const distance = 1000
            const theta = THREE.Math.randFloatSpread(360)
            const phi = THREE.Math.randFloatSpread(360)

            vertice.x = distance * Math.sin(theta) * Math.cos(phi)
            vertice.y = distance * Math.sin(theta) * Math.sin(phi)
            vertice.z = distance * Math.cos(theta)

            this.stars.geometry.vertices.push(vertice)
        }
        this.stars.material = new THREE.PointsMaterial({
            size: 2,
            sizeAttenuation: false,
        })
        this.stars.points = new THREE.Points(this.stars.geometry, this.stars.material)
        this.container.add(this.stars.points)
    }

    setFloor(){
        this.floor = {}
        this.floor.geometry = new THREE.PlaneBufferGeometry( 3000, 3000, 32 )
        this.floor.material = new THREE.MeshStandardMaterial({ 
            //map: this.floorTexture,
            color: 0xF17E0A,
        })
        this.floor.mesh = new THREE.Mesh(this.floor.geometry, this.floor.material)
        this.floor.mesh.rotation.x = - Math.PI / 2;
        this.floor.mesh.position.y -= 8
        this.floor.receiveShadow = true
        this.container.add(this.floor.mesh)
    }

    setAnimation(){
        const loop = () => {
            window.requestAnimationFrame(loop)
            // Stars rotation
            this.stars.points.rotation.x += 0.00015
            this.stars.points.rotation.y += 0.00025
            this.stars.points.rotation.z += 0.00015
        }
        loop()
    }
}

 /**
 * Exports
 */
export default Environment