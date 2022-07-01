import { StyleSheet, Text } from 'react-native';

export default function Dolar(props) {
	return (
	  <>
	  <Text style={styles.cabecalho}>Cotação do Dolar em tempo real</Text>      
	    <Text style={styles.text}> variação: {props.data.varBid}</Text>
	  </>
  );
}
const styles = StyleSheet.create({
    cabecalho:{
    color:'#9520D8',
    fontSize:20,
    marginTop:10,
    },
	text:{
		color:'#9520D8',
		fontSize:20,
	  	textAlign:'center',
		marginTop:10
	}
});