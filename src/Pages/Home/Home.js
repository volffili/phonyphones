import Tile from '../../Components/Tile/Tile';
import mockedPhones from '../../Mock';
import style from './Home.module.css';
import Filter from '../../Components/Filter/Filter';
import {useState} from 'react';

const Home = () => {
    const [searchTerm, setSearchTerm] = useState(''); 
    const [isAndroidChecked, setAndroid] = useState(true); 
    const [isIOSChecked, setIOS] = useState(true); 

    const osCheck = (os,osName) => os.toLowerCase().includes(osName)

    const getPhones = () => {
        let result = mockedPhones.filter(({title}) => title.toLowerCase().includes(searchTerm.toLowerCase()));
        result = result.filter(({os}) => (isAndroidChecked && osCheck(os,'android')) || (isIOSChecked && osCheck(os,'ios')));
        return result;
    }
    
    return (<>
        <div>
            <Filter setSearchTerm={setSearchTerm}/>
        </div>
        <div className={style.checkdiv}>
            <input className={style.checkbox} 
            type="checkbox" 
            id="android" 
            name="android" 
            value="android" 
            checked={isAndroidChecked}
            onChange={()=>setAndroid(!isAndroidChecked)} />
            <label htmlFor="android">Android</label>

            <input className={style.checkbox} 
            type="checkbox" 
            id="ios" 
            name="ios" 
            value="ios"             
            checked={isIOSChecked}
            onChange={()=>setIOS(!isIOSChecked)}/>
            <label htmlFor="ios">iOS</label>
        </div>
        <div className={style.content}>
            {getPhones().map(phoneInfo => <Tile key={phoneInfo.id} {...phoneInfo}/>)}
        </div>
    </>)
}

export default Home;