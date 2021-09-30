import React from 'react';
import '../styles/App.css';
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import { Component } from 'react';
import Cookies from 'universal-cookie'
const cookies = new Cookies();


const url = "https://backend2-1.jennymontoya100.repl.co/api/Carros/";

class App extends Component {

  //Almacenamiento de la data
  state = {
    data: [],
    modalInsertar: false,
    modalEliminar: false,
     form:{
       id: '',
       PLACA: '',
       MARCA: '',
       MODELO: '',
       USUARIO: '',
       tipoModal: ''
     }
  }

  //Funciones
  componentDidMount() {
      this.peticionesGet();
  }

  modalInsertar=()=>{
    this.setState({modalInsertar: !this.state.modalInsertar})
  }

  handleChange= async e=>{
    e.persist();
    await this.setState({
      form:{
        ...this.state.form,
        [e.target.name]: e.target.value
      }
    })
    console.log(this.state.form)
  }

  seleccionarCarro=(carros)=>{
    this.setState({
      tipoModal: 'actualizar',
      form:{
        id: carros.id,
        PLACA: carros.PLACA,
        MARCA: carros.MARCA,
        MODELO: carros.MODELO,
        USUARIO: carros.USUARIO
      }
    })
  }



  //Peticiones
  //GET
  peticionesGet = () => {
    axios(url).then(response => {
      this.setState({ data: response.data })
    }).catch(error => {
      console.log(error.message);
    })
  }

  //POST
  peticionesPost=async()=>{
    await axios.post(url,this.state.form).then(response=>{
      this.modalInsertar();
      this.peticionesGet();
    }).catch(error => {
      console.log(error.message);
    })
  }

  //PUT
  peticionesPut=()=>{
    axios.put(url+this.state.form.id, this.state.form).then(response=>{
      this.modalInsertar();
      this.peticionesGet();
    }).catch(error => {
      console.log(error.message);
    })
  }

  //DELETE
  peticionesDelete=()=>{
    axios.delete(url+this.state.form.id).then(response=>{
      this.setState({modalEliminar: false});
      this.peticionesGet();
    }).catch(error => {
      console.log(error.message);
    })
  }

  render() {
  


    
    const {form} =this.state;
    return (
      <div className="App">
        <br />
        <button className="btn btn-success" onClick={()=>{this.setState({form: null, tipoModal:'insertar'});this.modalInsertar()}}>Agregar Carro</button>
      
        <br /><br />
        <table className="table">
          <thead>
            <tr>
              <th>id</th>
              <th>PLACA</th>
              <th>MARCA</th>
              <th>MODELO</th>
              <th>USUARIO</th>
              <th>OPERACIONES</th>
            </tr>
          </thead>
          <tbody>
            {this.state.data.map(carros => {
              return (
                <tr>
                  <td>{carros.id}</td>
                  <td>{carros.PLACA}</td>
                  <td>{carros.MARCA}</td>
                  <td>{carros.MODELO}</td>
                  <td>{carros.USUARIO}</td>
                  <td>
                    <button className="btn btn-primary" onClick={()=>{this.seleccionarCarro(carros);this.modalInsertar()}}><FontAwesomeIcon icon={faEdit} /></button>
                    <button className="btn btn-danger" onClick={()=>{this.seleccionarCarro(carros); this.setState({modalEliminar: true})}}><FontAwesomeIcon icon={faTrashAlt} /></button>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
        <Modal isOpen={this.state.modalInsertar}> 
           <h1>Carros</h1>
           <ModalHeader style={{display: 'block'}}>
           <span style={{float: 'right'}}></span>
           </ModalHeader>
           <ModalBody>
             <div className="form-group">
               <label htmlFor="id">id</label>
               <input className="form-control" type="text" name="id" id="id" readOnly onChange={this.handleChange} value={form?form.id: this.state.data.length+1}></input>
               <label htmlFor="PLACA">PLACA</label>
               <input className="form-control" type="text" name="PLACA" id="PLACA" onChange={this.handleChange} value={form?form.PLACA: ''}></input>
               <label htmlFor="MARCA">MARCA</label>
               <input className="form-control" type="text" name="MARCA" id="MARCA" onChange={this.handleChange} value={form?form.MARCA: ''}></input>
               <label htmlFor="MODELO">MODELO</label>
               <input className="form-control" type="text" name="MODELO" id="MODELO" onChange={this.handleChange} value={form?form.MODELO: ''}></input>
               <label htmlFor="id">USUARIO</label>
               <input className="form-control" type="text" name="USUARIO" id="USUARIO" onChange={this.handleChange} value={form?form.USUARIO: ''}></input>
             </div>
           </ModalBody>
           <ModalFooter>
             {this.state.tipoModal==='insertar'}
             <button className="btn btn-success" onClick={()=>this.peticionesPost()}>Insertar</button>
             <button className="btn btn-primary" onClick={()=>this.peticionesPut()}>Actualizar</button>
             <button className="btn btn-danger" onClick={()=>this.modalInsertar()}>Cancelar</button>
             
           </ModalFooter>
        </Modal>
        <Modal isOpen={this.state.modalEliminar}>
          <ModalBody>
            Está seguro de eliminar el carro con placa {form && form.PLACA}
          </ModalBody>
          <ModalFooter>
            <button className="btn btn-danger" onClick={()=>this.peticionesDelete()}>Sí</button>
            <button className="btn btn-secundary" onClick={()=>this.setState({modalEliminar: false})}>No</button>
          </ModalFooter>
        </Modal>
      </div>  
    );
  }
}

export default App;
