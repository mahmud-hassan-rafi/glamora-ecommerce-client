import express from "express";
import mongoose from "mongoose";
import cors from "cors";

main().catch((err) =>
  console.log("database connection denied for", err.message)
);

const app = express();
app.use(cors());
app.use(
  cors({
    origin: "http://localhost:3000",
    methods: ["GET", "POST", "PATCH", "PUT", "DELETE"],
  })
);
app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

const productSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  category: { type: String },
  price: { type: Number, required: true },
  discountPercentage: { type: Number },
  rating: { type: Number },
  stock: { type: Number, required: true },
  tags: [{ type: String }],
  brand: { type: String },
  sku: { type: String },
  weight: { type: Number },
  dimensions: {
    width: { type: Number },
    height: { type: Number },
    depth: { type: Number },
  },
  warrantyInformation: { type: String },
  shippingInformation: { type: String },
  availabilityStatus: { type: String },
  reviews: [
    {
      rating: { type: Number },
      comment: { type: String },
      date: { type: Date },
      reviewerName: { type: String },
      reviewerEmail: { type: String },
    },
  ],
  returnPolicy: { type: String },
  minimumOrderQuantity: { type: Number },
  meta: {
    createdAt: { type: Date },
    updatedAt: { type: Date },
    barcode: { type: Number },
    qrCode: { type: String },
  },
  images: [{ type: String, required: true }],
  thumbnail: { type: String, required: true },
});

const Product = new mongoose.model("Product", productSchema);

// routing
app.get("/api/products", async (req, res) => {
  const products = await Product.find();
  res.json(products);
});

// database connection
async function main() {
  await mongoose.connect(
    "mongodb://rafi:rafi@127.0.0.1:27017/rupbari?authSource=admin"
  );
  console.log("database connected");
}

// server listening
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
