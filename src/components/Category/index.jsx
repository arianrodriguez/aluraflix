import './Category.css'

const Category = (props) => {
    return <div style={{backgroundColor: props.color}} className='category'>
        {props.title}
    </div>
}

export default Category