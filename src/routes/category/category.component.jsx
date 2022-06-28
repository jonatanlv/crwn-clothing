import { useContext, useState, useEffect, Fragment } from "react";
import { useParams } from "react-router-dom";
import { CategoriesContext } from "../../contexts/categories.context";
import ProductCard from "../../components/product-card/product-card.component";

import { gql, useQuery } from "@apollo/client";

import "./category.styles.scss";
import Spinner from "../../components/spinner/spinner.component";

const GET_CATEGORY = gql`
  query ($title: String!) {
    getCollectionsByTitle(title: $title) {
      id
      title
      items {
        id
        name
        price
        imageUrl
      }
    }
  }
`;

const Category = () => {
  const { category } = useParams();

  const { loading, error, data } = useQuery(GET_CATEGORY, {
    variables: { title: category },
  });

  useEffect(() => {
    if (!data) return;
    const {
      getCollectionsByTitle: { items },
    } = data;

    setProducts(items);
  }, [category, data]);

  const [products, setProducts] = useState([]);

  return (
    <Fragment>
      {loading ? (
        <Spinner />
      ) : (
        <Fragment>
          <h2 className="category-title">{category.toUpperCase()}</h2>
          <div className="category-container">
            {products &&
              products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default Category;
