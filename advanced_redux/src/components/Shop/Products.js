import ProductItem from './ProductItem';
import classes from './Products.module.css';

const DummyProducts = [
  {
    id: 'p1',
    price: 6,
    title: 'My First Book',
    description: 'The first book i ever wrote'
  },
  {
    id: 'p2',
    price: 5,
    title: 'My Second Book',
    description: 'The Second book i ever wrote'
  }
]
const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {
          DummyProducts.map((products) => {
            return(
              <ProductItem 
              key={products.id}
              id={products.id}
              title={products.title}
              price={products.price}
              description={products.description}
            />
            )
          })
        }
      </ul>
    </section>
  );
};

export default Products;
