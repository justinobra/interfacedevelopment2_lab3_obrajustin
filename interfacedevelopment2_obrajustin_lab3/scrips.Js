function validateForm() {
    
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
  
    
    if (username === "") {
      console.log("Form submission failed: Please enter a username");
      return false;
    } else if (!/^[a-zA-Z0-9]+$/.test(username)) {
      console.log("Form submission failed: Username must contain only letters and numbers");
      return false;
    }
  
    
    if (email === "") {
      console.log("Form submission failed: Please enter an email address");
      return false;
    } else if (email.indexOf("@") === -1) {
      console.log("Form submission failed: Email must contain an @ character");
      return false;
    }
  
    
    if (password === "") {
      console.log("Form submission failed: Please enter a password");
      return false;
    } else if (password.length < 8) {
      console.log("Form submission failed: Password must be at least 8 characters long");
      return false;
    }
  
    
    console.log("Form submitted successfully");
    return true;
  }
  

  const products = ["Product A", "Product B", "Product C", "Product D", "Product E", "Product F", "Product G", "Product H", "Product I", "Product J"];

  
  const searchInput = document.getElementById("search-input");
  const productList = document.getElementById("product-list");

  
  function updateProductList() {
    
    const query = searchInput.value;
    
    const matchingProducts = searchProducts(query);
    
    productList.innerHTML = "";
    
    for (let i = 0; i < matchingProducts.length; i++) {
      const product = matchingProducts[i];
      const listItem = document.createElement("li");
      listItem.textContent = product;
      productList.appendChild(listItem);
    }
  }
  console.log(searchInput)
  
  searchInput.addEventListener("change", updateProductList);

  
  function searchProducts(query) {
    
    const matchingProducts = products.filter(function(product) {
      
      const productName = product.toLowerCase();
      const queryLowercase = query.toLowerCase();
      
      return productName.includes(queryLowercase);
    });
    
    return matchingProducts;
  }

  updateProductList();