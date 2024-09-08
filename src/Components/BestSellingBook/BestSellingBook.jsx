// Import BestSellingBook CSS.......................................
import './BestSellingBook.css'

// Import Title Props...............................................
import TitleTypeTwo from '../../UI/TitleTypeTwo/TitleTypeTwo'

// Import Tree Shape 
import TreeShape from '../../assets/treeShape.png'

// Import Selling Books Data........................................
import { sellingBooksData } from '../../Data/Data'

// Import Link from React Router....................................
import { Link } from 'react-router-dom'

// Import React Icon................................................
import { BsArrowRight } from 'react-icons/bs'

export default function BestSellingBook() {
  return (
    <section className='BestSellingBook'> 
        {/*....................Selling Book Tree Shape.................*/}
        <div className="treeShape">
            <img src={TreeShape} alt="" />
        </div>

        {/*....................Selling Book Content....................*/}
            {
                sellingBooksData.map(({img, infoTitle, infoTitleTop, desc, price, shopbtnLink}) => {
                    return (
                        <div className="container bestselling-container">
                            {/*..................Left.....................*/}
                            <div className="selling-book-left">
                                <img src={img} alt="" />
                            </div>

                            {/*..................Right....................*/}
                            <div className="selling-book-right">
                                <TitleTypeTwo Title={'Best selling book'} ClassName='sellingBookTitle' />
                                <div><small>{infoTitleTop}</small></div>
                                <h3>{infoTitle}</h3>
                                <p>{desc}</p>
                                <h5><span>{price}</span></h5>
                                <Link to={shopbtnLink} className='btn'>
                                    <small>Shop it now</small>
                                    <BsArrowRight />
                                </Link>
                            </div>
                        </div>
                    )
                })
            }

    </section>
  )
}
