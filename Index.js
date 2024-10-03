       
       {/* <div id="parent">
         <div id='child1'>
            <h1>I am an h1 tag</h1>
            <h2>I am an h2 tag</h2>
         </div>
         <div id='child2'>
            <h1>I am an h1 tag</h1>
            <h2>I am an h2 tag</h2>
         </div>
       </div> */}
       
        const component = React.createElement('div', {id: "parent"},[
            React.createElement('div', {id: 'child1'},[
                React.createElement('h1', {}, 'I am an h1 tag'),
                React.createElement('h2', {}, 'I am an h2 tag')
            ]),
            React.createElement('div', {id: 'child2'},[
                React.createElement('h1', {}, 'I am an h1 tag'),
                React.createElement('h2', {}, 'I am an h2 tag')
            ]),
        ]);

        //React works inside this root only
        //We can create a root for any part of application. it can be header, footer, drawer etc or it can be whole application
        const root = ReactDOM.createRoot(document.getElementById("root"));
        root.render(component);