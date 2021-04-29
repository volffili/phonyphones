import style from './Detail.module.css';
import mockedPhones from '../../Mock';
import {Link} from 'react-router-dom';

const Detail = ({match}) => {
    let phone = mockedPhones[match.params.id] || {};
    return (<>
        <div className={style.content}>
            <h3>{phone.title}</h3>
            <p className={style.attrib}>{phone.os}</p>
            <p className={style.attrib}>{phone.cpu}</p>
            <p className={style.attrib}>{phone.display}</p>
            <a href={phone.shopurl} target="_blank">Go to shop!</a>
            <img src={phone.img} className={style.img}/>
            <Link to={'/'} className={style.link}>Go back</Link>
        </div>
    </>)
}

export default Detail;
