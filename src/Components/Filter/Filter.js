import style from './Filter.module.css';

const Filter = ({setSearchTerm}) => (
    <div>
        <input title="search" className={style.filter} type="text" placeholder="Search... " onChange={event => setSearchTerm(event.target.value)}/>
    </div>)

export default Filter;