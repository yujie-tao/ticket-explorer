var API_ROOT = "http://comp426.cs.unc.edu:3001/api/";

/**
 * RESTful Resources
 */
export class AjaxUtils{

  static index(
      resouce, data,
      succuss_fn = _DefaultSuccessFn("index"),
      error_fn = _DefaultErrorFn("index")){

    $.ajax({
      type: "GET",
      url: API_ROOT + resouce,
      xhrFields: {
        withCredentials: true
      },
      data: data,
      success: succuss_fn,
      error: error_fn
    });
  }

  static create(
      resouce, data,
      succuss_fn = _DefaultSuccessFn("create"),
      error_fn = _DefaultErrorFn("create")){

    $.ajax({
      type: "POST",
      url: API_ROOT + resouce,
      xhrFields: {
        withCredentials: true
      },
      data: data,
      success: succuss_fn,
      error: error_fn
    });
  }

  static read(
      resouce, id, data,
      succuss_fn = _DefaultSuccessFn("read"),
      error_fn = _DefaultErrorFn("read")){

    $.ajax({
      type: "GET",
      url: `${API_ROOT}${resouce}/:${id}`,
      xhrFields: {
        withCredentials: true
      },
      data: data,
      success: succuss_fn,
      error: error_fn
    });
  }

  static update(
      resouce, id, data,
      succuss_fn = _DefaultSuccessFn("update"),
      error_fn = _DefaultErrorFn("update")){

    $.ajax({
      type: "PUT",
      url: `${API_ROOT}${resouce}/:${id}`,
      xhrFields: {
        withCredentials: true
      },
      data: data,
      success: succuss_fn,
      error: error_fn
    });
  }

  static delete(
      resouce, id=null,
      succuss_fn = _DefaultSuccessFn("delete"),
      error_fn = _DefaultErrorFn("delete")){

    if(id === null){
      let url = `${API_ROOT}${resouce}/:${id}`;
    } else {
      let url = API_ROOT + resouce;
    }

    $.ajax({
      type: "DELETE",
      url: url,
      xhrFields: {
        withCredentials: true
      },
      data: data,
      success: succuss_fn,
      error: error_fn
    });
  }
}



function _DefaultSuccessFn(tag){
  function successFn(response){
    console.log(`${tag} Success`);
  }
  return successFn
}

function _DefaultErrorFn(tag){
  function ErrorFn(response){
    console.log(`${tag}} Error`);
  }
  return successFn
}
