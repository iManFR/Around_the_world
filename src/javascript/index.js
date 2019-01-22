/**
 * Imports
 */
//Import Three.js
import * as THREE from 'three'

// Import OrbitControls
import ThreeOrbitControls from 'three-orbit-controls'
const OrbitControls = ThreeOrbitControls(THREE)

// Import Rocket Model
//import Rocket from '/javascript/Rocket.js'

// Import Environment
import Environment from '/javascript/Environment.js'

// Import Shuttle Model
import Shuttle from '/javascript/Shuttle.js'

// Import Satellite Model
import Satellite from '/javascript/Satellite.js'

// Import Satellite Model
import Jet from '/javascript/Jet.js'

// Import Earth Model
import Earth from '/javascript/Earth.js'


/**
 * Cursor
 */
const cursor = {}
cursor.x = 0
cursor.y = 0

window.addEventListener('mousemove', (_event) =>
{
    cursor.x = _event.clientX / sizes.width - 0.5
    cursor.y = _event.clientY / sizes.height - 0.5
})


/**
 * Sizes/Resizes
 */
const sizes = {}
sizes.width = window.innerWidth
sizes.height = window.innerHeight

window.addEventListener('resize', () =>
{
    // Update sizes
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight

    // Update camera
    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()

    // Update
    renderer.setSize(sizes.width, sizes.height)
})


/**
 * Scene
 */
const scene = new THREE.Scene()


/**
 * Camera
 */
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.z = 30
scene.add(camera)


/**
 * Lights
 */
const ambientLight = new THREE.AmbientLight(0xffffff, 0.4)
scene.add(ambientLight)

const sunLight = new THREE.DirectionalLight(0xffcccc, 1.6)
sunLight.castShadow = true
sunLight.shadow.camera.top = 1.20
sunLight.shadow.camera.right = 1.20
sunLight.shadow.camera.bottom = - 1.20
sunLight.shadow.camera.left = - 1.20
sunLight.position.x = 1
sunLight.position.y = 1
sunLight.position.z = 1
scene.add(sunLight)


/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer()
renderer.shadowMap.enabled = true
renderer.setSize(sizes.width, sizes.height)
document.body.appendChild(renderer.domElement)


/**
 * Controls
 */
const controls = new OrbitControls(camera, renderer.domElement)
controls.enableDamping = true
controls.dampingFactor = 0.05
controls.enableZoom = true
controls.rotateSpeed = 0.05
controls.minDistance = 20
controls.maxDistance = 30
controls.enablePan = false


/**
 * Textures
 */
const textureLoader = new THREE.TextureLoader()


/**
 * Rocket
 */
/*const rocket = new Rocket({ textureLoader: textureLoader })
scene.add(rocket.container)*/


/**
 * Earth
 */
const earth = new Earth({ scene: scene })
earth.container.scale.set(1, 1, 1)
scene.add(earth.container)


/**
 * Shuttle
 */
const shuttle = new Shuttle({ scene: scene })
shuttle.container.rotation.x = - (Math.PI / 2)
shuttle.container.rotation.z = + (Math.PI / 2)
shuttle.container.scale.set(0.1, 0.1, 0.1)
shuttle.container.position.y = 14.5
shuttle.container.castShadow = true
scene.add(shuttle.container)

const rotateShuttle = new THREE.Object3D()
earth.container.add(rotateShuttle)
rotateShuttle.add(shuttle.container)


/**
 * Satellite
 */
const satellite = new Satellite({ scene: scene })
satellite.container.scale.set(0.05, 0.05, 0.05)
satellite.container.position.y = 12
satellite.container.castShadow = true
scene.add(satellite.container)

const rotateSatellite = new THREE.Object3D()
earth.container.add(rotateSatellite)
rotateSatellite.add(satellite.container)


/**
 * Jet
 */
const jet = new Jet({ scene: scene })
jet.container.scale.set(0.3, 0.3, 0.3)
jet.container.position.z = 9
jet.container.rotation.x = (Math.PI / 2)
jet.container.rotation.y = (Math.PI / 2)
scene.add(jet.container)

