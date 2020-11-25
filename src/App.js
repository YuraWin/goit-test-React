import Painting from './components/Painting';
import paintings from './paintings.json';


export default function App() {
  return (
    <div>
      <Painting
        imageUrl={paintings[0].url}
        title={paintings[0].title}
        author={paintings[0].author.tag}
        profileUrl={paintings[0].author.url}
        price={paintings[0].price}
      /> 
     
    </div>)
}