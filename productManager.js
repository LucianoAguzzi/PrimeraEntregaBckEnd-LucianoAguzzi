const fs = require('fs');

class ProductManager{

    #precioBaseDeGanancia;
    newIdentifier = 0;

    constructor(path, precioBaseDeGanancia){
        this.products = this.loadProducts();
        this.#precioBaseDeGanancia = precioBaseDeGanancia;
        this.path=path;
        this.products= this.getProducts();
    }

    loadProducts() {
        try {
          const data = fs.readFileSync(this.path, 'utf8');
          return JSON.parse(data);
        } catch (error) {
          console.error('Error al cargar los productos:', error);
          return {};
        }
      }
    
      saveProducts() {
        try {
          const data = JSON.stringify(this.products, null, 2);
          fs.writeFileSync(this.path, data, 'utf8');
        } catch (error) {
          console.error('Error al guardar los productos:', error);
        }
      }

    getProducts = () =>{
      const products = fs.readFileSync('./products.json');
      return JSON.parse(products);
    }

 

    addProducts = (title, price, stock, barcode, thumbnail, description) =>{
        if (!title ||!price ||!stock|| !barcode||!thumbnail||!description) {
            console.log('All fields are required');
        }   else{
            const barCodeRepeated = this.products.find((product) => product.barcode === barcode);
            if (barCodeRepeated) {
                console.log(`barcode: ${barcode} already exists`);
              } else {
                let maxId = 0;
                this.products.forEach((product) => {
                    if (product.id > maxId) {
                        maxId = product.id;
                    }
                });
        const product = {
            id: this.products.reduce((maxId, product) => Math.max(maxId, product.id), 0) + 1,
            title: title,
            price: price+ this.#precioBaseDeGanancia,
            stock: stock,
            barcode: barcode,
            thumbnail: thumbnail,
            description: description,
        }
        const id = this.getNextId();
        const newProduct = {...product,id}
        this.products.push(newProduct);
        this.saveProducts();
            }}
    }
    generateId() {
      this.newIdentifier += 1;
      return this.newIdentifier;
  }
  updateProduct = (productId, updatedFields) => {
    const productIndex = this.products.findIndex(product => product.id === productId)
    if (productIndex !== -1) {
      const updatedProduct = { ...this.products[productIndex], ...updatedFields };
      this.products[productIndex] = updatedProduct;
      
      fs.writeFileSync(this.filename, JSON.stringify(this.products));
      console.log(`Product with id ${productId} updated successfully.`);
    } else {
      console.log(`Product with id ${productId} not found.`);
    }
  };
  deleteProduct(id) {
    const products = this.getProducts();

    const index = products.findIndex((product) => product.id === id);
    if (index !== -1) {
      products.splice(index, 1);
      fs.writeFileSync('./products.json', JSON.stringify(products));
      console.log(`Product with id ${id} has been deleted.`);
    } else {
      console.log(`Product with id ${id} not found.`);
    }
  }
}
module.exports = Products;

   getProductById = (searchId) =>{
    const search = this.products.find(idproducts => idproducts.id === searchId);
    if (search) {
        return(search)
    }else{
        console.log("No product found");
    }
    }



const getProducts = new ProductManager();
console.log(getProducts.products);

getProducts.addProducts ("Cap", 50, 3, "https://www.sansabacap.com/wp-content/uploads/2018/08/112FP_final.jpg",12315465,"A trucker cap", 1)
getProducts.addProducts ("Shirt", 60, 8, "https://cdnb.lystit.com/photos/a43d-2013/12/13/21men-red-classic-fit-gingham-shirt-product-1-16147452-3-439533888-normal.jpeg",45674646,"A cool shirt", 2)
getProducts.addProducts ("Trainers", 80, 5, "https://cdnb.lystit.com/photos/7aeb-2015/08/04/saint-laurent-gold-high-top-trainers-product-4-706704768-normal.jpeg",34564565,"An awesome trainers ", 3)
getProducts.addProducts ("Trousers", 20, 31,  "https://images.esellerpro.com/3522/I/541/763/965907491_10.jpg",56456456,"An all purpouse trainers", 4)
getProducts.addProducts ("Coat", 500, 20, "https://scale.coolshop-cdn.com/product-media.coolshop-cdn.com/AC5HB2/4912e458744a48009e60a99c3ae219f2.jpg/f/new-us-navy-style-vintage-wool-winter-pea-coat.jpg",64564345,"A coat to look like a gentlemen", 15)
getProducts.addProducts ("Scarf", 650, 33,  "https://yourstylejourney.files.wordpress.com/2014/11/burberry.jpg",56456456,"An ideal scarf for cold places", 6)

console.log(getProducts.products);
getProducts.getProductById()

