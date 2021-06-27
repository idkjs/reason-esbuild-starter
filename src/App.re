[%raw {|require ('./App.css')|}];
module App = {
  open Router;
  open RouterConfig;
  [@react.component]
  let make = () => {
    <Router.Container>
      ...{(~currentRoute) =>
        <div>
          <ul>
            <h3> {React.string("Menu")} </h3>
            <Router.Link route=Home>
              <li> {React.string("Home")} </li>
            </Router.Link>
            <Router.Link route=Admin>
              <li> {React.string("Admin")} </li>
            </Router.Link>
          </ul>
          {switch (currentRoute) {
           | RouterConfig.Admin => <Admin />
           | RouterConfig.Home => <Home />
           | RouterConfig.NotFound => <NotFound />
           }}
        </div>
      }
    </Router.Container>;
  };
};
switch (ReactDOM.querySelector("#root")) {
| Some(root) => ReactDOM.render(<App />, root)
| None => Js.log("Couldn't find #root element to mount the React app.")
};
