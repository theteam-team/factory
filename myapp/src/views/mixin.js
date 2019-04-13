

 export default{
   data(){
     return{
       name:'',
        id:'',
        sorting:true,
        collecting:true,
        status:'',
        Done:'',
        location1:'',
        location2:'',
        red:'',
        green:'',
        yellow:'',
        orange:'',
        idForOrder:1,
        orders:[
          {
            'name':'menna essam',
            'id':1
          },
          {
            'name':'ahmed',
            'id':2
          }
        ],
     }
   },
   methods:{
    showDetails(index){

      this.name=this.orders[index].name;
      this.id=this.orders[index].id;
       this.location1=this.orders[index].location1;
      this.location2=this.orders[index].location2;
      this.red=this.orders[index].red;
      this.green=this.orders[index].green;
      this.orange=this.orders[index].orange;
      this.yellow=this.orders[index].yellow;
       
    },
    removeOrder(index){
      this.orders.splice(index, 1)
    },

  }
 }
