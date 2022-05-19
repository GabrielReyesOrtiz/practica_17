var mongoose = require("mongoose");
require("dotenv").config();
//Aqui usamos mongoose y hacemos la conexion colocando el link que nos da nuestra base de datos en el mongodb atlas
(async () => {
  try {
   // conexion con MOngoDB Atlas el link lleva nuestro usuario y contraseña 
   //Colocar nuestra contraseña ya que el link no la trae por defecto
    const db = await mongoose.connect(
      "mongodb+srv://greyes17:Soysoyucol15@cluster0.ivf9j.mongodb.net/?retryWrites=true&w=majority",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    //Este mensaje nos indica que la base de datos si se conecto correctamente
    console.log("La Base de datos esta conectada", db.connection.host);
    //Y si no pues nos manda este error
  } catch (error) {
    console.error(error);
  }
})();