import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useLocation } from "wouter";
import { Search, MapPin, Bed, Bath, Wifi, Heart, LogOut, CheckCircle } from "lucide-react";
import { useState } from "react";

export default function SeekerHome() {
  const [, navigate] = useLocation();
  const [searchQuery, setSearchQuery] = useState("");
  const [favorites, setFavorites] = useState<Set<number>>(new Set());

  const properties = [
    {
      id: 1,
      title: "Cozy Studio Near Campus",
      price: 45000,
      location: "Barikin Ladi, Nasarawa",
      beds: 1,
      baths: 1,
      wifi: true,
      verified: true,
      agent: { name: "Chidi Okonkwo", phone: "+2348012345678" },
      rating: 4.8,
    },
    {
      id: 2,
      title: "Modern 2-Bedroom Apartment",
      price: 75000,
      location: "Keffi Town Center",
      beds: 2,
      baths: 1,
      wifi: true,
      verified: true,
      agent: { name: "Amina Hassan", phone: "+2348087654321" },
      rating: 4.9,
    },
    {
      id: 3,
      title: "Spacious 3-Bedroom House",
      price: 120000,
      location: "Barikin Ladi",
      beds: 3,
      baths: 2,
      wifi: true,
      verified: true,
      agent: { name: "Tunde Adeyemi", phone: "+2349012345678" },
      rating: 4.7,
    },
    {
      id: 4,
      title: "Budget-Friendly Single Room",
      price: 35000,
      location: "Nasarawa GRA",
      beds: 1,
      baths: 1,
      wifi: false,
      verified: true,
      agent: { name: "Grace Eze", phone: "+2349087654321" },
      rating: 4.6,
    },
  ];

  const toggleFavorite = (id: number) => {
    const newFavorites = new Set(favorites);
    if (newFavorites.has(id)) {
      newFavorites.delete(id);
    } else {
      newFavorites.add(id);
    }
    setFavorites(newFavorites);
  };

  const handleContactAgent = (property: typeof properties[0]) => {
    const message = `Hi KeffiRooms, I'm interested in the "${property.title}" listing at ${property.location} for ${property.price.toLocaleString()} per month. Agent: ${property.agent.name}. Please connect us. My phone: [Seeker will add their number]`;
    const whatsappUrl = `https://wa.me/2347066068160?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="min-h-screen bg-background relative overflow-hidden transition-colors duration-300">
      {/* Decorative mesh gradient - Dark mode only */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none dark:block hidden">
        <div className="absolute top-0 right-0 w-96 h-96 mesh-gradient-cool" />
      </div>

      <div className="relative z-10">
        {/* Navigation */}
        <nav className="sticky top-0 z-50 backdrop-blur-md bg-white/40 dark:bg-black/40 border-b border-black/10 dark:border-white/10 transition-colors duration-300">
          <div className="container flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg glass-card flex items-center justify-center">
                <span className="material-symbols-outlined text-green-500">search</span>
              </div>
              <div>
                <h1 className="font-bold glow-text">KeffiRooms</h1>
                <p className="text-xs text-muted-foreground">Seeker</p>
              </div>
            </div>
            <Button
              onClick={() => navigate("/")}
              variant="ghost"
              size="sm"
              className="gap-2 text-muted-foreground hover:text-foreground"
            >
              <span className="material-symbols-outlined">logout</span>
              Sign Out
            </Button>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="bg-gradient-to-r from-teal-500/10 to-green-500/10 dark:from-teal-500/20 dark:to-green-500/20 backdrop-blur-md border-b border-black/10 dark:border-white/10 py-12 transition-colors duration-300">
          <div className="container space-y-6">
            <div className="animate-fade-up">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">Welcome back</h2>
              <p className="text-muted-foreground">Find your perfect room near NSUK</p>
            </div>

            {/* Search Bar */}
            <div className="flex gap-2 animate-fade-up" style={{ animationDelay: "100ms" }}>
              <div className="flex-1 relative">
                <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground">search</span>
                <Input
                  placeholder="Search by location or property name..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-12 glass-input"
                />
              </div>
              <Button className="btn-primary">Search</Button>
            </div>

            {/* Filter Chips */}
            <div className="flex gap-2 overflow-x-auto pb-2 animate-fade-up" style={{ animationDelay: "200ms" }}>
              {["All", "Verified Only", "WiFi Available", "Under 50K"].map((chip) => (
                <button
                  key={chip}
                  className="px-4 py-2 rounded-full glass-card hover:bg-white/10 dark:hover:bg-white/10 transition-colors whitespace-nowrap text-sm text-muted-foreground"
                >
                  {chip}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="container py-12">
          <div className="mb-8 animate-fade-up">
            <h3 className="text-2xl font-bold text-foreground mb-2">Featured Listings</h3>
            <p className="text-muted-foreground">{properties.length} verified properties available</p>
          </div>

          {/* Property Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {properties.map((property, idx) => (
              <div
                key={property.id}
                className="glass-card-hover overflow-hidden animate-fade-up group"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                {/* Image Container */}
                <div className="relative h-48 overflow-hidden bg-gradient-to-br from-teal-500/10 to-green-500/10">
                  <div className="w-full h-full flex items-center justify-center">
                    <span className="material-symbols-outlined text-6xl text-green-500/30">apartment</span>
                  </div>

                  {/* Verified Badge */}
                  {property.verified && (
                    <div className="absolute top-3 left-3 glow-badge animate-glow-pulse">
                      <span className="material-symbols-outlined text-sm">verified</span>
                      <span>Verified</span>
                    </div>
                  )}

                  {/* Price Tag */}
                  <div className="absolute bottom-3 right-3 glass-card px-3 py-2 rounded-lg font-bold text-green-500">
                    <span className="material-symbols-outlined text-sm inline mr-1">currency_pound</span>
                    {property.price.toLocaleString()}
                    <p className="text-xs font-normal opacity-80">/month</p>
                  </div>

                  {/* Favorite Button */}
                  <button
                    onClick={() => toggleFavorite(property.id)}
                    className="absolute top-3 right-3 w-10 h-10 rounded-full glass-card flex items-center justify-center hover:bg-white/10 dark:hover:bg-white/10 transition-colors"
                  >
                    <Heart
                      className={`w-5 h-5 ${
                        favorites.has(property.id)
                          ? "fill-red-500 text-red-500"
                          : "text-muted-foreground"
                      }`}
                    />
                  </button>
                </div>

                {/* Content */}
                <div className="p-4 space-y-3">
                  <div>
                    <h4 className="font-bold text-foreground text-lg mb-1">{property.title}</h4>
                    <div className="flex items-center gap-1 text-muted-foreground text-sm">
                      <span className="material-symbols-outlined text-sm">location_on</span>
                      {property.location}
                    </div>
                  </div>

                  {/* Amenities */}
                  <div className="flex gap-4 text-sm text-muted-foreground border-t border-b border-black/10 dark:border-white/10 py-3">
                    <div className="flex items-center gap-1">
                      <span className="material-symbols-outlined text-sm">bed</span>
                      {property.beds} Bed{property.beds > 1 ? "s" : ""}
                    </div>
                    <div className="flex items-center gap-1">
                      <span className="material-symbols-outlined text-sm">bathroom</span>
                      {property.baths} Bath
                    </div>
                    {property.wifi && (
                      <div className="flex items-center gap-1">
                        <span className="material-symbols-outlined text-sm">wifi</span>
                        WiFi
                      </div>
                    )}
                  </div>

                  {/* Agent Info */}
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs text-muted-foreground">Agent</p>
                      <p className="font-semibold text-foreground">{property.agent.name}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-muted-foreground">Rating</p>
                      <p className="font-semibold text-green-500">{property.rating}</p>
                    </div>
                  </div>

                  {/* CTA Buttons */}
                  <div className="flex gap-2 pt-2">
                    <Button
                      onClick={() => handleContactAgent(property)}
                      className="flex-1 btn-primary text-sm h-9 group/btn"
                    >
                      <span className="material-symbols-outlined text-sm mr-1">chat</span>
                      Contact
                    </Button>
                    <Button variant="outline" size="sm" className="h-9 glass-card">
                      <span className="material-symbols-outlined text-sm">share</span>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12 animate-fade-up" style={{ animationDelay: "400ms" }}>
            <Button className="btn-secondary">Load More Listings</Button>
          </div>
        </section>
      </div>
    </div>
  );
}
