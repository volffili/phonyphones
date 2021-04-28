import {Link} from 'react-router-dom';
import style from './NotFound.module.css';

const NotFound = () => (
    <div className="content">
        <div>
            <p>Page not found</p>
            <p>
                <cite>Solve it before it happens. Order it before chaos emerges.</cite> (Tao Te Ching chapter 64)
            </p>
            <p><Link to={'/'} className={style.link}>Go to homepage</Link></p>
        </div>
    </div>
)

export default NotFound;
