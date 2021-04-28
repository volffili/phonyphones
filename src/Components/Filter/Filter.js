import style from './Filter.module.css';

const Filter = ({setSearchTerm}) => (
    <div>
        <input title="search" className={style.filter} type="text" placeholder="Search... " onChange={event => setSearchTerm(event.target.value)}/>
        <div>
            {/*<input className={style.checkbox} type="checkbox" id="ios" name="ios"/>
            <input className={style.checkbox} type="checkbox" id="android" name="android"/>*/}
        </div>
    </div>)

export default Filter;