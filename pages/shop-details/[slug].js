import React, {Fragment, useEffect, useState} from 'react';
import { useRouter } from 'next/router'
import { connect } from "react-redux";
import NavbarS2 from '../../components/NavbarS2/NavbarS2';
import PageTitle from '../../components/pagetitle/PageTitle'
import CtaSectionS2 from '../../components/CtaSectionS2/CtaSectionS2';
import FooterS3 from '../../components/footerS3/FooterS3';
import CursorMaus from '../../components/CursorMaus/CursorMaus';
import { addToCart } from "../../store/actions/action";
import Product from './product'
import api from "../../api";
import ProductTabs from './alltab';



const ProductSinglePage =(props) => {
  

    const router = useRouter()

    const productsArray = api();
    const Allproduct = productsArray

    const { addToCart } = props;

    const initialProducts = Allproduct.filter(prod => prod.slug === router.query.slug);
    const [product, setProduct] = useState(initialProducts);

    useEffect(() => {
        setProduct(Allproduct.filter(prod => prod.slug === router.query.slug));
      }, [Allproduct, router.query.slug]);

    const item = product[0];



    return(
        <Fragment>
            <NavbarS2 hclass={'header-section-2 style-two'} />
            <PageTitle pageTitle={'Digital printing Service'} pagesub={'Product Single'}/> 
            <section className="product-details-section section-padding section-bg-2">
                <div className="container">
                    <div className="product-details-wrapper">
                        {item ? <Product
                            item={item}
                            addToCart={addToCart}
                        /> : null}
                        <ProductTabs />
                    </div>
                </div>
            </section>
            <CtaSectionS2 />
            <FooterS3 />
            <CursorMaus />
        </Fragment>
    )
};

const mapStateToProps = state => {
    return {
        products: state.data.products,
    }
};

export default connect(mapStateToProps, { addToCart })(ProductSinglePage);