"use client"; // Mark this component as a Client Component

import React, { useState } from "react";
import { Section } from "@/components/ui/section";
import styles from "./Slider.module.css";

type SliderProps = {
    sliders: readonly {
        id: string;
        imageUrl: string;
        redirectUrl: string;
        title: string;
    }[];
};
const Slider: React.FC<SliderProps> = ({ sliders }) => {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const [selectedTitle, setSelectedTitle] = useState<string | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleImageClick = (imageUrl: string, title: string) => {
        setSelectedImage(imageUrl);
        setSelectedTitle(title);
        setIsModalOpen(true);
    };

    const handleModalClose = () => {
        setIsModalOpen(false);
        setSelectedImage(null);
        setSelectedTitle(null);
    };

    return (
        <Section>
            <h2 className="text-4xl font-bold mb-8">Certificates</h2>
            
            {/* Centered grid layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center max-w-4xl mx-auto">
                {sliders.map((slider) => (
                    <div
                        key={slider.id}
                        className="relative group cursor-pointer max-w-md"
                        onClick={() => handleImageClick(slider.imageUrl, slider.title)}
                    >
                        {/* Certificate image */}
                        <img
                            src={slider.imageUrl}
                            alt={slider.title}
                            className="w-full h-64 object-cover rounded-lg shadow-lg transition-all duration-300 group-hover:scale-105 group-hover:shadow-xl"
                        />

                        {/* Hover text overlay */}
                        <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-center justify-center">
                            <span className="text-white text-lg font-semibold text-center px-4 py-2 bg-black bg-opacity-70 rounded-md">
                                Click to view full size
                            </span>
                        </div>
                        
                        {/* Bottom title */}
                        <div className="mt-4 text-center">
                            <h3 className="text-lg font-medium text-gray-800">
                                {slider.title}
                            </h3>
                        </div>
                    </div>
                ))}
            </div>

            {/* Modal for full-size image view */}
            {isModalOpen && selectedImage && (
                <div 
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75" 
                    onClick={handleModalClose}
                >
                    <div className="relative max-w-5xl max-h-[90vh] p-4" onClick={(e) => e.stopPropagation()}>
                        <button
                            onClick={handleModalClose}
                            className="absolute top-2 right-2 text-white text-3xl font-bold z-10 bg-black bg-opacity-50 rounded-full w-10 h-10 flex items-center justify-center hover:bg-opacity-75 transition-all"
                        >
                            ×
                        </button>
                        <img
                            src={selectedImage}
                            alt={selectedTitle || "Certificate"}
                            className="max-w-full max-h-full object-contain rounded-lg"
                        />
                    </div>
                </div>
            )}
        </Section>
    );
};

export default Slider;
