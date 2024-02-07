import { useEffect, useState } from "react";
import React from 'react';
import { getCategories } from "@/services";
import Link from "next/link";

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories()
      .then((newCat) => 
      setCategories(newCat))
  }, []);

  return (
    <div className="bg-white shadow-lg rounded-lg p-8 mb-8 pb-12">
      <h3 className="text-xl mb-8 font-semibold border-b pb-4">
        categories
      </h3>
      {categories && categories.length > 0 ? (
        categories.map((category) => (
          <Link key={category.slug} href={`/category/${category.slug}`}>
            <span className="cursor-pointer block pb-3 mb-3">
              {category.name}
            </span>
          </Link>
        ))
      ) : (
        <p>No categories available.</p>
      )}
    </div>
  );
}

export default Categories;
