export const error404 = (req, res)=>{
    // Mostrando productos en memoria
    res.render('404', { 
      docTitle:"ERROR 404"
    });
  }