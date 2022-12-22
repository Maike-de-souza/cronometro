import React, { Component } from 'react';
import { View, StyleSheet, Image, Text, TouchableOpacity } from 'react-native';

 class cronometroVersao2 extends Component {


    constructor(props){
      super(props);
      this.state={
        numero:0,
        botao:"Iniciar",
        ultimoTempo:null
      }
      this.timer = null//Varival do timer relogio
      this.iniciar = this.iniciar.bind(this)
      this.parar = this.parar.bind(this)
    }
    
    iniciar(){

      if(this.timer !=null){//verificando

                clearInterval(this.timer)//Parando o timer

                this.timer = null//Voltando pra null

                this.setState({
                  botao:"Iniciar"
                })

      }else{
            this.timer = setInterval(()=>{
              this.setState({
                numero : this.state.numero + 0.1,
                botao:"Pausar"
              })
            },100)
      }

     

    }

    parar(){

      if(this.timer !=null){//verificando
            clearInterval(this.timer)//Parando o timer
            this.timer = null//Voltando pra null
      }
        this.setState({
          botao:"Iniciar",
          numero:0
        })

        if(this.state.numero > 0){
          this.setState({
            ultimoTempo:"Ultimo tempo: "+this.state.numero.toFixed(2) + "S"
          })
        }


    }
    render(){
        return (
            <View style={styles.container}>
              
                  <Image source={require("./src/cronometro.png")} style={styles.imagem}/>
                  <Text style={styles.tempoTexto}>
                    {this.state.numero.toFixed(1)}
                  </Text>

                  <View style={styles.containerBotoes}>
                        <TouchableOpacity style={styles.botoes} onPress={this.iniciar}>
                            <View style={styles.estiloBotoes}>
                                <Text style={styles.textoBt}>
                                  {this.state.botao}
                                </Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.botoes} onPress={this.parar}>
                            <View style={styles.estiloBotoes}>
                                <Text style={styles.textoBt}>
                                  Limpar
                                </Text>
                            </View>
                        </TouchableOpacity>
                  </View>

                  <Text style={styles.ultimoT}>
                     
                        { this.state.ultimoTempo}
                  </Text>
                  

            </View>
        );
    }
}

export default cronometroVersao2;

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"#222",
    alignItems:"center",
    justifyContent:"center"
  },
  imagem:{
    height:250,
    width:200
  },
  containerBotoes:{
    flexDirection:"row",
    justifyContent:"center",
    alignItems:"center",
    margin:20

  },
  botoes:{
    flex:1,
    height:40,
    margin:12,
    borderWidth:2,
    borderColor:"#fff",
    borderRadius:9,
    marginTop:90,
    backgroundColor:"#fff"
  },
  estiloBotoes:{
    flex:1,
    alignItems:"center",
    justifyContent:"center",
    
  },
  textoBt:{
    color:"#222",
    fontSize:15,
    fontWeight:"bold"
  },
  tempoTexto:{
    color:"#fff",
    fontSize:70,
    marginTop:-160
  },
  ultimoT:{
    color:"#fff",
    fontSize:20,
    margin:5
  }
})