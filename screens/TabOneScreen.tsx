import { StyleSheet,ScrollView,Image } from 'react-native';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import {LinearGradient} from 'expo-linear-gradient';

export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
  return (
    <View style={styles.container}>
      <View style={styles.slider}>
        <View style={styles.bank}>
        <Text style={styles.title1}>bank cards</Text>
        </View>
        <View style={styles.virtual}>
        <Text style={styles.title}>virtual cards</Text>
        </View>
      </View>
      <ScrollView style={styles.scrollView}>
        <View style={styles.mycard}>
          <Text style={styles.title2}>My Cards</Text>
          <View style={styles.plus}>
            <Text style={styles.t}>+</Text>
          </View>
        </View>
        <LinearGradient start={{x: -0.7, y: 0.75}} end={{x: 1, y: 0.25}} colors={['#F28C28', '#ff1493','#ee82ee', '#b0c4de','#afeeee',]} style={styles.card}>
        <Image style={styles.img}source={require('../assets/images/logo-m.png')} />
        
        <Text style={styles.title3}>Sifuna Donnex</Text>
        <Text style={styles.title4}>** 942</Text>
        <Text style={styles.title5}>$2049</Text>
        
        </LinearGradient>
        <LinearGradient start={{x: -0.7, y: 0.75}} end={{x: 1, y: 0.25}} colors={['purple', '#9932cc','#9370db',]} style={styles.card}>
        <Image style={styles.img}source={require('../assets/images/logo-m.png')} />
        <Text style={styles.title3}>Lyann Mary</Text>
        <Text style={styles.title4}>** 459</Text>
        <Text style={styles.title5}>$4509</Text>
        </LinearGradient>
        <LinearGradient start={{x: -0.7, y: 0.75}} end={{x: 1, y: 0.25}} colors={['#679267', '#3cb371','#77dd77', '#addfad','#ace1af',]} style={styles.card}>
        <Image style={styles.img}source={require('../assets/images/logo-m.png')} />
        <Text style={styles.title3}>Mendel Mate</Text>
        <Text style={styles.title4}>** 456</Text>
        <Text style={styles.title5}>$2409</Text>
        </LinearGradient>
      </ScrollView>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    
  },
  title: {
    fontSize: 15,
    color:'purple',
  },
  title1: {
    fontSize: 15,
    color:'#fff',
  },
  slider: {
    width: '90%',
    height:40,
    borderWidth:2,
    borderColor:'grey',
    borderRadius:20,
    display:'flex',
    flexDirection:'row',
  },
  bank: {
    width:'55%',
    height:'100%',
    backgroundColor:'purple',
    borderRadius:20,
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    margin:0,
    padding:0,
  },
  virtual: {
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    marginLeft:20,
  },
  mycard: {
    width: '80%',
    height:40,
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-between',
    marginTop:20,
    overflow:'hidden',
  },
  title2: {
    fontSize: 20,
    color:'#000',
    fontWeight:'bold',
  },
  plus: {
    width: '13%',
    height:40,
    borderWidth:2,
    borderColor:'grey',
    borderRadius:13,
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    alignContent:'center',
    overflow:'hidden',
  },
  t:{
    fontSize:28,
    alignItems:'center',
    justifyContent:'center',
    margin:0,
    padding:0,
    color:'purple',
  },
  card: {
    width: '80%',
    height:180,
    borderRadius:20,
    display:'flex',
    flexDirection:'row',
    marginTop:20,
  },
  scrollView: {
    marginHorizontal: 20,
  },
  img:{
    width: 50,
    height: 40,
    marginLeft:'80%',
    marginTop:10,
  },
  title3: {
    position:'absolute',
    fontSize: 15,
    color:'#fff',
    marginTop:100,
    fontWeight:'bold',
    marginLeft:30,
  },
  title4: {
    fontSize: 15,
    color:'#fff',
    position:'absolute',
    marginTop:130,
    marginLeft:30,
    fontWeight:'bold',
  },
  title5: {
    fontSize: 15,
    color:'#fff',
    position:'absolute',
    marginTop:130,
    marginLeft:'80%',
    fontWeight:'bold',
  },
  
});
