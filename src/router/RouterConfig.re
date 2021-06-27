   type route =
      | Admin
      | Home
      | NotFound;
    let routeFromUrl = (url: ReasonReactRouter.url) =>
      switch (url.path) {
      | ["admin"] => Admin
      | [] => Home
      | _ => NotFound
      };
    let routeToUrl = (route: route) =>
      switch (route) {
      | Admin => "/admin"
      | Home => "/"
      | NotFound => ""
      };
