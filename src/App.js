import React from 'react';
import './bootstrap.css';

// solo lo del html y css pude ;(
  // ya con el js me daba un chingasal de errores ;''c
 



 

function App(){
  return(
    <React.Fragment>

    <div class="container">
      <br></br>
      
      <div class="jumbotron">
            <h1>Registro de laboratorio.</h1>
      </div>
      <div className="form-group">
                <label for="carnet" className="col-sm-2 col-form-label">Ingrese el carnet: </label>
                
                <input className="form-control" type="text" name="carnet" id="carnet_field"></input>
      </div>

      <div className="form-group">
                <label for="schedule">Seleccione el horario:</label>
                <select className="schedule" class="form-control" id="schedule_field">
                    <option>Lunes de 9:00 a 11.00</option>
                    <option>Martes de 13:30 a 15:30</option>
                    <option>Miércoles de 9:00 a 11.00</option>
                    <option>Jueves de 13:30 a 15:30</option>
                    <option>Viernes de 9:00 a 11.00</option>
                    <option>Viernes de 15:30 a 17:30</option>
                </select>
      </div>

      <div className="form-group">
                <div className="custom-control custom-switch">
                    <input type="checkbox" className="custom-control-input" id="late_switch"></input>
                    <label class="custom-control-label" for="late_switch">Llegó tarde?</label>
                </div>
      </div>

      <div className="form-group">
                <button type="button" class="btn btn-danger" id="submit_btn">Ingresar</button>
      </div>

    
    <hr></hr>

    <section>
            <table className="table table-hover">
                <thead>
                    <tr className="table-dark">
                        <th scope="col">Carnet</th>
                        <th scope="col">Horario de laboratorio</th>
                        <th scope="col">Hora de ingreso</th>
                        <th scope="col">Tarde?</th>
                        <th scope="col">Opcion</th>
                        <th scope="col">Confirmacion</th>

                    </tr>
                </thead>
                <tbody id="table_body">

                </tbody>
            </table>
        </section>

        </div>



     
    </React.Fragment>

  );
}





export default App;
