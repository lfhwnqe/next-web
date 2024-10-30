"use client";
import React, { useState, useRef } from "react";
import { Upload, X, ImagePlus, Loader2 } from "lucide-react";
import Image from "next/image";

interface PreviewImage {
  url: string;
  file: File;
}

export default function ImageToGif() {
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [previewImages, setPreviewImages] = useState<PreviewImage[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [gifUrl, setGifUrl] = useState<string>("");
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(event.target.files || []);
    // Only accept image files
    const imageFiles = files.filter((file) => file.type.startsWith("image/"));

    setSelectedFiles((prev) => [...prev, ...imageFiles]);

    // Create preview URLs
    const newPreviews = imageFiles.map((file) => ({
      url: URL.createObjectURL(file),
      file: file,
    }));
    setPreviewImages((prev) => [...prev, ...newPreviews]);
  };

  const removeImage = (index: number) => {
    setSelectedFiles((prev) => prev.filter((_, i) => i !== index));
    setPreviewImages((prev) => {
      URL.revokeObjectURL(prev[index].url);
      return prev.filter((_, i) => i !== index);
    });
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const files = Array.from(event.dataTransfer.files);
    const imageFiles = files.filter((file) => file.type.startsWith("image/"));

    setSelectedFiles((prev) => [...prev, ...imageFiles]);

    const newPreviews = imageFiles.map((file) => ({
      url: URL.createObjectURL(file),
      file: file,
    }));
    setPreviewImages((prev) => [...prev, ...newPreviews]);
  };

  const handleCreateGif = async () => {
    if (selectedFiles.length < 2) {
      alert("Please select at least 2 images");
      return;
    }

    setIsLoading(true);
    const formData = new FormData();
    selectedFiles.forEach((file) => {
      formData.append("images", file);
    });

    try {
      const response = await fetch("/api/create-gif", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) throw new Error("Failed to create GIF");

      const data: { gifUrl: string } = await response.json();
      setGifUrl(data.gifUrl);
    } catch (error) {
      console.error("Error creating GIF:", error);
      alert("Failed to create GIF. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4">Image to GIF Converter</h1>
        <p className="text-gray-600">
          Upload multiple images to create an animated GIF
        </p>
      </div>

      {/* Upload Area */}
      <div
        className="border-2 border-dashed border-gray-300 rounded-lg p-8 mb-6 text-center"
        onDrop={handleDrop}
        onDragOver={(e) => e.preventDefault()}
      >
        <input
          type="file"
          ref={fileInputRef}
          onChange={handleFileSelect}
          multiple
          accept="image/*"
          className="hidden"
        />

        <button
          onClick={() => fileInputRef.current?.click()}
          className="flex items-center justify-center gap-2 mx-auto mb-4 p-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
        >
          <ImagePlus className="w-5 h-5" />
          Select Images
        </button>

        <p className="text-gray-500">or drag and drop images here</p>
      </div>

      {/* Preview Area */}
      {previewImages.length > 0 && (
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-4">Selected Images</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {previewImages.map((preview, index) => (
              <div key={index} className="relative w-full h-32">
                <Image
                  src={preview.url}
                  alt={`Preview ${index + 1}`}
                  fill
                  className="object-cover rounded-lg"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
                <button
                  onClick={() => removeImage(index)}
                  className="absolute top-1 right-1 p-1 bg-red-500 text-white rounded-full hover:bg-red-600 z-10"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Create GIF Button */}
      <button
        onClick={handleCreateGif}
        disabled={isLoading || selectedFiles.length < 2}
        className="w-full p-4 bg-green-500 text-white rounded-lg hover:bg-green-600 disabled:bg-gray-300 disabled:cursor-not-allowed flex items-center justify-center gap-2"
      >
        {isLoading ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin" />
            Creating GIF...
          </>
        ) : (
          <>
            <Upload className="w-5 h-5" />
            Create GIF
          </>
        )}
      </button>

      {/* Result Area */}
      {gifUrl && (
        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-4">Your GIF</h2>
          <div className="border rounded-lg p-4">
            <div className="relative w-full h-[400px]">
              <Image
                src={gifUrl}
                alt="Generated GIF"
                fill
                className="object-contain"
                sizes="100vw"
              />
            </div>
            <a
              href={gifUrl}
              download="animated.gif"
              className="block mt-4 text-center p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Download GIF
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
