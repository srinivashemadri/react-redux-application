import { connect } from 'react-redux';
import ProductList from '../../components/product-list/product-list';
import { getProducts } from '../../ducks/product';

const mapStateToProps = (state, props) => {
    return {
        products: getProducts(state, props)
    }
}

export default connect(mapStateToProps)(ProductList);