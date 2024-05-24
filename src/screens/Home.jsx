import Menu from '../components/Menu';
import CarouselSlider from '../components/Carousel';
import WhatsAppButton from '../components/Form';
import PlanoMensalidade from '../components/Plan';
import './Home.css';
import History from '../components/History';
import Footer from '../components/Footer';
import Map from '../components/Map';

export default function Home(){
  return(
    <div>
      <Menu/>
      <WhatsAppButton/>
      <div>
        <CarouselSlider />
      </div>
      <div>
        <History/>
      </div>
      <h2 className='titulo'>Escolha o melhor plano para o seu treino</h2>
      <div className='coluna'>
      <PlanoMensalidade 
        titulo= 'Mensal'
        preco= 'R$119,90'
        descricao= 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero, a phare'
      />   
      <PlanoMensalidade 
        titulo= 'Trimestral'
        preco= 'R$89,90'
        descricao= 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero, a phare'
      />
        </div>
        <Map/>
        
      <Footer/>
    </div>
  )
}