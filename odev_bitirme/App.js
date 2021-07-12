
import { grey } from 'chalk';
import React, { Component } from 'react'
import { Text, View, StyleSheet,ImageBackground,SafeAreaView,Dimensions,Image } from 'react-native' //kullanılacak bileşenler import edildi
import ımageBg from './background.jpg' //arka plan resmi bir değişkene atandı
const windowWidth = Dimensions.get('window').width//ekranın genişlik değerini aldı
const windowHeight = Dimensions.get('window').height //ekranın yükseklik değerinin aldı

export default class DovizKurlari extends Component {
   // constructor oluşturuldu
    constructor(props) {
        super(props);
        this.state = {
            Kur: null,
        };
    };
    // ağdan veri çekmeyi tetiklemek için kullanılan kısım. componentDidMount() metodu bir kompenet aktif edildiğinde çalışır
    componentDidMount() {
        this.KurCek();
    }
    //döviz kuruna istek gönderilidği kısım
    KurCek = async () => {
        try {
            var self = this;
            const parseString = await require('react-native-xml2js').parseString;// xml formatından stringe çevriliyor
            const response = await fetch('https://www.tcmb.gov.tr/kurlar/today.xml'); //veri çekilecek web adresi ayarlanıyor
            let responseXml = await response.text();//gelen veri değişkene  atanıyor
            //veri çekme sırasında hata bu kısım çalışıyor.
            await parseString(responseXml, function (err, result) {
                self.setState({ Kur: result });
            });
 
        } catch (error) {
            console.log('fetch', err)
        }
    }
    render() {
        return (
          <ImageBackground source={ımageBg} style={styles.container}> //arka plan ayarlanıyor
            <SafeAreaView style={styles.baslık}>    //uygulama başlığı ve logosu için bir alan ayrılıyor
            <Image  /* uygulama logosu yüklendiği kısım*/
                style={styles.logo}
                source={require('./bayraklar/logo.jpg')}
            />
            // uygulama isminin yazıldığı kısım
            <Text style={styles.baslik_yazi}>
                ANLIK DÖVİZ
            </Text>
            </SafeAreaView>
            //SafeArea ile dolar için ülke bayraklarının ve döviz kuru bilgilerinin yazılacağı kısım ayarlandı
             <SafeAreaView style={styles.alan}>
             <Image /*ülke bayrağı bu kısımda çekiliyor */
                style={styles.ulkeler}
                source={require('./bayraklar/amerika.png')}
            />
            <Text style={styles.yazi}>
                DOLAR (USD/TRY)  
            </Text>
            //döviz kurundan istenilen veri filtreleniyor ve ekrana yazıyor.
            <Text style={styles.Doviz_satis}>SATIŞ :    {this.state.Kur != null ? this.state.Kur.Tarih_Date.Currency.filter(x => x.$.Kod == "USD")[0].ForexBuying[0] : 'veri yok'} </Text>
            <Text style={styles.Doviz_alis}>ALIŞ :      {this.state.Kur != null ? this.state.Kur.Tarih_Date.Currency.filter(x => x.$.Kod == "USD")[0].ForexSelling[0] : 'veri yok'} </Text>
            <Text style={styles.fiyat_yazi}> FİYATLAR</Text>
            </SafeAreaView> 

            //SafeArea ile euro için ülke bayraklarının ve döviz kuru bilgilerinin yazılacağı kısım ayarlandı
            <SafeAreaView style={styles.alan}>
            <Image
                style={styles.ulkeler}
                source={require('./bayraklar/almanya.png')}
            />
            <Text style={styles.yazi}>
                EURO (EUR/TRY)  
            </Text>
            //döviz kurundan istenilen veri filtreleniyor ve ekrana yazıyor.
            <Text style={styles.Doviz_satis}>SATIŞ :  {this.state.Kur != null ? this.state.Kur.Tarih_Date.Currency.filter(x => x.$.Kod == "EUR")[0].ForexBuying[0] : 'veri yok'} </Text>
            <Text style={styles.Doviz_alis}>ALIŞ :    {this.state.Kur != null ? this.state.Kur.Tarih_Date.Currency.filter(x => x.$.Kod == "EUR")[0].ForexSelling[0] : 'veri yok'} </Text>
            <Text style={styles.fiyat_yazi}> FİYATLAR</Text>
            </SafeAreaView>  

            //SafeArea ile sterlin için ülke bayraklarının ve döviz kuru bilgilerinin yazılacağı kısım ayarlandı
            <SafeAreaView style={styles.alan}>
            <Image
                style={styles.ulkeler}
                source={require('./bayraklar/ingiltere.png')}
            />
            <Text style={styles.yazi}>
                STERLİN (GBP/TRY)  
            </Text>
            //döviz kurundan istenilen veri filtreleniyor ve ekrana yazıyor.
            <Text style={styles.Doviz_satis}>SATIŞ :  {this.state.Kur != null ? this.state.Kur.Tarih_Date.Currency.filter(x => x.$.Kod == "GBP")[0].ForexBuying[0] : 'veri yok'} </Text>
            <Text style={styles.Doviz_alis}>ALIŞ :    {this.state.Kur != null ? this.state.Kur.Tarih_Date.Currency.filter(x => x.$.Kod == "GBP")[0].ForexSelling[0] : 'veri yok'} </Text>
            <Text style={styles.fiyat_yazi}> FİYATLAR</Text>
            </SafeAreaView>

            //SafeArea ile ruble için ülke bayraklarının ve döviz kuru bilgilerinin yazılacağı kısım ayarlandı
            <SafeAreaView style={styles.alan}>
            <Image
                style={styles.ulkeler}
                source={require('./bayraklar/rusya.png')}
            />
            <Text style={styles.yazi}>
                RUBLE (RUB/TRY)  
            </Text>
            //döviz kurundan istenilen veri filtreleniyor ve ekrana yazıyor.
            <Text style={styles.Doviz_satis}>SATIŞ :  {this.state.Kur != null ? this.state.Kur.Tarih_Date.Currency.filter(x => x.$.Kod == "RUB")[0].ForexBuying[0] : 'veri yok'} </Text>
            <Text style={styles.Doviz_alis}>ALIŞ :    {this.state.Kur != null ? this.state.Kur.Tarih_Date.Currency.filter(x => x.$.Kod == "RUB")[0].ForexSelling[0] : 'veri yok'} </Text>
            <Text style={styles.fiyat_yazi}> FİYATLAR</Text>
            </SafeAreaView> 

            //SafeArea ile yuan için ülke bayraklarının ve döviz kuru bilgilerinin yazılacağı kısım ayarlandı
            <SafeAreaView style={styles.alan}>
            <Image
                style={styles.ulkeler}
                source={require('./bayraklar/çin.png')}
            />
            <Text style={styles.yazi}>
                YUAN (CNY/TRY)  
            </Text>
            //döviz kurundan istenilen veri filtreleniyor ve ekrana yazıyor.
            <Text style={styles.Doviz_satis}>SATIŞ :  {this.state.Kur != null ? this.state.Kur.Tarih_Date.Currency.filter(x => x.$.Kod == "CNY")[0].ForexBuying[0] : 'veri yok'} </Text>
            <Text style={styles.Doviz_alis}>ALIŞ :    {this.state.Kur != null ? this.state.Kur.Tarih_Date.Currency.filter(x => x.$.Kod == "CNY")[0].ForexSelling[0] : 'veri yok'} </Text>
            <Text style={styles.fiyat_yazi}> FİYATLAR</Text>
            </SafeAreaView>  

            //SafeArea ile dinar için ülke bayraklarının ve döviz kuru bilgilerinin yazılacağı kısım ayarlandı
            <SafeAreaView style={styles.alan}>
            <Image
                style={styles.ulkeler}
                source={require('./bayraklar/kuveyt.png')}
            />
            <Text style={styles.yazi}>
                DİNAR (KWD/TRY)  
            </Text>
            //döviz kurundan istenilen veri filtreleniyor ve ekrana yazıyor.
            <Text style={styles.Doviz_satis}>SATIŞ :  {this.state.Kur != null ? this.state.Kur.Tarih_Date.Currency.filter(x => x.$.Kod == "KWD")[0].ForexBuying[0] : 'veri yok'} </Text>
            <Text style={styles.Doviz_alis}>ALIŞ :    {this.state.Kur != null ? this.state.Kur.Tarih_Date.Currency.filter(x => x.$.Kod == "KWD")[0].ForexSelling[0] : 'veri yok'} </Text>
            <Text style={styles.fiyat_yazi}> FİYATLAR</Text>
            </SafeAreaView>
          </ImageBackground>  
        )
    }
}

