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

# Setting up Testing in out App
- Installed Recat Testing Library
- Installed Jest
- Installed babel dependancy (from jest official webside under - using babel section)
- Configure babel (babel.config.js)
- Configure parcel config file to disable default babel transpilation
- Jest configuration 
    run command "npx jest --init"
    Would you like to use Typescript for the configuration file? ... no
    √ Choose the test environment that will be used for testing » jsdom (browser-like)
    √ Do you want Jest to add coverage reports? ... yes
    √ Which provider should be used to instrument code for coverage? » babel
    √ Automatically clear mock calls, instances, contexts and results before every test? ... yes

    It will create the jest.config file after completion

- Install jsdom library (if v>28)
- Install @babel/preset-react (To make JSX work in test cases)
- Include @babel/preset-react inside babel config
- Install @testing-library/jest-dom (All the assertion methods come from this library)



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