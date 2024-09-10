document.getElementById("addproduct").addEventListener("click", (e) => {
      e.preventDefault();
      let productname = document.getElementById("productname");
      let productquantity = document.getElementById("productquantity");  
      let productprice = document.getElementById("productprice");
      let total = productquantity.value * productprice.value;
     
      let table = document.getElementById("productdata");
      let newrow = table.insertRow(table.rows.length);
      let productnamedata = newrow.insertCell(0);
      let productquantitydata = newrow.insertCell(1);
      let productpricedata = newrow.insertCell(2); 
      let Totaldata = newrow.insertCell(3);
      let remove = newrow.insertCell(4);
      productnamedata.innerHTML = productname.value;
      productquantitydata.innerHTML = productquantity.value;
      productpricedata.innerHTML = productprice.value; 
      console.log(productname.value)
      Totaldata.innerHTML = total;
      remove.innerHTML = "<button onclick={removefunction(this)} class='btn btn-primary'>Remove</button>";
    });
    
function removefunction(rowdata) {
  let rowdataview = rowdata.parentNode.parentNode;
  rowdataview.parentNode.removeChild(rowdataview)
}

function generatingpdf(){
  let tableclone = document.getElementById("formtable").cloneNode(true);
  let tableclonerowsandcolumn = tableclone.outerHTML;
  var invoiceWindow = window.open('', '_blank');
  invoiceWindow.document.write('<head><style>');
  invoiceWindow.document.write('body { font-family: Arial, sans-serif; }');
  invoiceWindow.document.write('table { border-collapse: collapse; width: 100%; margin-bottom: 20px; }');
  invoiceWindow.document.write('th, td { border: 1px solid #ddd; padding: 8px; text-align: left; }');
  invoiceWindow.document.write('th { background-color: #f2f2f2; }');
  invoiceWindow.document.write('#totalAmount { font-weight: bold; }');
  invoiceWindow.document.write('#invoiceTitle { text-align: center; font-size: 24px; margin-bottom: 20px; }');
  invoiceWindow.document.write('</style>');
  invoiceWindow.document.write('</head><body>');
  invoiceWindow.document.write('<h2 id="invoiceTitle">Invoice</h2>');
  invoiceWindow.document.write('</body>');
  invoiceWindow.document.write(tableclonerowsandcolumn);
  
  invoiceWindow.document.close();
  invoiceWindow.print();
}