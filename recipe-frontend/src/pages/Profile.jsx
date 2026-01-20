// src/pages/Profile.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import { useAuth } from "../context/AuthContext";
import Image from "../components/ui/Image";

// Local story images
import friedChicken from "../assets/images/stories/fried-chicken.jpg";
import appleCake from "../assets/images/stories/apple-cake.jpg";
import bread from "../assets/images/stories/bread.jpg";

// Stories data
const stories = [
  {
    id: 1,
    image: friedChicken,
    title: "The Secret to Shatter-Crisp Fried Chicken Coating",
    description:
      "A practical story of how crunchy fried chicken coating happens: starch choice, light hydration, and a dry, buttery finish.",
    author: "JojoM",
    date: "1/5/2026",
  },
  {
    id: 2,
    image: appleCake,
    title: "Why Yogurt Changed This Apple Cake More Than Any Recipe",
    description:
      "A closer look at the small technique choices that keep apple cake moist: why yogurt, ribbon stage, and warm butter deliver a tender, soft crumb every time.",
    author: "JojoM",
    date: "1/2/2026",
  },
  {
    id: 3,
    image: bread,
    title: "Why I Switched from KitchenAid to Kenwood - A Baker's Perspective",
    description:
      "A baker's practical comparison of long-mix performance, safety details, and attachment design that led to a KitchenAid-to-Kenwood switch.",
    author: "RecipeShare Editorial",
    date: "12/29/2025",
  },
  {
    id: 4,
    image: bread,
    title: "Almond Rituals and the Modern Bake",
    description:
      "Why almond-forward bakes feel so contemporary: clean flavors, flexible textures, and a pantry ritual that keeps sweets grounded.",
    author: "RecipeShare Editorial",
    date: "12/25/2025",
  },
];

export default function Profile() {
  const { user } = useAuth();

  return (
    <div className="container py-5">
      <h2 className="mb-4">{user?.username || "Guest"}</h2>

      <section className="stories-section">
        <h3 className="mb-4">Stories</h3>
        <p>
          Editorial perspectives, culture, and technique beyond the recipe card.
        </p>

        <div className="row g-4">
          {stories.map((story) => (
            <div key={story.id} className="col-md-6 col-lg-4">
              <motion.div
                className="card h-100 story-card position-relative overflow-hidden"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                {/* Hover overlay */}
                <div className="overlay d-flex align-items-center justify-content-center">
                  <h5 className="text-white text-center px-2">{story.title}</h5>
                </div>

                {/* Image with skeleton */}
                <SkeletonImage src={story.image} alt={story.title} />

                <div className="card-body">
                  <p className="card-text">{story.description}</p>
                  <p className="text-muted small mb-0">
                    {story.author} · {story.date}
                  </p>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

// ----------------------
// SkeletonImage Component
// ----------------------
function SkeletonImage({ src, alt }) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="position-relative">
      {/* Skeleton placeholder */}
      {!loaded && <div className="skeleton-loader"></div>}

      <img
        src={src}
        alt={alt}
        loading="lazy"
        className={loaded ? "image-visible" : "image-hidden"}
        style={{
          width: "100%",
          height: "200px",        // fixed height for all images
          objectFit: "cover",     // ensures uniform crop
          borderTopLeftRadius: "0.375rem",
          borderTopRightRadius: "0.375rem",
          transition: "opacity 0.3s ease-in-out",
        }}
        onLoad={() => setLoaded(true)}
      />
    </div>
  );
}
