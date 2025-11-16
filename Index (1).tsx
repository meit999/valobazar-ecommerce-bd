import Navbar from "@/components/Navbar";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroBanner from "@/assets/hero-banner.jpg";
import product1 from "@/assets/product-1.jpg";
import product2 from "@/assets/product-2.jpg";
import product3 from "@/assets/product-3.jpg";

const Index = () => {
  const featuredProducts = [
    {
      id: 1,
      name: "Premium Black Blazer",
      price: 4999,
      category: "Men's Fashion",
      image: product1,
    },
    {
      id: 2,
      name: "Classic White Shirt",
      price: 1999,
      category: "Men's Fashion",
      image: product2,
    },
    {
      id: 3,
      name: "Tailored Black Trousers",
      price: 2999,
      category: "Men's Fashion",
      image: product3,
    },
    {
      id: 4,
      name: "Elegant Formal Suit",
      price: 8999,
      category: "Men's Fashion",
      image: product1,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[70vh] md:h-[85vh] overflow-hidden">
        <img
          src={heroBanner}
          alt="Fashion Hero"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent" />
        <div className="relative container-custom h-full flex items-center">
          <div className="max-w-xl space-y-6">
            <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tighter">
              NEW SEASON
              <br />
              COLLECTION
            </h1>
            <p className="text-lg text-white/90 max-w-md">
              Discover the latest trends in fashion. Premium quality, timeless
              style.
            </p>
            <Button size="lg" className="group">
              SHOP NOW
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                Featured Products
              </h2>
              <p className="text-muted-foreground mt-2">
                Curated collection of our best sellers
              </p>
            </div>
            <Button variant="ghost" className="hidden md:flex">
              View All <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>

          <div className="mt-8 text-center md:hidden">
            <Button variant="outline" className="w-full sm:w-auto">
              View All Products
            </Button>
          </div>
        </div>
      </section>

      {/* Category Showcase */}
      <section className="py-16 bg-muted">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-center mb-12">
            Shop by Category
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {["Men", "Women", "Kids"].map((category) => (
              <div
                key={category}
                className="group relative aspect-[3/4] overflow-hidden cursor-pointer"
              >
                <div className="absolute inset-0 bg-accent" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <h3 className="text-4xl font-bold text-primary-foreground tracking-tight group-hover:scale-110 transition-transform duration-300">
                    {category.toUpperCase()}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-12">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">VALOBAZAR</h3>
              <p className="text-sm text-background/80">
                Premium fashion for every occasion. Quality you can trust.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Shop</h4>
              <ul className="space-y-2 text-sm text-background/80">
                <li>Men</li>
                <li>Women</li>
                <li>Kids</li>
                <li>Accessories</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-sm text-background/80">
                <li>Contact Us</li>
                <li>Shipping</li>
                <li>Returns</li>
                <li>FAQ</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-background/80">
                <li>About Us</li>
                <li>Careers</li>
                <li>Store Locator</li>
                <li>POS System</li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-background/20 text-center text-sm text-background/60">
            © 2024 VALOBAZAR. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
