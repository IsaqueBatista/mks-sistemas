"use client";
import React from "react";

import Header from "../components/Header";
import Card from "../components/Card";
import Footer from "../components/Footer";
import ShoppingCart from "../components/ShoppingCart";

export default function Home() {
  return (
    <>
      <ShoppingCart />
      <Header />
      <Card />
      <Footer />
    </>
  );
}
