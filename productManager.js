class ProductManager{

    #precioBaseDeGanancia;

    constructor(){
        this.products =[];
        this.newIdentifier=0;
    }

 

    getProducts = () =>{
        return this.products;
    }

 

    addProducts = (title, price, stock, barcode, thumbnail, description) =>{
        if (title ||price ||stock|| barcode||thumbnail||description) {
            console.log('All fields are required');
        }   else{
            const barCodeRepeated = this.products.find((product) => product.barcode === barcode);
            if (barCodeRepeated) {
                console.log(`barcode: ${barcode} already exists`);
            } else{
        const product = {
            id: this.generateId()+1,
            title: title,
            price: price+ this.#precioBaseDeGanancia,
            stock: stock,
            barcode: barcode,
            thumbnail: thumbnail,
            description: description,
        }
        this.products.push(product);
            }}
    }
    generateId() {
        return this.newIdentifier
    }
 

   getProductById = (searchId) =>{
    const search = this.products.find(idproducts => idproducts.id === searchId);
    if (search) {
        console.log(search)
    }else{
        console.log("No product found");
    }
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