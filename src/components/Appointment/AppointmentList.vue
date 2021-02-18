<template>

<div id="lsAppointment">
   <div class="row">
       <div class="col-2">
           <div class="form-group">
                <datepicker :format="format" v-model="form.formatDate"></datepicker>
            </div>
       </div>
          <div class="col-1">
          <button type="button" class="btn btn-primary" v-on:click="handleSearch(form.formatDate)">
              <i class="fas fa-search"></i>
          </button>
          </div>
           <div class="col-8" id="title">
           *Please select the date to search the appointment
            </div>
            <!-- <button type="button" class="btn btn-primary" @click="handleSearch">
                <i class="fas fa-search"></i>
            </button> -->
            <!-- <Search v-on:handle-search="handleSearch(this.form.formatDate)"/> -->
       
      
   </div>
  <div class="row"  v-if="renderComponent && paginatedItems">      
    <b-table name="myTable" striped hover :items="paginatedItems" :fields="fields" ref="selectableTable"
      selectable @row-selected="onRowSelected">
      <template #cell(Actions)="row">
        <b-button size="sm" @click="edit(row.index)" class="mr-2 btn bg-primary">
          Edit
        </b-button>
        <b-button size="sm" @click="Delete(row.index)" class="mr-2 btn bg-danger">
          Delete
        </b-button>

      </template>
    </b-table>
    <b-pagination v-if="paginatedItems && paginatedItems.length > 0"
      v-model="currentPage"
      :total-rows="items.length"
      :per-page="perPage"
      align="fill"
      size="sm"
      @change="onPageChanged"
    ></b-pagination>

  </div>
  <div class="row" v-else>
    <p>No appointment on this date. Thanks</p>
  </div>
</div>
</template>

<script>
import Datepicker from 'vuejs-datepicker';
import axios from 'axios'


export default {
   name: `AppointmentList`,
   data(){
       return {
        id: 0,
        currentPage: 1,
        perPage: 5,
        fields: ["id",{key:'Date',sortable:false}, {key:'Time',sortable: true}, {key:'Doctor',sortable:true},'Actions'],
        items: [],
        paginatedItems: this.items,
        rows: 10,
        renderComponent: true,
        format: "dd.MM.yyyy",       
        form: {
            formatDate: new Date(),
            date: "",
        },
        dentist: [],
        selected: [],
        action: '',
        index: 0
       }
   },
   mounted () {
    axios.get(`${process.env.VUE_APP_API_URL}/dentist`)
        .then((res) => {
            this.dentist = res.data
        })
        .catch((error) => {
            // error.response.status Check status code
            console.log(error)
        }).finally(() => {
            //Perform action in always
        });

    this.handleSearch(this.form.formatDate)  
  },
  methods:{
    onRowSelected(items) {
      debugger
       //this.id = items[0].id
       if(this.action == 'edit'){
        this.$router.push({ path: `/new-appointment/edit/${items[0].id}` })
       }
        if(this.action == 'delete'){
          this.deleteAppointment(items[0].id)
       }
    },
    edit(index){
      this.action = 'edit'
      this.$refs.selectableTable.clearSelected()
      this.$refs.selectableTable.selectRow(index)
    },
    Delete(index){
      this.action = 'delete'
      this.$refs.selectableTable.clearSelected()
      this.$refs.selectableTable.selectRow(index)
      this.index = index
      
    },
    deleteAppointment(id){
      let items = this.items
          axios.delete(`${process.env.VUE_APP_API_URL}/appointment/${id}`)      
                .then((res) => {
                    this.items = items.filter(x=>{
                        return x.id != id
                    })
                    this.paginatedItems.splice(this.index,1)
                    alert(res.data)                 
                })
                .catch((error) => {
                    // error.response.status Check status code
                    console.log(error)
                }).finally(() => {
                    //Perform action in always
                });
    },
    
    paginate(page_size, page_number) {
      let itemsToParse = this.items;
      this.paginatedItems = itemsToParse.slice(
        page_number * page_size,
        (page_number + 1) * page_size
      );
    },
    onPageChanged(page) {
      this.paginate(this.perPage, page - 1);
    },
    handleSearch(date){
        this.renderComponent = false;
        this.items = []
        this.paginatedItems = []
        
        this.form.date = date.toLocaleString('sv-SE').split(' ')[0]
        axios.get(`${process.env.VUE_APP_API_URL}/appointment/${this.form.date}`)      
                .then((res) => {
                  this.rows = res.data.length
                   this.formatResult(res)               
                })
                .catch((error) => {
                    // error.response.status Check status code
                    console.log(error)
                }).finally(() => {
                    //Perform action in always
                });
              },
    formatResult(res){
       if( res.data && res.data.length > 0) {
                this.renderComponent = true
                this.rows = this.items.length
                for (let i = 0; i <res.data.length; i++) {
                    const {date, time, dentistid} = res.data[i]
                    var localDate = new Date(date);
                    localDate = localDate.toLocaleString("de-DE").split(',')[0]
                    var doc = this.dentist.filter(x => {
                        return x.id == dentistid
                    })
                    if(doc && doc.length > 0){
                      this.items.push({id: res.data[i].id, Date: localDate , Time: time, Doctor: doc[0].name})    
                      this.paginate(this.perPage, 0)
                    }
                }                
                this.currentPage = 1
                this.items.sort()              
              }               
    }       
  },
  components: {
    Datepicker
  }
}
</script>


<style scoped>
    #lsAppointment{
        margin: 20px;
    }
</style>