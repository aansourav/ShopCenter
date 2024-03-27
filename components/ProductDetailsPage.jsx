"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const ProductDetailsPage = ({ product }) => {
    const {
        title,
        category,
        description,
        price,
        discountPercentage,
        thumbnail,
        images,
        rating,
    } = product;

    const [picture, setPicture] = useState(thumbnail);

    return (
        <main className="h-screen">
            <section className="bg-[#fafaf2] h-full py-20">
                <div className="w-11/12 lg:w-8/12 max-w-7xl mx-auto flex flex-col gap-12 lg:flex-row items-center justify-between">
                    <div className="w-full lg:w-8/12 border border-slate-500/20 p-4">
                        <Image
                            src={picture}
                            className="w-[400px] h-[500px] mx-auto object-cover"
                            alt=""
                            width="400"
                            height="500"
                        />

                        <div className="flex gap-4 mt-4">
                            {images &&
                                images.map((image, index) => (
                                    <Image
                                        onClick={() => setPicture(image)}
                                        key={index}
                                        src={image}
                                        className="w-[100px] h-[100px] mx-auto border object-cover hover:cursor-pointer"
                                        alt=""
                                        width="400"
                                        height="500"
                                    />
                                ))}
                        </div>
                    </div>

                    <div className="w-full lg:w-5/12">
                        <h1 className="italic text-xl lg:text-3xl font-serif font-semibold">
                            {title}
                        </h1>
                        <Link
                            className="text-[#919090] my-3"
                            href={`/category/${category.toLowerCase()}`}
                        >
                            {category}
                        </Link>
                        <div className="mt-3 flex items-center justify-start gap-1">
                            {Array.from(
                                { length: Math.round(rating) },
                                (_, i) => (
                                    <Image
                                        key={i}
                                        src="/assets/svg/star.svg"
                                        width="20"
                                        height="20"
                                        alt=""
                                    />
                                )
                            )}
                        </div>
                        <hr className="my-5 bg-black" />

                        <div>
                            <p className="my-3">
                                <span className="text-rose-600 opacity-60 line-through">
                                    ${price}
                                </span>
                                &nbsp;
                                <span className="font-bold text-2xl">
                                    {" "}
                                    $
                                    {(
                                        price -
                                        (price * discountPercentage) / 100
                                    ).toFixed(2)}
                                </span>
                            </p>
                        </div>
                        <div>
                            <p className="leading-7">{description}</p>

                            <button className="w-full bg-[#1a1a1a] hover:bg-[#3a3a3a] text-center py-3 mt-5 text-white rounded-full">
                                Add To Cart - $
                                {(
                                    price -
                                    (price * discountPercentage) / 100
                                ).toFixed(2)}
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default ProductDetailsPage;
