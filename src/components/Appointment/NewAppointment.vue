<template>
 <layout-default>
     <div id="newAppoint">
     <h4 v-if="this.appointmendId == 0">New appointment</h4>
     <h4 v-else>
         Edit appointment
     </h4>  
    <form v-on:submit.prevent="submitForm">
            <div class="form-group">
                <label for="exampleFormControlInput1">Date</label>
                <datepicker :format="format" v-model="form.formatDate"></datepicker>
            </div>
            <div class="form-group">
                <div><label for="exampleFormControlInput2">Time</label></div>
                <vue-timepicker format="HH:mm" v-model="form.time"></vue-timepicker>
            </div>

            <div class="form-group">
                <label for="exampleFormControlSelect3">Dentist</label>
                <select class="form-control" id="exampleFormControlSelect3" v-model="form.dentistid" required>
                <option v-bind:key="dentist.id" :value="dentist.id"  v-for="dentist in this.dentist" >
                    {{dentist.name}}
                </option>    
                </select>
            </div>
            <div class="form-group">
                <label for="exampleFormControlSelect4">Equipment</label>
                <select class="form-control" id="exampleFormControlSelect4" v-model="form.equipmentid" required>
                <option value=1>Compressor</option>
                <option value=2>Suction machine</option>
                <option value=3>Scanner</option>
                <option value=4>Hygiene equipment</option>
                </select>
            </div>
            <div class="form-group">
                <label for="exampleFormControlTextarea5">Notes</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" v-model="form.notes"></textarea>
            </div>
            <button @click.prevent="goBack" class="btn bg-primary m-2">Cancel</button>
            <button type="submit" class="btn bg-primary">Save</button>
    </form>
    </div>
 </layout-default>
</template>

<script>

import LayoutDefault from '../../layouts/LayoutDefault'
import Datepicker from 'vuejs-datepicker';
import VueTimepicker from 'vue2-timepicker'
import axios from 'axios';
// CSS
import 'vue2-timepicker/dist/VueTimepicker.css'

export default {
   name: `NewAppointment`,
   data(){
       return {
        format: "dd.MM.yyyy",
        date: "",
        dentist: [],
        appointmendId: 0,
        form: {
            formatDate: new Date(),
            date: '',
            time: '00:00',
            technicianid: 0,
            dentistid: 0,
            equipmentid: 0,
            notes: ''
        }
       
    }
   },
   mounted () {
       if(this.$route.params.id){
           this.appointmendId = this.$route.params.id
            axios.get(`${process.env.VUE_APP_API_URL}/appointment/getAppointment/${this.appointmendId}`)
            .then((res) => {
                if(res.data[0]){
                    const {date, time, technicianid, dentistid, equipmentid, notes } = res.data[0]
                    this.form.time = time
                    this.form.technicianid = technicianid
                    this.form.dentistid = dentistid
                    this.form.equipmentid = equipmentid
                    this.form.notes = notes
                    this.form.formatDate = date
                }
                this.appointment = res.data
            })
            .catch((error) => {
                // error.response.status Check status code
                alert(error)
            }).finally(() => {
                //Perform action in always
            });
        }
    axios.get(`${process.env.VUE_APP_API_URL}/dentist`)
        .then((res) => {
            this.dentist = res.data
        })
        .catch((error) => {
            // error.response.status Check status code
            alert(error)
        }).finally(() => {
            //Perform action in always
        });

  },
   methods:{
       resetForm() {
         this.form.formatDate= new Date()        
        this.form.time = '00:00'
        this.form.dentistid= 0
        this.form.equipmentid= 0
        this.form.notes= ''
        },    
       goBack(){
           this.$router.replace({ name: "home" });
       },
        submitForm(){
            if(this.appointmendId > 0) {
                var localDate = new Date(this.form.formatDate)
                this.form.date = localDate.toLocaleString('sv-SE').split(' ')[0]
                axios.put(`${process.env.VUE_APP_API_URL}/appointment/${this.appointmendId}`, this.form)
                    .then((res) => {
                        //Perform Success Action
                        alert(res.data)
                    })
                    .catch((error) => {
                        // error.response.status Check status code
                        alert(error)
                    }).finally(() => {
                        //Perform action in always
                    });
            }
            else{
                this.form.technicianid = localStorage.getItem('id')
                this.form.date = this.form.formatDate.toLocaleString('sv-SE').split(' ')[0]
                axios.post(`${process.env.VUE_APP_API_URL}/appointment`, this.form)
                    .then((res) => {
                        //Perform Success Action
                        this.resetForm()
                        alert(res.data)
                    })
                    .catch((error) => {
                        // error.response.status Check status code
                        alert(error)
                    }).finally(() => {
                        //Perform action in always
                    });
                }            
        }
},
   components: {
    LayoutDefault,
    Datepicker,
    VueTimepicker
  }
}
</script>


<style scoped>
  #newAppoint{
      margin: 20px;
  }
  h4 {
      text-align: left;
      margin-bottom: 20px;
  }
</style>