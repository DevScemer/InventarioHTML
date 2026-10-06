class Inventario{
  constructor(){
   this._productos = [];
  }

  agregar(producto){
    this._productos.push(producto);
  }
  buscar(codigo){
    for(let i=0; i<this._productos.length;i++){
      if(this._productos[i].codigo == codigo){
        return this._productos[i];
      }
    }
    
    return null;
  }
  
  eliminar(codigo){
    let indice = -1;
    for(let i=0; i<this._productos.length;i++){
      if(this._productos[i].codigo == codigo){
        indice = i;
        break;
      }
    }
    if (indice != -1) {
      for(let i=indice; i<this._productos.length-1; i++){
        this._productos[i] = this._productos[i+1];
      }
      this._productos.pop();
    }
  }
  insertar(producto,posicion){
    for(let i=this._productos.length-1; i>=posicion-1;i--){
      this._productos[i+1]=this._productos[i];
    }
    this._productos[posicion-1] = producto;
  }
    
  listar(){
    let listado = "";
    for(let i=0; i<this._productos.length;i++){
      listado += this._productos[i].infoHTML();
    }
    return listado;
  }

  listarInverso(){
    let listado = "";
    for(let i=this._productos.length-1; i>=0; i--){
      listado += this._productos[i].infoHTML();
    }
    return listado;
  }

  extraerPrimero(){
    let primerProducto = this._productos[0];
    this.eliminar(primerProducto.codigo);
    return primerProducto;
  }
  agregarInicio(producto){
    this.insertar(producto,1);
  }
}