fetch("https://reqres.in/api/users") //!Mandasmo como parametro la url de la api
  .then((resp) => resp.json()) //?convetrimos resp a tipo JSON y lo retornamos
  .then(
    (
      respObj //? respObj es nuestro resp pero en tipo JSON
    ) => {
      //*Accedemos a las colecciones que hay en nuestra api
      console.log(respObj);
      console.log(respObj.page);
      console.log(respObj.per_page);
      console.log(respObj.data);
    }
  );
