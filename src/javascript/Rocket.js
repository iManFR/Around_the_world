/**
 * Imports
 */
// Import Three.js
import * as THREE from 'three'


//Import Textures
//import rocketSource from '../images/textures/rocket/rocket2.jpg'


/**
 * Class
 */
class Rocket{
    constructor(_options)
    {
        this.textureLoader = _options.textureLoader

        this.container = new THREE.Object3D()

        // Items
        this.setMainCylinder()
        this.setCap()

        this.setFirstPropulsor()
        this.setSecondPropulsor()
    }

    setMainCylinder(){
        // Main Cylinder
        this.mainCylinder = {}
        this.mainCylinder.geometry = new THREE.CylinderBufferGeometry( 1, 1, 10, 32 )
        this.mainCylinder.material = new THREE.MeshStandardMaterial({ color: 0xecf0f1 })
        this.mainCylinder.mesh = new THREE.Mesh(this.mainCylinder.geometry, this.mainCylinder.material)
        this.mainCylinder.castShadow = true
        this.container.add(this.mainCylinder.mesh)

        // Reactor
        this.mainCylinder.reactor = {}
        this.mainCylinder.reactor.geometry = new THREE.CylinderBufferGeometry( 0.3, 0.5, 0.7 )
        this.mainCylinder.reactor.material = new THREE.MeshStandardMaterial({ color: 0x000000 })
        this.mainCylinder.reactor.mesh = new THREE.Mesh(this.mainCylinder.reactor.geometry, this.mainCylinder.reactor.material)
        this.mainCylinder.reactor.mesh.position.y -= 5.25
        this.container.add(this.mainCylinder.reactor.mesh)
    }

    setCap(){
        // Main Cap
        this.cap = {}
        this.cap.geometry = new THREE.SphereBufferGeometry( 1, 32, 32 )
        this.cap.material = new THREE.MeshStandardMaterial({ color: 0xededed })
        this.cap.mesh = new THREE.Mesh(this.cap.geometry, this.cap.material)
        this.cap.mesh.position.y += 5
        this.cap.mesh.scale.set(1, 1.9, 1)
        this.container.add(this.cap.mesh)
    }

    setFirstPropulsor(){
        // Cylinder
        this.firstPropulsor = {}
        this.firstPropulsor.geometry = new THREE.CylinderBufferGeometry( 0.7, 0.7, 7, 32 )
        this.firstPropulsor.material = new THREE.MeshStandardMaterial({ color: 0xecf0f1 })
        this.firstPropulsor.mesh = new THREE.Mesh(this.firstPropulsor.geometry, this.firstPropulsor.material)
        this.firstPropulsor.mesh.position.x += 1.5
        this.firstPropulsor.mesh.position.y -= 2.3
        this.firstPropulsor.castShadow = true
        this.firstPropulsor.receiveShadow = true
        this.container.add(this.firstPropulsor.mesh)

        // Cap
        this.firstPropulsor.cap = {}
        this.firstPropulsor.cap.geometry = new THREE.SphereBufferGeometry( 0.7, 32, 32 )
        this.firstPropulsor.cap.material = new THREE.MeshStandardMaterial({ color: 0xecf0f1 })
        this.firstPropulsor.cap.mesh = new THREE.Mesh(this.firstPropulsor.cap.geometry, this.firstPropulsor.cap.material)
        this.firstPropulsor.cap.mesh.position.x += 1.5
        this.firstPropulsor.cap.mesh.position.y += 1.27
        this.firstPropulsor.cap.mesh.scale.set(1, 1.9, 1)
        this.container.add(this.firstPropulsor.cap.mesh)

        // Reactor
        this.firstPropulsor.reactor = {}
        this.firstPropulsor.reactor.geometry = new THREE.CylinderBufferGeometry( 0.5, 0.8, 1 )
        this.firstPropulsor.reactor.material = new THREE.MeshStandardMaterial({ color: 0x000000 })
        this.firstPropulsor.reactor.mesh = new THREE.Mesh(this.firstPropulsor.reactor.geometry, this.firstPropulsor.reactor.material)
        this.firstPropulsor.reactor.mesh.position.x += 1.5
        this.firstPropulsor.reactor.mesh.position.y -= 6
        this.container.add(this.firstPropulsor.reactor.mesh)
    }

    setSecondPropulsor(){
        // Cylinder
        this.secondPropulsor = {}
        this.secondPropulsor.geometry = new THREE.CylinderBufferGeometry( 0.7, 0.7, 7, 32 )
        this.secondPropulsor.material = new THREE.MeshStandardMaterial({ color: 0xecf0f1 })
        this.secondPropulsor.mesh = new THREE.Mesh(this.secondPropulsor.geometry, this.secondPropulsor.material)
        this.secondPropulsor.mesh.position.x -= 1.5
        this.secondPropulsor.mesh.position.y -= 2.3
        this.secondPropulsor.castShadow = true
        this.secondPropulsor.receiveShadow = true
        this.container.add(this.secondPropulsor.mesh)
        
        // Cap
        this.secondPropulsor.cap = {}
        this.secondPropulsor.cap.geometry = new THREE.SphereBufferGeometry( 0.7, 32, 32 )
        this.secondPropulsor.cap.material = new THREE.MeshStandardMaterial({ color: 0xecf0f1 })
        this.secondPropulsor.cap.mesh = new THREE.Mesh(this.secondPropulsor.cap.geometry, this.secondPropulsor.cap.material)
        this.secondPropulsor.cap.mesh.position.x -= 1.5
        this.secondPropulsor.cap.mesh.position.y += 1.24
        this.secondPropulsor.cap.mesh.scale.set(1, 1.9, 1)
        this.container.add(this.secondPropulsor.cap.mesh)

        // Reactor
        this.firstPropulsor.reactor = {}
        this.firstPropulsor.reactor.geometry = new THREE.CylinderBufferGeometry( 0.5, 0.8, 1 )
        this.firstPropulsor.reactor.material = new THREE.MeshStandardMaterial({ color: 0x000000 })
        this.firstPropulsor.reactor.mesh = new THREE.Mesh(this.firstPropulsor.reactor.geometry, this.firstPropulsor.reactor.material)
        this.firstPropulsor.reactor.mesh.position.x -= 1.5
        this.firstPropulsor.reactor.mesh.position.y -= 6
        this.container.add(this.firstPropulsor.reactor.mesh)
    }
}


/**
 * Exports
 */
export default Rocket