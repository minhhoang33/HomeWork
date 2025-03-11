
// Danh sách các sản phẩm có trong giỏ hàng
let products = [
  { name: "Iphone 13 Pro Max", price: 3000000, brand: "Apple", count: 2 },
  {
    name: "Samsung Galaxy Z Fold3",
    price: 41000000,
    brand: "Samsung",
    count: 1,
  },
  { name: "IPhone 11", price: 15500000, brand: "Apple", count: 1 },
  { name: "OPPO Find X3 Pro", price: 19500000, brand: "OPPO", count: 3 },
];

// 1. In ra thông tin các sản phẩm trong giỏ hàng
console.log("Danh sách sản phẩm trong giỏ hàng:");
products.forEach((p) => {
  console.log(`${p.name} - ${p.price} - ${p.brand} - ${p.count}`);
});

// 2. Tính tổng tiền tất cả sản phẩm trong giỏ hàng
let totalCost = products.reduce((sum, p) => sum + p.price * p.count, 0);
console.log("Tổng tiền giỏ hàng:", totalCost);

// 3. Tìm các sản phẩm của thương hiệu "Apple"
let appleProducts = products.filter((p) => p.brand === "Apple");
console.log("Sản phẩm thương hiệu Apple:", appleProducts);

// 4. Tìm các sản phẩm có giá > 20000000
let expensiveProducts = products.filter((p) => p.price > 20000000);
console.log("Sản phẩm có giá > 20000000:", expensiveProducts);

// 5. Tìm các sản phẩm có chữ "pro" trong tên (không phân biệt hoa thường)
let proProducts = products.filter((p) => p.name.toLowerCase().includes("pro"));
console.log("Sản phẩm có chữ 'pro' trong tên:", proProducts);

// 6. Thêm 1 sản phẩm bất kỳ vào trong mảng products
products.push({
  name: "Xiaomi Mi 11",
  price: 12000000,
  brand: "Xiaomi",
  count: 2,
});
console.log("Giỏ hàng sau khi thêm sản phẩm mới:", products);

// 7. Xóa tất cả sản phẩm của thương hiệu "Samsung"
products = products.filter((p) => p.brand !== "Samsung");
console.log("Giỏ hàng sau khi xóa sản phẩm Samsung:", products);

// 8. Sắp xếp giỏ hàng theo price tăng dần
products.sort((a, b) => a.price - b.price);
console.log("Giỏ hàng sau khi sắp xếp theo giá tăng dần:", products);

// 9. Sắp xếp giỏ hàng theo count giảm dần
products.sort((a, b) => b.count - a.count);
console.log("Giỏ hàng sau khi sắp xếp theo số lượng giảm dần:", products);

// 10. Lấy ra 2 sản phẩm bất kỳ trong giỏ hàng
let randomProducts = products.sort(() => 0.5 - Math.random()).slice(0, 2);
console.log("Hai sản phẩm bất kỳ:", randomProducts);