const rotateJet = new THREE.Object3D()
earth.container.add(rotateJet)
rotateJet.add(jet.container)

/**
 * Environement
 */
const environment = new Environment({ textureLoader: textureLoader })
environment.container.receiveShadow = true
scene.add(environment.container)


/**
 * Loop
 */
const loop = () =>
{
    window.requestAnimationFrame(loop)

    // Update camera
    //camera.position.x = cursor.x * 10
    //camera.position.y = - cursor.y * 10
    //camera.lookAt(new THREE.Vector3())

    // Update Orbit Controls
    controls.update()

    // Shuttle Rotate
    rotateShuttle.rotation.z += 0.02

    // Satellite Rotate
    rotateSatellite.rotation.x -= 0.03
    satellite.container.rotation.y += 0.01

    // Plane Rotate
    rotateJet.rotation.y += 0.015

    // Earth Rotate
    earth.container.rotation.y -= 0.0002

    // Renderer
    renderer.render(scene, camera)
}
loop()


/**
 * Hot reload
 */
if (module.hot) {
    module.hot.dispose(function() {
      // module is about to be replaced
    })
  
    module.hot.accept(function() {
      // module or one of its dependencies was just updated
    })
  }


/*const mtlLoader = new MTLLoader()

const objLoader = new OBJLoader()

mtlLoader.load('SpaceShuttle.mtl', (materials) => {
    materials.preload()
    objLoader.setMaterials(materials)
    objLoader.load('SpaceShuttle.obj', (object) => {
        object.rotation.x = - (Math.PI / 2)
        scene.add(object)
    })
})

mtlLoader.load('CHAHIN_EARTH.mtl', (materials) => {
    materials.preload()
    objLoader.setMaterials(materials)
    objLoader.load('CHAHIN_EARTH.obj', (object) => {
        scene.add(object)
    })
})*/


/*const shuttle = {}
shuttle.mtlLoader = new MTLLoader()
shuttle.mtlLoader.setTexturePath('/models/shuttle/')
shuttle.mtlLoader.setPath('/models/shuttle/')
shuttle.mtlLoader.load('SpaceShuttle.mtl', function (materials) {
    materials.preload()
    shuttle.objLoader = new OBJLoader()
    shuttle.objLoader.setMaterials(materials)
    shuttle.objLoader.setPath('/models/shuttle/')
    shuttle.objLoader.load('SpaceShuttle.obj', function (object) {
        object.rotation.x = - (Math.PI / 2)
        object.scale.set(0.2, 0.2, 0.2)
        object.position.y = 12
        scene.add(object)
    })
})*/


/*const setAsteroids = () => {
    const mtlAsteroids = new MTLLoader()
    mtlAsteroids.setTexturePath('/models/asteroids/')
    mtlAsteroids.setPath('/models/asteroids/')
    mtlAsteroids.load('Asteroids.mtl', function (materials) {
        materials.preload()
        const objAsteroids = new OBJLoader()
        objAsteroids.setMaterials(materials)
        objAsteroids.setPath('/models/asteroids/')
        objAsteroids.load('Asteroids.obj', function (object) {
            object.position.z = - 40
            object.position.y = - 20
            scene.add(object)
        })
    })
}*/
//setAsteroids()


/*const setEarth = () => {
    const mtlEarth = new MTLLoader()
    mtlEarth.setTexturePath('/models/earth/')
    mtlEarth.setPath('/models/earth/')
    mtlEarth.load('CHAHIN_EARTH.mtl', function (materials) {
        materials.preload()
        const objEarth = new OBJLoader()
        objEarth.setMaterials(materials)
        objEarth.setPath('/models/earth/')
        objEarth.load('CHAHIN_EARTH.obj', function (object) {
            object.scale.set(1, 1, 1)
            scene.add(object)
        })
    })
}
setEarth()*/