// bu kısımda yukarıdaki oluşturduğumuz bileşenlerin özelliklerini, konumlarını tanımladığımız kısım başlıyor
const styles = StyleSheet.create({
    container:{
        flex:1, //arkaplan resminin ekranın tamamını kapsaması için
    },

    //uygulama logosunun ve başlığına özellik verilen kısım
    baslık:{
    width:windowWidth, //uygulama başlığığına tanımlanan alanın genişliği ekran genişliğine eşitlendi
    height:100, // uygulama başlığının alanına 100  piksellik yükseklik verildi
    backgroundColor:'black', //uygulama başlığının olduğu kısmın arkaplanı siyah renk yapıldı
    marginBottom:20, // bulunduğu konumun alt kısmından 20px boşluk bırakıldı
    },
    //her bir döviz kurlarının sahip olduğu alanların özellikleri verilen kısım
    alan:{
        width:windowWidth, //ülke bayraklarının ve döviz bilgilerinin olduğu alanın boyutu kullanılan cihaz boyutuna eşitlendi
        height:100, // yüksekli 100px verildi
        backgroundColor:'grey',  
        opacity:0.8, //oluşturulan alana saydamlık verildi
        marginBottom:10,
    },
//uygulama logosunun yükseklik ve genişliğinin ayarlandığı kısım
    logo:{
        width:150,
        height:100,
    },
    //uygulama başlığına özellik verildiği kısım
    baslik_yazi:{
        
        fontSize:35,// 35px yazı fontu verildi
        color:'white',
        position:'absolute',
        marginLeft:windowWidth/2-60,
        marginTop:20,

    },
    //ülke bayraklarına özellik verildiği kısım
    ulkeler:{
        width:80,
        height:80,
        marginTop:10,
        marginLeft:10,
    },
    //ülkelerinin para birimlerinin yazıldığı yazıya verilen özellikler
    yazi:{
        fontSize:windowWidth/23,
        fontWeight:'bold',
        color:'white',
        position:'absolute',
        marginTop:30,
        marginLeft:100,
    },
    // Fiyatlar yazan yazıya verilen özellikler
    fiyat_yazi:{
        fontSize:15,
        fontWeight:'bold', //yazıya kalınlık eklendi
        color:'black',
        position:'absolute',
        marginLeft:windowWidth-90,

    },
    // alış yazan yazıya verilen özellikler
    Doviz_alis:{
        position:'absolute',
        marginLeft:windowWidth-120,
        marginTop:30,
        fontWeight:'bold',
        fontSize:windowWidth/25,
    },
    // satış yazan yazıya verilen özellikler
    Doviz_satis:{
        position:'absolute',
        marginLeft:windowWidth-120,
        marginTop:50,
        fontWeight:'bold',
        fontSize:windowWidth/25,
    }
    

})

