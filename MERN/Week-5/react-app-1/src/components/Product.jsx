function Product(props) {  //{ props :{productObj :{}}}
    const {productObj} = props; //destructuring
    // console.log(props.productObj);
  //state
  //return react element
  return(
    <div className="border-2 rounded-2xl p-4 shadow-xl shadow-indigo-800">
        <h2 className="text-xl font-bold text-blue-500">{productObj.title}</h2>
        <p className="text-lg">{productObj.description}</p>
        <p className="text-sm font-semibold">${productObj.price.toFixed(2)}</p>
    </div>
  );
}

export default Product;