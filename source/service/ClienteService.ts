class ClienteService {
    
    constructor() {}
    
    getClientes(){
       return this.loadData()
    }
    
    getCliente(id: Number){
        var clientes = this.loadData()
        for (var i = 0; i < clientes.length; i++) {
            if(clientes[i].clienteId == id){
                return clientes[i]
            }
        }
    }
    
    loadData(){
        var fs = require('fs');
        try {
          const data = fs.readFileSync('./data/clientes.json', 'utf8')
          var obj = JSON.parse(data)
          return obj.clientes
        } catch (err) {
          console.error(err)
        }
    }
}

module.exports = ClienteService;