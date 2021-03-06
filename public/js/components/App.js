class App extends React.Component {

    state = {
        whatToShow: 0
    }

    componentDidMount() {
        // fetch('https://acastore.herokuapp.com/products')
        //     .then((response) => {
        //         return response.json();
        //     })
        //     .then((data) => {

        //     });
    }

    changeView = (view) => {
        // this.setState({whatToShow:view});
        this.setState(() => {
            return { whatToShow: view }
        })
    }
    // addItemToCart = (product) => {
    //     this.setState((state, props) => {
    //         this.state.shoppingCart.push(product);
    //         return { shoppingCart: this.state.shoppingCart }
    //     })
    // }
    render() {
        let content = null;

        if (this.state.whatToShow === 0) {
            content = <ProductList />
        } else {
            content = <ShoppingCart />
        }
        return (
            <Layout

                changeView={this.changeView} >
                {content}
            </Layout>
        );
    }
}

// App.propTypes = {
//     products: PropTypes.string
// };