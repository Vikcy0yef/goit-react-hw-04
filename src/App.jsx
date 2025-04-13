import {  useEffect, useState } from 'react'
import './App.css'
import SearchBar from './components/SearchBar/SearchBar'
import { Toaster } from "react-hot-toast";
import ImageGallery from './components/ImageGallery/ImageGallery';
import Loader from './components/Loader/Loader';
import ErrorMessage from './components/ErrorMessage/ErrorMessage';
import ImageModal from "./components/ImageModal/ImageModal"; 
import LoadMoreBtn from './components/LoadMoreBtn/LoadMoreBtn';

const ACCESS_KEY = import.meta.env.VITE_UNSPLASH_KEY ||"UuoizzBsMV3azLMsSNexiUr9lfCZn0ZCgDzzKqvdCPo"
function App() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
const [selectedImage, setSelectedImage] = useState(null);
const [isModalOpen, setIsModalOpen] = useState(false);


  useEffect(() => {
    const storedImages = localStorage.getItem("images");
    if (storedImages) {
      setImages(JSON.parse(storedImages))
    }
  }, []);
  
  useEffect(() => {
    localStorage.setItem("images", JSON.stringify(images))
  }, [images]);
  
  const fetchImages = async (searchQuery, pageNumber) => {
    setLoading(true);
    setError(null)
    try {
      const response = await fetch(
        `https://api.unsplash.com/search/photos?query=${searchQuery}&per_page=12&client_id=${ACCESS_KEY}`
      );
      if (!response.ok) {
       throw new Error("Failed to fetch images. Try again later.");
      }
      const data = await response.json();
      const formatted = data.results.map((img) => ({
        id: img.id,
        src: img.urls.small,
        alt: img.alt_description || "Unsplash image"
      }));
      setImages((prev) =>
        pageNumber === 1 ? formatted : [...prev, ...formatted]);
    } catch (err) {
     setError(err.message)
    } finally {
      setLoading(false)
    }
  };
  const handleSearchSubmit = (newQuery) => {
    setQuery(newQuery);
    setPage(1)
    setImages([])
    fetchImages(newQuery, 1)
  };
  const handleLoadMore = () => {
    const nextPage = page + 1;
    setPage(nextPage);
    fetchImages(query, nextPage);
  }
  const openModal = (image) => {
  setSelectedImage(image);
  setIsModalOpen(true);
};

const closeModal = () => {
  setSelectedImage(null);
  setIsModalOpen(false);
};

  return (
    
    <>
      <SearchBar onSubmit={handleSearchSubmit} />
      {error ? (
        <ErrorMessage message={error} />
      ) : (
        <>
          <ImageGallery images={images} onImageClick={openModal}/>
          {images.length > 0 && !loading && (
            <LoadMoreBtn onClick={handleLoadMore} />
          )}
        </>
      )}
      {loading && <Loader />}
      <Toaster position="top-right" />
      <ImageModal
  isOpen={isModalOpen}
  onRequestClose={closeModal}
  image={selectedImage}
/>
    </>
  )
}

export default App
