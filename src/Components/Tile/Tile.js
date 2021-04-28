import style from './Tile.module.css';
import {Link} from 'react-router-dom';

const Tile = ({id,title,rating,reviews}) => {
    return (
    <Link to={`/detail/${id}`} className={style.link}>    
        <div className={style.tile}> 
            <h3 title="tile-heading3">{title}</h3>
            <div className={style.stars} style={{ "--rating": rating }}/>
            <p>{`${reviews} reviews`}</p>
        </div>
    </Link>)
}

export default Tile;