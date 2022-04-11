import './App.css';
import Button from './components/Button/Button';
import HelloWorld from './components/HelloWorld/HelloWorld';
import Post from './components/Post/Post';

function App() {
  return (
    <div className='container mx-auto'>
      <Button name='First Button'/>
      <Button name='Second Button'/>
      <HelloWorld text='Hello World Good Morning'/>
      <HelloWorld text='Hello World Good Night'/>
      <Post />
    </div>
  );
}

export default App;
