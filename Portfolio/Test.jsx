// CertificatesSection.jsx
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { FiDownload, FiSearch } from "react-icons/fi";
import ph_c from "../../assets/images/certificate_ph.jpg";
import CertificatesModal from "./CertificateModal";

const certificates = [
  { id: 1, title: "Full-Stack Web Development", issuer: "Coursera", img: ph_c },
  {
    id: 2,
    title: "Python for Everybody",
    issuer: "University of Michigan",
    img:
      "https://cdn-ghkoj.nitrocdn.com/kjYfdEBKRwdYwvHQyjaYBdTGFpFGjqYW/assets/images/optimized/rev-87469d3/sertifier.com/blog/wp-content/uploads/2023/04/sertifier-certificate-design.jpg",
  },
  {
    id: 3,
    title: "React Developer Certificate",
    issuer: "Meta",
    img: "https://printposters.in/public/uploads/canvas-prints/1735819480.webp",
  },
  {
    id: 4,
    title: "Backend Development with Django",
    issuer: "Udemy",
    img: "https://certificatesinn.com/wp-content/uploads/2024/06/Training-Completion-Certificate-4.png",
  },
];

const CertificatesSection = () => {
  const [selectedCert, setSelectedCert] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = (cert) => {
    setSelectedCert(cert);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    // small timeout to clear selected after animation (if you add animation later)
    setTimeout(() => setSelectedCert(null), 200);
  };

  return (
    <section id="certificates" className="py-8 sm:py-12 bg-[#0B1221] text-white relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-10">
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-6 sm:mb-8">
          Certificates & Achievements
        </h2>

        <Swiper
          modules={[Navigation, Pagination, Autoplay, EffectFade]}
          navigation={{ nextEl: ".custom-next", prevEl: ".custom-prev" }}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3500, disableOnInteraction: false }}
          loop={true}
          slidesPerView={1}
          spaceBetween={16}
          speed={700}
          effect="fade"
          fadeEffect={{ crossFade: true }}
          autoHeight={true}
          className="w-full rounded-xl sm:rounded-2xl overflow-visible relative"
        >
          {certificates.map((cert) => (
            <SwiperSlide key={cert.id} className="flex items-center justify-center">
              <div className="bg-[#0e1730] rounded-xl sm:rounded-2xl shadow-lg overflow-hidden flex flex-col md:flex-row items-stretch w-full min-h-[400px] sm:min-h-auto">
                {/* Image block */}
                <div className="w-full md:w-1/2 lg:w-[600px] flex-shrink-0 p-3 sm:p-4 md:p-6 flex items-center justify-center bg-transparent">
                  <img
                    src={cert.img}
                    alt={cert.title}
                    className="w-full h-40 sm:h-48 md:h-56 lg:h-64 object-contain rounded-md"
                  />
                </div>

                {/* Text block */}
                <div className="p-4 sm:p-6 md:p-8 lg:p-10 text-center md:text-left flex-1 flex flex-col justify-center min-w-0">
                  <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold mb-2 text-teal-400 line-clamp-2">
                    {cert.title}
                  </h3>
                  <p className="text-gray-300 text-sm sm:text-base mb-2">
                    Issued by: <span className="font-medium">{cert.issuer}</span>
                  </p>
                  <p className="text-gray-400 text-xs sm:text-sm mb-3">
                    Completed: <span className="font-medium">Jan 2025</span>
                  </p>
                  <p className="text-gray-300 text-xs sm:text-sm mb-4">
                    Skills learned: <span className="font-medium">Web Development, React, Django, Python</span>
                  </p>

                  {/* Buttons */}
                  <div className="mt-2 flex flex-col sm:flex-row gap-2 sm:gap-3 w-full">
                    <a
                      href={cert.img}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto bg-teal-500 hover:bg-teal-600 text-white font-medium px-4 py-2.5 sm:py-2 rounded-lg transition-all duration-200 flex items-center justify-center gap-2 text-sm sm:text-base"
                    >
                      <FiDownload size={16} />
                      <span>Download</span>
                    </a>

                    <button
                      onClick={() => openModal(cert)}
                      className="w-full sm:w-auto bg-gray-700 hover:bg-gray-600 text-white font-medium px-4 py-2.5 sm:py-2 rounded-lg transition-all duration-200 flex items-center justify-center gap-2 text-sm sm:text-base"
                    >
                      <FiSearch size={16} />
                      <span>View</span>
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}

          {/* Navigation arrows */}
          <div
            className="custom-prev flex absolute left-1 sm:left-2 top-1/2 -translate-y-1/2 z-20 text-white/90 bg-teal-600/20 p-1.5 sm:p-2 md:p-3 rounded-full hover:bg-teal-600/40 transition-all cursor-pointer"
            aria-hidden="true"
          >
            ❮
          </div>

          <div
            className="custom-next flex absolute right-1 sm:right-2 top-1/2 -translate-y-1/2 z-20 text-white/90 bg-teal-600/20 p-1.5 sm:p-2 md:p-3 rounded-full hover:bg-teal-600/40 transition-all cursor-pointer"
            aria-hidden="true"
          >
            ❯
          </div>
        </Swiper>

        {/* Modal (imported component) */}
        <CertificatesModal open={modalOpen} onClose={closeModal} cert={selectedCert} />
      </div>
    </section>
  );
};

export default CertificatesSection;
