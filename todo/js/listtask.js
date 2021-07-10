function Listtask() {
    this.arr = [];
}

Listtask.prototype.addTask = function (task) {
    this.arr.push(task);
};

Listtask.prototype._findIndex = function (id) {
    return this.arr.findIndex(function (task) {
      return id === task.id;
    });
};

Listtask.prototype.deleteTask = function (id) {
    var index = this._findIndex(id);
    if (index !== -1) {
      this.arr.splice(index, 1);
    }
};

Listtask.prototype.changeStatus = function (id, status){
    this.arr = this.arr.map((task)=>{
        if(task.id == id){
            if(task.status == "todo" ){
                task.status = "complete"
            }else{
                task.status = "todo"
            }
        }
        
        return task
    })
}
  