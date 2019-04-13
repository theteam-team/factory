<template>
  <v-container fluid grid-list-md>

    <v-layout row warp>
      <v-flex  d-flex xs12 sm4 md6 >

         <v-container fluid>
           <v-layout row>
             <v-flex xs12>
               <v-flex xs8 offset-xs2>
                 <v-card  class="grey darken-1">
                   <v-container>
                     <v-layout  wrap justify-space-around align-center>

                         <div style="font-size:25px">
                           <v-avatar  color="yellow" >
                             <v-icon x-large dark>account_circle</v-icon>
                           </v-avatar>
                           {{ name }}
                         </div>

                    </v-layout>
                  </v-container>
                 </v-card>
               </v-flex>
               <v-layout row warp>
                   <v-flex xs12 sm4 md8  >
                    <img src="./qrcode.png" style="margin:30px; padding-left:150px">
                  </v-flex>
               </v-layout>
               <v-flex xs12  >
                 <br>
                 <div style="font-size:25px;" >-ID: {{ id }} </div>
                 <div style="font-size:25px;" >-Location1: {{ location1 }}</div>
                 <div style="font-size:25px;" >-Location2: {{ location2 }}</div>
                 <br>
                 <p style="font-size:25px;" >Product information:</p>
                 <div style="font-size:25px;">-Red balls: {{ red }}</div>
                 <div style="font-size:25px;" >-Green balls: {{ green }}</div>
                 <div style="font-size:25px;" >-Yellow balls: {{ yellow }}</div>
                 <div style="font-size:25px;" >-Orange balls: {{ orange }}</div>

              </v-flex>
             </v-flex>
           </v-layout>
         </v-container>

      </v-flex>



      <v-flex d-flex xs6>
            <v-layout row wrap>



                  <v-flex d-flex xs12 offset-xs0>
                    <v-card>
                      <v-flex d-flex xs12 offset-xs3>
                            <div style="font-size:25px">
                              <v-avatar x-large >
                               <img src="./gear.svg">
                              </v-avatar> factory modules
                            </div>
                      </v-flex>
                    </v-card>
                  </v-flex>


                  <v-flex d-flex xs12>
                    <v-card>
                      <v-container>
                        <v-layout>
                          <v-flex xs12>
                            <v-flex xs6  >
                              <v-card  class="grey darken-1">
                                <v-container>
                                  <v-layout  >
                                      <h1>sorting machine</h1>
                                 </v-layout>
                               </v-container>
                              </v-card>
                            </v-flex>
                           <img src="./m3.png" style="padding:20px; margin-left:250px">
                           <h2 style="margin-left:200px">loading...</h2>
                           <v-progress-linear
                             color="warning"
                             height="15"
                             value="60"
                            ></v-progress-linear>
                          </v-flex>
                        </v-layout>
                      </v-container>
                    </v-card>
                  </v-flex>


             <v-flex d-flex xs12>
               <v-card>
                 <v-container>
                   <v-layout>
                     <v-flex xs12>
                    <v-card-title><h1>collecting order</h1></v-card-title>

                      <img src="./conveyor.png" style="padding:20px; margin-left:250px">
                      <h2 style="margin-left:200px">loading...</h2>
                      <v-progress-linear
                        color="warning"
                        height="15"
                        value="60"
                       ></v-progress-linear>
                     </v-flex>
                   </v-layout>
                 </v-container>
               </v-card>
             </v-flex>


          </v-layout>


      </v-flex>


    </v-layout>
  </v-container>
</template>

<script>
import firebase from 'firebase';

import mixin from './mixin'

  export default {
      mixins:[mixin],
    data () {
      return {
        valueDeterminate: 50,
      }
    },

  }
</script>
