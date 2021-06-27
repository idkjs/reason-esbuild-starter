// Generated by ReScript, PLEASE EDIT WITH CARE


function routeFromUrl(url) {
  var match = url.path;
  if (match) {
    if (match.hd === "admin" && !match.tl) {
      return /* Admin */0;
    } else {
      return /* NotFound */2;
    }
  } else {
    return /* Home */1;
  }
}

function routeToUrl(route) {
  switch (route) {
    case /* Admin */0 :
        return "/admin";
    case /* Home */1 :
        return "/";
    case /* NotFound */2 :
        return "";
    
  }
}

export {
  routeFromUrl ,
  routeToUrl ,
  
}
/* No side effect */