# Namaste React
- repo: https://github.com/sapnarai27/react-repo

# Parcel (parcel is doing these below things for application)
# https://parceljs.org/ (documentation)
- Dev Build
- Local Server
- HMR - Hot Module Replacement ( replacing ui if we are making any change in code)
- File watching algorithm - written in c++ (keep watching change in all the files)
- Caching - Faster Builds
- Image Optimazion
- Minification of files for prod build
- Bundling the files
- Compressing files (removing white space from files)
- Consitant hashing 
- Code splitting
- Differencial Bundling (To support older browsers)
- Diagnosting
- Error handling
- Give way to host app on https
- Tree Shaking Algorithm  (remove unused code from app)
- Diffrent for dev and prod bundles
- 


How console will be called in class based components
/* 
How lifecycle method are called

====== Mounting Phase =======
parent contructor
parent render
child 1 constructor
child 1 render
child 2 constructor
child 2 render
child 1 componentDidMount
child 2 componentDidMount
parent componentDidMount

======= Updating Phase ===============
child 1 render
child 2 render
Child 1 componentDidUpdate
Child 2 componentDidUpdate

======== Unmounting phase ============
Child 1 componentWillUnmount
Child 2 componentWillUnmount

*/