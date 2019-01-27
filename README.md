# Around the world
> Mini Earth in 3D using three.js

## Technologies
- [Parcel](https://parceljs.org/)
- [Three.js](https://threejs.org//)
- [OrbitControls](https://www.npmjs.com/package/three-orbit-controls)
- [OBJLoader](https://www.npmjs.com/package/three-obj-mtl-loader), [MTLLoader](https://www.npmjs.com/package/three-obj-mtl-loader)

## Setup
Download [Node.js](https://nodejs.org/en/download/).
Run this followed commands:

``` bash
# Just be sure that you've got parcel js on you system
npm install -g parcel-bundler

# Install dependencies (only for first time)
npm i

# Serve at localhost:8080
npm run dev

# Build for production in the dist/ directory
npm run build
```

## Features
- The planet earth in a minimalist version based on a 3d model
- You can adjust the speed and rotation of the elements using the Dat Gui panel

## Controls
- Hold and slide on the planet to rotate it
- Scroll to zoom in

## Author
- Code By [Manolo Pecout](https://www.manolopecout.fr)
- 3D Models By [Google Poly](https://poly.google.com/)