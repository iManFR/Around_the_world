/**
 * Imports
 */
//Import Three.js
import * as THREE from 'three'

// Import OrbitControls
import ThreeOrbitControls from 'three-orbit-controls'
const OrbitControls = ThreeOrbitControls(THREE)

// Import Dat Gui
import * as dat from 'dat.gui'

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
const ambientLight = new THREE.AmbientLight(0xffffff, 0.7)
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
const earth = new Earth()
earth.container.scale.set(1, 1, 1)
scene.add(earth.container)


/**
 * Shuttle
 */
const shuttle = new Shuttle()
shuttle.container.rotation.x = - (Math.PI / 2)
shuttle.container.rotation.z = + (Math.PI / 2)
shuttle.container.scale.set(0.1, 0.1, 0.1)
shuttle.container.position.y = 14.5
shuttle.container.castShadow = true
scene.add(shuttle.container)

const rotateShuttle = new THREE.Object3D()
earth.container.add(rotateShuttle)
//rotateShuttle.rotation.x = Math.PI/6
rotateShuttle.add(shuttle.container)


/**
 * Satellite
 */
const satellite = new Satellite()
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
const jet = new Jet()
jet.container.scale.set(0.3, 0.3, 0.3)
jet.container.position.z = 9
jet.container.rotation.x = (Math.PI / 2)
jet.container.rotation.y = (Math.PI / 2)
scene.add(jet.container)

const rotateJet = new THREE.Object3D()
earth.container.add(rotateJet)
//rotateJet.rotation.x = Math.PI/6
rotateJet.add(jet.container)


/**
 * Environement
 */
const environment = new Environment({ textureLoader: textureLoader })
environment.container.receiveShadow = true
scene.add(environment.container)


/**
 * Options
 */
const options = {
    // Earth
    earthRotation: 0.0002,

    // Shuttle
    shuttleRotation: 0.02,
    shuttleAngle: Math.PI/6,

    // Satellite
    satelliteRotation: 0.02,

    // Jet
    jetRotation: 0.015,
    jetAngle: Math.PI/6,

}


/**
 * DAT GUI
 */
const gui = new dat.GUI()

const earthSettings = gui.addFolder('Earth')
earthSettings.add(options, 'earthRotation', 0, 0.02).name('Rotation Speed').listen()
earthSettings.open()

const shuttleSettings = gui.addFolder('Shuttle')
shuttleSettings.add(options, 'shuttleRotation', 0, 0.1).name('Speed').listen()
shuttleSettings.add(options, 'shuttleAngle', 0, Math.PI * 2).name('Angle').listen()
shuttleSettings.open()

const satelliteSettings = gui.addFolder('Satellite')
satelliteSettings.add(options, 'satelliteRotation', 0, 0.1).name('Speed').listen()
satelliteSettings.open()

const jetSettings = gui.addFolder('Jet')
jetSettings.add(options, 'jetRotation', 0, 0.1).name('Speed').listen()
jetSettings.add(options, 'jetAngle', 0, Math.PI * 2).name('Angle').listen()
jetSettings.open()


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
    rotateShuttle.rotation.z += options.shuttleRotation
    // Shuttle Angle
    rotateShuttle.rotation.x = options.shuttleAngle

    // Satellite Rotate
    rotateSatellite.rotation.x -= options.satelliteRotation
    satellite.container.rotation.y += 0.01

    // Plane Rotate
    rotateJet.rotation.y += options.jetRotation
    // Plane Angle
    rotateJet.rotation.x = options.jetAngle
    
    // Earth Rotate
    earth.container.rotation.y -= options.earthRotation

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