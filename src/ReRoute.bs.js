// Generated by ReScript, PLEASE EDIT WITH CARE

import * as Curry from "bs-platform/lib/es6/curry.mjs";
import * as React from "react";
import * as ReasonReactRouter from "./ReasonReactRouter.bs.js";

function CreateRouter(Config) {
  var ReRoute$CreateRouter$Container = function (Props) {
    var children = Props.children;
    var match = React.useReducer((function (_state, action) {
            return action._0;
          }), Curry._1(Config.routeFromUrl, ReasonReactRouter.dangerouslyGetInitialUrl(undefined, undefined)));
    var dispatch = match[1];
    React.useEffect((function () {
            var watcherID = ReasonReactRouter.watchUrl(function (url) {
                  return Curry._1(dispatch, /* ChangeRoute */{
                              _0: Curry._1(Config.routeFromUrl, url)
                            });
                });
            return (function (param) {
                      return ReasonReactRouter.unwatchUrl(watcherID);
                    });
          }), []);
    return Curry._1(children, match[0]);
  };
  var Container = {
    make: ReRoute$CreateRouter$Container
  };
  var ReRoute$CreateRouter$Link = function (Props) {
    var route = Props.route;
    var children = Props.children;
    var href = Curry._1(Config.routeToUrl, route);
    return React.createElement("a", {
                href: href,
                onClick: (function ($$event) {
                    $$event.preventDefault();
                    return ReasonReactRouter.push(href);
                  })
              }, children);
  };
  var Link = {
    make: ReRoute$CreateRouter$Link
  };
  return {
          Container: Container,
          Link: Link
        };
}

export {
  CreateRouter ,
  
}
/* react Not a pure module */